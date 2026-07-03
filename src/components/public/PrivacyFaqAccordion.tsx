"use client";

import { useState } from "react";

const PRIVACY_FAQ_ITEMS = [
  {
    question: "Apakah data KTP saya disimpan oleh MITAN?",
    answer:
      "Tidak. MITAN menggunakan pihak ketiga yang tersertifikasi untuk proses verifikasi identitas. Data KTP Anda dienkripsi selama proses dan tidak disimpan di server kami setelah verifikasi selesai. Kami hanya menyimpan status verifikasi (terverifikasi atau tidak) dan nomor referensi anonim.",
  },
  {
    question: "Siapa yang dapat melihat foto saya di MITAN?",
    answer:
      "Secara default, foto Anda hanya dapat dilihat oleh anggota yang telah terverifikasi. Anda memiliki kontrol penuh dan dapat mengatur foto Anda menjadi \"Hanya Cocok\" — yang berarti hanya pengguna yang telah saling menyukai yang dapat melihat foto profil asli Anda. Foto yang dikirim dalam percakapan hanya dapat dilihat oleh penerima.",
  },
  {
    question: "Apakah MITAN membagikan data saya kepada pihak ketiga?",
    answer:
      "Tidak pernah untuk tujuan komersial. MITAN hanya membagikan data yang mutlak diperlukan kepada penyedia layanan teknis kami (seperti hosting cloud dan layanan verifikasi) yang terikat oleh Perjanjian Pemrosesan Data yang ketat. Kami tidak pernah menjual data Anda kepada pengiklan atau mitra bisnis.",
  },
  {
    question: "Bagaimana cara menghapus akun dan semua data saya?",
    answer:
      "Anda dapat mengajukan penghapusan akun permanen kapan saja melalui menu Pengaturan → Privasi → Hapus Akun. Setelah konfirmasi, semua data pribadi Anda akan dihapus secara permanen dari sistem kami dalam 30 hari sesuai dengan regulasi perlindungan data yang berlaku.",
  },
  {
    question: "Apakah obrolan/chat saya dimonitoring oleh MITAN?",
    answer:
      "Percakapan Anda dienkripsi secara end-to-end. Namun, sistem kami secara otomatis memindai konten untuk pola yang mencurigakan (seperti permintaan data keuangan atau konten ilegal) tanpa ada manusia yang membacanya secara langsung. Pemindaian ini dilakukan untuk melindungi semua pengguna dari penipuan.",
  },
];

export function PrivacyFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="space-y-4">
      {PRIVACY_FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className={`group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all ${
              isOpen
                ? "border-primary/30"
                : "border-outline-variant hover:border-primary/30"
            }`}
          >
            <button
              className="flex w-full items-center justify-between p-6 text-left"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span
                className={`font-headline-sm text-headline-sm transition-colors ${
                  isOpen
                    ? "text-primary"
                    : "text-on-surface group-hover:text-primary"
                }`}
              >
                {item.question}
              </span>
              <span
                className={`material-symbols-outlined ml-4 flex-shrink-0 text-outline transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-out ${
                isOpen ? "max-h-[400px] pb-6" : "max-h-0"
              }`}
            >
              <p className="px-6 font-body-md text-body-md leading-relaxed text-on-surface-variant">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
