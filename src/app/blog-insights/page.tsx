import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { NewsletterForm } from "@/components/public/NewsletterForm";

export const metadata: Metadata = {
  title: "Blog & Wawasan | MITAN Matrimony",
  description:
    "Panduan editorial, kisah inspiratif, dan wawasan seputar perjalanan menuju pernikahan yang sakinah. Temukan artikel terbaik dari tim MITAN.",
};

const CATEGORIES = [
  { label: "Semua", active: true },
  { label: "Ta'aruf", active: false },
  { label: "Pernikahan", active: false },
  { label: "Hubungan", active: false },
  { label: "Pengembangan Diri", active: false },
  { label: "Keamanan", active: false },
  { label: "Cerita Inspiratif", active: false },
  { label: "MITAN News", active: false },
];

const ARTICLE_CARDS = [
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHgAiUO_TbZPsGzh7E5kUKH0IUrVO4rw9T6CknomW8dcaOsugAEkZGD449sapxhGzWHFaiRta7WYlcZh9FCMfD9AFUp7LzUgNULCZVI-uKlqaM0jQiAiznVBYG2cTb6ePVsb0nrCreeuIHsybCooJkhJw4O6_BmhdP5y6h6WKfmZ1avnJOBIe9UH3l8AzydPsCh7WCMNnzsAUim1rNe3VTLmLPpauM4bzbeHmobZotDysZhc9nNrsaRT7aK7jVtfHap04jfp3xMA",
    category: "Ta'aruf",
    readTime: "4 min read • 10 Okt",
    title: "Etika Menghubungi Calon Pasangan di MITAN",
    excerpt:
      "Langkah awal yang sopan menentukan arah hubungan. Berikut panduan praktis memulai percakapan pertama...",
    author: "Sarah Az-Zahra",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6t3JYF5tXxOLQ1tN704N93ew7IGHP4VIAdkGWwukDMfblGrDK85eY94K5o2XvGGONGVXbv-xSPE_v5malRHo9Yf7TK6fQQxiR9s6nW3bOHgpnHGJd0wWcBpGMiP6SfGK6QogJwcn2g4VC73fStk3NK-nsXCI6vH2hSnnnfvQ8VwBOLzhi65eRrzPOkUAznt1TwrDMJEKdYoKx3fPNrjdqVfQVKMSikMeMzl1rlmeZ2c3BAZ4exUjhHBPMXHexXs3Lvqr2wuy-Cw",
    category: "Keamanan",
    readTime: "6 min read • 08 Okt",
    title: "Cara MITAN Menjaga Privasi Foto Anda",
    excerpt:
      "Keamanan data Anda adalah prioritas utama kami. Kenali teknologi 'Blurred Image' dan sistem verifikasi kami...",
    author: "Tim Keamanan MITAN",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAALmyZU_JLN1bvkBVS3u5B2iPGWzoZpLnoI00_bzNVwLW-HVMRTn0k6kJuRKR7Fg6dXaHBTide3EohS4b5Svtx_lncBvT9uRiTS8zT5Qpt4fo2q_vOFPpIcqxTU3Xei4MAvmMoerYSzYdEu6TeeQhWGXDzDcdKIlIMepjAowRtK7_rSORRsmJdEEgbHwxuPhc2E2shSDZu0VMfdEL8n65OOsMu4buqAi5dkZGzojEdW1KkneYDHaqb6n1SxE1w72fblP2Zn6ID6A",
    category: "Cerita Inspiratif",
    readTime: "8 min read • 05 Okt",
    title: "Kisah Sukses: Menemukan Jodoh dalam 3 Bulan",
    excerpt:
      '"Niat yang lurus membawa hasil yang berkah." Simak perjalanan inspiratif pasangan Ahmad dan Fitri...',
    author: "Redaksi Mitan",
  },
];

