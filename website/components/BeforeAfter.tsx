"use client";

import { useState, useRef, useEffect } from "react";

interface BeforeAfterProps {
  before: string;
  after: string;
  height?: number;
  beforeLabel?: string;
  afterLabel?: string;
  accent?: string;
}

export default function BeforeAfter({
  before,
  after,
  height = 520,
  beforeLabel = "Avant",
  afterLabel = "Après",
  accent = "#c8221e",
}: BeforeAfterProps) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const onMove = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(2, Math.min(98, p)));
  };

  useEffect(() => {
    const up = () => { dragging.current = false; };
    const mv = (e: MouseEvent) => { if (dragging.current) onMove(e.clientX); };
    const tmv = (e: TouchEvent) => {
      if (dragging.current && e.touches[0]) onMove(e.touches[0].clientX);
    };
    window.addEventListener("mousemove", mv);
    window.addEventListener("touchmove", tmv);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", mv);
      window.removeEventListener("touchmove", tmv);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, []);

  const start = (clientX: number) => {
    dragging.current = true;
    onMove(clientX);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={(e) => start(e.clientX)}
      onTouchStart={(e) => start(e.touches[0].clientX)}
      style={{
        position: "relative",
        width: "100%",
        height,
        overflow: "hidden",
        cursor: "ew-resize",
        userSelect: "none",
        background: "#1a1a1a",
      }}
    >
      {/* After (full background) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={after}
        alt=""
        draggable={false}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
        }}
      />

      {/* Before (clipped left portion) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          clipPath: `inset(0 ${100 - pos}% 0 0)`,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={before}
          alt=""
          draggable={false}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
          }}
        />
      </div>


      {/* Labels */}
      <div
        style={{
          position: "absolute",
          top: 18,
          left: 18,
          background: "rgba(15,15,15,.78)",
          color: "#fff",
          padding: "6px 12px",
          fontSize: 12,
          letterSpacing: "0.12em",
          fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
          textTransform: "uppercase",
          borderRadius: 0,
        }}
      >
        {beforeLabel}
      </div>
      <div
        style={{
          position: "absolute",
          top: 18,
          right: 18,
          background: accent,
          color: "#fff",
          padding: "6px 12px",
          fontSize: 12,
          letterSpacing: "0.12em",
          fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
          textTransform: "uppercase",
          borderRadius: 0,
        }}
      >
        {afterLabel}
      </div>

      {/* Divider line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${pos}%`,
          width: 2,
          background: "#fff",
          transform: "translateX(-1px)",
          pointerEvents: "none",
          boxShadow: "0 0 0 1px rgba(0,0,0,.15)",
        }}
      />

      {/* Drag handle */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: `${pos}%`,
          transform: "translate(-50%, -50%)",
          width: 44,
          height: 44,
          borderRadius: 999,
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 24px rgba(0,0,0,.35)",
          pointerEvents: "none",
          color: "#1a1a1a",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M7 5L3 10L7 15"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 5L17 10L13 15"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
