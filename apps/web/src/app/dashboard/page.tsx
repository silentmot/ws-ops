'use client';

import { useState, useEffect } from 'react';
import { Card } from '@deskops/ui';
import { toast } from 'sonner';
import { DEFAULT_SITE_ID } from '@deskops/constants';
import { KPICard } from '@/components/dashboard/kpi-card';

interface DashboardMetrics {
  totalProduction: {
    current: number;
    previous: number;
    percentageChange: number;
  };
  totalDispatched: {
    current: number;
    previous: number;
    percentageChange: number;
  };
  totalReceived: {
    current: number;
    previous: number;
    percentageChange: number;
  };
  equipmentUtilization: {
    current: number;
    previous: number;
    percentageChange: number;
  };
  currentInventoryStatus: {
    current: number;
    previous: number;
    percentageChange: number;
  };
}

export default function DashboardPage(): React.JSX.Element {
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSite] = useState(DEFAULT_SITE_ID);

  const fetchMetrics = async (): Promise<void> => {
    try {
      const params = new URLSearchParams({
        siteId: selectedSite,
      });

      const response = await fetch(`/api/dashboard/metrics?${params.toString()}`);

      if (!response.ok) {
        throw new Error('Failed to fetch dashboard metrics');
      }

      const data = await response.json();
      setMetrics(data);
    } catch (_error) {
      toast.error('Failed to load dashboard metrics');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchMetrics();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Real-time operational metrics and performance indicators
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {loading ? (
          <>
            <KPICard
              title="Metric 1"
              value={0}
              unit="TON"
              change={0}
              isLoading={true}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500"
            />
            <KPICard
              title="Metric 2"
              value={0}
              unit="TON"
              change={0}
              isLoading={true}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500 [animation-delay:50ms]"
            />
            <KPICard
              title="Metric 3"
              value={0}
              unit="TON"
              change={0}
              isLoading={true}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500 [animation-delay:100ms]"
            />
            <KPICard
              title="Metric 4"
              value={0}
              unit="TON"
              change={0}
              isLoading={true}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500 [animation-delay:150ms]"
            />
          </>
        ) : metrics ? (
          <>
            <KPICard
              title="Total Production Today"
              value={metrics.totalProduction.current}
              unit="TON"
              change={metrics.totalProduction.percentageChange}
              sparkData={[]}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500"
            />
            <KPICard
              title="Received Materials Today"
              value={metrics.totalReceived.current}
              unit="TON"
              change={metrics.totalReceived.percentageChange}
              sparkData={[]}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500 [animation-delay:50ms]"
            />
            <KPICard
              title="Total Dispatched Today"
              value={metrics.totalDispatched.current}
              unit="TON"
              change={metrics.totalDispatched.percentageChange}
              sparkData={[]}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500 [animation-delay:100ms]"
            />
            <KPICard
              title="Current Inventory Status"
              value={metrics.currentInventoryStatus.current}
              unit="TON"
              change={metrics.currentInventoryStatus.percentageChange}
              sparkData={[]}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500 [animation-delay:150ms]"
            />
          </>
        ) : (
          <Card className="col-span-full p-6">
            <p className="text-center text-muted-foreground">
              Failed to load metrics data. Please try again.
            </p>
            <button
              onClick={() => {
                setLoading(true);
                void fetchMetrics();
              }}
              className="mx-auto mt-4 block rounded bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
            >
              Retry
            </button>
          </Card>
        )}
      </div>
    </div>
  );
}
