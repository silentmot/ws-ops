'use client';

import { useMemo } from 'react';
import type { ColumnDef } from '@tanstack/react-table';
import { Button, Badge } from '@deskops/ui';
import { ArrowUpDown } from 'lucide-react';
import { format } from 'date-fns';
import { DataTable } from '@/components/data-table/data-table';
import { cn } from '@deskops/ui';

interface InventorySnapshot {
  id: string;
  date: string;
  materialId: string;
  material: {
    code: string;
    name: string;
    category: string;
    uom: string;
  };
  openingTon: number;
  producedTon: number;
  receivedTon: number;
  dispatchedTon: number;
  adjustmentTon: number;
  closingTon: number;
}

interface InventoryTableProps {
  data: InventorySnapshot[];
}

// Color coding thresholds
const STOCK_THRESHOLD_LOW = 100;
const STOCK_THRESHOLD_WARNING = 500;

function getStockColor(closingTon: number): string {
  if (closingTon < STOCK_THRESHOLD_LOW) {
    return 'text-red-600 dark:text-red-400';
  } else if (closingTon < STOCK_THRESHOLD_WARNING) {
    return 'text-yellow-600 dark:text-yellow-400';
  }
  return 'text-green-600 dark:text-green-400';
}

function getStockBadgeVariant(
  closingTon: number
): 'destructive' | 'default' | 'secondary' {
  if (closingTon < STOCK_THRESHOLD_LOW) {
    return 'destructive';
  } else if (closingTon < STOCK_THRESHOLD_WARNING) {
    return 'default';
  }
  return 'secondary';
}

