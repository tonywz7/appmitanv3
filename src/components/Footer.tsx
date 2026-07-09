import Link from 'next/link';

const linkColumns = [
  {
    title: 'Information',
    links: [
      { label: 'Safety & Privacy', href: '/keamanan-privasi' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Blog & Insights', href: '/blog-insights' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Contact Us', href: '/hubungi-kami' },
      { label: 'Log In', href: '/login' },
      { label: 'Start Your Journey', href: '/onboarding' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'How it Works', href: '/#how-it-works' },
      { label: 'Success Stories', href: '/#stories' },
    ],
  },
];

const regions = ['SINGAPORE', 'MALAYSIA', 'INDONESIA', 'UK', 'CANADA'];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 md:px-10 pt-10 bg-surface-secondary/60 border-t border-border">
      <p className="text-center text-label-sm font-bold text-accent-deep tracking-[0.2em] uppercase mb-8">
        Uniting Communities Across
      </p>
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-60 mb-16">
        {regions.map((region) => (
          <span key={region} className="text-xl font-extrabold tracking-tighter text-text-primary">
            {region}
          </span>
        ))}
      </div>

      <nav
        aria-label="Footer"
        className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-t border-border pt-10"
      >
        {linkColumns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-bold text-text-primary mb-3">{col.title}</h3>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    className="text-sm text-text-muted hover:text-accent-deep transition-colors"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-sm font-bold text-text-primary mb-3">Get the App</h3>
          <p className="text-sm text-text-muted mb-3 max-w-[22ch]">
            Mobile apps are coming soon. Join on the web today.
          </p>
          <Link
            href="/onboarding"
            className="inline-flex items-center gap-2 bg-accent-deep hover:bg-accent-deep-hover text-white px-4 py-2.5 rounded-full text-xs font-bold transition-colors"
          >
            Join on the web
          </Link>
        </div>
      </nav>

      <div className="text-center text-xs text-text-muted pb-8 border-t border-border pt-6">
        © {year} Mitan. All rights reserved.
      </div>
    </footer>
  );
}
