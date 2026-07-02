import { z } from "zod";

/** Profile update + partner preference schemas. */

export const updateProfileSchema = z.object({
  displayName: z.string().max(60).optional(),
  bio: z.string().max(1000).optional(),
  city: z.string().max(120).optional(),
  country: z.string().max(120).optional(),
  heightCm: z.number().int().min(120).max(250).optional(),
  maritalStatus: z
    .enum(["never_married", "divorced", "widowed"])
    .optional(),
  profession: z.string().max(120).optional(),
  education: z.string().max(120).optional(),
  ethnicity: z.string().max(120).optional(),
  languages: z.array(z.string().max(60)).max(20).optional(),
});

export const partnerPreferenceSchema = z.object({
  minAge: z.number().int().min(18).max(100).optional(),
  maxAge: z.number().int().min(18).max(100).optional(),
  preferredGender: z.enum(["male", "female"]).optional(),
  preferredCities: z.array(z.string().max(120)).max(50).optional(),
  preferredCountries: z.array(z.string().max(120)).max(50).optional(),
  minHeightCm: z.number().int().min(120).max(250).optional(),
  maxHeightCm: z.number().int().min(120).max(250).optional(),
  preferredSects: z.array(z.string().max(60)).max(20).optional(),
});

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
export type PartnerPreferenceInput = z.infer<typeof partnerPreferenceSchema>;
