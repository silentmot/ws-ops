import { useQuery } from '@tanstack/react-query';
import { useApi } from './use-api';
import { queryKeys } from '@/lib/query-keys';

interface DashboardKPIs {
  totalProduction: number;
  totalDispatch: number;
  totalReceived: number;
  currentInventory: number;
  productionTrend: number;
  dispatchTrend: number;
  receivedTrend: number;
  inventoryTrend: number;
}

interface DashboardTrend {
  date: string;
  production: number;
  dispatch: number;
  received: number;
  inventory: number;
}

interface DashboardMetricsResponse {
  kpis: DashboardKPIs;
  trends: DashboardTrend[];
}

interface DashboardMetricsParams {
  siteId: string;
  dateRange?: { from: string; to: string };
  enabled?: boolean;
}

export function useDashboardMetrics(params: DashboardMetricsParams) {
  const api = useApi();

  return useQuery({
    queryKey: queryKeys.dashboard.kpis(params.siteId, params.dateRange),
    queryFn: async (): Promise<DashboardMetricsResponse> => {
      const searchParams = new URLSearchParams({ siteId: params.siteId });
      if (params.dateRange) {
        searchParams.append('dateFrom', params.dateRange.from);
        searchParams.append('dateTo', params.dateRange.to);
      }

      const response = await api.get<DashboardMetricsResponse>(
        `/api/dashboard/kpis?${searchParams}`
      );

      if (!response.success) {
        throw new Error(response.error || 'Failed to fetch dashboard metrics');
      }

      return (
        response.data || {
          kpis: {
            totalProduction: 0,
            totalDispatch: 0,
            totalReceived: 0,
            currentInventory: 0,
            productionTrend: 0,
            dispatchTrend: 0,
            receivedTrend: 0,
            inventoryTrend: 0,
          },
          trends: [],
        }
      );
    },
    enabled: params.enabled !== false && !!params.siteId,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchInterval: 5 * 60 * 1000, // Auto-refetch every 5 minutes
    refetchIntervalInBackground: false, // Only refetch when tab is active
  });
}

interface TrendDataParams {
  siteId: string;
  period: 'daily' | 'weekly' | 'monthly';
  enabled?: boolean;
}

export function useDashboardTrends(params: TrendDataParams) {
  const api = useApi();

  return useQuery({
    queryKey: queryKeys.dashboard.trends(params.siteId, params.period),
    queryFn: async (): Promise<DashboardTrend[]> => {
      const searchParams = new URLSearchParams({
        siteId: params.siteId,
        period: params.period,
      });

      const response = await api.get<{ trends: DashboardTrend[] }>(
        `/api/dashboard/trends?${searchParams}`
      );

      if (!response.success) {
        throw new Error(response.error || 'Failed to fetch dashboard trends');
      }

      return response.data?.trends || [];
    },
    enabled: params.enabled !== false && !!params.siteId,
    staleTime: 5 * 60 * 1000,
    refetchInterval: 5 * 60 * 1000,
    refetchIntervalInBackground: false,
  });
}
