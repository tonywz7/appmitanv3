import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PrivacyFaqAccordion } from "@/components/public/PrivacyFaqAccordion";

export const metadata: Metadata = {
  title: "Keamanan & Privasi | MITAN Matrimony",
  description:
    "Di MITAN, kami membangun lingkungan yang terpercaya dan bermartabat. Pelajari bagaimana kami menjaga keamanan dan privasi Anda.",
};

const VERIFICATION_STEPS = [
  { icon: "id_card", title: "Government ID", description: "Verifikasi kartu identitas resmi untuk memastikan legalitas profil." },
  { icon: "face", title: "Selfie Verification", description: "Liveness check dengan teknologi AI untuk mencocokkan wajah dengan ID." },
  { icon: "rate_review", title: "Manual Review", description: "Tim ahli kami meninjau secara manual setiap profil yang mencurigakan." },
  { icon: "verified", title: "Verified Badge", description: "Hanya profil dengan lencana ini yang telah melewati seluruh tahap verifikasi.", filled: true, highlighted: true },
];

const PRIVACY_FEATURES = [
  { icon: "lock", title: "Enkripsi End-to-End", description: "Pesan dan data sensitif Anda dienkripsi sehingga hanya Anda dan penerima yang dapat membacanya." },
  { icon: "database", title: "Penyimpanan Aman", description: "Server kami diamankan dengan firewall berlapis dan pemantauan 24/7 terhadap akses tidak sah." },
  { icon: "settings_accessibility", title: "Kontrol Visibilitas", description: "Atur siapa saja yang bisa melihat foto atau informasi pribadi Anda berdasarkan status verifikasi." },
];

const COMMUNITY_STANDARDS = [
  { icon: "groups", title: "Respect Others", description: "Perlakukan setiap anggota dengan hormat dan kesantunan." },
  { icon: "person_check", title: "Authentic Profiles", description: "Gunakan identitas asli. Akun palsu akan segera dihapus." },
  { icon: "chat_bubble", title: "Meaningful Talks", description: "Tujuan utama adalah pernikahan yang barakah, bukan sekadar basa-basi." },
  { icon: "gavel", title: "No Harassment", description: "Segala bentuk pelecehan atau intimidasi tidak ditoleransi." },
  { icon: "fingerprint", title: "No Fake Identity", description: "Pencurian identitas akan dilaporkan ke pihak berwajib." },
  { icon: "mosque", title: "Islamic Etiquette", description: "Mengedepankan adab islami dalam berinteraksi dan berkomunikasi." },
];

const REPORT_STEPS = [
  { icon: "flag", title: "Report", description: "Laporkan perilaku tidak pantas secara instan.", primary: false },
  { icon: "visibility", title: "Review", description: "Tim moderasi meninjau laporan secara manual.", primary: false },
  { icon: "search", title: "Investigation", description: "Penyelidikan mendalam terhadap bukti-bukti.", primary: false },
  { icon: "check_circle", title: "Action", description: "Tindakan tegas: peringatan hingga banned permanen.", primary: true },
];

const COMMITMENTS = [
  { icon: "favorite", title: "Respect & Dignity", description: "Setiap anggota dihargai sebagai individu yang unik dengan nilai-nilai luhur." },
  { icon: "visibility_off", title: "Data Privacy", description: "Data Anda adalah hak milik Anda. Kami melindunginya dengan standar keamanan tertinggi." },
  { icon: "verified", title: "Authenticity", description: "Hanya profil asli dan terverifikasi yang diperbolehkan bergabung di ekosistem kami." },
];

/**
 * Privacy & Security page — pixel-perfect port of
 * mitan-source/src/app/keamanan-privasi/index.html
 */
