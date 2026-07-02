"use client";

import { cn } from "@/lib/utils";
import { Icon } from "./Icon";

interface ChipOption {
  label: string;
  value: string;
}

interface ChipRadioGroupProps {
  label: string;
  name: string;
  options: ChipOption[];
  defaultValue?: string;
  hint?: string;
  columns?: 2 | 3;
}

/**
 * Reproduces the "peer sr-only radio + styled chip label" pattern used for
 * Smoking / Alcohol / Halal Lifestyle selectors on the religious profile step.
 */
export function ChipRadioGroup({
  label,
  name,
  options,
  defaultValue,
  hint,
  columns = 3,
}: ChipRadioGroupProps) {
  return (
    <div className="space-y-4">
      <div className="mb-2 flex items-center justify-between">
        <label className="block font-label-md text-label-md text-primary">{label}</label>
        {hint && (
          <span className="flex items-center gap-1 rounded bg-surface-container-low px-2 py-1 font-label-sm text-[11px] text-secondary">
            <Icon name="lock" className="text-[14px]" />
            {hint}
          </span>
        )}
      </div>
      <div className={cn("grid gap-2", columns === 3 ? "grid-cols-3" : "grid-cols-2")}>
        {options.map((option) => (
          <label key={option.value} className="cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option.value}
              defaultChecked={defaultValue === option.value}
              className="peer sr-only"
            />
            <div className="rounded-lg border border-outline-variant px-2 py-3 text-center font-body-md text-body-md text-secondary transition-all hover:bg-surface-container-low peer-checked:border-primary peer-checked:bg-surface-container peer-checked:text-primary">
              {option.label}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
