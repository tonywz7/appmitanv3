'use client';

import React, { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined';
  interactive?: boolean;
  onClick?: () => void;
}

export function Card({
  children,
  className = '',
  variant = 'default',
  interactive = false,
  onClick,
}: CardProps) {
  const baseClasses =
    'rounded-mitan-card bg-surface-container-lowest p-6 transition-all';

  const variantClasses = {
    default: 'border border-outline-variant',
    elevated: 'shadow-ambient',
    outlined: 'border-2 border-outline-variant',
  };

  const interactiveClasses = interactive
    ? 'cursor-pointer hover:shadow-ambient hover:border-primary'
    : '';

  return (
    <div
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${interactiveClasses} ${className}`}
    >
      {children}
    </div>
  );
}
