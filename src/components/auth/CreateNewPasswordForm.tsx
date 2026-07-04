"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { PasswordField } from "@/components/ui/PasswordField";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

const REQUIREMENTS = [
  { key: "length", label: "8+ characters", test: (v: string) => v.length >= 8 },
  { key: "upper", label: "Uppercase", test: (v: string) => /[A-Z]/.test(v) },
  { key: "lower", label: "Lowercase", test: (v: string) => /[a-z]/.test(v) },
  { key: "number", label: "Number", test: (v: string) => /[0-9]/.test(v) },
  { key: "special", label: "Special char", test: (v: string) => /[^A-Za-z0-9]/.test(v) },
] as const;

export function CreateNewPasswordForm() {
  const [password, setPassword] = useState("");

  const metRequirements = useMemo(
    () => new Set(REQUIREMENTS.filter((r) => r.test(password)).map((r) => r.key)),
    [password]
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: call authService.setNewPassword(), then route to /password-updated
  }

  return (
    <div className="w-full max-w-[480px] fade-in-up" data-visible="true">
      <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-8 shadow-[0_4px_20px_rgba(26,54,54,0.04)] md:p-12">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-surface-container-low px-3 py-1">
          <Icon name="lock" className="text-[16px] text-success-green" />
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
            Secure Authentication
          </span>
        </div>

        <header className="mb-10">
          <h2 className="mb-3 font-headline-lg text-headline-lg font-bold tracking-tight text-primary">
            Create new password
          </h2>
          <p className="font-body-md text-body-md leading-relaxed text-secondary">
            Choose a strong, unique password to secure your account and continue your journey.
          </p>
        </header>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <PasswordField
            id="new-password"
            name="newPassword"
            label="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <PasswordField id="confirm-password" name="confirmPassword" label="Confirm New Password" required />

          <div className="space-y-3 rounded-xl bg-surface-container-low/50 p-5">
            <p className="mb-2 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
              Password Requirements
            </p>
            <ul className="grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2">
              {REQUIREMENTS.map((req) => {
                const met = metRequirements.has(req.key);
                return (
                  <li
                    key={req.key}
                    className={cn(
                      "flex items-center gap-2 font-body-md text-[13px] transition-colors",
                      met ? "text-success-green" : "text-outline"
                    )}
                  >
                    <Icon name="check_circle" filled={met} className="text-[18px]" />
                    {req.label}
                  </li>
                );
              })}
            </ul>
          </div>

          <Button type="submit" variant="success" fullWidth className="h-14">
            Update Password
          </Button>
        </form>

        <div className="mt-8 text-center">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 font-label-md text-label-md text-secondary transition-colors duration-200 hover:text-primary"
          >
            <Icon name="arrow_back" className="text-[18px]" />
            Back to Sign In
          </Link>
        </div>
      </div>

      <div className="mt-8 flex items-start gap-3 px-4">
        <Icon name="verified_user" className="text-[20px] text-outline-variant" />
        <p className="font-body-md text-body-md leading-snug text-secondary/70">
          Your security is our priority. Passwords are encrypted and never shared.
        </p>
      </div>
    </div>
  );
}
