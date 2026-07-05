import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Manrope } from 'next/font/google';
import './globals.css';

// FIX (carried from Phase 3 audit): the original Stitch/prototype HTML
// loaded Manrope + Plus Jakarta Sans via a <link> tag but the body CSS
// still referenced 'Inter', so neither font actually rendered. Using
// next/font here removes that failure mode structurally — the font
// objects below are the only source of truth, and Tailwind's
// font-display / font-body utilities point directly at them.

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MITAN — Intentional Marriage, Built for Family & Faith',
  description:
    'MITAN is an intentional Muslim marriage platform built on trust, privacy, and family involvement — not casual dating.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${manrope.variable}`}>
      <body className="font-body text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
