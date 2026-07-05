import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustSafety from '@/components/TrustSafety';
import HowItWorks from '@/components/HowItWorks';
import ProductShowcase from '@/components/ProductShowcase';
import TrustStats from '@/components/TrustStats';
import Testimonials from '@/components/Testimonials';
import FaqTeaser, { faqs } from '@/components/FaqTeaser';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'MITAN',
      description:
        'An intentional Muslim marriage platform built on trust, privacy, and family involvement.',
      url: 'https://mitan.app',
      logo: 'https://mitan.app/logo.png',
      sameAs: [
        'https://twitter.com/mitan',
        'https://instagram.com/mitan',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        availableLanguage: ['en'],
      },
    },
    {
      '@type': 'WebApplication',
      name: 'MITAN',
      description:
        'An intentional Muslim marriage platform built on trust, privacy, and family involvement.',
      url: 'https://mitan.app',
      applicationCategory: 'SocialNetworkingApplication',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: 'MITAN — Intentional Marriage, Built for Family & Faith',
  description:
    'MITAN is an intentional Muslim marriage platform built on trust, privacy, and family involvement — not casual dating. Verified profiles, guided introductions, and the integrated Wali System.',
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="max-w-[1200px] mx-auto my-4 md:my-10 bg-surface rounded-canvas overflow-hidden shadow-canvas border border-gray-200">
        <Header />
        <main id="main-content" className="focus:outline-none">
          <Hero />
          <TrustSafety />
          <HowItWorks />
          <ProductShowcase />
          <TrustStats />
          <Testimonials />
          <FaqTeaser />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </>
  );
}
