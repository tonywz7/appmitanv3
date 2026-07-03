import type { Metadata } from "next";
import Link from "next/link";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Masuk | MITAN",
};

/**
 * Login page — pixel-perfect port of mitan-source/src/app/login/index.html
 * Centered single-column layout with ambient background blobs.
 */
export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface font-body-md">
      {/* Top right language switcher */}
      <nav className="fixed right-0 top-0 z-10 p-8">
        <button className="flex items-center gap-2 rounded-full bg-surface-container-low px-4 py-2 font-label-md text-label-md text-on-surface-variant transition-colors duration-150 hover:bg-surface-container-high active:scale-95">
          <span className="material-symbols-outlined text-[20px]">language</span>
          <span>ID / EN</span>
        </button>
      </nav>

      {/* Main content */}
      <main className="relative flex flex-grow items-center justify-center overflow-hidden px-margin-mobile py-20 md:px-margin-desktop">
        {/* Ambient blobs */}
        <div className="absolute left-[-10%] top-[-10%] h-[40%] w-[40%] rounded-full bg-primary opacity-[0.03] blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-secondary-container opacity-[0.05] blur-[100px]" />

        <div className="relative z-10 w-full max-w-[480px]">
          {/* MITAN identity */}
          <div className="mb-10 text-center">
            <div className="mb-8 inline-flex items-center justify-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span
                  className="material-symbols-outlined text-white"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  favorite
                </span>
              </div>
              <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-primary">
                MITAN
              </span>
            </div>
            <h1 className="font-headline-md text-headline-md text-on-surface mb-3">
              Selamat Datang Kembali
            </h1>
            <p className="mx-auto max-w-[320px] font-body-md text-body-md text-on-surface-variant">
              Lanjutkan ikhtiar Anda untuk menemukan pasangan hidup yang sejati.
            </p>
          </div>

          {/* Form card */}
          <LoginForm />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-outline-variant/20 bg-surface-container-lowest py-8 px-margin-mobile md:px-margin-desktop">
        <div className="mx-auto flex max-w-container-max flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            © {new Date().getFullYear()} MITAN. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/keamanan-privasi"
              className="font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-primary"
            >
              Kebijakan Privasi
            </Link>
            <Link
              href="#"
              className="font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-primary"
            >
              Syarat &amp; Ketentuan
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
