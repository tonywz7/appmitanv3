import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  optional?: boolean;
  hint?: string;
  icon?: React.ReactNode;
}

/**
 * Shared text input matching the bordered, rounded-lg field style used
 * across auth and onboarding forms.
 */
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, optional, hint, icon, id, className, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor={id} className="block font-label-md text-label-md text-on-surface">
            {label}
          </label>
          {optional && (
            <span className="font-label-sm text-label-sm text-on-surface-variant">Optional</span>
          )}
        </div>
        <div className="relative">
          {icon && (
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
              {icon}
            </span>
          )}
          <input
            ref={ref}
            id={id}
            className={cn(
              "block h-12 w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-4 text-body-md text-on-surface outline-none transition-all placeholder:text-outline/60 focus:border-primary focus:ring-1 focus:ring-primary",
              icon && "pl-12",
              className
            )}
            {...props}
          />
        </div>
        {hint && <p className="font-label-sm text-label-sm text-on-surface-variant/70">{hint}</p>}
      </div>
    );
  }
);
TextField.displayName = "TextField";
