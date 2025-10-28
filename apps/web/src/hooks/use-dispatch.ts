import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useApi } from './use-api';
import { queryKeys } from '@/lib/query-keys';
import type { Dispatch, DispatchInput } from '@deskops/database';

interface DispatchWithRelations extends Dispatch {
  material: { code: string; name: string; uom: string };
  site: { code: string; name: string };
}

interface DispatchListResponse {
  dispatches: DispatchWithRelations[];
}

interface DispatchParams {
  siteId: string;
  dateFrom?: string;
  dateTo?: string;
  enabled?: boolean;
}

export function useDispatch(params: DispatchParams) {
  const api = useApi();

  return useQuery({
    queryKey: queryKeys.dispatch.list(params),
    queryFn: async (): Promise<DispatchWithRelations[]> => {
      const searchParams = new URLSearchParams({ siteId: params.siteId });
      if (params.dateFrom) searchParams.append('dateFrom', params.dateFrom);
      if (params.dateTo) searchParams.append('dateTo', params.dateTo);

      const response = await api.get<DispatchListResponse>(
        `/api/dispatch?${searchParams}`
      );

      if (!response.success) {
        throw new Error(response.error || 'Failed to fetch dispatch data');
      }

      return response.data?.dispatches || [];
    },
    enabled: params.enabled !== false && !!params.siteId,
    staleTime: 5 * 60 * 1000,
  });
}

export function useDispatchById(id: string, enabled = true) {
  const api = useApi();

  return useQuery({
    queryKey: queryKeys.dispatch.detail(id),
    queryFn: async (): Promise<DispatchWithRelations> => {
      const response = await api.get<{ dispatch: DispatchWithRelations }>(
        `/api/dispatch/${id}`
      );

      if (!response.success) {
        throw new Error(response.error || 'Failed to fetch dispatch record');
      }

      if (!response.data?.dispatch) {
        throw new Error('Dispatch record not found');
      }

      return response.data.dispatch;
    },
    enabled: enabled && !!id,
    staleTime: 5 * 60 * 1000,
  });
}

export function useCreateDispatch() {
  const queryClient = useQueryClient();
  const api = useApi();

  return useMutation({
    mutationFn: async (data: DispatchInput) => {
      const response = await api.post<{ dispatch: Dispatch }>(
        '/api/dispatch',
        data
      );

      if (!response.success) {
        throw new Error(response.error || 'Failed to create dispatch record');
      }

      return response.data?.dispatch;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.dispatch.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.inventory.all });
    },
  });
}

export function useUpdateDispatch() {
  const queryClient = useQueryClient();
  const api = useApi();

  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: string;
      data: Partial<DispatchInput>;
    }) => {
      const response = await api.put<{ dispatch: Dispatch }>(
        `/api/dispatch/${id}`,
        data
      );

      if (!response.success) {
        throw new Error(response.error || 'Failed to update dispatch record');
      }

      return response.data?.dispatch;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.dispatch.all });
      queryClient.invalidateQueries({
        queryKey: queryKeys.dispatch.detail(variables.id),
      });
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.inventory.all });
    },
  });
}

export function useDeleteDispatch() {
  const queryClient = useQueryClient();
  const api = useApi();

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await api.delete<{ success: boolean }>(
        `/api/dispatch/${id}`
      );

      if (!response.success) {
        throw new Error(response.error || 'Failed to delete dispatch record');
      }

      return response.data;
    },
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.dispatch.all });
      queryClient.removeQueries({ queryKey: queryKeys.dispatch.detail(id) });
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.inventory.all });
    },
  });
}
