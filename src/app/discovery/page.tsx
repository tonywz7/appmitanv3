"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SelectField } from "@/components/ui/SelectField";

interface Profile {
  id: string;
  name: string;
  age: number;
  location: string;
  bio: string;
  tags: string[];
  isMatch?: boolean;
  image: string;
}

const PROFILES: Profile[] = [
  {
    id: "1",
    name: "Zainab Ahmed",
    age: 26,
    location: "Jakarta, Indonesia",
    bio: "Loves reading, community work, and cooking. Looking for someone sincere and committed to faith.",
    tags: ["Practicing", "Teacher", "Jakarta"],
    isMatch: true,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC9SdpT7mouYVFYkzTEZfGlabWHjy4ARKUvWT8gshHn5ExJ9vtIBqqXUx6kuZRO4W4PnLkzpf-Pe3ac6aH8hSLA5R2uiI-Uf3XJOUg7Urm2IAVBKLQ8TzC3DAGbTni1tkCaHv8i9KBbKFXnDudbNbjXt1iHB1951zUEgt2jItULkdKu933MGOfv1vF5Ahszmzi0kDKmLYaCmEIgekqAKe6JsG6DhfZAk4fDEEjcyQjD8vIQ7dcwjFt_TlM7CLdSfqrhqWB20xloZw",
  },
  {
    id: "2",
    name: "Mariam Khan",
    age: 24,
    location: "Kuala Lumpur, Malaysia",
    bio: "Teacher by profession and passion. Dedicated to lifelong learning and community service.",
    tags: ["Very Religious", "Master's Degree", "KL"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCehtHF30m1p3lB7-3h74gTdwMRrmrb198gFckrmXmoqrl_eDuDmJTlOFU7xq_sHAdYlWFNRyaoOBvwuXH3QqCUSQQA0cTCDW00tmyKbbNC05jgelGqh_adKVc3rUEvm0qmxWeqX9enAUGaYsHEd2vX_SgurkRH5Dbul9DjlsZ4LyRQUpx0Bl7pNbwrlbj1nguMfiPwiyMwyEji27wGdig7uOPkcslUuZl6SIcQoxxSOuDt_gNUJZfWSJ-fH-f_uduZQ0LzlJyZEA",
  },
  {
    id: "3",
    name: "Fatima Hassan",
    age: 28,
    location: "Dubai, UAE",
    bio: "Entrepreneur and philanthropist. Passionate about social impact and meaningful relationships.",
    tags: ["Practicing", "Entrepreneur", "Dubai"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAALmyZU_JLN1bvkBVS3u5B2iPGWzoZpLnoI00_bzNVwLW-HVMRTn0k6kJuRKR7Fg6dXaHBTide3EohS4b5Svtx_lncBvT9uRiTS8zT5Qpt4fo2q_vOFPpIcqxTU3Xei4MAvmMoerYSzYdEu6TeeQhWGXDzDcdKIlIMepjAowRtK7_rSORRsmJdEEgbHwxuPhc2E2shSDZu0VMfdEL8n65OOsMu4buqAi5dkZGzojEdW1KkneYDHaqb6n1SxE1w72fblP2Zn6ID6A",
  },
];

const MAX_LIKES = 5;

export default function DiscoveryPage() {
  const [cardIndex, setCardIndex] = useState(0);
  const [likesUsed, setLikesUsed] = useState(0);
  const [viewMode, setViewMode] = useState<"card" | "grid">("card");
  const [passed, setPassed] = useState<string[]>([]);

  const remaining = MAX_LIKES - likesUsed;
  const current = PROFILES[cardIndex % PROFILES.length];
  const gridProfiles = PROFILES.filter((p) => !passed.includes(p.id));

  function handleLike() {
    if (remaining > 0) {
      setLikesUsed((n) => n + 1);
      setCardIndex((n) => n + 1);
    }
  }

  function handlePass() {
    setPassed((prev) => [...prev, current.id]);
    setCardIndex((n) => n + 1);
  }

  return (
    <div className="min-h-screen bg-surface-container-lowest">
      <Navbar />

      <main className="mx-auto max-w-container-max px-margin-mobile py-8 md:px-margin-desktop">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-headline-md text-headline-md text-on-surface">Discover Matches</h1>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Find your compatible partner</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("card")}
              aria-label="Card view"
              className={`rounded-lg p-2.5 transition-colors ${
                viewMode === "card"
                  ? "bg-primary-container text-primary"
                  : "text-on-surface-variant hover:bg-surface-container"
              }`}
            >
              <Icon name="view_agenda" className="text-[20px]" />
            </button>
            <button
              onClick={() => setViewMode("grid")}
              aria-label="Grid view"
              className={`rounded-lg p-2.5 transition-colors ${
                viewMode === "grid"
                  ? "bg-primary-container text-primary"
                  : "text-on-surface-variant hover:bg-surface-container"
              }`}
            >
              <Icon name="grid_view" className="text-[20px]" />
            </button>
          </div>
        </div>

        {/* Filters strip */}
        <div className="mb-6 flex flex-wrap items-end gap-4 rounded-xl border border-outline-variant bg-surface-container-lowest p-4">
          <div className="min-w-[140px] flex-1">
            <SelectField id="age_range" name="age_range" label="Age Range" placeholder="Select age range">
              <option value="18-25">18 – 25</option>
              <option value="20-35">20 – 35</option>
              <option value="25-40">25 – 40</option>
            </SelectField>
          </div>
          <div className="min-w-[140px] flex-1">
            <SelectField id="religion" name="religion" label="Religion Level" placeholder="Select level">
              <option value="all">All</option>
              <option value="practicing">Practicing</option>
              <option value="very_religious">Very Religious</option>
            </SelectField>
          </div>
          <div className="min-w-[140px] flex-1">
            <SelectField id="location" name="location" label="Location" placeholder="Select location">
              <option value="all">All Locations</option>
              <option value="nearby">Nearby (50 km)</option>
              <option value="country">My Country</option>
            </SelectField>
          </div>
        </div>

        {/* Likes counter */}
        <div className="mb-6 flex items-center justify-between rounded-xl bg-primary px-5 py-4">
          <div>
            <p className="font-label-sm text-label-sm text-on-primary/80">Daily Likes Remaining</p>
            <p className="font-headline-md text-headline-md font-bold text-on-primary">{remaining} / {MAX_LIKES}</p>
          </div>
          {remaining === 0 && (
            <p className="font-body-sm text-body-sm font-semibold text-on-primary">Come back tomorrow!</p>
          )}
        </div>

        {/* Card view */}
        {viewMode === "card" && (
          <div className="mx-auto max-w-md">
            {remaining > 0 ? (
              <div className="overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-lowest shadow-[0_4px_20px_rgba(26,54,54,0.04)]">
                {/* Photo */}
                <div className="relative h-[420px] w-full overflow-hidden bg-surface-container">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={current.image} alt={current.name} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {current.isMatch && (
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full bg-success-green px-3 py-1 font-label-sm text-label-sm text-white">
                        Mutual Match
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-headline-lg text-headline-lg font-bold">{current.name}, {current.age}</p>
                    <p className="flex items-center gap-1 font-body-sm text-body-sm opacity-90">
                      <Icon name="location_on" className="text-[14px]" />{current.location}
                    </p>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <p className="mb-4 font-body-md text-body-md text-on-surface-variant">{current.bio}</p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {current.tags.map((t) => (
                      <span key={t} className="rounded-full bg-surface-container-low px-3 py-1 font-label-sm text-label-sm text-on-surface-variant">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <Button variant="outline" fullWidth onClick={handlePass}>
                      <Icon name="close" className="text-[20px]" />
                      Pass
                    </Button>
                    <Button variant="primary" fullWidth onClick={handleLike}>
                      <Icon name="favorite" className="text-[20px]" />
                      Like
                    </Button>
                  </div>
                  <Link
                    href={`/profile/${current.id}`}
                    className="mt-3 block text-center font-body-sm text-body-sm text-primary hover:underline"
                  >
                    View full profile
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 rounded-2xl border border-outline-variant bg-surface-container-lowest p-12 text-center">
                <Icon name="favorite" className="text-outline text-[56px]" />
                <h2 className="font-headline-sm text-headline-sm text-on-surface">Daily Limit Reached</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  You have used all your likes for today. Come back tomorrow for more!
                </p>
                <Button variant="primary">Explore Premium</Button>
              </div>
            )}
          </div>
        )}

        {/* Grid view */}
        {viewMode === "grid" && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gridProfiles.map((profile) => (
              <div
                key={profile.id}
                className="group overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-lowest shadow-[0_4px_20px_rgba(26,54,54,0.04)] transition-all hover:shadow-[0_8px_30px_rgba(26,54,54,0.08)]"
              >
                <div className="relative h-56 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={profile.image} alt={profile.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {profile.isMatch && (
                    <div className="absolute left-3 top-3">
                      <span className="rounded-full bg-success-green px-2.5 py-0.5 font-label-sm text-label-sm text-white">Match</span>
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="font-headline-sm text-headline-sm font-bold">{profile.name}, {profile.age}</p>
                    <p className="flex items-center gap-1 font-body-sm text-body-sm opacity-80">
                      <Icon name="location_on" className="text-[13px]" />{profile.location}
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {profile.tags.map((t) => (
                      <span key={t} className="rounded-full bg-surface-container-low px-2.5 py-0.5 font-label-sm text-label-sm text-on-surface-variant">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" fullWidth onClick={() => setPassed((prev) => [...prev, profile.id])}>
                      Pass
                    </Button>
                    <Button variant="primary" fullWidth onClick={() => setLikesUsed((n) => Math.min(n + 1, MAX_LIKES))}>
                      Like
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
