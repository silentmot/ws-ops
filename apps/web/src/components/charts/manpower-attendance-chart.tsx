'use client';

import { useEffect, useState } from 'react';
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
import { format } from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle } from '@deskops/ui';

interface ManpowerData {
  date: string;
  EQUIPMENT_DRIVER: number;
  CRUSHER_OPERATOR: number;
  MAINTENANCE_WORKER: number;
  LABORER: number;
  SUPERVISOR: number;
}

interface ManpowerAttendanceChartProps {
  siteId: string;
  startDate: Date;
  endDate: Date;
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

export function ManpowerAttendanceChart({
  siteId,
  startDate,
  endDate,
}: ManpowerAttendanceChartProps) {
  const [data, setData] = useState<ManpowerData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const params = new URLSearchParams({
          siteId,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
        });

        const response = await fetch(`/api/manpower/logs?${params.toString()}`);
        if (!response.ok) throw new Error('Failed to fetch manpower data');

        const logs = await response.json();

        // Transform data: Group by date and role, sum headcount
        const groupedData = logs.reduce(
          (
            acc: Record<string, Record<string, number>>,
            log: {
              date: string;
              role: { code: string };
              headcount: number;
            }
          ) => {
            const dateKey = format(new Date(log.date), 'MMM dd');
            if (!acc[dateKey]) {
              acc[dateKey] = {
                EQUIPMENT_DRIVER: 0,
                CRUSHER_OPERATOR: 0,
                MAINTENANCE_WORKER: 0,
                LABORER: 0,
                SUPERVISOR: 0,
              };
            }
            const roleCode = log.role.code;
            acc[dateKey][roleCode] =
              (acc[dateKey][roleCode] || 0) + log.headcount;
            return acc;
          },
          {}
        );

        const chartData: ManpowerData[] = Object.entries(groupedData).map(
          ([date, roles]) => {
            const typedRoles = roles as Record<string, number>;
            return {
              date,
              EQUIPMENT_DRIVER: typedRoles['EQUIPMENT_DRIVER'] || 0,
              CRUSHER_OPERATOR: typedRoles['CRUSHER_OPERATOR'] || 0,
              MAINTENANCE_WORKER: typedRoles['MAINTENANCE_WORKER'] || 0,
              LABORER: typedRoles['LABORER'] || 0,
              SUPERVISOR: typedRoles['SUPERVISOR'] || 0,
            };
          }
        );

        setData(chartData);
      } catch (error) {
        console.error('Error fetching manpower data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [siteId, startDate, endDate]);

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
            <Bar
              dataKey="EQUIPMENT_DRIVER"
              stackId="a"
              fill="#3b82f6"
              name="Equipment Driver"
            />
            <Bar
              dataKey="CRUSHER_OPERATOR"
              stackId="a"
              fill="#10b981"
              name="Crusher Operator"
            />
            <Bar
              dataKey="MAINTENANCE_WORKER"
              stackId="a"
              fill="#f59e0b"
              name="Maintenance Worker"
            />
            <Bar dataKey="LABORER" stackId="a" fill="#8b5cf6" name="Laborer" />
            <Bar
              dataKey="SUPERVISOR"
              stackId="a"
              fill="#ef4444"
              name="Supervisor"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
