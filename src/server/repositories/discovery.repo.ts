import prisma from '@/lib/prisma';

export const discoveryRepository = {
  getDiscoveryFeed: async (
    userId: string,
    filters: {
      ageMin?: number;
      ageMax?: number;
      location?: string;
      religiousLevel?: string;
      maritalStatus?: string;
      education?: string;
      occupation?: string;
    } = {},
    skip: number = 0,
    take: number = 20
  ) => {
    // Get users the current user has already interacted with
    const interactedUserIds = await prisma.$queryRaw`
      SELECT DISTINCT "targetUserId" FROM "Like" WHERE "userId" = ${userId}
      UNION
      SELECT DISTINCT "targetUserId" FROM "Pass" WHERE "userId" = ${userId}
    `;

    const excludeIds = (interactedUserIds as any[]).map((r: any) => r.targetUserId);
    excludeIds.push(userId);

    const where: any = {
      id: { notIn: excludeIds },
      NOT: { deletedAt: { not: null } },
      profile: { isNotNull: true },
    };

    if (filters.ageMin || filters.ageMax) {
      where.profile = where.profile || {};
      if (filters.ageMin) {
        where.profile.age = { gte: filters.ageMin };
      }
      if (filters.ageMax) {
        where.profile.age = { ...where.profile.age, lte: filters.ageMax };
      }
    }

    if (filters.location) {
      where.profile = where.profile || {};
      where.profile.city = filters.location;
    }

    if (filters.religiousLevel) {
      where.religiousProfile = where.religiousProfile || {};
      where.religiousProfile.religiousLevel = filters.religiousLevel;
    }

    if (filters.maritalStatus) {
      where.profile = where.profile || {};
      where.profile.maritalStatus = filters.maritalStatus;
    }

    if (filters.education) {
      where.profile = where.profile || {};
      where.profile.education = filters.education;
    }

    if (filters.occupation) {
      where.profile = where.profile || {};
      where.profile.occupation = filters.occupation;
    }

    return prisma.user.findMany({
      where,
      include: {
        profile: true,
        religiousProfile: true,
      },
      skip,
      take,
      orderBy: { createdAt: 'desc' },
    });
  },

  searchProfiles: async (
    userId: string,
    query: string,
    skip: number = 0,
    take: number = 20
  ) => {
    return prisma.user.findMany({
      where: {
        id: { not: userId },
        NOT: { deletedAt: { not: null } },
        OR: [
          { firstName: { contains: query, mode: 'insensitive' } },
          { lastName: { contains: query, mode: 'insensitive' } },
          { email: { contains: query, mode: 'insensitive' } },
        ],
      },
      include: {
        profile: true,
        religiousProfile: true,
      },
      skip,
      take,
    });
  },

  getPublicProfile: async (userId: string) => {
    return prisma.user.findUnique({
      where: { id: userId },
      include: {
        profile: true,
        religiousProfile: true,
      },
    });
  },

  getProfileStats: async (userId: string) => {
    const likes = await prisma.like.count({
      where: { targetUserId: userId },
    });

    const passes = await prisma.pass.count({
      where: { targetUserId: userId },
    });

    const matches = await prisma.match.count({
      where: {
        OR: [{ user1Id: userId }, { user2Id: userId }],
      },
    });

    return { likes, passes, matches };
  },
};
