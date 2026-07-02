import type { Metadata } from "next";
import Image from "next/image";
import { WelcomeCard } from "@/components/onboarding/WelcomeCard";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Welcome | MITAN",
};

const IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA0xA3yrIGcQmovp-TeBSWwT8kNs4ngrt4l_Icz2tvTj_CQjz59SH01BpcPZrIBH_1LbsZzcyi-SRoP62jq2ArNeeoecSbhTwLQtL4p-TjwLW85GteyC62-_oPKwWNQFsujQn0uGA87d0JiVCgHccu4cZvDDrkfabJvlyRr3QDLH3l7nTR36ubd3qNAZ9-ZQ-vWnBejuQnUFJAH5fW0UTbqQ-MHVU06sjk6tWSFwdzhEOqC7hs9p7uG6qW6DC2vBref34C-c4-UVw";

export default function OnboardingWelcomePage() {
  return (
    <>
      <header className="fixed top-0 z-50 mx-auto flex h-[88px] w-full max-w-max-width items-center justify-between bg-background/80 px-margin-desktop backdrop-blur-md">
        <div className="font-headline-md text-headline-md font-bold tracking-tight text-primary">
          {SITE_NAME}
        </div>
        {/* Nav links and CTA intentionally omitted — focused, linear onboarding intent */}
      </header>

      <main className="flex min-h-[calc(100vh-88px)] flex-grow flex-col pt-[88px] md:flex-row">
        <section className="relative hidden items-end bg-surface-container-low p-margin-desktop md:flex md:w-1/2">
          <Image src={IMAGE} alt="A serene, high-key interior of a modern Muslim home." fill className="object-cover" priority />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="relative z-20 text-white fade-in-up" data-visible="true">
            <p className="mb-4 font-label-sm text-label-sm uppercase tracking-widest opacity-80">
              EST. 2024
            </p>
            <h1 className="max-w-lg font-headline-xl text-headline-xl">
              For Life,
              <br />
              Not Just For Now.
            </h1>
          </div>
        </section>

        <section className="flex w-full items-center justify-center bg-surface-container-lowest p-margin-mobile md:w-1/2 md:p-margin-desktop">
          <WelcomeCard />
        </section>
      </main>
    </>
  );
}
