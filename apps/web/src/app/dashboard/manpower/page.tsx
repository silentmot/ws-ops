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
import { ManpowerForm } from '@/components/forms/manpower-form';
import { DEFAULT_SITE_CODE } from '@deskops/constants';
import { toast } from 'sonner';

interface ManpowerLog {
  id: string;
  date: string;
  headcount: number;
  hours: number;
  shift: string | null;
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
      return format(new Date(row.getValue('date')), 'MMM dd, yyyy');
    },
  },
  {
    id: 'roleLabel',
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
      return row.getValue<number>('headcount');
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
    accessorKey: 'shift',
    header: 'Shift',
    cell: ({ row }) => {
      const shift = row.getValue<string | null>('shift');
      return shift ? <Badge variant="outline">{shift}</Badge> : '-';
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

export default function ManpowerPage() {
  const [manpowerLogs, setManpowerLogs] = useState<ManpowerLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedSite] = useState(DEFAULT_SITE_CODE);

  const fetchManpowerLogs = async () => {
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

      const response = await fetch(`/api/manpower?${params}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch manpower logs');
      }

      setManpowerLogs(data.manpowerLogs);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Failed to fetch manpower logs'
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchManpowerLogs();
  }, [selectedSite]);

  const handleFormSuccess = () => {
    setDialogOpen(false);
    fetchManpowerLogs();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Manpower Attendance</h1>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Manpower Log
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add Manpower Log</DialogTitle>
            </DialogHeader>
            <ManpowerForm siteId={selectedSite} onSuccess={handleFormSuccess} />
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div className="py-8 text-center">Loading...</div>
      ) : (
        <DataTable
          columns={columns}
          data={manpowerLogs}
          searchKey="roleLabel"
          searchPlaceholder="Search roles..."
        />
      )}
    </div>
  );
}
