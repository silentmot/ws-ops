'use client';

import { useMemo, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Brush,
  type TooltipProps,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@deskops/ui';
import { formatWithPrecision } from '@deskops/constants';
import { ChartSkeleton } from '@/components/charts/chart-skeleton';
import { AccessibleLegend } from '@/components/charts/accessible-legend';

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

interface InventoryMovementChartProps {
  data: InventorySnapshot[];
  isLoading?: boolean;
}

interface ChartDataPoint {
  date: string;
  [key: string]: number | string; // Dynamic keys for each material
}

// Chart color palette
const CHART_COLORS = [
  'hsl(var(--chart-1))',
  'hsl(var(--chart-2))',
  'hsl(var(--chart-3))',
  'hsl(var(--chart-4))',
  'hsl(var(--chart-5))',
  '#8884d8',
  '#82ca9d',
  '#ffc658',
  '#ff7c7c',
  '#a28bd4',
];

function CustomTooltip(props: TooltipProps<number, string>) {
  const { active, payload, label } = props as Record<string, unknown>;
  if (active && Array.isArray(payload) && payload.length > 0) {
    return (
      <div className="bg-background rounded-lg border p-3 shadow-md">
        <p className="mb-2 font-medium">
          Date: {new Date(label as string).toLocaleDateString()}
        </p>
        {payload.map((entry: Record<string, unknown>, index: number) => (
          <p key={index} style={{ color: entry['color'] as string }}>
            {entry['name'] as string}:{' '}
            {formatWithPrecision(entry['value'] as number, 'TON')} TON
          </p>
        ))}
      </div>
    );
  }
  return null;
}

export function InventoryMovementChart({
  data,
  isLoading = false,
}: InventoryMovementChartProps): React.JSX.Element {
  const [hiddenSeries, setHiddenSeries] = useState<Set<string>>(new Set());

  // Transform data for chart: group by date and create series for each material
  const chartData = useMemo(() => {
    if (!data || data.length === 0) return [];

    // Group snapshots by date
    const dateMap = new Map<string, Record<string, number>>();

    data.forEach((snapshot) => {
      const dateKey = snapshot.date;
      if (!dateMap.has(dateKey)) {
        dateMap.set(dateKey, {});
      }
      const dateData = dateMap.get(dateKey);
      if (dateData) {
        const materialKey = snapshot.material.code;
        dateData[materialKey] = Number(snapshot.closingTon);
      }
    });

    // Convert to array and sort by date
    const chartPoints: ChartDataPoint[] = Array.from(dateMap.entries())
      .map(([date, materials]) => ({
        date,
        ...materials,
      }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return chartPoints;
  }, [data]);

  // Extract unique materials for series
  const materials = useMemo(() => {
    const materialSet = new Set<string>();
    data.forEach((snapshot) => {
      materialSet.add(snapshot.material.code);
    });
    return Array.from(materialSet).sort();
  }, [data]);

  // Create legend payload
  const legendPayload = useMemo(() => {
    return materials.map((materialCode, index) => ({
      dataKey: materialCode,
      value: materialCode,
      color: CHART_COLORS[index % CHART_COLORS.length] ?? '#000000',
    }));
  }, [materials]);

  if (isLoading) {
    return (
      <ChartSkeleton title="Inventory Movement Trends" className="col-span-2" />
    );
  }

  if (chartData.length === 0) {
    return (
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Inventory Movement Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-muted-foreground flex h-[320px] items-center justify-center">
            No inventory data available for the selected period
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Inventory Movement Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          role="img"
          aria-label="Inventory movement chart showing closing balance trends for different materials over time"
        >
          <AccessibleLegend
            payload={legendPayload}
            onToggle={(dataKey) => {
              setHiddenSeries((prev) => {
                const next = new Set(prev);
                if (next.has(dataKey)) {
                  next.delete(dataKey);
                } else {
                  next.add(dataKey);
                }
                return next;
              });
            }}
            hiddenSeries={hiddenSeries}
          />
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
            >
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="date"
                className="text-xs"
                tickFormatter={(value) =>
                  new Date(value).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })
                }
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis
                className="text-xs"
                label={{
                  value: 'Closing Balance (TON)',
                  angle: -90,
                  position: 'insideLeft',
                }}
                tickFormatter={(value) => formatWithPrecision(value, 'TON')}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend content={() => null} />

              {/* Render lines for each material */}
              {materials.map((materialCode, index) => (
                <Line
                  key={materialCode}
                  type="monotone"
                  dataKey={materialCode}
                  stroke={CHART_COLORS[index % CHART_COLORS.length]}
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                  name={materialCode}
                  hide={hiddenSeries.has(materialCode)}
                  connectNulls
                />
              ))}

              {/* Brush for date range selection */}
              <Brush
                dataKey="date"
                height={30}
                stroke="hsl(var(--primary))"
                tickFormatter={(value) =>
                  new Date(value).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })
                }
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
