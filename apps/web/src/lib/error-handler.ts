import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Prisma } from '@prisma/client';

interface ApiError {
  message: string;
  code: string;
  details?: unknown;
}

export function handleApiError(error: unknown): NextResponse {
  console.error('API Error:', error);

  // Handle Zod validation errors
  if (error instanceof z.ZodError) {
    return NextResponse.json(
      {
        message: 'Validation failed',
        code: 'VALIDATION_ERROR',
        details: error.issues,
      } satisfies ApiError,
      { status: 400 }
    );
  }

  // Handle Prisma errors
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    // Unique constraint violation
    if (error.code === 'P2002') {
      return NextResponse.json(
        {
          message: 'A record with this data already exists',
          code: 'DUPLICATE_RECORD',
          details: error.meta,
        } satisfies ApiError,
        { status: 409 }
      );
    }

    // Record not found
    if (error.code === 'P2025') {
      return NextResponse.json(
        {
          message: 'Record not found',
          code: 'NOT_FOUND',
          details: error.meta,
        } satisfies ApiError,
        { status: 404 }
      );
    }

    // Default Prisma error
    return NextResponse.json(
      {
        message: 'Database error occurred',
        code: 'DATABASE_ERROR',
        details: error.meta,
      } satisfies ApiError,
      { status: 500 }
    );
  }

  // Handle Prisma validation errors
  if (error instanceof Prisma.PrismaClientValidationError) {
    return NextResponse.json(
      {
        message: 'Database validation error',
        code: 'DATABASE_VALIDATION_ERROR',
        details: error.message,
      } satisfies ApiError,
      { status: 400 }
    );
  }

  // Handle Prisma unknown request errors
  if (error instanceof Prisma.PrismaClientUnknownRequestError) {
    return NextResponse.json(
      {
        message: 'Database request error',
        code: 'DATABASE_UNKNOWN_ERROR',
        details: error.message,
      } satisfies ApiError,
      { status: 500 }
    );
  }

  // Handle unknown errors
  return NextResponse.json(
    {
      message: 'An unexpected error occurred',
      code: 'INTERNAL_ERROR',
    } satisfies ApiError,
    { status: 500 }
  );
}
