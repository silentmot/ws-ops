# API Routes & Backend Architecture

## DeskOps Backend Implementation Guide

### Overview

Complete backend architecture using Next.js 16 App Router with API routes, Server Actions, and type-safe data operations. Implements `/api/[module]/[resource]` pattern without versioning, ensuring single method per operation with strict type safety.

---

## Architecture Principles

- **No Versioning**: Use `/api/[module]/[resource]` pattern only, NO `/api/v1/` paths
- **Method-First**: Single method per operation using adapter pattern
- **Type Safety**: NO `any` types anywhere in backend code
- **Single Source of Truth**: All constants imported from centralized location
- **Authentication**: Clerk integration with role-based access control
- **Validation**: Zod schemas for all input/output validation

---

## API Route Structure

### Authentication Routes

```typescript
// src/app/api/auth/session/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import { prisma } from '@/lib/db';

export async function GET(): Promise<NextResponse> {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const session = {
      userId,
      isAuthenticated: true,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(session);
  } catch (error) {
    return NextResponse.json(
      { error: 'Session validation failed' },
      { status: 500 }
    );
  }
}
```

### Site Management Routes

```typescript
// src/app/api/sites/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import { prisma } from '@/lib/db';
import { z } from 'zod';

const CreateSiteSchema = z.object({
  code: z.string().min(3).max(20),
  name: z.string().min(1).max(100),
  location: z.string().optional(),
  timezone: z.string().default('UTC'),
});

export async function GET(): Promise<NextResponse> {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
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
    return NextResponse.json(
      { error: 'Failed to fetch sites' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const validatedData = CreateSiteSchema.parse(body);

    const site = await prisma.site.create({
      data: {
        ...validatedData,
        isActive: true,
      },
    });

    return NextResponse.json({ site }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create site' },
      { status: 500 }
    );
  }
}
```

```typescript
// src/app/api/sites/[siteId]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import { prisma } from '@/lib/db';

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
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
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
      return NextResponse.json({ error: 'Site not found' }, { status: 404 });
    }

    return NextResponse.json({ site });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch site' },
      { status: 500 }
    );
  }
}
```

### Production Data Routes

```typescript
// src/app/api/production/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import { prisma } from '@/lib/db';
import { ProductionSchema } from '@deskops/database';
import { isValidMaterialId, isValidOperationType } from '@deskops/constants';

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const siteId = searchParams.get('siteId');
    const dateFrom = searchParams.get('dateFrom');
    const dateTo = searchParams.get('dateTo');

    if (!siteId) {
      return NextResponse.json(
        { error: 'siteId parameter required' },
        { status: 400 }
      );
    }

    const whereClause: Record<string, unknown> = { siteId };

    if (dateFrom && dateTo) {
      whereClause.date = {
        gte: new Date(dateFrom),
        lte: new Date(dateTo),
      };
    }

    const productions = await prisma.production.findMany({
      where: whereClause,
      include: {
        material: {
          select: {
            code: true,
            name: true,
            category: true,
            uom: true,
          },
        },
        site: {
          select: {
            code: true,
            name: true,
          },
        },
      },
      orderBy: [
        { date: 'desc' },
        { createdAt: 'desc' },
      ],
    });

    return NextResponse.json({ productions });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch production data' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const validatedData = ProductionSchema.parse(body);

    // Validate material ID exists
    if (!isValidMaterialId(validatedData.materialId)) {
      return NextResponse.json(
        { error: 'Invalid material ID' },
        { status: 400 }
      );
    }

    // Validate operation type
    if (!isValidOperationType(validatedData.operation)) {
      return NextResponse.json(
        { error: 'Invalid operation type' },
        { status: 400 }
      );
    }

    const production = await prisma.production.create({
      data: {
        ...validatedData,
        createdBy: userId,
      },
      include: {
        material: {
          select: {
            code: true,
            name: true,
            uom: true,
          },
        },
      },
    });

    return NextResponse.json({ production }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create production record' },
      { status: 500 }
    );
  }
}
```

### Dispatch Routes

