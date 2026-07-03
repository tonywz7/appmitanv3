import { NextResponse } from 'next/server';
import { discoveryService } from '@/services/discovery.service';
import { getCurrentUser } from '@/server/session';
import { ApiError } from '@/lib/errors';
import { apiResponse } from '@/lib/api-response';

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const viewer = await getCurrentUser(request);
    if (!viewer) {
      return apiResponse.error(401, 'Unauthorized');
    }

    const profile = await discoveryService.getPublicProfile(viewer.id, params.userId);
    return apiResponse.success(profile, 'Profile retrieved');
  } catch (error) {
    if (error instanceof ApiError) {
      return apiResponse.error(error.statusCode, error.message);
    }
    console.error('[profiles/[userId]] Error:', error);
    return apiResponse.error(500, 'Internal server error');
  }
}
