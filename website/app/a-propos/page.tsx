import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos · Léo Puillet, artisan vitrier à Francheville",
  alternates: { canonical: "/a-propos" },
  description:
    "Léo Puillet, artisan vitrier indépendant basé à Francheville : découpe sur place, verre en stock dans le camion, pose au mastic, intervention à Lyon et dans la métropole.",
};

const C = {
  bg: "#F6F3EC",
  bgAlt: "#EFEAE0",
  card: "#FFFFFF",
  line: "#E3DDD1",
  ink: "#1F1D1B",
  inkSoft: "#5A5550",
  blue: "#3B8FD4",
  blueDark: "#2B6FA8",
  blueLight: "#7DB9EA",
} as const;

const F = {
  sans: "var(--font-manrope), system-ui, sans-serif",
  serif: "var(--font-instrument-serif), Georgia, serif",
} as const;

const TEL = "tel:+33650440673";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: C.blueDark }}>— {children}</div>
  );
}

function Serif({ children, color = C.blueDark }: { children: React.ReactNode; color?: string }) {
  return <span style={{ fontFamily: F.serif, fontStyle: "italic", fontWeight: 400, color }}>{children}</span>;
}

const h2Style: React.CSSProperties = {
  fontWeight: 800,
  fontSize: "clamp(28px, 4vw, 48px)",
  letterSpacing: "-0.03em",
  lineHeight: 1.08,
  margin: "12px 0 16px",
};

