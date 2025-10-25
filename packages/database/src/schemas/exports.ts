import { z } from 'zod';

export const ExportJobCreateSchema = z
  .object({
    siteId: z.string().cuid(),
    userId: z.string(),
    module: z.enum([
      'production',
      'dispatch',
      'received',
      'equipment',
      'manpower',
      'inventory',
    ]),
    dateFrom: z.date(),
    dateTo: z.date(),
    granularity: z.enum(['daily', 'weekly', 'monthly']).default('daily'),
    format: z.enum(['xlsx', 'pdf', 'csv']),
  })
  .refine((data) => data.dateTo >= data.dateFrom, {
    message: 'dateTo must be greater than or equal to dateFrom',
    path: ['dateTo'],
  });

export const ExportJobUpdateSchema = z.object({
  status: z.enum(['pending', 'processing', 'completed', 'failed']).optional(),
  progress: z.number().int().min(0).max(100).optional(),
  filePath: z.string().optional(),
  fileSize: z.number().int().positive().optional(),
  fileHash: z.string().optional(),
  errorMessage: z.string().optional(),
  downloadUrl: z.string().url().optional(),
  expiresAt: z.date().optional(),
});

export const ExportAuditSchema = z.object({
  jobId: z.string().cuid(),
  siteId: z.string().cuid(),
  userId: z.string(),
  module: z.string(),
  filtersJson: z.string(),
  columnPreset: z.string().optional(),
  recordCount: z.number().int().min(0),
  fileSize: z.number().int().positive(),
  fileHash: z.string(),
  downloadCount: z.number().int().min(0).default(0),
  lastDownload: z.date().optional(),
});

export type ExportJobCreateInput = z.infer<typeof ExportJobCreateSchema>;
export type ExportJobUpdateInput = z.infer<typeof ExportJobUpdateSchema>;
export type ExportAuditInput = z.infer<typeof ExportAuditSchema>;
