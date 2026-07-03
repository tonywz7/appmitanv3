import { type NextRequest } from 'next/server';
import { discoveryService } from '@/services/discovery.service';
import { getCurrentUser } from '@/server/session';
import { ok, handleApiError, fail } from '@/lib/api-response';

export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);
    if (!user) {
      return fail("UNAUTHORIZED", "Unauthorized", 401);
    }

    const url = new URL(request.url);
    const query = url.searchParams.get('q');
    const skip = parseInt(url.searchParams.get('skip') || '0');
    const take = parseInt(url.searchParams.get('take') || '20');

    if (!query) {
      return fail("VALIDATION_ERROR", "Search query is required", 400);
    }

    const results = await discoveryService.searchProfiles(user.id, query, skip, take);
    return ok(results);
  } catch (error) {
    return handleApiError(error);
  }
}
