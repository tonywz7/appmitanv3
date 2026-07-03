"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

/**
 * Login form — pixel-perfect port of mitan-source/src/app/login/index.html
 * Centered card, no split layout. Matches the Stitch design exactly.
 */
export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="tonal-card rounded-xl border border-outline-variant/30 p-8 md:p-10">
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Email */}
        <div className="space-y-2">
          <label
            className="block font-body-sm text-body-sm font-bold text-on-surface"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="nama@email.com"
            className="w-full rounded-lg border border-outline-variant bg-white px-4 py-3 font-body-md text-body-md placeholder:text-outline/50 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label
            className="block font-body-sm text-body-sm font-bold text-on-surface"
            htmlFor="password"
          >
            Kata Sandi
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full rounded-lg border border-outline-variant bg-white px-4 py-3 font-body-md text-body-md placeholder:text-outline/50 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-outline-variant transition-colors hover:text-primary"
            >
              <span className="material-symbols-outlined">
                {showPassword ? "visibility_off" : "visibility"}
              </span>
            </button>
          </div>
        </div>

        {/* Remember & Forgot */}
        <div className="flex items-center justify-between">
          <label className="group flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-outline-variant text-primary transition-all focus:ring-primary/20"
            />
            <span className="font-body-sm text-body-sm text-on-surface-variant transition-colors group-hover:text-on-surface">
              Ingat Saya
            </span>
          </label>
          <Link
            href="/forgot-password"
            className="font-body-sm text-body-sm font-semibold text-primary transition-all hover:underline"
          >
            Lupa Kata Sandi?
          </Link>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-lg bg-primary py-4 font-label-md text-label-md text-on-primary shadow-sm transition-all duration-150 hover:bg-on-primary-fixed-variant active:scale-[0.98]"
        >
          Masuk
        </button>

        {/* Divider */}
        <div className="relative flex items-center py-4">
          <div className="flex-grow border-t border-outline-variant/40" />
          <span className="mx-4 flex-shrink font-body-sm text-body-sm text-on-surface-variant">
            atau
          </span>
          <div className="flex-grow border-t border-outline-variant/40" />
        </div>

        {/* Register link */}
        <div className="text-center">
          <p className="font-body-md text-body-md text-on-surface-variant">
            Belum punya akun?{" "}
            <Link href="/register" className="ml-1 font-bold text-primary hover:underline">
              Buat Akun
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
