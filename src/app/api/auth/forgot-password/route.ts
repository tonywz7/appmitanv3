import { type NextRequest } from "next/server";
import type { ForgotPasswordPayload } from "@/types/auth";
import { authService } from "@/services/auth.service";
import { forgotPasswordSchema } from "@/schemas/auth.schema";
import { handleApiError, ok } from "@/lib/api-response";
import { enforceRateLimit } from "@/lib/rate-limit";
import { getClientIp } from "@/utils/request";

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    enforceRateLimit({
      key: `forgot-password:${ip}`,
      limit: 3,
      windowMs: 60 * 60 * 1000, // 1 hour
    });

    const body = (await request.json()) as ForgotPasswordPayload;
    const validated = forgotPasswordSchema.parse(body);

    await authService.requestPasswordReset(validated);

    // Return success even if email doesn't exist (security best practice)
    return ok({
      email: validated.email,
    });
  } catch (error) {
    return handleApiError(error);
  }
}
