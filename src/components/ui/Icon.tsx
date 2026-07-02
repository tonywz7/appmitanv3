import { cn } from "@/lib/utils";

interface IconProps {
  name: string;
  className?: string;
  /** Matches the `font-variation-settings: 'FILL' 0|1` pattern used across screens. */
  filled?: boolean;
  weight?: number;
}

/**
 * Thin wrapper around the Material Symbols Outlined icon font, preserving
 * the exact rendering approach used in the original Stitch export
 * (`<span class="material-symbols-outlined">icon_name</span>`).
 */
export function Icon({ name, className, filled = false, weight = 300 }: IconProps) {
  return (
    <span
      className={cn("material-symbols-outlined", className)}
      style={{ fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' ${weight}` }}
    >
      {name}
    </span>
  );
}
