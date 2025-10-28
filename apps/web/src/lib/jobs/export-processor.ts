import { createHash } from 'crypto';
import { prisma } from '@/lib/db';
import { generateExcelExport } from '../exporters/excel';
import { generatePDFExport } from '../exporters/pdf';
import { generateCSVExport } from '../exporters/csv';

interface ExportResult {
  filePath: string;
  fileSize: number;
  fileHash: string;
  recordCount: number;
}

interface ExportJobProcessor {
  processJob(jobId: string): Promise<void>;
  updateProgress(jobId: string, progress: number): Promise<void>;
  completeJob(
    jobId: string,
    result: ExportResult,
    downloadUrl: string
  ): Promise<void>;
  failJob(jobId: string, errorMessage: string): Promise<void>;
}

// Placeholder constants
const EXPORT_STORAGE_PATH = '{EXPORT_STORAGE_PATH}';
const HASH_ALGORITHM = 'sha256';

export class ExportProcessor implements ExportJobProcessor {
  async processJob(jobId: string): Promise<void> {
    const job = await prisma.exportJob.findUnique({
      where: { id: jobId },
    });

    if (!job) {
      throw new Error(`Export job ${jobId} not found`);
    }

    try {
      await this.updateProgress(jobId, 10);

      let result: ExportResult;

      const options = {
        jobId: job.id,
        module: job.module,
        siteId: job.siteId,
        dateFrom: job.dateFrom,
        dateTo: job.dateTo,
        granularity: job.granularity,
      };

      switch (job.format) {
        case 'xlsx':
          result = await generateExcelExport(options);
          break;
        case 'csv':
          result = await generateCSVExport(options);
          break;
        case 'pdf':
          result = await generatePDFExport(options);
          break;
        default:
          throw new Error(`Unsupported format: ${job.format}`);
      }

      const downloadUrl = `/api/exports/${job.id}/download`;

      await this.completeJob(jobId, result, downloadUrl);

      // Create audit record
      await prisma.exportAudit.create({
        data: {
          jobId: job.id,
          siteId: job.siteId,
          userId: job.userId,
          module: job.module,
          filtersJson: JSON.stringify({
            dateFrom: job.dateFrom,
            dateTo: job.dateTo,
            granularity: job.granularity,
          }),
          recordCount: result.recordCount,
          fileSize: result.fileSize,
          fileHash: result.fileHash,
          downloadCount: 0,
        },
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error occurred';
      await this.failJob(jobId, errorMessage);
      throw error;
    }
  }

  async updateProgress(jobId: string, progress: number): Promise<void> {
    await prisma.exportJob.update({
      where: { id: jobId },
      data: {
        status: 'processing',
        progress: Math.min(100, Math.max(0, progress)),
      },
    });
  }

  async completeJob(
    jobId: string,
    result: ExportResult,
    downloadUrl: string
  ): Promise<void> {
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 24); // 24-hour expiry

    await prisma.exportJob.update({
      where: { id: jobId },
      data: {
        status: 'completed',
        progress: 100,
        filePath: result.filePath,
        fileSize: result.fileSize,
        fileHash: result.fileHash,
        downloadUrl,
        expiresAt,
      },
    });
  }

  async failJob(jobId: string, errorMessage: string): Promise<void> {
    await prisma.exportJob.update({
      where: { id: jobId },
      data: {
        status: 'failed',
        errorMessage,
      },
    });
  }

  protected calculateFileHash(buffer: Buffer): string {
    return createHash(HASH_ALGORITHM).update(buffer).digest('hex');
  }

  protected getStoragePath(jobId: string, format: string): string {
    return `${EXPORT_STORAGE_PATH}/${jobId}.${format}`;
  }
}