export function InventoryTable({
  data,
}: InventoryTableProps): React.JSX.Element {
  // Calculate summary totals by category
  const summaryTotals = useMemo(() => {
    const totals: Record<
      string,
      {
        opening: number;
        produced: number;
        received: number;
        dispatched: number;
        adjustment: number;
        closing: number;
      }
    > = {};

    data.forEach((snapshot) => {
      const category = snapshot.material.category;
      if (!totals[category]) {
        totals[category] = {
          opening: 0,
          produced: 0,
          received: 0,
          dispatched: 0,
          adjustment: 0,
          closing: 0,
        };
      }
      totals[category].opening += Number(snapshot.openingTon);
      totals[category].produced += Number(snapshot.producedTon);
      totals[category].received += Number(snapshot.receivedTon);
      totals[category].dispatched += Number(snapshot.dispatchedTon);
      totals[category].adjustment += Number(snapshot.adjustmentTon);
      totals[category].closing += Number(snapshot.closingTon);
    });

    return totals;
  }, [data]);

  // Grand totals across all categories
  const grandTotals = useMemo(() => {
    return Object.values(summaryTotals).reduce(
      (acc, categoryTotal) => ({
        opening: acc.opening + categoryTotal.opening,
        produced: acc.produced + categoryTotal.produced,
        received: acc.received + categoryTotal.received,
        dispatched: acc.dispatched + categoryTotal.dispatched,
        adjustment: acc.adjustment + categoryTotal.adjustment,
        closing: acc.closing + categoryTotal.closing,
      }),
      {
        opening: 0,
        produced: 0,
        received: 0,
        dispatched: 0,
        adjustment: 0,
        closing: 0,
      }
    );
  }, [summaryTotals]);

  const columns: ColumnDef<InventorySnapshot>[] = [
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
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Material
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const material = row.original.material;
        return (
          <div className="flex flex-col">
            <span className="font-medium">{material.code}</span>
            <span className="text-muted-foreground text-sm">
              {material.name}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: 'openingTon',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Opening
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const value = Number(row.getValue('openingTon'));
        return <span className="tabular-nums">{value.toFixed(2)}</span>;
      },
    },
    {
      accessorKey: 'producedTon',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Produced
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const value = Number(row.getValue('producedTon'));
        return <span className="tabular-nums">{value.toFixed(2)}</span>;
      },
    },
    {
      accessorKey: 'receivedTon',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Received
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const value = Number(row.getValue('receivedTon'));
        return <span className="tabular-nums">{value.toFixed(2)}</span>;
      },
    },
    {
      accessorKey: 'dispatchedTon',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Dispatched
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const value = Number(row.getValue('dispatchedTon'));
        return <span className="tabular-nums">{value.toFixed(2)}</span>;
      },
    },
    {
      accessorKey: 'adjustmentTon',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Adjustment
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const value = Number(row.getValue('adjustmentTon'));
        return (
          <span className={cn('tabular-nums', value !== 0 && 'font-medium')}>
            {value >= 0 ? '+' : ''}
            {value.toFixed(2)}
          </span>
        );
      },
    },
    {
      accessorKey: 'closingTon',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Closing
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const value = Number(row.getValue('closingTon'));
        return (
          <div className="flex items-center gap-2">
            <span
              className={cn('font-medium tabular-nums', getStockColor(value))}
            >
              {value.toFixed(2)}
            </span>
            <Badge variant={getStockBadgeVariant(value)} className="text-xs">
              {value < STOCK_THRESHOLD_LOW
                ? 'LOW'
                : value < STOCK_THRESHOLD_WARNING
                  ? 'WARN'
                  : 'OK'}
            </Badge>
          </div>
        );
      },
    },
  ];

  return (
    <div className="space-y-4">
      <DataTable
        columns={columns}
        data={data}
        searchKey="materialLabel"
        searchPlaceholder="Search materials..."
      />

      {/* Summary Section */}
      {Object.keys(summaryTotals).length > 0 && (
        <div className="space-y-4 border-t pt-4">
          <h3 className="text-lg font-semibold">Summary by Category</h3>
          <div className="space-y-2">
            {Object.entries(summaryTotals).map(([category, totals]) => (
              <div
                key={category}
                className="grid grid-cols-8 gap-4 rounded-lg border p-3 text-sm"
              >
                <div className="col-span-2 font-medium">{category}</div>
                <div className="text-right tabular-nums">
                  {totals.opening.toFixed(2)}
                </div>
                <div className="text-right tabular-nums">
                  {totals.produced.toFixed(2)}
                </div>
                <div className="text-right tabular-nums">
                  {totals.received.toFixed(2)}
                </div>
                <div className="text-right tabular-nums">
                  {totals.dispatched.toFixed(2)}
                </div>
                <div className="text-right tabular-nums">
                  {totals.adjustment >= 0 ? '+' : ''}
                  {totals.adjustment.toFixed(2)}
                </div>
                <div
                  className={cn(
                    'text-right font-medium tabular-nums',
                    getStockColor(totals.closing)
                  )}
                >
                  {totals.closing.toFixed(2)}
                </div>
              </div>
            ))}

            {/* Grand Total */}
            <div className="border-primary bg-muted grid grid-cols-8 gap-4 rounded-lg border-2 p-3 text-sm font-semibold">
              <div className="col-span-2">GRAND TOTAL</div>
              <div className="text-right tabular-nums">
                {grandTotals.opening.toFixed(2)}
              </div>
              <div className="text-right tabular-nums">
                {grandTotals.produced.toFixed(2)}
              </div>
              <div className="text-right tabular-nums">
                {grandTotals.received.toFixed(2)}
              </div>
              <div className="text-right tabular-nums">
                {grandTotals.dispatched.toFixed(2)}
              </div>
              <div className="text-right tabular-nums">
                {grandTotals.adjustment >= 0 ? '+' : ''}
                {grandTotals.adjustment.toFixed(2)}
              </div>
              <div
                className={cn(
                  'text-right tabular-nums',
                  getStockColor(grandTotals.closing)
                )}
              >
                {grandTotals.closing.toFixed(2)}
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="text-muted-foreground flex items-center gap-6 text-xs">
            <div className="flex items-center gap-2">
              <Badge variant="destructive" className="text-xs">
                LOW
              </Badge>
              <span>&lt; {STOCK_THRESHOLD_LOW} TON</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="default" className="text-xs">
                WARN
              </Badge>
              <span>
                {STOCK_THRESHOLD_LOW}-{STOCK_THRESHOLD_WARNING} TON
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs">
                OK
              </Badge>
              <span>&gt; {STOCK_THRESHOLD_WARNING} TON</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
