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
    return ok(feed);
  } catch (error) {
    return handleApiError(error);
  }
}
