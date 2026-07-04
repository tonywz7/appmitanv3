import type { Metadata } from "next";
import { ReligiousProfileForm } from "@/components/onboarding/ReligiousProfileForm";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Profil Agama | MITAN",
};

// Stitch export image — minimalist mosque interior, soft natural light
const IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAoDvWjCjWYF9GH1Q1i-uHVVgW633cOa9ExiWUJhnGMRP_aZWlfnjgaKgZc-cQkTJzueAq_zex8OjTjRBGd0oYKFOwJ0Nf86YHnJ310iOYECd4EiVXpdKaMRKF1EuU3nQK8b5lBaRF6jjFzOCwfsOR83FsjLKp3mH3ClB1p5cCeXiOIKI0nqPrZHpZ7bJtSVFx0YjP6phGo5yyVeOLGL_IlLEXtyDh-8RRlMOsKK4h0F0D2Lr4s-Rfaou5RRQscwGJinbYGNKHWZA";

export default function ReligiousProfilePage() {
  return (
    <div className="flex min-h-screen select-none bg-surface font-body-md text-on-surface antialiased">
      {/* Mobile top nav */}
      <nav className="fixed top-0 z-50 flex h-[72px] w-full items-center justify-between border-b border-outline-variant bg-background/80 px-margin-mobile backdrop-blur-md md:hidden">
        <span className="font-headline-md text-headline-md font-bold tracking-tight text-primary">
          {SITE_NAME}
        </span>
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
          Step 3 of 7
        </span>
      </nav>

      {/* Main Container */}
      <main className="flex h-screen w-full flex-col pt-[72px] md:flex-row md:pt-0">
        {/* Left Pane — background-image div with gradient nested inside, matching Stitch HTML */}
        <div className="relative hidden h-full flex-col justify-between overflow-hidden border-r border-outline-variant bg-surface-container-low p-12 md:flex md:w-1/2 lg:w-[45%]">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            role="img"
            aria-label="Interior masjid modern yang tenang dengan cahaya alami lembut"
            style={{ backgroundImage: `url('${IMAGE_URL}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent mix-blend-multiply" />
          </div>
          <div className="relative z-10 flex items-start justify-between text-white">
            <div className="font-headline-md text-headline-md font-bold tracking-tight">
              {SITE_NAME}
            </div>
            <div className="font-label-sm text-label-sm uppercase tracking-widest opacity-80">
              EST. 2024
            </div>
          </div>
          <div className="relative z-10 text-white">
            <h1 className="mb-4 font-headline-xl text-headline-xl">
              For Life,
              <br />
              Not Just For Now.
            </h1>
            <p className="max-w-md font-body-lg text-body-lg opacity-90">
              Finding a partner who shares your devotion and values requires intention, not speed.
            </p>
          </div>
        </div>

        {/* Right Pane: Form */}
        <div className="flex h-full w-full flex-col items-center justify-center overflow-y-auto bg-background p-margin-mobile md:w-1/2 md:p-margin-desktop lg:w-[55%]">
          <ReligiousProfileForm />
          <div className="h-12 md:hidden" />
        </div>
      </main>
    </div>
  );
}
