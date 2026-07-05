"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

interface CheckEmailCardProps {
  email?: string;
}

export function CheckEmailCard({ email = "your email" }: CheckEmailCardProps) {
  return (
    <div className="flex w-full max-w-[520px] flex-col items-center lg:items-start">
      {/* Glass card — matches Stitch glass-card styling */}
      <div
        className="glass-card fade-in-up relative flex w-full flex-col items-center overflow-hidden rounded-[24px] p-card-p text-center lg:items-start lg:text-left"
        data-visible="true"
      >
        {/* Ambient glow radial — matches Stitch ambient-glow pseudo-element */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(5,150,105,0.05)_0%,transparent_70%)]" />

        {/* Email icon indicator */}
        <div className="relative z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-surface-container">
          <Icon name="mark_email_unread" className="text-[32px] text-primary" />
        </div>

        {/* Label badge */}
        <div className="relative z-10 mb-4 inline-block rounded-full bg-surface-container-high px-3 py-1">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
            Secure Verification
          </span>
        </div>

        <h1 className="relative z-10 mb-4 font-headline-lg text-headline-lg text-on-surface">
          Check Your Email
        </h1>

        <p className="relative z-10 mb-10 font-body-md text-body-md leading-relaxed text-on-surface-variant">
          We&apos;ve sent a verification link to{" "}
          <span className="font-semibold text-on-surface">{email}</span>. Please click the link in
          that email to confirm your identity and secure your account.
        </p>

        {/* CTA buttons */}
        <div className="relative z-10 w-full space-y-4">
          <Button fullWidth className="text-[18px]">
            Open Email App
          </Button>
          <Button variant="ghost" fullWidth>
            I&apos;ll verify later
          </Button>
        </div>

        {/* Resend section */}
        <div className="relative z-10 mt-12 w-full border-t border-outline-variant pt-8">
          <p className="text-[14px] text-on-secondary-container">
            Didn&apos;t receive the email?{" "}
            <button className="ml-1 font-bold text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-action-blue">
              Resend verification link
            </button>
          </p>
          <p className="mt-4 text-[12px] italic text-on-surface-variant">
            *Check your spam or junk folder if you don&apos;t see it in your inbox.
          </p>
        </div>
      </div>

      {/* Back to login — outside card, matching Stitch placement */}
      <Link
        href="/login"
        className="mt-8 flex items-center gap-2 self-center font-label-md text-label-md text-secondary transition-all hover:text-primary lg:self-start"
      >
        <Icon name="arrow_back" className="text-[20px]" />
        Back to login
      </Link>
    </div>
  );
}
