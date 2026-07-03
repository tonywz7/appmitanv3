/**
 * Stitch-canonical site footer.
 * Matches mitan-source/src/components/layout/footer.html exactly:
 * bg-surface-container-lowest, 2-col grid (brand + link columns),
 * full-width copyright divider.
 */
export function Footer() {
  return (
    <footer className="border-t border-outline-variant/30 bg-surface-container-lowest py-stack-lg">
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-gutter px-margin-desktop md:grid-cols-2">
        {/* Brand column */}
        <div className="space-y-6">
          <div className="font-headline-sm text-headline-sm font-bold text-primary">MITAN</div>
          <p className="max-w-xs font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
            Platform matrimony terpercaya untuk hubungan yang bermartabat dan
            langgeng. Kami hadir untuk membantu Anda menulis kisah cinta yang
            abadi.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-low text-primary transition-all hover:bg-primary hover:text-white"
            >
              <span className="material-symbols-outlined text-lg">public</span>
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-low text-primary transition-all hover:bg-primary hover:text-white"
            >
              <span className="material-symbols-outlined text-lg">share</span>
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-xs font-label-md uppercase tracking-wider text-on-surface">
              Perusahaan
            </h4>
            <nav className="flex flex-col space-y-3">
              <a
                href="#"
                className="font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-primary"
              >
                About Us
              </a>
              <a
                href="#"
                className="font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-primary"
              >
                Success Stories
              </a>
              <a
                href="/hubungi-kami"
                className="font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-primary"
              >
                Contact
              </a>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-label-md uppercase tracking-wider text-on-surface">
              Legalitas
            </h4>
            <nav className="flex flex-col space-y-3">
              <a
                href="/keamanan-privasi"
                className="font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-primary"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-primary"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-primary"
              >
                Safety Center
              </a>
            </nav>
          </div>
        </div>

        {/* Copyright divider */}
        <div className="col-span-full mt-12 border-t border-outline-variant/30 pt-12 text-center">
          <p className="font-body-sm text-body-sm text-on-surface-variant opacity-70">
            © {new Date().getFullYear()} MITAN Matrimony. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
