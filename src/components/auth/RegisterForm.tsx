"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type StrengthLevel = 0 | 1 | 2 | 3 | 4;

function getStrength(password: string): StrengthLevel {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return score as StrengthLevel;
}

const STRENGTH_COLORS = ["", "bg-error", "bg-secondary-container", "bg-primary-container", "bg-primary"];
const STRENGTH_LABELS = ["", "Sangat Lemah", "Lemah", "Cukup Kuat", "Sangat Kuat"];

/**
 * Register form — pixel-perfect port of mitan-source/src/app/register/index.html
 * Centered card with password strength indicator and Material Symbols icons.
 */
export function RegisterForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const strength = password.length === 0 ? 0 : getStrength(password);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/onboarding/welcome");
  }

  return (
    <div className="premium-card-shadow w-full rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-8 transition-all duration-500 md:p-12">
      <header className="mb-8 text-center">
        <h1 className="font-headline-md text-headline-md text-on-surface mb-2">
          Buat Akun Baru
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Mulai perjalanan Anda dengan niat yang murni.
        </p>
      </header>

      <form className="space-y-6" id="registerForm" onSubmit={handleSubmit}>
        {/* Email */}
        <div className="space-y-2">
          <label
            className="block font-body-sm text-body-sm font-bold text-on-surface-variant"
            htmlFor="email"
          >
            Email
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
              mail
            </span>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="nama@email.com"
              required
              className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest py-3 pl-12 pr-4 font-body-md text-body-md outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary-container"
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label
            className="block font-body-sm text-body-sm font-bold text-on-surface-variant"
            htmlFor="password"
          >
            Kata Sandi
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
              lock
            </span>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Min. 8 karakter"
              required
              minLength={8}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest py-3 pl-12 pr-12 font-body-md text-body-md outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary-container"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-outline transition-colors hover:text-primary"
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                {showPassword ? "visibility_off" : "visibility"}
              </span>
            </button>
          </div>

          {/* Strength bars */}
          <div className="mt-2 flex gap-1">
            {[1, 2, 3, 4].map((bar) => (
              <div
                key={bar}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  strength >= bar && strength > 0
                    ? STRENGTH_COLORS[strength]
                    : "bg-surface-container-highest"
                }`}
              />
            ))}
          </div>
          <p
            className={`mt-1 text-[12px] font-body-sm ${
              strength > 0
                ? strength < 3
                  ? "font-bold text-secondary"
                  : "font-bold text-primary"
                : "text-on-surface-variant"
            }`}
          >
            {strength === 0
              ? "Gunakan kombinasi huruf, angka, dan simbol."
              : STRENGTH_LABELS[strength]}
          </p>
        </div>

        {/* Confirm Password */}
        <div className="space-y-2">
          <label
            className="block font-body-sm text-body-sm font-bold text-on-surface-variant"
            htmlFor="confirm-password"
          >
            Konfirmasi Kata Sandi
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
              lock_reset
            </span>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              placeholder="Ulangi kata sandi"
              required
              minLength={8}
              className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest py-3 pl-12 pr-4 font-body-md text-body-md outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary-container"
            />
          </div>
        </div>

        {/* Agreements */}
        <div className="space-y-3 pt-2">
          <label className="group flex cursor-pointer items-start gap-3">
            <input
              id="terms"
              type="checkbox"
              required
              className="peer mt-0.5 h-5 w-5 rounded border-outline-variant text-primary transition-all focus:ring-primary-container"
            />
            <span className="font-body-sm text-body-sm text-on-surface-variant transition-colors group-hover:text-on-surface">
              Saya menyetujui{" "}
              <a href="#" className="font-bold text-primary hover:underline">
                Syarat &amp; Ketentuan
              </a>
            </span>
          </label>
          <label className="group flex cursor-pointer items-start gap-3">
            <input
              id="privacy"
              type="checkbox"
              required
              className="peer mt-0.5 h-5 w-5 rounded border-outline-variant text-primary transition-all focus:ring-primary-container"
            />
            <span className="font-body-sm text-body-sm text-on-surface-variant transition-colors group-hover:text-on-surface">
              Saya menyetujui{" "}
              <a href="#" className="font-bold text-primary hover:underline">
                Kebijakan Privasi
              </a>
            </span>
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-4 font-bold text-on-primary shadow-lg transition-all active:scale-[0.98] hover:bg-primary/90"
        >
          <span>Buat Akun</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </form>

      {/* Sign in link */}
      <div className="mt-8 text-center">
        <p className="font-body-md text-body-md text-on-surface-variant">
          Sudah punya akun?{" "}
          <Link href="/login" className="font-bold text-primary transition-all hover:underline">
            Masuk
          </Link>
        </p>
      </div>
    </div>
  );
}
