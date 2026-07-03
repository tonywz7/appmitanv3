import Image from "next/image";
import Link from "next/link";

/**
 * Landing page — pixel-perfect port of mitan-source/src/app/landing/index.html
 * The design uses the "browser-in-browser" main-canvas aesthetic from the
 * Stitch export, including the slate-grey frame, rounded canvas, and the
 * Family-First Matrimony positioning.
 */
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="main-canvas">
        {/* ── Header ─────────────────────────────────────────────────── */}
        <header className="flex items-center justify-between border-b border-gray-100 px-10 py-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-mitan-teal">
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
              </svg>
            </div>
            <span className="text-xl font-extrabold uppercase tracking-tight text-gray-800">
              Mitan
            </span>
          </div>

          {/* Nav */}
          <nav className="hidden items-center space-x-8 text-sm font-semibold text-gray-700 md:flex">
            <a href="#" className="transition-colors hover:text-mitan-teal">Values</a>
            <a href="#" className="transition-colors hover:text-mitan-teal">How it Works</a>
            <a href="#" className="transition-colors hover:text-mitan-teal">Stories</a>
            <a href="#" className="transition-colors hover:text-mitan-teal">Pricing</a>
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-4">
            <Link
              href="/register"
              className="rounded-full bg-mitan-teal px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-200 transition-all hover:bg-emerald-600"
            >
              Start Your Journey
            </Link>
            <Link
              href="/login"
              className="rounded-full bg-gray-100 px-6 py-2.5 text-sm font-bold text-gray-800 transition-all hover:bg-gray-200"
            >
              Log In
            </Link>
          </div>
        </header>

        {/* ── Hero Section ───────────────────────────────────────────── */}
        <main className="grid items-center gap-12 px-10 py-16 md:grid-cols-2 md:py-24">
          {/* Left — Text */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-mitan-teal">
                Family-First Matrimony
              </span>
              <span className="h-1 w-1 rounded-full bg-mitan-teal" />
              <span className="text-[10px] font-medium text-emerald-600">Built with Wali Oversight</span>
            </div>

            {/* Headline */}
            <h1 className="text-6xl font-extrabold leading-[1.1] text-gray-900">
              Built for <span className="text-mitan-teal">Family</span>
              <br />
              &amp; Faith
            </h1>

            {/* Body */}
            <p className="max-w-md text-lg leading-relaxed text-gray-500">
              A community-centered matrimony platform designed for meaningful
              connection and respectful family involvement through our integrated
              Wali System.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/register"
                className="rounded-full bg-mitan-teal px-8 py-4 text-base font-bold text-white shadow-xl shadow-emerald-200 transition-transform hover:scale-105"
              >
                Start Your Journey
              </Link>
              <button className="flex items-center gap-2 rounded-full border border-gray-100 px-6 py-4 text-base font-bold text-gray-800 transition-colors hover:bg-gray-50">
                <svg
                  className="h-5 w-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                The Wali System
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {[
                  {
                    alt: "Family 1",
                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnIZSkZ0en4BaPNFIUmafz7_PYtOWWaSy3MkFh_ZHhQXwx6qcDxezflI3w4FybRVlCK4Iw9AXNoH9SVLPaF0dSrzm22H4Oovo3Wrl3ChzRW1a3zWnHOZeCPAM7dPVKMSwAEMy1NHDMYIWxAg7NKoA24MPHKSnXHuc0dEVt3_ESDP-IFMmaVeXEFvxr9xhaH-w3V6KuzAwYoXPzqadHpEy9KXMSiQh4C46sQ_rTgoO9gcx3m4kQ4wgUO2Z8g9wuuWWAN0DBy2eKjQ",
                    bg: "bg-gray-900",
                  },
                  {
                    alt: "Family 2",
                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAf9CG5ITo24YUE3PIGMzJ3a1PaSBhIXUBYcfk-DLQJz2TXwoZkv4e1kXY86_bfFggcYkEjtfO3HkzqyC2i5IhlqzXBLLwd610kTpoVOHms0NHvJpd6MZ0NTR8nhnPhAB8tq11vxNx2z8rBd19AUNg83eKO_kfCTfSrSQHSnc-QrZW4psHlqDwjXHVJipEXX1Tv3pqPZk2STO5LdPOVoj3YFFc-d9ryvArqDsKlkhdOxUf6JcTL32oHlwAyN1d4idvd1-935usOKA",
                    bg: "bg-gray-700",
                  },
                  {
                    alt: "Family 3",
                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOnUk-eiwqrj-2prAx8vC9GG5bosLGw3WVr9bwWC_5BBp7mml479PHq9aGdC9hRL35rOUSKuGFAZeigtiRSfBS_jgd_Qxnx_duKM29Cx-JnPFBjFNNv6U_CotH3mj3v9iASNG6okbqY7ae9Jx0K8hggKgZFzR4YdjjHSrIp_6ScviYP60OvZFQ2faVA0f_hyVS2tAbFknmtJuvgD5t-ivR0aQRIKu9lFqKuha948GSx5jUWLEHm-4KL0_62KiTtshVIVVY7P0Qhw",
                    bg: "bg-emerald-900",
                  },
                ].map((avatar) => (
                  <div
                    key={avatar.alt}
                    className={`h-10 w-10 overflow-hidden rounded-full border-2 border-white ${avatar.bg}`}
                  >
                    <Image
                      alt={avatar.alt}
                      src={avatar.src}
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400">
                Trusted by{" "}
                <span className="font-bold text-gray-700">2,400+</span> families
                this month
              </p>
            </div>
          </div>

          {/* Right — Image */}
          <div className="hero-image-container flex justify-end">
            <div className="hero-image-bg-shape" />
            <div className="relative z-10 max-w-sm overflow-hidden rounded-3xl shadow-2xl lg:max-w-md">
              <Image
                alt="Couple looking at each other"
                src="/images/hero-couple.png"
                width={480}
                height={560}
                className="h-auto w-full object-cover"
                priority
              />
              {/* Floating Verification Card */}
              <div className="landing-glass-card absolute bottom-6 left-6 right-6 flex items-center gap-4 rounded-2xl p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-mitan-teal">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Wali Verified</h4>
                  <p className="text-xs text-gray-600">Family-backed introduction</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* ── Footer / Trust Badges ───────────────────────────────────── */}
        <footer className="border-t border-gray-100 bg-gray-50/50 px-10 py-10">
          <p className="mb-8 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-mitan-teal">
            Uniting Communities Across
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60 grayscale">
            {["SINGAPORE", "MALAYSIA", "INDONESIA", "UK", "CANADA"].map((country) => (
              <span
                key={country}
                className="text-xl font-extrabold tracking-tighter text-gray-800"
              >
                {country}
              </span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
