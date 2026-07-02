"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { SelectField } from "@/components/ui/SelectField";
import { ChipRadioGroup } from "@/components/ui/ChipRadioGroup";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ONBOARDING_TOTAL_STEPS } from "@/lib/constants";

export function ReligiousProfileForm() {
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: call onboardingService.saveReligiousProfile(), then advance to step 4
  }

  return (
    <div className="w-full max-w-[540px] rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-6 ambient-shadow fade-in-up md:p-10" data-visible="true">
      <ProgressBar step={3} totalSteps={ONBOARDING_TOTAL_STEPS} className="mb-10 hidden md:block" />

      <div className="mb-10 text-center md:text-left">
        <h2 className="mb-3 font-headline-lg-mobile text-headline-lg-mobile text-primary md:font-headline-lg md:text-headline-lg">
          Religious Profile
        </h2>
        <p className="font-body-md text-body-md leading-relaxed text-secondary">
          This information helps us recommend people with compatible values and expectations.
          Your responses are always treated with respect and handled according to your privacy
          preferences.
        </p>
      </div>

      <form className="space-y-10" onSubmit={handleSubmit}>
        {/* Section 1: Religious Practice */}
        <div className="space-y-6">
          <h3 className="flex items-center gap-2 border-b border-outline-variant/50 pb-2 font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">
            <Icon name="mosque" className="text-[18px]" /> Religious Practice
          </h3>

          <SelectField
            id="prayer_frequency"
            name="prayer_frequency"
            label="Prayer Frequency"
            placeholder="Select frequency"
            required
          >
            <option value="always">Always pray 5 times a day</option>
            <option value="usually">Usually pray 5 times a day</option>
            <option value="sometimes">Sometimes miss prayers</option>
            <option value="rarely">Rarely pray</option>
          </SelectField>

          <ChipRadioGroup
            label="Halal Lifestyle"
            name="halal"
            columns={3}
            options={[
              { label: "Always", value: "always" },
              { label: "Usually", value: "usually" },
              { label: "Flexible", value: "flexible" },
            ]}
          />
        </div>

        {/* Section 2: Lifestyle */}
        <div className="space-y-6">
          <h3 className="flex items-center gap-2 border-b border-outline-variant/50 pb-2 font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">
            <Icon name="coffee" className="text-[18px]" /> Lifestyle
          </h3>

          <ChipRadioGroup
            label="Smoking"
            name="smoking"
            hint="Visible to matches only"
            options={[
              { label: "No", value: "no" },
              { label: "Socially", value: "socially" },
              { label: "Yes", value: "yes" },
            ]}
          />

          <ChipRadioGroup
            label="Alcohol"
            name="alcohol"
            defaultValue="no"
            options={[
              { label: "No", value: "no" },
              { label: "Socially", value: "socially" },
              { label: "Yes", value: "yes" },
            ]}
          />
        </div>

        {/* Section 3: Values & Expectations */}
        <div className="space-y-6">
          <h3 className="flex items-center gap-2 border-b border-outline-variant/50 pb-2 font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">
            <Icon name="favorite" className="text-[18px]" /> Values &amp; Expectations
          </h3>

          <SelectField
            id="relocate"
            name="relocate"
            label="Willingness to Relocate"
            placeholder="Select an option"
            required
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="open">Open to discussion</option>
          </SelectField>

          <SelectField
            id="hijab_status"
            name="hijab_status"
            label="Hijab Status"
            placeholder="Select status"
            hint="Female identifying users only"
            dimmed
          >
            <option value="wears">Wears Hijab</option>
            <option value="does_not_wear">Does not wear Hijab</option>
            <option value="planning">Planning to wear Hijab</option>
          </SelectField>
        </div>

        <div className="mt-8 border-t border-outline-variant/30 pt-8 text-center">
          <p className="font-body-md text-[14px] italic text-secondary">
            &quot;Every Muslim has a unique personal journey. MITAN values honesty, respect, and
            compatibility over perfection.&quot;
          </p>
        </div>

        <div className="flex w-full flex-col-reverse items-center justify-between gap-4 pt-6 md:flex-row">
          <Button type="button" variant="ghost" className="w-full md:w-auto" onClick={() => router.back()}>
            Back
          </Button>
          <Button type="submit" className="w-full md:w-auto">
            Continue
            <Icon name="arrow_forward" className="text-[18px]" />
          </Button>
        </div>
      </form>
    </div>
  );
}
