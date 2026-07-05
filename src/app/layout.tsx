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

// NOTE: replace with the real production domain at launch.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mitan.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'MITAN — Intentional Marriage, Built for Family & Faith',
  description:
    'MITAN is an intentional Muslim marriage platform built on trust, privacy, and family involvement — not casual dating. Verified profiles, guided introductions, and the integrated Wali System.',
  keywords: [
    'Muslim matrimony',
    'intentional marriage',
    'halal marriage platform',
    'Wali system',
    'taaruf',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'MITAN — Intentional Marriage, Built for Family & Faith',
    description:
      'Verified profiles, guided introductions, and family involvement through the Wali System. No swiping — just intentional marriage.',
    type: 'website',
    siteName: 'MITAN',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MITAN — Intentional Marriage, Built for Family & Faith',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MITAN — Intentional Marriage, Built for Family & Faith',
    description:
      'Verified profiles, guided introductions, and family involvement through the Wali System.',
    images: ['/images/og-image.png'],
  },
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
