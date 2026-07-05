import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export function WelcomeCard() {
  return (
    <div
      className="w-full max-w-md rounded-xl border border-outline-variant bg-surface-container-lowest p-card-p shadow-[0_4px_20px_rgba(26,54,54,0.04)] fade-in-up"
      data-visible="true"
      style={{ animationDelay: "0.2s" }}
    >
      {/* Progress bar — Stitch: w-1/5 (step 1 of 5 displayed segments) */}
      <div className="mb-8 h-1 w-full overflow-hidden rounded-full bg-surface-container-highest">
        <div className="h-full w-1/5 rounded-full bg-primary" />
      </div>

      <div className="mb-8">
        <h2 className="mb-4 font-headline-lg text-headline-lg text-primary">Welcome to MITAN</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          We&apos;re delighted to have you here. Over the next few minutes, we&apos;ll help you
          build a profile that reflects who you are and what you&apos;re looking for in a life
          partner. The more thoughtfully you complete your profile, the better your future
          recommendations will be.
        </p>
      </div>

      <div className="mb-6 flex items-center gap-2 text-on-secondary-container">
        <Icon name="schedule" />
        <span className="font-label-md text-label-md">5–7 minutes</span>
      </div>

      <div className="mb-8 flex flex-col gap-4">
        <Link
          href="/onboarding/personal-information"
          className="flex w-full items-center justify-center rounded-lg bg-success-green py-btn-py px-btn-px font-body-md font-semibold text-white transition-transform duration-200 hover:scale-95 hover:bg-success-green/90"
        >
          Start Profile
        </Link>
        <div className="flex flex-col items-center">
          <Link
            href="/"
            className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest py-btn-py px-btn-px text-center font-body-md font-semibold text-primary transition-colors duration-200 hover:border-outline"
          >
            Complete Later
          </Link>
          <p className="mt-2 text-center font-label-sm text-label-sm text-on-primary-container">
            Some features may be limited until your profile is complete.
          </p>
        </div>
      </div>

      <div className="space-y-2 border-t border-outline-variant pt-6 text-center">
        <div className="mb-2 flex items-center justify-center gap-2 text-on-secondary-container">
          <Icon name="lock" />
          <Icon name="shield_person" />
          <Icon name="security" />
        </div>
        <p className="font-label-sm text-label-sm uppercase text-on-secondary-container">
          Your information is private. You control what is shared. Your data is protected.
        </p>
      </div>
    </div>
  );
}
