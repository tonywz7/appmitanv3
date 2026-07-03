"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Apa itu MITAN?",
    answer:
      "MITAN adalah platform matrimony eksklusif yang dirancang untuk individu yang serius mencari kemitraan hidup jangka panjang. Kami menggabungkan nilai-nilai tradisional dengan teknologi modern untuk menciptakan lingkungan yang aman, terpercaya, dan bermartabat bagi setiap anggota kami.",
  },
  {
    question: "Bagaimana proses verifikasi dilakukan?",
    answer: (
      <div>
        <p className="mb-4 font-body-md text-on-surface-variant leading-relaxed">
          Kami menerapkan sistem verifikasi berlapis untuk memastikan komunitas yang berkualitas:
        </p>
        <ul className="space-y-3 font-body-md text-on-surface-variant">
          {[
            "Verifikasi Identitas Resmi (KTP/Passport) melalui enkripsi aman.",
            "Verifikasi wajah real-time menggunakan teknologi AI terbaru.",
            "Peninjauan manual oleh tim kurator kami untuk setiap profil baru.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="material-symbols-outlined mt-1 text-sm text-primary">
                check_circle
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    question: "Apakah data pribadi saya aman?",
    answer:
      "Keamanan data Anda adalah misi utama kami. MITAN menggunakan standar enkripsi perbankan (AES-256) untuk melindungi informasi Anda. Kami tidak pernah membagikan data Anda kepada pihak ketiga tanpa izin eksplisit, dan Anda memiliki kendali penuh atas siapa yang dapat melihat informasi detail profil Anda.",
  },
  {
    question: "Apa perbedaan antara Akun Standar dan Premium?",
    answer:
      "Akun Premium memberikan akses ke fitur-fitur eksklusif seperti lencana \"Verified Gold\", penempatan profil di posisi teratas, akses ke filter pencarian yang lebih mendalam, serta kemampuan untuk memulai percakapan tanpa batas dengan calon pasangan pilihan.",
  },
  {
    question: "Bagaimana cara melaporkan perilaku yang tidak pantas?",
    answer:
      "Anda dapat melaporkan pengguna mana pun melalui tombol \"Laporkan\" di profil mereka atau di dalam jendela percakapan. Tim keamanan kami akan meninjau laporan tersebut dalam waktu kurang dari 24 jam dan mengambil tindakan tegas jika ditemukan pelanggaran terhadap Pedoman Komunitas kami.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="space-y-4">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className={`group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all ${
              isOpen ? "border-primary/30" : "border-outline-variant hover:border-primary/30"
            }`}
          >
            <button
              className="flex w-full items-center justify-between p-6 text-left"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span
                className={`font-headline-sm text-headline-sm transition-colors ${
                  isOpen ? "text-primary" : "text-on-surface group-hover:text-primary"
                }`}
              >
                {item.question}
              </span>
              <span
                className={`material-symbols-outlined text-outline transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-out ${
                isOpen ? "max-h-[500px] pb-6" : "max-h-0"
              }`}
            >
              <div className="px-6 font-body-md text-on-surface-variant leading-relaxed">
                {typeof item.answer === "string" ? (
                  <p>{item.answer}</p>
                ) : (
                  item.answer
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
