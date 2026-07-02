import type { Metadata } from "next";
import Image from "next/image";
import { CreateNewPasswordForm } from "@/components/auth/CreateNewPasswordForm";

export const metadata: Metadata = {
  title: "Create New Password | MITAN",
};

const IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBMvuPIlluOoJKMYxWJFscLag54ZRJlZMuWYuhmpI3EDcQ9Yc_DG3FnaBBgjcvAvZCLAnJSuXxV65P0cVaZx0RRO-yuauPmsvJg5SuNph_5XD9xxl8TptcZi400CWmPH7KiC1oW9eupvsGKUHq8TOn7PBN6_Xx4z31K6hNdt-iVJGLdvlw-jV4Ays7TnLdNqUcCNDIqjPQIwNS7DOOKjaznMMWlIr0Z-y-Inj3kUdX08BKYUPOCMeIn2WglkLw_ZYxNqq8UMZoOjg";

export default function CreateNewPasswordPage() {
  return (
    <main className="flex min-h-screen">
      {/* Left Column: Visual Anchor */}
      <section className="relative hidden overflow-hidden bg-primary lg:flex lg:w-1/2">
        <Image src={IMAGE} alt="A serene architectural interior with soft natural sunlight." fill className="object-cover" priority />
        <div className="absolute inset-0 z-10 bg-black/20" />
        <div className="absolute left-12 top-12 z-20">
          <h1 className="font-headline-md text-headline-md font-bold tracking-tight text-white">MITAN</h1>
        </div>
        <div className="relative z-10 mt-auto w-full p-12">
          <div className="glass-panel max-w-sm rounded-xl p-8 fade-in-up" data-visible="true">
            <p className="mb-4 font-label-sm text-label-sm uppercase tracking-[0.2em] text-white/70">
              The Promise
            </p>
            <h2 className="mb-2 font-headline-lg text-headline-lg font-bold text-white">
              For Marriage, Not Dating
            </h2>
            <div className="my-6 h-px w-12 bg-white/30" />
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-white/60">
              EST. 2024
            </p>
          </div>
        </div>
      </section>

      {/* Right Column: Form */}
      <section className="flex w-full items-center justify-center bg-surface p-6 md:p-12 lg:w-1/2">
        <CreateNewPasswordForm />
      </section>
    </main>
  );
}
