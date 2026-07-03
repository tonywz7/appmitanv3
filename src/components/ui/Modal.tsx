'use client';

import React, { ReactNode } from 'react';
import { Icon } from './Icon';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-2xl',
};

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  className = '',
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div
        className={`flex w-full flex-col rounded-2xl bg-surface shadow-lg ${sizeClasses[size]} ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between border-b border-outline-variant px-6 py-4">
            <h2 className="text-headline-md font-semibold text-on-surface">{title}</h2>
            <button
              onClick={onClose}
              className="text-on-surface-variant hover:text-on-surface"
            >
              <Icon name="close" className="h-6 w-6" />
            </button>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 px-6 py-4">{children}</div>

        {/* Footer */}
        {footer && (
          <div className="border-t border-outline-variant px-6 py-4">{footer}</div>
        )}
      </div>
    </div>
  );
}
