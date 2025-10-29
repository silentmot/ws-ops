import type { NextRequest} from 'next/server';
import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/db';
import { handleApiError } from '@/lib/error-handler';

interface RouteParams {
  params: {
    siteId: string;
  };
}

export async function GET(
  request: NextRequest,
  { params }: RouteParams
): Promise<NextResponse> {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const site = await prisma.site.findUnique({
      where: { id: params.siteId },
      include: {
        _count: {
          select: {
            productions: true,
            dispatches: true,
            receivedMaterials: true,
            inventorySnapshots: true,
          },
        },
      },
    });

    if (!site) {
      return NextResponse.json(
        { message: 'Site not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(site);
  } catch (error) {
    return handleApiError(error);
  }
}
