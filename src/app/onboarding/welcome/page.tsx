import type { Metadata } from "next";
import { WelcomeCard } from "@/components/onboarding/WelcomeCard";

export const metadata: Metadata = {
  title: "MITAN - Welcome",
};

const IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA0xA3yrIGcQmovp-TeBSWwT8kNs4ngrt4l_Icz2tvTj_CQjz59SH01BpcPZrIBH_1LbsZzcyi-SRoP62jq2ArNeeoecSbhTwLQtL4p-TjwLW85GteyC62-_oPKwWNQFsujQn0uGA87d0JiVCgHccu4cZvDDrkfabJvlyRr3QDLH3l7nTR36ubd3qNAZ9-ZQ-vWnBejuQnUFJAH5fW0UTbqQ-MHVU06sjk6tWSFwdzhEOqC7hs9p7uG6qW6DC2vBref34C-c4-UVw";

export default function OnboardingWelcomePage() {
  return (
    <>
      {/* TopNavBar — nav links suppressed for focused onboarding intent, brand only */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-desktop max-w-max-width mx-auto bg-background/80 backdrop-blur-md h-[88px]">
        <div className="text-headline-md font-headline-md font-bold tracking-tight text-primary">MITAN</div>
      </header>

      {/* Main Content: Dual Column Split Layout */}
      <main className="flex-grow flex flex-col md:flex-row mt-[88px] min-h-[calc(100vh-88px)]">
        {/* Left Pane: Imagery */}
        <section className="hidden md:flex md:w-1/2 relative bg-surface-container-low p-margin-desktop items-end">
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url('${IMAGE_URL}')` }}
            role="img"
            aria-label="A serene, high-key interior of a modern Muslim home or premium professional setting."
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
          <div className="relative z-20 text-white fade-in-up" data-visible="true">
            <p className="font-label-sm text-label-sm tracking-widest uppercase mb-4 opacity-80">EST. 2024</p>
            <h1 className="font-headline-xl text-headline-xl mb-4 max-w-lg">
              For Life,<br />Not Just For Now.
            </h1>
          </div>
        </section>

        {/* Right Pane: Welcome Card */}
        <section className="w-full md:w-1/2 flex min-h-[calc(100vh-88px)] items-center justify-center p-margin-mobile md:p-margin-desktop bg-surface-container-lowest">
          <WelcomeCard />
        </section>
      </main>
    </>
  );
}
