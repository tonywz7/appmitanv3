# Phase 1: Design Audit Report
**Mitan Matrimony Platform — Production Ready Next.js Migration**

Generated: 2025-07-03  
Source: `mitan-cleaned.zip` (official design source)  
Scope: Pixel-perfect fidelity audit

---

## Executive Summary

The mitan-cleaned source contains **8 complete HTML reference pages** and one **BLOCKED page** (missing source code). All design tokens are defined in `design-tokens.json`. The current Next.js project has been partially scaffolded with custom components, but **does not yet match the official Stitch design output**.

**Action:** Reproduce each HTML page exactly as a Next.js component using only the official design tokens.

---

## Design Source Inventory

### Complete Source Pages (8)
1. **Landing** (`src/app/landing/index.html`) — Hero-centric marketing page with emerald accent
2. **Landing Animated** (`src/app/landing-animated/index.html`) — Shader background variant
3. **Login** (`src/app/login/index.html`) — Form with language switcher, Material Symbols icons
4. **Register** (`src/app/register/index.html`) — Multi-field signup form
5. **Blog Insights** (`src/app/blog-insights/index.html` + `mobile.html`) — Article grid
6. **FAQ** (`src/app/faq/index.html`) — Accordion-based Q&A
7. **Hubungi Kami** (`src/app/hubungi-kami/index.html`) — Contact form (Indonesian)
8. **Keamanan & Privasi** (`src/app/keamanan-privasi/index.html`) — Security/privacy info

### BLOCKED Page (1)
- **About** (`src/app/about/`) — **MISSING_SOURCE.md**: Stitch export only contained screenshot, no code.html
  - Reference: `public/screens/about.png`
  - Status: Awaiting re-export from Stitch

### Layout Components (2)
- **Header** (`src/components/layout/header.html`) — Navigation bar
- **Footer** (`src/components/layout/footer.html`) — Site footer

### Shared Components (1)
- **Shader Background** (`src/components/shared/shader-background.html`) — WebGL visual effect

---

## Official Design Tokens

### Colors (Emerald + Warm Neutrals)
```json
Primary: #006C4B (emerald)
On-Primary: #FFFFFF
Primary-Container: #00B37E
Secondary: #735C00 (mustard)
Surface (bg): #FAF9F7 (warm off-white)
On-Surface (text): #1A1C1B (dark)
Error: #BA1A1A
```

### Typography (2 families)
- **Manrope**: Display, Headline (700/600 weight)
- **Plus Jakarta Sans**: Body, Label (400/600 weight)
- Material Symbols Outlined for icons

### Spacing & Sizing
- Unit: 8px
- Container max: 1200px
- Gutter: 24px
- Mobile margin: 16px | Desktop margin: 40px
- Border radius: sm (4px) → full (9999px)

### Shadows & Effects
- Tonal card: `0px 4px 20px rgba(26, 54, 54, 0.04)`
- Hover: `0px 8px 30px rgba(26, 54, 54, 0.08)`
- Focus ring: 2px outline at 10% opacity

---

## Current Next.js Project State

### What Exists
- ✅ Backend infrastructure (Prisma, services, API routes)
- ✅ Design token file copied to project
- ✅ Some custom UI components (Button, Modal, Table, etc.)
- ✅ Admin pages scaffolded
- ✅ Onboarding flows partially built

### What Needs Replacement
- ❌ Pages do NOT match Stitch HTML output
- ❌ Components use custom styling, not official tokens
- ❌ Layout structure differs from source
- ❌ Navigation/routing may differ
- ❌ Missing shared layout components (header, footer, shader bg)

---

## Page-by-Page Reproduction Requirements

### High Priority (Complete HTML source + Stitch design)

#### 1. Landing Page (`/`)
**Source:** `src/app/landing/index.html`  
**Stitch screens:** landing.png, landing-animated.png  
**Key elements:**
- Hero section with emerald accent shape
- Embedded image with glass-morphism effect
- CTA buttons (primary + secondary)
- Browser-in-browser frame effect (shadow + border-radius)
- Responsive: desktop (1100px) → mobile (full width)

**HTML structure:** DIV-based layout, Tailwind v3, custom shadow styles  
**Conversion:** Replace with Next.js component using design tokens

#### 2. Login Page (`/login`)
**Source:** `src/app/login/index.html`  
**Stitch screens:** login-desktop.png  
**Key elements:**
- Fixed top-right language switcher
- Centered card form (white bg, tonal shadow)
- Material Symbols Outlined icons
- Input fields with focus ring (2px emerald outline)
- "Remember me" checkbox
- CTA buttons (primary full-width)
- "Daftar di sini" link for sign-up

