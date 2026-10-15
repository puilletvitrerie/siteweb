import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merci",
  robots: { index: false, follow: false },
};

const GOOGLE_WRITE_REVIEW_URL = "https://g.page/r/CfzbnXyzdAM4EBM/review";

const btn = { display: "flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "15px 20px", borderRadius: 999, fontWeight: 700, fontSize: 16 } as const;

// Page ouverte par le QR code de l'autocollant posé après chaque remplacement de vitrage.
// Ne pas supprimer ni renommer : les autocollants imprimés pointent vers /merci.
export default function Merci() {
  return (
    <div className="px-5 py-14" style={{ background: "var(--color-bg)", color: "var(--color-ink)", textAlign: "center" }}>
      <div style={{ maxWidth: 460, margin: "0 auto", background: "#fff", border: "1px solid var(--color-line)", borderRadius: 20, padding: "32px 24px" }}>
        <div style={{ fontSize: 26, fontWeight: 800, lineHeight: 1.2 }}>Merci pour votre confiance</div>
        <p style={{ color: "var(--color-ink-soft)", margin: "10px 0 24px" }}>
          Votre vitrage a été remplacé par Puillet Vitrerie. Que souhaitez-vous faire ?
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <a href={GOOGLE_WRITE_REVIEW_URL} target="_blank" rel="noopener noreferrer" style={{ ...btn, background: "var(--color-red)", color: "#fff" }}>
            <span style={{ color: "#f5b400" }} aria-hidden>★</span>
            Laisser un avis Google
          </a>
          <a href="/" style={{ ...btn, background: "#fff", color: "var(--color-ink)", border: "1px solid var(--color-line)" }}>
            Voir mon site et mes réalisations
          </a>
          <a href="https://www.instagram.com/puilletvitrerie" target="_blank" rel="noopener noreferrer" style={{ ...btn, background: "var(--color-ink)", color: "#fff" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
            Instagram · @puilletvitrerie
          </a>
        </div>
        <div style={{ marginTop: 22, fontWeight: 700 }}>Léo · Puillet Vitrerie</div>
      </div>
    </div>
  );
}
