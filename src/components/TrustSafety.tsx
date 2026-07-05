const chips = [
  { icon: 'check', label: 'Manual Review' },
  { icon: 'family', label: 'Family Involved' },
  { icon: 'eye-off', label: 'Private by Default' },
  { icon: 'lock', label: 'Encrypted Chat' },
];

function ChipIcon({ icon }: { icon: string }) {
  switch (icon) {
    case 'check':
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" />
        </svg>
      );
    case 'family':
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      );
    case 'eye-off':
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
        </svg>
      );
    case 'lock':
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function TrustSafety() {
  return (
    <section className="px-6 md:px-10 py-16 md:py-24 bg-surface-secondary border-t border-border">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <h2 className="font-display font-bold text-headline-lg text-text-primary">
            Verified by people, not just algorithms.
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-md">
            Every profile on Mitan is reviewed by our care team before it
            goes live. We check for genuine intent, not just a completed
            form — because the people you meet here should be as serious
            as you are.
          </p>
        </div>
        <div className="space-y-4 md:pl-12 md:border-l border-border-strong">
          <h2 className="font-display font-bold text-headline-lg text-text-primary">
            Private by default.
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-md">
            Your details are visible only to people you choose to engage
            with. There is no public browsing, no unsolicited messages,
            and no data shared beyond what&apos;s needed to make a
            thoughtful introduction.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 pt-10">
        {chips.map((chip) => (
          <div
            key={chip.label}
            className="flex items-center gap-2 bg-white border border-border-strong px-4 py-2 rounded-full text-accent-deep"
          >
            <ChipIcon icon={chip.icon} />
            <span className="text-body-sm font-semibold text-text-secondary">
              {chip.label}
            </span>
          </div>
        ))}
      </div>

      <div className="pt-8">
        <a
          href="/keamanan-privasi"
          className="inline-flex items-center gap-2 font-bold text-accent-deep hover:text-accent-deep-hover transition-colors"
        >
          Read our safety &amp; privacy standards
          <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
