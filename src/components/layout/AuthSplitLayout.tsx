import Image from "next/image";
import { cn } from "@/lib/utils";

interface AuthSplitLayoutProps {
  imageSrc: string;
  imageAlt: string;
  eyebrow?: string;
  headline: React.ReactNode;
  description?: string;
  children: React.ReactNode;
  imagePosition?: "left" | "right";
  className?: string;
}

/**
 * Shared two-column layout: a brand image pane + a form/content pane. This
 * single pattern reproduces the visual layout used by every auth screen
 * (login, registration, forgot password, create new password, check email).
 */
export function AuthSplitLayout({
  imageSrc,
  imageAlt,
  eyebrow = "Our Ethos",
  headline,
  description,
  children,
  imagePosition = "left",
  className,
}: AuthSplitLayoutProps) {
  const imagePane = (
    <div className="relative hidden h-full min-h-[600px] w-1/2 items-end overflow-hidden bg-surface-container-low p-12 md:flex">
      <Image src={imageSrc} alt={imageAlt} fill className="object-cover opacity-90" priority />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="relative z-10 max-w-md text-white fade-in-up" data-visible="true">
        <p className="mb-4 font-label-sm text-label-sm uppercase tracking-widest opacity-80">
          {eyebrow}
        </p>
        <h1 className="mb-4 font-headline-xl text-headline-xl leading-tight">{headline}</h1>
        {description && <p className="font-body-lg text-body-lg opacity-90">{description}</p>}
      </div>
    </div>
  );

  return (
    <main className={cn("flex min-h-screen w-full flex-col md:flex-row", className)}>
      {imagePosition === "left" && imagePane}
      <div className="flex w-full items-center justify-center bg-background p-6 md:w-1/2 md:p-16">
        {children}
      </div>
      {imagePosition === "right" && imagePane}
    </main>
  );
}
