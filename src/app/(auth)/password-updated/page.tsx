import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Password Updated | MITAN",
};

/**
 * NOTE: This screen's `code.html` was missing from the Stitch export (only
 * `screen.png` was included). It has been reconstructed to pixel-match the
 * provided screenshot using the same design system as the rest of the auth
 * flow, rather than skipped — flagged here per the "maintain all screens"
 * requirement.
 */
export default function PasswordUpdatedPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-md rounded-2xl border border-outline-variant bg-surface-container-lowest p-10 text-center ambient-shadow">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Icon name="check" filled className="text-[32px] text-primary" />
        </div>

        <h1 className="mb-4 font-headline-lg text-headline-lg text-on-surface">
          Password Updated Successfully
        </h1>

        <p className="mb-8 font-body-md text-body-md leading-relaxed text-secondary">
          Your MITAN account password has been securely updated. You can now sign in with your
          new credentials.
        </p>

        <Link
          href="/login"
          className="mb-4 flex w-full items-center justify-center rounded-button bg-on-surface px-btn-px py-btn-py font-label-md text-label-md text-white transition-all hover:opacity-90 active:scale-95"
        >
          Sign In
        </Link>

        <Link
          href="/"
          className="font-label-md text-label-md font-semibold text-on-surface underline decoration-2 hover:text-primary"
        >
          Return to Home
        </Link>

        <div className="mt-10 border-t border-outline-variant pt-6">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            If you did not make this change, please contact support immediately.
          </p>
          <Link href="/hubungi-kami" className="font-label-md text-label-md font-bold text-on-surface hover:text-primary">
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  );
}
