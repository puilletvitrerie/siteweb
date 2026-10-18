import Link from "next/link";

// Modèle commun des pages de services (urgence, remplacement, double vitrage, prix) :
// fil d'Ariane, phrase-réponse en tête (lue par Google et les assistants IA), sections, FAQ, date de mise à jour, appel.

const C = { bg: "#F6F3EC", card: "#FFFFFF", line: "#E3DDD1", ink: "#1F1D1B", inkSoft: "#5A5550", blue: "#3B8FD4", blueDark: "#2B6FA8" } as const;
const F = { sans: "var(--font-manrope), system-ui, sans-serif", serif: "var(--font-instrument-serif), Georgia, serif" } as const;
const SITE = "https://www.puilletvitrerie.fr";

export type Section = {
  h2: string;
  p?: string[];
  ul?: string[];
  table?: { head: string[]; rows: string[][] };
};

export type SeoPageProps = {
  path: string;
  crumb: string;
  label: string;
  title: string;
  titleSerif: string;
  answer: string;
  facts: string[];
  sections: Section[];
  faq: { q: string; a: string }[];
  updated: string; // AAAA-MM-JJ
  related: { href: string; label: string }[];
  service?: { name: string; description: string };
};

const fmt = (d: string) => new Date(`${d}T12:00:00`).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

export default function SeoPage(p: SeoPageProps) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: p.crumb, item: `${SITE}${p.path}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: p.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    ...(p.service
      ? [
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: p.service.name,
            description: p.service.description,
            serviceType: p.service.name,
            url: `${SITE}${p.path}`,
            provider: { "@id": `${SITE}/#entreprise` },
            areaServed: { "@type": "City", name: "Lyon" },
          },
        ]
      : []),
  ];

  return (
    <div style={{ background: C.bg, color: C.ink, fontFamily: F.sans }} className="px-5 md:px-10 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article style={{ maxWidth: 820, margin: "0 auto" }}>
        <nav aria-label="Fil d'Ariane" style={{ fontSize: 14, color: C.inkSoft, marginBottom: 18 }}>
          <Link href="/" style={{ textDecoration: "underline" }}>Accueil</Link> <span aria-hidden>›</span> <span>{p.crumb}</span>
        </nav>

        <div style={{ fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: C.blueDark }}>— {p.label}</div>
        <h1 style={{ fontWeight: 800, fontSize: "clamp(34px, 5.5vw, 58px)", letterSpacing: "-0.03em", lineHeight: 1.05, margin: "12px 0 18px" }}>
          {p.title} <span style={{ fontFamily: F.serif, fontStyle: "italic", fontWeight: 400, color: C.blueDark }}>{p.titleSerif}</span>
        </h1>
        <p style={{ fontSize: 19, lineHeight: 1.6, margin: "0 0 18px" }}>{p.answer}</p>

        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "grid", gap: 8 }}>
          {p.facts.map((f) => (
            <li key={f} style={{ display: "flex", gap: 10, fontSize: 16, lineHeight: 1.5 }}>
              <span aria-hidden style={{ color: C.blue, fontWeight: 800 }}>✓</span>
              {f}
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row gap-3" style={{ marginBottom: 12 }}>
          <a href="tel:+33650440673" style={{ minHeight: 56, padding: "0 26px", borderRadius: 999, background: C.blue, color: "#fff", fontWeight: 700, fontSize: 16, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
            Appeler · 06 50 44 06 73
          </a>
          <a href="https://wa.me/33650440673" target="_blank" rel="noopener noreferrer" style={{ minHeight: 56, padding: "0 26px", borderRadius: 999, background: C.card, color: C.ink, border: `1.5px solid ${C.line}`, fontWeight: 700, fontSize: 16, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
            Envoyer une photo sur WhatsApp
          </a>
        </div>

        {p.sections.map((s) => (
          <section key={s.h2}>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 800, letterSpacing: "-0.02em", margin: "40px 0 12px" }}>{s.h2}</h2>
            {s.p?.map((t) => (
              <p key={t} style={{ fontSize: 17, lineHeight: 1.7, color: C.ink, margin: "0 0 12px" }}>{t}</p>
            ))}
            {s.ul && (
              <ul style={{ paddingLeft: 22, listStyle: "disc", margin: "0 0 12px", fontSize: 17, lineHeight: 1.7 }}>
                {s.ul.map((li) => <li key={li} style={{ marginBottom: 6 }}>{li}</li>)}
              </ul>
            )}
            {s.table && (
              <div style={{ overflowX: "auto", margin: "0 0 12px" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", background: C.card, border: `1px solid ${C.line}`, fontSize: 15 }}>
                  <thead>
                    <tr>{s.table.head.map((h) => <th key={h} style={{ textAlign: "left", padding: "12px 14px", borderBottom: `1px solid ${C.line}`, fontWeight: 800 }}>{h}</th>)}</tr>
                  </thead>
                  <tbody>
                    {s.table.rows.map((r) => (
                      <tr key={r[0]}>{r.map((c, i) => <td key={i} style={{ padding: "12px 14px", borderBottom: `1px solid ${C.line}`, verticalAlign: "top", lineHeight: 1.5 }}>{c}</td>)}</tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        ))}

        <section>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 800, letterSpacing: "-0.02em", margin: "40px 0 12px" }}>Questions fréquentes</h2>
          {p.faq.map((f) => (
            <div key={f.q} style={{ borderTop: `1px solid ${C.line}`, padding: "16px 0" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 6px" }}>{f.q}</h3>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: C.inkSoft, margin: 0 }}>{f.a}</p>
            </div>
          ))}
        </section>

        <section style={{ marginTop: 32, padding: "20px 22px", background: C.card, border: `1px solid ${C.line}`, borderRadius: 18 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, margin: "0 0 10px" }}>À lire aussi</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 }}>
            {p.related.map((r) => (
              <li key={r.href}>
                <Link href={r.href} style={{ color: C.blueDark, fontWeight: 700, textDecoration: "underline", textUnderlineOffset: 3 }}>{r.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <p style={{ fontSize: 14, color: C.inkSoft, marginTop: 24 }}>
          Page mise à jour le <time dateTime={p.updated}>{fmt(p.updated)}</time> par Léo Puillet, vitrier.
        </p>
      </article>
    </div>
  );
}
