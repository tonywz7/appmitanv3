import { z } from "zod";

/**
 * Validated environment configuration.
 *
 * Access env vars through this module rather than reading process.env
 * directly so misconfiguration fails fast with a clear error. Values are
 * validated lazily on first access to keep the frontend build unaffected
 * when backend secrets are not present.
 */
const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  DATABASE_URL: z.string().url().optional(),
  JWT_SECRET: z.string().min(16).optional(),
  JWT_ACCESS_EXPIRES_IN: z.string().default("15m"),
  JWT_REFRESH_EXPIRES_IN: z.string().default("30d"),
  RESEND_API_KEY: z.string().optional(),
  CLOUDINARY_URL: z.string().optional(),
  NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3000"),
});

export type Env = z.infer<typeof envSchema>;

let cached: Env | null = null;

export function getEnv(): Env {
  if (cached) return cached;
  const parsed = envSchema.safeParse(process.env);
  if (!parsed.success) {
    const issues = parsed.error.issues
      .map((i) => `${i.path.join(".")}: ${i.message}`)
      .join(", ");
    throw new Error(`Invalid environment configuration: ${issues}`);
  }
  cached = parsed.data;
  return cached;
}

/**
 * Returns a required secret, throwing a descriptive error if missing. Use for
 * secrets that must exist at runtime for a given code path (e.g. JWT_SECRET
 * inside an auth handler) without forcing them to be present at build time.
 */
export function requireEnv(key: keyof Env): string {
  const value = getEnv()[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return String(value);
}
