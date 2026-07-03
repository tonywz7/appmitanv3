# MITAN Backend Setup Guide

This guide walks you through setting up the complete backend infrastructure for the MITAN matrimony platform.

## Architecture Overview

- **Framework**: Next.js 15 (App Router)
- **Database**: PostgreSQL (Prisma ORM)
- **Authentication**: JWT (access + refresh tokens)
- **Password Security**: bcryptjs
- **Validation**: Zod schemas
- **Rate Limiting**: In-memory rate limiter (production: use Upstash Redis)

## Prerequisites

- Node.js 18+
- PostgreSQL database (local or cloud)
- pnpm or npm

## 1. Database Setup

### Local PostgreSQL

```bash
# macOS with Homebrew
brew install postgresql
brew services start postgresql
createdb mitan_db
```

### Environment Variables

Copy `.env.example` to `.env.local` and update:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
# PostgreSQL connection string
DATABASE_URL="postgresql://user:password@localhost:5432/mitan_db?schema=public"

# JWT secrets (generate with: openssl rand -base64 32)
JWT_SECRET="your-32-char-secret-key-here"
JWT_REFRESH_SECRET="your-32-char-refresh-secret-key"

# App config
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NODE_ENV="development"
```

### Generate JWT Secrets

```bash
openssl rand -base64 32
# Run twice and paste the output into JWT_SECRET and JWT_REFRESH_SECRET
```

## 2. Database Migration

### Initialize Prisma and Create Tables

```bash
# Generate Prisma client
pnpm prisma generate

# Run migrations (creates tables)
pnpm prisma migrate dev --name init

# Or push schema directly (development only)
pnpm prisma db push
```

### Seed Test Data

```bash
pnpm db:seed
```

This creates two test users:
- Email: `fatima@example.com` / Password: `TestPassword123!`
- Email: `ahmad@example.com` / Password: `TestPassword123!`

## 3. Install Dependencies

```bash
pnpm install
```

This installs:
- `@prisma/client` — Database client
- `bcryptjs` — Password hashing
- `jsonwebtoken` — JWT signing/verification
- `zod` — Schema validation
- `react-hook-form` + `@hookform/resolvers` — Form handling

## 4. Core Backend Components

### Environment & Config (`src/config/env.ts`)
Loads and validates environment variables at startup.

### Prisma Client (`src/lib/prisma.ts`)
Singleton instance for database access.

### Error Handling (`src/lib/errors.ts`)
`ApiError` class with HTTP status codes.

### Password & JWT (`src/lib/password.ts`, `src/lib/jwt.ts`)
- `hashPassword()` — Bcrypt hashing (salt rounds: 10)
- `verifyPassword()` — Bcrypt comparison
- `generateTokens()` — Create access (15m) + refresh (7d) tokens
- `verifyToken()` — Verify and decode tokens

### Rate Limiting (`src/lib/rate-limit.ts`)
In-memory rate limiter for login/register (5 attempts per 15 min).

### Repositories (`src/server/repositories/`)
Data access layer:
- `user.repo.ts` — User CRUD + password updates
- `onboarding.repo.ts` — Profile & religious profile persistence
- `interaction.repo.ts` — Likes, passes, matches, messages
- `discovery.repo.ts` — Feed queries with filtering

### Services (`src/services/`)
Business logic layer:
- `auth.service.ts` — Login, register, password reset
- `onboarding.service.ts` — Profile completion tracking
- `interaction.service.ts` — Likes, matches, messaging
- `discovery.service.ts` — Feed, search, profile stats

### Schemas (`src/schemas/`)
Zod validation schemas for all inputs:
- `auth.schema.ts` — Login, register, password reset
- `onboarding.schema.ts` — Personal & religious info
- `interaction.schema.ts` — Likes, matches
- `profile.schema.ts` — Public profile data
- `discovery.schema.ts` — Feed filters, search

## 5. API Routes Structure

### Authentication
- `POST /api/auth/login` — Sign in with email/password
- `POST /api/auth/register` — Create account
- `POST /api/auth/forgot-password` — Request password reset

### Onboarding
- `POST /api/onboarding/personal` — Save personal info
- `POST /api/onboarding/religious` — Save religious profile
- `GET /api/onboarding/religious` — Get progress

### Interactions
- `POST /api/interactions/like` — Like a user (auto-match on mutual)
- `DELETE /api/interactions/like` — Remove like
- `POST /api/interactions/pass` — Skip user

### Matches & Messaging
- `GET /api/matches` — List user's matches
- `GET /api/matches/[matchId]` — Get match details
- `GET /api/matches/[matchId]/messages` — Load messages
- `POST /api/matches/[matchId]/messages` — Send message

### Discovery & Profiles
- `GET /api/discovery/feed` — Discovery feed with filters
- `GET /api/search?q=...` — Search profiles
- `GET /api/profiles/[userId]` — Public profile

## 6. Authentication Flow

### Login/Register Request
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"TestPassword123!"}'
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": { "id": "uuid", "email": "test@example.com", ... },
    "tokens": {
      "accessToken": "eyJhbGc...",
      "refreshToken": "eyJhbGc..."
    }
  }
}
```