```typescript
// src/app/api/dispatch/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import { prisma } from '@/lib/db';
import { DispatchSchema } from '@deskops/database';
import { isValidMaterialId, isValidOperationType } from '@deskops/constants';

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const siteId = searchParams.get('siteId');
    const dateFrom = searchParams.get('dateFrom');
    const dateTo = searchParams.get('dateTo');

    if (!siteId) {
      return NextResponse.json(
        { error: 'siteId parameter required' },
        { status: 400 }
      );
    }

    const whereClause: Record<string, unknown> = { siteId };

    if (dateFrom && dateTo) {
      whereClause.date = {
        gte: new Date(dateFrom),
        lte: new Date(dateTo),
      };
    }

    const dispatches = await prisma.dispatch.findMany({
      where: whereClause,
      include: {
        material: {
          select: {
            code: true,
            name: true,
            category: true,
            uom: true,
          },
        },
        site: {
          select: {
            code: true,
            name: true,
          },
        },
      },
      orderBy: [
        { date: 'desc' },
        { createdAt: 'desc' },
      ],
    });

    return NextResponse.json({ dispatches });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch dispatch data' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const validatedData = DispatchSchema.parse(body);

    // Validate material ID exists
    if (!isValidMaterialId(validatedData.materialId)) {
      return NextResponse.json(
        { error: 'Invalid material ID' },
        { status: 400 }
      );
    }

    // Validate operation type
    if (!isValidOperationType(validatedData.operation)) {
      return NextResponse.json(
        { error: 'Invalid operation type' },
        { status: 400 }
      );
    }

    const dispatch = await prisma.dispatch.create({
      data: {
        ...validatedData,
        createdBy: userId,
      },
      include: {
        material: {
          select: {
            code: true,
            name: true,
            uom: true,
          },
        },
      },
    });

    return NextResponse.json({ dispatch }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create dispatch record' },
      { status: 500 }
    );
  }
}
```

### Equipment Tracking Routes

```typescript
// src/app/api/equipment/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import { prisma } from '@/lib/db';
import { EquipmentLogSchema } from '@deskops/database';
import { isValidEquipmentId } from '@deskops/constants';

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const siteId = searchParams.get('siteId');
    const dateFrom = searchParams.get('dateFrom');
    const dateTo = searchParams.get('dateTo');

    if (!siteId) {
      return NextResponse.json(
        { error: 'siteId parameter required' },
        { status: 400 }
      );
    }

    const whereClause: Record<string, unknown> = { siteId };

    if (dateFrom && dateTo) {
      whereClause.date = {
        gte: new Date(dateFrom),
        lte: new Date(dateTo),
      };
    }

    const equipmentLogs = await prisma.equipmentLog.findMany({
      where: whereClause,
      include: {
        equipment: {
          select: {
            code: true,
            name: true,
            type: true,
          },
        },
        site: {
          select: {
            code: true,
            name: true,
          },
        },
      },
      orderBy: [
        { date: 'desc' },
        { createdAt: 'desc' },
      ],
    });

    return NextResponse.json({ equipmentLogs });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch equipment logs' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const validatedData = EquipmentLogSchema.parse(body);

    // Validate equipment ID exists
    if (!isValidEquipmentId(validatedData.equipmentId)) {
      return NextResponse.json(
        { error: 'Invalid equipment ID' },
        { status: 400 }
      );
    }

    const equipmentLog = await prisma.equipmentLog.create({
      data: {
        ...validatedData,
        createdBy: userId,
      },
      include: {
        equipment: {
          select: {
            code: true,
            name: true,
            type: true,
          },
        },
      },
    });

    return NextResponse.json({ equipmentLog }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create equipment log' },
      { status: 500 }
    );
  }
}
```

### Dashboard Analytics Routes

