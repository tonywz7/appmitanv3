import { NextResponse } from 'next/server';
import { interactionService } from '@/services/interaction.service';
import { getCurrentUser } from '@/server/session';
import { ApiError } from '@/lib/errors';
import { apiResponse } from '@/lib/api-response';

export async function POST(request: Request) {
  try {
    const user = await getCurrentUser(request);
    if (!user) {
      return apiResponse.error(401, 'Unauthorized');
    }

    const { targetUserId } = await request.json();
    if (!targetUserId) {
      return apiResponse.error(400, 'Target user ID is required');
    }

    const result = await interactionService.passUser(user.id, targetUserId);
    return apiResponse.success(result, 'User passed');
  } catch (error) {
    if (error instanceof ApiError) {
      return apiResponse.error(error.statusCode, error.message);
    }
    console.error('[interactions/pass] Error:', error);
    return apiResponse.error(500, 'Internal server error');
  }
}
