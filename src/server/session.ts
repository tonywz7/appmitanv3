import type { Role } from "@prisma/client";
import { readAccessToken } from "@/lib/cookies";
import { verifyAccessToken, type AccessTokenPayload } from "@/lib/jwt";
import { UnauthorizedError, ForbiddenError } from "@/lib/errors";
import { assertRole } from "@/lib/rbac";

/**
 * Server-side session resolution.
 *
 * Reads the access-token cookie and verifies it. Use `getSession` for
 * optional auth (returns null when unauthenticated) and `requireSession` /
 * `requireRole` to guard protected handlers and server actions.
 */

export interface SessionUser {
  id: string;
  email: string;
  role: Role;
}

export async function getSession(): Promise<SessionUser | null> {
  const token = await readAccessToken();
  if (!token) return null;
  try {
    const payload: AccessTokenPayload = verifyAccessToken(token);
    return { id: payload.sub, email: payload.email, role: payload.role };
  } catch {
    return null;
  }
}

export async function requireSession(): Promise<SessionUser> {
  const session = await getSession();
  if (!session) {
    throw new UnauthorizedError();
  }
  return session;
}

export async function requireRole(required: Role): Promise<SessionUser> {
  const session = await requireSession();
  try {
    assertRole(session.role, required);
  } catch {
    throw new ForbiddenError(`Requires ${required} role or higher`);
  }
  return session;
}
