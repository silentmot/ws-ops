import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
import { prisma } from '@/lib/db';
import { handleApiError } from '@/lib/error-handler';

const CONTENT_TYPE_MAP: Record<string, string> = {
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  csv: 'text/csv',
  pdf: 'application/pdf',
};

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ jobId: string }> }
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { jobId } = await params;

    const job = await prisma.exportJob.findUnique({
      where: { id: jobId },
    });

    if (!job) {
      return NextResponse.json(
        { message: 'Export job not found' },
        { status: 404 }
      );
    }

    if (job.userId !== userId) {
      return NextResponse.json(
        { message: 'Forbidden: You do not own this export job' },
        { status: 403 }
      );
    }

    if (job.status !== 'completed') {
      return NextResponse.json(
        { message: 'Export job is not completed yet' },
        { status: 400 }
      );
    }

    if (!job.filePath) {
      return NextResponse.json(
        { message: 'Export file path not found' },
        { status: 500 }
      );
    }

    // Check if file has expired
    if (job.expiresAt && job.expiresAt < new Date()) {
      return NextResponse.json(
        { message: 'Export file has expired' },
        { status: 410 }
      );
    }

    // Verify file exists on filesystem
    if (!existsSync(job.filePath)) {
      return NextResponse.json(
        { message: 'Export file not found on server' },
        { status: 404 }
      );
    }

    // Read file buffer
    const fileBuffer = await readFile(job.filePath);

    // Determine content type
    const contentType =
      CONTENT_TYPE_MAP[job.format] || 'application/octet-stream';

    // Generate filename
    const filename = `${job.module}_${job.dateFrom.toISOString().split('T')[0]}_to_${job.dateTo.toISOString().split('T')[0]}.${job.format}`;

    // Upsert audit record and increment download count
    await prisma.exportAudit.upsert({
      where: { jobId: job.id },
      update: {
        downloadCount: {
          increment: 1,
        },
        lastDownload: new Date(),
      },
      create: {
        jobId: job.id,
        siteId: job.siteId,
        userId: job.userId,
        module: job.module,
        filtersJson: JSON.stringify({
          dateFrom: job.dateFrom,
          dateTo: job.dateTo,
          granularity: job.granularity,
        }),
        recordCount: 0,
        fileSize: job.fileSize || 0,
        fileHash: job.fileHash || '',
        downloadCount: 1,
        lastDownload: new Date(),
      },
    });

    // Return file response with appropriate headers
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Content-Length': fileBuffer.length.toString(),
      },
    });
  } catch (error) {
    return handleApiError(error);
  }
}
