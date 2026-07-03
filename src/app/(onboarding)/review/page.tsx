'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Icon } from '@/components/ui/Icon';

const steps = [
  { label: 'Personal', completed: true },
  { label: 'Religious', completed: true },
  { label: 'Preferences', completed: true },
  { label: 'Lifestyle', completed: true },
  { label: 'Photos', completed: true },
  { label: 'Review', completed: false },
];

export default function ReviewPage() {
  const router = useRouter();

  const handleComplete = () => {
    router.push('/discovery');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-surface">
      <div className="mx-auto max-w-2xl px-4 py-8 md:px-6">
        {/* Progress */}
        <div className="mb-8">
          <ProgressBar steps={steps} currentStep={5} />
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* Completion summary */}
          <Card variant="elevated" className="text-center space-y-4">
            <Icon name="check-circle" className="mx-auto h-12 w-12 text-success-green" />
            <h1 className="text-headline-lg font-semibold text-on-surface md:text-headline-xl">
              Profile Complete!
            </h1>
            <p className="text-body-md text-on-surface-variant">
              Your profile is ready. Review the information below before you start discovering matches.
            </p>
          </Card>

          {/* Review sections */}
          <Card>
            <h2 className="mb-4 text-headline-md font-semibold text-on-surface">
              Personal Information
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <p className="text-label-sm text-on-surface-variant">Name</p>
                <p className="text-body-md text-on-surface">Fatima Ahmed Hassan</p>
              </div>
              <div className="flex justify-between">
                <p className="text-label-sm text-on-surface-variant">Age</p>
                <p className="text-body-md text-on-surface">26</p>
              </div>
              <div className="flex justify-between">
                <p className="text-label-sm text-on-surface-variant">Location</p>
                <p className="text-body-md text-on-surface">Jakarta, Indonesia</p>
              </div>
              <div className="flex justify-between">
                <p className="text-label-sm text-on-surface-variant">Photos</p>
                <Badge label="6 uploaded" variant="success" size="sm" />
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="mb-4 text-headline-md font-semibold text-on-surface">
              Religious Profile
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <p className="text-label-sm text-on-surface-variant">Religion Level</p>
                <Badge label="Practicing" variant="primary" size="sm" />
              </div>
              <div className="flex justify-between">
                <p className="text-label-sm text-on-surface-variant">Prayer Frequency</p>
                <p className="text-body-md text-on-surface">5 times daily</p>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="mb-4 text-headline-md font-semibold text-on-surface">
              Preferences
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <p className="text-label-sm text-on-surface-variant">Age Range</p>
                <p className="text-body-md text-on-surface">25 - 35</p>
              </div>
              <div className="flex justify-between">
                <p className="text-label-sm text-on-surface-variant">Looking For</p>
                <Badge label="Marriage" variant="primary" size="sm" />
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="mb-4 text-headline-md font-semibold text-on-surface">
              Lifestyle
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <p className="text-label-sm text-on-surface-variant">Education</p>
                <p className="text-body-md text-on-surface">University</p>
              </div>
              <div className="flex justify-between">
                <p className="text-label-sm text-on-surface-variant">Profession</p>
                <p className="text-body-md text-on-surface">Teacher</p>
              </div>
            </div>
          </Card>

          {/* Important note */}
          <Card className="border-warning-amber bg-amber-50">
            <div className="flex gap-3">
              <Icon name="info" className="h-6 w-6 text-warning-amber flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-warning-amber">Before you continue</h3>
                <p className="mt-1 text-body-md text-warning-amber/80">
                  Your profile will be visible to other members. All communication will go through MITAN to ensure your privacy and safety.
                </p>
              </div>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex gap-3">
            <Button variant="secondary" className="flex-1" onClick={handleBack}>
              <Icon name="arrow-back" className="mr-2 h-5 w-5" />
              Back
            </Button>
            <Button variant="primary" className="flex-1" onClick={handleComplete}>
              Start Discovering
              <Icon name="arrow-forward" className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
