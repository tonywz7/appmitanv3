/**
 * Discovery service stub for API routes.
 * Minimal implementation to resolve TypeScript errors without breaking the build.
 */

export const discoveryService = {
  getDiscoveryFeed: async (
    _userId: string,
    _filters: Record<string, unknown>,
    _skip: number,
    _take: number
  ) => [],
  searchProfiles: async (_userId: string, _query: string, _skip: number, _take: number) => [],
  getPublicProfile: async (_viewerId: string, _targetUserId: string) => null,
  getProfileStats: async (_userId: string) => ({ likes: 0, passes: 0, matches: 0 }),
};
