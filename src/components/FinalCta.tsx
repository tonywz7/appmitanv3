import Link from 'next/link';

export default function FinalCta() {
  return (
    <section className="px-6 md:px-10 py-16 md:py-24 bg-surface-secondary border-t border-border">
      <div className="bg-accent-deep rounded-canvas px-8 md:px-16 py-14 md:py-20 text-center space-y-6">
        <p className="text-label-sm font-bold text-accent-light tracking-[0.2em] uppercase">
          Begin With Intention
        </p>
        <h2 className="font-display font-extrabold text-headline-lg md:text-4xl text-white text-balance max-w-2xl mx-auto">
          Your search for a life partner deserves more than a swipe.
        </h2>
        <p className="text-accent-light text-body-lg leading-relaxed max-w-xl mx-auto text-pretty">
          Join a community where every profile is verified, every
          introduction is guided, and your family is welcome from day one.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            href="/onboarding"
            className="bg-white text-accent-deep px-8 py-4 rounded-full text-base font-bold hover:bg-accent-light motion-safe:hover:scale-[0.98] transition-all"
          >
            Start Your Journey
          </Link>
          <Link
            href="/faq"
            className="border border-white/40 text-white px-8 py-4 rounded-full text-base font-bold hover:bg-white/10 transition-colors"
          >
            Read the FAQ
          </Link>
        </div>
      </div>
    </section>
  );
}
