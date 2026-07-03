import prisma from '@/lib/prisma';

export const onboardingRepository = {
  createProfile: async (userId: string, data: any) => {
    return prisma.userProfile.create({
      data: {
        userId,
        ...data,
      },
    });
  },

  updateProfile: async (userId: string, data: any) => {
    return prisma.userProfile.update({
      where: { userId },
      data,
    });
  },

  getProfile: async (userId: string) => {
    return prisma.userProfile.findUnique({
      where: { userId },
    });
  },

  createReligiousProfile: async (userId: string, data: any) => {
    const existing = await prisma.religiousProfile.findUnique({
      where: { userId },
    });

    if (existing) {
      return prisma.religiousProfile.update({
        where: { userId },
        data,
      });
    }

    return prisma.religiousProfile.create({
      data: {
        userId,
        ...data,
      },
    });
  },

  getReligiousProfile: async (userId: string) => {
    return prisma.religiousProfile.findUnique({
      where: { userId },
    });
  },

  completeStep: async (userId: string, step: string) => {
    return prisma.onboardingProgress.upsert({
      where: { userId },
      update: {
        completedSteps: {
          push: step,
        },
        lastCompletedStep: step,
        updatedAt: new Date(),
      },
      create: {
        userId,
        completedSteps: [step],
        lastCompletedStep: step,
      },
    });
  },

  getProgress: async (userId: string) => {
    return prisma.onboardingProgress.findUnique({
      where: { userId },
    });
  },

  isOnboarded: async (userId: string) => {
    const progress = await prisma.onboardingProgress.findUnique({
      where: { userId },
    });
    return progress?.completedSteps?.includes('religious-profile') ?? false;
  },
};
