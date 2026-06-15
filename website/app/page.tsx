"use client";

import { useState } from "react";
import Link from "next/link";
import BeforeAfter from "@/components/BeforeAfter";

// ─── Design tokens ──────────────────────────────────────────────────────────
const C = {
  bg: "#f6f3ec",
  bgAlt: "#efeae0",
  card: "#ffffff",
  ink: "#1f1d1b",
  inkSoft: "#5a5550",
  line: "#e3ddd1",
  red: "#c8221e",
} as const;

const F = {
  sans: "var(--font-manrope), system-ui, sans-serif",
  serif: "var(--font-instrument-serif), Georgia, serif",
  mono: "var(--font-jetbrains-mono), ui-monospace, monospace",
} as const;

// ─── Shared ──────────────────────────────────────────────────────────────────
function MonoLabel({ children, color = C.red }: { children: React.ReactNode; color?: string }) {
  return (
    <div
      style={{
        fontFamily: F.mono,
        fontSize: 11,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      <span style={{ width: 14, height: 1, background: color, display: "inline-block" }} />
      {children}
    </div>
  );
}

const PhoneIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
  </svg>
);

// ─── Hero ────────────────────────────────────────────────────────────────────
// Mobile order : label → h1 → p → photo → CTAs → stats
// Desktop order: [label + h1 + p + CTAs + stats] | [photo]
// Strategy: CTAs & stats are duplicated — one set inside the desktop left
// column (hidden on mobile), one set after the grid (hidden on desktop).

const HeroCTAs = () => (
  <div className="flex flex-col sm:flex-row gap-3">
    <a
      href="tel:0650440673"
      style={{
        background: C.red, color: "#fff", padding: "16px 26px", borderRadius: 999,
        fontWeight: 700, fontSize: 16, display: "flex", alignItems: "center",
        justifyContent: "center", gap: 10,
        boxShadow: "0 6px 24px rgba(200,34,30,.28)",
      }}
    >
      <PhoneIcon />
      Appeler · 06 50 44 06 73
    </a>
    <Link
      href="/contact"
      style={{
        background: "transparent", color: C.ink, border: `1.5px solid ${C.ink}`,
        padding: "14px 24px", borderRadius: 999, fontWeight: 600, fontSize: 16,
        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
      }}
    >
      Demander un devis →
    </Link>
  </div>
);

const HeroStats = () => (
  <div
    style={{
      display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12,
      paddingTop: 22, borderTop: `1px solid ${C.line}`,
    }}
  >
    {[["10+", "années terrain"], ["< 2h", "intervention"], ["4,9/5", "87 avis Google"]].map(([n, l]) => (
      <div key={l}>
        <div style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 800, letterSpacing: "-0.02em", color: C.ink }}>{n}</div>
        <div style={{ fontSize: 12, color: C.inkSoft, marginTop: 2 }}>{l}</div>
      </div>
    ))}
  </div>
);