export default function KeamananPrivasiPage() {
  return (
    <div className="overflow-x-hidden bg-surface font-body-md text-on-surface">
      <Navbar />

      <main className="max-w-[1200px] mx-auto overflow-hidden">
        {/* ── Hero Section ─────────────────────────────────────────── */}
        <section className="grid items-center gap-stack-lg px-margin-mobile py-16 md:grid-cols-2 md:px-margin-desktop md:py-24">
          <div className="space-y-stack-md">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 font-label-md text-label-md uppercase tracking-wider text-primary">
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
              Keamanan Terjamin
            </div>

            <h1 className="font-display-lg leading-tight text-display-lg-mobile text-on-surface md:text-display-lg">
              Keamanan &amp; Privasi Anda Adalah Prioritas Kami
            </h1>
            <p className="max-w-lg font-body-lg text-body-lg text-on-surface-variant">
              Di MITAN, kami membangun lingkungan yang terpercaya dan bermartabat
              untuk membantu Anda menemukan pasangan hidup dengan ketenangan
              pikiran sepenuhnya.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/register"
                className="rounded-lg bg-primary px-8 py-4 font-label-md text-label-md text-on-primary shadow-ambient transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Buat Akun
              </Link>
              <button className="rounded-lg border border-primary px-8 py-4 font-label-md text-label-md text-primary transition-all hover:bg-primary/5">
                Pelajari Cara Kerja
              </button>
            </div>
          </div>

          {/* Hero image — Stitch asset */}
          <div className="relative">
            <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmD7vxakqIxY7SNH79eA3B6kvPH3YHqKEPiYFUbreZuMsR5n-ox7pgxPre32_tZI4IITMK5FEEqF2xKvKltCa2ylwFoqcVx1coWdntGwgZs05OMeOQ7eJ6tsRt935YNpMFqdzAjnlUfh5g_Ysi3nKUX3BMErw0-CE2rwCtQSJKoq9h2NYvbo8yLuVlzfrqoiEPLehF69rQgU35MN0IVySRYzqowR38wA0aF3ojfsRDcXNdyZaor7IH9OkxK2jCcnpGmzA0URRzuw"
              alt="Ilustrasi perisai keamanan MITAN"
              className="h-auto w-full rounded-xl"
            />
          </div>
        </section>

        {/* ── Our Commitment ───────────────────────────────────────── */}
        <section className="mx-margin-mobile rounded-xl bg-surface-container-low px-margin-mobile py-20 md:mx-margin-desktop md:px-margin-desktop">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <div className="aspect-square w-full overflow-hidden rounded-xl shadow-ambient">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRTOQC5H19C_79PW4cH-6lDalLgSCqbpRLRkw5Fa4Fds8mdyCSul4PEttgbvsHWEYO_pejmrdlFUHDh17fZttOtSxRuhrfbMou85TeO4wYftEwGX4t82usivlYXZl41LNIP_cUfqc0M7VfL-KQpqwzXTqJzXSrcv-6ALupCT3TMxS6Ko-3umQXC5CCNNuMM8Js4uW6L2IVCur_aKvlqnkbbLI1C_uDUa6IFUXPW4JoxgO8cpjBUE6qhOqrs_IZYeW0I80SM-EJzg"
                  alt="Dua tangan berjabat tangan melambangkan kepercayaan dan komitmen"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 space-y-stack-md md:order-2">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Komitmen Kami Kepada Anda
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Kami percaya bahwa mencari pasangan hidup harus dilakukan dengan
                martabat dan kejujuran. Lima pilar komitmen kami menjaga
                integritas setiap interaksi di MITAN.
              </p>
              <div className="space-y-6 pt-4">
                {COMMITMENTS.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-primary shadow-ambient">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-label-md text-label-md text-on-surface">{item.title}</h3>
                      <p className="text-body-sm text-on-surface-variant">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Verification Steps ───────────────────────────────────── */}
        <section className="px-margin-mobile py-20 text-center md:px-margin-desktop">
          <h2 className="mb-4 font-headline-md text-headline-md">
            Sistem Verifikasi Multi-Lapis
          </h2>
          <p className="mx-auto mb-12 max-w-2xl font-body-md text-body-md text-on-surface-variant">
            Kami memastikan setiap orang adalah siapa yang mereka katakan melalui
            proses verifikasi yang ketat namun nyaman.
          </p>
          <div className="grid gap-gutter sm:grid-cols-2 lg:grid-cols-4">
            {VERIFICATION_STEPS.map((step) => (
              <div
                key={step.title}
                className={`rounded-xl bg-white p-8 text-left shadow-ambient transition-all hover:shadow-[0px_8px_30px_rgba(26,54,54,0.08)] ${step.highlighted ? "border-2 border-primary/20" : ""}`}
              >
                <span
                  className="material-symbols-outlined mb-4 block text-primary text-[40px]"
                  style={step.filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
                >
                  {step.icon}
                </span>
                <h3 className="mb-2 text-[20px] font-headline-sm">{step.title}</h3>
                <p className="text-body-sm text-on-surface-variant">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Privacy Controls ─────────────────────────────────────── */}
        <section className="mx-margin-mobile rounded-xl bg-primary/5 px-margin-mobile py-20 md:mx-margin-desktop md:px-margin-desktop">
          <div className="mb-12 flex flex-col items-end justify-between gap-4 md:flex-row">
            <div className="max-w-xl">
              <h2 className="mb-4 font-headline-md text-headline-md">
                Kendali Privasi di Tangan Anda
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Kami menggunakan teknologi enkripsi kelas perbankan dan memberikan
                Anda kendali penuh atas visibilitas profil.
              </p>
            </div>
            <button className="flex items-center gap-2 font-label-md text-primary hover:underline">
              Lihat Pengaturan Privasi{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="grid gap-gutter md:grid-cols-3">
            {PRIVACY_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-outline-variant bg-white/50 p-stack-lg backdrop-blur-sm"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">{feature.icon}</span>
                </div>
                <h4 className="mb-3 text-[18px] font-headline-sm">{feature.title}</h4>
                <p className="leading-relaxed text-body-sm text-on-surface-variant">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Community Standards ──────────────────────────────────── */}
        <section className="px-margin-mobile py-24 md:px-margin-desktop">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-headline-md text-headline-md">Standar Komunitas MITAN</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Kami menjaga komunitas yang sehat dengan pedoman perilaku yang jelas.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-gutter md:grid-cols-3">
            {COMMUNITY_STANDARDS.map((standard) => (
              <div
                key={standard.title}
                className="group rounded-xl border border-outline-variant p-6 transition-all duration-300 hover:border-primary"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-surface-container transition-all group-hover:bg-primary group-hover:text-white">
                  <span className="material-symbols-outlined">{standard.icon}</span>
                </div>
                <h5 className="mb-2 font-label-md text-on-surface">{standard.title}</h5>
                <p className="text-body-sm text-on-surface-variant">{standard.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Reporting & Moderation ───────────────────────────────── */}
        <section className="mx-margin-mobile rounded-xl bg-surface-container-highest px-margin-mobile py-20 md:mx-margin-desktop md:px-margin-desktop">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-headline-md text-headline-md">
                Moderasi &amp; Pelaporan Cepat
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Keamanan Anda hanya berjarak satu klik. Tim moderasi kami siap
                menindaklanjuti setiap laporan dalam waktu kurang dari 24 jam.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative flex flex-col items-start gap-8 md:flex-row md:justify-between">
              {/* Dashed connector line — desktop only */}
              <div className="absolute left-10 right-10 top-10 hidden h-0.5 -z-10 border-t-2 border-dashed border-outline-variant md:block" />

              {REPORT_STEPS.map((step) => (
                <div key={step.title} className="flex flex-1 flex-col items-center text-center">
                  <div
                    className={`mb-4 flex h-20 w-20 items-center justify-center rounded-full border-4 border-surface-container shadow-ambient ${
                      step.primary ? "bg-primary" : "bg-white"
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined ${
                        step.primary ? "text-white" : "text-primary"
                      }`}
                    >
                      {step.icon}
                    </span>
                  </div>
                  <h6 className="font-label-md text-on-surface">{step.title}</h6>
                  <p className="mt-2 text-[12px] text-on-surface-variant">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Privacy FAQ ──────────────────────────────────────────── */}
        <section className="px-margin-mobile py-24 md:px-margin-desktop">
          <h2 className="mb-12 text-center font-headline-md text-headline-md">
            Pertanyaan Umum
          </h2>
          <div className="mx-auto max-w-3xl">
            <PrivacyFaqAccordion />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
