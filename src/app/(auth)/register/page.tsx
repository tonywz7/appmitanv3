import type { Metadata } from "next";
import Link from "next/link";
import { RegisterForm } from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: "Buat Akun | MITAN",
};

/**
 * Register page — pixel-perfect port of mitan-source/src/app/register/index.html
 * Centered card with subtle ambient background blobs.
 */
export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface font-body-md">
      {/* Subtle background blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden opacity-30">
        <div className="absolute right-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-primary-container/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-secondary-container/10 blur-[120px]" />
      </div>

      {/* Main content */}
      <main className="relative z-10 flex flex-grow items-center justify-center px-margin-mobile py-12 md:px-margin-desktop">
        <div className="w-full max-w-[480px]">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="flex items-center gap-2">
              <span className="font-headline-sm text-headline-sm font-bold text-primary">
                MITAN
              </span>
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                favorite
              </span>
            </div>
          </div>

          {/* Form card */}
          <RegisterForm />

          {/* Trust badges */}
          <div className="mt-8 flex justify-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-outline"
                style={{ fontSize: "20px" }}
              >
                verified_user
              </span>
              <span className="text-[12px] font-bold uppercase tracking-wider text-outline font-label-md">
                Secure SSL
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-outline"
                style={{ fontSize: "20px" }}
              >
                privacy_tip
              </span>
              <span className="text-[12px] font-bold uppercase tracking-wider text-outline font-label-md">
                Private Data
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-outline-variant bg-surface-container-lowest">
        <div className="mx-auto flex w-full max-w-container-max flex-col items-center justify-between gap-4 px-margin-mobile py-8 md:flex-row md:px-margin-desktop">
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            © {new Date().getFullYear()} MITAN. All rights reserved.
          </span>
          <div className="flex gap-6">
            <Link
              href="/keamanan-privasi"
              className="font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-primary"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-primary"
            >
              Help Center
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
