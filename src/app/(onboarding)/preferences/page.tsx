'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ChipRadioGroup } from '@/components/ui/ChipRadioGroup';
import { Checkbox } from '@/components/ui/Checkbox';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Icon } from '@/components/ui/Icon';

const steps = [
  { label: 'Personal', completed: true },
  { label: 'Religious', completed: true },
  { label: 'Preferences', completed: false },
  { label: 'Lifestyle', completed: false },
  { label: 'Photos', completed: false },
  { label: 'Review', completed: false },
];

export default function PreferencesPage() {
  const router = useRouter();
  const [ageRange, setAgeRange] = useState('25-35');
  const [religionLevel, setReligionLevel] = useState('practicing');
  const [lookingFor, setLookingFor] = useState(['marriage']);

  const handleNext = () => {
    router.push('/(onboarding)/lifestyle');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-surface">
      <div className="mx-auto max-w-2xl px-4 py-8 md:px-6">
        {/* Progress */}
        <div className="mb-8">
          <ProgressBar step={3} totalSteps={6} />
        </div>

        {/* Content */}
        <Card className="space-y-6">
          <div>
            <h1 className="text-headline-lg font-semibold text-on-surface md:text-headline-xl">
              What Are You Looking For?
            </h1>
            <p className="mt-2 text-body-md text-on-surface-variant">
              Help us find better matches for you
            </p>
          </div>

          {/* Age range */}
          <div className="space-y-3">
            <label className="block text-label-md font-semibold text-on-surface">
              Preferred Age Range
            </label>
            <div className="space-y-4">
              <input
                type="range"
                min="18"
                max="60"
                value={ageRange.split('-')[0]}
                className="w-full accent-primary"
              />
              <div className="flex justify-between text-label-md text-on-surface">
                <span>{ageRange.split('-')[0]}</span>
                <span>{ageRange.split('-')[1]}</span>
              </div>
            </div>
          </div>

          {/* Religion level */}
          <div className="space-y-3">
            <label className="block text-label-md font-semibold text-on-surface">
              Religion Level
            </label>
            <ChipRadioGroup
              label=""
              name="religion-level"
              options={[
                { value: 'any', label: 'Any' },
                { value: 'practicing', label: 'Practicing' },
                { value: 'very-religious', label: 'Very Religious' },
              ]}
              defaultValue={religionLevel}
            />
          </div>

          {/* Looking for */}
          <div className="space-y-3">
            <label className="block text-label-md font-semibold text-on-surface">
              What are you looking for?
            </label>
            <div className="space-y-2">
              <Checkbox
                label="Marriage"
                checked={lookingFor.includes('marriage')}
                onChange={(checked) => {
                  setLookingFor(
                    checked
                      ? [...lookingFor, 'marriage']
                      : lookingFor.filter((l) => l !== 'marriage')
                  );
                }}
              />
              <Checkbox
                label="Long-term relationship"
                checked={lookingFor.includes('relationship')}
                onChange={(checked) => {
                  setLookingFor(
                    checked
                      ? [...lookingFor, 'relationship']
                      : lookingFor.filter((l) => l !== 'relationship')
                  );
                }}
              />
              <Checkbox
                label="Get to know first"
                checked={lookingFor.includes('get-to-know')}
                onChange={(checked) => {
                  setLookingFor(
                    checked
                      ? [...lookingFor, 'get-to-know']
                      : lookingFor.filter((l) => l !== 'get-to-know')
                  );
                }}
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex gap-3 border-t border-outline-variant pt-6">
            <Button variant="outline" className="flex-1" onClick={handleBack}>
              <Icon name="arrow-back" className="mr-2 h-5 w-5" />
              Back
            </Button>
            <Button variant="primary" className="flex-1" onClick={handleNext}>
              Next
              <Icon name="arrow-forward" className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Save draft */}
          <button className="w-full text-center text-label-md text-primary hover:text-primary/80">
            Save & Continue Later
          </button>
        </Card>
      </div>
    </div>
  );
}
