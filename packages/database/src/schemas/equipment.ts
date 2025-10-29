import { SHIFT_TYPES, EQUIPMENT_STATUSES } from '@deskops/constants';
import { z } from 'zod';

export const EquipmentLogSchema = z.object({
  siteId: z.string().cuid(),
  date: z.coerce.date(),
  equipmentId: z.string(),
  hours: z.number().min(0).max(24),
  count: z.number().int().min(0).max(100),
  shift: z.enum(SHIFT_TYPES).optional(),
  status: z.enum(EQUIPMENT_STATUSES).optional(),
  notes: z.string().max(500).optional(),
});

export type EquipmentLogInput = z.infer<typeof EquipmentLogSchema>;
