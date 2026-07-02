import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Icon } from "@/components/ui/Icon";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB0TlQniQbpT7UqxAUtYJhmcdukCNlrt5R38XFmQDt9UJla9uY6w0S136m0xUIJ_Lr2ph7ppQDE-RfvW-k5lrlu9ntZatdQaWqcvR0Vv6nUVbiZpq3D8D5F1xxwa374xb_8fkt_6nQ96HxZplJQseVJAX-geZmwG2ovMO1cKKz4j7bJgPAHIKXMsdB47QkmKbV-cvr0e0z6DMjMrQjDslf_14EgIoIx_OFPO6nRCtuG3s7JN3wJ4y3nOk-WdoyxkjTMG_gy5uEJ6w";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-max-width pt-[88px]">
        {/* Hero */}
        <section className="relative flex min-h-[870px] items-center justify-center overflow-hidden px-margin-desktop py-section-py">
          <div className="absolute inset-0 z-0">
            <div
              className="h-full w-full bg-cover bg-center opacity-40"
              style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-surface/30 via-surface/70 to-surface" />
          </div>
          <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-white/70 px-5 py-2 shadow-sm backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-primary">
                Built for the Ummah
              </span>
            </div>
            <h1 className="max-w-4xl font-headline-xl text-headline-xl font-bold text-primary">
              For Marriage, Not Dating
            </h1>
            <p className="mx-auto max-w-2xl font-body-lg text-body-lg leading-relaxed text-secondary">
              A premium platform engineered for Muslims seeking meaningful, lifelong commitment.
              Skip the noise. Start building your future.
            </p>
            <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <Link
                href="/register"
                className="flex w-full items-center justify-center gap-2 rounded-button bg-primary px-btn-px py-btn-py font-label-md text-label-md text-white shadow-sm transition-all hover:bg-primary/90 sm:w-auto"
              >
                Join MITAN — Free
                <Icon name="arrow_forward" className="text-[24px]" />
              </Link>
              <a
                href="#how-it-works"
                className="flex w-full items-center justify-center rounded-button border border-outline-variant bg-surface-container-lowest px-btn-px py-btn-py font-label-md text-label-md text-primary shadow-sm transition-all hover:bg-slate-50 sm:w-auto"
              >
                Explore the Platform
              </a>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="border-y border-outline-variant bg-surface-container-lowest">
          <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-outline-variant md:grid-cols-12 md:divide-x md:divide-y-0">
            <div className="col-span-12 flex items-center justify-center gap-4 px-8 py-10 md:col-span-4">
              <Icon name="check" filled className="text-primary text-[24px]" />
              <span className="font-label-md text-label-md uppercase tracking-wide text-primary">
                Verified Profiles
              </span>
            </div>
            <div className="col-span-12 flex items-center justify-center gap-4 px-8 py-10 md:col-span-4">
              <Icon name="group" className="text-primary text-[24px]" />
              <span className="font-label-md text-label-md uppercase tracking-wide text-primary">
                Intentional Community
              </span>
            </div>
            <div className="col-span-12 flex items-center justify-center gap-4 px-8 py-10 md:col-span-4">
              <Icon name="lock" className="text-primary text-[24px]" />
              <span className="font-label-md text-label-md uppercase tracking-wide text-primary">
                Private &amp; Secure
              </span>
            </div>
          </div>
        </section>

        {/* Feature bento */}
        <section id="how-it-works" className="bg-surface px-margin-desktop py-section-py">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-gutter md:grid-cols-12">
            <div className="flex min-h-[320px] flex-col justify-between rounded-card border border-outline-variant bg-surface-container-lowest p-card-p shadow-ambient transition-transform duration-300 hover:scale-[1.02] md:col-span-6">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-outline-variant bg-surface-container-low">
                <span className="font-label-sm font-bold text-primary">4.5</span>
              </div>
              <div>
                <h3 className="mb-4 font-headline-xl text-headline-xl font-bold text-primary">
                  4.5/5 Rating
                </h3>
                <p className="max-w-md font-body-md text-body-md leading-relaxed text-secondary">
                  Consistently rated by thousands of serious seekers across the globe for our
                  dedicated matching algorithm.
                </p>
              </div>
            </div>
            <div className="flex min-h-[320px] flex-col justify-between rounded-card border border-outline-variant bg-surface-container-lowest p-card-p shadow-ambient transition-transform duration-300 hover:scale-[1.02] md:col-span-3">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-outline-variant bg-surface-container-low">
                <Icon name="check" filled className="text-primary text-[24px]" />
              </div>
              <div>
                <h3 className="mb-4 font-headline-lg text-headline-lg font-semibold text-primary">100%</h3>
                <p className="font-label-md text-label-md uppercase tracking-wider text-secondary">
                  Verified
                </p>
              </div>
            </div>
            <div className="relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-card bg-primary p-card-p text-white shadow-ambient transition-transform duration-300 hover:scale-[1.02] md:col-span-3">
              <div className="relative z-10 flex h-full flex-col justify-end">
                <h3 className="mb-4 font-headline-lg text-headline-lg font-semibold text-white">
                  No Swiping
                </h3>
                <p className="font-body-sm text-body-sm leading-relaxed text-slate-200">
                  We replaced gamification with deliberate, thoughtful introductions based on
                  compatibility matrices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="vision" className="flex w-full flex-col items-center justify-center bg-surface-container-lowest px-margin-desktop py-section-py text-center text-primary">
          <h2 className="mb-6 max-w-4xl font-headline-xl text-headline-xl font-bold text-primary">
            Ready to build your future?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl font-body-lg text-body-lg text-secondary">
            Join the intentional community of Muslims seeking lifelong commitment.
          </p>
          <Link
            href="/register"
            className="flex items-center justify-center rounded-button bg-primary px-btn-px py-btn-py font-label-md text-label-md font-bold uppercase tracking-wider text-white shadow-ambient transition-all hover:bg-primary/90"
          >
            Join MITAN Now
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
