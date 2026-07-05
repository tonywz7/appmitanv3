import type { Metadata } from "next";
import Image from "next/image";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";

export const metadata: Metadata = {
  title: "Reset Password | MITAN",
};

const IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCdu0SdLEKys3IUeaLvhlBxMtyea99A6P1GpLW_R7CkXAkVJ_DhqYcoAezbx186A-3-7uBvbdZT2PJyPVRbPWO4kT77dUJjrp4b0nyQXEknju3xYgyrBQyMZkNfQOInG7vVK4NzC8DK1mNrymfktV_hvasUUpexapTpxMLpMoGx9M2jjxRUcLuO2OvAq292xBI1EQQC56MJ1skSk43wNXO-QIefceYKtUxjYuVryfY17ZrcYmnzKc3Rkiz4tmeNkWMOHIL-3XPtsQ";

export default function ForgotPasswordPage() {
  return (
    <main className="flex min-h-screen w-full flex-col overflow-hidden lg:flex-row">
      {/* Left Column: Brand Imagery */}
      <section className="relative hidden min-h-screen w-full flex-col justify-between overflow-hidden p-12 lg:flex lg:w-1/2">
        <div className="absolute inset-0 z-0">
          <Image src={IMAGE} alt="A quiet, authentic moment shared in a sun-drenched minimalist space." fill className="object-cover" priority />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/10 to-black/55" />
        </div>
        <div className="relative z-20 flex items-center gap-3">
          <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path
              clipRule="evenodd"
              d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
          <h1 className="font-manrope text-2xl font-bold tracking-tight text-white">MITAN</h1>
        </div>
        <div className="relative z-20 mb-8 max-w-md">
          <p className="mb-4 font-jakarta text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            Est. 2024
          </p>
          <h2 className="font-manrope text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
            For Marriage,
            <br />
            Not Dating
          </h2>
        </div>
      </section>

      {/* Right Column: Form */}
      <section className="flex flex-1 flex-col items-center justify-center bg-white px-6 py-12 lg:px-20">
        <div className="mb-12 flex items-center gap-2 lg:hidden">
          <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path
              clipRule="evenodd"
              d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
          <h2 className="font-manrope text-xl font-bold tracking-tight">MITAN</h2>
        </div>

        <ForgotPasswordForm />
      </section>
    </main>
  );
}
