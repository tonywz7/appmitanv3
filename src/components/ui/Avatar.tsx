'use client';

import React from 'react';
import Image from 'next/image';

export interface AvatarProps {
  src?: string;
  alt: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  initials?: string;
  className?: string;
  online?: boolean;
}

const sizeClasses = {
  xs: 'h-6 w-6',
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-12 w-12',
  xl: 'h-16 w-16',
};

const textSizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
};

export function Avatar({
  src,
  alt,
  size = 'md',
  initials,
  className = '',
  online,
}: AvatarProps) {
  return (
    <div className={`relative inline-flex ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={64}
          height={64}
          className={`${sizeClasses[size]} rounded-full object-cover`}
        />
      ) : (
        <div
          className={`${sizeClasses[size]} flex items-center justify-center rounded-full bg-primary-container ${textSizes[size]} font-semibold text-primary`}
        >
          {initials || alt.charAt(0).toUpperCase()}
        </div>
      )}
      {online && (
        <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-surface-container-lowest bg-success-green" />
      )}
    </div>
  );
}
