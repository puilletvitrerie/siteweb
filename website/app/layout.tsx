import type { Metadata } from "next";
import { Manrope, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Puillet Vitrerie — Artisan Vitrier à Lyon",
  description:
    "Vitrier indépendant à Lyon. Remplacement de vitrage, double vitrage, miroirs sur mesure, portes vitrées. Devis gratuit, intervention rapide, travail propre. Agréé toutes assurances.",
  keywords: [
    "vitrier",
    "vitrerie",
    "Lyon",
    "remplacement vitrage",
    "miroiterie",
    "urgence vitrerie",
    "double vitrage",
    "artisan vitrier",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${manrope.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <div style={{ position: "sticky", top: 0, zIndex: 60 }}>
          <div className="w-full bg-yellow-400 text-black text-center text-sm font-semibold py-2 px-4">
            🚧 Site en construction — certaines informations peuvent être incomplètes 🚧
          </div>
          <Header />
        </div>
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
