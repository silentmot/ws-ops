'use client';

import { useState, useEffect } from 'react';
import type { ColumnDef } from '@tanstack/react-table';
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Badge,
} from '@deskops/ui';
import { Plus, ArrowUpDown } from 'lucide-react';
import { format } from 'date-fns';
import { DataTable } from '@/components/data-table/data-table';
import { EquipmentForm } from '@/components/forms/equipment-form';
import { DEFAULT_SITE_ID } from '@deskops/constants';
import { toast } from 'sonner';

interface EquipmentLog {
  id: string;
  date: string;
  hours: number;
  count: number;
  shift: string | null;
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
      return `${row.original.equipment.code} - ${row.original.equipment.name}`;
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
      return (
        <span className="tabular-nums">
          {row.getValue<number>('hours').toFixed(2)}
        </span>
      );
    },
  },
  {
    accessorKey: 'count',
    header: 'Count',
    cell: ({ row }) => {
      return row.getValue<number>('count');
    },
  },
  {
    accessorKey: 'shift',
    header: 'Shift',
    cell: ({ row }) => {
      const shift = row.getValue<string | null>('shift');
      return shift ? <Badge variant="outline">{shift}</Badge> : '-';
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue<string | null>('status');
      if (!status) return '-';

      const variantMap: Record<
        string,
        'default' | 'secondary' | 'destructive' | 'outline'
      > = {
        OPERATIONAL: 'default',
        MAINTENANCE: 'secondary',
        BREAKDOWN: 'destructive',
        IDLE: 'outline',
      };

      return <Badge variant={variantMap[status] || 'outline'}>{status}</Badge>;
    },
  },
  {
    accessorKey: 'notes',
    header: 'Notes',
    cell: ({ row }) => {
      const notes = row.getValue<string | null>('notes');
      if (!notes) return '-';
      return notes.length > 50 ? notes.substring(0, 50) + '...' : notes;
    },
  },
];

export default function EquipmentPage() {
  const [equipmentLogs, setEquipmentLogs] = useState<EquipmentLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedSite] = useState(DEFAULT_SITE_ID);

  const fetchEquipmentLogs = async () => {
    try {
      setLoading(true);
      const dateFrom = new Date();
      dateFrom.setDate(dateFrom.getDate() - 30);
      const dateTo = new Date();

      const params = new URLSearchParams({
        siteId: selectedSite,
        dateFrom: dateFrom.toISOString(),
        dateTo: dateTo.toISOString(),
      });

      const response = await fetch(`/api/equipment?${params}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch equipment logs');
      }

      setEquipmentLogs(data.equipmentLogs);
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : 'Failed to fetch equipment logs'
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEquipmentLogs();
  }, [selectedSite]);

  const handleFormSuccess = () => {
    setDialogOpen(false);
    fetchEquipmentLogs();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Equipment Tracking</h1>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Equipment Log
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add Equipment Log</DialogTitle>
            </DialogHeader>
            <EquipmentForm
              siteId={selectedSite}
              onSuccess={handleFormSuccess}
            />
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div className="py-8 text-center">Loading...</div>
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
