import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const manrope = Manrope({
  weight: ["200", "500", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Linux Day 2024 - LILIS",
  description: "Evento annuale per promuovere Linux e il software libero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <meta property="og:image" content="/og-image-cfp-1600x916.png" />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="916" />

        <meta name="twitter:image" content="/og-image-cfp-1600x725.png" />
      </head>
      <body
        className={`${manrope.className} container mx-auto px-4 py-4 antialiased`}
      >
        <header className="mb-7 flex h-1/6 flex-col items-center lg:flex-row lg:justify-between">
          <Link href={"/"}>
            <img className="w-60 lg:w-80" src="/Lilis.svg" alt="LILIS Logo" />
          </Link>
          <p className="hidden lg:block lg:text-right lg:text-xl lg:font-extrabold lg:text-accent">
            Indirizzo /<br />
            Benevento (BN) /<br />
            26 Ottobre /
          </p>
        </header>
        <div className="mb-5 flex h-5/6 flex-col items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