function Photo({ src, alt, ratio = "3 / 4" }: { src: string; alt: string; ratio?: string }) {
  return (
    <div style={{ borderRadius: 20, overflow: "hidden", aspectRatio: ratio, background: C.line }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
  );
}

const ENGAGEMENTS = [
  { titre: "Un seul interlocuteur", texte: "C'est moi qui réponds au téléphone, qui fais le devis et qui pose le vitrage. Pas de standard, pas de sous-traitance." },
  { titre: "Spécialisé dans le verre", texte: "Je ne fais pas de menuiserie : je remplace le vitrage en gardant votre fenêtre, votre porte ou votre vitrine." },
  { titre: "Réactif", texte: "Moins de 2 h pour un simple vitrage en urgence, sous 24 h pour le feuilleté, le double vitrage et les miroirs." },
  { titre: "Assuré", texte: "Responsabilité civile professionnelle et décennale MAAF, attestation envoyée sur demande." },
];

const SAVOIR_FAIRE = [
  {
    src: "/assets/services/decoupe-1.jpg",
    alt: "Léo Puillet découpe une vitre sur des tréteaux devant un immeuble à Lyon",
    titre: "La découpe sur place",
    texte: "J'ai en permanence du verre dans le camion : clair, armé, feuilleté, imprimé, martelé. Pour un simple vitrage, je coupe la vitre à vos dimensions directement devant chez vous, sans attendre de commande.",
  },
  {
    src: "/assets/services/autonomie-2.jpg",
    alt: "Léo Puillet remplace le vitrage d'une fenêtre ancienne en bois",
    titre: "Le respect de l'ancien",
    texte: "Fenêtres anciennes, portes d'immeuble, verres décoratifs : je remplace à l'identique pour garder l'aspect d'origine, avec une pose au mastic traditionnel quand la menuiserie le demande.",
  },
  {
    src: "/assets/services/autonomie-1.jpg",
    alt: "Léo Puillet sonne à l'interphone d'un immeuble pour intervenir sur les parties communes",
    titre: "L'autonomie sur les chantiers",
    texte: "Pour les syndics et les régies, je me rends sur place en autonomie : pas besoin que quelqu'un m'attende. Je relève les mesures, j'envoie le devis, puis je pose.",
  },
];

export default function AProposPage() {
  return (
    <div style={{ background: C.bg, color: C.ink, fontFamily: F.sans, WebkitFontSmoothing: "antialiased" }}>
      {/* Présentation */}
      <section className="px-5 md:px-10" style={{ paddingTop: 48, paddingBottom: 64 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center" style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div>
            <Label>À propos</Label>
            <h1 style={{ fontWeight: 800, fontSize: "clamp(36px, 5.5vw, 64px)", letterSpacing: "-0.03em", lineHeight: 1.04, margin: "12px 0 18px" }}>
              Léo Puillet,
              <br />
              <Serif>artisan vitrier à Lyon.</Serif>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: C.inkSoft, margin: "0 0 14px", maxWidth: 520 }}>
              Je suis artisan vitrier diplômé et indépendant, basé à Francheville (69340). J&rsquo;ai créé Puillet Vitrerie pour proposer un service simple : quand une vitre casse, quelqu&rsquo;un répond, se déplace vite et remplace le verre proprement.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: C.inkSoft, margin: "0 0 24px", maxWidth: 520 }}>
              J&rsquo;interviens chez les particuliers, dans les copropriétés pour les syndics et les régies, et dans les commerces, à Lyon et jusqu&rsquo;à 60 km autour.
            </p>
            <a
              href={TEL}
              style={{ minHeight: 56, padding: "0 28px", borderRadius: 999, background: C.blue, color: "#fff", fontWeight: 700, fontSize: 16, display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(59,143,212,.35)" }}
            >
              Appeler · 06 50 44 06 73
            </a>
          </div>
          <div className="mx-auto w-full" style={{ maxWidth: 440 }}>
            <Photo src="/assets/artisan-camion-900.webp" alt="Léo Puillet, artisan vitrier, devant son camion Puillet Vitrerie" />
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="px-5 md:px-10" style={{ background: C.card, paddingTop: 64, paddingBottom: 64 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Label>Ma façon de travailler</Label>
          <h2 style={h2Style}>
            Un artisan, <Serif>du premier appel à la pose.</Serif>
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" style={{ listStyle: "none", padding: 0, margin: "26px 0 0" }}>
            {ENGAGEMENTS.map((e) => (
              <li key={e.titre} style={{ background: C.bg, border: `1px solid ${C.line}`, borderRadius: 18, padding: "22px 20px" }}>
                <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>{e.titre}</div>
                <div style={{ fontSize: 15, lineHeight: 1.55, color: C.inkSoft }}>{e.texte}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Savoir-faire en photos */}
      <section className="px-5 md:px-10" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Label>Sur le terrain</Label>
          <h2 style={h2Style}>
            Mon métier, <Serif>en images.</Serif>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ marginTop: 26 }}>
            {SAVOIR_FAIRE.map((s) => (
              <figure key={s.titre} style={{ margin: 0 }}>
                <Photo src={s.src} alt={s.alt} />
                <figcaption style={{ paddingTop: 16 }}>
                  <div style={{ fontSize: 19, fontWeight: 800, marginBottom: 6 }}>{s.titre}</div>
                  <div style={{ fontSize: 15, lineHeight: 1.6, color: C.inkSoft }}>{s.texte}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Le camion-atelier */}
      <section className="px-5 md:px-10" style={{ background: C.bgAlt, paddingTop: 64, paddingBottom: 64 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center" style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="order-2 md:order-1 mx-auto w-full" style={{ maxWidth: 440 }}>
            <Photo src="/assets/services/mastic-atelier.jpg" alt="Léo Puillet prépare un cadre vitré à l'arrière de son camion-atelier" ratio="9 / 10" />
          </div>
          <div className="order-1 md:order-2">
            <Label>Le camion-atelier</Label>
            <h2 style={h2Style}>
              Tout le matériel <Serif>arrive avec moi.</Serif>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: C.inkSoft, margin: "0 0 14px", maxWidth: 520 }}>
              Mon camion est aménagé en petit atelier : verre en stock, table de découpe, outillage et panneaux OSB pour mettre une ouverture en sécurité le jour même si le vitrage doit être fabriqué sur mesure.
            </p>
            <p style={{ fontSize: 15, fontWeight: 600, color: C.inkSoft, margin: 0 }}>
              Lun–Sam 7h–20h · Dim 8h–19h · urgences 7j/7
            </p>
          </div>
        </div>
      </section>

      {/* Appel final */}
      <section className="px-5 md:px-10" style={{ background: C.ink, color: "#fff", paddingTop: 64, paddingBottom: 64 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ ...h2Style, color: "#fff", margin: "0 0 24px" }}>
            Une vitre à changer ?
            <br />
            <Serif color={C.blueLight}>Appelez-moi directement.</Serif>
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={TEL} style={{ minHeight: 56, padding: "0 28px", borderRadius: 999, background: C.blue, color: "#fff", fontWeight: 700, fontSize: 17, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              06 50 44 06 73
            </a>
            <Link href="/realisations" style={{ minHeight: 56, padding: "0 28px", borderRadius: 999, background: "#fff", color: C.ink, fontWeight: 700, fontSize: 16, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              Voir mes chantiers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
