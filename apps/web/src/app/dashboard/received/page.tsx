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
import { ReceivedMaterialForm } from '@/components/forms/received-form';
import { DEFAULT_SITE_ID } from '@deskops/constants';
import { toast } from 'sonner';

interface ReceivedMaterial {
  id: string;
  date: string;
  qtyTon: number;
  source: string | null;
  vehicleRef: string | null;
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

const columns: ColumnDef<ReceivedMaterial>[] = [
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
    accessorKey: 'source',
    header: 'Source',
    cell: ({ row }) => {
      const source = row.getValue('source') as string | null;
      if (!source) return '-';
      return source.length > 30 ? `${source.substring(0, 30)}...` : source;
    },
  },
  {
    accessorKey: 'vehicleRef',
    header: 'Vehicle Ref',
    cell: ({ row }) => {
      const vehicleRef = row.getValue('vehicleRef') as string | null;
      return vehicleRef ?? '-';
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

export default function ReceivedMaterialPage(): React.JSX.Element {
  const [receivedMaterials, setReceivedMaterials] = useState<
    ReceivedMaterial[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedSite] = useState(DEFAULT_SITE_ID);

  const fetchReceivedMaterials = async (): Promise<void> => {
    try {
      const dateFrom = new Date();
      dateFrom.setDate(dateFrom.getDate() - 30);
      const dateTo = new Date();

      const params = new URLSearchParams({
        siteId: selectedSite,
        dateFrom: dateFrom.toISOString(),
        dateTo: dateTo.toISOString(),
      });

      const response = await fetch(`/api/received?${params.toString()}`);

      if (!response.ok) {
        throw new Error('Failed to fetch received material data');
      }

      const data = await response.json();
      setReceivedMaterials(data);
    } catch (_error) {
      toast.error('Failed to load received material data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchReceivedMaterials();
  }, [selectedSite]);

  const handleFormSuccess = (): void => {
    setDialogOpen(false);
    void fetchReceivedMaterials();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">
          Received Materials
        </h1>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Received Material
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Received Material Record</DialogTitle>
            </DialogHeader>
            <ReceivedMaterialForm
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
          data={receivedMaterials}
          searchKey="materialLabel"
          searchPlaceholder="Search materials..."
        />
      )}
    </div>
  );
}
