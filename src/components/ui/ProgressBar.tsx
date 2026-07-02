import { cn } from "@/lib/utils";

interface ProgressBarProps {
  step: number;
  totalSteps: number;
  showLabel?: boolean;
  className?: string;
}

/**
 * Onboarding step progress indicator ("Step X of N" + fill bar), matching
 * the pattern repeated across every onboarding screen.
 */
export function ProgressBar({ step, totalSteps, showLabel = true, className }: ProgressBarProps) {
  const percent = Math.round((step / totalSteps) * 100);

  return (
    <div className={cn("w-full", className)}>
      {showLabel && (
        <div className="mb-2 flex items-center justify-between">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
            Step {step} of {totalSteps}
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">{percent}%</span>
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
