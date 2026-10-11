"use client";

import { useState } from "react";
import BeforeAfter from "@/components/BeforeAfter";

interface Item {
  before: string;
  after: string;
  ratio: number;
  caption: string;
}

export default function BeforeAfterGallery({ items }: { items: Item[] }) {
  const [idx, setIdx] = useState(0);
  const cur = items[idx];
  const go = (d: number) => setIdx((idx + d + items.length) % items.length);

  return (
    <figure className="mx-auto" style={{ maxWidth: 480 }}>
      <div className="rounded-3xl overflow-hidden mx-auto" style={{ width: `min(100%, calc(70vh * ${cur.ratio}))` }}>
        <BeforeAfter key={idx} before={cur.before} after={cur.after} ratio={cur.ratio} initialPos={98} />
      </div>
      <figcaption className="text-sm text-gray-600 mt-3 text-center">{cur.caption}</figcaption>
      {items.length > 1 && (
        <div className="flex items-center justify-center gap-3 mt-3">
          <button onClick={() => go(-1)} aria-label="Précédent" className="w-10 h-10 rounded-full border border-gray-900 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <span className="text-sm text-gray-600">{idx + 1} / {items.length}</span>
          <button onClick={() => go(1)} aria-label="Suivant" className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      )}
    </figure>
  );
}
