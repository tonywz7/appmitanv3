"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Cari Pasangan", href: "/discovery" },
  { label: "Blog", href: "/blog-insights" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Bantuan", href: "/faq" },
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
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`font-body-md text-body-md transition-colors active:opacity-80 ${
                  isActive
                    ? "border-b-2 border-primary font-bold text-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden font-body-md text-body-md font-semibold text-primary transition-all hover:opacity-80 lg:block"
          >
            Masuk
          </Link>
          <Link
            href="/register"
            className="rounded-lg bg-primary-container px-6 py-2.5 font-label-md text-label-md font-bold text-on-primary-container shadow-sm transition-all hover:bg-primary hover:text-on-primary active:scale-95"
          >
            Daftar Sekarang
          </Link>
        </div>
      </div>
    </header>
  );
}
