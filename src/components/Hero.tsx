import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
      {/* Left: text content */}
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 bg-surface-accent-tint border border-accent-light px-4 py-1.5 rounded-full">
          <span className="text-label-sm font-bold text-accent-deep uppercase">
            Intentional Marriage
          </span>
          <span aria-hidden="true" className="w-1 h-1 bg-accent-deep rounded-full" />
          <span className="text-label-sm font-medium text-accent-deep uppercase">
            Verified &amp; Private
          </span>
        </div>

        <h1 className="font-display font-extrabold text-display-lg-mobile md:text-display-lg text-text-primary text-balance">
          Find your life partner, built on{' '}
          <span className="text-accent">Family</span> &amp; Faith.
        </h1>

        <p className="text-text-secondary text-body-lg leading-relaxed max-w-md text-pretty">
          A community-centered matrimony platform designed for meaningful
          connection and respectful family involvement through our
          integrated Wali System.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/onboarding"
            className="bg-accent-deep text-white px-8 py-4 rounded-full text-base font-bold shadow-primary hover:bg-accent-deep-hover motion-safe:hover:scale-[0.98] transition-all"
          >
            Start Your Journey
          </Link>
          <a
            href="#how-it-works"
            className="flex items-center gap-2 border border-gray-200 px-6 py-4 rounded-full text-base font-bold text-text-primary hover:bg-gray-50 transition-colors"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
            How it Works
          </a>
        </div>

        {/* Social proof */}
        <div className="flex items-center gap-4 pt-4 border-t border-border">
          <div aria-hidden="true" className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300" />
            <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-400" />
            <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-500" />
          </div>
          <p className="text-body-sm text-text-muted">
            Trusted by{' '}
            <span className="font-bold text-text-secondary">2,400+</span>{' '}
            families this month
          </p>
        </div>
      </div>

      {/* Right: image */}
      <div className="relative flex justify-end">
        <div
          aria-hidden="true"
          className="absolute -top-5 -right-5 w-[105%] h-[105%] bg-surface-accent-tint rounded-canvas -z-10"
        />
        <div className="relative rounded-3xl overflow-hidden shadow-canvas max-w-sm lg:max-w-md w-full">
          <Image
            alt="A warm family moment over tea, symbolizing a respectful, family-involved introduction"
            className="w-full h-auto object-cover aspect-[4/5]"
            src="/images/hero-couple.png"
            width={448}
            height={560}
            priority
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
          />

          <div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 bg-accent-light rounded-full flex items-center justify-center text-accent-deep shrink-0">
              <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" />
              </svg>
            </div>
            <div>
              <p className="text-body-sm font-bold text-text-primary">Wali Verified</p>
              <p className="text-body-sm text-text-secondary">Family-backed introduction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
