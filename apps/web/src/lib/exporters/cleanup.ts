/**
 * Cleanup Job for Expired Export Files
 * Automatically deletes files after 24-hour expiry and updates database records
 * Source: Task 11.2 - Export Cleanup System
 */

import { unlink } from 'fs/promises';
import { existsSync } from 'fs';
import { prisma } from '@/lib/db';

export interface CleanupResult {
  deletedFiles: number;
  failedDeletions: number;
  errors: Array<{ jobId: string; error: string }>;
}

/**
 * Clean up expired export files and update database
 */
export async function cleanupExpiredExports(): Promise<CleanupResult> {
  const result: CleanupResult = {
    deletedFiles: 0,
    failedDeletions: 0,
    errors: [],
  };

  try {
    const expiredJobs = await prisma.exportJob.findMany({
      where: {
        status: 'completed',
        expiresAt: { lt: new Date() },
        filePath: { not: null },
      },
      select: {
        id: true,
        filePath: true,
      },
    });

    for (const job of expiredJobs) {
      try {
        if (!job.filePath) {
          continue;
        }

        if (existsSync(job.filePath)) {
          await unlink(job.filePath);
        }

        await prisma.exportJob.update({
          where: { id: job.id },
          data: {
            filePath: null,
            downloadUrl: null,
            updatedAt: new Date(),
          },
        });

        result.deletedFiles++;
      } catch (error) {
        result.failedDeletions++;
        const errorMessage =
          error instanceof Error ? error.message : 'Unknown error';
        result.errors.push({ jobId: job.id, error: errorMessage });
        console.error(`[Cleanup] Failed to cleanup job ${job.id}:`, error);
      }
    }
  } catch (error) {
    console.error('[Cleanup] Critical error during cleanup:', error);
    throw error;
  }

  return result;
}

/**
 * Clean up failed exports older than 7 days
 */
export async function cleanupFailedExports(): Promise<CleanupResult> {
  const result: CleanupResult = {
    deletedFiles: 0,
    failedDeletions: 0,
    errors: [],
  };

  try {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const failedJobs = await prisma.exportJob.findMany({
      where: {
        status: 'failed',
        updatedAt: { lt: sevenDaysAgo },
        filePath: { not: null },
      },
      select: {
        id: true,
        filePath: true,
      },
    });

    for (const job of failedJobs) {
      try {
        if (!job.filePath) {
          continue;
        }

        if (existsSync(job.filePath)) {
          await unlink(job.filePath);
        }

        await prisma.exportJob.update({
          where: { id: job.id },
          data: {
            filePath: null,
            updatedAt: new Date(),
          },
        });

        result.deletedFiles++;
      } catch (error) {
        result.failedDeletions++;
        const errorMessage =
          error instanceof Error ? error.message : 'Unknown error';
        result.errors.push({ jobId: job.id, error: errorMessage });
        console.error(
          `[Cleanup] Failed to cleanup failed job ${job.id}:`,
          error
        );
      }
    }
  } catch (error) {
    console.error(
      '[Cleanup] Critical error during failed exports cleanup:',
      error
    );
    throw error;
  }

  return result;
}

/**
 * Run both cleanup tasks
 */
export async function runFullCleanup(): Promise<{
  expired: CleanupResult;
  failed: CleanupResult;
}> {
  const expired = await cleanupExpiredExports();
  const failed = await cleanupFailedExports();

  return { expired, failed };
}

/**
 * Schedule automatic cleanup every 6 hours
 * To be called from a cron job or background worker
 */
export function scheduleAutomaticCleanup(): NodeJS.Timeout {
  const SIX_HOURS_MS = 6 * 60 * 60 * 1000;

  const intervalId = setInterval(async () => {
    try {
      await runFullCleanup();
    } catch (error) {
      console.error('[Cleanup] Scheduled cleanup failed:', error);
    }
  }, SIX_HOURS_MS);

  runFullCleanup().catch((error) => {
    console.error('[Cleanup] Initial cleanup failed:', error);
  });

  return intervalId;
}
