import { NextResponse } from 'next/server';
import { onboardingService } from '@/services/onboarding.service';
import { personalInformationSchema } from '@/schemas/onboarding.schema';
import { getCurrentUser } from '@/server/session';
import { ApiError } from '@/lib/errors';
import { apiResponse } from '@/lib/api-response';

export async function POST(request: Request) {
  try {
    const user = await getCurrentUser(request);
    if (!user) {
      return apiResponse.error(401, 'Unauthorized');
    }

    const body = await request.json();
    const validated = personalInformationSchema.parse(body);

    const result = await onboardingService.savePersonalInformation(user.id, validated);

    return apiResponse.success(result, 'Personal information saved');
  } catch (error) {
    if (error instanceof ApiError) {
      return apiResponse.error(error.statusCode, error.message);
    }
    if (error instanceof Error && error.message.includes('validation')) {
      return apiResponse.error(400, 'Invalid request: ' + error.message);
    }
    console.error('[onboarding/personal] Error:', error);
    return apiResponse.error(500, 'Internal server error');
  }
}
