import { z } from "zod";

/**
 * Zod schemas for onboarding steps. Values are the lowercase client-facing
 * unions (see src/types/onboarding.ts); mappers in the repository layer
 * translate them to Prisma enum values.
 */

export const personalInformationSchema = z.object({
  fullName: z.string().min(2, "Enter your full name").max(120),
  displayName: z.string().max(60).optional(),
  gender: z.enum(["male", "female"], {
    errorMap: () => ({ message: "Select a gender" }),
  }),
  dateOfBirth: z
    .string()
    .refine((v) => !Number.isNaN(Date.parse(v)), "Enter a valid date")
    .refine((v) => {
      const dob = new Date(v);
      const eighteen = new Date();
      eighteen.setFullYear(eighteen.getFullYear() - 18);
      return dob <= eighteen;
    }, "You must be at least 18 years old"),
  city: z.string().min(1, "Enter your city").max(120),
});

export const religiousProfileSchema = z.object({
  prayerFrequency: z.enum(["always", "usually", "sometimes", "rarely"]),
  halalLifestyle: z.enum(["always", "usually", "flexible"]),
  smoking: z.enum(["no", "socially", "yes"]),
  alcohol: z.enum(["no", "socially", "yes"]),
  willingnessToRelocate: z.enum(["yes", "no", "open"]),
  hijabStatus: z.enum(["wears", "does_not_wear", "planning"]).optional(),
});

export type PersonalInformationInput = z.infer<typeof personalInformationSchema>;
export type ReligiousProfileInput = z.infer<typeof religiousProfileSchema>;
