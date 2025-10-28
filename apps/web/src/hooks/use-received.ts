import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useApi } from './use-api';
import { queryKeys } from '@/lib/query-keys';
import type {
  ReceivedMaterial,
  ReceivedMaterialInput,
} from '@deskops/database';

interface ReceivedWithRelations extends ReceivedMaterial {
  material: { code: string; name: string; uom: string };
  site: { code: string; name: string };
}

interface ReceivedListResponse {
  received: ReceivedWithRelations[];
}

interface ReceivedParams {
  siteId: string;
  dateFrom?: string;
  dateTo?: string;
  enabled?: boolean;
}

export function useReceived(params: ReceivedParams) {
  const api = useApi();

  return useQuery({
    queryKey: queryKeys.received.list(params),
    queryFn: async (): Promise<ReceivedWithRelations[]> => {
      const searchParams = new URLSearchParams({ siteId: params.siteId });
      if (params.dateFrom) searchParams.append('dateFrom', params.dateFrom);
      if (params.dateTo) searchParams.append('dateTo', params.dateTo);

      const response = await api.get<ReceivedListResponse>(
        `/api/received?${searchParams}`
      );

      if (!response.success) {
        throw new Error(
          response.error || 'Failed to fetch received materials data'
        );
      }

      return response.data?.received || [];
    },
    enabled: params.enabled !== false && !!params.siteId,
    staleTime: 5 * 60 * 1000,
  });
}

export function useReceivedById(id: string, enabled = true) {
  const api = useApi();

  return useQuery({
    queryKey: queryKeys.received.detail(id),
    queryFn: async (): Promise<ReceivedWithRelations> => {
      const response = await api.get<{ received: ReceivedWithRelations }>(
        `/api/received/${id}`
      );

      if (!response.success) {
        throw new Error(
          response.error || 'Failed to fetch received material record'
        );
      }

      if (!response.data?.received) {
        throw new Error('Received material record not found');
      }

      return response.data.received;
    },
    enabled: enabled && !!id,
    staleTime: 5 * 60 * 1000,
  });
}

export function useCreateReceived() {
  const queryClient = useQueryClient();
  const api = useApi();

  return useMutation({
    mutationFn: async (data: ReceivedMaterialInput) => {
      const response = await api.post<{ received: ReceivedMaterial }>(
        '/api/received',
        data
      );

      if (!response.success) {
        throw new Error(
          response.error || 'Failed to create received material record'
        );
      }

      return response.data?.received;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.received.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.inventory.all });
    },
  });
}

export function useUpdateReceived() {
  const queryClient = useQueryClient();
  const api = useApi();

  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: string;
      data: Partial<ReceivedMaterialInput>;
    }) => {
      const response = await api.put<{ received: ReceivedMaterial }>(
        `/api/received/${id}`,
        data
      );

      if (!response.success) {
        throw new Error(
          response.error || 'Failed to update received material record'
        );
      }

      return response.data?.received;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.received.all });
      queryClient.invalidateQueries({
        queryKey: queryKeys.received.detail(variables.id),
      });
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.inventory.all });
    },
  });
}

export function useDeleteReceived() {
  const queryClient = useQueryClient();
  const api = useApi();

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await api.delete<{ success: boolean }>(
        `/api/received/${id}`
      );

      if (!response.success) {
        throw new Error(
          response.error || 'Failed to delete received material record'
        );
      }

      return response.data;
    },
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.received.all });
      queryClient.removeQueries({ queryKey: queryKeys.received.detail(id) });
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.inventory.all });
    },
  });
}
