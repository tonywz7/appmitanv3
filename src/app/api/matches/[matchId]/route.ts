import { NextResponse } from 'next/server';
import { interactionService } from '@/services/interaction.service';
import { getCurrentUser } from '@/server/session';
import { ApiError } from '@/lib/errors';
import { apiResponse } from '@/lib/api-response';

export async function GET(
  request: Request,
  { params }: { params: { matchId: string } }
) {
  try {
    const user = await getCurrentUser(request);
    if (!user) {
      return apiResponse.error(401, 'Unauthorized');
    }

    const match = await interactionService.getMatch(user.id, params.matchId);
    return apiResponse.success(match, 'Match retrieved');
  } catch (error) {
    if (error instanceof ApiError) {
      return apiResponse.error(error.statusCode, error.message);
    }
    console.error('[matches/[matchId]] GET Error:', error);
    return apiResponse.error(500, 'Internal server error');
  }
}
