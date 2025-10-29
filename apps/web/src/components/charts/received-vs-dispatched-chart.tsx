'use client';

import { useState } from 'react';
import type {
  TooltipProps} from 'recharts';
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
  Brush
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@deskops/ui';
import { formatWithPrecision } from '@deskops/constants';
import { ChartSkeleton } from './chart-skeleton';
import { AccessibleLegend } from './accessible-legend';

export interface ReceivedVsDispatchedData {
  date: string;
  received: number;
  dispatched: number;
  net: number;
}

interface ReceivedVsDispatchedChartProps {
  data: ReceivedVsDispatchedData[];
  isLoading?: boolean;
}

function CustomTooltip(props: TooltipProps<number, string>) {
  const { active, payload, label } = props as Record<string, unknown>;
  if (active && Array.isArray(payload) && payload.length > 0) {
    return (
      <div className="rounded-lg border bg-background p-3 shadow-md">
        <p className="font-medium">Date: {label as string}</p>
        {payload.map((entry: Record<string, unknown>, index: number) => {
          const value = entry['value'] as number;
          const name = entry['name'] as string;
          const formattedValue = formatWithPrecision(value, 'TON');
          const prefix = name === 'Net Change' && value > 0 ? '+' : '';
          return (
            <p key={index} style={{ color: entry['color'] as string }}>
              {name}: {prefix}{formattedValue} TON
            </p>
          );
        })}
      </div>
    );
  }
  return null;
}

export function ReceivedVsDispatchedChart({
  data,
  isLoading = false,
}: ReceivedVsDispatchedChartProps): React.JSX.Element {
  const [hiddenSeries, setHiddenSeries] = useState<Set<string>>(new Set());

  if (isLoading) {
    return <ChartSkeleton title="Received vs Dispatched" className="col-span-1" />;
  }

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Received vs Dispatched</CardTitle>
      </CardHeader>
      <CardContent>
        <div role="img" aria-label="Received vs Dispatched chart showing materials received and dispatched with net inventory change">
          <AccessibleLegend
            payload={[
              { dataKey: 'received', value: 'Received', color: 'hsl(var(--chart-2))' },
              { dataKey: 'dispatched', value: 'Dispatched', color: 'hsl(var(--chart-5))' },
              { dataKey: 'net', value: 'Net Change', color: 'hsl(var(--chart-3))' },
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
              dataKey="received"
              fill="hsl(var(--chart-2))"
              name="Received"
              radius={[4, 4, 0, 0]}
              hide={hiddenSeries.has('received')}
            />
            <Bar
              dataKey="dispatched"
              fill="hsl(var(--chart-5))"
              name="Dispatched"
              radius={[4, 4, 0, 0]}
              hide={hiddenSeries.has('dispatched')}
            />
            <Line
              type="monotone"
              dataKey="net"
              stroke="hsl(var(--chart-3))"
              strokeWidth={2}
              name="Net Change"
              dot={{ r: 4 }}
              hide={hiddenSeries.has('net')}
            />
            <ReferenceLine
              y={0}
              stroke="hsl(var(--muted-foreground))"
              strokeDasharray="2 2"
            />
            <Brush
              dataKey="date"
              height={30}
              stroke="hsl(var(--chart-3))"
            />
          </ComposedChart>
        </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
