import { NextResponse } from "next/server";
import type { ForgotPasswordPayload } from "@/types/auth";
import { authService } from "@/services/auth.service";
import { forgotPasswordSchema } from "@/schemas/auth.schema";
import { apiResponse } from "@/lib/api-response";
import { rateLimit } from "@/lib/rate-limit";
import { getClientIp } from "@/utils/request";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const limited = rateLimit(ip, 'forgot-password', 3, 3600); // 3 attempts per hour
    if (limited) {
      return apiResponse.error(429, 'Too many password reset requests. Please try again later.');
    }

    const body = (await request.json()) as ForgotPasswordPayload;
    const validated = forgotPasswordSchema.parse(body);

    await authService.requestPasswordReset(validated);

    // Return success even if email doesn't exist (security best practice)
    return apiResponse.success(
      { email: validated.email },
      'If an account exists, a password reset link has been sent to your email'
    );
  } catch (error) {
    if (error instanceof Error && error.message.includes('validation')) {
      return apiResponse.error(400, 'Invalid request: ' + error.message);
    }
    console.error('[auth/forgot-password] Error:', error);
    return apiResponse.error(500, 'Internal server error');
  }
}
