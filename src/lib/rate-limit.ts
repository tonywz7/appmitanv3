import { RateLimitError } from "@/lib/errors";

/**
 * Lightweight in-memory sliding-window rate limiter.
 *
 * Suitable for a single instance / development. For multi-instance production
 * deployments, swap the Map for a shared store (e.g. Upstash Redis) behind
 * the same `checkRateLimit` interface.
 */
interface Bucket {
  count: number;
  resetAt: number;
}

const buckets = new Map<string, Bucket>();

export interface RateLimitOptions {
  /** Unique key, e.g. `login:${ip}`. */
  key: string;
  /** Max requests allowed within the window. */
  limit: number;
  /** Window duration in milliseconds. */
  windowMs: number;
}

export interface RateLimitResult {
  success: boolean;
  remaining: number;
  resetAt: number;
}

export function checkRateLimit(options: RateLimitOptions): RateLimitResult {
  const now = Date.now();
  const existing = buckets.get(options.key);

  if (!existing || existing.resetAt <= now) {
    buckets.set(options.key, { count: 1, resetAt: now + options.windowMs });
    return { success: true, remaining: options.limit - 1, resetAt: now + options.windowMs };
  }

  if (existing.count >= options.limit) {
    return { success: false, remaining: 0, resetAt: existing.resetAt };
  }

  existing.count += 1;
  return {
    success: true,
    remaining: options.limit - existing.count,
    resetAt: existing.resetAt,
  };
}

/** Throws RateLimitError when the limit is exceeded. */
export function enforceRateLimit(options: RateLimitOptions): void {
  const result = checkRateLimit(options);
  if (!result.success) {
    const seconds = Math.ceil((result.resetAt - Date.now()) / 1000);
    throw new RateLimitError(`Too many requests. Try again in ${seconds}s.`);
  }
}
