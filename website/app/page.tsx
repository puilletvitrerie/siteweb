import type { Metadata } from "next";
import Link from "next/link";
import VideoPresentation from "@/components/VideoPresentation";
import { VILLES } from "@/lib/villes";

export const metadata: Metadata = {
  title: { absolute: "Vitrier à Lyon · Intervention sous 24h | Puillet Vitrerie" },
  description:
    "Vitrier à Lyon et métropole : intervention sous 24h, urgence simple vitrage en moins de 2h. Devis gratuit, prix du devis = prix final. 06 50 44 06 73",
  alternates: { canonical: "/" },
};

// ─── Design tokens ──────────────────────────────────────────────────────────
const C = {
  bg: "#F6F3EC",
  bgAlt: "#EFEAE0",
  card: "#FFFFFF",
  line: "#E3DDD1",
  ink: "#1F1D1B",
  inkSoft: "#5A5550",
  muted: "#A8A39A",
  blue: "#3B8FD4",
  blueDark: "#2B6FA8",
  blueLight: "#7DB9EA",
  green: "#34C759",
} as const;

const F = {
  sans: "var(--font-manrope), system-ui, sans-serif",
  serif: "var(--font-instrument-serif), Georgia, serif",
} as const;

const TEL = "tel:+33650440673";
const WHATSAPP = "https://wa.me/33650440673";
const GOOGLE_REVIEWS_URL = "https://maps.google.com/?cid=4036198005292784636";

// ─── Shared ──────────────────────────────────────────────────────────────────
function Label({ children, color = C.blueDark }: { children: React.ReactNode; color?: string }) {
  return (
    <div style={{ fontFamily: F.sans, fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color }}>
      — {children}
    </div>
  );
}

function Serif({ children, color = C.blueDark }: { children: React.ReactNode; color?: string }) {
  return <span style={{ fontFamily: F.serif, fontStyle: "italic", fontWeight: 400, color, letterSpacing: "-0.01em" }}>{children}</span>;
}

const h2Style: React.CSSProperties = {
  fontFamily: F.sans,
  fontWeight: 800,
  fontSize: "clamp(30px, 4.5vw, 56px)",
  letterSpacing: "-0.03em",
  lineHeight: 1.05,
  margin: "14px 0 16px",
};

const PhoneIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const CameraIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

const pill: React.CSSProperties = {
  minHeight: 56,
  padding: "0 28px",
  borderRadius: 999,
  fontFamily: F.sans,
  fontWeight: 700,
  fontSize: 16,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
};

function CallButton({ label = "Appeler · 06 50 44 06 73" }: { label?: string }) {
  return (
    <a href={TEL} style={{ ...pill, background: C.blue, color: "#fff", boxShadow: "0 8px 24px rgba(59,143,212,.35)" }}>
      <PhoneIcon />
      {label}
    </a>
  );
}

