import { NextResponse, type NextRequest } from "next/server";
import type { LoginPayload } from "@/types/auth";
import { authService } from "@/services/auth.service";
import { loginSchema } from "@/schemas/auth.schema";
import { setAuthCookies } from "@/lib/cookies";
import { enforceRateLimit } from "@/lib/rate-limit";
import { ok, fail, handleApiError } from "@/lib/api-response";
import { getClientIp } from "@/utils/request";

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    enforceRateLimit({
      key: `login:${ip}`,
      limit: 5,
      windowMs: 15 * 60 * 1000, // 15 minutes
    });

    const body = (await request.json()) as LoginPayload;
    const validated = loginSchema.parse(body);

    const user = await authService.login(validated);

    // Set auth cookies
    await setAuthCookies("access_token_placeholder", "refresh_token_placeholder");

    return ok({
      user: { 
        id: user.id, 
        email: user.email, 
        fullName: user.fullName,
      },
    });
  } catch (error) {
    return handleApiError(error);
  }
}