function Hero() {
  return (
    <section className="px-5 md:px-14" style={{ paddingTop: 40, paddingBottom: 52, background: C.bg }}>
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">

        {/* LEFT COL (desktop) / top text block (mobile) */}
        <div>
          <MonoLabel>Vitrerie · Miroiterie · Lyon &amp; alentours</MonoLabel>
          <h1
            style={{
              fontFamily: F.sans, fontWeight: 800,
              fontSize: "clamp(40px, 6vw, 78px)", lineHeight: 0.98,
              letterSpacing: "-0.025em", margin: "18px 0 16px", color: C.ink,
            }}
          >
            La vitre cassée ce matin,
            <br />
            <span style={{ fontFamily: F.serif, fontStyle: "italic", fontWeight: 400, color: C.red }}>
              réparée avant ce soir.
            </span>
          </h1>
          <p style={{ fontSize: "clamp(15px, 1.5vw, 19px)", lineHeight: 1.55, color: C.inkSoft, maxWidth: 520, margin: "0 0 28px" }}>
            Je suis Léo Puillet, vitrier indépendant à Lyon. Remplacement de
            vitrage, double vitrage, miroirs sur mesure, portes vitrées — chez
            les particuliers comme dans les copropriétés. Devis clair,
            intervention rapide, travail propre.
          </p>

          {/* CTAs + stats — desktop only inside the left column */}
          <div className="hidden md:flex flex-col gap-7">
            <HeroCTAs />
            <HeroStats />
          </div>
        </div>

        {/* RIGHT COL (desktop) / second block (mobile) */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              borderRadius: 20, overflow: "hidden",
              boxShadow: "0 30px 80px -20px rgba(31,29,27,.4)",
              aspectRatio: "4 / 5",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              loading="lazy"
              src="/assets/artisan-camion.jpeg"
              alt="Romain Puillet, vitrier"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Floating quote card — responsive position via CSS class */}
          <div
            className="hero-quote-card"
            style={{
              position: "absolute", background: "#fff",
              padding: "14px 16px", borderRadius: 14,
              boxShadow: "0 14px 30px -8px rgba(31,29,27,.25)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 7 }}>
              <div
                style={{
                  width: 36, height: 36, borderRadius: 999, background: C.red,
                  color: "#fff", display: "flex", alignItems: "center",
                  justifyContent: "center", fontWeight: 800, fontSize: 12, flexShrink: 0,
                }}
              >
                RP
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13 }}>Léo Puillet</div>
                <div style={{ fontSize: 11, color: C.inkSoft }}>Vitrier · Fondateur</div>
              </div>
            </div>
            <div style={{ fontFamily: F.serif, fontStyle: "italic", fontSize: 14, lineHeight: 1.35, color: C.ink }}>
              « Un coup de fil et je suis sur place. »
            </div>
          </div>

          {/* Available badge — responsive position via CSS class */}
          <div
            className="hero-badge"
            style={{
              position: "absolute", background: C.ink, color: "#fff",
              borderRadius: 999, padding: "9px 14px",
              display: "flex", alignItems: "center", gap: 7,
              fontSize: 12, fontWeight: 600,
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: 999, background: "#34c759" }} />
            Disponible aujourd&rsquo;hui
          </div>
        </div>
      </div>

      {/* CTAs + stats — mobile only, rendered AFTER the photo */}
      <div className="flex flex-col gap-6 mt-6 md:hidden">
        <HeroCTAs />
        <HeroStats />
      </div>
    </section>
  );
}

// ─── Services ────────────────────────────────────────────────────────────────
const SERVICES = [
  { n: "01", t: "Remplacement de vitrage", d: "Simple ou double vitrage, sur-mesure, posé dans la journée pour les urgences.", tag: "le + demandé" },
  { n: "02", t: "Vitrage feuilleté & sécurité", d: "Anti-effraction, retardateur d'effraction certifié SP10 et SP10A.", tag: "sécurité" },
  { n: "03", t: "Double vitrage isolant", d: "Argon, faible émissivité — confort thermique et facture d'énergie qui baisse.", tag: "isolation" },
  { n: "04", t: "Miroiterie sur mesure", d: "Miroirs salle de bain, dressing, mural, biseauté, anti-buée — coupés à vos cotes.", tag: "sur mesure" },
  { n: "05", t: "Portes d'entrée vitrées", d: "Réparation, pose neuve, vitrage de porte d'immeuble et copropriété.", tag: "copros" },
  { n: "06", t: "Dépannage 7j/7", d: "Vitre cassée, fenêtre fracturée — sécurisation immédiate puis remplacement.", tag: "24/7" },
];

