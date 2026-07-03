import { NextResponse } from "next/server";
import type { RegisterPayload } from "@/types/auth";
import { authService } from "@/services/auth.service";
import { registerSchema } from "@/schemas/auth.schema";
import { setAuthCookie } from "@/lib/cookies";
import { ApiError } from "@/lib/errors";
import { apiResponse } from "@/lib/api-response";
import { rateLimit } from "@/lib/rate-limit";
import { getClientIp } from "@/utils/request";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const limited = rateLimit(ip, 'register', 3, 3600); // 3 attempts per hour
    if (limited) {
      return apiResponse.error(429, 'Too many registration attempts. Please try again later.');
    }

    const body = (await request.json()) as RegisterPayload;
    const validated = registerSchema.parse(body);

    if (validated.password !== validated.confirmPassword) {
      return apiResponse.error(400, 'Passwords do not match');
    }

    const user = await authService.register(validated);

    const response = NextResponse.json(
      apiResponse.success({
        user: { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName, role: user.role },
        tokens: user.tokens,
      }, 'Registration successful'),
      { status: 201 }
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
    console.error('[auth/register] Error:', error);
    return apiResponse.error(500, 'Internal server error');
  }
}
