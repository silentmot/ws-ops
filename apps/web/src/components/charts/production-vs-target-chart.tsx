'use client';

import { useState } from 'react';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  Brush,
  TooltipProps,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@deskops/ui';
import { formatWithPrecision } from '@deskops/constants';
import { ChartSkeleton } from './chart-skeleton';
import { AccessibleLegend } from './accessible-legend';

export interface ProductionVsTargetData {
  date: string;
  production: number;
  target: number;
  gap: number;
}

interface ProductionVsTargetChartProps {
  data: ProductionVsTargetData[];
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

export function ProductionVsTargetChart({
  data,
  isLoading = false,
}: ProductionVsTargetChartProps): React.JSX.Element {
  const [hiddenSeries, setHiddenSeries] = useState<Set<string>>(new Set());

  if (isLoading) {
    return <ChartSkeleton title="Production vs Target" className="col-span-1" />;
  }

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Production vs Target</CardTitle>
      </CardHeader>
      <CardContent>
        <div role="img" aria-label="Production vs Target chart showing daily production quantities as bars compared against target goals as a line">
          <AccessibleLegend
            payload={[
              { dataKey: 'production', value: 'Production', color: 'hsl(var(--chart-1))' },
              { dataKey: 'target', value: 'Target', color: 'hsl(var(--chart-3))' },
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
          <ComposedChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          >
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
            <Bar
              dataKey="production"
              fill="hsl(var(--chart-1))"
              name="Production"
              radius={[4, 4, 0, 0]}
              hide={hiddenSeries.has('production')}
            />
            <Line
              type="monotone"
              dataKey="target"
              stroke="hsl(var(--chart-3))"
              strokeWidth={2}
              name="Target"
              dot={{ r: 4 }}
              hide={hiddenSeries.has('target')}
            />
            <ReferenceLine
              y={0}
              stroke="hsl(var(--muted-foreground))"
              strokeDasharray="2 2"
            />
            <Brush
              dataKey="date"
              height={30}
              stroke="hsl(var(--chart-1))"
            />
          </ComposedChart>
        </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
