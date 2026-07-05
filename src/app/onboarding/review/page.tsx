"use client";

import { useRouter } from "next/navigation";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ONBOARDING_TOTAL_STEPS, SITE_NAME } from "@/lib/constants";

const ROWS = [
  { label: "Full Name", value: "Fatima Ahmed Hassan" },
  { label: "Age", value: "26 years old" },
  { label: "Location", value: "Jakarta, Indonesia" },
  { label: "Education", value: "Master's Degree" },
  { label: "Prayer Frequency", value: "5 times daily" },
  { label: "Halal Lifestyle", value: "Always" },
  { label: "Photos", value: "1 uploaded" },
];

export default function ReviewPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen bg-background font-body-md text-on-background antialiased">
      {/* Left pane */}
      <div className="relative hidden w-1/2 bg-surface-container-highest lg:flex">
        <div className="flex h-full w-full flex-col items-center justify-center bg-primary/10 p-12">
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-primary/20">
            <Icon name="check_circle" className="text-primary text-[72px]" />
          </div>
          <p className="mt-8 font-headline-md text-headline-md font-bold text-primary">{SITE_NAME}</p>
        </div>
      </div>

      {/* Right pane */}
      <div className="flex w-full items-start justify-center overflow-y-auto bg-surface-container-lowest p-6 md:p-12 lg:w-1/2">
        <div className="w-full max-w-md">
          <ProgressBar step={7} totalSteps={ONBOARDING_TOTAL_STEPS} className="mb-8" />

          <div className="mb-8 space-y-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Icon name="check_circle" className="text-primary text-[36px]" />
            </div>
            <h1 className="font-headline-md text-headline-md text-primary">Profile Complete!</h1>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Review your information below before we start finding your best matches.
            </p>
          </div>

          {/* Review card */}
          <div className="mb-8 overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-[0_4px_20px_rgba(26,54,54,0.04)]">
            <div className="bg-primary px-6 py-4">
              <p className="font-label-md text-label-md uppercase tracking-wider text-on-primary">Profile Summary</p>
            </div>
            <div className="divide-y divide-outline-variant">
              {ROWS.map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between px-6 py-4">
                  <span className="font-body-sm text-body-sm text-on-surface-variant">{label}</span>
                  <span className="font-body-md text-body-md font-medium text-on-surface">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy note */}
          <div className="mb-8 flex gap-3 rounded-xl border border-outline-variant bg-surface-container-low p-4">
            <Icon name="info" className="mt-0.5 shrink-0 text-on-surface-variant text-[18px]" />
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Your profile will be visible to other members. All communication goes through MITAN to protect your privacy.
            </p>
          </div>

          <div className="space-y-4">
            <Button type="button" variant="primary" fullWidth onClick={() => router.push("/discovery")}>
              Start Discovering
              <Icon name="arrow_forward" />
            </Button>
            <Button type="button" variant="ghost" fullWidth onClick={() => router.back()}>
              Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
