import type { PersonalInformationPayload, ReligiousProfilePayload } from "@/types/onboarding";

/**
 * Onboarding service layer — persists step-by-step profile data. Backend
 * logic intentionally left as a stub; see prisma/schema.prisma for the
 * matching data model scaffold.
 */
export const onboardingService = {
  async savePersonalInformation(_payload: PersonalInformationPayload): Promise<{ success: boolean }> {
    throw new Error("Not implemented: persist to profiles table via Supabase/Prisma.");
  },

  async saveReligiousProfile(_payload: ReligiousProfilePayload): Promise<{ success: boolean }> {
    throw new Error("Not implemented: persist to religious_profiles table.");
  },
};