### Protected Route Request
Use the `accessToken` in the Authorization header:

```bash
curl -X GET http://localhost:3000/api/discovery/feed \
  -H "Authorization: Bearer eyJhbGc..."
```

## 7. Database Schema Highlights

### Users
- `id` — UUID (primary key)
- `email` — Unique, lowercase
- `passwordHash` — Bcrypt hash (10 rounds)
- `firstName`, `lastName`
- `role` — USER | ADMIN (default: USER)
- `createdAt`, `updatedAt`, `deletedAt` (soft delete)

### UserProfile
- `userId` — FK to users
- `age`, `height`, `city`, `country`
- `gender` — MALE | FEMALE
- `maritalStatus` — SINGLE | DIVORCED | WIDOWED
- `education`, `occupation`, `bio`
- `photos` — Array of image URLs

### ReligiousProfile
- `userId` — FK to users
- `religiousLevel` — PRACTICING | MODERATE | LIBERAL
- `prayerFrequency` — FIVE_TIMES | SOMETIMES | NEVER
- `quranRecitation`, `hijab` — Boolean
- `values` — Array (FAMILY, FAITH, EDUCATION, etc.)

### Interactions
- **Like** — `userId`, `targetUserId`, timestamp
- **Pass** — `userId`, `targetUserId`, timestamp
- **Match** — `user1Id`, `user2Id` (mutual likes)
- **Message** — `matchId`, `senderId`, `content`, `readAt`

## 8. Running Locally

```bash
# 1. Start database (if local PostgreSQL)
brew services start postgresql

# 2. Install dependencies
pnpm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your DATABASE_URL and secrets

# 4. Initialize database
pnpm prisma migrate dev
pnpm db:seed

# 5. Start dev server
pnpm dev

# 6. Test auth endpoint
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"fatima@example.com","password":"TestPassword123!"}'
```

## 9. Production Deployment

### Vercel (Recommended)

```bash
# 1. Push to GitHub
git add .
git commit -m "Add backend infrastructure"
git push origin main

# 2. Import to Vercel
# https://vercel.com/new → GitHub → Select repo

# 3. Set environment variables in Vercel dashboard
# Add DATABASE_URL, JWT_SECRET, JWT_REFRESH_SECRET

# 4. Deploy
# Vercel auto-runs: prisma generate && next build
```

### Prisma Migrations on Production

```bash
# Deploy migrations to production database
pnpm prisma migrate deploy
```

### Environment Variables (Vercel)

In Vercel dashboard → Settings → Environment Variables:

```
DATABASE_URL=postgresql://...
JWT_SECRET=your-secret
JWT_REFRESH_SECRET=your-refresh-secret
NEXT_PUBLIC_APP_URL=https://your-domain.com
NODE_ENV=production
```

## 10. Monitoring & Debugging

### View Database (Prisma Studio)
```bash
pnpm db:studio
# Opens UI at http://localhost:5555
```

### Check Migrations Status
```bash
pnpm prisma migrate status
```

### View Generated Prisma Client
```bash
cat node_modules/.prisma/client/index.d.ts | head -50
```

### Enable Debug Logging
```bash
DEBUG=* pnpm dev
```

## 11. Common Issues

### "Migrations have failed"
```bash
# Reset database (⚠️ deletes all data)
pnpm prisma migrate reset

# Or deploy pending migrations
pnpm prisma migrate deploy
```

### "JWT verification failed"
- Check JWT_SECRET matches across environments
- Ensure tokens aren't expired (access: 15m, refresh: 7d)
- Verify Authorization header format: `Bearer <token>`

### "Rate limit exceeded"
- In-memory limiter resets on server restart
- For persistent rate limiting, integrate Upstash Redis:
  ```bash
  pnpm add @upstash/redis
  ```

## 12. Next Steps

1. **Email Integration** — Add Sendgrid/SendGrid for password resets and notifications
2. **WebSockets** — Implement real-time messaging with Socket.io or Pusher
3. **Image Upload** — Add Vercel Blob or AWS S3 for profile photos
4. **Admin Dashboard** — Create `/admin` routes for moderation
5. **Analytics** — Integrate Vercel Analytics or PostHog

## Documentation Files

- **Prisma Schema**: `prisma/schema.prisma`
- **Zod Schemas**: `src/schemas/`
- **Services**: `src/services/`
- **Repositories**: `src/server/repositories/`
- **API Routes**: `src/app/api/`
- **Middleware**: `src/middleware.ts`
- **Environment Config**: `src/config/env.ts`

---

**Backend Status**: Production-ready with comprehensive error handling, validation, rate limiting, and Prisma migrations.
