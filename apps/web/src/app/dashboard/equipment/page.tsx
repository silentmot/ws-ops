'use client';

import { useState, useEffect } from 'react';
import type { ColumnDef } from '@tanstack/react-table';
import {
  Button,
  Badge,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@deskops/ui';
import { Plus, ArrowUpDown } from 'lucide-react';
import { format } from 'date-fns';
import { DataTable } from '@/components/data-table/data-table';
import { EquipmentLogForm } from '@/components/forms/equipment-form';
import { DEFAULT_SITE_ID, SHIFT_DURATION_HOURS } from '@deskops/constants';
import type { EquipmentStatus } from '@deskops/constants';
import { toast } from 'sonner';
import { EquipmentUtilizationChart, type EquipmentUtilizationData } from '@/components/charts/equipment-utilization-chart';

interface EquipmentLog {
  id: string;
  date: string;
  shift: string | null;
  hours: number;
  count: number;
  status: string | null;
  notes: string | null;
  equipment: {
    code: string;
    name: string;
    type: string;
  };
  site: {
    code: string;
    name: string;
  };
  createdAt: string;
}

type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning';

const EQUIPMENT_STATUS_BADGE_VARIANT: Record<EquipmentStatus, BadgeVariant> = {
  OPERATIONAL: 'default',
  MAINTENANCE: 'secondary',
  BREAKDOWN: 'destructive',
  IDLE: 'outline',
};

const columns: ColumnDef<EquipmentLog>[] = [
  {
    accessorKey: 'date',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return format(new Date(row.getValue('date')), 'MMM dd, yyyy');
    },
  },
  {
    id: 'equipmentLabel',
    accessorFn: (row) => `${row.equipment.code} - ${row.equipment.name}`,
    header: 'Equipment',
    cell: ({ row }) => {
      const equipment = row.original.equipment;
      return `${equipment.code} - ${equipment.name}`;
    },
  },
  {
    accessorKey: 'hours',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Hours
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const hours = parseFloat(row.getValue('hours'));
      return <span className="tabular-nums">{hours.toFixed(2)}</span>;
    },
  },
  {
    accessorKey: 'count',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Count
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const count = row.getValue('count') as number;
      return <span className="tabular-nums">{count}</span>;
    },
  },
  {
    accessorKey: 'shift',
    header: 'Shift',
    cell: ({ row }) => {
      const shift = row.getValue('shift') as string | null;
      return shift ? <Badge>{shift}</Badge> : '-';
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as string | null;
      if (!status) return '-';

      const variant = EQUIPMENT_STATUS_BADGE_VARIANT[status as EquipmentStatus] ?? 'default';

      return <Badge variant={variant}>{status}</Badge>;
    },
  },
];

export default function EquipmentPage(): React.JSX.Element {
  const [equipmentLogs, setEquipmentLogs] = useState<EquipmentLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedSite] = useState(DEFAULT_SITE_ID);
  const [chartData, setChartData] = useState<EquipmentUtilizationData[]>([]);

  const transformDataForChart = (logs: EquipmentLog[]): EquipmentUtilizationData[] => {
    const equipmentMap = new Map<string, { operationalHours: number; count: number }>();

    logs.forEach((log) => {
      const key = log.equipment.name;
      const existing = equipmentMap.get(key) ?? { operationalHours: 0, count: 0 };
      equipmentMap.set(key, {
        operationalHours: existing.operationalHours + log.hours,
        count: existing.count + 1,
      });
    });

    return Array.from(equipmentMap.entries()).map(([equipmentName, data]) => {
      const avgOperationalHours = data.operationalHours / data.count;
      const idleHours = Math.max(0, SHIFT_DURATION_HOURS - avgOperationalHours);

      return {
        date: '',
        equipmentName,
        operationalHours: avgOperationalHours,
        idleHours,
      };
    });
  };

  const fetchEquipmentLogs = async (): Promise<void> => {
    try {
      const dateFrom = new Date();
      dateFrom.setDate(dateFrom.getDate() - 30);
      const dateTo = new Date();

      const params = new URLSearchParams({
        siteId: selectedSite,
        dateFrom: dateFrom.toISOString(),
        dateTo: dateTo.toISOString(),
      });

      const response = await fetch(`/api/equipment?${params.toString()}`);

      if (!response.ok) {
        throw new Error('Failed to fetch equipment data');
      }

      const data = await response.json();
      const logs = data.equipmentLogs ?? [];
      setEquipmentLogs(logs);
      setChartData(transformDataForChart(logs));
    } catch (_error) {
      toast.error('Failed to load equipment data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchEquipmentLogs();
  }, [selectedSite]);

  const handleFormSuccess = (): void => {
    setDialogOpen(false);
    void fetchEquipmentLogs();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Equipment Performance</h1>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Equipment Log
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Equipment Log</DialogTitle>
            </DialogHeader>
            <EquipmentLogForm
              siteId={selectedSite}
              onSuccess={handleFormSuccess}
            />
          </DialogContent>
        </Dialog>
      </div>

      <EquipmentUtilizationChart data={chartData} isLoading={loading} />

      {loading ? (
        <div>Loading...</div>
      ) : (
        <DataTable
          columns={columns}
          data={equipmentLogs}
          searchKey="equipmentLabel"
          searchPlaceholder="Search equipment..."
        />
      )}
    </div>
  );
}
