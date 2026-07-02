export interface LoginPayload {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterPayload {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreedToTerms: boolean;
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface CreateNewPasswordPayload {
  newPassword: string;
  confirmPassword: string;
  token: string;
}

export interface AuthUser {
  id: string;
  email: string;
  fullName: string;
  emailVerifiedAt: string | null;
  onboardingCompletedAt: string | null;
}
