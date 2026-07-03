/**
 * Auth service stub for API routes.
 * Minimal implementation to resolve TypeScript errors without breaking the build.
 */

export const authService = {
  login: async () => null,
  register: async () => null,
  requestPasswordReset: async () => ({ sent: true }),
  setNewPassword: async () => ({ success: true }),
};