// ─── 3. Bannière ─────────────────────────────────────────────────────────────
function HeroText() {
  return (
    <>
      <Label color="#fff">Vitrerie · Miroiterie · Lyon &amp; alentours</Label>
      <h1
        style={{
          fontFamily: F.sans,
          fontWeight: 800,
          fontSize: "clamp(44px, 7vw, 88px)",
          letterSpacing: "-0.03em",
          lineHeight: 1.02,
          margin: "16px 0 18px",
          color: "#fff",
        }}
      >
        Vitre cassée ?
        <br />
        <Serif color={C.blueLight}>Intervention sous 24h.</Serif>
      </h1>
      <p style={{ fontSize: "clamp(16px, 1.6vw, 19px)", lineHeight: 1.55, color: "rgba(255,255,255,.88)", maxWidth: 560, margin: "0 0 26px" }}>
        Intervention en moins de 24h, en moins de 2h pour une urgence simple vitrage. Devis gratuit, et le prix du devis est le prix final.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <CallButton />
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" style={{ ...pill, background: "#fff", color: C.ink }}>
          <CameraIcon />
          Envoyer une photo de ma vitre
        </a>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section aria-label="Puillet Vitrerie, vitrier à Lyon" className="relative" style={{ background: C.ink }}>
      <div className="relative h-[300px] md:h-[680px]" style={{ width: "100%", overflow: "hidden" }}>
        <picture>
          <source media="(max-width: 767px)" srcSet="/assets/camion-paysage-900.webp" type="image/webp" />
          <source srcSet="/assets/camion-paysage.webp" type="image/webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/camion-paysage.jpeg"
            alt="Camion de Puillet Vitrerie, vitrier à Lyon"
            fetchPriority="high"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 55%" }}
          />
        </picture>
        <div
          aria-hidden
          className="hidden md:block"
          style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(20,18,16,.88) 0%, rgba(20,18,16,.55) 45%, rgba(20,18,16,.25) 100%)" }}
        />
        <div
          style={{ position: "absolute", top: 20, left: 20, display: "flex", alignItems: "center", gap: 8, background: "rgba(15,15,15,0.78)", color: "#fff", borderRadius: 999, padding: "9px 14px", fontSize: 13, fontWeight: 700 }}
        >
          <span style={{ width: 8, height: 8, borderRadius: 999, background: C.green }} />
          Disponible aujourd&rsquo;hui
        </div>
      </div>
      {/* Mobile : sous la photo. Ordinateur : posé en bas de la photo. */}
      <div className="md:absolute md:inset-x-0 md:bottom-0">
        <div className="px-5 pt-7 pb-9 md:px-10 md:pt-0 md:pb-14" style={{ maxWidth: 1200, margin: "0 auto" }}>
          <HeroText />
        </div>
      </div>
    </section>
  );
}

// ─── 4. Vidéo de présentation ────────────────────────────────────────────────
function Video() {
  return (
    <section className="px-5 md:px-10" style={{ background: C.bgAlt, paddingTop: 64, paddingBottom: 64 }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center" style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div>
          <Label>Qui vient chez vous</Label>
          <h2 style={h2Style}>
            Léo Puillet,
            <br />
            <Serif>votre vitrier, en 1 minute.</Serif>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: C.inkSoft, maxWidth: 480, margin: "0 0 16px" }}>
            Des interventions filmées, comment se passe la prise en charge par votre assurance, et son parcours d&rsquo;artisan indépendant.
          </p>
          <p style={{ fontSize: 14, fontWeight: 600, color: C.inkSoft, margin: 0 }}>RC Pro &amp; décennale MAAF · Vitrage sécurité SP10 / 44.2</p>
        </div>
        <VideoPresentation poster="/assets/camion-paysage-900.webp" title="Léo Puillet, votre vitrier à Lyon" />
      </div>
    </section>
  );
}

// ─── 5. Avis Google ──────────────────────────────────────────────────────────
const AVIS = [
  { text: "Sa réactivité est tout simplement impressionnante : demande de devis envoyée à 15h, reçu en 1h !", name: "Nawelle C.", date: "avril 2026" },
  { text: "Service impeccable ! Intervention ultra rapide et travail très soigné.", name: "Florian R.", date: "avril 2026" },
  { text: "Nous sommes très satisfaits du travail réalisé par cet artisan.", name: "Anna M.", date: "juillet 2026" },
];

