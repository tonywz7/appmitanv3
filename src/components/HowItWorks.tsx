const steps = [
  {
    number: '01',
    title: 'Create your profile',
    description:
      'Share your values, background, and what you are looking for in a life partner. No public browsing — your profile stays private.',
  },
  {
    number: '02',
    title: 'Get verified',
    description:
      'Our care team manually reviews every profile for genuine intent before it goes live. Real people, checking for real intentions.',
  },
  {
    number: '03',
    title: 'Receive guided introductions',
    description:
      'Instead of endless swiping, you receive a small number of thoughtful, well-matched introductions based on shared values.',
  },
  {
    number: '04',
    title: 'Involve your family',
    description:
      'Through the Wali System, your family is part of the conversation from the first message — the way a serious introduction should be.',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="px-6 md:px-10 py-16 md:py-24 bg-surface border-t border-border scroll-mt-24"
    >
      <div className="max-w-xl mb-12 space-y-4">
        <p className="text-label-sm font-bold text-accent-deep tracking-[0.2em] uppercase">
          How it Works
        </p>
        <h2 className="font-display font-bold text-headline-lg text-text-primary text-balance">
          Four steps, at your family&apos;s pace.
        </h2>
        <p className="text-text-secondary leading-relaxed text-pretty">
          Mitan mirrors the traditional courtship process — structured,
          respectful, and never rushed.
        </p>
      </div>

      <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <li
            key={step.number}
            className="bg-surface-secondary border border-border-strong rounded-3xl p-6 space-y-3"
          >
            <span
              aria-hidden="true"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface-accent-tint text-accent-deep font-display font-extrabold text-sm"
            >
              {step.number}
            </span>
            <h3 className="font-display font-bold text-body-lg text-text-primary">
              {step.title}
            </h3>
            <p className="text-body-sm text-text-secondary leading-relaxed">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
