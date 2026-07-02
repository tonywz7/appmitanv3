import jwt, { type SignOptions } from "jsonwebtoken";
import crypto from "crypto";
import { getEnv, requireEnv } from "@/config/env";
import type { Role } from "@prisma/client";

/**
 * JWT + token utilities.
 *
 * Access tokens are short-lived, stateless JWTs. Refresh tokens are opaque
 * random strings; only their SHA-256 hash is stored (see RefreshToken model)
 * so a database leak cannot be replayed.
 */

export interface AccessTokenPayload {
  sub: string; // user id
  email: string;
  role: Role;
}

export function signAccessToken(payload: AccessTokenPayload): string {
  const secret = requireEnv("JWT_SECRET");
  const options: SignOptions = {
    expiresIn: getEnv().JWT_ACCESS_EXPIRES_IN as SignOptions["expiresIn"],
  };
  return jwt.sign(payload, secret, options);
}

export function verifyAccessToken(token: string): AccessTokenPayload {
  const secret = requireEnv("JWT_SECRET");
  const decoded = jwt.verify(token, secret);
  if (typeof decoded === "string") {
    throw new Error("Invalid token payload");
  }
  return decoded as AccessTokenPayload;
}

/** Generates a cryptographically-random opaque refresh token. */
export function generateRefreshToken(): string {
  return crypto.randomBytes(48).toString("hex");
}

/** Hashes an opaque token (refresh / reset) for at-rest storage. */
export function hashToken(token: string): string {
  return crypto.createHash("sha256").update(token).digest("hex");
}

/** Milliseconds until refresh-token expiry, derived from env config. */
export function refreshTokenExpiryDate(): Date {
  const raw = getEnv().JWT_REFRESH_EXPIRES_IN; // e.g. "30d"
  const ms = parseDuration(raw);
  return new Date(Date.now() + ms);
}

function parseDuration(value: string): number {
  const match = /^(\d+)([smhd])$/.exec(value.trim());
  if (!match) return 30 * 24 * 60 * 60 * 1000; // default 30d
  const amount = Number(match[1]);
  const unit = match[2];
  const unitMs: Record<string, number> = {
    s: 1000,
    m: 60 * 1000,
    h: 60 * 60 * 1000,
    d: 24 * 60 * 60 * 1000,
  };
  return amount * unitMs[unit];
}
