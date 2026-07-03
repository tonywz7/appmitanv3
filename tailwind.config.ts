import type { Config } from "tailwindcss";

// -----------------------------------------------------------------------------
// MITAN unified design tokens
//
// NOTE: The Stitch export contained a *different* tailwind.config per screen,
// with the same semantic token names (primary, secondary, on-surface-variant…)
// mapped to different literal hex values from file to file. That's a byproduct
// of each screen being generated independently. This file consolidates them
// into one source of truth so every route shares an identical design system,
// resolved primarily from design.md plus the dominant emerald / warm-off-white
// aesthetic used across the majority of screens. No layout/copy/structure was
// changed — only token *values* were unified where screens disagreed.
// -----------------------------------------------------------------------------

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Surfaces
        surface: "#FAF9F7",
        "surface-dim": "#DADAD8",
        "surface-bright": "#FAF9F7",
        "surface-container-lowest": "#FFFFFF",
        "surface-container-low": "#F4F3F1",
        "surface-container": "#EFEEEC",
        "surface-container-high": "#E9E8E6",
        "surface-container-highest": "#E3E2E0",
        "surface-variant": "#E3E2E0",
        "on-surface": "#1A1C1B",
        "on-surface-variant": "#52625A",
        "inverse-surface": "#2F3130",
        "inverse-on-surface": "#F1F1EF",
        outline: "#8A968F",
        "outline-variant": "#DDE3DF",

        // Brand / primary (MITAN emerald)
        primary: "#006C4B",
        "on-primary": "#FFFFFF",
        "primary-container": "#E7F5EE",
        "on-primary-container": "#003D28",
        "inverse-primary": "#50DEA5",
        "surface-tint": "#006C4B",
        "mitan-emerald": "#006C4B",
        "emerald-custom": "#006C4B",

        // Secondary (muted body/footer text — NOT the gold accent from the
        // raw design.md; screens consistently render `text-secondary` as
        // muted gray body copy, so that usage takes precedence for fidelity)
        secondary: "#52625A",
        "on-secondary": "#FFFFFF",
        "secondary-container": "#FED65B",
        "on-secondary-container": "#5B6B63",

        // Tertiary
        tertiary: "#476363",
        "on-tertiary": "#FFFFFF",
        "tertiary-container": "#86A3A3",
        "on-tertiary-container": "#5B6B63",

        // Background
        background: "#FAF9F7",
        "on-background": "#1A1C1B",

        // Status / semantic accents used across screens
        error: "#BA1A1A",
        "on-error": "#FFFFFF",
        "error-container": "#FFDAD6",
        "on-error-container": "#93000A",
        "error-red": "#DC2626",
        "success-green": "#059669",
        "warning-amber": "#D97706",
        "action-blue": "#2563EB",
      },
      fontFamily: {
        manrope: ["var(--font-manrope)", "sans-serif"],
        jakarta: ["var(--font-jakarta)", "sans-serif"],
        "plus-jakarta": ["var(--font-jakarta)", "sans-serif"],
        // Stitch semantic font families — each resolves to the design system typeface
        "display-lg": ["var(--font-manrope)", "sans-serif"],
        "display-lg-mobile": ["var(--font-manrope)", "sans-serif"],
        "headline-xl": ["var(--font-manrope)", "sans-serif"],
        "headline-lg": ["var(--font-manrope)", "sans-serif"],
        "headline-lg-mobile": ["var(--font-manrope)", "sans-serif"],
        // Stitch uses font-headline-md / font-headline-sm as font-family utilities
        "headline-md": ["var(--font-manrope)", "sans-serif"],
        "headline-sm": ["var(--font-manrope)", "sans-serif"],
        "body-lg": ["var(--font-jakarta)", "sans-serif"],
        "body-md": ["var(--font-jakarta)", "sans-serif"],
        "body-sm": ["var(--font-jakarta)", "sans-serif"],
        "label-md": ["var(--font-jakarta)", "sans-serif"],
        "label-sm": ["var(--font-jakarta)", "sans-serif"],
      },
      fontSize: {
        // Stitch display scale (from design-tokens.json)
        "display-lg": [
          "48px",
          { lineHeight: "56px", fontWeight: "700", letterSpacing: "-0.02em" },
        ],
        "display-lg-mobile": [
          "36px",
          { lineHeight: "44px", fontWeight: "700", letterSpacing: "-0.02em" },
        ],
        "headline-xl": [
          "48px",
          { lineHeight: "56px", fontWeight: "700", letterSpacing: "-0.02em" },
        ],
        "headline-lg": [
          "32px",
          { lineHeight: "40px", fontWeight: "600", letterSpacing: "-0.025em" },
        ],
        "headline-lg-mobile": [
          "28px",
          { lineHeight: "36px", fontWeight: "600", letterSpacing: "-0.025em" },
        ],
        // Stitch canonical headline scale
        "headline-md": ["32px", { lineHeight: "40px", fontWeight: "600" }],
        "headline-sm": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "label-md": [
          "14px",
          { lineHeight: "16px", fontWeight: "600", letterSpacing: "0.05em" },
        ],
        "label-sm": [
          "12px",
          { lineHeight: "16px", fontWeight: "500", letterSpacing: "0.05em" },
        ],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        card: "24px",
        "mitan-card": "24px",
        button: "8px",
      },
      spacing: {
        base: "4px",
        unit: "8px",
        gutter: "24px",
        "margin-mobile": "16px",
        "margin-desktop": "40px",
        "section-py": "160px",
        "card-p": "32px",
        "btn-px": "32px",
        "btn-py": "12px",
        // Stitch stack tokens
        "stack-sm": "8px",
        "stack-md": "16px",
        "stack-lg": "32px",
      },
      maxWidth: {
        "max-width": "1440px",
        // Stitch uses max-w-container-max throughout pages
        "container-max": "1200px",
      },
      boxShadow: {
        ambient: "0 4px 20px rgba(26, 54, 54, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
