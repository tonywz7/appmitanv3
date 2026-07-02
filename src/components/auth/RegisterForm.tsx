"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { TextField } from "@/components/ui/TextField";
import { PasswordField } from "@/components/ui/PasswordField";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

type Strength = "empty" | "weak" | "medium" | "strong";

function getStrength(value: string): Strength {
  if (value.length === 0) return "empty";
  if (value.length < 5) return "weak";
  if (value.length < 10) return "medium";
  return "strong";
}

const strengthStyles: Record<Strength, string> = {
  empty: "w-0",
  weak: "w-1/3 bg-error",
  medium: "w-2/3 bg-warning-amber",
  strong: "w-full bg-primary",
};

export function RegisterForm() {
  const [strength, setStrength] = useState<Strength>("empty");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: call authService.register() from src/services/auth.service.ts
  }

  return (
    <div className="flex w-full max-w-[520px] flex-col gap-6 rounded-2xl border border-outline-variant/30 bg-white p-card-p ambient-shadow">
      <div className="flex flex-col gap-4">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-outline-variant bg-surface-container-low px-3 py-1">
          <Icon name="lock" className="text-[16px]" />
          <span className="font-label-sm text-label-sm uppercase text-secondary">
            Secure Authentication
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-headline-md text-headline-md font-bold tracking-tight text-primary">
            Create your account
          </h2>
          <p className="font-jakarta text-body-md text-secondary">
            Join the intentional community seeking lifelong commitment.
          </p>
        </div>
      </div>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <TextField id="fullName" name="fullName" label="Full Name" placeholder="e.g., Sarah Ahmad" required />
        <TextField id="email" name="email" label="Email Address" type="email" placeholder="name@example.com" required />

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="font-jakarta text-label-md font-semibold text-on-surface">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type="password"
              onChange={(e) => setStrength(getStrength(e.target.value))}
              className="w-full rounded-lg border border-outline-variant px-4 py-3 pr-12 font-jakarta text-body-md outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
              required
            />
          </div>
          <div className="mt-1 flex flex-col gap-1.5">
            <div className="h-1 w-full overflow-hidden rounded-full bg-surface-container">
              <div
                className={cn("h-full rounded-full transition-all duration-500", strengthStyles[strength])}
              />
            </div>
            <span className="font-label-sm text-label-sm text-secondary/60">
              Use 8+ characters with a mix of letters and symbols
            </span>
          </div>
        </div>

        <TextField
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          required
        />

        <div className="flex items-start gap-3 py-2">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            className="mt-1 h-5 w-5 rounded border-outline-variant text-primary focus:ring-primary"
            required
          />
          <label htmlFor="terms" className="font-jakarta text-label-md text-secondary">
            I agree to the{" "}
            <Link href="/legal/terms" className="font-semibold text-primary hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/legal/privacy" className="font-semibold text-primary hover:underline">
              Privacy Policy
            </Link>
            .
          </label>
        </div>

        <Button type="submit" fullWidth>
          Create Account
        </Button>
      </form>

      <div className="flex flex-col items-center gap-6 pt-4">
        <p className="font-jakarta text-body-md text-secondary">
          Already have an account?{" "}
          <Link href="/login" className="font-bold text-primary hover:underline">
            Sign In
          </Link>
        </p>
        <div className="h-[1px] w-full bg-outline-variant/30" />
        <div className="flex items-center gap-2 text-secondary/60">
          <Icon name="verified_user" filled className="text-[18px]" />
          <p className="font-jakarta text-label-sm">
            Your data is handled with the utmost privacy and respect.
          </p>
        </div>
      </div>
    </div>
  );
}
