import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { z } from 'zod';
import { prisma } from '@/lib/db';
import { handleApiError } from '@/lib/error-handler';

export const dynamic = 'force-dynamic';

const ProgressQuerySchema = z.object({
  jobIds: z.string().transform((val) => val.split(',')),
});

export async function GET(request: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const queryParams = Object.fromEntries(searchParams.entries());
    const { jobIds } = ProgressQuerySchema.parse(queryParams);

    // Create a ReadableStream for Server-Sent Events
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        const sendEvent = (data: unknown) => {
          const message = `data: ${JSON.stringify(data)}\n\n`;
          controller.enqueue(encoder.encode(message));
        };

        let pollCount = 0;
        const maxPolls = 150; // 5 minutes at 2-second intervals
        const pollInterval = 2000; // 2 seconds
        const keepaliveInterval = 15000; // 15 seconds

        // Send keepalive pings
        const keepaliveTimer = setInterval(() => {
          sendEvent({ type: 'keepalive', timestamp: Date.now() });
        }, keepaliveInterval);

        // Poll for job status updates
        const pollTimer = setInterval(async () => {
          pollCount++;

          try {
            const jobs = await prisma.exportJob.findMany({
              where: {
                id: {
                  in: jobIds,
                },
                userId,
              },
              select: {
                id: true,
                status: true,
                progress: true,
                errorMessage: true,
                filePath: true,
                downloadUrl: true,
              },
            });

            // Send status update event
            sendEvent({
              type: 'update',
              jobs,
              timestamp: Date.now(),
            });

            // Check if all jobs are in terminal state
            const allComplete = jobs.every((job: { status: string }) =>
              ['completed', 'failed', 'cancelled'].includes(job.status)
            );

            if (allComplete || pollCount >= maxPolls) {
              clearInterval(pollTimer);
              clearInterval(keepaliveTimer);

              sendEvent({
                type: 'complete',
                message: allComplete
                  ? 'All jobs reached terminal state'
                  : 'Maximum polling time exceeded',
                timestamp: Date.now(),
              });

              controller.close();
            }
          } catch (error) {
            clearInterval(pollTimer);
            clearInterval(keepaliveTimer);

            sendEvent({
              type: 'error',
              message: error instanceof Error ? error.message : 'Unknown error',
              timestamp: Date.now(),
            });

            controller.close();
          }
        }, pollInterval);

        // Send initial status
        const initialJobs = await prisma.exportJob.findMany({
          where: {
            id: {
              in: jobIds,
            },
            userId,
          },
          select: {
            id: true,
            status: true,
            progress: true,
            errorMessage: true,
            filePath: true,
            downloadUrl: true,
          },
        });

        sendEvent({
          type: 'init',
          jobs: initialJobs,
          timestamp: Date.now(),
        });
      },
    });

    // TODO: In production, replace polling with Redis pub/sub for real-time updates

    return new NextResponse(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    });
  } catch (error) {
    return handleApiError(error);
  }
}
