const stats = [
  { value: '12,000+', label: 'Verified Profiles' },
  { value: '2,400+', label: 'Families This Month' },
  { value: '240+', label: 'Successful Marriages' },
  { value: '5', label: 'Countries Served' },
];

export default function TrustStats() {
  return (
    <section className="px-6 md:px-10 py-16 md:py-20 bg-surface">
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-10 max-w-3xl mx-auto">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center w-[45%] md:w-auto">
            <div className="w-12 h-12 bg-surface-accent-tint rounded-full flex items-center justify-center mb-3 text-accent">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" />
              </svg>
            </div>
            <span className="font-display font-extrabold text-3xl text-text-primary">
              {stat.value}
            </span>
            <span className="text-body-sm text-text-muted mt-1">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
