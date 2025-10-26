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
} from '@deskops/ui';
import { Plus, ArrowUpDown } from 'lucide-react';
import { format } from 'date-fns';
import { DataTable } from '@/components/data-table/data-table';
import { DispatchForm } from '@/components/forms/dispatch-form';
import { DEFAULT_SITE_ID } from '@deskops/constants';
import { toast } from 'sonner';

interface Dispatch {
  id: string;
  date: string;
  qtyTon: number;
  trips: number | null;
  owner: string | null;
  reference: string | null;
  operation: string;
  notes: string | null;
  material: {
    code: string;
    name: string;
    uom: string;
  };
  site: {
    code: string;
    name: string;
  };
  createdAt: string;
}

const columns: ColumnDef<Dispatch>[] = [
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
    id: 'materialLabel',
    accessorFn: (row) => `${row.material.code} - ${row.material.name}`,
    header: 'Material',
    cell: ({ row }) => {
      const material = row.original.material;
      return `${material.code} - ${material.name}`;
    },
  },
  {
    accessorKey: 'qtyTon',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Quantity (TON)
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const qty = parseFloat(row.getValue('qtyTon'));
      return <span className="tabular-nums">{qty.toFixed(3)}</span>;
    },
  },
  {
    accessorKey: 'trips',
    header: 'Trips',
    cell: ({ row }) => {
      const trips = row.getValue('trips') as number | null;
      return trips ?? '-';
    },
  },
  {
    accessorKey: 'owner',
    header: 'Owner',
    cell: ({ row }) => {
      const owner = row.getValue('owner') as string | null;
      if (!owner) return '-';
      return owner.length > 30 ? `${owner.substring(0, 30)}...` : owner;
    },
  },
  {
    accessorKey: 'reference',
    header: 'Reference',
    cell: ({ row }) => {
      const reference = row.getValue('reference') as string | null;
      return reference ?? '-';
    },
  },
  {
    accessorKey: 'operation',
    header: 'Operation',
    cell: ({ row }) => row.getValue('operation'),
  },
  {
    accessorKey: 'notes',
    header: 'Notes',
    cell: ({ row }) => {
      const notes = row.getValue('notes') as string | null;
      if (!notes) return '-';
      return notes.length > 50 ? `${notes.substring(0, 50)}...` : notes;
    },
  },
];

export default function DispatchPage(): React.JSX.Element {
  const [dispatches, setDispatches] = useState<Dispatch[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedSite] = useState(DEFAULT_SITE_ID);

  const fetchDispatches = async (): Promise<void> => {
    try {
      const dateFrom = new Date();
      dateFrom.setDate(dateFrom.getDate() - 30);
      const dateTo = new Date();

      const params = new URLSearchParams({
        siteId: selectedSite,
        dateFrom: dateFrom.toISOString(),
        dateTo: dateTo.toISOString(),
      });

      const response = await fetch(`/api/dispatch?${params.toString()}`);

      if (!response.ok) {
        throw new Error('Failed to fetch dispatch data');
      }

      const data = await response.json();
      setDispatches(data);
    } catch (_error) {
      toast.error('Failed to load dispatch data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchDispatches();
  }, [selectedSite]);

  const handleFormSuccess = (): void => {
    setDialogOpen(false);
    void fetchDispatches();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dispatch</h1>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Dispatch
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Dispatch Record</DialogTitle>
            </DialogHeader>
            <DispatchForm siteId={selectedSite} onSuccess={handleFormSuccess} />
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <DataTable
          columns={columns}
          data={dispatches}
          searchKey="materialLabel"
          searchPlaceholder="Search materials..."
        />
      )}
    </div>
  );
}
