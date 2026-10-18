import type { Metadata } from "next";
import RealisationsSlider from "@/components/RealisationsSlider";
import InstagramVideos from "@/components/InstagramVideos";

export const metadata: Metadata = {
  title: "Réalisations · Vitrages remplacés à Lyon, avant / après",
  description:
    "Avant / après de chantiers réels à Lyon et dans la métropole : portes d'immeuble, garde-corps, fenêtres, vitrines. Vidéos de chantier Puillet Vitrerie.",
  alternates: { canonical: "/realisations" },
};

const C = { bg: "#f6f3ec", ink: "#1f1d1b", inkSoft: "#5a5550", line: "#e3ddd1", blueDark: "#2B6FA8" } as const;
const F = { sans: "var(--font-manrope), system-ui, sans-serif", serif: "var(--font-instrument-serif), Georgia, serif" } as const;

export default function RealisationsPage() {
  return (
    <div style={{ background: C.bg, color: C.ink, fontFamily: F.sans }} className="px-5 md:px-14 py-12">
      <div className="max-w-6xl mx-auto">
        <div style={{ fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: C.blueDark }}>— Réalisations</div>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, margin: "12px 0 14px" }}>
          Mes chantiers{" "}
          <span style={{ fontFamily: F.serif, fontStyle: "italic", fontWeight: 400, color: C.blueDark }}>en images.</span>
        </h1>
        <p style={{ fontSize: 17, color: C.inkSoft, maxWidth: 640, lineHeight: 1.6, margin: "0 0 40px" }}>
          Des vitrages remplacés à Lyon et dans la métropole, chez les particuliers, dans les copropriétés et les commerces.
        </p>

        <RealisationsSlider />

        <h2 style={{ fontSize: "clamp(22px, 2.6vw, 32px)", fontWeight: 800, letterSpacing: "-0.02em", margin: "56px 0 16px" }}>
          Mes chantiers{" "}
          <span style={{ fontFamily: F.serif, fontStyle: "italic", fontWeight: 400 }}>en vidéo</span>
        </h2>
        <InstagramVideos />

        <div style={{ marginTop: 24, padding: "22px 22px", borderRadius: 18, background: "#fff", border: `1px solid ${C.line}` }} className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div style={{ fontWeight: 800, fontSize: 18 }}>Encore plus de vidéos</div>
            <div style={{ fontSize: 14, color: C.inkSoft, marginTop: 4 }}>Retrouvez toutes mes interventions sur Instagram et TikTok.</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="https://www.instagram.com/puilletvitrerie" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, minHeight: 48, padding: "12px 20px", borderRadius: 999, background: C.ink, color: "#fff", fontWeight: 700, fontSize: 14 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
              Instagram · @puilletvitrerie
            </a>
            <a href="https://www.tiktok.com/@puilletvitrerie" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, minHeight: 48, padding: "12px 20px", borderRadius: 999, background: C.ink, color: "#fff", fontWeight: 700, fontSize: 14 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.7 5.7 0 1 0 4.9 5.7V9.1a7.3 7.3 0 0 0 4.3 1.4V7.4a4.3 4.3 0 0 1-3.2-1.6Z" /></svg>
              TikTok · @puilletvitrerie
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
