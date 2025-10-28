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
import { ROLES } from '@deskops/constants';

interface ManpowerData {
  date: string;
  [key: string]: string | number;
}

interface ManpowerAttendanceChartProps {
  data: ManpowerData[];
  isLoading?: boolean;
}

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  label?: string;
}

function CustomTooltip({
  active,
  payload,
  label,
}: TooltipProps): React.ReactElement | null {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background rounded-lg border p-2 shadow-sm">
        <p className="text-sm font-medium">{label}</p>
        {payload.map(
          (
            entry: { name: string; value: number; color: string },
            index: number
          ) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value} workers
            </p>
          )
        )}
      </div>
    );
  }

  return null;
}

const ROLE_COLORS: Record<string, string> = {
  EQUIPMENT_DRIVER: '#3b82f6',
  CRUSHER_OPERATOR: '#10b981',
  MAINTENANCE_WORKER: '#f59e0b',
  LABORER: '#8b5cf6',
  SECURITY: '#ef4444',
};

export function ManpowerAttendanceChart({
  data,
  isLoading = false,
}: ManpowerAttendanceChartProps) {
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Manpower Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted h-[300px] animate-pulse rounded" />
        </CardContent>
      </Card>
    );
  }

  /**
   * Data transformation:
   * Aggregate manpower logs by date and role, sum headcount for each role,
   * optionally include shift dimension.
   *
   * Example transformation:
   * manpowerLogs.reduce((acc, log) => {
   *   const dateKey = format(new Date(log.date), 'MMM dd');
   *   if (!acc[dateKey]) {
   *     acc[dateKey] = { date: dateKey };
   *     ROLES.forEach(role => acc[dateKey][role.code] = 0);
   *   }
   *   acc[dateKey][log.role.code] += log.headcount;
   *   return acc;
   * }, {});
   */

  return (
    <Card>
      <CardHeader>
        <CardTitle>Manpower Attendance</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis
              label={{ value: 'Workers', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            {ROLES.map((role) => (
              <Bar
                key={role.code}
                dataKey={role.code}
                stackId="a"
                fill={ROLE_COLORS[role.code] || '#64748b'}
                name={role.name}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
