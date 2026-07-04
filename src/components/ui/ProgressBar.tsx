import { cn } from "@/lib/utils";

interface ProgressBarProps {
  step: number;
  totalSteps: number;
  /** Override the displayed and fill percentage when Stitch exports a hardcoded value */
  percent?: number;
  showLabel?: boolean;
  /**
   * Extra Tailwind classes applied to the percent label span.
   * Stitch varies this across screens — e.g. religious-profile uses
   * "text-action-blue font-bold" while other screens use "text-on-surface-variant".
   */
  percentLabelClass?: string;
  /**
   * When true, the step/percent label row is hidden on mobile but the bar itself
   * remains visible. Matches the religious-profile Stitch pattern where
   * "hidden md:flex" is applied only to the label row, not the bar.
   */
  labelDesktopOnly?: boolean;
  className?: string;
}

/**
 * Onboarding step progress indicator ("Step X of N" + fill bar), matching
 * the pattern repeated across every onboarding screen.
 */
export function ProgressBar({
  step,
  totalSteps,
  percent: percentOverride,
  showLabel = true,
  percentLabelClass,
  labelDesktopOnly = false,
  className,
}: ProgressBarProps) {
  const percent = percentOverride ?? Math.round((step / totalSteps) * 100);

  return (
    <div className={cn("w-full", className)}>
      {showLabel && (
        <div
          className={cn(
            "mb-2 flex items-center justify-between",
            labelDesktopOnly && "hidden md:flex"
          )}
        >
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
            Step {step} of {totalSteps}
          </span>
          <span
            className={cn(
              "font-label-sm text-label-sm",
              percentLabelClass ?? "text-on-surface-variant"
            )}
          >
            {percent}%
          </span>
        </div>
      )}
      <div className="h-1 w-full overflow-hidden rounded-full bg-surface-container-high">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
