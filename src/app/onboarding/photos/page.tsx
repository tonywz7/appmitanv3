"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ONBOARDING_TOTAL_STEPS, SITE_NAME } from "@/lib/constants";

const PHOTO_COUNT = 6;
const MAIN_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA0xA3yrIGcQmovp-TeBSWwT8kNs4ngrt4l_Icz2tvTj_CQjz59SH01BpcPZrIBH_1LbsZzcyi-SRoP62jq2ArNeeoecSbhTwLQtL4p-TjwLW85GteyC62-_oPKwWNQFsujQn0uGA87d0JiVCgHccu4cZvDDrkfabJvlyRr3QDLH3l7nTR36ubd3qNAZ9-ZQ-vWnBejuQnUFJAH5fW0UTbqQ-MHVU06sjk6tWSFwdzhEOqC7hs9p7uG6qW6DC2vBref34C-c4-UVw";

export default function PhotosPage() {
  const router = useRouter();
  const [uploaded, setUploaded] = useState<boolean[]>(Array(PHOTO_COUNT).fill(false));

  const uploadedCount = uploaded.filter(Boolean).length;

  function handleFile(index: number) {
    setUploaded((prev) => {
      const next = [...prev];
      next[index] = true;
      return next;
    });
  }

  function handleRemove(index: number, e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setUploaded((prev) => {
      const next = [...prev];
      next[index] = false;
      return next;
    });
  }

  return (
    <div className="flex min-h-screen bg-background font-body-md text-on-background antialiased">
      {/* Left pane */}
      <div className="relative hidden w-1/2 bg-surface-container-highest lg:flex">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={MAIN_IMAGE} alt="A serene interior" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="relative z-10 flex h-full w-full flex-col justify-between p-12">
          <span className="font-headline-md text-headline-md font-bold tracking-tight text-white">
            {SITE_NAME}
          </span>
          <div className="max-w-md space-y-4">
            <h2 className="font-headline-xl text-headline-xl text-white">For Life, Not Just For Now</h2>
            <p className="font-body-lg text-body-lg text-white/90">
              A great photo is your first impression — make it count.
            </p>
          </div>
        </div>
      </div>

      {/* Right pane */}
      <div className="flex w-full items-start justify-center overflow-y-auto bg-surface-container-lowest p-6 md:p-12 lg:w-1/2">
        <div className="w-full max-w-md">
          <ProgressBar step={6} totalSteps={ONBOARDING_TOTAL_STEPS} className="mb-8" />

          <div className="mb-8 space-y-3">
            <h1 className="font-headline-md text-headline-md text-primary">Add Your Photos</h1>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Upload at least 1 clear, recent photo. Your main photo is blurred for privacy until you connect with a match.
            </p>
          </div>

          {/* Photo grid */}
          <div className="mb-8 grid grid-cols-3 gap-3">
            {uploaded.map((isUploaded, index) => (
              <label
                key={index}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl border-2 border-dashed border-outline-variant bg-surface-container transition-all hover:border-primary hover:bg-surface-container-low"
              >
                {isUploaded ? (
                  <>
                    <div className="flex h-full w-full flex-col items-center justify-center bg-primary/10">
                      <Icon name="image" className="text-primary text-[32px]" />
                      {index === 0 && (
                        <span className="mt-1 font-label-sm text-[10px] uppercase tracking-wider text-primary">Main</span>
                      )}
                    </div>
                    <button
                      onClick={(e) => handleRemove(index, e)}
                      className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/30 group-hover:opacity-100"
                    >
                      <Icon name="delete" className="text-white text-[24px]" />
                    </button>
                  </>
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-1">
                    <Icon name="add_photo_alternate" className="text-on-surface-variant text-[28px]" />
                    <span className="font-label-sm text-[10px] text-on-surface-variant">
                      {index === 0 ? "Main Photo" : `Photo ${index + 1}`}
                    </span>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={() => handleFile(index)}
                />
              </label>
            ))}
          </div>

          {/* Tips */}
          <div className="mb-8 rounded-xl bg-surface-container-low p-4">
            <p className="mb-2 font-label-md text-label-md text-on-surface">Photo tips</p>
            <ul className="space-y-1 font-body-sm text-body-sm text-on-surface-variant">
              <li className="flex items-center gap-2"><Icon name="check_circle" className="text-primary text-[16px]" />Use recent, clear photos showing your face</li>
              <li className="flex items-center gap-2"><Icon name="check_circle" className="text-primary text-[16px]" />Avoid sunglasses and heavy filters</li>
              <li className="flex items-center gap-2"><Icon name="check_circle" className="text-primary text-[16px]" />Include a variety of settings and styles</li>
            </ul>
          </div>

          <div className="space-y-4">
            <Button
              type="button"
              variant="primary"
              fullWidth
              disabled={uploadedCount === 0}
              onClick={() => router.push("/onboarding/review")}
            >
              Continue
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
