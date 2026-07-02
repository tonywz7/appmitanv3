import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

/**
 * Top navigation bar shown on the landing page and transactional auth
 * screens (login, register, check-email) that keep the marketing nav visible.
 */
export function Navbar() {
  return (
    <nav className="fixed top-0 left-1/2 z-50 flex h-[88px] w-full max-w-max-width -translate-x-1/2 items-center justify-between border-b border-outline-variant bg-background/90 px-margin-desktop backdrop-blur-md">
      <Link href="/" className="font-headline-md text-headline-md font-bold tracking-tight text-primary">
        {SITE_NAME}
      </Link>
      <div className="hidden items-center gap-8 md:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-label-md text-label-md text-secondary transition-colors duration-200 hover:text-primary"
          >
            {link.label}
          </a>
        ))}
      </div>
      <Link
        href="/register"
        className="flex items-center justify-center rounded-button bg-primary px-btn-px py-btn-py font-label-md text-label-md text-on-primary transition-all hover:bg-primary/90 active:scale-95"
      >
        Join MITAN
      </Link>
    </nav>
  );
}
