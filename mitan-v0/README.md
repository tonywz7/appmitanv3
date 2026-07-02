# MITAN — Web App

Production Next.js 15 (App Router) + TypeScript conversion of the Stitch design export.
Verified: `npm install`, `npm run build`, and `npm run lint` all pass cleanly (Next.js
15.5.20, a patched release — the originally-requested 15.1.3 has a known CVE).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Requires internet access on first run/build — the
Manrope and Plus Jakarta Sans fonts are fetched by `next/font/google` at build time
(this is normal Next.js behavior, not specific to this project).

## Deploy to Vercel

Push to a Git repo and import it in Vercel, or run `vercel` from this folder. No env
vars are required to build/deploy as-is (auth is stubbed — see below).

```bash
npm run build   # sanity check before deploying
```

## What's implemented

All 10 unique screens from the export (4 landing-page variants were consolidated —
see Assumptions):

| Screen | Route |
|---|---|
| Landing page | `/` |
| Login | `/login` |
| Registration | `/register` |
| Forgot password | `/forgot-password` |
| Check your email | `/check-email` |
| Create new password | `/create-new-password` |
| Password updated | `/password-updated` |
| Onboarding: Welcome | `/onboarding/welcome` |
| Onboarding: Personal information | `/onboarding/personal-information` |
| Onboarding: Religious profile | `/onboarding/religious-profile` |

## Architecture

```
src/
  app/
    page.tsx                       # Landing page
    layout.tsx, globals.css        # Root layout, fonts, design-system CSS
    (auth)/                        # Route group: login, register, forgot-password,
                                    # check-email, create-new-password, password-updated
    (onboarding)/                  # Route group: welcome, personal-information,
                                    # religious-profile
    api/auth/…/route.ts            # API route stubs (501 Not Implemented)
  components/
    ui/          Button, TextField, PasswordField, SelectField, ChipRadioGroup,
                 ProgressBar, Icon — shared primitives extracted from repeated
                 markup patterns across screens
    layout/      Navbar, Footer, AuthSplitLayout — shared page chrome
    auth/        LoginForm, RegisterForm, ForgotPasswordForm,
                 CreateNewPasswordForm, CheckEmailCard
    onboarding/  WelcomeCard, PersonalInformationForm, ReligiousProfileForm
  features/      auth/ onboarding/ profile/ discovery/ chat/ matches/
                 notifications/ trust-safety/  — domain folders scaffolded per
                 the target architecture, currently empty placeholders beyond
                 what's implemented in components/ and app/
  lib/           utils.ts (cn helper), constants.ts
  hooks/         useFadeInOnMount.ts
  services/      auth.service.ts, onboarding.service.ts — typed method stubs,
                 not wired to a backend (see below)
  store/         placeholder — no cross-route client state needed yet
  types/         auth.ts, onboarding.ts
prisma/
  schema.prisma  Data model scaffold matching the auth + onboarding fields
                 captured in the converted screens (Users, Profile,
                 ReligiousProfile, PasswordResetToken)
```

## What's intentionally NOT implemented (per your brief)

- **Auth logic** — `services/auth.service.ts` methods throw `Not implemented`;
  API routes return `501`. Forms call `event.preventDefault()` and leave a
  `// TODO` where the service call goes.
- **Database** — `prisma/schema.prisma` is a scaffold; no `DATABASE_URL`, no
  migrations run.
- **The remaining 4 of 7 onboarding steps** — only the 3 screens present in the
  export (Welcome, Personal Information, Religious Profile) were converted.

## Assumptions made (please review)

1. **Landing page variant.** The export contained four landing-page explorations
   (`desktop_1`, `desktop_2`, `director_s_cut`, `polished_master`). I used
   **`polished_master`** as the canonical `/` route since the naming signals it's
   the finished iteration. The other three weren't converted — say the word and
   I'll wire any of them up as alternates (e.g. `/variants/director-cut`) or
   swap the default.
2. **Design token conflicts, resolved.** Each screen's `code.html` shipped its
   *own* Tailwind config, and the same semantic color name (`primary`,
   `secondary`, `on-surface-variant`…) had different literal hex values from
   file to file — an artifact of each screen being generated independently.
   I unified these into one `tailwind.config.ts`, keeping the dominant emerald
   `#006C4B` primary / warm off-white surface palette used across the majority
   of screens (and matching `design.md`), and resolving `secondary` /
   `on-surface-variant` to a muted gray since that's how `text-secondary` is
   actually used everywhere (body copy, footer text) — not the gold accent
   `design.md` lists for that role, which would have visibly broken every
   screen's paragraph text. No layout, copy, or component structure changed —
   only the color *values* behind shared token names.
3. **`password_successfully_updated` screen.** Its `code.html` was missing from
   the export (only `screen.png` was included). I rebuilt it to match the
   screenshot pixel-for-pixel using the existing design system, rather than
   drop the screen — flagged in a comment at the top of
   `src/app/(auth)/password-updated/page.tsx`.
4. **Images.** Left as the original hotlinked Google-hosted URLs from the
   export (via `next/image` with `remotePatterns` configured in
   `next.config.mjs`) rather than downloading/self-hosting them, since the
   brief didn't ask for asset migration and the URLs work as-is.
5. **Animations.** The original `IntersectionObserver` + inline `<script>`
   fade-in-up behavior was reimplemented as a `data-visible` attribute driven
   by React (`useFadeInOnMount`) rather than direct DOM manipulation, since
   raw `<script>` tags don't fit an App Router / RSC architecture. Static
   above-the-fold sections render with `data-visible="true"` immediately since
   they don't need a scroll trigger.
6. **Client vs. Server Components.** Pages are Server Components by default;
   only components with interactivity (`useState`, event handlers — forms,
   password toggles, chip pickers) are marked `"use client"`.

## Next steps (not requested, but likely your next move)

- Wire `services/auth.service.ts` + the `api/auth/*` routes to Supabase (matches
  your confirmed stack from the MITAN PRD).
- Convert `prisma/schema.prisma` into real Supabase migrations once schema is
  finalized against the full PRD (this only covers the 3 onboarding steps present
  in this export, not all 7).
- Build the remaining onboarding steps (4–7) and the `discovery` / `chat` /
  `matches` screens once those exports exist.
