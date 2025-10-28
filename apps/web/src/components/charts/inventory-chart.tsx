'use client';

import { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceArea,
  Brush,
  TooltipProps,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@deskops/ui';
import { formatWithPrecision } from '@deskops/constants';
import { ChartSkeleton } from './chart-skeleton';
import { AccessibleLegend } from './accessible-legend';

export interface InventoryData {
  date: string;
  closing: number;
  minThreshold: number;
  maxThreshold: number;
}

interface InventoryChartProps {
  data: InventoryData[];
  isLoading?: boolean;
}

function CustomTooltip(props: TooltipProps<number, string>) {
  const { active, payload, label } = props as Record<string, unknown>;
  if (active && Array.isArray(payload) && payload.length > 0) {
    return (
      <div className="rounded-lg border bg-background p-3 shadow-md">
        <p className="font-medium">Date: {label as string}</p>
        {payload.map((entry: Record<string, unknown>, index: number) => (
          <p key={index} style={{ color: entry['color'] as string }}>
            {entry['name'] as string}: {formatWithPrecision(entry['value'] as number, 'TON')} TON
          </p>
        ))}
      </div>
    );
  }
  return null;
}

export function InventoryChart({
  data,
  isLoading = false,
}: InventoryChartProps): React.JSX.Element {
  const [hiddenSeries, setHiddenSeries] = useState<Set<string>>(new Set());

  if (isLoading) {
    return <ChartSkeleton title="Inventory Levels" className="col-span-2" />;
  }

  // Compute numeric bounds for threshold band
  const minThreshold = data.length > 0 ? Math.min(...data.map(d => d.minThreshold)) : 0;
  const maxThreshold = data.length > 0 ? Math.max(...data.map(d => d.maxThreshold)) : 0;

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Inventory Levels</CardTitle>
      </CardHeader>
      <CardContent>
        <div role="img" aria-label="Inventory Levels chart showing closing inventory balance over time with threshold bands">
          <AccessibleLegend
            payload={[
              { dataKey: 'closing', value: 'Inventory', color: 'hsl(var(--chart-4))' },
            ]}
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
          <ResponsiveContainer width="100%" height={320}>
          <AreaChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          >
            <defs>
              <linearGradient id="inventoryGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="hsl(var(--chart-4))"
                  stopOpacity={0.3}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(var(--chart-4))"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="date"
              className="text-xs"
              tickFormatter={(value) => new Date(value).toLocaleDateString()}
            />
            <YAxis
              className="text-xs"
              label={{ value: 'Tons', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend content={() => null} />
            <ReferenceArea
              y1={minThreshold}
              y2={maxThreshold}
              fill="hsl(var(--success))"
              fillOpacity={0.1}
              ifOverflow="extendDomain"
            />
            <Area
              type="monotone"
              dataKey="closing"
              stroke="hsl(var(--chart-4))"
              strokeWidth={2}
              fill="url(#inventoryGradient)"
              name="Inventory"
              hide={hiddenSeries.has('closing')}
            />
            <Brush
              dataKey="date"
              height={30}
              stroke="hsl(var(--chart-4))"
            />
          </AreaChart>
        </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
