"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Discover", href: "#discover" },
  { label: "Matches", href: "#matches" },
  { label: "Messages", href: "#messages" },
  { label: "Events", href: "#events" },
] as const;

/**
 * Stitch-canonical top navigation bar.
 * Matches mitan-source/src/components/layout/header.html exactly:
 * sticky, h-20, bg-surface/80 backdrop-blur-md, MITAN wordmark left,
 * nav links center (hidden on mobile), Sign In + Premium buttons right.
 */
export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-surface/80 shadow-ambient backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-container-max items-center justify-between px-margin-desktop">
        {/* Logo */}
        <Link
          href="/"
          className="font-headline-md text-headline-md font-bold tracking-tight text-primary"
        >
          MITAN
        </Link>

        {/* Nav links — desktop only */}
        <nav className="hidden items-center space-x-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-body-md text-body-md text-on-surface-variant transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Link
            href="/login"
            className="rounded-lg border border-primary px-6 py-2 font-label-md text-label-md text-primary transition-all hover:bg-surface-container-low active:scale-95"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="rounded-lg bg-secondary-container px-6 py-2 font-label-md text-label-md text-on-secondary-container shadow-ambient transition-all hover:shadow-md active:scale-95"
          >
            Premium
          </Link>
        </div>
      </div>
    </header>
  );
}
