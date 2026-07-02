import { FOOTER_LINKS, SITE_NAME } from "@/lib/constants";

/**
 * Site-wide footer used on the landing page and every auth screen.
 */
export function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-max-width flex-col items-start justify-between gap-gutter border-t border-outline-variant bg-surface-container-low px-margin-desktop py-12 md:flex-row">
      <div className="flex max-w-sm flex-col gap-4">
        <span className="font-headline-md text-headline-md font-bold text-primary">{SITE_NAME}</span>
        <p className="font-body-sm text-body-sm text-on-secondary-container">
          © {new Date().getFullYear()} {SITE_NAME}. Built for the Ummah with integrity.
        </p>
      </div>
      <div className="flex flex-wrap gap-x-12 gap-y-6">
        {FOOTER_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-label-sm text-label-sm text-on-secondary-container underline decoration-2 transition-all hover:text-action-blue"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
