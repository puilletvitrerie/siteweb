"use client";

import { useState } from "react";

const C = { ink: "#1f1d1b", inkSoft: "#5a5550", line: "#e3ddd1" } as const;

export default function FaqList({ items }: { items: readonly { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} style={{ borderBottom: `1px solid ${C.line}` }}>
          <button
            type="button"
            onClick={() => setOpen(open === i ? -1 : i)}
            aria-expanded={open === i}
            style={{ width: "100%", padding: "22px 4px", minHeight: 44, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, background: "transparent", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "inherit" }}
          >
            <h2 style={{ fontSize: "clamp(15px, 1.5vw, 19px)", fontWeight: 700, letterSpacing: "-0.01em", color: C.ink, lineHeight: 1.3, margin: 0 }}>{item.q}</h2>
            <span
              aria-hidden
              style={{ width: 30, height: 30, borderRadius: 999, border: `1.5px solid ${C.ink}`, display: "flex", alignItems: "center", justifyContent: "center", transform: open === i ? "rotate(45deg)" : "rotate(0)", transition: "transform .2s", flexShrink: 0 }}
            >
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M6 1V11M1 6H11" stroke={C.ink} strokeWidth="1.5" strokeLinecap="round" /></svg>
            </span>
          </button>
          {open === i && (
            <p style={{ fontSize: "clamp(14px, 1.3vw, 16px)", lineHeight: 1.6, color: C.inkSoft, margin: "0 4px 22px", maxWidth: 680 }}>{item.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}
