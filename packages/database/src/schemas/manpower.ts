import { z } from 'zod';
import { SHIFT_TYPES } from '@deskops/constants';

export const ManpowerLogSchema = z.object({
  siteId: z.string().cuid(),
  date: z.date(),
  roleId: z.string(),
  headcount: z.number().int().min(0).max(500),
  hours: z.number().min(0).max(24),
  shift: z.enum(SHIFT_TYPES).optional(),
  notes: z.string().max(500).optional(),
});

export type ManpowerLogInput = z.infer<typeof ManpowerLogSchema>;
