import { z } from "zod";

/** Discovery, chat, photos, reports, and pagination schemas. */

export const paginationSchema = z.object({
  cursor: z.string().optional(),
  limit: z.coerce.number().int().min(1).max(50).default(20),
});

export const likeSchema = z.object({
  toUserId: z.string().uuid(),
  message: z.string().max(500).optional(),
});

export const passSchema = z.object({
  toUserId: z.string().uuid(),
});

export const sendMessageSchema = z.object({
  conversationId: z.string().uuid(),
  body: z.string().min(1, "Message cannot be empty").max(2000),
  type: z.enum(["text", "image"]).default("text"),
});

export const createPhotoSchema = z.object({
  url: z.string().url(),
  publicId: z.string().optional(),
  isPrimary: z.boolean().optional(),
});

export const reportSchema = z.object({
  reportedId: z.string().uuid(),
  reason: z.string().min(3).max(200),
  details: z.string().max(2000).optional(),
});

export const blockSchema = z.object({
  blockedId: z.string().uuid(),
});

export type PaginationInput = z.infer<typeof paginationSchema>;
export type LikeInput = z.infer<typeof likeSchema>;
export type PassInput = z.infer<typeof passSchema>;
export type SendMessageInput = z.infer<typeof sendMessageSchema>;
export type CreatePhotoInput = z.infer<typeof createPhotoSchema>;
export type ReportInput = z.infer<typeof reportSchema>;
export type BlockInput = z.infer<typeof blockSchema>;
