import { type NextRequest } from "next/server";
import type { RegisterPayload } from "@/types/auth";
import { authService } from "@/services/auth.service";
import { registerSchema } from "@/schemas/auth.schema";
import { setAuthCookies } from "@/lib/cookies";
import { enforceRateLimit } from "@/lib/rate-limit";
import { created, fail, handleApiError } from "@/lib/api-response";
import { getClientIp } from "@/utils/request";

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    enforceRateLimit({
      key: `register:${ip}`,
      limit: 3,
      windowMs: 60 * 60 * 1000, // 1 hour
    });

    const body = (await request.json()) as RegisterPayload;
    const validated = registerSchema.parse(body);

    if (validated.password !== validated.confirmPassword) {
      return fail("VALIDATION_ERROR", "Passwords do not match", 400);
    }

    const user = await authService.register(validated);

    // Set auth cookies
    await setAuthCookies("access_token_placeholder", "refresh_token_placeholder");

    return created({
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
