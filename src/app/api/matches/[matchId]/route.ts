import { type NextRequest } from 'next/server';
import { interactionService } from '@/services/interaction.service';
import { getCurrentUser } from '@/server/session';
import { ok, handleApiError, fail } from '@/lib/api-response';

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

    const match = await interactionService.getMatch(user.id, matchId);
    return ok(match);
  } catch (error) {
    return handleApiError(error);
  }
}
