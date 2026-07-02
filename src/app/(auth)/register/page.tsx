import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AuthSplitLayout } from "@/components/layout/AuthSplitLayout";
import { RegisterForm } from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: "Create Account | MITAN",
};

const IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAe0po_Jkfwh7s5BFhLsw2V5Mey_UlpiR2RbfrBI_AiptDWfIwDudn_sY4DOHirqJ0xhePewP4R5UqlEHw21jBxqirp8RiJKdr0N3GnTUZMOIuAe9dejah3Ge-vzUVWbCGnCuXARuZyN1i5bepcrjODYudx6283PcEviL-GvF7T2rNq1S1gTlNZ8xCRXsQnQoRzid904RrKtVoKWpQweIWFFkq_rp3yOXqdi6igjKoUzyMk2fGYwSQaaMWwcBoS8FTlTrqn195TLw";

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <div className="pt-[88px]">
        <AuthSplitLayout
          imageSrc={IMAGE}
          imageAlt="A serene minimalist interior overlooking a calm Mediterranean garden at dusk."
          eyebrow="Our Ethos"
          headline={
            <>
              For Marriage,
              <br />
              Not Dating
            </>
          }
        >
          <RegisterForm />
        </AuthSplitLayout>
      </div>
      <Footer />
    </>
  );
}