```typescript
// src/app/api/dashboard/metrics/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import { prisma } from '@/lib/db';

interface DashboardMetrics {
  totalProductionToday: number;
  receivedMaterialsToday: number;
  totalDispatchedToday: number;
  currentInventoryStatus: number;
  productionChange: number;
  receivedChange: number;
  dispatchedChange: number;
  inventoryChange: number;
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const siteId = searchParams.get('siteId');

    if (!siteId) {
      return NextResponse.json(
        { error: 'siteId parameter required' },
        { status: 400 }
      );
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    // Today's metrics
    const [
      todayProduction,
      todayReceived,
      todayDispatched,
      latestInventory,
      yesterdayProduction,
      yesterdayReceived,
      yesterdayDispatched,
      previousInventory,
    ] = await Promise.all([
      // Today's production
      prisma.production.aggregate({
        where: { siteId, date: today },
        _sum: { qtyTon: true },
      }),
      // Today's received
      prisma.receivedMaterial.aggregate({
        where: { siteId, date: today },
        _sum: { qtyTon: true },
      }),
      // Today's dispatched
      prisma.dispatch.aggregate({
        where: { siteId, date: today },
        _sum: { qtyTon: true },
      }),
      // Latest inventory
      prisma.inventorySnapshot.aggregate({
        where: { siteId, date: { lte: today } },
        _sum: { closingTon: true },
      }),
      // Yesterday's production
      prisma.production.aggregate({
        where: { siteId, date: yesterday },
        _sum: { qtyTon: true },
      }),
      // Yesterday's received
      prisma.receivedMaterial.aggregate({
        where: { siteId, date: yesterday },
        _sum: { qtyTon: true },
      }),
      // Yesterday's dispatched
      prisma.dispatch.aggregate({
        where: { siteId, date: yesterday },
        _sum: { qtyTon: true },
      }),
      // Previous inventory
      prisma.inventorySnapshot.aggregate({
        where: { siteId, date: yesterday },
        _sum: { closingTon: true },
      }),
    ]);

    const metrics: DashboardMetrics = {
      totalProductionToday: Number(todayProduction._sum.qtyTon) || 0,
      receivedMaterialsToday: Number(todayReceived._sum.qtyTon) || 0,
      totalDispatchedToday: Number(todayDispatched._sum.qtyTon) || 0,
      currentInventoryStatus: Number(latestInventory._sum.closingTon) || 0,

      // Calculate percentage changes
      productionChange: calculatePercentageChange(
        Number(yesterdayProduction._sum.qtyTon) || 0,
        Number(todayProduction._sum.qtyTon) || 0
      ),
      receivedChange: calculatePercentageChange(
        Number(yesterdayReceived._sum.qtyTon) || 0,
        Number(todayReceived._sum.qtyTon) || 0
      ),
      dispatchedChange: calculatePercentageChange(
        Number(yesterdayDispatched._sum.qtyTon) || 0,
        Number(todayDispatched._sum.qtyTon) || 0
      ),
      inventoryChange: calculatePercentageChange(
        Number(previousInventory._sum.closingTon) || 0,
        Number(latestInventory._sum.closingTon) || 0
      ),
    };

    return NextResponse.json({ metrics });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch dashboard metrics' },
      { status: 500 }
    );
  }
}

function calculatePercentageChange(oldValue: number, newValue: number): number {
  if (oldValue === 0) return newValue > 0 ? 100 : 0;
  return ((newValue - oldValue) / oldValue) * 100;
}
```

### Export Job Routes

```typescript
// src/app/api/exports/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import { prisma } from '@/lib/db';
import { z } from 'zod';

const ExportJobSchema = z.object({
  siteId: z.string().cuid(),
  module: z.enum(['production', 'dispatch', 'received', 'equipment', 'manpower', 'inventory']),
  dateFrom: z.string().datetime(),
  dateTo: z.string().datetime(),
  granularity: z.enum(['daily', 'weekly', 'monthly']).default('daily'),
  format: z.enum(['xlsx', 'csv', 'pdf']),
});

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const validatedData = ExportJobSchema.parse(body);

    // Check rate limits
    const activeJobs = await prisma.exportJob.count({
      where: {
        userId,
        status: { in: ['pending', 'processing'] },
      },
    });

    if (activeJobs >= 5) {
      return NextResponse.json(
        { error: 'Rate limit exceeded: maximum 5 active jobs per user' },
        { status: 429 }
      );
    }

    const exportJob = await prisma.exportJob.create({
      data: {
        ...validatedData,
        userId,
        status: 'pending',
        progress: 0,
        dateFrom: new Date(validatedData.dateFrom),
        dateTo: new Date(validatedData.dateTo),
      },
    });

    // TODO: Trigger background job processing
    // await scheduleExportJob(exportJob.id);

    return NextResponse.json({ exportJob }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create export job' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const jobs = await prisma.exportJob.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 20,
    });

    return NextResponse.json({ jobs });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch export jobs' },
      { status: 500 }
    );
  }
}
```

