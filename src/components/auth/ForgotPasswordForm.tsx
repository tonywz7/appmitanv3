"use client";

import Link from "next/link";
import { FormEvent } from "react";
import { TextField } from "@/components/ui/TextField";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function ForgotPasswordForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: call authService.requestPasswordReset() then route to /check-email
  }

  return (
    <div className="flex w-full flex-col items-center">
      <div className="auth-card-shadow w-full max-w-[480px] rounded-2xl border border-surface-container bg-white p-8 lg:p-12">
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-surface-container px-3 py-1.5">
            <Icon name="lock" filled className="text-[18px] text-success-green" />
            <span className="font-jakarta text-[12px] font-semibold uppercase tracking-wider text-on-surface-variant">
              Secure Authentication
            </span>
          </div>
        </div>

        <div className="text-center">
          <h3 className="font-manrope text-[32px] font-bold leading-tight tracking-[-0.025em] text-on-surface">
            Reset your password
          </h3>
          <p className="mt-4 font-jakarta text-base leading-relaxed text-secondary">
            Enter your email address and we will send you a secure link to reset your password.
          </p>
        </div>

        <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
          <TextField
            id="email"
            name="email"
            label="Email Address"
            type="email"
            placeholder="e.g. name@email.com"
            required
            className="h-14"
          />
          <Button type="submit" variant="success" fullWidth className="h-14">
            Send Reset Link
            <Icon name="arrow_forward" className="text-[20px]" />
          </Button>
        </form>

        <div className="mt-8 text-center">
          <Link
            href="/login"
            className="group inline-flex items-center gap-2 font-manrope text-sm font-semibold text-secondary transition-colors hover:text-success-green"
          >
            <Icon name="arrow_back" className="text-[18px] transition-transform group-hover:-translate-x-1" />
            Back to Sign In
          </Link>
        </div>
      </div>

      <div className="mt-12 flex max-w-xs items-center justify-center gap-2 text-center">
        <Icon name="info" className="text-[18px] text-outline" />
        <p className="font-jakarta text-[13px] leading-snug text-outline">
          Your data is handled with the utmost privacy and respect.
        </p>
      </div>
    </div>
  );
}
