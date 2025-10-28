import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useApi } from './use-api';
import { queryKeys } from '@/lib/query-keys';
import type { ManpowerLog } from '@deskops/database';

interface ManpowerLogInput {
  siteId: string;
  date: Date;
  roleId: string;
  shift?: string;
  headcount: number;
  notes?: string;
}

interface ManpowerLogWithRelations extends ManpowerLog {
  role: { code: string; name: string; category: string };
  site: { code: string; name: string };
}

interface ManpowerLogListResponse {
  logs: ManpowerLogWithRelations[];
}

interface ManpowerParams {
  siteId: string;
  dateFrom?: string;
  dateTo?: string;
  enabled?: boolean;
}

export function useManpowerLogs(params: ManpowerParams) {
  const api = useApi();

  return useQuery({
    queryKey: queryKeys.manpower.list(params),
    queryFn: async (): Promise<ManpowerLogWithRelations[]> => {
      const searchParams = new URLSearchParams({ siteId: params.siteId });
      if (params.dateFrom) searchParams.append('dateFrom', params.dateFrom);
      if (params.dateTo) searchParams.append('dateTo', params.dateTo);

      const response = await api.get<ManpowerLogListResponse>(
        `/api/manpower/logs?${searchParams}`
      );

      if (!response.success) {
        throw new Error(response.error || 'Failed to fetch manpower logs');
      }

      return response.data?.logs || [];
    },
    enabled: params.enabled !== false && !!params.siteId,
    staleTime: 5 * 60 * 1000,
  });
}

export function useCreateManpowerLog() {
  const queryClient = useQueryClient();
  const api = useApi();

  return useMutation({
    mutationFn: async (data: ManpowerLogInput) => {
      const response = await api.post<{ log: ManpowerLog }>(
        '/api/manpower/logs',
        data
      );

      if (!response.success) {
        throw new Error(response.error || 'Failed to create manpower log');
      }

      return response.data?.log;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.manpower.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.all });
    },
  });
}

export function useUpdateManpowerLog() {
  const queryClient = useQueryClient();
  const api = useApi();

  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: string;
      data: Partial<ManpowerLogInput>;
    }) => {
      const response = await api.put<{ log: ManpowerLog }>(
        `/api/manpower/logs/${id}`,
        data
      );

      if (!response.success) {
        throw new Error(response.error || 'Failed to update manpower log');
      }

      return response.data?.log;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.manpower.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.all });
    },
  });
}

export function useDeleteManpowerLog() {
  const queryClient = useQueryClient();
  const api = useApi();

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await api.delete<{ success: boolean }>(
        `/api/manpower/logs/${id}`
      );

      if (!response.success) {
        throw new Error(response.error || 'Failed to delete manpower log');
      }

      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.manpower.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.all });
    },
  });
}
