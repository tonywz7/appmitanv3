'use client';

import React from 'react';
import { Icon } from './Icon';

export interface StepperStep {
  label: string;
  completed?: boolean;
  active?: boolean;
}

export interface StepperProps {
  steps: StepperStep[];
  currentStep?: number;
  variant?: 'horizontal' | 'vertical';
  className?: string;
}

export function Stepper({
  steps,
  currentStep = 0,
  variant = 'horizontal',
  className = '',
}: StepperProps) {
  const isHorizontal = variant === 'horizontal';

  return (
    <div
      className={`${isHorizontal ? 'flex items-center gap-2' : 'flex flex-col gap-4'} ${className}`}
    >
      {steps.map((step, index) => {
        const isCompleted = step.completed || index < currentStep;
        const isActive = step.active || index === currentStep;

        return (
          <div
            key={index}
            className={`flex ${isHorizontal ? 'flex-1 items-center' : 'items-start'}`}
          >
            {/* Step circle */}
            <div
              className={`relative flex h-10 w-10 items-center justify-center rounded-full font-semibold ${
                isCompleted
                  ? 'bg-primary text-on-primary'
                  : isActive
                    ? 'border-2 border-primary text-primary'
                    : 'border-2 border-outline-variant text-on-surface-variant'
              }`}
            >
              {isCompleted ? (
                <Icon name="check" className="h-6 w-6" />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>

            {/* Connector line */}
            {index < steps.length - 1 && (
              <div
                className={`${
                  isHorizontal ? 'flex-1 h-1 mx-2' : 'h-8 w-1 mx-4'
                } ${isCompleted ? 'bg-primary' : 'bg-outline-variant'}`}
              />
            )}
          </div>
        );
      })}

      {/* Step labels */}
      {isHorizontal && (
        <div className="absolute bottom-0 mt-12 flex w-full gap-2">
          {steps.map((step, index) => (
            <div key={index} className="flex-1">
              <p className="text-center text-label-sm text-on-surface">{step.label}</p>
            </div>
          ))}
        </div>
      )}

      {/* Vertical step labels */}
      {!isHorizontal && (
        <div className="ml-6 space-y-8">
          {steps.map((step, index) => (
            <p key={index} className="text-label-md text-on-surface">
              {step.label}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
