import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mes liens",
  robots: { index: false, follow: false },
};

const btn = { display: "flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "15px 20px", borderRadius: 999, fontWeight: 700, fontSize: 16 } as const;

// Page ouverte par le QR code floqué à l'arrière du camion : site, Instagram, TikTok.
export default function Liens() {
  return (
    <div className="px-5 py-14" style={{ background: "var(--color-bg)", color: "var(--color-ink)", textAlign: "center" }}>
      <div style={{ maxWidth: 460, margin: "0 auto", background: "#fff", border: "1px solid var(--color-line)", borderRadius: 20, padding: "32px 24px" }}>
        <div style={{ fontSize: 26, fontWeight: 800, lineHeight: 1.2 }}>Puillet Vitrerie</div>
        <p style={{ color: "var(--color-ink-soft)", margin: "10px 0 24px" }}>
          Vitrerie · Miroiterie · Dépannage rapide à Lyon &amp; alentours
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <a href="/" style={{ ...btn, background: "var(--color-red)", color: "#fff" }}>
            Voir mon site et mes réalisations
          </a>
          <a href="https://www.instagram.com/puilletvitrerie" target="_blank" rel="noopener noreferrer" style={{ ...btn, background: "var(--color-ink)", color: "#fff" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
            Instagram · @puilletvitrerie
          </a>
          <a href="https://www.tiktok.com/@puilletvitrerie" target="_blank" rel="noopener noreferrer" style={{ ...btn, background: "var(--color-ink)", color: "#fff" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.7 5.7 0 1 0 4.9 5.7V9.1a7.3 7.3 0 0 0 4.3 1.4V7.4a4.3 4.3 0 0 1-3.2-1.6Z" /></svg>
            TikTok · @puilletvitrerie
          </a>
          <a href="tel:0650440673" style={{ ...btn, background: "#fff", color: "var(--color-ink)", border: "1px solid var(--color-line)" }}>
            Appeler · 06 50 44 06 73
          </a>
        </div>
        <div style={{ marginTop: 22, fontWeight: 700 }}>Léo Puillet · Puillet Vitrerie</div>
      </div>
    </div>
  );
}
