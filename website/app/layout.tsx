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
  metadataBase: new URL("https://www.puilletvitrerie.fr"),
  title: {
    default: "Vitrier à Lyon · Remplacement de vitrage et double vitrage | Puillet Vitrerie",
    template: "%s | Puillet Vitrerie",
  },
  description:
    "Vitrier indépendant à Lyon et dans l'Est lyonnais. Remplacement de vitrages, doubles vitrages, miroirs sur mesure, portes vitrées. Devis gratuit, dépannage 7j/7.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.puilletvitrerie.fr",
    siteName: "Puillet Vitrerie",
    title: "Vitrier à Lyon · Puillet Vitrerie",
    description:
      "Remplacement de vitrages, doubles vitrages et miroirs à Lyon et dans l'Est lyonnais. Devis gratuit, dépannage 7j/7.",
  },
};

const LOCAL_BUSINESS = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://www.puilletvitrerie.fr/#entreprise",
  name: "Puillet Vitrerie",
  description:
    "Artisan vitrier à Lyon : remplacement de vitrages, doubles vitrages, vitrages feuilletés, miroirs sur mesure, vitrines et portes vitrées. Dépannage 7j/7.",
  url: "https://www.puilletvitrerie.fr",
  telephone: "+33650440673",
  email: "puilletvitrerie@gmail.com",
  founder: { "@type": "Person", name: "Léo Puillet" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "42 avenue du Chater",
    addressLocality: "Francheville",
    postalCode: "69340",
    addressRegion: "Auvergne-Rhône-Alpes",
    addressCountry: "FR",
  },
  geo: { "@type": "GeoCoordinates", latitude: 45.7439321, longitude: 4.7706419 },
  areaServed: [
    "Lyon", "Villeurbanne", "Caluire-et-Cuire", "Francheville", "Tassin-la-Demi-Lune",
    "Vénissieux", "Bron", "Saint-Priest", "Meyzieu", "Genas", "Décines-Charpieu",
    "Villefranche-sur-Saône", "Vienne", "Bourgoin-Jallieu",
  ].map((name) => ({ "@type": "City", name })),
  sameAs: [
    "https://www.instagram.com/puilletvitrerie",
    "https://www.tiktok.com/@puilletvitrerie",
    "https://www.linkedin.com/in/leo-puillet",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "20:00",
    },
  ],
  priceRange: "Devis gratuit",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS) }}
        />
        <div style={{ position: "sticky", top: 0, zIndex: 60 }}>
          <Header />
        </div>
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