function Avis() {
  return (
    <section id="avis" className="px-5 md:px-10" style={{ background: C.bg, paddingTop: 64, paddingBottom: 64 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4" style={{ marginBottom: 28 }}>
          <div>
            <Label>Avis Google</Label>
            <h2 style={{ ...h2Style, marginBottom: 0 }}>
              4,9/5 <Serif>sur 29 avis.</Serif>
            </h2>
          </div>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", minHeight: 44, fontSize: 15, fontWeight: 700, color: C.ink, textDecoration: "underline", textUnderlineOffset: 4 }}
          >
            Voir tous les avis sur Google →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {AVIS.map((a) => (
            <figure key={a.name} style={{ margin: 0, background: C.card, border: `1px solid ${C.line}`, borderRadius: 18, padding: "24px 22px", display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", gap: 2, color: C.blue }} aria-label="5 étoiles sur 5" role="img">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.7L6 22l1.5-7.2L2 10l7.1-1.1z" />
                  </svg>
                ))}
              </div>
              <blockquote style={{ margin: 0, fontSize: 18, lineHeight: 1.45, color: C.ink, fontWeight: 500 }}>« {a.text} »</blockquote>
              <figcaption style={{ marginTop: "auto", paddingTop: 14, borderTop: `1px solid ${C.line}`, fontSize: 14, color: C.inkSoft }}>
                <strong style={{ color: C.ink }}>{a.name}</strong> · {a.date}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 6. Zone d'intervention + services ───────────────────────────────────────
const SERVICES = ["remplacement de vitrage", "double vitrage isolant", "vitrage feuilleté & sécurité", "miroiterie sur mesure", "portes d'entrée vitrées", "dépannage 7j/7"];
const ARRONDISSEMENTS = ["Lyon 1er", "Lyon 2e", "Lyon 3e", "Lyon 4e", "Lyon 5e", "Lyon 6e", "Lyon 7e", "Lyon 8e", "Lyon 9e"];
const COMMUNES = [
  "Villeurbanne", "Vaulx-en-Velin", "Bron", "Décines-Charpieu", "Meyzieu", "Rillieux-la-Pape",
  "Tassin-la-Demi-Lune", "Craponne", "Francheville", "Saint-Genis-les-Ollières", "Montluel", "Bourgoin-Jallieu",
];
const villeHref = (nom: string) => {
  const v = VILLES.find((x) => x.publie && x.nom === nom);
  return v ? `/vitrier/${v.slug}` : undefined;
};

function Zones() {
  const tag: React.CSSProperties = { display: "inline-flex", alignItems: "center", minHeight: 40, padding: "0 16px", borderRadius: 999, fontSize: 14, fontWeight: 600 };
  return (
    <section id="zones" className="px-5 md:px-10" style={{ background: C.card, paddingTop: 64, paddingBottom: 64 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Label>Zone d&rsquo;intervention</Label>
        <h2 style={h2Style}>
          Vitrier dans tout Lyon <Serif>et la métropole.</Serif>
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: C.inkSoft, maxWidth: 640, margin: "0 0 10px" }}>
          Tous les arrondissements de Lyon et jusqu&rsquo;à 60 km autour, Est lyonnais compris.
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: C.inkSoft, maxWidth: 760, margin: "0 0 26px" }}>
          <Link href="/services" style={{ color: C.ink, fontWeight: 700, textDecoration: "underline", textUnderlineOffset: 3 }}>Mes services</Link> : {SERVICES.join(" · ")}.
        </p>
        <ul style={{ display: "flex", flexWrap: "wrap", gap: 8, listStyle: "none", padding: 0, margin: "0 0 10px" }}>
          {ARRONDISSEMENTS.map((a) => (
            <li key={a}>
              <Link href="/vitrier/lyon" style={{ ...tag, background: C.ink, color: "#fff" }}>{a}</Link>
            </li>
          ))}
        </ul>
        <ul style={{ display: "flex", flexWrap: "wrap", gap: 8, listStyle: "none", padding: 0, margin: 0 }}>
          {COMMUNES.map((c) => {
            const href = villeHref(c);
            const style = { ...tag, background: C.bgAlt, color: C.ink, border: `1px solid ${C.line}` };
            return <li key={c}>{href ? <Link href={href} style={style}>{c}</Link> : <span style={style}>{c}</span>}</li>;
          })}
        </ul>
      </div>
    </section>
  );
}

// ─── 7. Appel final ──────────────────────────────────────────────────────────
function AppelFinal() {
  return (
    <section className="px-5 md:px-10" style={{ background: C.ink, color: "#fff", paddingTop: 72, paddingBottom: 72, borderBottom: "1px solid rgba(255,255,255,.08)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ ...h2Style, color: "#fff", margin: "0 0 28px" }}>
          Une vitre à changer ?
          <br />
          <Serif color={C.blueLight}>Appelez, Léo arrive.</Serif>
        </h2>
        <a href={TEL} style={{ ...pill, minHeight: 64, padding: "0 36px", fontSize: 22, background: C.blue, color: "#fff", boxShadow: "0 10px 30px rgba(59,143,212,.4)" }}>
          <PhoneIcon size={22} />
          06 50 44 06 73
        </a>
      </div>
    </section>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div style={{ background: C.bg, color: C.ink, fontFamily: F.sans, WebkitFontSmoothing: "antialiased" }}>
      <Hero />
      <Video />
      <Avis />
      <Zones />
      <AppelFinal />
    </div>
  );
}
