"use client";

import { InputHTMLAttributes, forwardRef, useId, useState } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "./Icon";

interface PasswordFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  forgotPasswordHref?: string;
}

/**
 * Password input with a show/hide toggle — reproduces the togglePassword()
 * behaviour from the source screens as a proper React client component
 * instead of inline <script> DOM manipulation.
 */
export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  ({ label, forgotPasswordHref, id, className, ...props }, ref) => {
    const [visible, setVisible] = useState(false);
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor={inputId} className="block font-label-md text-label-md text-on-surface">
            {label}
          </label>
          {forgotPasswordHref && (
            <a
              href={forgotPasswordHref}
              className="font-jakarta text-[13px] font-semibold text-primary hover:underline"
            >
              Forgot Password?
            </a>
          )}
        </div>
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            type={visible ? "text" : "password"}
            placeholder="••••••••"
            className={cn(
              "block h-14 w-full rounded-lg border border-outline-variant bg-surface px-4 pr-12 text-body-md text-on-surface outline-none transition-all duration-200 focus:border-success-green focus:ring-1 focus:ring-success-green",
              className
            )}
            {...props}
          />
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-outline transition-colors hover:text-on-surface"
            aria-label={visible ? "Hide password" : "Show password"}
          >
            <Icon name={visible ? "visibility_off" : "visibility"} className="text-[20px]" />
          </button>
        </div>
      </div>
    );
  }
);
PasswordField.displayName = "PasswordField";
