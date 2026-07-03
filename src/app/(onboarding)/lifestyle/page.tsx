'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ChipRadioGroup } from '@/components/ui/ChipRadioGroup';
import { Checkbox } from '@/components/ui/Checkbox';
import { SelectField } from '@/components/ui/SelectField';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Icon } from '@/components/ui/Icon';

const steps = [
  { label: 'Personal', completed: true },
  { label: 'Religious', completed: true },
  { label: 'Preferences', completed: true },
  { label: 'Lifestyle', completed: false },
  { label: 'Photos', completed: false },
  { label: 'Review', completed: false },
];

export default function LifestylePage() {
  const router = useRouter();
  const [education, setEducation] = useState('university');
  const [profession, setProfession] = useState('');
  const [lifestyle, setLifestyle] = useState<string[]>(['family-oriented']);

  const handleNext = () => {
    router.push('/(onboarding)/photos');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-surface">
      <div className="mx-auto max-w-2xl px-4 py-8 md:px-6">
        {/* Progress */}
        <div className="mb-8">
          <ProgressBar steps={steps} currentStep={3} />
        </div>

        {/* Content */}
        <Card className="space-y-6">
          <div>
            <h1 className="text-headline-lg font-semibold text-on-surface md:text-headline-xl">
              Lifestyle & Values
            </h1>
            <p className="mt-2 text-body-md text-on-surface-variant">
              Tell us about your lifestyle and values
            </p>
          </div>

          {/* Education */}
          <div>
            <SelectField
              label="Education Level"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              options={[
                { value: 'high-school', label: 'High School' },
                { value: 'diploma', label: 'Diploma' },
                { value: 'university', label: 'University' },
                { value: 'masters', label: "Master's Degree" },
                { value: 'phd', label: 'PhD' },
              ]}
            />
          </div>

          {/* Profession */}
          <div>
            <label className="block text-label-md font-semibold text-on-surface mb-2">
              Profession
            </label>
            <input
              type="text"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              placeholder="What do you do?"
              className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-3 text-body-md text-on-surface placeholder-on-surface-variant focus:border-primary focus:outline-none"
            />
          </div>

          {/* Lifestyle */}
          <div className="space-y-3">
            <label className="block text-label-md font-semibold text-on-surface">
              Lifestyle
            </label>
            <div className="space-y-2">
              <Checkbox
                label="Family-oriented"
                checked={lifestyle.includes('family-oriented')}
                onChange={(checked) => {
                  setLifestyle(
                    checked
                      ? [...lifestyle, 'family-oriented']
                      : lifestyle.filter((l) => l !== 'family-oriented')
                  );
                }}
              />
              <Checkbox
                label="Adventure-loving"
                checked={lifestyle.includes('adventure')}
                onChange={(checked) => {
                  setLifestyle(
                    checked
                      ? [...lifestyle, 'adventure']
                      : lifestyle.filter((l) => l !== 'adventure')
                  );
                }}
              />
              <Checkbox
                label="Career-focused"
                checked={lifestyle.includes('career')}
                onChange={(checked) => {
                  setLifestyle(
                    checked
                      ? [...lifestyle, 'career']
                      : lifestyle.filter((l) => l !== 'career')
                  );
                }}
              />
              <Checkbox
                label="Social butterfly"
                checked={lifestyle.includes('social')}
                onChange={(checked) => {
                  setLifestyle(
                    checked
                      ? [...lifestyle, 'social']
                      : lifestyle.filter((l) => l !== 'social')
                  );
                }}
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex gap-3 border-t border-outline-variant pt-6">
            <Button variant="secondary" className="flex-1" onClick={handleBack}>
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
