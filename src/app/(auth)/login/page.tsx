import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AuthSplitLayout } from "@/components/layout/AuthSplitLayout";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Sign In | MITAN",
};

const IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuANwz2LzDvKEiDTR80GdK2qxdNg4xSPp658p0z4cTgrhRKJmlAw5ahDpm2EcSQ-Waxz3DyEDRAOAX1YcMO4ZlzaO5mSK3-bKj7VC3y3lqgVXRmesv3vhTnuog20AQoFt-1HT9ACtMqP0hALnbGhoZ_BmO3kiaVytEYaZbV7k4bS3FtzdODraf745CkzbYvJy7dpuNbM7RlYDCvMSMR2Wi4wHG0abaDOsiLB8y5n9tD22XFbfunicTyfMjfJaXGKJdYeDOuDnPb-kQ";

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <div className="pt-[88px]">
        <AuthSplitLayout
          imageSrc={IMAGE}
          imageAlt="Serene, high-end architectural interior evoking tranquility and lifelong commitment."
          headline={
            <>
              For Marriage,
              <br />
              Not Dating
            </>
          }
          description="A space designed for the Ummah, where intention meets integrity. We facilitate connections that lead to lifelong companionship, rooted in faith and mutual respect."
        >
          <LoginForm />
        </AuthSplitLayout>
      </div>
      <Footer />
    </>
  );
}