function Services() {
  return (
    <section
      className="px-5 md:px-14"
      style={{ paddingTop: 52, paddingBottom: 52, background: C.bgAlt, borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-10">
        <div>
          <MonoLabel>Services</MonoLabel>
          <h2
            style={{
              fontSize: "clamp(28px, 4.5vw, 56px)",
              lineHeight: 1.02,
              letterSpacing: "-0.025em",
              margin: "14px 0 0",
              fontWeight: 800,
              color: C.ink,
            }}
          >
            Tout ce qui touche au verre,
            <br />
            <span style={{ fontFamily: F.serif, fontStyle: "italic", fontWeight: 400 }}>chez vous, par un seul artisan.</span>
          </h2>
        </div>
        <div style={{ fontSize: 14, color: C.inkSoft, maxWidth: 280 }} className="hidden md:block">
          Particuliers, syndics de copropriété, agences immobilières, assureurs.
        </div>
      </div>

      {/* 1-col on mobile, 2-col sm, 3-col lg */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SERVICES.map((s) => (
          <div
            key={s.n}
            style={{
              background: C.card,
              borderRadius: 16,
              padding: "20px 18px",
              border: `1px solid ${C.line}`,
              display: "flex",
              flexDirection: "column",
              gap: 10,
              minHeight: 200,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontFamily: F.mono, fontSize: 12, color: C.red, letterSpacing: "0.1em" }}>— {s.n}</div>
              <div
                style={{
                  fontFamily: F.mono,
                  fontSize: 10,
                  padding: "3px 9px",
                  borderRadius: 999,
                  background: C.bg,
                  color: C.inkSoft,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {s.tag}
              </div>
            </div>
            <div style={{ fontSize: "clamp(16px, 1.8vw, 22px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.015em", color: C.ink }}>{s.t}</div>
            <div style={{ fontSize: 14, color: C.inkSoft, lineHeight: 1.5 }}>{s.d}</div>
            <Link
              href="/services"
              style={{
                marginTop: "auto",
                fontSize: 13,
                fontWeight: 600,
                color: C.ink,
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              En savoir plus
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke={C.ink} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Réalisations ────────────────────────────────────────────────────────────
const REALISATIONS = [
  { before: "/assets/porte-bois-avant.jpeg", after: "/assets/porte-bois-apres.jpeg", title: "Porte d'entrée d'immeuble · Lyon 6", meta: "Vitrage cathédrale · Remplacement 3 carreaux · 1 journée", tag: "Copropriété" },
  { before: "/assets/vitre-avant.jpeg", after: "/assets/vitre-apres.jpeg", title: "Vitre cassée · Appartement haussmannien · Lyon 2", meta: "Sécurisation puis remplacement · Pose en 4h", tag: "Dépannage" },
  { before: "/assets/porte-alu-avant.jpeg", after: "/assets/porte-alu-apres.jpeg", title: "Porte vitrée résidence · Villeurbanne", meta: "Vitrage feuilleté 44.2 · Sécurité anti-effraction", tag: "Sécurité" },
];

function Realisations() {
  const [idx, setIdx] = useState(0);
  const cur = REALISATIONS[idx];

  const prev = () => setIdx((idx - 1 + REALISATIONS.length) % REALISATIONS.length);
  const next = () => setIdx((idx + 1) % REALISATIONS.length);

  return (
    <section className="px-5 md:px-14" style={{ paddingTop: 60, paddingBottom: 60, background: C.bg }}>
      {/* Heading row */}
      <div className="flex justify-between items-end mb-6 gap-4">
        <div>
          <MonoLabel>Réalisations récentes</MonoLabel>
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
      <div style={{ borderRadius: 20, overflow: "hidden", border: `1px solid ${C.line}`, background: "#fff" }}>
        <BeforeAfter before={cur.before} after={cur.after} height={420} accent={C.red} />
        <div style={{ padding: "18px 20px 20px", background: "#fff" }}>
          <div style={{ fontFamily: F.mono, fontSize: 10, color: C.red, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 5 }}>
            {cur.tag} · {String(idx + 1).padStart(2, "0")} / {String(REALISATIONS.length).padStart(2, "0")}
          </div>
          <div style={{ fontSize: "clamp(16px, 1.8vw, 22px)", fontWeight: 700, letterSpacing: "-0.01em", color: C.ink }}>{cur.title}</div>
          <div style={{ fontSize: 13, color: C.inkSoft, marginTop: 3 }}>{cur.meta}</div>
        </div>
      </div>

      {/* Mobile nav: dots (left) + arrows (right) */}
      <div className="flex justify-between items-center mt-4 md:hidden">
        <div style={{ display: "flex", gap: 5 }}>
          {REALISATIONS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Réalisation ${i + 1}`}
              style={{ width: i === idx ? 24 : 7, height: 7, borderRadius: 999, background: i === idx ? C.red : C.line, cursor: "pointer", transition: "all .2s", border: "none", padding: 0 }}
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
      <div className="hidden md:flex gap-2 mt-4">
        {REALISATIONS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Réalisation ${i + 1}`}
            style={{ width: i === idx ? 30 : 8, height: 8, borderRadius: 999, background: i === idx ? C.red : C.line, cursor: "pointer", transition: "all .2s", border: "none", padding: 0 }}
          />
        ))}
      </div>
    </section>
  );
}

// ─── À propos ────────────────────────────────────────────────────────────────
function About() {
  const features = [
    ["Travail propre", "Bâches, aspirateur, je laisse comme j'ai trouvé."],
    ["Prix annoncé", "Le devis est ce que vous payez. Pas de surprise."],
    ["Garantie 2 ans", "Pose et fournitures garanties, sans condition."],
    ["Assurances", "Agréé MAIF, Macif, MAAF, Groupama et autres."],
  ] as const;

  return (
    <section className="px-5 md:px-14" style={{ paddingTop: 60, paddingBottom: 60, background: C.ink, color: "#fff" }}>
      {/* 1-col on mobile, 2-col on desktop. Photo is first in DOM → appears on top on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "4/3 " }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img loading="lazy" src="/assets/camion-paysage.jpeg" alt="Camion Puillet Vitrerie" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div>
          <MonoLabel color="#ff8d72">À propos</MonoLabel>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: 1, letterSpacing: "-0.025em", margin: "16px 0 20px", fontWeight: 800 }}>
            Un artisan, un camion,
            <br />
            <span style={{ fontFamily: F.serif, fontStyle: "italic", fontWeight: 400, color: "#ff8d72" }}>et la parole donnée.</span>
          </h2>
          <p style={{ fontSize: "clamp(14px, 1.4vw, 18px)", lineHeight: 1.6, color: "#d6d1c7", maxWidth: 540, marginBottom: 14 }}>
            J&rsquo;ai monté Puillet Vitrerie en 2018 après dix ans à apprendre le métier en entreprise. Aujourd&rsquo;hui je travaille seul, à Lyon et dans la métropole. Pas d&rsquo;intermédiaire, pas de devis bidon. Je prends le téléphone, je viens mesurer, je fabrique, je pose.
          </p>
          <p style={{ fontSize: "clamp(14px, 1.4vw, 18px)", lineHeight: 1.6, color: "#d6d1c7", maxWidth: 540, marginBottom: 28 }}>
            La plupart de mes clients reviennent — ou m&rsquo;envoient leur voisin. Ça me va très bien comme ça.
          </p>

          <div className="grid grid-cols-2 gap-4" style={{ maxWidth: 540 }}>
            {features.map(([t, d]) => (
              <div key={t} style={{ paddingTop: 16, borderTop: "1px solid rgba(255,255,255,.12)" }}>
                <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 5 }}>{t}</div>
                <div style={{ fontSize: 13, color: "#a8a39a", lineHeight: 1.5 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Témoignages ─────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  { name: "Claire M.", loc: "Lyon 3", rating: 5, text: "Vitre cassée un dimanche soir, Léo est passé le lundi à 8h. Travail impeccable, prix tenu. Je le recommande à toute la copro." },
  { name: "Jean-Marc L.", loc: "Caluire-et-Cuire", rating: 5, text: "On a fait poser un double vitrage sur trois fenêtres. Conseil honnête, pose nickel, et un vrai gain de confort en hiver." },
  { name: "Sophie B.", loc: "Villeurbanne", rating: 5, text: "Miroir sur mesure pour la salle de bain, parfaitement posé. Très ponctuel, très propre, et il prend le temps d'expliquer." },
] as const;

function Testimonials() {
  return (
    <section id="temoignages" className="px-5 md:px-14" style={{ paddingTop: 60, paddingBottom: 60, background: C.bg }}>
      <MonoLabel>Ils m&rsquo;ont fait confiance</MonoLabel>
      <h2 style={{ fontSize: "clamp(26px, 4vw, 56px)", lineHeight: 1.02, letterSpacing: "-0.025em", margin: "14px 0 36px", fontWeight: 800, color: C.ink }}>
        4,9 sur 5 —{" "}
        <span style={{ fontFamily: F.serif, fontStyle: "italic", fontWeight: 400 }}>et 87 voisins</span>{" "}
        qui le disent mieux que moi.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {TESTIMONIALS.map((t) => (
          <div key={t.name} style={{ background: "#fff", borderRadius: 16, padding: "24px 22px", border: `1px solid ${C.line}`, display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", gap: 2, color: C.red }}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.7L6 22l1.5-7.2L2 10l7.1-1.1z" />
                </svg>
              ))}
            </div>
            <div style={{ fontFamily: F.serif, fontSize: "clamp(16px, 1.6vw, 22px)", lineHeight: 1.35, color: C.ink }}>
              « {t.text} »
            </div>
            <div style={{ paddingTop: 14, borderTop: `1px solid ${C.line}`, display: "flex", justifyContent: "space-between" }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.ink }}>{t.name}</div>
              <div style={{ fontSize: 12, color: C.inkSoft }}>{t.loc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Zones ───────────────────────────────────────────────────────────────────
const VILLES = [
  "Lyon 1er", "Lyon 2e", "Lyon 3e", "Lyon 4e", "Lyon 5e", "Lyon 6e",
  "Lyon 7e", "Lyon 8e", "Lyon 9e", "Villeurbanne", "Caluire-et-Cuire",
  "Bron", "Vénissieux", "Saint-Priest", "Écully", "Tassin",
  "Sainte-Foy-lès-Lyon", "Oullins", "Pierre-Bénite", "Vaulx-en-Velin",
  "Décines", "Meyzieu", "Rillieux-la-Pape", "Champagne-au-Mont-d'Or",
];

function Zones() {
  const CityTags = () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
      {VILLES.map((v) => (
        <span key={v} style={{ padding: "7px 13px", borderRadius: 999, background: "#fff", border: `1px solid ${C.line}`, fontSize: 13, color: C.ink }}>{v}</span>
      ))}
    </div>
  );

  return (
    <section id="zones" className="px-5 md:px-14" style={{ paddingTop: 60, paddingBottom: 60, background: C.bgAlt, borderTop: `1px solid ${C.line}` }}>
      <div className="grid grid-cols-1 md:grid-cols-[5fr_6fr] gap-10 md:gap-16 items-start">
        {/* Left: text + tags on desktop */}
        <div>
          <MonoLabel>Zones d&rsquo;intervention</MonoLabel>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.02, letterSpacing: "-0.025em", margin: "14px 0 16px", fontWeight: 800, color: C.ink }}>
            Lyon et toute
            <br />
            la métropole.
          </h2>
          <p style={{ fontSize: "clamp(14px, 1.4vw, 17px)", lineHeight: 1.6, color: C.inkSoft, maxWidth: 440, marginBottom: 20 }}>
            Je me déplace dans un rayon d&rsquo;environ 25 km autour de Lyon, sans facturer de déplacement. Pour les urgences hors zone, appelez-moi : on trouvera une solution.
          </p>
          {/* Tags visible on desktop inside the left column */}
          <div className="hidden md:block">
            <CityTags />
          </div>
        </div>

        {/* Right: SVG map */}
        <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", background: C.ink, aspectRatio: "5/4" }}>
          <svg viewBox="0 0 500 400" style={{ width: "100%", height: "100%", display: "block" }}>
            <defs>
              <pattern id="mapGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,.06)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="500" height="400" fill="url(#mapGrid)" />
            <path d="M 80 0 C 120 80 90 180 150 240 S 200 360 180 400" stroke="rgba(120,160,200,.5)" strokeWidth="3" fill="none" />
            <path d="M 220 0 C 200 60 240 140 220 220 S 260 340 230 400" stroke="rgba(120,160,200,.5)" strokeWidth="3" fill="none" />
            <circle cx="240" cy="200" r="60" fill={C.red} fillOpacity="0.15" stroke={C.red} strokeOpacity="0.5" strokeDasharray="4 4" />
            <circle cx="240" cy="200" r="120" fill={C.red} fillOpacity="0.06" stroke={C.red} strokeOpacity="0.3" strokeDasharray="4 4" />
            <circle cx="240" cy="200" r="170" fill="none" stroke={C.red} strokeOpacity="0.2" strokeDasharray="4 4" />
            <circle cx="240" cy="200" r="8" fill={C.red} />
            <circle cx="240" cy="200" r="14" fill="none" stroke={C.red} strokeWidth="2" />
            <text x="252" y="196" fill="#fff" fontFamily="JetBrains Mono, monospace" fontSize="12" fontWeight="600">LYON</text>
            <text x="252" y="212" fill="rgba(255,255,255,.5)" fontFamily="JetBrains Mono, monospace" fontSize="10">45.75°N · 4.84°E</text>
            {[
              [180, 130, "Caluire"], [310, 170, "Villeurbanne"], [320, 250, "Bron"],
              [280, 310, "Vénissieux"], [170, 270, "Oullins"], [120, 200, "Tassin"],
              [380, 220, "Saint-Priest"], [400, 130, "Décines"],
            ].map(([x, y, name], i) => (
              <g key={i}>
                <circle cx={x as number} cy={y as number} r="3" fill="#fff" />
                <text x={(x as number) + 8} y={(y as number) + 4} fill="rgba(255,255,255,.7)" fontFamily="JetBrains Mono, monospace" fontSize="10">{name as string}</text>
              </g>
            ))}
          </svg>
          <div style={{ position: "absolute", bottom: 14, left: 14, fontFamily: F.mono, fontSize: 10, color: "rgba(255,255,255,.6)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
            Rayon ~25 km · sans frais de déplacement
          </div>
        </div>
      </div>

      {/* Tags on mobile — below the map */}
      <div className="md:hidden mt-5">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
          {VILLES.map((v) => (
            <span key={v} style={{ padding: "7px 12px", borderRadius: 999, background: "#fff", border: `1px solid ${C.line}`, fontSize: 12, color: C.ink }}>{v}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  { q: "Quels sont vos délais pour un dépannage urgent ?", a: "Pour une vitre cassée sur Lyon ou la métropole, j'interviens en moins de 2h en journée, et dans la journée pour le sur-mesure. Sécurisation immédiate, puis remplacement définitif sous 24 à 72h selon le vitrage." },
  { q: "Travaillez-vous avec les assurances ?", a: "Oui, je suis agréé par la plupart des grandes compagnies (MAIF, Macif, MAAF, Groupama, AXA…). Je peux vous aider à monter le dossier et facturer directement votre assureur dans la majorité des cas." },
  { q: "Combien coûte un remplacement de double vitrage ?", a: "Cela dépend des dimensions, de l'épaisseur et du type de vitrage (isolant, feuilleté, dépoli). Un devis gratuit et clair vous est remis avant toute intervention — généralement sous 24h." },
  { q: "Intervenez-vous le week-end ?", a: "Oui, le service de dépannage urgent fonctionne 7j/7, y compris le week-end et les jours fériés, pour la sécurisation d'une ouverture." },
  { q: "Faites-vous des miroirs sur mesure ?", a: "Bien sûr — miroirs muraux, salle de bain anti-buée, dressing, biseautés, percés. Mesure sur place, fabrication à l'atelier, pose à domicile." },
];

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="px-5 md:px-14" style={{ paddingTop: 60, paddingBottom: 60, background: C.bg }}>
      {/* 1-col on mobile (heading + accordion stacked), 2-col on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 md:gap-20">
        <div>
          <MonoLabel>Questions fréquentes</MonoLabel>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 48px)", lineHeight: 1.02, letterSpacing: "-0.025em", margin: "14px 0 0", fontWeight: 800, color: C.ink }}>
            Les questions
            <br className="hidden md:block" />
            {" "}que l&rsquo;on me{" "}
            <br className="hidden md:block" />
            <span style={{ fontFamily: F.serif, fontStyle: "italic", fontWeight: 400 }}>pose souvent.</span>
          </h2>
        </div>
        <div>
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              onClick={() => setOpen(open === i ? -1 : i)}
              style={{ padding: "22px 4px", borderBottom: `1px solid ${C.line}`, cursor: "pointer" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                <div style={{ fontSize: "clamp(15px, 1.5vw, 19px)", fontWeight: 600, letterSpacing: "-0.01em", color: C.ink, lineHeight: 1.3 }}>{item.q}</div>
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 999,
                    border: `1.5px solid ${C.ink}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: open === i ? "rotate(45deg)" : "rotate(0)",
                    transition: "transform .2s",
                    flexShrink: 0,
                  }}
                >
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1V11M1 6H11" stroke={C.ink} strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              {open === i && (
                <div style={{ fontSize: "clamp(14px, 1.3vw, 16px)", lineHeight: 1.55, color: C.inkSoft, marginTop: 12, maxWidth: 640 }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────
function ContactField({ label, placeholder, textarea, select, options }: {
  label: string; placeholder?: string; textarea?: boolean; select?: boolean; options?: string[];
}) {
  return (
    <label style={{ display: "block" }}>
      <div style={{ fontFamily: F.mono, fontSize: 10, color: C.inkSoft, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 7 }}>{label}</div>
      {textarea ? (
        <textarea placeholder={placeholder} rows={3} style={{ width: "100%", padding: "10px 13px", border: `1px solid ${C.line}`, borderRadius: 10, background: C.bg, fontFamily: F.sans, fontSize: 14, resize: "none", color: C.ink, outline: "none" }} />
      ) : select && options ? (
        <select style={{ width: "100%", padding: "10px 13px", border: `1px solid ${C.line}`, borderRadius: 10, background: C.bg, fontFamily: F.sans, fontSize: 14, color: C.inkSoft, outline: "none", appearance: "none" }}>
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
      ) : (
        <input placeholder={placeholder} style={{ width: "100%", padding: "10px 13px", border: `1px solid ${C.line}`, borderRadius: 10, background: C.bg, fontFamily: F.sans, fontSize: 14, color: C.ink, outline: "none" }} />
      )}
    </label>
  );
}

function Contact() {
  return (
    <section style={{ paddingTop: 60, paddingBottom: 60, background: C.bgAlt, borderTop: `1px solid ${C.line}` }} className="px-5 md:px-14">
      {/*
        DOM order: emergency first, form second.
        - Mobile: emergency on top (natural), form below
        - Desktop: form on left (order-last md:order-first), emergency on right (order-first md:order-last)
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-stretch">

        {/* Emergency card — first in DOM → top on mobile, right on desktop */}
        <div
          className="order-first md:order-last"
          style={{ background: C.ink, color: "#fff", borderRadius: 18, padding: "28px 26px", display: "flex", flexDirection: "column", gap: 20 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 9, height: 9, borderRadius: 999, background: "#34c759", boxShadow: "0 0 0 4px rgba(52,199,89,.18)" }} />
            <span style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#a8a39a" }}>Urgence 24/7</span>
          </div>
          <div style={{ fontSize: "clamp(22px, 2.8vw, 34px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Une vitre vient de céder ? Appelez tout de suite.
          </div>
          <a href="tel:0650440673" style={{ background: C.red, color: "#fff", padding: "22px 24px", borderRadius: 14, display: "flex", alignItems: "center", gap: 14 }}>
            <PhoneIcon size={28} />
            <div>
              <div style={{ fontSize: 11, opacity: 0.85, letterSpacing: "0.12em", textTransform: "uppercase" }}>Léo Puillet — vitrier</div>
              <div style={{ fontSize: "clamp(22px, 2.5vw, 30px)", fontWeight: 800, letterSpacing: "-0.01em" }}>06 50 44 06 73</div>
            </div>
          </a>
          <div className="grid grid-cols-2 gap-4" style={{ paddingTop: 4 }}>
            {[["E-mail", "puilletvitrerie@gmail.com"], ["Horaires", "Lun–Sam 7h–20h\nUrgence : 24/7"]].map(([title, val]) => (
              <div key={title}>
                <div style={{ fontFamily: F.mono, fontSize: 10, color: "#a8a39a", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 5 }}>{title}</div>
                <div style={{ fontSize: 14, whiteSpace: "pre-line" }}>{val}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "auto", paddingTop: 16, borderTop: "1px solid rgba(255,255,255,.12)", fontSize: 12, color: "#a8a39a" }}>
            SIRET 995 238 169 00016 · Assurance décennale MAAF n° 158203/AB
          </div>
        </div>

        {/* Form — second in DOM → bottom on mobile, left on desktop */}
        <div className="order-last md:order-first">
          <MonoLabel>Demande de devis</MonoLabel>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.02, letterSpacing: "-0.025em", margin: "14px 0 14px", fontWeight: 800, color: C.ink }}>
            Décrivez-moi votre{" "}
            <span style={{ fontFamily: F.serif, fontStyle: "italic", fontWeight: 400 }}>besoin</span>.
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.55, color: C.inkSoft, maxWidth: 460, marginBottom: 22 }}>
            Photo + dimensions, ou &ldquo;vitre cassée chambre + adresse&rdquo; — je rappelle dans l&rsquo;heure. Sans engagement.
          </p>

          <form
            style={{ background: "#fff", borderRadius: 18, padding: 22, border: `1px solid ${C.line}`, display: "grid", gap: 12 }}
            onSubmit={(e) => e.preventDefault()}
          >
            {/* 2-col on sm+, 1-col on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <ContactField label="Prénom" placeholder="Marie" />
              <ContactField label="Nom" placeholder="Dupont" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <ContactField label="Téléphone" placeholder="06 12 34 56 78" />
              <ContactField label="Code postal" placeholder="69003" />
            </div>
            <ContactField label="Type de demande" select options={["Vitre cassée – dépannage urgent", "Devis double vitrage", "Miroir sur mesure", "Porte d'entrée vitrée", "Autre"]} />
            <ContactField label="Décrivez" textarea placeholder="Un mot sur la situation, dimensions, photos, étage…" />
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-1">
              <div style={{ fontSize: 12, color: C.inkSoft }}>Réponse sous 1h en journée · 7j/7</div>
              <button
                type="submit"
                style={{ background: C.red, color: "#fff", border: "none", padding: "13px 24px", borderRadius: 999, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, fontFamily: F.sans, width: "100%" }}
                className="sm:w-auto justify-center"
              >
                Envoyer la demande
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div style={{ background: C.bg, color: C.ink, fontFamily: F.sans, WebkitFontSmoothing: "antialiased" }}>
      <Hero />
      <Services />
      <Realisations />
      <About />
      <Testimonials />
      <Zones />
      <FAQ />
      <Contact />
    </div>
  );
}
