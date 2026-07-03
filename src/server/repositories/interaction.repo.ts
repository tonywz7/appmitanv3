import prisma from '@/lib/prisma';

export const interactionRepository = {
  like: async (userId: string, targetUserId: string) => {
    return prisma.like.create({
      data: {
        userId,
        targetUserId,
      },
    });
  },

  unlike: async (userId: string, targetUserId: string) => {
    return prisma.like.delete({
      where: {
        userId_targetUserId: { userId, targetUserId },
      },
    });
  },

  checkLike: async (userId: string, targetUserId: string) => {
    return prisma.like.findUnique({
      where: {
        userId_targetUserId: { userId, targetUserId },
      },
    });
  },

  pass: async (userId: string, targetUserId: string) => {
    return prisma.pass.create({
      data: {
        userId,
        targetUserId,
      },
    });
  },

  checkPass: async (userId: string, targetUserId: string) => {
    return prisma.pass.findUnique({
      where: {
        userId_targetUserId: { userId, targetUserId },
      },
    });
  },

  createMatch: async (userId1: string, userId2: string) => {
    const existing = await prisma.match.findFirst({
      where: {
        OR: [
          { user1Id: userId1, user2Id: userId2 },
          { user1Id: userId2, user2Id: userId1 },
        ],
      },
    });

    if (existing) return existing;

    return prisma.match.create({
      data: {
        user1Id: userId1,
        user2Id: userId2,
      },
    });
  },

  getMatches: async (userId: string, skip: number = 0, take: number = 20) => {
    return prisma.match.findMany({
      where: {
        OR: [{ user1Id: userId }, { user2Id: userId }],
      },
      include: {
        user1: { include: { profile: true } },
        user2: { include: { profile: true } },
      },
      skip,
      take,
      orderBy: { createdAt: 'desc' },
    });
  },

  getMatch: async (matchId: string) => {
    return prisma.match.findUnique({
      where: { id: matchId },
      include: {
        user1: { include: { profile: true } },
        user2: { include: { profile: true } },
        messages: { orderBy: { createdAt: 'asc' } },
      },
    });
  },

  createMessage: async (matchId: string, userId: string, content: string) => {
    return prisma.message.create({
      data: {
        matchId,
        senderId: userId,
        content,
      },
    });
  },

  getMessages: async (matchId: string, skip: number = 0, take: number = 50) => {
    return prisma.message.findMany({
      where: { matchId },
      skip,
      take,
      orderBy: { createdAt: 'desc' },
    });
  },

  markMessagesAsRead: async (matchId: string, userId: string) => {
    return prisma.message.updateMany({
      where: {
        matchId,
        NOT: { senderId: userId },
        readAt: null,
      },
      data: {
        readAt: new Date(),
      },
    });
  },
};
