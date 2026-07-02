/**
 * Request-level helpers shared across route handlers.
 */

/** Best-effort client IP extraction from proxy headers. */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export function getUserAgent(request: Request): string {
  return request.headers.get("user-agent") ?? "unknown";
}
