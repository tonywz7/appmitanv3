import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Manrope } from 'next/font/google';
import './globals.css';

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mitan.app';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'light',
  themeColor: '#047857',
};

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
    'Muslim dating',
    'family marriage',
  ],
  authors: [{ name: 'MITAN' }],
  creator: 'MITAN',
  publisher: 'MITAN',
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'MITAN — Intentional Marriage, Built for Family & Faith',
    description:
      'Verified profiles, guided introductions, and family involvement through the Wali System. No swiping — just intentional marriage.',
    type: 'website',
    siteName: 'MITAN',
    locale: 'en_US',
    url: siteUrl,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MITAN — Intentional Marriage, Built for Family & Faith',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MITAN — Intentional Marriage, Built for Family & Faith',
    description:
      'Verified profiles, guided introductions, and family involvement through the Wali System.',
    images: ['/images/og-image.png'],
    creator: '@mitan',
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon.svg"
          type="image/svg+xml"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body className="font-body text-text-primary antialiased bg-canvas">
        {children}
      </body>
    </html>
  );
}
