import Link from 'next/link';

export const faqs = [
  {
    question: 'Is Mitan compatible with Islamic principles?',
    answer:
      'Yes. Mitan is built around the traditional courtship process: verified intent, family involvement through the Wali System, and no casual browsing or swiping. Every design decision is made with Islamic marriage etiquette in mind.',
  },
  {
    question: 'How is my Wali involved?',
    answer:
      'Your Wali (guardian) is connected to your account and can be part of the conversation from the very first introduction. They see who you are speaking with and can guide the process — without reading your private details beyond what you choose to share.',
  },
  {
    question: 'Who can see my photos and profile?',
    answer:
      'Nobody, by default. There is no public browsing on Mitan. Your profile and photos are only visible to introductions you explicitly accept, and you control that visibility at every step.',
  },
  {
    question: 'How does verification work?',
    answer:
      'Every profile is manually reviewed by our care team before it goes live. We verify identity documents and check for genuine marriage intent — not just a completed form.',
  },
];

export default function FaqTeaser() {
  return (
    <section className="px-6 md:px-10 py-16 md:py-24 bg-surface border-t border-border">
      <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
        <div className="space-y-4">
          <p className="text-label-sm font-bold text-accent-deep tracking-[0.2em] uppercase">
            Common Questions
          </p>
          <h2 className="font-display font-bold text-headline-lg text-text-primary text-balance">
            Answers before you ask.
          </h2>
          <p className="text-text-secondary leading-relaxed text-pretty">
            The questions every serious member — and their family — asks
            us first.
          </p>
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 font-bold text-accent-deep hover:text-accent-deep-hover transition-colors pt-2"
          >
            View all questions
            <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group bg-surface-secondary border border-border-strong rounded-2xl px-6 py-4 open:pb-6"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-display font-bold text-text-primary py-1 [&::-webkit-details-marker]:hidden">
                {faq.question}
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-accent-deep shrink-0 transition-transform group-open:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </summary>
              <p className="text-body-sm text-text-secondary leading-relaxed pt-3">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
