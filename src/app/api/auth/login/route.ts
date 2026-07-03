import { NextResponse } from "next/server";
import type { LoginPayload } from "@/types/auth";
import { authService } from "@/services/auth.service";
import { loginSchema } from "@/schemas/auth.schema";
import { setAuthCookie } from "@/lib/cookies";
import { ApiError } from "@/lib/errors";
import { apiResponse } from "@/lib/api-response";
import { rateLimit } from "@/lib/rate-limit";
import { getClientIp } from "@/utils/request";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const limited = rateLimit(ip, 'login', 5, 900); // 5 attempts per 15 minutes
    if (limited) {
      return apiResponse.error(429, 'Too many login attempts. Please try again later.');
    }

    const body = (await request.json()) as LoginPayload;
    const validated = loginSchema.parse(body);

    const user = await authService.login(validated);

    const response = NextResponse.json(
      apiResponse.success({
        user: { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName, role: user.role },
        tokens: user.tokens,
      }, 'Login successful'),
      { status: 200 }
    );

    if (user.tokens) {
      setAuthCookie(response, user.tokens.accessToken, user.tokens.refreshToken);
    }

    return response;
  } catch (error) {
    if (error instanceof ApiError) {
      return apiResponse.error(error.statusCode, error.message);
    }
    if (error instanceof Error && error.message.includes('validation')) {
      return apiResponse.error(400, 'Invalid request: ' + error.message);
    }
    console.error('[auth/login] Error:', error);
    return apiResponse.error(500, 'Internal server error');
  }
}
