import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustSafety from '@/components/TrustSafety';
import TrustStats from '@/components/TrustStats';
import ProductShowcase from '@/components/ProductShowcase';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto my-4 md:my-10 bg-surface rounded-canvas overflow-hidden shadow-canvas border border-gray-200">
      <Header />
      <Hero />
      <TrustSafety />
      <TrustStats />
      <ProductShowcase />
      <Footer />
    </div>
  );
}
