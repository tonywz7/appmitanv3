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
    const skip = parseInt(url.searchParams.get('skip') || '0');
    const take = parseInt(url.searchParams.get('take') || '20');
    
    const filters = {
      ageMin: url.searchParams.get('ageMin') ? parseInt(url.searchParams.get('ageMin')!) : undefined,
      ageMax: url.searchParams.get('ageMax') ? parseInt(url.searchParams.get('ageMax')!) : undefined,
      location: url.searchParams.get('location') || undefined,
      religiousLevel: url.searchParams.get('religiousLevel') || undefined,
      maritalStatus: url.searchParams.get('maritalStatus') || undefined,
      education: url.searchParams.get('education') || undefined,
      occupation: url.searchParams.get('occupation') || undefined,
    };

    const feed = await discoveryService.getDiscoveryFeed(user.id, filters, skip, take);
    return apiResponse.success(feed, 'Discovery feed retrieved');
  } catch (error) {
    if (error instanceof ApiError) {
      return apiResponse.error(error.statusCode, error.message);
    }
    console.error('[discovery/feed] Error:', error);
    return apiResponse.error(500, 'Internal server error');
  }
}
