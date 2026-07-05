const stories = [
  {
    quote:
      'We were introduced through our families from the very first message. It never felt like an app — it felt like a proper introduction, the way our parents would have wanted.',
    name: 'A. & S.',
    detail: 'Married after a 5-month guided introduction',
  },
  {
    quote:
      'What convinced my father was the Wali System. He could see who I was speaking with and be part of the process, without me giving up my own comfort or privacy.',
    name: 'N. & F.',
    detail: 'Families connected across two countries',
  },
];

export default function Testimonials() {
  return (
    <section
      id="stories"
      className="px-6 md:px-10 py-16 md:py-24 bg-surface-secondary border-t border-border scroll-mt-24"
    >
      <div className="max-w-xl mb-12 space-y-4">
        <p className="text-label-sm font-bold text-accent-deep tracking-[0.2em] uppercase">
          Success Stories
        </p>
        <h2 className="font-display font-bold text-headline-lg text-text-primary text-balance">
          Marriages that began with intention.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {stories.map((story) => (
          <figure
            key={story.name}
            className="glass-card rounded-3xl p-8 space-y-6"
          >
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-accent"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z" />
            </svg>
            <blockquote className="text-text-secondary text-body-lg leading-relaxed text-pretty">
              {story.quote}
            </blockquote>
            <figcaption>
              <p className="font-display font-bold text-text-primary">{story.name}</p>
              <p className="text-body-sm text-text-muted">{story.detail}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="text-body-sm text-text-muted pt-8">
        Stories are illustrative and anonymized to protect member privacy.
      </p>
    </section>
  );
}
