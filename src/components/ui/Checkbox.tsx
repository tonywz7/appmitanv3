'use client';

import React from 'react';
import { Icon } from './Icon';

export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

export function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  className = '',
}: CheckboxProps) {
  return (
    <label className={`flex items-center gap-2 cursor-pointer ${className}`}>
      <div
        className={`relative flex h-5 w-5 items-center justify-center rounded border-2 ${
          checked ? 'border-primary bg-primary' : 'border-outline'
        } ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
      >
        {checked && (
          <Icon name="check" className="h-4 w-4 text-on-primary" />
        )}
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          disabled={disabled}
          className="sr-only"
        />
      </div>
      {label && <span className="text-body-md text-on-surface">{label}</span>}
    </label>
  );
}
