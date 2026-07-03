import prisma from '@/lib/prisma';
import { hashPassword } from '@/lib/password';

async function main() {
  console.log('Seeding database...');

  // Create test users
  const hashedPassword = await hashPassword('TestPassword123!');

  const user1 = await prisma.user.upsert({
    where: { email: 'fatima@example.com' },
    update: {},
    create: {
      email: 'fatima@example.com',
      passwordHash: hashedPassword,
      fullName: 'Fatima Ahmed',
      role: 'USER',
      profile: {
        create: {
          gender: 'FEMALE',
          dateOfBirth: new Date('1995-06-15'),
          city: 'London',
          country: 'UK',
          heightCm: 165,
          maritalStatus: 'NEVER_MARRIED',
          education: 'University',
          profession: 'Software Engineer',
          bio: 'Looking for someone kind and sincere',
        },
      },
      religiousProfile: {
        create: {
          prayerFrequency: 'ALWAYS',
          halalLifestyle: 'ALWAYS',
          hijabStatus: 'WEARS',
        },
      },
    },
    include: { profile: true, religiousProfile: true },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'ahmad@example.com' },
    update: {},
    create: {
      email: 'ahmad@example.com',
      passwordHash: hashedPassword,
      fullName: 'Ahmad Hassan',
      role: 'USER',
      profile: {
        create: {
          gender: 'MALE',
          dateOfBirth: new Date('1992-02-10'),
          city: 'Manchester',
          country: 'UK',
          heightCm: 180,
          maritalStatus: 'NEVER_MARRIED',
          education: 'University',
          profession: 'Consultant',
          bio: 'Seeking a life partner for marriage',
        },
      },
      religiousProfile: {
        create: {
          prayerFrequency: 'ALWAYS',
          halalLifestyle: 'USUALLY',
        },
      },
    },
    include: { profile: true, religiousProfile: true },
  });

  // Create sample match
  const match = await prisma.match.create({
    data: {
      userAId: user1.id,
      userBId: user2.id,
    },
  });

  // Create sample conversation
  const conversation = await prisma.conversation.create({
    data: {
      matchId: match.id,
    },
  });

  // Create sample messages
  await prisma.message.createMany({
    data: [
      {
        conversationId: conversation.id,
        senderId: user1.id,
        body: 'Assalamu alaikum! How are you?',
      },
      {
        conversationId: conversation.id,
        senderId: user2.id,
        body: 'Wa alaikum assalam! I am well, alhamdulillah.',
      },
    ],
  });

  console.log('Seeding completed!');
  console.log('Test user 1:', user1.email, 'password: TestPassword123!');
  console.log('Test user 2:', user2.email, 'password: TestPassword123!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
