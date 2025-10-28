import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useApi } from './use-api';
import { queryKeys } from '@/lib/query-keys';
import type { EquipmentLog } from '@deskops/database';

interface EquipmentLogInput {
  siteId: string;
  date: Date;
  equipmentId: string;
  shift?: string;
  hoursUsed: number;
  fuelLiters?: number;
  notes?: string;
}

interface EquipmentLogWithRelations extends EquipmentLog {
  equipment: { code: string; name: string; type: string };
  site: { code: string; name: string };
}

interface EquipmentLogListResponse {
  logs: EquipmentLogWithRelations[];
}

interface EquipmentUtilizationResponse {
  utilization: Array<{
    equipmentId: string;
    equipment: { code: string; name: string; type: string };
    totalHours: number;
    avgHoursPerDay: number;
    utilizationRate: number;
  }>;
}

interface EquipmentParams {
  siteId: string;
  dateFrom?: string;
  dateTo?: string;
  enabled?: boolean;
}

export function useEquipmentLogs(params: EquipmentParams) {
  const api = useApi();

  return useQuery({
    queryKey: queryKeys.equipment.list(params),
    queryFn: async (): Promise<EquipmentLogWithRelations[]> => {
      const searchParams = new URLSearchParams({ siteId: params.siteId });
      if (params.dateFrom) searchParams.append('dateFrom', params.dateFrom);
      if (params.dateTo) searchParams.append('dateTo', params.dateTo);

      const response = await api.get<EquipmentLogListResponse>(
        `/api/equipment/logs?${searchParams}`
      );

      if (!response.success) {
        throw new Error(response.error || 'Failed to fetch equipment logs');
      }

      return response.data?.logs || [];
    },
    enabled: params.enabled !== false && !!params.siteId,
    staleTime: 5 * 60 * 1000,
  });
}

export function useEquipmentUtilization(siteId: string, enabled = true) {
  const api = useApi();

  return useQuery({
    queryKey: queryKeys.equipment.utilization(siteId),
    queryFn: async () => {
      const response = await api.get<EquipmentUtilizationResponse>(
        `/api/equipment/utilization?siteId=${siteId}`
      );

      if (!response.success) {
        throw new Error(
          response.error || 'Failed to fetch equipment utilization'
        );
      }

      return response.data?.utilization || [];
    },
    enabled: enabled && !!siteId,
    staleTime: 5 * 60 * 1000,
  });
}

export function useCreateEquipmentLog() {
  const queryClient = useQueryClient();
  const api = useApi();

  return useMutation({
    mutationFn: async (data: EquipmentLogInput) => {
      const response = await api.post<{ log: EquipmentLog }>(
        '/api/equipment/logs',
        data
      );

      if (!response.success) {
        throw new Error(response.error || 'Failed to create equipment log');
      }

      return response.data?.log;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.equipment.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.all });
    },
  });
}

export function useUpdateEquipmentLog() {
  const queryClient = useQueryClient();
  const api = useApi();

  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: string;
      data: Partial<EquipmentLogInput>;
    }) => {
      const response = await api.put<{ log: EquipmentLog }>(
        `/api/equipment/logs/${id}`,
        data
      );

      if (!response.success) {
        throw new Error(response.error || 'Failed to update equipment log');
      }

      return response.data?.log;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.equipment.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.all });
    },
  });
}

export function useDeleteEquipmentLog() {
  const queryClient = useQueryClient();
  const api = useApi();

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await api.delete<{ success: boolean }>(
        `/api/equipment/logs/${id}`
      );

      if (!response.success) {
        throw new Error(response.error || 'Failed to delete equipment log');
      }

      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.equipment.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.all });
    },
  });
}
