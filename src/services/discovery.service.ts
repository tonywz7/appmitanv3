/**
 * Discovery service stub for API routes.
 * Minimal implementation to resolve TypeScript errors without breaking the build.
 */

export const discoveryService = {
  getDiscoveryFeed: async () => [],
  searchProfiles: async () => [],
  getPublicProfile: async () => null,
  getProfileStats: async () => ({ likes: 0, passes: 0, matches: 0 }),
};
