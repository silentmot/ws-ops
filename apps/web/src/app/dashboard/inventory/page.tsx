'use client';

import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@deskops/ui';
import { InventoryTable } from '@/components/inventory/inventory-table';
import { InventoryMovementChart } from '@/components/inventory/inventory-movement-chart';
import {
  DateRangePicker,
  type DateRange,
} from '@/components/date-range-picker';
import { DEFAULT_SITE_ID, type MaterialCategory } from '@deskops/constants';
import { toast } from 'sonner';

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

const MATERIAL_CATEGORIES: Array<{
  value: MaterialCategory | 'ALL';
  label: string;
}> = [
  { value: 'ALL', label: 'All Categories' },
  { value: 'AGGREGATES', label: 'Aggregates' },
  { value: 'PROCESSED_BASE', label: 'Processed Base' },
  { value: 'FINE', label: 'Fine' },
  { value: 'SPECIALTY', label: 'Specialty' },
  { value: 'RAW_FEED', label: 'Raw Feed' },
];

export default function InventoryPage(): React.JSX.Element {
  const [snapshots, setSnapshots] = useState<InventorySnapshot[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSite] = useState(DEFAULT_SITE_ID);
  const [selectedCategory, setSelectedCategory] = useState<
    MaterialCategory | 'ALL'
  >('ALL');
  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
    to: new Date(),
  });

  const fetchInventorySnapshots = async (): Promise<void> => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        siteId: selectedSite,
        dateFrom: dateRange.from.toISOString(),
        dateTo: dateRange.to.toISOString(),
      });

      const response = await fetch(`/api/inventory?${params.toString()}`);

      if (!response.ok) {
        throw new Error('Failed to fetch inventory snapshots');
      }

      const data = await response.json();
      setSnapshots(data.inventorySnapshots);
    } catch (_error) {
      toast.error('Failed to load inventory data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchInventorySnapshots();
  }, [selectedSite, dateRange]);

  // Filter snapshots by category
  const filteredSnapshots =
    selectedCategory === 'ALL'
      ? snapshots
      : snapshots.filter((s) => s.material.category === selectedCategory);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">
          Inventory Snapshots
        </h1>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div className="min-w-[200px] flex-1">
              <label className="mb-2 block text-sm font-medium">
                Date Range
              </label>
              <DateRangePicker value={dateRange} onChange={setDateRange} />
            </div>
            <div className="min-w-[200px] flex-1">
              <label className="mb-2 block text-sm font-medium">
                Material Category
              </label>
              <Select
                value={selectedCategory}
                onValueChange={(value) =>
                  setSelectedCategory(value as MaterialCategory | 'ALL')
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {MATERIAL_CATEGORIES.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Chart */}
      <InventoryMovementChart data={filteredSnapshots} isLoading={loading} />

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle>Inventory Details</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="py-8 text-center">Loading...</div>
          ) : (
            <InventoryTable data={filteredSnapshots} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
