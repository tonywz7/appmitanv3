import { type NextRequest } from 'next/server';
import { discoveryService } from '@/services/discovery.service';
import { getCurrentUser } from '@/server/session';
import { ok, handleApiError, fail } from '@/lib/api-response';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    const { userId } = await params;
    const viewer = await getCurrentUser(request);
    if (!viewer) {
      return fail("UNAUTHORIZED", "Unauthorized", 401);
    }

    const profile = await discoveryService.getPublicProfile(viewer.id, userId);
    return ok(profile);
  } catch (error) {
    return handleApiError(error);
  }
}
