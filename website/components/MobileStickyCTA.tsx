"use client";

const RED = "#c8221e";
const F_SANS = "var(--font-manrope), system-ui, sans-serif";

export default function MobileStickyCTA() {
  return (
    <>
      {/* Spacer so last section content isn't hidden behind the bar */}
      <div className="mobile-sticky-cta-spacer md:hidden" aria-hidden />

      {/* Sticky bar — mobile only */}
      <div
        className="flex md:hidden"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "rgba(31,29,27,.96)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          padding: "10px 16px 22px",
          borderTop: "1px solid rgba(255,255,255,.08)",
          gap: 8,
          fontFamily: F_SANS,
        }}
      >
        <a
          href="tel:0650440673"
          style={{
            flex: 1,
            background: RED,
            color: "#fff",
            padding: "14px 18px",
            borderRadius: 999,
            fontWeight: 700,
            fontSize: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
          </svg>
          Appeler Léo
        </a>
        <a
          href="/contact"
          style={{
            background: "rgba(255,255,255,.12)",
            color: "#fff",
            padding: "14px 20px",
            borderRadius: 999,
            fontWeight: 600,
            fontSize: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Devis
        </a>
      </div>
    </>
  );
}
