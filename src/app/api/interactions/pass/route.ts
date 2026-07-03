import { type NextRequest } from 'next/server';
import { interactionService } from '@/services/interaction.service';
import { getCurrentUser } from '@/server/session';
import { ok, handleApiError, fail } from '@/lib/api-response';

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);
    if (!user) {
      return fail("UNAUTHORIZED", "Unauthorized", 401);
    }

    const { targetUserId } = await request.json();
    if (!targetUserId) {
      return fail("VALIDATION_ERROR", "Target user ID is required", 400);
    }

    const result = await interactionService.passUser(user.id, targetUserId);
    return ok(result);
  } catch (error) {
    return handleApiError(error);
  }
}
