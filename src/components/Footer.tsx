const linkColumns = [
  {
    title: 'Information',
    links: ['Terms of Use', 'Privacy Policy', 'Safety Tips'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Contact', 'Careers'],
  },
  {
    title: 'Follow Us',
    links: ['Instagram', 'TikTok'],
  },
];

const regions = ['SINGAPORE', 'MALAYSIA', 'INDONESIA', 'UK', 'CANADA'];

export default function Footer() {
  return (
    <footer className="px-6 md:px-10 pt-10 bg-surface-secondary/60 border-t border-border">
      <p className="text-center text-label-sm font-bold text-accent tracking-[0.2em] uppercase mb-8">
        Uniting Communities Across
      </p>
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-60 grayscale mb-16">
        {regions.map((region) => (
          <span key={region} className="text-xl font-extrabold tracking-tighter text-text-primary">
            {region}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-t border-border pt-10">
        {linkColumns.map((col) => (
          <div key={col.title}>
            <h5 className="text-sm font-bold text-text-primary mb-3">{col.title}</h5>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a className="text-sm text-text-muted hover:text-accent transition-colors" href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h5 className="text-sm font-bold text-text-primary mb-3">Get the App</h5>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs font-semibold w-fit">
              <span>App Store</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs font-semibold w-fit">
              <span>Google Play</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-text-muted pb-8 border-t border-border pt-6">
        © 2026 Mitan. All rights reserved.
      </div>
    </footer>
  );
}
