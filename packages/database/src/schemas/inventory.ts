import { z } from 'zod';

export const InventorySnapshotSchema = z.object({
  siteId: z.string().cuid(),
  date: z.date(),
  materialId: z.string(),
  openingTon: z.number().min(0).max(999999.999),
  producedTon: z.number().min(0).max(999999.999),
  receivedTon: z.number().min(0).max(999999.999),
  dispatchedTon: z.number().min(0).max(999999.999),
  adjustmentTon: z.number().min(-999999.999).max(999999.999).default(0),
  closingTon: z.number().min(0).max(999999.999),
  isCalculated: z.boolean().default(false),
});

export const InventorySnapshotCreateSchema = z.object({
  siteId: z.string().cuid(),
  date: z.date(),
  materialId: z.string(),
  openingTon: z.number().min(0).max(999999.999),
  producedTon: z.number().min(0).max(999999.999).optional(),
  receivedTon: z.number().min(0).max(999999.999).optional(),
  dispatchedTon: z.number().min(0).max(999999.999).optional(),
  adjustmentTon: z.number().min(-999999.999).max(999999.999).default(0),
  closingTon: z.number().min(0).max(999999.999).optional(),
  isCalculated: z.boolean().default(false),
});

export type InventorySnapshotInput = z.infer<typeof InventorySnapshotSchema>;
export type InventorySnapshotCreateInput = z.infer<
  typeof InventorySnapshotCreateSchema
>;
