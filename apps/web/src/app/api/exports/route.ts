import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/db';
import { handleApiError } from '@/lib/error-handler';
import { ExportProcessor } from '@/lib/jobs/export-processor';
import { ExportJobCreateSchema } from '@deskops/database';

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();

    // Convert string dates to Date objects
    const dataWithDates = {
      ...body,
      userId,
      dateFrom: new Date(body.dateFrom),
      dateTo: new Date(body.dateTo),
    };

    const validatedData = ExportJobCreateSchema.parse(dataWithDates);

    // TODO: Validate user's permission for the siteId
    // Query UserSite or team memberships to verify userId is permitted
    // For now, we assume all authenticated users can access all sites
    // Uncomment when UserSite relation is available:
    // const hasAccess = await prisma.userSite.findFirst({
    //   where: { userId, siteId: validatedData.siteId }
    // });
    // if (!hasAccess) {
    //   return NextResponse.json(
    //     { message: 'Forbidden: No access to this site' },
    //     { status: 403 }
    //   );
    // }

    // Check rate limit: maximum 5 active jobs per user
    const activeJobsCount = await prisma.exportJob.count({
      where: {
        userId,
        status: {
          in: ['pending', 'processing'],
        },
      },
    });

    if (activeJobsCount >= 5) {
      return NextResponse.json(
        { message: 'Rate limit exceeded: maximum 5 active jobs per user' },
        { status: 429 }
      );
    }

    const exportJob = await prisma.exportJob.create({
      data: {
        siteId: validatedData.siteId,
        userId: validatedData.userId,
        module: validatedData.module,
        dateFrom: validatedData.dateFrom,
        dateTo: validatedData.dateTo,
        granularity: validatedData.granularity,
        format: validatedData.format,
        status: 'pending',
        progress: 0,
      },
    });

    // TODO: Trigger background job processing
    // scheduleExportJob(exportJob.id);
    const processor = new ExportProcessor();
    void processor.processJob(exportJob.id).catch((e) => {
      console.error('Export processing failed:', e);
    });

    return NextResponse.json(exportJob, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const jobs = await prisma.exportJob.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 20,
    });

    return NextResponse.json({ jobs });
  } catch (error) {
    return handleApiError(error);
  }
}