export default function BlogInsightsPage() {
  return (
    <div className="bg-surface text-on-surface">
      <Navbar />

      <main className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        {/* ── Hero Section ─────────────────────────────────────────────── */}
        <section className="grid items-center gap-gutter py-stack-lg lg:grid-cols-2 lg:py-24">
          {/* Left — Text */}
          <div className="order-2 space-y-stack-md lg:order-1">
            <h1 className="font-display-lg-mobile text-display-lg-mobile tracking-tight text-on-background lg:text-[64px] lg:leading-[72px]">
              Wawasan untuk Perjalanan Menuju Pernikahan
            </h1>
            <p className="max-w-lg font-body-lg text-body-lg text-on-surface-variant">
              Menemukan pasangan adalah awal. Membangun rumah tangga sakinah
              membutuhkan ilmu, kesabaran, dan niat yang tulus. Temukan panduan
              editorial kami untuk perjalanan spiritual Anda.
            </p>
            <div className="flex flex-wrap gap-stack-md pt-stack-sm">
              <button className="flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-label-md text-label-md text-on-primary transition-all hover:opacity-90 active:scale-95">
                Mulai Membaca
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>
              <Link
                href="/register"
                className="rounded-lg border border-outline px-8 py-4 font-label-md text-label-md text-primary transition-all hover:bg-surface-container-low active:scale-95"
              >
                Gabung MITAN
              </Link>
            </div>
          </div>

          {/* Right — Hero image (Stitch asset) */}
          <div className="order-1 lg:order-2">
            <div className="editorial-shadow relative h-[400px] overflow-hidden rounded-xl group lg:h-[600px]">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCehtHF30m1p3lB7-3h74gTdwMRrmrb198gFckrmXmoqrl_eDuDmJTlOFU7xq_sHAdYlWFNRyaoOBvwuXH3QqCUSQQA0cTCDW00tmyKbbNC05jgelGqh_adKVc3rUEvm0qmxWeqX9enAUGaYsHEd2vX_SgurkRH5Dbul9DjlsZ4LyRQUpx0Bl7pNbwrlbj1nguMfiPwiyMwyEji27wGdig7uOPkcslUuZl6SIcQoxxSOuDt_gNUJZfWSJ-fH-f_uduZQ0LzlJyZEA"
                alt="Pasangan Muslim berjalan di taman"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* ── Featured Article ─────────────────────────────────────────── */}
        <section className="py-stack-lg">
          <div className="editorial-shadow flex flex-col overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest lg:flex-row">
            {/* Image — Stitch asset */}
            <div className="h-80 overflow-hidden lg:h-auto lg:w-3/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAszNXJpDBEwxsU_UX7LPBK0VsE9ROeGHXDLlcgPgZDSohB-FjfdJZEbauHRXNrsOI-ok_tlD-q_KsI7ZZuojKfxXQoXiF4K2M3EmEbnbUChpozlmAQQSX3vA08e3JL-7hj4K95-vXpx8TCdCQ2I8tZdQqP5ie9uufGsgvYb9eVPHEGBTItzGDT8zDnUjE-aAtLyNO_VOVvCaKmzmPHZRf5aVk-Cu1JscUzILGvJTp2OlfRvq8dDyX7s23781jee0c6Lnn4AMM6DA"
                alt="Ruang shalat islami di rumah modern"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 lg:w-2/5 lg:p-12">
              <div className="mb-4 flex items-center gap-stack-sm">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-[12px] font-label-md uppercase tracking-wider text-primary">
                  Pernikahan
                </span>
                <span className="flex items-center gap-1 text-body-sm text-outline">
                  <span className="material-symbols-outlined text-[16px]">
                    schedule
                  </span>
                  5 min read
                </span>
              </div>

              <h2 className="mb-4 font-headline-md text-headline-md leading-tight text-on-surface">
                Membangun Fondasi Ibadah dalam Rumah Tangga
              </h2>
              <p className="mb-6 font-body-md text-body-md text-on-surface-variant">
                Pernikahan bukan sekadar penyatuan dua insan, melainkan
                komitmen untuk saling menguatkan dalam ketaatan. Pelajari
                bagaimana memulai kebiasaan ibadah bersama sejak hari pertama.
              </p>

              <div className="mb-8 flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-surface-container-high">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9SdpT7mouYVFYkzTEZfGlabWHjy4ARKUvWT8gshHn5ExJ9vtIBqqXUx6kuZRO4W4PnLkzpf-Pe3ac6aH8hSLA5R2uiI-Uf3XJOUg7Urm2IAVBKLQ8TzC3DAGbTni1tkCaHv8i9KBbKFXnDudbNbjXt1iHB1951zUEgt2jItULkdKu933MGOfv1vF5Ahszmzi0kDKmLYaCmEIgekqAKe6JsG6DhfZAk4fDEEjcyQjD8vIQ7dcwjFt_TlM7CLdSfqrhqWB20xloZw"
                    alt="Ustadz Hanafi"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-label-md text-on-surface">
                    Ustadz Hanafi
                  </p>
                  <p className="text-body-sm text-outline">12 Okt 2024</p>
                </div>
              </div>

              <button className="group flex items-center gap-2 font-label-md text-primary">
                Read Article
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* ── Category Filter ──────────────────────────────────────────── */}
        <section className="border-y border-outline-variant/30 py-stack-lg">
          <div className="flex flex-wrap items-center gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.label}
                className={`rounded-full px-6 py-2 font-label-md transition-all ${
                  cat.active
                    ? "bg-primary text-on-primary shadow-sm"
                    : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* ── Latest Articles Grid ─────────────────────────────────────── */}
        <section className="py-20">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface">
                Artikel Terbaru
              </h3>
              <p className="font-body-md text-on-surface-variant">
                Inspirasi segar untuk hari Anda.
              </p>
            </div>
            <button className="border-b-2 border-primary/20 pb-1 font-label-md text-primary transition-all hover:border-primary">
              Lihat Semua Artikel
            </button>
          </div>

          <div className="grid gap-gutter md:grid-cols-2 lg:grid-cols-3">
            {ARTICLE_CARDS.map((card) => (
              <article key={card.title} className="group cursor-pointer">
                <div className="editorial-shadow mb-6 h-64 overflow-hidden rounded-lg transition-all hover:shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-stack-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-[12px] font-label-md uppercase text-primary">
                      {card.category}
                    </span>
                    <span className="text-[12px] text-outline">
                      {card.readTime}
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm transition-colors group-hover:text-primary">
                    {card.title}
                  </h4>
                  <p className="line-clamp-2 font-body-sm text-body-sm text-on-surface-variant">
                    {card.excerpt}
                  </p>
                  <div className="flex items-center justify-between border-t border-outline-variant/30 pt-4">
                    <span className="text-body-sm font-semibold text-on-surface">
                      {card.author}
                    </span>
                    <span className="text-sm font-label-md text-primary">
                      Continue Reading
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Newsletter Section ──────────────────────────────────────── */}
        <section className="relative mb-20 overflow-hidden rounded-3xl bg-surface-container-high px-8 py-20 lg:px-20">
          {/* Decorative circles */}
          <div className="absolute -mr-32 -mt-32 right-0 top-0 h-64 w-64 rounded-full bg-primary/5" />
          <div className="absolute -mb-24 -ml-24 bottom-0 left-0 h-48 w-48 rounded-full bg-secondary-container/10" />

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-headline-md text-headline-md text-on-surface">
              Dapatkan Artikel Terbaru
            </h2>
            <p className="mb-8 font-body-md text-body-md text-on-surface-variant">
              Bergabunglah dengan ribuan pembaca lainnya untuk mendapatkan
              wawasan eksklusif seputar persiapan pernikahan Islami langsung di
              inbox Anda.
            </p>
            <NewsletterForm />
            <p className="mt-4 text-[12px] italic text-outline">
              Kami menjaga privasi Anda. Berhenti berlangganan kapan saja.
            </p>
          </div>
        </section>

        {/* ── Bottom CTA ──────────────────────────────────────────────── */}
        <section className="border-t border-outline-variant/30 py-20 text-center">
          <h2 className="mb-6 font-display-lg-mobile text-display-lg-mobile text-on-background md:font-display-lg md:text-display-lg">
            Siap Memulai Perjalanan Anda?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
            Ribuan profil yang terverifikasi dan serius sedang menunggu untuk
            memulai perjalanan baru bersama Anda.
          </p>
          <div className="flex flex-wrap justify-center gap-stack-md">
            <Link
              href="/register"
              className="rounded-lg bg-primary-container px-10 py-4 font-label-md text-label-md text-on-primary-container shadow-md transition-all hover:bg-primary hover:text-on-primary active:scale-95"
            >
              Buat Akun Sekarang
            </Link>
            <button className="rounded-lg border border-outline px-10 py-4 font-label-md text-label-md text-on-surface transition-all hover:bg-surface-container-low active:scale-95">
              Pelajari Cara Kerja
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
