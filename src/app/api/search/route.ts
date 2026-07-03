import { NextResponse } from 'next/server';
import { discoveryService } from '@/services/discovery.service';
import { getCurrentUser } from '@/server/session';
import { ApiError } from '@/lib/errors';
import { apiResponse } from '@/lib/api-response';

export async function GET(request: Request) {
  try {
    const user = await getCurrentUser(request);
    if (!user) {
      return apiResponse.error(401, 'Unauthorized');
    }

    const url = new URL(request.url);
    const query = url.searchParams.get('q');
    const skip = parseInt(url.searchParams.get('skip') || '0');
    const take = parseInt(url.searchParams.get('take') || '20');

    if (!query) {
      return apiResponse.error(400, 'Search query is required');
    }

    const results = await discoveryService.searchProfiles(user.id, query, skip, take);
    return apiResponse.success(results, 'Search results retrieved');
  } catch (error) {
    if (error instanceof ApiError) {
      return apiResponse.error(error.statusCode, error.message);
    }
    console.error('[search] Error:', error);
    return apiResponse.error(500, 'Internal server error');
  }
}
