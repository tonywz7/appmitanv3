export const SITE_NAME = "MITAN";
export const SITE_TAGLINE = "For Marriage, Not Dating";

export const NAV_LINKS = [
  { label: "Our Vision", href: "#vision" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Stories", href: "#stories" },
] as const;

export const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Safety Guidelines", href: "/safety" },
  { label: "Support", href: "/support" },
  { label: "Press", href: "/press" },
] as const;

/** Total number of steps in the onboarding flow (used to drive progress bars). */
export const ONBOARDING_TOTAL_STEPS = 7;
