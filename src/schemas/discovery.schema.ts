import { z } from 'zod';

export const discoveryFilterSchema = z.object({
  ageMin: z.number().int().positive().optional(),
  ageMax: z.number().int().positive().optional(),
  location: z.string().optional(),
  religiousLevel: z.string().optional(),
  maritalStatus: z.string().optional(),
  education: z.string().optional(),
  occupation: z.string().optional(),
  skip: z.number().int().nonnegative().optional().default(0),
  take: z.number().int().positive().optional().default(20),
});

export const searchQuerySchema = z.object({
  q: z.string().min(2).max(100),
  skip: z.number().int().nonnegative().optional().default(0),
  take: z.number().int().positive().optional().default(20),
});

export const profileStatsSchema = z.object({
  likes: z.number().nonnegative(),
  passes: z.number().nonnegative(),
  matches: z.number().nonnegative(),
});

export type DiscoveryFilter = z.infer<typeof discoveryFilterSchema>;
export type SearchQuery = z.infer<typeof searchQuerySchema>;
export type ProfileStats = z.infer<typeof profileStatsSchema>;
