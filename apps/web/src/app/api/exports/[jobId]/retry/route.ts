import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/db';
import { handleApiError } from '@/lib/error-handler';
import { ExportProcessor } from '@/lib/jobs/export-processor';

export async function POST(
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

    if (job.status !== 'failed') {
      return NextResponse.json(
        { message: 'Can only retry failed jobs' },
        { status: 400 }
      );
    }

    const updatedJob = await prisma.exportJob.update({
      where: { id: jobId },
      data: {
        status: 'pending',
        progress: 0,
        errorMessage: null,
      },
    });

    // TODO: Trigger background job processing
    // scheduleExportJob(jobId);
    const processor = new ExportProcessor();
    void processor.processJob(jobId).catch((e) => {
      console.error('Export retry processing failed:', e);
    });

    return NextResponse.json(updatedJob);
  } catch (error) {
    return handleApiError(error);
  }
}