**HTML structure:** Semantic form, Material Icons, Tailwind form plugin  
**Conversion:** Extract form logic, replace with Next.js form component with react-hook-form

#### 3. Register Page (`/register`)
**Source:** `src/app/register/index.html`  
**Stitch screens:** register-desktop.png  
**Similar structure to login**, multiple fields (email, password, confirm password, name, etc.)

#### 4. Blog Insights Page (`/blog`)
**Source:** `src/app/blog-insights/index.html` + `mobile.html`  
**Stitch screens:** blog-insights-desktop.png, blog-insights-mobile.png  
**Key elements:**
- Article card grid (3 col desktop, responsive)
- Card components with image, title, excerpt, date
- Read more link with arrow
- Responsive: desktop (3 cols) → mobile (1 col)

**HTML structure:** Grid layout, card components  
**Conversion:** Build ArticleCard component, use design tokens for spacing/colors

#### 5. FAQ Page (`/faq`)
**Source:** `src/app/faq/index.html`  
**Stitch screens:** faq-desktop.png  
**Key elements:**
- Accordion list with expand/collapse
- Q&A pairs
- Smooth transitions on open/close
- Emerald accent on active item

**HTML structure:** Custom accordion implementation  
**Conversion:** Implement Accordion component with state management

#### 6. Hubungi Kami Page (`/hubungi-kami`)
**Source:** `src/app/hubungi-kami/index.html`  
**Stitch screens:** hubungi-kami-desktop.png  
**Key elements:**
- Contact form (name, email, message)
- Submit button
- Success/error states

#### 7. Keamanan & Privasi Page (`/keamanan-privasi`)
**Source:** `src/app/keamanan-privasi/index.html`  
**Stitch screens:** keamanan-privasi-desktop.png  
**Key elements:**
- Informational content sections
- Headings and body text using typography tokens
- Emerald accent elements

### Layout Components (All Pages)

#### Header Component
**Source:** `src/components/layout/header.html`  
**Usage:** All pages  
**Key elements:**
- Logo/brand name
- Navigation links
- Language switcher (if applicable)

#### Footer Component
**Source:** `src/components/layout/footer.html`  
**Usage:** All pages  
**Key elements:**
- Links (about, contact, privacy, etc.)
- Copyright text
- Social links (if any)

#### Shader Background Component
**Source:** `src/components/shared/shader-background.html`  
**Usage:** Landing, animated variant  
**Key elements:**
- WebGL/Canvas shader animation
- Background visual effect
- Performance-optimized

### Blocked Page (No Action Yet)

#### About Page (`/about`)
**Status:** ⚠️ **MISSING SOURCE**  
**Action:** Awaiting re-export from Stitch with code.html  
**Reference:** `public/screens/about.png` (visual-only)  
**Note:** Do not invent design; wait for source code

---

## Technical Requirements for Phase 2

### Setup
- Use design-tokens.json as ONLY source for:
  - Colors (Tailwind CSS color utilities)
  - Typography (font-family, font-size, font-weight, line-height)
  - Spacing (gap, padding, margin)
  - Border-radius (rounded-*)
  - Shadows (box-shadow utilities)

### Component Architecture
Each page should be:
1. A Next.js page component (`src/app/[page]/page.tsx`)
2. With sub-components for sections (Header, Hero, Form, etc.)
3. Using Tailwind CSS classes mapped to design tokens
4. With proper TypeScript types
5. With accessibility (ARIA labels, semantic HTML)

### Conversion Strategy
1. **Read HTML source** → Extract markup structure and classes
2. **Map Tailwind classes** → Link to design-tokens.json values
3. **Replace custom styles** → Use only official token colors/spacing
4. **Create React components** → One component per HTML template
5. **Test responsive behavior** → Verify mobile/tablet/desktop layouts
6. **Verify visual output** → Compare generated page with Stitch screenshot

### Do NOT
- ❌ Invent new component designs
- ❌ Modernize or simplify the interface
- ❌ Change navigation structure
- ❌ Replace Material Symbols with other icon libraries
- ❌ Modify layout grids or spacing
- ❌ Create alternative color schemes
- ❌ Change typography sizes or families

---

## Acceptance Criteria

Each page will be considered **COMPLETE** when:

