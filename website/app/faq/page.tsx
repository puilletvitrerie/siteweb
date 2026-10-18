import type { Metadata } from "next";
import FaqList from "@/components/FaqList";
import { FAQ_ITEMS } from "@/lib/contenu-accueil";

export const metadata: Metadata = {
  title: "FAQ vitrier à Lyon : délais, devis, assurance",
  description:
    "Délais d'intervention, devis gratuit, prise en charge par l'assurance, prix d'un remplacement de vitrage : les réponses de votre vitrier à Lyon.",
  alternates: { canonical: "/faq" },
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
};

export default function FaqPage() {
  return (
    <div style={{ background: "#f6f3ec", color: "#1f1d1b", fontFamily: "var(--font-manrope), system-ui, sans-serif" }} className="px-5 md:px-14 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />
      <div className="max-w-4xl mx-auto">
        <div style={{ fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2B6FA8" }}>— Questions fréquentes</div>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, margin: "12px 0 28px" }}>
          Les questions que l&rsquo;on me{" "}
          <span style={{ fontFamily: "var(--font-instrument-serif), Georgia, serif", fontStyle: "italic", fontWeight: 400, color: "#2B6FA8" }}>pose souvent.</span>
        </h1>
        <FaqList items={FAQ_ITEMS} />
        <a
          href="tel:+33650440673"
          style={{ display: "inline-flex", alignItems: "center", gap: 10, marginTop: 32, minHeight: 56, padding: "0 28px", borderRadius: 999, background: "#3B8FD4", color: "#fff", fontWeight: 700, fontSize: 16 }}
        >
          Une autre question ? Appeler · 06 50 44 06 73
        </a>
      </div>
    </div>
  );
}
