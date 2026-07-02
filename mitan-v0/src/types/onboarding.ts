export type Gender = "male" | "female";

export interface PersonalInformationPayload {
  fullName: string;
  displayName?: string;
  gender: Gender | "";
  dateOfBirth: string;
  city: string;
}

export type PrayerFrequency = "always" | "usually" | "sometimes" | "rarely";
export type HalalLifestyle = "always" | "usually" | "flexible";
export type LifestyleChoice = "no" | "socially" | "yes";
export type RelocationPreference = "yes" | "no" | "open";
export type HijabStatus = "wears" | "does_not_wear" | "planning";

export interface ReligiousProfilePayload {
  prayerFrequency: PrayerFrequency | "";
  halalLifestyle: HalalLifestyle | "";
  smoking: LifestyleChoice | "";
  alcohol: LifestyleChoice | "";
  willingnessToRelocate: RelocationPreference | "";
  hijabStatus?: HijabStatus | "";
}

export interface OnboardingProgress {
  step: number;
  totalSteps: number;
}
