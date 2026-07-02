import { Role } from "@prisma/client";
import { ForbiddenError } from "@/lib/errors";

/**
 * Role-based access control.
 *
 * Roles are hierarchical: a higher rank implies all permissions of lower
 * ranks. Use `assertRole` inside handlers/services to guard privileged
 * operations.
 */
const RANK: Record<Role, number> = {
  [Role.USER]: 0,
  [Role.MODERATOR]: 1,
  [Role.ADMIN]: 2,
  [Role.SUPER_ADMIN]: 3,
};

export function hasRole(userRole: Role, required: Role): boolean {
  return RANK[userRole] >= RANK[required];
}

export function assertRole(userRole: Role, required: Role): void {
  if (!hasRole(userRole, required)) {
    throw new ForbiddenError(
      `Requires ${required} role or higher`,
    );
  }
}

export function isAdmin(role: Role): boolean {
  return hasRole(role, Role.ADMIN);
}
