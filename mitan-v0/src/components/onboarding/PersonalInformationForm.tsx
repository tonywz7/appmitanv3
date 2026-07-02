"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { TextField } from "@/components/ui/TextField";
import { SelectField } from "@/components/ui/SelectField";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ONBOARDING_TOTAL_STEPS } from "@/lib/constants";

export function PersonalInformationForm() {
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: call onboardingService.savePersonalInformation()
    router.push("/onboarding/religious-profile");
  }

  return (
    <div className="w-full max-w-md fade-in-up" data-visible="true">
      <ProgressBar step={2} totalSteps={ONBOARDING_TOTAL_STEPS} className="mb-8" />

      <div className="mb-8 space-y-3">
        <h1 className="font-headline-md text-headline-md text-primary">Personal Information</h1>
        <p className="font-body-sm text-[14px] leading-relaxed text-on-surface-variant">
          This information helps us build a trustworthy profile and refine your compatibility
          recommendations. You remain in full control of what is shared.
        </p>
      </div>

      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <h3 className="border-b border-outline-variant pb-2 font-label-md text-label-md uppercase tracking-wide text-primary">
            Identity
          </h3>
          <TextField id="full_name" name="full_name" label="Full Name" placeholder="e.g., Tariq Rahman" required />
          <TextField
            id="display_name"
            name="display_name"
            label="Preferred Display Name"
            placeholder="How should we call you?"
            optional
          />
        </div>

        <div className="space-y-4">
          <h3 className="border-b border-outline-variant pb-2 font-label-md text-label-md uppercase tracking-wide text-primary">
            Demographics
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <SelectField id="gender" name="gender" label="Gender" placeholder="Select" required>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </SelectField>
            <TextField id="dob" name="dob" label="Date of Birth" type="date" required />
          </div>
          <TextField
            id="city"
            name="city"
            label="Current City"
            placeholder="Search for your city"
            icon={<Icon name="location_on" />}
            required
          />
        </div>

        <div className="space-y-4 pt-6">
          <Button type="submit" variant="success" fullWidth>
            Continue
            <Icon name="arrow_forward" />
          </Button>
          <Button type="button" variant="ghost" fullWidth onClick={() => router.back()}>
            Back
          </Button>
        </div>

        <div className="flex items-start justify-center space-x-2 pt-4 text-center text-on-surface-variant">
          <Icon name="lock" className="mt-0.5 text-[16px]" />
          <p className="max-w-[280px] font-body-sm text-[12px] leading-tight">
            Your personal information is securely protected and only shared according to your
            privacy settings.
          </p>
        </div>
      </form>
    </div>
  );
}
