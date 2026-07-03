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
      firstName: 'Fatima',
      lastName: 'Ahmed',
      role: 'USER',
      profile: {
        create: {
          age: 28,
          city: 'London',
          country: 'UK',
          gender: 'FEMALE',
          height: '165',
          maritalStatus: 'SINGLE',
          education: 'University',
          occupation: 'Software Engineer',
          bio: 'Looking for someone kind and sincere',
          photos: ['https://via.placeholder.com/400'],
        },
      },
      religiousProfile: {
        create: {
          religiousLevel: 'PRACTICING',
          prayerFrequency: 'FIVE_TIMES',
          quranRecitation: true,
          hijab: true,
          values: ['FAMILY', 'FAITH', 'EDUCATION'],
        },
      },
      onboardingProgress: {
        create: {
          completedSteps: ['personal-information', 'religious-profile'],
          lastCompletedStep: 'religious-profile',
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
      firstName: 'Ahmad',
      lastName: 'Hassan',
      role: 'USER',
      profile: {
        create: {
          age: 32,
          city: 'Manchester',
          country: 'UK',
          gender: 'MALE',
          height: '180',
          maritalStatus: 'SINGLE',
          education: 'University',
          occupation: 'Consultant',
          bio: 'Seeking a life partner for marriage',
          photos: ['https://via.placeholder.com/400'],
        },
      },
      religiousProfile: {
        create: {
          religiousLevel: 'PRACTICING',
          prayerFrequency: 'FIVE_TIMES',
          quranRecitation: false,
          hijab: false,
          values: ['FAMILY', 'FAITH', 'HONESTY'],
        },
      },
      onboardingProgress: {
        create: {
          completedSteps: ['personal-information', 'religious-profile'],
          lastCompletedStep: 'religious-profile',
        },
      },
    },
    include: { profile: true, religiousProfile: true },
  });

  // Create sample match
  const match = await prisma.match.create({
    data: {
      user1Id: user1.id,
      user2Id: user2.id,
    },
  });

  // Create sample messages
  await prisma.message.createMany({
    data: [
      {
        matchId: match.id,
        senderId: user1.id,
        content: 'Assalamu alaikum! How are you?',
      },
      {
        matchId: match.id,
        senderId: user2.id,
        content: 'Wa alaikum assalam! I am well, alhamdulillah.',
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
