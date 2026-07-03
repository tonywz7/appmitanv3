'use client';

import React, { useState } from 'react';
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
  { label: 'Photos', completed: false },
  { label: 'Review', completed: false },
];

export default function PhotosPage() {
  const router = useRouter();
  const [photos, setPhotos] = useState<(File | null)[]>([null, null, null, null, null, null]);

  const handlePhotoUpload = (index: number, file: File) => {
    const newPhotos = [...photos];
    newPhotos[index] = file;
    setPhotos(newPhotos);
  };

  const handleNext = () => {
    router.push('/(onboarding)/review');
  };

  const handleBack = () => {
    router.back();
  };

  const uploadedCount = photos.filter((p) => p !== null).length;

  return (
    <div className="min-h-screen bg-surface">
      <div className="mx-auto max-w-2xl px-4 py-8 md:px-6">
        {/* Progress */}
        <div className="mb-8">
          <ProgressBar step={5} totalSteps={6} />
        </div>

        {/* Content */}
        <Card className="space-y-6">
          <div>
            <h1 className="text-headline-lg font-semibold text-on-surface md:text-headline-xl">
              Add Your Photos
            </h1>
            <p className="mt-2 text-body-md text-on-surface-variant">
              Upload clear, recent photos. You need at least 1 photo to continue.
            </p>
            <div className="mt-4">
              <Badge
                label={`${uploadedCount} of 6 photos uploaded`}
                variant="primary"
                size="sm"
              />
            </div>
          </div>

          {/* Photos grid */}
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
            {photos.map((photo, index) => (
              <label
                key={index}
                className="relative aspect-square rounded-lg border-2 border-dashed border-outline-variant cursor-pointer hover:border-primary hover:bg-primary-container transition-all flex flex-col items-center justify-center bg-surface-container overflow-hidden group"
              >
                {photo ? (
                  <>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          const newPhotos = [...photos];
                          newPhotos[index] = null;
                          setPhotos(newPhotos);
                        }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Icon name="delete" className="h-6 w-6 text-white" />
                      </button>
                    </div>
                    <Icon name="image" className="h-8 w-8 text-on-surface-variant" />
                  </>
                ) : (
                  <>
                    <Icon name="add-photo-alternate" className="h-8 w-8 text-on-surface-variant mb-2" />
                    <span className="text-label-sm text-on-surface-variant">
                      {index === 0 ? 'Main' : `Photo ${index + 1}`}
                    </span>
                  </>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handlePhotoUpload(index, file);
                  }}
                />
              </label>
            ))}
          </div>

          {/* Tips */}
          <div className="rounded-lg bg-primary-container p-4 space-y-2">
            <p className="text-label-md font-semibold text-primary">
              Tips for a great profile photo:
            </p>
            <ul className="text-body-sm text-primary/80 space-y-1">
              <li>• Use recent, clear photos</li>
              <li>• Make sure your face is visible</li>
              <li>• Show variety (different settings, styles)</li>
              <li>• Avoid group photos as your main picture</li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="flex gap-3 border-t border-outline-variant pt-6">
            <Button variant="outline" className="flex-1" onClick={handleBack}>
              <Icon name="arrow-back" className="mr-2 h-5 w-5" />
              Back
            </Button>
            <Button
              variant="primary"
              className="flex-1"
              disabled={uploadedCount === 0}
              onClick={handleNext}
            >
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
