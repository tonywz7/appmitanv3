import { type NextRequest } from 'next/server';
import { interactionService } from '@/services/interaction.service';
import { getCurrentUser } from '@/server/session';
import { ok, handleApiError, fail, created } from '@/lib/api-response';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ matchId: string }> }
) {
  try {
    const { matchId } = await params;
    const user = await getCurrentUser(request);
    if (!user) {
      return fail("UNAUTHORIZED", "Unauthorized", 401);
    }

    const url = new URL(request.url);
    const skip = parseInt(url.searchParams.get('skip') || '0');
    const take = parseInt(url.searchParams.get('take') || '50');

    const messages = await interactionService.getMessages(user.id, matchId, skip, take);
    return ok(messages);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ matchId: string }> }
) {
  try {
    const { matchId } = await params;
    const user = await getCurrentUser(request);
    if (!user) {
      return fail("UNAUTHORIZED", "Unauthorized", 401);
    }

    const { content } = await request.json();
    if (!content) {
      return fail("VALIDATION_ERROR", "Message content is required", 400);
    }

    const message = await interactionService.sendMessage(user.id, matchId, content);
    return created(message);
  } catch (error) {
    return handleApiError(error);
  }
}
