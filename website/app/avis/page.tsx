import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laisser un avis",
  robots: { index: false, follow: false },
};

const REVIEW_URL = "https://g.page/r/CfzbnXyzdAM4EBM/review";

// Page simple à partager ou imprimer : redirige vers la page d'avis Google.
export default function Avis() {
  return (
    <div className="px-5 py-14" style={{ background: "var(--color-bg)", color: "var(--color-ink)", textAlign: "center" }}>
      <div style={{ maxWidth: 460, margin: "0 auto", background: "#fff", border: "1px solid var(--color-line)", borderRadius: 20, padding: "32px 24px" }}>
        <div style={{ fontSize: 26, fontWeight: 800, lineHeight: 1.2 }}>Merci pour votre confiance !</div>
        <p style={{ color: "var(--color-ink-soft)", margin: "12px 0 22px" }}>
          Votre avis m&apos;aide beaucoup à faire connaître mon travail. Cela ne prend qu&apos;une minute.
        </p>
        <a href={REVIEW_URL} style={{ display: "inline-block", background: "var(--color-red)", color: "#fff", padding: "14px 26px", borderRadius: 999, fontWeight: 700, fontSize: 16 }}>
          Laisser un avis sur Google ★
        </a>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/qr-avis-google.png" alt="QR code vers la page d'avis Google de Puillet Vitrerie" style={{ width: 200, height: 200, margin: "26px auto 6px", display: "block" }} />
        <div style={{ fontSize: 13, color: "var(--color-ink-soft)" }}>Ou scannez ce code avec votre téléphone</div>
        <div style={{ marginTop: 20, fontWeight: 700 }}>Léo Puillet · Puillet Vitrerie</div>
      </div>
    </div>
  );
}
