"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { SelectField } from "@/components/ui/SelectField";
import { TextField } from "@/components/ui/TextField";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ONBOARDING_TOTAL_STEPS, SITE_NAME } from "@/lib/constants";

const IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCULoMP5Xed0Gqx-PYcYKolNRxxeaDGNV3GaxInmv3MFAP-FnJvEz4dVCv4WTkJZPP-i0oEjH2-XhCKVyz9oCf9yP8KUTyC0SYg8Z8EGyEcYySxB1Yp8Yzx-uGMs7UqxO9n6uuNwpcSV9Uoky5dJ1ZO_HPxL_CTvhFB2LijFSXzhGsLZIA3dX3xzgmXwrzOOcDw8BBTcyVGNNBwd0xFlTTAPRB4V2h-gB6Jt8TGK4DRAwiEYmgHe1dxVp1EWqoJbYv45usDOdGlFA";

export default function LifestylePage() {
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/onboarding/preferences");
  }

  return (
    <div className="flex min-h-screen bg-background font-body-md text-on-background antialiased">
      {/* Left pane */}
      <div className="relative hidden w-1/2 bg-surface-container-highest lg:flex">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={IMAGE} alt="Modern minimalist interior" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="relative z-10 flex h-full w-full flex-col justify-between p-12">
          <span className="font-headline-md text-headline-md font-bold tracking-tight text-white">
            {SITE_NAME}
          </span>
          <div className="max-w-md space-y-4">
            <h2 className="font-headline-xl text-headline-xl text-white">For Life, Not Just For Now</h2>
            <p className="font-body-lg text-body-lg text-white/90">
              Your lifestyle and values help us find someone truly compatible.
            </p>
          </div>
        </div>
      </div>

      {/* Right pane */}
      <div className="flex w-full items-start justify-center overflow-y-auto bg-surface-container-lowest p-6 md:p-12 lg:w-1/2">
        <div className="w-full max-w-md">
          <ProgressBar step={4} totalSteps={ONBOARDING_TOTAL_STEPS} className="mb-8" />

          <div className="mb-8 space-y-3">
            <h1 className="font-headline-md text-headline-md text-primary">Lifestyle &amp; Values</h1>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Share your background and lifestyle so we can find your most compatible matches.
            </p>
          </div>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <h3 className="border-b border-outline-variant pb-2 font-label-md text-label-md uppercase tracking-wide text-primary">
                Background
              </h3>
              <SelectField id="education" name="education" label="Education Level" placeholder="Select education" required>
                <option value="high_school">High School</option>
                <option value="diploma">Diploma / Associate</option>
                <option value="bachelor">Bachelor&apos;s Degree</option>
                <option value="master">Master&apos;s Degree</option>
                <option value="phd">PhD / Doctorate</option>
                <option value="other">Other</option>
              </SelectField>
              <TextField id="profession" name="profession" label="Profession" placeholder="e.g., Doctor, Teacher, Engineer" />
              <TextField id="income" name="income" label="Monthly Income Range" placeholder="Optional — kept private" optional />
            </div>

            <div className="space-y-4">
              <h3 className="border-b border-outline-variant pb-2 font-label-md text-label-md uppercase tracking-wide text-primary">
                Family
              </h3>
              <SelectField id="marital_status" name="marital_status" label="Marital Status" placeholder="Select status" required>
                <option value="never_married">Never Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </SelectField>
              <SelectField id="children" name="children" label="Do you have children?" placeholder="Select" required>
                <option value="none">No children</option>
                <option value="yes_living">Yes, living with me</option>
                <option value="yes_not_living">Yes, not living with me</option>
              </SelectField>
              <SelectField id="want_children" name="want_children" label="Do you want children?" placeholder="Select" required>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="open">Open to discussion</option>
              </SelectField>
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
                Your lifestyle information is kept private and shared only per your settings.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
