'use client';

import React from 'react';

export type BadgeVariant =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'error'
  | 'pending'
  | 'approved'
  | 'rejected';

export interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
  className?: string;
}

const variantColors: Record<BadgeVariant, { bg: string; text: string }> = {
  default: { bg: 'bg-surface-container', text: 'text-on-surface' },
  primary: { bg: 'bg-primary-container', text: 'text-primary' },
  success: { bg: 'bg-green-100', text: 'text-success-green' },
  warning: { bg: 'bg-amber-100', text: 'text-warning-amber' },
  error: { bg: 'bg-red-100', text: 'text-error-red' },
  pending: { bg: 'bg-amber-100', text: 'text-warning-amber' },
  approved: { bg: 'bg-green-100', text: 'text-success-green' },
  rejected: { bg: 'bg-red-100', text: 'text-error-red' },
};

const sizeClasses = {
  sm: 'px-2 py-1 text-label-sm',
  md: 'px-3 py-1.5 text-label-md',
};

export function Badge({
  label,
  variant = 'default',
  size = 'md',
  className = '',
}: BadgeProps) {
  const { bg, text } = variantColors[variant];
  return (
    <span
      className={`inline-block rounded-full font-semibold ${sizeClasses[size]} ${bg} ${text} ${className}`}
    >
      {label}
    </span>
  );
}
