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
} from 'recharts';
import type { TooltipProps } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@deskops/ui';
import { formatWithPrecision } from '@deskops/constants';
import { ChartSkeleton } from './chart-skeleton';
import { AccessibleLegend } from './accessible-legend';

export interface EquipmentUtilizationData {
  date: string;
  equipmentName: string;
  operationalHours: number;
  idleHours: number;
}

interface EquipmentUtilizationChartProps {
  data: EquipmentUtilizationData[];
  isLoading?: boolean;
}

function CustomTooltip(
  props: TooltipProps<number, string>
): React.JSX.Element | null {
  // Runtime type guards for safety despite typed props
  const propsAny = props as Record<string, unknown>;
  const active = propsAny['active'];
  const payload = propsAny['payload'] as Array<Record<string, unknown>> | undefined;
  const label = propsAny['label'] as string | undefined;

  if (active && payload && payload.length > 0) {
    // Calculate total hours and percentages
    const totalHours = payload.reduce((sum, entry) => sum + (entry['value'] as number), 0);

    return (
      <div className="rounded-lg border bg-background p-3 shadow-md">
        <p className="font-medium">Equipment: {label}</p>
        {payload.map((entry: Record<string, unknown>, index: number) => {
          const value = entry['value'] as number;
          const percentage = totalHours > 0 ? (value / totalHours) * 100 : 0;
          return (
            <p key={index} style={{ color: entry['color'] as string }}>
              {entry['name'] as string}: {percentage.toFixed(1)}% ({formatWithPrecision(value, 'HOUR')} HOUR)
            </p>
          );
        })}
      </div>
    );
  }
  return null;
}

export function EquipmentUtilizationChart({
  data,
  isLoading,
}: EquipmentUtilizationChartProps): React.JSX.Element {
  const [hiddenSeries, setHiddenSeries] = useState<Set<string>>(new Set());

  if (isLoading) {
    return <ChartSkeleton title="Equipment Utilization" className="col-span-1" />;
  }

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Equipment Utilization</CardTitle>
      </CardHeader>
      <CardContent>
        <div role="img" aria-label="Equipment Utilization chart showing percentage of operational versus idle hours">
          <AccessibleLegend
            payload={[
              { dataKey: 'operationalHours', value: 'Operational', color: 'hsl(var(--chart-1))' },
              { dataKey: 'idleHours', value: 'Idle', color: 'hsl(var(--chart-2))' },
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
            data={data}
            stackOffset="expand"
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="equipmentName"
              className="text-xs"
            />
            <YAxis
              className="text-xs"
              domain={[0, 1]}
              tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
              label={{ value: 'Utilization %', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend content={() => null} />
            <Bar
              dataKey="operationalHours"
              stackId="hours"
              fill="hsl(var(--chart-1))"
              name="Operational"
              radius={[4, 4, 0, 0]}
              hide={hiddenSeries.has('operationalHours')}
            />
            <Bar
              dataKey="idleHours"
              stackId="hours"
              fill="hsl(var(--chart-2))"
              name="Idle"
              hide={hiddenSeries.has('idleHours')}
            />
          </BarChart>
        </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
