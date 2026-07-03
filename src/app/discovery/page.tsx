'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { SelectField } from '@/components/ui/SelectField';
import { ChipRadioGroup } from '@/components/ui/ChipRadioGroup';
import { Icon } from '@/components/ui/Icon';
import { Navbar } from '@/components/layout/Navbar';
import { Avatar } from '@/components/ui/Avatar';

interface Profile {
  id: string;
  name: string;
  age: number;
  location: string;
  initials: string;
  religionLevel: string;
  education: string;
  bio: string;
  liked?: boolean;
  isMatch?: boolean;
}

const profiles: Profile[] = [
  {
    id: '1',
    name: 'Zainab Ahmed',
    age: 26,
    location: 'Jakarta, Indonesia',
    initials: 'ZA',
    religionLevel: 'Practicing',
    education: 'University',
    bio: 'Love reading, cooking, and community work',
    isMatch: true,
  },
  {
    id: '2',
    name: 'Mariam Khan',
    age: 24,
    location: 'Kuala Lumpur, Malaysia',
    initials: 'MK',
    religionLevel: 'Very Religious',
    education: 'Master&apos;s Degree',
    bio: 'Teacher by profession, teacher by passion',
    liked: true,
  },
  {
    id: '3',
    name: 'Fatima Hassan',
    age: 28,
    location: 'Dubai, UAE',
    initials: 'FH',
    religionLevel: 'Practicing',
    education: 'University',
    bio: 'Entrepreneur and philanthropist',
  },
];

export default function DiscoveryPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'card' | 'grid'>('card');
  const [filters, setFilters] = useState({
    ageRange: '20-35',
    religionLevel: 'all',
    location: 'all',
  });
  const [activeLikes, setActiveLikes] = useState(0);

  const currentProfile = profiles[currentIndex];
  const maxLikes = 5;

  const handleLike = () => {
    if (activeLikes < maxLikes) {
      setActiveLikes(activeLikes + 1);
      setCurrentIndex((currentIndex + 1) % profiles.length);
    }
  };

  const handlePass = () => {
    setCurrentIndex((currentIndex + 1) % profiles.length);
  };

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 py-8 md:px-6">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-headline-lg font-semibold text-on-surface md:text-headline-xl">
            Discover Matches
          </h1>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('card')}
              className={`rounded-lg p-2 ${viewMode === 'card' ? 'bg-primary-container text-primary' : 'text-on-surface-variant'}`}
            >
              <Icon name="view-agenda" className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`rounded-lg p-2 ${viewMode === 'grid' ? 'bg-primary-container text-primary' : 'text-on-surface-variant'}`}
            >
              <Icon name="grid-3x3" className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Filters */}
        <Card className="mb-8 space-y-4">
          <h3 className="text-label-md font-semibold text-on-surface">Filters</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <SelectField
              id="age-range"
              label="Age Range"
              placeholder="Select age range"
              value={filters.ageRange}
              onChange={(e) => setFilters({ ...filters, ageRange: e.target.value })}
            >
              <option value='18-25'>18-25</option>
              <option value='20-35'>20-35</option>
              <option value='25-40'>25-40</option>
            </SelectField>
            <SelectField
              id="religion-level"
              label="Religion Level"
              placeholder="Select religion level"
              value={filters.religionLevel}
              onChange={(e) => setFilters({ ...filters, religionLevel: e.target.value })}
            >
              <option value='all'>All</option>
              <option value='practicing'>Practicing</option>
              <option value='very-religious'>Very Religious</option>
            </SelectField>
            <SelectField
              id="location"
              label="Location"
              placeholder="Select location"
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            >
              <option value='all'>All</option>
              <option value='nearby'>Nearby (50km)</option>
              <option value='country'>My Country</option>
            </SelectField>
          </div>
        </Card>

        {/* Active Likes Indicator */}
        <Card className="mb-8 bg-primary-container">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-label-md text-on-primary-container">Daily Likes Remaining</p>
              <p className="mt-1 text-headline-lg font-bold text-primary">
                {maxLikes - activeLikes} / {maxLikes}
              </p>
            </div>
            <div className="text-right">
              {activeLikes >= maxLikes && (
                <p className="text-label-md font-semibold text-primary">
                  Come back tomorrow for more!
                </p>
              )}
            </div>
          </div>
        </Card>

        {/* Card View */}
        {viewMode === 'card' && (
          <div>
            {activeLikes < maxLikes ? (
              <Card
                className="space-y-6"
                variant="elevated"
              >
                {/* Profile Header */}
                <div>
                  <div className="relative mb-4 h-80 w-full rounded-xl bg-surface-container md:h-96">
                    <Icon name="image" className="absolute inset-0 m-auto h-16 w-16 text-on-surface-variant" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-baseline gap-2">
                      <h2 className="text-headline-lg font-semibold text-on-surface">
                        {currentProfile.name}
                      </h2>
                      <span className="text-headline-md text-on-surface-variant">
                        {currentProfile.age}
                      </span>
                    </div>
                    <p className="text-body-md text-on-surface-variant">
                      <Icon name="location-on" className="mr-1 inline h-4 w-4" />
                      {currentProfile.location}
                    </p>

                    {currentProfile.isMatch && (
                      <Badge label="Mutual Match" variant="success" />
                    )}
                  </div>
                </div>

                {/* Profile Info */}
                <div className="space-y-4">
                  <div>
                    <p className="text-label-sm text-on-surface-variant">Religion Level</p>
                    <Badge label={currentProfile.religionLevel} variant="primary" size="sm" />
                  </div>
                  <div>
                    <p className="text-label-sm text-on-surface-variant">Education</p>
                    <p className="text-body-md text-on-surface">{currentProfile.education}</p>
                  </div>
                  <div>
                    <p className="text-label-sm text-on-surface-variant">About</p>
                    <p className="text-body-md text-on-surface">{currentProfile.bio}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 pt-4">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={handlePass}
                  >
                    <Icon name="close" className="mr-2 h-5 w-5" />
                    Pass
                  </Button>
                  <Button
                    variant="primary"
                    className="flex-1"
                    onClick={handleLike}
                  >
                    <Icon name="favorite" className="mr-2 h-5 w-5" />
                    Like
                  </Button>
                </div>
              </Card>
            ) : (
              <Card className="space-y-4 text-center">
                <Icon name="favorite" className="mx-auto h-12 w-12 text-warning-amber" />
                <div>
                  <h2 className="text-headline-md font-semibold text-on-surface">
                    Daily Limit Reached
                  </h2>
                  <p className="mt-2 text-body-md text-on-surface-variant">
                    You&apos;ve reached your daily like limit. Come back tomorrow!
                  </p>
                </div>
                <Button variant="primary">Explore Premium</Button>
              </Card>
            )}
          </div>
        )}

        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {profiles.map((profile) => (
              <Card
                key={profile.id}
                interactive
                className="overflow-hidden space-y-3"
              >
                <div className="h-40 w-full rounded-lg bg-surface-container flex items-center justify-center">
                  <Avatar alt={profile.name} size="xl" initials={profile.initials} />
                </div>
                <div>
                  <h3 className="text-headline-md font-semibold text-on-surface">
                    {profile.name}, {profile.age}
                  </h3>
                  <p className="text-body-sm text-on-surface-variant">
                    {profile.location}
                  </p>
                </div>
                {profile.isMatch && (
                  <Badge label="Mutual Match" variant="success" size="sm" />
                )}
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" className="flex-1 text-sm">
                    Pass
                  </Button>
                  <Button variant="primary" className="flex-1 text-sm">
                    Like
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
