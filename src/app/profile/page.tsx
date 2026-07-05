"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Tabs } from "@/components/ui/Tabs";
import { ChipRadioGroup } from "@/components/ui/ChipRadioGroup";
import { Card } from "@/components/ui/Card";

const AVATAR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC9SdpT7mouYVFYkzTEZfGlabWHjy4ARKUvWT8gshHn5ExJ9vtIBqqXUx6kuZRO4W4PnLkzpf-Pe3ac6aH8hSLA5R2uiI-Uf3XJOUg7Urm2IAVBKLQ8TzC3DAGbTni1tkCaHv8i9KBbKFXnDudbNbjXt1iHB1951zUEgt2jItULkdKu933MGOfv1vF5Ahszmzi0kDKmLYaCmEIgekqAKe6JsG6DhfZAk4fDEEjcyQjD8vIQ7dcwjFt_TlM7CLdSfqrhqWB20xloZw";

const PHOTO_IMAGES = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCehtHF30m1p3lB7-3h74gTdwMRrmrb198gFckrmXmoqrl_eDuDmJTlOFU7xq_sHAdYlWFNRyaoOBvwuXH3QqCUSQQA0cTCDW00tmyKbbNC05jgelGqh_adKVc3rUEvm0qmxWeqX9enAUGaYsHEd2vX_SgurkRH5Dbul9DjlsZ4LyRQUpx0Bl7pNbwrlbj1nguMfiPwiyMwyEji27wGdig7uOPkcslUuZl6SIcQoxxSOuDt_gNUJZfWSJ-fH-f_uduZQ0LzlJyZEA",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAALmyZU_JLN1bvkBVS3u5B2iPGWzoZpLnoI00_bzNVwLW-HVMRTn0k6kJuRKR7Fg6dXaHBTide3EohS4b5Svtx_lncBvT9uRiTS8zT5Qpt4fo2q_vOFPpIcqxTU3Xei4MAvmMoerYSzYdEu6TeeQhWGXDzDcdKIlIMepjAowRtK7_rSORRsmJdEEgbHwxuPhc2E2shSDZu0VMfdEL8n65OOsMu4buqAi5dkZGzojEdW1KkneYDHaqb6n1SxE1w72fblP2Zn6ID6A",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC9SdpT7mouYVFYkzTEZfGlabWHjy4ARKUvWT8gshHn5ExJ9vtIBqqXUx6kuZRO4W4PnLkzpf-Pe3ac6aH8hSLA5R2uiI-Uf3XJOUg7Urm2IAVBKLQ8TzC3DAGbTni1tkCaHv8i9KBbKFXnDudbNbjXt1iHB1951zUEgt2jItULkdKu933MGOfv1vF5Ahszmzi0kDKmLYaCmEIgekqAKe6JsG6DhfZAk4fDEEjcyQjD8vIQ7dcwjFt_TlM7CLdSfqrhqWB20xloZw",
];

const INFO_ROWS = [
  { label: "Full Name", value: "Fatima Ahmed Hassan" },
  { label: "Age", value: "26 years old" },
  { label: "Location", value: "Jakarta, Indonesia" },
];

const ABOUT = "I'm a passionate teacher who loves reading, cooking, and volunteering in the community. Looking for someone genuine and committed to faith.";

