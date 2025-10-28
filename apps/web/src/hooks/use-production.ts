import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useApi } from './use-api';
import { queryKeys } from '@/lib/query-keys';
import type { Production, ProductionInput } from '@deskops/database';

interface ProductionWithRelations extends Production {
  material: { code: string; name: string; uom: string };
  site: { code: string; name: string };
}

interface ProductionListResponse {
  productions: ProductionWithRelations[];
}

interface ProductionParams {
  siteId: string;
  dateFrom?: string;
  dateTo?: string;
  enabled?: boolean;
}

export function useProduction(params: ProductionParams) {
  const api = useApi();

  return useQuery({
    queryKey: queryKeys.production.list(params),
    queryFn: async (): Promise<ProductionWithRelations[]> => {
      const searchParams = new URLSearchParams({ siteId: params.siteId });
      if (params.dateFrom) searchParams.append('dateFrom', params.dateFrom);
      if (params.dateTo) searchParams.append('dateTo', params.dateTo);

      const response = await api.get<ProductionListResponse>(
        `/api/production?${searchParams}`
      );

      if (!response.success) {
        throw new Error(response.error || 'Failed to fetch production data');
      }

      return response.data?.productions || [];
    },
    enabled: params.enabled !== false && !!params.siteId,
    staleTime: 5 * 60 * 1000,
  });
}

export function useProductionById(id: string, enabled = true) {
  const api = useApi();

  return useQuery({
    queryKey: queryKeys.production.detail(id),
    queryFn: async (): Promise<ProductionWithRelations> => {
      const response = await api.get<{ production: ProductionWithRelations }>(
        `/api/production/${id}`
      );

      if (!response.success) {
        throw new Error(response.error || 'Failed to fetch production record');
      }

      if (!response.data?.production) {
        throw new Error('Production record not found');
      }

      return response.data.production;
    },
    enabled: enabled && !!id,
    staleTime: 5 * 60 * 1000,
  });
}

export function useCreateProduction() {
  const queryClient = useQueryClient();
  const api = useApi();

  return useMutation({
    mutationFn: async (data: ProductionInput) => {
      const response = await api.post<{ production: Production }>(
        '/api/production',
        data
      );

      if (!response.success) {
        throw new Error(response.error || 'Failed to create production record');
      }

      return response.data?.production;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.production.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.inventory.all });
    },
  });
}

export function useUpdateProduction() {
  const queryClient = useQueryClient();
  const api = useApi();

  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: string;
      data: Partial<ProductionInput>;
    }) => {
      const response = await api.put<{ production: Production }>(
        `/api/production/${id}`,
        data
      );

      if (!response.success) {
        throw new Error(response.error || 'Failed to update production record');
      }

      return response.data?.production;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.production.all });
      queryClient.invalidateQueries({
        queryKey: queryKeys.production.detail(variables.id),
      });
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.inventory.all });
    },
  });
}

export function useDeleteProduction() {
  const queryClient = useQueryClient();
  const api = useApi();

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await api.delete<{ success: boolean }>(
        `/api/production/${id}`
      );

      if (!response.success) {
        throw new Error(response.error || 'Failed to delete production record');
      }

      return response.data;
    },
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.production.all });
      queryClient.removeQueries({ queryKey: queryKeys.production.detail(id) });
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.inventory.all });
    },
  });
}
