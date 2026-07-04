import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "/keamanan-privasi" },
  { label: "Terms of Service", href: "#terms" },
  { label: "Ethical Guidelines", href: "#ethics" },
  { label: "Help Center", href: "/faq" },
  { label: "Support", href: "/hubungi-kami" },
];

interface AppFooterProps {
  className?: string;
}

/**
 * Authenticated app footer — shared across all MITAN app screens.
 *
 * Stitch spec (consistent across Dashboard, Notifications, Settings, Trust):
 *  - surface-container-lowest bg, border-t border-outline-variant/20
 *  - MITAN wordmark left, links center, copyright right
 *  - font-label-sm text-label-sm links, hover:text-primary opacity transitions
 */
export function AppFooter({ className = "" }: AppFooterProps) {
  return (
    <footer
      className={`w-full bg-surface-container-lowest border-t border-outline-variant/20 mt-auto ${className}`}
    >
      <div className="max-w-[1440px] mx-auto px-margin-desktop py-12 flex flex-col md:flex-row items-center justify-between gap-gutter">
        {/* Wordmark */}
        <div className="font-headline-md text-headline-md font-bold text-primary">
          MITAN
        </div>

        {/* Links */}
        <nav
          className="flex flex-wrap justify-center gap-6"
          aria-label="Footer navigation"
        >
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-200 opacity-80 hover:opacity-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p className="font-label-sm text-label-sm text-on-surface-variant text-center md:text-right">
          © 2024 MITAN. Purposeful Connections for the Ummah.
        </p>
      </div>
    </footer>
  );
}
