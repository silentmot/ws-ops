import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function Index() {
  const { userId } = await auth();

  // Redirect authenticated users to dashboard
  if (userId) {
    redirect('/dashboard');
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h1 className="text-foreground mb-4 text-5xl font-bold">DeskOps</h1>
            <p className="text-muted-foreground text-xl">
              Construction & Demolition Recycling Facility Operations Management
              System
            </p>
          </div>

          <div className="mb-12 grid gap-8 md:grid-cols-2">
            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-card-foreground mb-4 text-2xl font-semibold">
                Core Features
              </h2>
              <ul className="text-muted-foreground space-y-2">
                <li>✓ Production tracking and monitoring</li>
                <li>✓ Dispatch management</li>
                <li>✓ Received materials tracking</li>
                <li>✓ Real-time inventory calculations</li>
                <li>✓ Equipment utilization logs</li>
                <li>✓ Manpower attendance tracking</li>
              </ul>
            </div>

            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-card-foreground mb-4 text-2xl font-semibold">
                Technology Stack
              </h2>
              <ul className="text-muted-foreground space-y-2">
                <li>• Next.js 16 with App Router</li>
                <li>• TypeScript & Nx Monorepo</li>
                <li>• PostgreSQL 17 with Prisma</li>
                <li>• Clerk Authentication</li>
                <li>• Tailwind CSS 4</li>
                <li>• React Query & Zustand</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/sign-in"
              className="bg-primary text-primary-foreground inline-block rounded-lg px-8 py-3 font-semibold transition-opacity hover:opacity-90"
            >
              Sign In to Continue
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
