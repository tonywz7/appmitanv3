import { SelectHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "./Icon";

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  placeholder: string;
  hint?: string;
  dimmed?: boolean;
}

/**
 * Shared dropdown matching the appearance-none custom select pattern used
 * throughout onboarding forms.
 */
export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ label, placeholder, hint, dimmed, id, className, children, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor={id} className="block font-label-md text-label-md text-primary">
            {label}
          </label>
          {hint && <span className="font-label-sm text-[11px] italic text-secondary">{hint}</span>}
        </div>
        <div className={cn("relative", dimmed && "opacity-60 transition-opacity hover:opacity-100")}>
          <select
            ref={ref}
            id={id}
            defaultValue=""
            className={cn(
              "w-full appearance-none rounded-lg border border-outline-variant bg-surface-bright px-4 py-3 font-body-md text-body-md text-primary outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-primary",
              className
            )}
            {...props}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {children}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-secondary">
            <Icon name="expand_more" />
          </div>
        </div>
      </div>
    );
  }
);
SelectField.displayName = "SelectField";
