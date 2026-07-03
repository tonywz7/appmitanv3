import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Hubungi Kami | MITAN",
  description:
    "Punya pertanyaan atau masukan? Tim MITAN siap membantu Anda di setiap langkah perjalanan.",
};

const CONTACT_CARDS = [
  {
    icon: "support_agent",
    title: "Customer Support",
    description: "Butuh bantuan teknis atau bantuan akun? Tim kami siap melayani.",
    email: "support@mita.app",
    note: "Respons: 1-2 hari kerja",
  },
  {
    icon: "handshake",
    title: "Partnerships",
    description: "Mari bekerja sama untuk menciptakan koneksi yang lebih bermakna.",
    email: "partnership@mita.app",
    note: null,
  },
  {
    icon: "campaign",
    title: "Media & Press",
    description: "Untuk pertanyaan media dan kit press MITAN Matrimony.",
    email: "media@mita.app",
    note: null,
  },
  {
    icon: "work",
    title: "Careers",
    description:
      "There are currently no open positions, but we're always happy to hear from talented people.",
    email: "careers@mita.app",
    note: null,
  },
];

const COMMITMENT_ITEMS = [
  {
    icon: "favorite",
    title: "Respect",
    description:
      "Kami menjunjung tinggi rasa hormat dan martabat dalam setiap interaksi antar anggota komunitas.",
  },
  {
    icon: "lock",
    title: "Privacy",
    description:
      "Data pribadi Anda adalah hak Anda. Kami menggunakan enkripsi tingkat tinggi untuk melindunginya.",
  },
  {
    icon: "shield_person",
    title: "Safety",
    description:
      "Sistem verifikasi ketat kami memastikan bahwa Anda terhubung dengan individu yang nyata dan serius.",
  },
  {
    icon: "hub",
    title: "Meaningful Relationships",
    description:
      "Kami mengutamakan kualitas daripada kuantitas untuk membantu Anda menemukan pasangan hidup sejati.",
  },
];

const QUICK_LINKS = [
  { icon: "help_center", label: "FAQ", href: "/faq" },
  { icon: "verified_user", label: "Trust & Safety", href: "#" },
  { icon: "auto_stories", label: "Cara Kerja", href: "#" },
  { icon: "rss_feed", label: "Blog", href: "/blog" },
  { icon: "policy", label: "Privacy Policy", href: "/keamanan-privasi" },
  { icon: "gavel", label: "Terms of Service", href: "#" },
];

/**
 * Contact page — pixel-perfect port of mitan-source/src/app/hubungi-kami/index.html
 */
