'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Safety', href: '/keamanan-privasi' },
  { label: 'Stories', href: '#stories' },
  { label: 'FAQ', href: '/faq' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header className="relative border-b border-border">
      <div className="flex items-center justify-between px-6 md:px-10 py-6">
        <Link href="/" className="flex items-center gap-2 rounded-full">
          <div className="w-8 h-8 bg-accent-deep rounded-md flex items-center justify-center">
            <svg
              aria-hidden="true"
              className="text-white w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
            </svg>
          </div>
          <span className="font-display font-extrabold text-xl tracking-tight text-text-primary uppercase">
            Mitan
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-8 text-sm font-semibold text-text-secondary"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              className="hover:text-accent-deep transition-colors rounded-sm"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/onboarding"
            className="hidden sm:inline-flex bg-accent-deep text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-primary hover:bg-accent-deep-hover transition-colors"
          >
            Start Your Journey
          </Link>
          <Link
            href="/auth"
            className="hidden sm:inline-flex bg-gray-100 text-text-primary px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors"
          >
            Log In
          </Link>

          {/* Mobile menu trigger */}
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full bg-gray-100 text-text-primary hover:bg-gray-200 transition-colors"
          >
            {menuOpen ? (
              <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu sheet */}
      {menuOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="md:hidden absolute inset-x-0 top-full z-50 bg-surface border-b border-border shadow-canvas px-6 py-6"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-full px-4 py-3 text-base font-semibold text-text-secondary hover:bg-gray-50 hover:text-accent-deep transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-2 pt-4 mt-4 border-t border-border">
            <Link
              href="/onboarding"
              onClick={() => setMenuOpen(false)}
              className="bg-accent-deep text-white px-6 py-3.5 rounded-full text-sm font-bold text-center shadow-primary hover:bg-accent-deep-hover transition-colors"
            >
              Start Your Journey
            </Link>
            <Link
              href="/auth"
              onClick={() => setMenuOpen(false)}
              className="bg-gray-100 text-text-primary px-6 py-3.5 rounded-full text-sm font-bold text-center hover:bg-gray-200 transition-colors"
            >
              Log In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
