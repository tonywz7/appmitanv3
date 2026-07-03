/**
 * Onboarding service stub for API routes.
 * Minimal implementation to resolve TypeScript errors without breaking the build.
 */

export const onboardingService = {
  savePersonalInformation: async () => ({ success: true }),
  saveReligiousProfile: async () => ({ success: true }),
  getProgress: async () => ({ completedSteps: [], lastCompletedStep: null }),
  isComplete: async () => false,
};
