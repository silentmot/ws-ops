import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export interface AuthResult {
  userId: string | null;
  unauthorized: NextResponse | null;
}

export async function checkAuth(): Promise<AuthResult> {
  const { userId } = await auth();

  if (!userId) {
    return {
      userId: null,
      unauthorized: NextResponse.json({ message: 'Unauthorized' }, { status: 401 }),
    };
  }

  return { userId, unauthorized: null };
}

export const DateRangeQuerySchema = z.object({
  siteId: z.string().min(1),
  dateFrom: z.string().datetime().optional(),
  dateTo: z.string().datetime().optional(),
});

export type DateRangeQuery = z.infer<typeof DateRangeQuerySchema>;

export interface DateRangeValidationResult {
  valid: boolean;
  error: NextResponse | null;
}

export function validateDateRange(
  dateFrom?: string,
  dateTo?: string
): DateRangeValidationResult {
  if (dateFrom && dateTo) {
    const dateFromObj = new Date(dateFrom);
    const dateToObj = new Date(dateTo);
    if (dateFromObj > dateToObj) {
      return {
        valid: false,
        error: NextResponse.json(
          { message: 'dateFrom must be less than or equal to dateTo' },
          { status: 400 }
        ),
      };
    }
  }
  return { valid: true, error: null };
}

export interface BuildWhereClauseOptions {
  siteId: string;
  dateFrom?: string;
  dateTo?: string;
}

export function buildDateRangeWhereClause(
  options: BuildWhereClauseOptions
): { siteId: string; date?: Prisma.DateTimeFilter } {
  const whereClause: { siteId: string; date?: Prisma.DateTimeFilter } = {
    siteId: options.siteId,
  };

  if (options.dateFrom ?? options.dateTo) {
    whereClause.date = {};
    if (options.dateFrom) {
      whereClause.date.gte = new Date(options.dateFrom);
    }
    if (options.dateTo) {
      whereClause.date.lte = new Date(options.dateTo);
    }
  }

  return whereClause;
}

export function parseQueryParams(searchParams: URLSearchParams): DateRangeQuery {
  return DateRangeQuerySchema.parse({
    siteId: searchParams.get('siteId'),
    dateFrom: searchParams.get('dateFrom') ?? undefined,
    dateTo: searchParams.get('dateTo') ?? undefined,
  });
}
