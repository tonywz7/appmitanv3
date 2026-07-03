import { type NextRequest } from 'next/server';
import { interactionService } from '@/services/interaction.service';
import { getCurrentUser } from '@/server/session';
import { ok, handleApiError, fail, created } from '@/lib/api-response';

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

    const result = await interactionService.likeUser(user.id, targetUserId);
    return result.match ? created(result) : ok(result);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);
    if (!user) {
      return fail("UNAUTHORIZED", "Unauthorized", 401);
    }

    const { targetUserId } = await request.json();
    if (!targetUserId) {
      return fail("VALIDATION_ERROR", "Target user ID is required", 400);
    }

    const result = await interactionService.unlikeUser(user.id, targetUserId);
    return ok(result);
  } catch (error) {
    return handleApiError(error);
  }
}
