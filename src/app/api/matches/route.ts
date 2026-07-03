import { type NextRequest } from 'next/server';
import { interactionService } from '@/services/interaction.service';
import { getCurrentUser } from '@/server/session';
import { ok, handleApiError, fail } from '@/lib/api-response';

export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);
    if (!user) {
      return fail("UNAUTHORIZED", "Unauthorized", 401);
    }

    const url = new URL(request.url);
    const skip = parseInt(url.searchParams.get('skip') || '0');
    const take = parseInt(url.searchParams.get('take') || '20');

    const matches = await interactionService.getMatches(user.id, skip, take);
    return ok(matches);
  } catch (error) {
    return handleApiError(error);
  }
}
