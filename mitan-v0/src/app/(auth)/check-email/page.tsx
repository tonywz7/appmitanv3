import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CheckEmailCard } from "@/components/auth/CheckEmailCard";

export const metadata: Metadata = {
  title: "Check Your Email | MITAN",
};

const IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBTnwI9-CyM1lmsb9VhSu0V9_okbz4gUN-iZuWMeEffyIhIZadpusRjMVlRR8WTg6fM5tKIw19glp1S8WtlBujUbONHk3H5SZe9kOLPsThwGmpD3h2RiM1j9u-DBqOtmTqSa1FXPCEtohTMIQEtk6qsw2Ev7piUxZ0gn5EFhKUCnWyAXrmoVC92ODdgbnYcAn2fpHuzqtNEGfWtloiVC2EQTVCuvry7hSQBv4mZiG-VGSS3IYtUjL8MflnMJlnsbKhjCFbT2UxIVw";

export default function CheckEmailPage() {
  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center pt-[88px]">
        <div className="mx-auto grid w-full max-w-max-width grid-cols-1 gap-gutter px-margin-desktop py-12 lg:grid-cols-2">
          {/* Side image */}
          <div className="relative hidden overflow-hidden rounded-xl shadow-2xl lg:block">
            <Image src={IMAGE} alt="A serene, minimalist prayer hall with soft natural light." fill className="object-cover" priority />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary/60 to-transparent" />
            <div className="absolute bottom-16 left-16 right-16 z-20">
              <h2 className="mb-4 font-headline-xl text-headline-xl leading-tight text-white">
                For Life,
                <br />
                Not Just For Now.
              </h2>
              <p className="max-w-md font-body-lg text-body-lg text-white/90">
                Mitan is built for those who value commitment, integrity, and the sanctity of
                marriage. Our platform fosters intentional connections.
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="flex flex-col items-center justify-center lg:items-start">
            <CheckEmailCard />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
