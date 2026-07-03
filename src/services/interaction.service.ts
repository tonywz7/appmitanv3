/**
 * Interaction service stub for API routes.
 * Minimal implementation to resolve TypeScript errors without breaking the build.
 */

export const interactionService = {
  likeUser: async () => ({ like: null, match: null }),
  unlikeUser: async () => ({ success: true }),
  passUser: async () => null,
  getMatches: async () => [],
  getMatch: async () => null,
  sendMessage: async () => null,
  getMessages: async () => [],
};
