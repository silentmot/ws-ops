'use client';

import { useState, useEffect } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Button, Badge } from '@deskops/ui';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@deskops/ui';
import { Plus, ArrowUpDown } from 'lucide-react';
import { format } from 'date-fns';
import { DataTable } from '@/components/data-table/data-table';
import { ManpowerLogForm } from '@/components/forms/manpower-form';
import { DEFAULT_SITE_ID, ShiftType } from '@deskops/constants';
import { toast } from 'sonner';
import {
  ManpowerAttendanceChart,
  ManpowerAttendanceData,
} from '@/components/charts/manpower-attendance-chart';

interface ManpowerLog {
  id: string;
  date: string;
  shift: ShiftType | null;
  headcount: number;
  hours: number;
  notes: string | null;
  role: {
    code: string;
    name: string;
  };
  site: {
    code: string;
    name: string;
  };
  createdAt: string;
}

const columns: ColumnDef<ManpowerLog>[] = [
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
      const date = new Date(row.getValue('date'));
      return format(date, 'MMM dd, yyyy');
    },
  },
  {
    id: 'role',
    accessorFn: (row) => `${row.role.code} - ${row.role.name}`,
    header: 'Role',
    cell: ({ row }) => {
      return `${row.original.role.code} - ${row.original.role.name}`;
    },
  },
  {
    accessorKey: 'headcount',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Headcount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="tabular-nums">{row.getValue('headcount')}</div>
      );
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
      const hours = row.getValue('hours') as number;
      return <div className="tabular-nums">{hours.toFixed(2)}</div>;
    },
  },
  {
    accessorKey: 'shift',
    header: 'Shift',
    cell: ({ row }) => {
      const shift = row.getValue('shift') as string | null;
      return shift ? <Badge>{shift}</Badge> : <span>-</span>;
    },
  },
];

export default function ManpowerPage(): React.JSX.Element {
  const [manpowerLogs, setManpowerLogs] = useState<ManpowerLog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [selectedSite] = useState<string>(DEFAULT_SITE_ID);
  const [chartData, setChartData] = useState<ManpowerAttendanceData[]>([]);

  const transformDataForChart = (logs: ManpowerLog[]): ManpowerAttendanceData[] => {
    const roleMap = new Map<string, ManpowerAttendanceData>();

    logs.forEach((log) => {
      const roleName = `${log.role.code} - ${log.role.name}`;

      if (!roleMap.has(roleName)) {
        roleMap.set(roleName, {
          roleName,
          morning: 0,
          afternoon: 0,
          night: 0,
          noShift: 0,
        });
      }

      const roleData = roleMap.get(roleName);
      if (roleData) {
        switch (log.shift) {
          case 'MORNING':
            roleData.morning += log.headcount;
            break;
          case 'AFTERNOON':
            roleData.afternoon += log.headcount;
            break;
          case 'NIGHT':
            roleData.night += log.headcount;
            break;
          default:
            roleData.noShift += log.headcount;
            break;
        }
      }
    });

    return Array.from(roleMap.values());
  };

  const fetchManpowerLogs = async (): Promise<void> => {
    try {
      const dateFrom = new Date();
      dateFrom.setDate(dateFrom.getDate() - 30);
      const dateTo = new Date();

      const params = new URLSearchParams({
        siteId: selectedSite,
        dateFrom: dateFrom.toISOString(),
        dateTo: dateTo.toISOString(),
      });

      const response = await fetch(`/api/manpower?${params.toString()}`);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Failed to fetch manpower logs');
      }

      const data = await response.json();

      const logs = data.manpowerLogs || [];
      setManpowerLogs(logs);

      const transformedData = transformDataForChart(logs);
      setChartData(transformedData);
    } catch (error) {
      toast.error('Failed to load manpower data');
      console.error('Error fetching manpower logs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchManpowerLogs();
  }, [selectedSite]);

  const handleFormSuccess = (): void => {
    setDialogOpen(false);
    void fetchManpowerLogs();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Manpower Attendance</h1>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Manpower Log
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Manpower Log</DialogTitle>
            </DialogHeader>
            <ManpowerLogForm
              siteId={selectedSite}
              onSuccess={handleFormSuccess}
            />
          </DialogContent>
        </Dialog>
      </div>

      <ManpowerAttendanceChart data={chartData} isLoading={loading} />

      {loading ? (
        <div>Loading...</div>
      ) : (
        <DataTable
          columns={columns}
          data={manpowerLogs}
          searchKey="role"
          searchPlaceholder="Search roles..."
        />
      )}
    </div>
  );
}
