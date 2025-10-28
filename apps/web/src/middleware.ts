import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/api/(.*)']);

const isPublicRoute = createRouteMatcher(['/api/auth/session']);

export default clerkMiddleware(async (auth, req) => {
  // Allow session checks without authentication
  if (isPublicRoute(req)) {
    return;
  }

  // Protect all other routes
  if (isProtectedRoute(req)) {
    await auth.protect();
  }

  // TODO: Role-based access control
  // Check user roles from Clerk session metadata and restrict /admin routes
  // to users with admin role (requires Clerk metadata configuration)
  // Example:
  // const { userId, sessionClaims } = await auth();
  // const userRole = sessionClaims?.metadata?.role;
  // if (req.nextUrl.pathname.startsWith('/admin') && userRole !== 'admin') {
  //   return NextResponse.redirect(new URL('/unauthorized', req.url));
  // }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
