"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/Icon";

export interface AppNavItem {
  label: string;
  href: string;
}

const DEFAULT_NAV_ITEMS: AppNavItem[] = [
  { label: "Discover", href: "/discovery" },
  { label: "Matches", href: "/matches" },
  { label: "Messages", href: "/messages" },
  { label: "Profile", href: "/profile" },
];

interface AppNavBarProps {
  /** Override default nav items */
  navItems?: AppNavItem[];
  /** User avatar URL. When provided shows avatar instead of "Get Started" CTA. */
  avatarSrc?: string;
  avatarAlt?: string;
  /** Optional notification count badge on the bell icon */
  notificationCount?: number;
  /** Show notifications + settings icon buttons (authenticated state) */
  showIconActions?: boolean;
  /** CTA label when avatarSrc is not provided */
  ctaLabel?: string;
  ctaHref?: string;
}

/**
 * Authenticated top navigation bar shared across all MITAN app screens.
 *
 * Exact Stitch spec:
 *  - fixed, z-50, h-[88px]
 *  - bg-surface/90 backdrop-blur-xl
 *  - border-b border-outline-variant/30 shadow-sm
 *  - MITAN wordmark left (headline-md bold)
 *  - nav links center (hidden on mobile, label-md)
 *  - icon buttons + avatar (or CTA) right
 *  - max-w-[1440px] mx-auto px-margin-desktop
 */
export function AppNavBar({
  navItems = DEFAULT_NAV_ITEMS,
  avatarSrc,
  avatarAlt = "Your profile",
  notificationCount,
  showIconActions = true,
  ctaLabel = "Get Started",
  ctaHref = "/register",
}: AppNavBarProps) {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between h-[88px] px-margin-desktop">
        {/* Wordmark */}
        <Link
          href="/dashboard"
          className="font-headline-md text-headline-md font-bold tracking-tight text-primary shrink-0"
        >
          MITAN
        </Link>

        {/* Nav links — desktop only */}
        <nav className="hidden md:flex items-center gap-8 h-full" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`font-label-md text-label-md transition-colors duration-300 flex items-center h-full ${
                  isActive
                    ? "text-primary font-bold border-b-2 border-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Trailing actions */}
        <div className="flex items-center gap-3">
          {showIconActions && (
            <>
              {/* Notifications */}
              <Link
                href="/notifications"
                className="relative p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high/50 transition-colors active:scale-95"
                aria-label="Notifications"
              >
                <Icon name="notifications" className="text-[24px]" />
                {notificationCount && notificationCount > 0 ? (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-error-red rounded-full flex items-center justify-center font-label-sm text-[10px] text-white leading-none">
                    {notificationCount > 9 ? "9+" : notificationCount}
                  </span>
                ) : null}
              </Link>

              {/* Settings */}
              <Link
                href="/settings"
                className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high/50 transition-colors active:scale-95"
                aria-label="Settings"
              >
                <Icon name="settings" className="text-[24px]" />
              </Link>
            </>
          )}

          {/* Avatar or CTA */}
          {avatarSrc ? (
            <Link href="/profile" aria-label="View your profile">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant/30 ml-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={avatarSrc}
                  alt={avatarAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          ) : (
            <Link
              href={ctaHref}
              className="hidden md:inline-flex items-center justify-center bg-primary text-on-primary font-label-md text-label-md px-btn-px py-btn-py rounded-lg scale-95 hover:scale-100 active:scale-90 transition-transform duration-200"
            >
              {ctaLabel}
            </Link>
          )}

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-primary"
            aria-label="Open menu"
          >
            <Icon name="menu" className="text-[24px]" />
          </button>
        </div>
      </div>
    </header>
  );
}