1. ✅ All HTML elements are converted to React/Next.js
2. ✅ Visual output **exactly matches** Stitch screenshot
3. ✅ All colors use official design tokens
4. ✅ All spacing uses official spacing tokens
5. ✅ All typography uses official font families/sizes
6. ✅ Responsive behavior matches source (mobile + desktop)
7. ✅ Forms are functional (validation, submission)
8. ✅ Build succeeds with zero errors
9. ✅ Lighthouse score > 90 (performance, accessibility)
10. ✅ All TypeScript types are correct

---

## Implementation Sequence

### Phase 2: Pages (Sequential)
1. Landing page (sets pattern for all pages)
2. Login page (form patterns)
3. Register page (multi-field form)
4. Blog Insights page (grid/card patterns)
5. FAQ page (accordion pattern)
6. Hubungi Kami page (simple form)
7. Keamanan & Privasi page (content page)

### Phase 3: Layout Components (All pages use these)
1. Header component (used by all)
2. Footer component (used by all)
3. Shader background (used by landing variants)

### Phase 4: Special Features
1. About page (blocked until source available)
2. Optimization (images, performance)
3. Accessibility audit
4. Cross-browser testing

---

## Risk & Notes

### High Priority Issues
- **About page blocked:** Cannot proceed without source code HTML. Waiting on Stitch re-export.
- **Design tokens fidelity:** Must verify every color/space matches tokens exactly.
- **Form validation:** HTML shows basic structure; needs server-side validation in Phase 2.

### Considerations
- Material Symbols Outlined icons must be loaded from Google Fonts CDN
- Tailwind v3 must be configured to use design tokens
- Responsive breakpoints: mobile-first approach (375px → 768px → 1024px)
- Language support: Some pages in Indonesian (`hubungi-kami`, `keamanan-privasi`)

---

## Files Reference

```
mitan-source/
├── docs/
│   ├── DESIGN.md (full design system spec)
│   ├── RESTRUCTURE_REPORT.md (audit notes)
│   └── ZIP_AUDIT.md (export status)
├── public/screens/
│   ├── landing.png
│   ├── login-desktop.png
│   ├── register-desktop.png
│   ├── blog-insights-{desktop,mobile}.png
│   ├── faq-desktop.png
│   ├── hubungi-kami-desktop.png
│   ├── keamanan-privasi-desktop.png
│   └── about.png (screenshot only)
├── src/app/
│   ├── landing/index.html ✅
│   ├── landing-animated/index.html ✅
│   ├── login/index.html ✅
│   ├── register/index.html ✅
│   ├── blog-insights/{index.html, mobile.html} ✅
│   ├── faq/index.html ✅
│   ├── hubungi-kami/index.html ✅
│   ├── keamanan-privasi/index.html ✅
│   └── about/MISSING_SOURCE.md ⚠️
├── src/components/layout/
│   ├── header.html ✅
│   └── footer.html ✅
├── src/components/shared/
│   └── shader-background.html ✅
└── src/constants/
    └── design-tokens.json ✅ (official source)
```

---

## Status Summary

| Page | Source | Status | Notes |
|------|--------|--------|-------|
| Landing | HTML ✅ | Ready | Hero + emerald accent |
| Landing (Animated) | HTML ✅ | Ready | Shader variant |
| Login | HTML ✅ | Ready | Form + language switcher |
| Register | HTML ✅ | Ready | Multi-field signup |
| Blog Insights | HTML ✅ | Ready | Grid + responsive |
| FAQ | HTML ✅ | Ready | Accordion component |
| Hubungi Kami | HTML ✅ | Ready | Contact form (ID) |
| Keamanan Privasi | HTML ✅ | Ready | Content page (ID) |
| About | Screenshot 📸 | BLOCKED | Awaiting source HTML |
| Header | HTML ✅ | Ready | Layout component |
| Footer | HTML ✅ | Ready | Layout component |
| Shader BG | HTML ✅ | Ready | WebGL effect |

**Progress:** 10 of 11 sources ready. 1 awaiting re-export.

---

## Next Steps

1. ✅ **Phase 1 Complete:** Audit finished. All sources located and documented.
2. 🔄 **Phase 2 Start:** Begin converting landing page HTML → Next.js component
3. 📋 **Phase 2 Follow:** Sequential page conversion using design tokens
4. ⏸️ **About Page:** Hold for Stitch re-export
5. ✨ **Phase 3:** Layout components, optimization, testing

---

*End of Phase 1 Audit Report*
