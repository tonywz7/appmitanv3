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
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ],
};

// Funnel order: promise → proof of safety → process → product →
// numbers → stories → objections → ask.
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <div className="max-w-[1200px] mx-auto my-4 md:my-10 bg-surface rounded-canvas overflow-hidden shadow-canvas border border-gray-200">
        <Header />
        <main id="content">
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
