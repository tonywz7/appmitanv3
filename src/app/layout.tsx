import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MITAN | For Marriage, Not Dating",
  description:
    "A premium platform engineered for Muslims seeking meaningful, lifelong commitment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${manrope.variable} ${jakarta.variable}`}>
      <head>
        {/* Material Symbols is a variable icon font without a next/font/google
            entry, so it's loaded the same way the source screens loaded it. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- this rule predates the App Router; a <link> in a root layout <head> is the documented pattern here. */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-jakarta">{children}</body>
    </html>
  );
}
