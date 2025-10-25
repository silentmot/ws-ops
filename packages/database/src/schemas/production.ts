import { z } from 'zod';
import {
  OPERATION_TYPES,
  SHIFT_TYPES,
  type OperationType,
} from '@deskops/constants';

const operationTypes = Object.keys(OPERATION_TYPES) as unknown as [
  OperationType,
  ...OperationType[],
];

export const ProductionSchema = z.object({
  siteId: z.string().cuid(),
  date: z.date(),
  shift: z.enum(SHIFT_TYPES).optional(),
  materialId: z.string(),
  qtyTon: z.number().positive().max(999999.999),
  operation: z.enum(operationTypes),
  notes: z.string().max(500).optional(),
});

export const DispatchSchema = z.object({
  siteId: z.string().cuid(),
  date: z.date(),
  materialId: z.string(),
  qtyTon: z.number().positive().max(999999.999),
  trips: z.number().int().positive().optional(),
  owner: z.string().max(200).optional(),
  reference: z.string().max(100).optional(),
  operation: z.enum(operationTypes),
  notes: z.string().max(500).optional(),
});

export const ReceivedMaterialSchema = z.object({
  siteId: z.string().cuid(),
  date: z.date(),
  materialId: z.string(),
  qtyTon: z.number().positive().max(999999.999),
  source: z.string().max(200).optional(),
  vehicleRef: z.string().max(100).optional(),
  notes: z.string().max(500).optional(),
});

export type ProductionInput = z.infer<typeof ProductionSchema>;
export type DispatchInput = z.infer<typeof DispatchSchema>;
export type ReceivedMaterialInput = z.infer<typeof ReceivedMaterialSchema>;
