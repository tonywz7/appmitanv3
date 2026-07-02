import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "success" | "outline" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-on-primary hover:bg-primary/90 shadow-ambient",
  success:
    "bg-success-green text-white hover:bg-success-green/90",
  outline:
    "bg-surface-container-lowest border border-outline-variant text-primary hover:bg-surface-container-low",
  ghost:
    "bg-transparent border border-outline-variant text-on-surface hover:bg-surface-container-low",
};

/**
 * Shared CTA button matching the visual language used throughout the MITAN
 * screens (rounded-button, label typography, active/hover scale micro-interaction).
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", fullWidth, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "flex items-center justify-center gap-2 rounded-button px-btn-px py-btn-py font-label-md text-label-md font-semibold transition-all active:scale-95",
          variantClasses[variant],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
