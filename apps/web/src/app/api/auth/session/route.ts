import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { handleApiError } from '@/lib/error-handler';

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const session = {
      userId,
      isAuthenticated: true,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(session);
  } catch (error) {
    return handleApiError(error);
  }
}
