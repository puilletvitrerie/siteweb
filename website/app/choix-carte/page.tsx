import type { Metadata } from "next";
import ZoneMap, { type MapStyle } from "@/components/ZoneMap";

// Page temporaire de comparaison des cartes (à supprimer après le choix).
export const metadata: Metadata = { title: "Choix de la carte", robots: { index: false, follow: false } };

const STYLES: [MapStyle, string, string][] = [
  ["claire", "1. Claire et épurée", "Fond gris très clair, peu de détails : le cercle bleu ressort bien."],
  ["sombre", "2. Sombre", "Fond noir assorti à l'encadré urgence du site, cercle bleu lumineux."],
  ["satellite", "3. Satellite", "Vue aérienne réelle de Lyon et des environs."],
  ["villes", "4. Avec les villes", "Fond simple sans texte, avec les principales villes de votre zone indiquées."],
];

export default function ChoixCarte() {
  return (
    <div className="px-5 md:px-14 py-10" style={{ background: "var(--color-bg)" }}>
      <style>{`.zone-ville{background:#fff;border:1px solid #1f1d1b;border-radius:6px;padding:1px 6px;font-size:11px;font-weight:600;box-shadow:none}.zone-ville:before{display:none}`}</style>
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>Choisissez votre carte</h1>
      <p style={{ color: "var(--color-ink-soft)", marginBottom: 28 }}>Cette page n&apos;est visible que sur la version d&apos;essai.</p>
      <div className="grid gap-8 md:grid-cols-2">
        {STYLES.map(([v, titre, desc]) => (
          <div key={v}>
            <div style={{ fontWeight: 800, fontSize: 20 }}>{titre}</div>
            <div style={{ color: "var(--color-ink-soft)", fontSize: 14, margin: "4px 0 12px" }}>{desc}</div>
            <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", aspectRatio: "5/4", background: "#1f1d1b" }}>
              <ZoneMap variant={v} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
