/**
 * Shared types for export file processors
 * Source: Task 11.2 - Export System Types
 */

export interface ExportJobData {
  id: string;
  siteId: string;
  module: string;
  dateFrom: Date;
  dateTo: Date;
  granularity: string;
  format: string;
}

export interface ExportResult {
  filePath: string;
  fileSize: number;
  fileHash: string;
  recordCount: number;
}

export type ProgressCallback = (progress: number) => Promise<void>;

export interface ExporterOptions {
  jobData: ExportJobData;
  onProgress: ProgressCallback;
}

export interface ExportProcessor {
  processJob(jobId: string): Promise<void>;
  updateProgress(jobId: string, progress: number): Promise<void>;
  completeJob(jobId: string, result: ExportResult): Promise<void>;
  failJob(jobId: string, error: string): Promise<void>;
}
