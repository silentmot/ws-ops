/**
 * Export Job Processor Orchestrator
 * Manages export job lifecycle: process, progress tracking, completion, failure handling
 * Source: Task 11.2 - Export Job Orchestrator
 */

import { prisma } from '@/lib/db';
import { generateExcelExport } from './excel';
import { generatePDFExport } from './pdf';
import { generateCSVExport } from './csv';
import { generatePowerBICSVExport } from './powerbi-csv';
import type { ExportResult, ExportProcessor } from './types';

export class ExportJobProcessor implements ExportProcessor {
  /**
   * Process an export job by ID
   * Fetches job details, delegates to appropriate processor, handles completion/failure
   */
  async processJob(jobId: string): Promise<void> {
    try {
      const job = await prisma.exportJob.findUnique({
        where: { id: jobId },
      });

      if (!job) {
        throw new Error(`Export job ${jobId} not found`);
      }

      if (job.status !== 'pending') {
        throw new Error(`Export job ${jobId} is not in pending status`);
      }

      await this.updateProgress(jobId, 5);

      let result: ExportResult;

      switch (job.format) {
        case 'xlsx':
          result = await generateExcelExport({
            jobId: job.id,
            module: job.module,
            siteId: job.siteId,
            dateFrom: job.dateFrom,
            dateTo: job.dateTo,
            granularity: job.granularity,
          });
          break;

        case 'pdf':
          result = await generatePDFExport({
            jobId: job.id,
            module: job.module,
            siteId: job.siteId,
            dateFrom: job.dateFrom,
            dateTo: job.dateTo,
            granularity: job.granularity,
          });
          break;

        case 'csv':
          result = await generateCSVExport({
            jobId: job.id,
            module: job.module,
            siteId: job.siteId,
            dateFrom: job.dateFrom,
            dateTo: job.dateTo,
            granularity: job.granularity,
          });
          break;

        case 'powerbi-csv':
          result = await generatePowerBICSVExport({
            jobId: job.id,
            module: job.module,
            siteId: job.siteId,
            dateFrom: job.dateFrom,
            dateTo: job.dateTo,
            granularity: job.granularity,
          });
          break;

        default:
          throw new Error(`Unsupported export format: ${job.format}`);
      }

      await this.completeJob(jobId, result);
    } catch (error) {
      console.error(`Export job ${jobId} failed:`, error);
      await this.failJob(
        jobId,
        error instanceof Error ? error.message : 'Unknown error occurred'
      );
      throw error;
    }
  }

  /**
   * Update job progress percentage
   */
  async updateProgress(jobId: string, progress: number): Promise<void> {
    const clampedProgress = Math.max(0, Math.min(100, progress));

    await prisma.exportJob.update({
      where: { id: jobId },
      data: {
        progress: clampedProgress,
        status:
          clampedProgress > 0 && clampedProgress < 100
            ? 'processing'
            : 'pending',
        updatedAt: new Date(),
      },
    });
  }

  /**
   * Mark job as completed with file details
   */
  async completeJob(jobId: string, result: ExportResult): Promise<void> {
    const downloadUrl = `/api/exports/${jobId}/download`;
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 24);

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
        updatedAt: new Date(),
      },
    });

    const job = await prisma.exportJob.findUnique({
      where: { id: jobId },
    });

    if (!job) {
      throw new Error(`Job ${jobId} not found after completion`);
    }

    await prisma.exportAudit.create({
      data: {
        jobId,
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
      },
    });
  }

  /**
   * Mark job as failed with error message
   */
  async failJob(jobId: string, error: string): Promise<void> {
    await prisma.exportJob.update({
      where: { id: jobId },
      data: {
        status: 'failed',
        errorMessage: error.substring(0, 500),
        updatedAt: new Date(),
      },
    });
  }
}

export const exportJobProcessor = new ExportJobProcessor();
