import { discoveryRepository } from '@/server/repositories/discovery.repo';
import { userRepository } from '@/server/repositories/user.repo';
import { ApiError } from '@/lib/errors';

export const discoveryService = {
  async getDiscoveryFeed(
    userId: string,
    filters?: {
      ageMin?: number;
      ageMax?: number;
      location?: string;
      religiousLevel?: string;
      maritalStatus?: string;
      education?: string;
      occupation?: string;
    },
    skip: number = 0,
    take: number = 20
  ) {
    const user = await userRepository.findById(userId);
    if (!user) {
      throw new ApiError(404, 'User not found');
    }

    return discoveryRepository.getDiscoveryFeed(userId, filters, skip, take);
  },

  async searchProfiles(userId: string, query: string, skip: number = 0, take: number = 20) {
    if (!query || query.trim().length < 2) {
      throw new ApiError(400, 'Search query must be at least 2 characters');
    }

    const user = await userRepository.findById(userId);
    if (!user) {
      throw new ApiError(404, 'User not found');
    }

    return discoveryRepository.searchProfiles(userId, query.trim(), skip, take);
  },

  async getPublicProfile(viewerId: string, userId: string) {
    const profile = await discoveryRepository.getPublicProfile(userId);
    if (!profile) {
      throw new ApiError(404, 'User not found');
    }

    // Don't expose sensitive info
    const { passwordHash, deletedAt, ...safeProfile } = profile;
    return safeProfile;
  },

  async getProfileStats(userId: string) {
    const user = await userRepository.findById(userId);
    if (!user) {
      throw new ApiError(404, 'User not found');
    }

    return discoveryRepository.getProfileStats(userId);
  },
};
