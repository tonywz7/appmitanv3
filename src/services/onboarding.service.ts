import type { PersonalInformationPayload, ReligiousProfilePayload } from "@/types/onboarding";
import { onboardingRepository } from '@/server/repositories/onboarding.repo';
import { userRepository } from '@/server/repositories/user.repo';
import { ApiError } from '@/lib/errors';

export const onboardingService = {
  async savePersonalInformation(userId: string, payload: PersonalInformationPayload): Promise<{ success: boolean }> {
    const user = await userRepository.findById(userId);
    if (!user) {
      throw new ApiError(404, 'User not found');
    }

    const profile = await onboardingRepository.getProfile(userId);
    if (profile) {
      await onboardingRepository.updateProfile(userId, payload);
    } else {
      await onboardingRepository.createProfile(userId, payload);
    }

    await onboardingRepository.completeStep(userId, 'personal-information');

    return { success: true };
  },

  async saveReligiousProfile(userId: string, payload: ReligiousProfilePayload): Promise<{ success: boolean }> {
    const user = await userRepository.findById(userId);
    if (!user) {
      throw new ApiError(404, 'User not found');
    }

    await onboardingRepository.createReligiousProfile(userId, payload);
    await onboardingRepository.completeStep(userId, 'religious-profile');

    return { success: true };
  },

  async getProgress(userId: string) {
    const progress = await onboardingRepository.getProgress(userId);
    return progress || { completedSteps: [], lastCompletedStep: null };
  },

  async isComplete(userId: string) {
    return onboardingRepository.isOnboarded(userId);
  },
};
