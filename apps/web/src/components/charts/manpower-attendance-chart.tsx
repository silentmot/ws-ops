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

export interface ManpowerAttendanceData {
  roleName: string;
  morning: number;
  afternoon: number;
  night: number;
  noShift: number;
}

interface ManpowerAttendanceChartProps {
  data: ManpowerAttendanceData[];
  isLoading?: boolean;
}

function CustomTooltip(props: TooltipProps<number, string>): React.JSX.Element | null {
  const { active, payload, label } = props as Record<string, unknown>;

  if (!active || !Array.isArray(payload)) {
    return null;
  }

  return (
    <div className="rounded-lg border bg-background p-3 shadow-md">
      <p className="font-medium">Role: {label as string}</p>
      {payload.map((entry: Record<string, unknown>, index: number) => {
        return (
          <p key={index} style={{ color: entry['color'] as string }}>
            {entry['name'] as string}: {formatWithPrecision(entry['value'] as number, 'COUNT')} COUNT
          </p>
        );
      })}
    </div>
  );
}

export function ManpowerAttendanceChart({
  data,
  isLoading = false,
}: ManpowerAttendanceChartProps): React.JSX.Element {
  const [hiddenSeries, setHiddenSeries] = useState<Set<string>>(new Set());

  if (isLoading) {
    return <ChartSkeleton title="Manpower Attendance" className="col-span-1" />;
  }

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Manpower Attendance</CardTitle>
      </CardHeader>
      <CardContent>
        <div role="img" aria-label="Manpower Attendance chart showing headcount distribution by shift and role">
          <AccessibleLegend
            payload={[
              { dataKey: 'morning', value: 'Morning', color: 'hsl(var(--chart-1))' },
              { dataKey: 'afternoon', value: 'Afternoon', color: 'hsl(var(--chart-2))' },
              { dataKey: 'night', value: 'Night', color: 'hsl(var(--chart-3))' },
              { dataKey: 'noShift', value: 'No Shift', color: 'hsl(var(--chart-4))' },
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
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="roleName"
              className="text-xs"
              angle={-45}
              textAnchor="end"
            />
            <YAxis
              className="text-xs"
              label={{
                value: 'Headcount',
                angle: -90,
                position: 'insideLeft',
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend content={() => null} />
            <Bar
              dataKey="morning"
              stackId="attendance"
              fill="hsl(var(--chart-1))"
              name="Morning"
              radius={[4, 4, 0, 0]}
              hide={hiddenSeries.has('morning')}
            />
            <Bar
              dataKey="afternoon"
              stackId="attendance"
              fill="hsl(var(--chart-2))"
              name="Afternoon"
              hide={hiddenSeries.has('afternoon')}
            />
            <Bar
              dataKey="night"
              stackId="attendance"
              fill="hsl(var(--chart-3))"
              name="Night"
              hide={hiddenSeries.has('night')}
            />
            <Bar
              dataKey="noShift"
              stackId="attendance"
              fill="hsl(var(--chart-4))"
              name="No Shift"
              hide={hiddenSeries.has('noShift')}
            />
          </BarChart>
        </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
