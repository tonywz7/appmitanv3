import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FaqAccordion } from "@/components/public/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ | MITAN - Premium Matrimony",
  description:
    "Pertanyaan yang Sering Diajukan seputar keamanan, verifikasi, dan cara kerja MITAN Matrimony.",
};

/**
 * FAQ page — pixel-perfect port of mitan-source/src/app/faq/index.html
 */
export default function FaqPage() {
  return (
    <div className="bg-surface text-on-background">
      <Navbar />

      <main>
        {/* ── Hero Section ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden pb-20 pt-24">
          {/* Ambient blob */}
          <div className="absolute right-0 top-0 -z-10 -translate-y-1/4 translate-x-1/4 opacity-20">
            <div className="h-[600px] w-[600px] rounded-full bg-primary-container blur-[120px]" />
          </div>

          <div className="mx-auto max-w-container-max px-margin-desktop text-center">
            <span className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-label-md uppercase tracking-widest text-primary">
              Pusat Bantuan
            </span>
            <h1 className="mx-auto mb-8 max-w-3xl font-display-lg text-display-lg text-on-surface">
              Pertanyaan yang Sering Diajukan
            </h1>
            <p className="mx-auto mb-12 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
              Keamanan dan privasi Anda adalah prioritas utama kami. Temukan
              jawaban seputar proses verifikasi ketat, perlindungan data, dan
              cara menemukan pasangan yang tepat di MITAN.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <Link
                href="/register"
                className="w-full rounded-lg bg-primary px-10 py-4 text-lg font-headline-sm text-white shadow-lg transition-all hover:bg-primary/90 active:scale-95 md:w-auto"
              >
                Buat Akun Sekarang
              </Link>
              <Link
                href="/hubungi-kami"
                className="w-full rounded-lg border border-outline-variant px-10 py-4 text-lg font-headline-sm text-on-surface transition-all hover:bg-white active:scale-95 md:w-auto"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </section>

        {/* ── Search & Filter ──────────────────────────────────────── */}
        <section className="pb-12">
          <div className="mx-auto max-w-container-max px-margin-desktop">
            {/* Search bar */}
            <div className="relative mx-auto mb-12 max-w-2xl">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
                search
              </span>
              <input
                type="text"
                placeholder="Cari bantuan (misal: 'verifikasi', 'keamanan')"
                className="w-full rounded-xl border border-outline-variant bg-white py-4 pl-12 pr-4 shadow-sm outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Category chips */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Semua", active: true },
                { label: "Akun", active: false },
                { label: "Verifikasi", active: false },
                { label: "Privasi", active: false },
                { label: "Matching", active: false },
                { label: "Percakapan", active: false },
                { label: "Keamanan", active: false },
              ].map((chip) => (
                <button
                  key={chip.label}
                  className={`rounded-full border px-6 py-2 font-label-md transition-all hover:border-primary ${
                    chip.active
                      ? "border-primary bg-primary text-white"
                      : "border-outline-variant bg-white text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ Accordion ─────────────────────────────────────────── */}
        <section className="py-12">
          <div className="mx-auto max-w-3xl px-margin-desktop">
            <FaqAccordion />
          </div>
        </section>

        {/* ── Still Need Help? ──────────────────────────────────────── */}
        <section className="py-20">
          <div className="mx-auto max-w-container-max px-margin-desktop">
            <div className="glass-panel relative flex flex-col items-center gap-12 overflow-hidden rounded-[32px] border border-white/50 p-10 md:flex-row md:p-16">
              <div className="z-10 flex-1 space-y-6">
                <h2 className="font-headline-md text-headline-md text-on-surface">
                  Tidak menemukan jawaban yang Anda cari?
                </h2>
                <p className="max-w-md font-body-lg text-body-lg text-on-surface-variant">
                  Tim dukungan pelanggan kami yang ramah siap membantu Anda
                  24/7. Jangan ragu untuk menghubungi kami untuk pertanyaan apa
                  pun.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href="/hubungi-kami"
                    className="flex items-center gap-2 rounded-xl bg-primary px-8 py-3 font-label-md text-label-md text-white shadow-md transition-all hover:bg-primary/90 active:scale-95"
                  >
                    <span className="material-symbols-outlined text-xl">headset_mic</span>
                    Hubungi Tim Kami
                  </Link>
                  <button className="flex items-center gap-2 rounded-xl border border-outline px-8 py-3 font-label-md text-label-md text-on-surface transition-all hover:bg-white active:scale-95">
                    <span className="material-symbols-outlined text-xl">mail</span>
                    Kirim Email
                  </button>
                </div>
              </div>

              {/* Support image — Stitch asset */}
              <div className="relative w-full max-w-sm flex-1">
                <div className="relative flex aspect-square w-full items-center justify-center">
                  <div className="absolute inset-0 animate-pulse rounded-full bg-primary/5 blur-3xl" />
                  <div className="relative z-10 h-full w-full overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 rotate-3 hover:rotate-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbFztZeGu1o-zTwchJLxNJTjhE9v1ghHS21QqyN78YoOvnY02BwYIntnHccLpzz-HHQM_sKTokr0ohQS-8WS9l3BP1CVxskAmNWhNmekdpIqOszquvGVp3QtQIsouykRRffHJiHrZIdLeogf7WRAAloGIMCON6YFbDSb6c2JhpWUT7EHJVERQzvDBUvMtjcPR3dcS5gqpaxrIuXKs27Vb_Aix6phUomBTZjGLhZECSKvhs5PBel4SJM5BUT869gzrQhMux_LDx_Q"
                      alt="Tim dukungan pelanggan MITAN yang ramah"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-primary py-24 text-white">
          {/* Dot pattern overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative z-10 mx-auto max-w-container-max px-margin-desktop text-center">
            <h2 className="mb-6 font-display-lg text-display-lg">
              Siap Memulai Perjalanan Anda?
            </h2>
            <p className="mx-auto mb-12 max-w-2xl font-body-lg text-body-lg text-primary-fixed opacity-90">
              Bergabunglah dengan ribuan individu yang telah menemukan koneksi
              bermakna dan mulailah babak baru dalam hidup Anda hari ini.
            </p>
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <Link
                href="/register"
                className="w-full rounded-full bg-white px-12 py-5 text-lg font-headline-sm text-primary shadow-xl transition-all hover:-translate-y-1 hover:bg-surface-bright active:scale-95 md:w-auto"
              >
                Gabung MITAN Sekarang
              </Link>
              <button className="w-full rounded-full border-2 border-white/30 px-12 py-5 text-lg font-headline-sm text-white transition-all hover:bg-white/10 active:scale-95 md:w-auto">
                Pelajari Cara Kerja
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