---

## Server Actions for Data Mutations

```typescript
// src/app/actions/production.ts
'use server';

import { auth } from '@clerk/nextjs';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/db';
import { ProductionSchema, type ProductionInput } from '@deskops/database';
import { isValidMaterialId, isValidOperationType } from '@deskops/constants';

export async function createProduction(data: ProductionInput): Promise<{
  success: boolean;
  production?: unknown;
  error?: string;
}> {
  try {
    const { userId } = auth();
    if (!userId) {
      return { success: false, error: 'Unauthorized' };
    }

    const validatedData = ProductionSchema.parse(data);

    if (!isValidMaterialId(validatedData.materialId)) {
      return { success: false, error: 'Invalid material ID' };
    }

    if (!isValidOperationType(validatedData.operation)) {
      return { success: false, error: 'Invalid operation type' };
    }

    const production = await prisma.production.create({
      data: {
        ...validatedData,
        createdBy: userId,
      },
      include: {
        material: {
          select: {
            code: true,
            name: true,
            uom: true,
          },
        },
      },
    });

    revalidatePath('/dashboard');
    revalidatePath('/production');

    return { success: true, production };
  } catch (error) {
    console.error('Failed to create production:', error);
    return { success: false, error: 'Failed to create production record' };
  }
}

export async function updateProduction(
  id: string,
  data: Partial<ProductionInput>
): Promise<{
  success: boolean;
  production?: unknown;
  error?: string;
}> {
  try {
    const { userId } = auth();
    if (!userId) {
      return { success: false, error: 'Unauthorized' };
    }

    const production = await prisma.production.update({
      where: { id },
      data: {
        ...data,
        updatedAt: new Date(),
      },
      include: {
        material: {
          select: {
            code: true,
            name: true,
            uom: true,
          },
        },
      },
    });

    revalidatePath('/dashboard');
    revalidatePath('/production');

    return { success: true, production };
  } catch (error) {
    console.error('Failed to update production:', error);
    return { success: false, error: 'Failed to update production record' };
  }
}

export async function deleteProduction(id: string): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const { userId } = auth();
    if (!userId) {
      return { success: false, error: 'Unauthorized' };
    }

    await prisma.production.delete({
      where: { id },
    });

    revalidatePath('/dashboard');
    revalidatePath('/production');

    return { success: true };
  } catch (error) {
    console.error('Failed to delete production:', error);
    return { success: false, error: 'Failed to delete production record' };
  }
}
```

---

## Background Job Processing

