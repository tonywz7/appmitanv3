'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Tabs } from '@/components/ui/Tabs';
import { Avatar } from '@/components/ui/Avatar';
import { Icon } from '@/components/ui/Icon';
import { Navbar } from '@/components/layout/Navbar';
import { ChipRadioGroup } from '@/components/ui/ChipRadioGroup';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [visibility, setVisibility] = useState<'public' | 'members' | 'matches_only'>('members');

  const profileTabs = [
    {
      label: 'About',
      value: 'about',
      content: (
        <div className="space-y-6">
          <Card>
            <h3 className="mb-4 text-headline-md font-semibold text-on-surface">
              Personal Information
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-label-sm text-on-surface-variant">Full Name</p>
                <p className="text-body-md text-on-surface">Fatima Ahmed Hassan</p>
              </div>
              <div>
                <p className="text-label-sm text-on-surface-variant">Age</p>
                <p className="text-body-md text-on-surface">26 years old</p>
              </div>
              <div>
                <p className="text-label-sm text-on-surface-variant">Location</p>
                <p className="text-body-md text-on-surface">Jakarta, Indonesia</p>
              </div>
              <div>
                <p className="text-label-sm text-on-surface-variant">About Me</p>
                <p className="text-body-md text-on-surface">
                  I&apos;m a passionate teacher who loves reading, cooking, and volunteering in the community. Looking for someone genuine and committed to faith.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="mb-4 text-headline-md font-semibold text-on-surface">
              Religious Profile
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-label-sm text-on-surface-variant">Religion Level</p>
                <Badge label="Practicing" variant="primary" size="sm" />
              </div>
              <div>
                <p className="text-label-sm text-on-surface-variant">Imam Followed</p>
                <p className="text-body-md text-on-surface">Tawassul Sunnah</p>
              </div>
              <div>
                <p className="text-label-sm text-on-surface-variant">Prayer Frequency</p>
                <p className="text-body-md text-on-surface">5 times daily</p>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="mb-4 text-headline-md font-semibold text-on-surface">
              Lifestyle
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-label-sm text-on-surface-variant">Education</p>
                <p className="text-body-md text-on-surface">Master&apos;s in Education</p>
              </div>
              <div>
                <p className="text-label-sm text-on-surface-variant">Profession</p>
                <p className="text-body-md text-on-surface">Teacher</p>
              </div>
              <div>
                <p className="text-label-sm text-on-surface-variant">Lifestyle</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge label="Halal Food" variant="default" size="sm" />
                  <Badge label="Family-Oriented" variant="default" size="sm" />
                  <Badge label="Active" variant="default" size="sm" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      ),
    },
    {
      label: 'Photos',
      value: 'photos',
      content: (
        <div className="space-y-4">
          <Card>
            <h3 className="mb-4 text-headline-md font-semibold text-on-surface">
              Photo Gallery
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="relative rounded-lg bg-surface-container p-8 h-40 flex items-center justify-center group"
                >
                  <Icon name="image" className="h-8 w-8 text-on-surface-variant" />
                  <button className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/0 hover:bg-black/30 opacity-0 hover:opacity-100 transition-all group-hover:opacity-100">
                    <Icon name="delete" className="h-6 w-6 text-white" />
                  </button>
                </div>
              ))}
              <div className="rounded-lg border-2 border-dashed border-outline-variant p-8 h-40 flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:bg-primary-container transition-all">
                <Icon name="add-photo-alternate" className="h-8 w-8 text-on-surface-variant mb-2" />
                <p className="text-label-sm text-on-surface-variant">Add Photo</p>
              </div>
            </div>
          </Card>
        </div>
      ),
    },
    {
      label: 'Preferences',
      value: 'preferences',
      content: (
        <div className="space-y-4">
          <Card>
            <h3 className="mb-4 text-headline-md font-semibold text-on-surface">
              What I&apos;m Looking For
            </h3>
            <div className="space-y-6">
              <div>
                <label className="mb-3 block text-label-md font-semibold text-on-surface">
                  Age Range
                </label>
                <input
                  type="range"
                  min="18"
                  max="60"
                  className="w-full accent-primary"
                />
                <p className="mt-2 text-body-md text-on-surface">25 - 35</p>
              </div>
              <div>
                <label className="mb-3 block text-label-md font-semibold text-on-surface">
                  Religion Level
                </label>
                <ChipRadioGroup
                  label="Religion Level"
                  name="religion-level"
                  options={[
                    { value: 'practicing', label: 'Practicing' },
                    { value: 'moderate', label: 'Moderate' },
                    { value: 'very-religious', label: 'Very Religious' },
                  ]}
                  defaultValue="practicing"
                />
              </div>
              <div>
                <label className="mb-3 block text-label-md font-semibold text-on-surface">
                  Location Preference
                </label>
                <ChipRadioGroup
                  label="Location Preference"
                  name="location"
                  options={[
                    { value: 'anywhere', label: 'Anywhere' },
                    { value: 'nearby', label: 'Nearby' },
                    { value: 'country', label: 'My Country' },
                  ]}
                  defaultValue="country"
                />
              </div>
            </div>
          </Card>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 py-8 md:px-6">
        {/* Header with profile photo */}
        <Card className="mb-8 space-y-4">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div className="flex items-center gap-4">
              <Avatar alt="Fatima Ahmed Hassan" size="xl" initials="FAH" />
              <div>
                <h1 className="text-headline-lg font-semibold text-on-surface">
                  Fatima Ahmed Hassan
                </h1>
                <p className="text-body-md text-on-surface-variant">26 years old</p>
                <Badge label="Verified" variant="approved" size="sm" />
              </div>
            </div>
            <Button
              variant={isEditing ? 'secondary' : 'primary'}
              onClick={() => setIsEditing(!isEditing)}
            >
              <Icon name={isEditing ? 'close' : 'edit'} className="mr-2 h-5 w-5" />
              {isEditing ? 'Done' : 'Edit Profile'}
            </Button>
          </div>

          {/* Visibility settings */}
          <div className="border-t border-outline-variant pt-4">
            <label className="mb-3 block text-label-md font-semibold text-on-surface">
              Profile Visibility
            </label>
            <ChipRadioGroup
              label="Profile Visibility"
              name="visibility"
              options={[
                { value: 'public', label: 'Public' },
                { value: 'members', label: 'Members Only' },
                { value: 'matches_only', label: 'Matches Only' },
              ]}
              defaultValue={visibility}
            />
          </div>
        </Card>

        {/* Profile tabs */}
        <Tabs tabs={profileTabs} defaultValue="about" />
      </main>
    </div>
  );
}
