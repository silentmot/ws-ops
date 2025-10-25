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
import { ProductionForm } from '@/components/forms/production-form';
import { DEFAULT_SITE_CODE } from '@deskops/constants';
import { toast } from 'sonner';

interface Production {
  id: string;
  date: Date;
  shift: string | null;
  qtyTon: number;
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
  createdAt: Date;
}

const columns: ColumnDef<Production>[] = [
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
    accessorKey: 'material',
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
    accessorKey: 'operation',
    header: 'Operation',
    cell: ({ row }) => row.getValue('operation'),
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
    accessorKey: 'notes',
    header: 'Notes',
    cell: ({ row }) => {
      const notes = row.getValue('notes') as string | null;
      if (!notes) return '-';
      return notes.length > 50 ? `${notes.substring(0, 50)}...` : notes;
    },
  },
];

export default function ProductionPage(): React.JSX.Element {
  const [productions, setProductions] = useState<Production[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedSite] = useState(DEFAULT_SITE_CODE);

  const fetchProductions = async (): Promise<void> => {
    try {
      const dateFrom = new Date();
      dateFrom.setDate(dateFrom.getDate() - 30);
      const dateTo = new Date();

      const params = new URLSearchParams({
        siteId: selectedSite,
        dateFrom: dateFrom.toISOString(),
        dateTo: dateTo.toISOString(),
      });

      const response = await fetch(`/api/production?${params.toString()}`);

      if (!response.ok) {
        throw new Error('Failed to fetch production data');
      }

      const data = await response.json();
      setProductions(data);
    } catch (_error) {
      toast.error('Failed to load production data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchProductions();
  }, [selectedSite]);

  const handleFormSuccess = (): void => {
    setDialogOpen(false);
    void fetchProductions();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Production</h1>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Production
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Production Record</DialogTitle>
            </DialogHeader>
            <ProductionForm
              siteId={selectedSite}
              onSuccess={handleFormSuccess}
            />
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <DataTable
          columns={columns}
          data={productions}
          searchKey="material"
          searchPlaceholder="Search materials..."
        />
      )}
    </div>
  );
}
