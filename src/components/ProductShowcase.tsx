import Image from 'next/image';
import Link from 'next/link';

export default function ProductShowcase() {
  return (
    <section className="px-6 md:px-10 py-16 md:py-24 bg-surface-secondary border-t border-border">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative flex justify-start order-2 md:order-1">
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -left-4 w-full h-full bg-surface-accent-tint rounded-3xl -z-10"
          />
          <div className="relative rounded-3xl overflow-hidden shadow-canvas max-w-sm w-full">
            <Image
              alt="Two families meeting for a respectful, guided introduction over tea"
              className="w-full h-auto object-cover"
              src="/images/showcase-guided-introduction.png"
              width={384}
              height={480}
            />
          </div>
        </div>

        <div className="space-y-5 order-1 md:order-2">
          <h2 className="font-display font-bold text-headline-lg text-text-primary text-balance">
            A guided introduction, not a swipe.
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-md">
            When there&apos;s mutual interest, Mitan facilitates a
            structured introduction between both families. There&apos;s
            no endless browsing — just a small number of thoughtful,
            well-matched introductions at a time.
          </p>
          <p className="text-text-secondary leading-relaxed max-w-md">
            Conversations happen at a pace that respects both
            families&apos; comfort, with your Wali involved from the
            first message onward.
          </p>
          <Link
            href="/onboarding"
            className="font-bold text-accent-deep hover:text-accent-deep-hover transition-colors inline-flex items-center gap-2"
          >
            Start your journey
            <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
