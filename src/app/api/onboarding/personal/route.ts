import { type NextRequest } from 'next/server';
import { onboardingService } from '@/services/onboarding.service';
import { personalInformationSchema } from '@/schemas/onboarding.schema';
import { getCurrentUser } from '@/server/session';
import { ok, handleApiError, fail } from '@/lib/api-response';

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);
    if (!user) {
      return fail("UNAUTHORIZED", "Unauthorized", 401);
    }

    const body = await request.json();
    const validated = personalInformationSchema.parse(body);

    const result = await onboardingService.savePersonalInformation(user.id, validated);

    return ok(result);
  } catch (error) {
    return handleApiError(error);
  }
}
