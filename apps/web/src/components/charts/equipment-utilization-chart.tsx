'use client';

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
import { Card, CardContent, CardHeader, CardTitle } from '@deskops/ui';
import { formatWithPrecision } from '@deskops/constants';

interface EquipmentUtilizationData {
  date: string;
  operational: number;
  maintenance: number;
  breakdown: number;
  idle: number;
}

interface EquipmentUtilizationChartProps {
  data: EquipmentUtilizationData[];
  isLoading?: boolean;
}

interface TooltipProps {
  active?: boolean;
  payload?: Array<{ name: string; value: number; color: string }>;
  label?: string;
}

function CustomTooltip({
  active,
  payload,
  label,
}: TooltipProps): React.ReactElement | null {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background rounded-lg border p-3 shadow-md">
        <p className="mb-2 font-medium">{label}</p>
        {payload.map((entry, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {formatWithPrecision(Number(entry.value), 'HOUR')}{' '}
            HOURS
          </p>
        ))}
      </div>
    );
  }

  return null;
}

export function EquipmentUtilizationChart({
  data,
  isLoading = false,
}: EquipmentUtilizationChartProps) {
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Equipment Utilization</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted h-80 animate-pulse rounded" />
        </CardContent>
      </Card>
    );
  }

  /**
   * Data transformation:
   * Aggregate equipment logs by date and status, sum hours for each status category,
   * transform to array of EquipmentUtilizationData objects.
   *
   * Example transformation:
   * equipmentLogs.reduce((acc, log) => {
   *   const dateKey = format(new Date(log.date), 'MMM dd');
   *   if (!acc[dateKey]) {
   *     acc[dateKey] = { date: dateKey, operational: 0, maintenance: 0, breakdown: 0, idle: 0 };
   *   }
   *   const status = log.status?.toLowerCase() || 'idle';
   *   acc[dateKey][status] += Number(log.hours);
   *   return acc;
   * }, {});
   */

  return (
    <Card>
      <CardHeader>
        <CardTitle>Equipment Utilization</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="date"
              className="text-xs"
              tickFormatter={(value) => new Date(value).toLocaleDateString()}
            />
            <YAxis className="text-xs" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar
              dataKey="operational"
              fill="hsl(var(--chart-1))"
              name="Operational"
              stackId="a"
            />
            <Bar
              dataKey="maintenance"
              fill="hsl(var(--chart-2))"
              name="Maintenance"
              stackId="a"
            />
            <Bar
              dataKey="breakdown"
              fill="hsl(var(--chart-5))"
              name="Breakdown"
              stackId="a"
            />
            <Bar
              dataKey="idle"
              fill="hsl(var(--muted))"
              name="Idle"
              stackId="a"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
