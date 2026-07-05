"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { SelectField } from "@/components/ui/SelectField";
import { ChipRadioGroup } from "@/components/ui/ChipRadioGroup";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ONBOARDING_TOTAL_STEPS, SITE_NAME } from "@/lib/constants";

const IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAoDvWjCjWYF9GH1Q1i-uHVVgW633cOa9ExiWUJhnGMRP_aZWlfnjgaKgZc-cQkTJzueAq_zex8OjTjRBGd0oYKFOwJ0Nf86YHnJ310iOYECd4EiVXpdKaMRKF1EuU3nQK8b5lBaRF6jjFzOCwfsOR83FsjLKp3mH3ClB1p5cCeXiOIKI0nqPrZHpZ7bJtSVFx0YjP6phGo5yyVeOLGL_IlLEXtyDh-8RRlMOsKK4h0F0D2Lr4s-Rfaou5RRQscwGJinbYGNKHWZA";

export default function PreferencesPage() {
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/onboarding/photos");
  }

  return (
    <div className="flex min-h-screen bg-background font-body-md text-on-background antialiased">
      {/* Left pane */}
      <div className="relative hidden w-1/2 bg-surface-container-highest lg:flex">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={IMAGE} alt="Modern mosque interior" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="relative z-10 flex h-full w-full flex-col justify-between p-12">
          <span className="font-headline-md text-headline-md font-bold tracking-tight text-white">
            {SITE_NAME}
          </span>
          <div className="max-w-md space-y-4">
            <h2 className="font-headline-xl text-headline-xl text-white">For Life, Not Just For Now</h2>
            <p className="font-body-lg text-body-lg text-white/90">
              Tell us what you are looking for in a partner.
            </p>
          </div>
        </div>
      </div>

      {/* Right pane */}
      <div className="flex w-full items-start justify-center overflow-y-auto bg-surface-container-lowest p-6 md:p-12 lg:w-1/2">
        <div className="w-full max-w-md">
          <ProgressBar step={5} totalSteps={ONBOARDING_TOTAL_STEPS} className="mb-8" />

          <div className="mb-8 space-y-3">
            <h1 className="font-headline-md text-headline-md text-primary">Partner Preferences</h1>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              These preferences help us personalise your recommendations. You can refine them anytime.
            </p>
          </div>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <h3 className="border-b border-outline-variant pb-2 font-label-md text-label-md uppercase tracking-wide text-primary">
                Demographics
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <SelectField id="age_min" name="age_min" label="Min Age" placeholder="Min" required>
                  {Array.from({ length: 43 }, (_, i) => i + 18).map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </SelectField>
                <SelectField id="age_max" name="age_max" label="Max Age" placeholder="Max" required>
                  {Array.from({ length: 43 }, (_, i) => i + 18).map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </SelectField>
              </div>
              <SelectField id="location_pref" name="location_pref" label="Location Preference" placeholder="Select" required>
                <option value="anywhere">Anywhere</option>
                <option value="same_country">Same Country</option>
                <option value="same_city">Same City</option>
              </SelectField>
            </div>

            <div className="space-y-4">
              <h3 className="border-b border-outline-variant pb-2 font-label-md text-label-md uppercase tracking-wide text-primary">
                Religious &amp; Values
              </h3>
              <ChipRadioGroup
                label="Religion Level"
                name="partner_religion_level"
                options={[
                  { label: "Any", value: "any" },
                  { label: "Practicing", value: "practicing" },
                  { label: "Very Religious", value: "very_religious" },
                ]}
              />
              <ChipRadioGroup
                label="Marital Status"
                name="partner_marital_status"
                options={[
                  { label: "Any", value: "any" },
                  { label: "Never Married", value: "never_married" },
                  { label: "Divorced", value: "divorced" },
                  { label: "Widowed", value: "widowed" },
                ]}
              />
            </div>

            <div className="space-y-4 pt-6">
              <Button type="submit" variant="primary" fullWidth>
                Continue
                <Icon name="arrow_forward" />
              </Button>
              <Button type="button" variant="ghost" fullWidth onClick={() => router.back()}>
                Back
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 pt-2 text-center text-on-surface-variant">
              <Icon name="lock" className="text-[16px]" />
              <p className="max-w-xs font-body-sm text-[12px] leading-tight">
                Preferences are used only to improve recommendations. You remain in full control.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