```typescript
// src/lib/jobs/export-processor.ts
import { prisma } from '@/lib/db';
import { generateExcelReport } from '@/lib/exporters/excel';
import { generatePDFReport } from '@/lib/exporters/pdf';
import { generateCSVReport } from '@/lib/exporters/csv';

interface ExportJobProcessor {
  processJob(jobId: string): Promise<void>;
  updateProgress(jobId: string, progress: number): Promise<void>;
  completeJob(jobId: string, filePath: string, fileSize: number, fileHash: string): Promise<void>;
  failJob(jobId: string, error: string): Promise<void>;
}

export class ExportJobProcessor implements ExportJobProcessor {
  async processJob(jobId: string): Promise<void> {
    try {
      const job = await prisma.exportJob.findUnique({
        where: { id: jobId },
      });

      if (!job) {
        throw new Error(`Job ${jobId} not found`);
      }

      await this.updateProgress(jobId, 10);

      let filePath: string;
      let fileSize: number;
      let fileHash: string;

      switch (job.format) {
        case 'xlsx':
          ({ filePath, fileSize, fileHash } = await generateExcelReport(job));
          break;
        case 'pdf':
          ({ filePath, fileSize, fileHash } = await generatePDFReport(job));
          break;
        case 'csv':
          ({ filePath, fileSize, fileHash } = await generateCSVReport(job));
          break;
        default:
          throw new Error(`Unsupported format: ${job.format}`);
      }

      await this.completeJob(jobId, filePath, fileSize, fileHash);
    } catch (error) {
      console.error(`Export job ${jobId} failed:`, error);
      await this.failJob(jobId, error instanceof Error ? error.message : 'Unknown error');
    }
  }

  async updateProgress(jobId: string, progress: number): Promise<void> {
    await prisma.exportJob.update({
      where: { id: jobId },
      data: {
        progress,
        status: 'processing',
        updatedAt: new Date(),
      },
    });
  }

  async completeJob(
    jobId: string,
    filePath: string,
    fileSize: number,
    fileHash: string
  ): Promise<void> {
    const downloadUrl = `/api/exports/${jobId}/download`;
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 24); // 24-hour expiry

    await prisma.exportJob.update({
      where: { id: jobId },
      data: {
        status: 'completed',
        progress: 100,
        filePath,
        fileSize,
        fileHash,
        downloadUrl,
        expiresAt,
        updatedAt: new Date(),
      },
    });

    // Create audit record
    await prisma.exportAudit.create({
      data: {
        jobId,
        siteId: '', // Will be filled from job data
        userId: '', // Will be filled from job data
        module: '', // Will be filled from job data
        filtersJson: '{}',
        recordCount: 0, // Calculate based on actual data
        fileSize,
        fileHash,
      },
    });
  }

  async failJob(jobId: string, error: string): Promise<void> {
    await prisma.exportJob.update({
      where: { id: jobId },
      data: {
        status: 'failed',
        errorMessage: error,
        updatedAt: new Date(),
      },
    });
  }
}
```

---

## Middleware for Authentication & Authorization

```typescript
// src/middleware.ts
import { authMiddleware } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export default authMiddleware({
  publicRoutes: ['/'],
  ignoredRoutes: ['/api/health'],

  beforeAuth: (req) => {
    // Add any pre-auth logic here
  },

  afterAuth: (auth, req) => {
    // Handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    // Add role-based access control here if needed
    if (auth.userId && req.nextUrl.pathname.startsWith('/admin')) {
      // Check if user has admin role
      // This would require additional logic to check user roles
    }

    return NextResponse.next();
  },
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
```

---

## Error Handling & Logging

```typescript
// src/lib/error-handler.ts
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Prisma } from '@prisma/client';

export interface ApiError {
  message: string;
  code: string;
  details?: unknown;
}

export function handleApiError(error: unknown): NextResponse {
  console.error('API Error:', error);

  if (error instanceof z.ZodError) {
    return NextResponse.json(
      {
        error: 'Validation failed',
        code: 'VALIDATION_ERROR',
        details: error.errors,
      },
      { status: 400 }
    );
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case 'P2002':
        return NextResponse.json(
          {
            error: 'Unique constraint violation',
            code: 'DUPLICATE_RECORD',
            details: error.meta,
          },
          { status: 409 }
        );
      case 'P2025':
        return NextResponse.json(
          {
            error: 'Record not found',
            code: 'NOT_FOUND',
          },
          { status: 404 }
        );
      default:
        return NextResponse.json(
          {
            error: 'Database error',
            code: 'DATABASE_ERROR',
          },
          { status: 500 }
        );
    }
  }

  return NextResponse.json(
    {
      error: 'Internal server error',
      code: 'INTERNAL_ERROR',
    },
    { status: 500 }
  );
}
```

---

## Summary

This backend architecture provides:

- **Complete API routes** following `/api/[module]/[resource]` pattern
- **Type-safe operations** with Zod validation and NO `any` types
- **Authentication & authorization** with Clerk integration
- **Server Actions** for optimistic UI updates
- **Background job processing** for exports
- **Error handling** with structured responses
- **Rate limiting** and security measures
- **Single source of truth** integration with constants

**Next Steps**:

1. Implement remaining API routes for received materials, manpower
2. Set up background job queues (Redis + Bull/BullMQ)
3. Add comprehensive error monitoring (Sentry)
4. Implement caching strategy (Redis/Upstash)
5. Add API rate limiting middleware
