import { interactionRepository } from '@/server/repositories/interaction.repo';
import { userRepository } from '@/server/repositories/user.repo';
import { ApiError } from '@/lib/errors';

export const interactionService = {
  async likeUser(userId: string, targetUserId: string) {
    if (userId === targetUserId) {
      throw new ApiError(400, 'Cannot like yourself');
    }

    const target = await userRepository.findById(targetUserId);
    if (!target) {
      throw new ApiError(404, 'User not found');
    }

    const existing = await interactionRepository.checkLike(userId, targetUserId);
    if (existing) {
      throw new ApiError(400, 'Already liked this user');
    }

    const like = await interactionRepository.like(userId, targetUserId);

    // Check for mutual like (match)
    const mutualLike = await interactionRepository.checkLike(targetUserId, userId);
    let match = null;
    if (mutualLike) {
      match = await interactionRepository.createMatch(userId, targetUserId);
    }

    return { like, match };
  },

  async unlikeUser(userId: string, targetUserId: string) {
    const like = await interactionRepository.checkLike(userId, targetUserId);
    if (!like) {
      throw new ApiError(404, 'No like found');
    }

    await interactionRepository.unlike(userId, targetUserId);
    return { success: true };
  },

  async passUser(userId: string, targetUserId: string) {
    if (userId === targetUserId) {
      throw new ApiError(400, 'Cannot pass on yourself');
    }

    const target = await userRepository.findById(targetUserId);
    if (!target) {
      throw new ApiError(404, 'User not found');
    }

    const existing = await interactionRepository.checkPass(userId, targetUserId);
    if (existing) {
      throw new ApiError(400, 'Already passed on this user');
    }

    return interactionRepository.pass(userId, targetUserId);
  },

  async getMatches(userId: string, skip: number = 0, take: number = 20) {
    const user = await userRepository.findById(userId);
    if (!user) {
      throw new ApiError(404, 'User not found');
    }

    return interactionRepository.getMatches(userId, skip, take);
  },

  async getMatch(userId: string, matchId: string) {
    const match = await interactionRepository.getMatch(matchId);
    if (!match) {
      throw new ApiError(404, 'Match not found');
    }

    // Verify user is part of this match
    if (match.user1Id !== userId && match.user2Id !== userId) {
      throw new ApiError(403, 'Unauthorized');
    }

    return match;
  },

  async sendMessage(userId: string, matchId: string, content: string) {
    if (!content || content.trim().length === 0) {
      throw new ApiError(400, 'Message content cannot be empty');
    }

    const match = await interactionRepository.getMatch(matchId);
    if (!match) {
      throw new ApiError(404, 'Match not found');
    }

    if (match.user1Id !== userId && match.user2Id !== userId) {
      throw new ApiError(403, 'Unauthorized');
    }

    return interactionRepository.createMessage(matchId, userId, content.trim());
  },

  async getMessages(userId: string, matchId: string, skip: number = 0, take: number = 50) {
    const match = await interactionRepository.getMatch(matchId);
    if (!match) {
      throw new ApiError(404, 'Match not found');
    }

    if (match.user1Id !== userId && match.user2Id !== userId) {
      throw new ApiError(403, 'Unauthorized');
    }

    await interactionRepository.markMessagesAsRead(matchId, userId);
    return interactionRepository.getMessages(matchId, skip, take);
  },
};
