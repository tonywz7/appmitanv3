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

    const result = await interactionService.likeUser(user.id, targetUserId);
    return apiResponse.success(result, 'User liked successfully', result.match ? 201 : 200);
  } catch (error) {
    if (error instanceof ApiError) {
      return apiResponse.error(error.statusCode, error.message);
    }
    console.error('[interactions/like] Error:', error);
    return apiResponse.error(500, 'Internal server error');
  }
}

export async function DELETE(request: Request) {
  try {
    const user = await getCurrentUser(request);
    if (!user) {
      return apiResponse.error(401, 'Unauthorized');
    }

    const { targetUserId } = await request.json();
    if (!targetUserId) {
      return apiResponse.error(400, 'Target user ID is required');
    }

    const result = await interactionService.unlikeUser(user.id, targetUserId);
    return apiResponse.success(result, 'Like removed');
  } catch (error) {
    if (error instanceof ApiError) {
      return apiResponse.error(error.statusCode, error.message);
    }
    console.error('[interactions/like] DELETE Error:', error);
    return apiResponse.error(500, 'Internal server error');
  }
}
