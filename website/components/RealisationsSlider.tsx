"use client";

import { useState } from "react";
import BeforeAfter from "@/components/BeforeAfter";
import { REALISATIONS } from "@/lib/contenu-accueil";

const C = { ink: "#1f1d1b", inkSoft: "#5a5550", line: "#e3ddd1", blue: "#3B8FD4", blueDark: "#2B6FA8" } as const;
const F = { sans: "var(--font-manrope), system-ui, sans-serif", serif: "var(--font-instrument-serif), Georgia, serif" } as const;

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: F.sans, fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: C.blueDark }}>
      — {children}
    </div>
  );
}

export default function RealisationsSlider() {
  const [idx, setIdx] = useState(0);
  const cur = REALISATIONS[idx];

  const prev = () => setIdx((idx - 1 + REALISATIONS.length) % REALISATIONS.length);
  const next = () => setIdx((idx + 1) % REALISATIONS.length);

  return (
    <section>
      {/* Heading row */}
      <div className="flex justify-between items-end mb-6 gap-4">
        <div>
          <Label>Avant / après</Label>
          <h2
            style={{
              fontSize: "clamp(26px, 4vw, 56px)",
              lineHeight: 1.02,
              letterSpacing: "-0.025em",
              margin: "14px 0 0",
              fontWeight: 800,
              color: C.ink,
            }}
          >
            Glissez pour voir{" "}
            <span style={{ fontFamily: F.serif, fontStyle: "italic", fontWeight: 400 }}>la différence</span>.
          </h2>
        </div>
        {/* Arrows — desktop only (on mobile they live below) */}
        <div className="hidden md:flex gap-2 flex-shrink-0">
          <button onClick={prev} style={{ width: 48, height: 48, borderRadius: 999, border: `1.5px solid ${C.ink}`, background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }} aria-label="Précédent">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke={C.ink} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button onClick={next} style={{ width: 48, height: 48, borderRadius: 999, border: "none", background: C.ink, color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }} aria-label="Suivant">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M6 3L11 8L6 13" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </div>

      {/* Slider card */}
      <div style={{ borderRadius: 20, overflow: "hidden", border: `1px solid ${C.line}`, background: "#fff", width: `min(100%, calc(70vh * ${cur.ratio}), 640px)`, minWidth: "min(100%, 300px)", margin: "0 auto" }}>
        <BeforeAfter key={idx} before={cur.before} after={cur.after} ratio={cur.ratio} initialPos={98} accent={C.blue} alt={`${cur.title}, ${cur.meta.toLowerCase()}, Lyon`} />
        <div style={{ padding: "18px 20px 20px", background: "#fff" }}>
          <div style={{ fontFamily: F.sans, fontWeight: 700, fontSize: 12, color: C.blueDark, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 5 }}>
            {cur.tag} · {String(idx + 1).padStart(2, "0")} / {String(REALISATIONS.length).padStart(2, "0")}
          </div>
          <div style={{ fontSize: "clamp(16px, 1.8vw, 22px)", fontWeight: 700, letterSpacing: "-0.01em", color: C.ink }}>{cur.title}</div>
          <div style={{ fontSize: 13, color: C.inkSoft, marginTop: 3 }}>{cur.meta}</div>
        </div>
      </div>

      {/* Mobile nav: dots (left) + arrows (right) */}
      <div className="flex justify-between items-center mt-4 md:hidden" style={{ maxWidth: 520, margin: "16px auto 0" }}>
        <div style={{ display: "flex", gap: 5 }}>
          {REALISATIONS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Réalisation ${i + 1}`}
              style={{ width: i === idx ? 24 : 7, height: 7, borderRadius: 999, background: i === idx ? C.blue : C.line, cursor: "pointer", transition: "all .2s", border: "none", padding: 0 }}
            />
          ))}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={prev} style={{ width: 40, height: 40, borderRadius: 999, border: `1.5px solid ${C.ink}`, background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }} aria-label="Précédent">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke={C.ink} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button onClick={next} style={{ width: 40, height: 40, borderRadius: 999, border: "none", background: C.ink, color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }} aria-label="Suivant">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3L11 8L6 13" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </div>

      {/* Desktop dots */}
      <div className="hidden md:flex gap-2 mt-4 justify-center">
        {REALISATIONS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Réalisation ${i + 1}`}
            style={{ width: i === idx ? 30 : 8, height: 8, borderRadius: 999, background: i === idx ? C.blue : C.line, cursor: "pointer", transition: "all .2s", border: "none", padding: 0 }}
          />
        ))}
      </div>

    </section>
  );
}
