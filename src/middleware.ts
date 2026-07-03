import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyAccessToken } from '@/lib/jwt';

// Protected routes that require authentication
const protectedRoutes = [
  '/api/onboarding',
  '/api/interactions',
  '/api/matches',
  '/api/discovery',
  '/api/profiles',
  '/api/search',
];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if this is a protected route
  const isProtected = protectedRoutes.some((route) => pathname.startsWith(route));

  if (isProtected) {
    const authHeader = request.headers.get('authorization');
    const token = authHeader?.replace('Bearer ', '');

    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized: no token provided' },
        { status: 401 }
      );
    }

    try {
      const payload = verifyAccessToken(token);
      if (!payload?.sub) {
        return NextResponse.json(
          { error: 'Unauthorized: invalid token' },
          { status: 401 }
        );
      }

      // Add user ID to request headers for downstream use
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set('x-user-id', payload.sub);

      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    } catch (error) {
      return NextResponse.json(
        { error: 'Unauthorized: token verification failed' },
        { status: 401 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
