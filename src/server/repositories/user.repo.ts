import prisma from '@/lib/prisma';

export const userRepository = {
  create: async (data: {
    email: string;
    passwordHash: string;
    firstName?: string;
    lastName?: string;
    role?: string;
  }) => {
    return prisma.user.create({
      data: {
        email: data.email,
        passwordHash: data.passwordHash,
        firstName: data.firstName,
        lastName: data.lastName,
        role: data.role || 'USER',
      },
    });
  },

  findByEmail: async (email: string) => {
    return prisma.user.findUnique({
      where: { email },
    });
  },

  findById: async (id: string) => {
    return prisma.user.findUnique({
      where: { id },
      include: { profile: true },
    });
  },

  findByIdWithProfile: async (id: string) => {
    return prisma.user.findUnique({
      where: { id },
      include: {
        profile: true,
        matches: true,
        chats: true,
      },
    });
  },

  updateProfile: async (userId: string, data: any) => {
    return prisma.user.update({
      where: { id: userId },
      data: { ...data, updatedAt: new Date() },
      include: { profile: true },
    });
  },

  updatePassword: async (userId: string, passwordHash: string) => {
    return prisma.user.update({
      where: { id: userId },
      data: { passwordHash, updatedAt: new Date() },
    });
  },

  softDelete: async (userId: string) => {
    return prisma.user.update({
      where: { id: userId },
      data: { deletedAt: new Date() },
    });
  },

  findActive: async (id: string) => {
    return prisma.user.findUnique({
      where: { id },
    }).then((user) => {
      if (user?.deletedAt) return null;
      return user;
    });
  },
};
