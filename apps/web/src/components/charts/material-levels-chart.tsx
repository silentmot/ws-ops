'use client';

import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  TooltipProps,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@deskops/ui';
import { formatWithPrecision } from '@deskops/constants';
import { ChartSkeleton } from './chart-skeleton';
import { AccessibleLegend } from './accessible-legend';

export interface MaterialLevelData {
  materialName: string;
  materialCode: string;
  quantity: number;
  category: string;
}

interface MaterialLevelsChartProps {
  data: MaterialLevelData[];
  topN?: number;
  isLoading?: boolean;
}

function CustomTooltip(props: TooltipProps<number, string>) {
  const { active, payload, label } = props as Record<string, unknown>;
  if (active && Array.isArray(payload) && payload.length > 0) {
    return (
      <div className="rounded-lg border bg-background p-3 shadow-md">
        <p className="font-medium">Material: {label as string}</p>
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

export function MaterialLevelsChart({
  data,
  topN = 10,
  isLoading = false,
}: MaterialLevelsChartProps): React.JSX.Element {
  const [hiddenSeries, setHiddenSeries] = useState<Set<string>>(new Set());

  // Sort by quantity descending and slice to topN
  const displayData = [...data]
    .sort((a, b) => b.quantity - a.quantity)
    .slice(0, topN);

  if (isLoading) {
    return <ChartSkeleton title="Top Material Levels" className="col-span-1" />;
  }

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Top {topN} Material Levels</CardTitle>
      </CardHeader>
      <CardContent>
        <div role="img" aria-label={`Top ${topN} Material Levels chart showing materials with highest inventory quantities`}>
          <AccessibleLegend
            payload={[
              { dataKey: 'quantity', value: 'Quantity', color: 'hsl(var(--chart-1))' },
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
          <BarChart
            data={displayData}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              type="number"
              className="text-xs"
              label={{ value: 'Tons', position: 'insideBottom', offset: -5 }}
            />
            <YAxis
              type="category"
              dataKey="materialName"
              className="text-xs"
              width={90}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend content={() => null} />
            <Bar
              dataKey="quantity"
              fill="hsl(var(--chart-1))"
              name="Quantity"
              radius={[0, 4, 4, 0]}
              hide={hiddenSeries.has('quantity')}
            />
          </BarChart>
        </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
