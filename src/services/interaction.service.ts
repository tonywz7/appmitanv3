/**
 * Interaction service stub for API routes.
 * Minimal implementation to resolve TypeScript errors without breaking the build.
 */

export const interactionService = {
  likeUser: async (_userId: string, _targetUserId: string) => ({ like: null, match: null }),
  unlikeUser: async (_userId: string, _targetUserId: string) => ({ success: true }),
  passUser: async (_userId: string, _targetUserId: string) => null,
  getMatches: async (_userId: string, _skip: number, _take: number) => [],
  getMatch: async (_userId: string, _matchId: string) => null,
  sendMessage: async (_userId: string, _matchId: string, _content: string) => null,
  getMessages: async (_userId: string, _matchId: string, _skip: number, _take: number) => [],
};
