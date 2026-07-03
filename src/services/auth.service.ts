import type {
  AuthUser,
  CreateNewPasswordPayload,
  ForgotPasswordPayload,
  LoginPayload,
  RegisterPayload,
} from "@/types/auth";

/**
 * Auth service layer — structured so API routes / server actions and client
 * components both call through here rather than hitting fetch/Prisma
 * directly. Backend logic is intentionally NOT implemented yet; each method
 * documents the contract it needs to fulfill once Supabase/Prisma wiring
 * lands (per the project's confirmed stack in the MITAN PRD).
 */
export const authService = {
  async login(_payload: LoginPayload): Promise<AuthUser> {
    throw new Error("Not implemented: wire up to Supabase auth.");
  },

  async register(_payload: RegisterPayload): Promise<AuthUser> {
    throw new Error("Not implemented: wire up to Supabase auth + users table.");
  },

  async requestPasswordReset(_payload: ForgotPasswordPayload): Promise<{ sent: boolean }> {
    throw new Error("Not implemented: trigger Supabase password recovery email.");
  },

  async setNewPassword(_payload: CreateNewPasswordPayload): Promise<{ success: boolean }> {
    throw new Error("Not implemented: verify reset token + update password.");
  },
};
