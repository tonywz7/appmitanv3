---
name: Mitan Design System
colors:
  surface: '#faf9f7'
  surface-dim: '#dadad8'
  surface-bright: '#faf9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeec'
  surface-container-high: '#e9e8e6'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1b'
  on-surface-variant: '#3c4a42'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#6c7a72'
  outline-variant: '#bbcac0'
  surface-tint: '#006c4b'
  primary: '#006c4b'
  on-primary: '#ffffff'
  primary-container: '#00b37e'
  on-primary-container: '#003d28'
  inverse-primary: '#50dea5'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#476363'
  on-tertiary: '#ffffff'
  tertiary-container: '#86a3a3'
  on-tertiary-container: '#1d3939'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#71fbc0'
  primary-fixed-dim: '#50dea5'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#005137'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#cae8e8'
  tertiary-fixed-dim: '#aecccc'
  on-tertiary-fixed: '#022020'
  on-tertiary-fixed-variant: '#304b4b'
  background: '#faf9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e3e2e0'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Manrope
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The design system is anchored in the concepts of trust, intentionality, and heritage. It serves a matrimony platform where the emotional stakes are high, requiring a UI that feels both sophisticated and deeply human. 

The style is a blend of **Premium Minimalism** and **Warm Modernism**. It avoids the clinical coldness of typical SaaS platforms by using a soft, organic color palette and generous whitespace. The interface acts as a quiet, respectful gallery for human connection, utilizing subtle depth and high-quality typography to convey authority and reliability.

**Target Audience:**
- Individuals seeking serious, long-term partnerships.
- Users who value privacy, traditional values blended with modern convenience, and an elevated aesthetic experience.

**Emotional Response:**
- Calm and reassuring.
- Premium and exclusive.
- Honest and transparent.

## Colors
The color palette is designed to evoke a sense of growth (Green) and value (Gold).

*   **Primary (Emerald Green):** Used for primary actions, success states, and brand signifiers. It represents vitality and new beginnings.
*   **Secondary (Subtle Gold):** Reserved for accent details, premium badges, and subtle highlights. It should be used sparingly to maintain its "precious" feel.
*   **Background (Soft Warm White):** A deliberate choice over pure white to reduce eye strain and provide a "paper-like" tactile warmth.
*   **Text & Surface:** We use a deep charcoal-teal (#1A3636) for text instead of pure black to maintain a softer, more high-end editorial look.

## Typography
The typography strategy pairs **Manrope** for headlines and **Plus Jakarta Sans** for body and UI elements. 

- **Manrope** provides a structural, modern, and slightly tech-forward feel for headers, ensuring the platform feels reliable.
- **Plus Jakarta Sans** introduces soft, rounded terminals that make long-form reading and profile browsing feel welcoming and friendly.
- **Usage Note:** Use tight letter-spacing for large displays to maintain a premium "compact" look. Use uppercase labels for secondary navigation and small metadata to create a clear visual hierarchy.

## Layout & Spacing
This design system utilizes a **Fixed Grid** for desktop (12 columns) and a **Fluid Grid** for mobile (4 columns).

- **Rhythm:** An 8px base grid drives all spacing decisions.
- **Negative Space:** Whitespace is treated as a first-class citizen. Profile cards and content blocks should have generous internal padding (min 24px) to avoid a cluttered or "cheap" feel.
- **Breakpoints:**
    - Mobile: < 600px (Margins: 16px)
    - Tablet: 600px - 1024px (Margins: 32px)
    - Desktop: > 1024px (Max-width: 1200px, Centered)

## Elevation & Depth
Depth is conveyed through **Tonal Layering** and **Ambient Shadows**.

1.  **Level 0 (Background):** The soft warm off-white (#F9F8F6).
2.  **Level 1 (Cards/Surface):** Pure white (#FFFFFF) with a very soft, diffused shadow.
    - *Shadow:* `0px 4px 20px rgba(26, 54, 54, 0.04)`
3.  **Level 2 (Interactive):** Elements that are hovered or active use a slightly deeper shadow to "lift" off the page.
    - *Shadow:* `0px 8px 30px rgba(26, 54, 54, 0.08)`
4.  **Outlines:** Instead of harsh borders, use 1px strokes in a light neutral tint (#E5E2DA) to define boundaries on white backgrounds.

## Shapes
The shape language is consistently **Rounded**, reflecting a soft and approachable brand personality.

- **Standard Elements:** 8px (0.5rem) radius for buttons, input fields, and small cards.
- **Large Containers:** 16px (1rem) radius for main profile cards and modal containers.
- **Avatars:** Always circular to emphasize the human element.
- **Interactive States:** Subtle transitions (200ms ease-out) should be applied to all shape transformations.

## Components

**Buttons**
- **Primary:** Filled Emerald Green with white text. High-contrast, 8px radius.
- **Secondary:** Transparent with an Emerald Green border or subtle gold text for "Premium" actions.
- **Ghost:** No background/border, used for "Cancel" or "Skip" to reduce visual noise.

**Input Fields**
- Clean, white background with a 1px soft-gray border.
- On focus: Border changes to Emerald Green with a subtle glow (2px spread).
- Labels are always positioned above the input in `body-sm` bold.

**Cards (The Profile Card)**
- The core of the platform. White background, `rounded-lg` (16px), with a soft ambient shadow.
- High-quality imagery with a subtle gradient overlay at the bottom for text legibility.
- Information hierarchy: Name (Headline-sm), Age/Location (Body-sm), Bio (Body-md).

**Chips & Badges**
- Used for interests or "Verified" statuses.
- Use a light tint of the Primary color (10% opacity Emerald) with Emerald text for a modern, flat look.
- Gold badges are strictly for "Premium" or "Featured" members.

**Lists**
- Profile lists use generous vertical spacing (32px) to ensure each potential match feels significant and distinct.