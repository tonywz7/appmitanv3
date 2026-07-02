import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { AppError, type ErrorCode } from "@/lib/errors";

/**
 * Consistent API response envelope used by every route handler.
 *
 *   success: { success: true,  data: T }
 *   failure: { success: false, error: { code, message, details? } }
 */

export interface ApiSuccess<T> {
  success: true;
  data: T;
}

export interface ApiFailure {
  success: false;
  error: {
    code: ErrorCode;
    message: string;
    details?: unknown;
  };
}

export type ApiResponse<T> = ApiSuccess<T> | ApiFailure;

export function ok<T>(data: T, init?: ResponseInit): NextResponse<ApiSuccess<T>> {
  return NextResponse.json({ success: true, data }, { status: 200, ...init });
}

export function created<T>(data: T): NextResponse<ApiSuccess<T>> {
  return NextResponse.json({ success: true, data }, { status: 201 });
}

export function noContent(): NextResponse {
  return new NextResponse(null, { status: 204 });
}

export function fail(
  code: ErrorCode,
  message: string,
  status: number,
  details?: unknown,
): NextResponse<ApiFailure> {
  return NextResponse.json(
    { success: false, error: { code, message, details } },
    { status },
  );
}

/**
 * Maps any thrown value to a consistent error response. Call from a route
 * handler's catch block so clients always receive the same shape.
 */
export function handleApiError(error: unknown): NextResponse<ApiFailure> {
  if (error instanceof ZodError) {
    return fail("VALIDATION_ERROR", "Validation failed", 422, error.flatten());
  }

  if (error instanceof AppError) {
    return fail(error.code, error.message, error.statusCode, error.details);
  }

  // Unknown / unexpected error — do not leak internals to the client.
  console.error("[v0] Unhandled API error:", error);
  return fail("INTERNAL", "Something went wrong", 500);
}
