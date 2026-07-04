import type { Metadata } from "next";
import { PersonalInformationForm } from "@/components/onboarding/PersonalInformationForm";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Informasi Pribadi | MITAN",
};

// Stitch export image URL — Indonesian Islamic architecture, soft natural light
const IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCULoMP5Xed0Gqx-PYcYKolNRxxeaDGNV3GaxInmv3MFAP-FnJvEz4dVCv4WTkJZPP-i0oEjH2-XhCKVyz9oCf9yP8KUTyC0SYg8Z8EGyEcYySxB1Yp8Yzx-uGMs7UqxO9n6uuNwpcSV9Uoky5dJ1ZO_HPxL_CTvhFB2LijFSXzhGsLZIA3dX3xzgmXwrzOOcDw8BBTcyVGNNBwd0xFlTTAPRB4V2h-gB6Jt8TGK4DRAwiEYmgHe1dxVp1EWqoJbYv45usDOdGlFA";

export default function PersonalInformationPage() {
  return (
    <div className="flex min-h-screen bg-background font-body-md text-on-background antialiased">
      {/* Left Pane: Imagery & Branding — background-image div matches Stitch structure exactly */}
      <div className="relative hidden w-1/2 bg-surface-container-highest lg:flex">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          role="img"
          aria-label="Foto arsitektur masjid modern dengan cahaya alami yang lembut"
          style={{ backgroundImage: `url('${IMAGE_URL}')` }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        {/* Content Overlay */}
        <div className="relative z-10 flex h-full w-full flex-col justify-between p-12">
          <div className="flex items-center space-x-2">
            <span className="font-headline-md text-headline-md font-bold tracking-tight text-white">
              {SITE_NAME}
            </span>
          </div>
          <div className="max-w-md space-y-4 fade-in-up" data-visible="true">
            <h2 className="font-headline-xl text-headline-xl text-white">
              For Life, Not Just For Now
            </h2>
            <p className="font-body-lg text-body-lg text-white/90">
              A thoughtful approach to finding lifelong companionship within the Ummah.
            </p>
            <div className="pt-8">
              <span className="rounded-full border border-white/30 px-3 py-1 font-label-sm text-label-sm uppercase tracking-widest text-white/70 backdrop-blur-sm">
                EST. 2024
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Pane: Onboarding Form */}
      <div className="flex w-full items-center justify-center overflow-y-auto bg-surface-container-lowest p-6 md:p-12 lg:w-1/2">
        <PersonalInformationForm />
      </div>
    </div>
  );
}