export default function HubungiKamiPage() {
  return (
    <div className="overflow-x-hidden bg-surface text-on-surface antialiased">
      <Navbar />

      <main className="pt-24">
        {/* ── 1. Hero Section ─────────────────────────────────────── */}
        <section className="mx-auto max-w-container-max px-margin-mobile py-16 md:px-margin-desktop md:py-24">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Text */}
            <div className="space-y-8">
              <h1 className="font-display-lg leading-tight text-display-lg-mobile text-on-surface md:text-display-lg">
                Kami Siap Membantu
              </h1>
              <p className="max-w-xl font-body-lg text-body-lg text-on-surface-variant">
                Punya pertanyaan, masukan, atau membutuhkan bantuan? Tim MITAN
                siap membantu Anda. Kami siap mendengar dan membantu setiap
                langkah perjalanan Anda.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-label-md text-label-md text-white transition-all hover:bg-primary-container active:scale-95"
                >
                  Hubungi Kami
                  <span className="material-symbols-outlined text-base">arrow_downward</span>
                </a>
                <a
                  href="#help-center"
                  className="rounded-lg border-2 border-primary px-8 py-4 font-label-md text-label-md text-primary transition-all hover:bg-surface-container active:scale-95"
                >
                  Baca FAQ
                </a>
              </div>
            </div>

            {/* Image — Stitch asset */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-ambient lg:aspect-auto lg:h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4Qz0fcvDLax3Qy8yOV0scQ94cDQHVYpuGLfAaFufz9jMqZH2x5TIt1WPaLMLdj3hFgNl6uLsJbaShxe2P120XWi54Zyq8km9hFntel19s81iEFszg5zSjjr-uGrw1wFqWkiF7Oys7elivjxA0q_UbuG6B-oJ74zxTMf87_5dTlq0gYWxS5dsRdBa92O649ZKkF4CJIUq7UyHMIaDsXqKZKlHCj6CLysbJvBnKfa5xNR9iEUTkf3QIdGPrq-XsynX-K5dyL1tPyg"
                alt="Tim customer success MITAN"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* ── 2. Contact Options ──────────────────────────────────── */}
        <section className="bg-surface-container-low py-20">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-4">
              {CONTACT_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="flex h-full flex-col justify-between rounded-lg border border-outline-variant/30 bg-white p-8 shadow-ambient transition-all hover:-translate-y-0.5 hover:shadow-[0px_8px_30px_rgba(26,54,54,0.08)]"
                >
                  <div>
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="material-symbols-outlined">{card.icon}</span>
                    </div>
                    <h3 className="mb-2 font-headline-sm text-headline-sm">{card.title}</h3>
                    <p className="mb-6 font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
                      {card.description}
                    </p>
                  </div>
                  <div className="border-t border-outline-variant/30 pt-4">
                    <a
                      href={`mailto:${card.email}`}
                      className="font-label-md text-label-md text-primary hover:underline"
                    >
                      {card.email}
                    </a>
                    {card.note && (
                      <p className="mt-1 text-xs italic text-outline">{card.note}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. Contact Form & Map ───────────────────────────────── */}
        <section
          className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop"
          id="contact-form"
        >
          <div className="flex flex-col items-start gap-16 lg:flex-row">
            {/* Form */}
            <div className="w-full lg:w-3/5">
              <div className="rounded-xl border border-outline-variant/30 bg-white p-8 shadow-ambient md:p-12">
                <div className="mb-10">
                  <h2 className="mb-2 font-headline-md text-headline-md">Kirim Pesan</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    We usually respond within 1–2 business days.
                  </p>
                </div>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="block font-body-sm font-bold text-on-surface">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        className="w-full rounded-lg border border-outline-variant bg-white px-4 py-3 font-body-md outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block font-body-sm font-bold text-on-surface">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="email@example.com"
                        className="w-full rounded-lg border border-outline-variant bg-white px-4 py-3 font-body-md outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="block font-body-sm font-bold text-on-surface">
                        Subject
                      </label>
                      <input
                        type="text"
                        placeholder="What can we help with?"
                        className="w-full rounded-lg border border-outline-variant bg-white px-4 py-3 font-body-md outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block font-body-sm font-bold text-on-surface">
                        Category
                      </label>
                      <select className="w-full appearance-none rounded-lg border border-outline-variant bg-white px-4 py-3 font-body-md outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary">
                        <option>Account Assistance</option>
                        <option>Technical Issue</option>
                        <option>Membership &amp; Billing</option>
                        <option>Privacy Question</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block font-body-sm font-bold text-on-surface">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Tell us more about your inquiry..."
                      className="w-full resize-none rounded-lg border border-outline-variant bg-white px-4 py-3 font-body-md outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-12 py-4 font-label-md text-label-md text-white shadow-lg transition-all hover:bg-primary-container active:scale-95 md:w-auto"
                  >
                    Kirim Pesan
                    <span className="material-symbols-outlined text-sm">send</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Map & Address */}
            <div className="w-full space-y-8 lg:w-2/5">
              {/* Map image — Stitch asset */}
              <div className="h-80 w-full overflow-hidden rounded-xl border border-outline-variant/30 shadow-ambient lg:h-96">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8DC1znLw8b2i9XIu_pJKy0fCFky9sB4WEX_LsoSZETCIYLbi1sOj0fK3ujfGcB_zXHzoqcIhE6sYTYEqMFKOalyuHTTc7qs4ciYTvbeGKWcWO0VpYTSPuPA2PSZrRSC1m8b2hsAAHQY32r44bPdb42UxS3DDMRAQ_ejuke4PfX5bqZ7z2wt1PebuP1Xly5ZQ-QA8mV7CLHAdR0jlCle4qGyTtU4jCTxvhgKwA_dOS8JetYuxT23jZAw-DgAcraWH7YnDJjhKWQw"
                  alt="Peta lokasi kantor MITAN di Jakarta"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Address */}
              <div className="space-y-6">
                <h4 className="font-headline-sm text-headline-sm">Kunjungi Kantor Kami</h4>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <p className="font-body-md text-on-surface-variant">
                    Level 25, Menara MITAN,
                    <br />
                    Jl. Sudirman Kav. 52-53,
                    <br />
                    Jakarta Selatan, 12190
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                  <p className="font-body-md text-on-surface-variant">
                    Senin - Jumat, 09:00 - 18:00 WIB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. Help Center Quick Links ──────────────────────────── */}
        <section className="bg-surface-container py-24" id="help-center">
          <div className="mx-auto max-w-container-max px-margin-mobile text-center md:px-margin-desktop">
            <h2 className="mb-16 font-headline-md text-headline-md">Pusat Bantuan Cepat</h2>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
              {QUICK_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group rounded-lg bg-white p-6 shadow-ambient transition-all hover:-translate-y-0.5 hover:shadow-[0px_8px_30px_rgba(26,54,54,0.08)]"
                >
                  <span className="material-symbols-outlined mb-4 block text-primary transition-transform group-hover:scale-110">
                    {link.icon}
                  </span>
                  <span className="font-label-md text-label-md">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. Community Commitment ─────────────────────────────── */}
        <section className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-headline-md text-headline-md">
              Komitmen Kami kepada Komunitas
            </h2>
            <p className="mx-auto max-w-2xl font-body-md text-body-md text-on-surface-variant">
              Kami membangun MITAN dengan landasan kepercayaan. Prinsip-prinsip
              ini memandu setiap interaksi dan layanan yang kami berikan kepada
              Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
            {COMMITMENT_ITEMS.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-6 rounded-xl border border-outline-variant/30 bg-surface-container-low p-8"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                  <h4 className="mb-2 font-headline-sm text-headline-sm">{item.title}</h4>
                  <p className="font-body-md text-on-surface-variant">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. Final CTA ────────────────────────────────────────── */}
        <section className="px-margin-mobile py-24 md:px-margin-desktop">
          <div className="relative mx-auto max-w-container-max overflow-hidden rounded-3xl bg-primary p-12 text-center text-white shadow-2xl md:p-20">
            <div className="relative z-10 space-y-8">
              <h2 className="mx-auto max-w-3xl font-display-lg leading-tight text-display-lg-mobile md:text-display-lg">
                Siap Memulai Perjalanan yang Lebih Bermakna?
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  href="/register"
                  className="rounded-lg bg-secondary-container px-10 py-4 font-label-md text-label-md text-on-secondary-container shadow-md transition-all hover:brightness-105 active:scale-95"
                >
                  Buat Akun
                </Link>
                <button className="rounded-lg border-2 border-white px-10 py-4 font-label-md text-label-md text-white transition-all hover:bg-white/10 active:scale-95">
                  Pelajari Cara Kerja
                </button>
              </div>
            </div>
            {/* Decorative blobs */}
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary-fixed/20 blur-3xl" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
