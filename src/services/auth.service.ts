import type {
  AuthUser,
  CreateNewPasswordPayload,
  ForgotPasswordPayload,
  LoginPayload,
  RegisterPayload,
} from "@/types/auth";
import { hashPassword, verifyPassword } from '@/lib/password';
import { signAccessToken, verifyAccessToken, generateRefreshToken, hashToken } from '@/lib/jwt';
import { userRepository } from '@/server/repositories/user.repo';
import { ApiError } from '@/lib/errors';

export const authService = {
  async login(payload: LoginPayload): Promise<AuthUser> {
    const user = await userRepository.findByEmail(payload.email);
    if (!user) {
      throw new ApiError(401, 'Invalid email or password');
    }

    const isValid = await verifyPassword(payload.password, user.passwordHash);
    if (!isValid) {
      throw new ApiError(401, 'Invalid email or password');
    }

    if (user.deletedAt) {
      throw new ApiError(403, 'Account has been deleted');
    }

    const accessToken = signAccessToken({
      sub: user.id,
      email: user.email,
      role: user.role,
    });
    const refreshToken = generateRefreshToken();

    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      role: user.role,
      tokens: { accessToken, refreshToken },
    };
  },

  async register(payload: RegisterPayload): Promise<AuthUser> {
    const existing = await userRepository.findByEmail(payload.email);
    if (existing) {
      throw new ApiError(409, 'Email already registered');
    }

    const passwordHash = await hashPassword(payload.password);
    const user = await userRepository.create({
      email: payload.email,
      passwordHash,
      firstName: payload.firstName,
    });

    const accessToken = signAccessToken({
      sub: user.id,
      email: user.email,
      role: user.role,
    });
    const refreshToken = generateRefreshToken();
    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      role: user.role,
      tokens: { accessToken, refreshToken },
    };
  },

  async requestPasswordReset(payload: ForgotPasswordPayload): Promise<{ sent: boolean }> {
    const user = await userRepository.findByEmail(payload.email);
    if (!user) {
      // Don't reveal if email exists — security best practice
      return { sent: true };
    }

    // In production, generate a reset token and send via email
    // For now, we'll just return success
    const resetToken = generateRefreshToken();
    // TODO: Store reset token with expiry, send email with reset link
    console.log('[v0] Password reset token:', resetToken);

    return { sent: true };
  },

  async setNewPassword(payload: CreateNewPasswordPayload): Promise<{ success: boolean }> {
    if (payload.password !== payload.confirmPassword) {
      throw new ApiError(400, 'Passwords do not match');
    }

    // In production, validate the reset token from the request
    // For now, assume the token is valid (would be in Next.js middleware)
    const resetToken = payload.token;

    try {
      const tokenPayload = verifyAccessToken(resetToken);
      const passwordHash = await hashPassword(payload.password);
      await userRepository.updatePassword(tokenPayload.sub, passwordHash);

      return { success: true };
    } catch (error) {
      throw new ApiError(401, 'Invalid or expired reset token');
    }
  },
};
