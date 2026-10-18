import type { Metadata } from "next";
import Link from "next/link";
import DevisForm from "@/components/DevisForm";

// Lien en bio Instagram / TikTok. Page de conversion : pas de menu, pas de pied de page, pas d'indexation.
export const metadata: Metadata = {
  title: "Devis express en 1 photo",
  description: "Envoyez une photo de votre vitre, Léo vous rappelle rapidement avec un prix. Devis gratuit, prix final.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/devis" },
};

const C = { bg: "#F6F3EC", ink: "#1F1D1B", inkSoft: "#5A5550", line: "#E3DDD1", blue: "#3B8FD4", blueDark: "#2B6FA8" } as const;
const F = { sans: "var(--font-manrope), system-ui, sans-serif", serif: "var(--font-instrument-serif), Georgia, serif" } as const;

const btn: React.CSSProperties = {
  flex: 1,
  minHeight: 52,
  borderRadius: 999,
  fontWeight: 700,
  fontSize: 15,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  padding: "0 14px",
};

export default function DevisPage() {
  return (
    <div style={{ background: C.bg, color: C.ink, fontFamily: F.sans, minHeight: "100vh" }}>
      <div style={{ maxWidth: 520, margin: "0 auto", padding: "18px 20px 48px" }}>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", minHeight: 44, fontWeight: 800, fontSize: 20, letterSpacing: "-0.01em" }}>
          <span style={{ color: C.blue }}>Puillet</span>&nbsp;Vitrerie
        </Link>

        <h1 style={{ fontWeight: 800, fontSize: "clamp(40px, 11vw, 56px)", letterSpacing: "-0.03em", lineHeight: 1.02, margin: "18px 0 12px" }}>
          Devis express
          <br />
          <span style={{ fontFamily: F.serif, fontStyle: "italic", fontWeight: 400, color: C.blueDark }}>en 1 photo.</span>
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.55, color: C.inkSoft, margin: "0 0 20px" }}>
          Envoyez une photo de votre vitre, Léo vous rappelle rapidement avec un prix. Devis gratuit, prix final.
        </p>

        <div style={{ display: "flex", gap: 10, marginBottom: 30 }}>
          <a href="tel:+33650440673" style={{ ...btn, background: C.blue, color: "#fff" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
            </svg>
            Appeler · 06 50 44 06 73
          </a>
          <a href="https://wa.me/33650440673" target="_blank" rel="noopener noreferrer" style={{ ...btn, flex: "0 0 auto", background: "#fff", color: C.ink, border: `1.5px solid ${C.line}` }}>
            WhatsApp
          </a>
        </div>

        <DevisForm />

        <div style={{ marginTop: 30, paddingTop: 20, borderTop: `1px solid ${C.line}`, textAlign: "center" }}>
          <div style={{ fontWeight: 800, fontSize: 16 }}>
            <span style={{ color: C.blue }} aria-hidden>★★★★★</span> 4,9/5 sur Google · 29 avis
          </div>
          <p style={{ fontFamily: F.serif, fontStyle: "italic", fontSize: 19, color: C.ink, margin: "8px 0 0" }}>
            « Demande de devis envoyée à 15h, reçu en 1h ! » <span style={{ fontFamily: F.sans, fontStyle: "normal", fontSize: 14, color: C.inkSoft }}>— Nawelle C.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
