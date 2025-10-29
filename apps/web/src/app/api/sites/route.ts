import type { NextRequest} from 'next/server';
import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/db';
import { z } from 'zod';
import { handleApiError } from '@/lib/error-handler';

const CreateSiteSchema = z.object({
  code: z.string().min(3).max(20),
  name: z.string().min(1).max(100),
  location: z.string().optional(),
  timezone: z.string().default('UTC'),
});

export async function GET(): Promise<NextResponse> {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const sites = await prisma.site.findMany({
      where: { isActive: true },
      select: {
        id: true,
        code: true,
        name: true,
        location: true,
        timezone: true,
        createdAt: true,
      },
      orderBy: { name: 'asc' },
    });

    return NextResponse.json({ sites });
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const validatedData = CreateSiteSchema.parse(body);

    const site = await prisma.site.create({
      data: {
        code: validatedData.code,
        name: validatedData.name,
        location: validatedData.location ?? null,
        timezone: validatedData.timezone,
        isActive: true,
      },
    });

    return NextResponse.json(site, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}
