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

    const url = new URL(request.url);
    const skip = parseInt(url.searchParams.get('skip') || '0');
    const take = parseInt(url.searchParams.get('take') || '50');

    const messages = await interactionService.getMessages(user.id, params.matchId, skip, take);
    return apiResponse.success(messages, 'Messages retrieved');
  } catch (error) {
    if (error instanceof ApiError) {
      return apiResponse.error(error.statusCode, error.message);
    }
    console.error('[matches/[matchId]/messages] GET Error:', error);
    return apiResponse.error(500, 'Internal server error');
  }
}

export async function POST(
  request: Request,
  { params }: { params: { matchId: string } }
) {
  try {
    const user = await getCurrentUser(request);
    if (!user) {
      return apiResponse.error(401, 'Unauthorized');
    }

    const { content } = await request.json();
    if (!content) {
      return apiResponse.error(400, 'Message content is required');
    }

    const message = await interactionService.sendMessage(user.id, params.matchId, content);
    return apiResponse.success(message, 'Message sent', 201);
  } catch (error) {
    if (error instanceof ApiError) {
      return apiResponse.error(error.statusCode, error.message);
    }
    console.error('[matches/[matchId]/messages] POST Error:', error);
    return apiResponse.error(500, 'Internal server error');
  }
}
