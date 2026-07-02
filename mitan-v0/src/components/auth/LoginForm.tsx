"use client";

import Link from "next/link";
import { FormEvent } from "react";
import { TextField } from "@/components/ui/TextField";
import { PasswordField } from "@/components/ui/PasswordField";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function LoginForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: call authService.login() from src/services/auth.service.ts
  }

  return (
    <div
      className="w-full max-w-md rounded-mitan-card border border-outline-variant bg-surface-container-lowest p-10 ambient-shadow fade-in-up md:p-12"
      data-visible="true"
    >
      <div className="mb-10 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1 font-label-sm text-label-sm text-primary">
          <Icon name="lock" className="text-[16px]" />
          Secure Authentication
        </div>
        <h2 className="font-headline-lg text-headline-lg text-on-surface">Welcome back</h2>
        <p className="mt-2 font-jakarta text-body-md text-secondary">
          Enter your credentials to continue your journey.
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <TextField id="email" name="email" label="Email Address" type="email" placeholder="name@example.com" required />
        <PasswordField
          id="password"
          name="password"
          label="Password"
          forgotPasswordHref="/forgot-password"
          required
        />

        <div className="flex items-center">
          <input
            id="remember"
            name="remember"
            type="checkbox"
            className="h-4 w-4 rounded border-outline-variant text-primary focus:ring-primary"
          />
          <label htmlFor="remember" className="ml-3 font-jakarta text-[14px] text-secondary">
            Remember me for 30 days
          </label>
        </div>

        <Button type="submit" fullWidth className="h-14">
          Sign In
        </Button>
      </form>

      <div className="mt-8 border-t border-outline-variant pt-8 text-center">
        <p className="font-jakarta text-body-md text-secondary">
          New to MITAN?{" "}
          <Link href="/register" className="ml-1 font-bold text-primary hover:underline">
            Create an account
          </Link>
        </p>
      </div>

      <div className="mt-10 flex items-center justify-center gap-2 font-jakarta text-[12px] text-outline">
        <Icon name="info" className="text-[14px]" />
        <p>Your data is handled with the utmost privacy and respect.</p>
      </div>
    </div>
  );
}