export default function ProfilePage() {
  const [visibility, setVisibility] = useState("members");

  const tabs = [
    {
      label: "About",
      value: "about",
      content: (
        <div className="space-y-4">
          <Card>
            <h3 className="mb-4 font-headline-sm text-headline-sm text-on-surface">Personal Information</h3>
            <div className="space-y-4">
              {INFO_ROWS.map(({ label, value }) => (
                <div key={label}>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">{label}</p>
                  <p className="font-body-md text-body-md text-on-surface">{value}</p>
                </div>
              ))}
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant">About Me</p>
                <p className="font-body-md text-body-md text-on-surface">{ABOUT}</p>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="mb-4 font-headline-sm text-headline-sm text-on-surface">Religious Profile</h3>
            <div className="space-y-3">
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Religion Level</p>
                <Badge label="Practicing" variant="primary" size="sm" />
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Prayer Frequency</p>
                <p className="font-body-md text-body-md text-on-surface">5 times daily</p>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Halal Lifestyle</p>
                <p className="font-body-md text-body-md text-on-surface">Always</p>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="mb-4 font-headline-sm text-headline-sm text-on-surface">Lifestyle</h3>
            <div className="space-y-3">
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Education</p>
                <p className="font-body-md text-body-md text-on-surface">{"Master's in Education"}</p>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Profession</p>
                <p className="font-body-md text-body-md text-on-surface">Teacher</p>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Values</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Halal Food", "Family-Oriented", "Active"].map((tag) => (
                    <span key={tag} className="rounded-full border border-outline-variant px-3 py-0.5 font-label-sm text-label-sm text-on-surface-variant">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      ),
    },
    {
      label: "Photos",
      value: "photos",
      content: (
        <Card>
          <h3 className="mb-4 font-headline-sm text-headline-sm text-on-surface">Photo Gallery</h3>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {PHOTO_IMAGES.map((src, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={`Photo ${i + 1}`} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <button className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/30 group-hover:opacity-100">
                  <Icon name="delete" className="text-white text-[24px]" />
                </button>
              </div>
            ))}
            <label className="flex aspect-square cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-outline-variant transition-colors hover:border-primary hover:bg-surface-container-low">
              <Icon name="add_photo_alternate" className="text-on-surface-variant text-[28px]" />
              <span className="font-label-sm text-label-sm text-on-surface-variant">Add Photo</span>
              <input type="file" accept="image/*" className="hidden" />
            </label>
          </div>
        </Card>
      ),
    },
    {
      label: "Preferences",
      value: "preferences",
      content: (
        <Card>
          <h3 className="mb-4 font-headline-sm text-headline-sm text-on-surface">{"What I'm Looking For"}</h3>
          <div className="space-y-6">
            <div>
              <p className="mb-2 font-label-md text-label-md text-on-surface">Age Range</p>
              <p className="font-body-md text-body-md text-on-surface">25 – 35 years old</p>
            </div>
            <div>
              <p className="mb-3 font-label-md text-label-md text-on-surface">Religion Level</p>
              <ChipRadioGroup
                label=""
                name="partner_religion_level"
                options={[
                  { value: "practicing", label: "Practicing" },
                  { value: "moderate", label: "Moderate" },
                  { value: "very_religious", label: "Very Religious" },
                ]}
                defaultValue="practicing"
              />
            </div>
            <div>
              <p className="mb-3 font-label-md text-label-md text-on-surface">Location Preference</p>
              <ChipRadioGroup
                label=""
                name="location_pref"
                options={[
                  { value: "anywhere", label: "Anywhere" },
                  { value: "nearby", label: "Nearby" },
                  { value: "country", label: "My Country" },
                ]}
                defaultValue="country"
              />
            </div>
          </div>
        </Card>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-surface-container-lowest">
      <Navbar />

      <main className="mx-auto max-w-container-max px-margin-mobile py-8 md:px-margin-desktop">
        {/* Profile header card */}
        <div className="mb-6 rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 shadow-[0_4px_20px_rgba(26,54,54,0.04)]">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-primary/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={AVATAR} alt="Fatima Ahmed Hassan" className="h-full w-full object-cover" />
              </div>
              <div>
                <h1 className="font-headline-md text-headline-md text-on-surface">Fatima Ahmed Hassan</h1>
                <p className="font-body-sm text-body-sm text-on-surface-variant">26 years old · Jakarta, Indonesia</p>
                <div className="mt-2">
                  <Badge label="Verified" variant="approved" size="sm" />
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Link href="/kyc">
                <Button variant="outline">
                  <Icon name="verified_user" className="text-[18px]" />
                  Verification
                </Button>
              </Link>
              <Button variant="primary">
                <Icon name="edit" className="text-[18px]" />
                Edit Profile
              </Button>
            </div>
          </div>

          {/* Visibility */}
          <div className="mt-5 border-t border-outline-variant pt-5">
            <p className="mb-3 font-label-md text-label-md text-on-surface">Profile Visibility</p>
            <ChipRadioGroup
              label=""
              name="visibility"
              options={[
                { value: "public", label: "Public" },
                { value: "members", label: "Members Only" },
                { value: "matches_only", label: "Matches Only" },
              ]}
              defaultValue={visibility}
            />
          </div>
        </div>

        {/* Tabs */}
        <Tabs tabs={tabs} defaultValue="about" />
      </main>
    </div>
  );
}
