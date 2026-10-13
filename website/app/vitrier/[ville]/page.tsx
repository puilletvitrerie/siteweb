import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { villesVisibles, SHOW_DRAFTS_VILLES } from "@/lib/villes";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";

function getVille(slug: string) {
  return villesVisibles().find((v) => v.slug === slug);
}

export function generateStaticParams() {
  return villesVisibles().map((v) => ({ ville: v.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ ville: string }> }): Promise<Metadata> {
  const v = getVille((await params).ville);
  if (!v) return {};
  return {
    title: `Vitrier à ${v.nom} (${v.cp}) · Remplacement de vitrage et dépannage`,
    description: `Vitrier miroitier à ${v.nom} : vitre cassée, double vitrage, vitrage feuilleté, porte d'immeuble, vitrine, miroir. Simple vitrage en moins de 2 h, devis gratuit, 7j/7.`,
    alternates: { canonical: `/vitrier/${v.slug}` },
  };
}

const card: React.CSSProperties = { background: "#fff", border: "1px solid var(--color-line)", borderRadius: 18, padding: "20px 22px" };

export default async function VillePage({ params }: { params: Promise<{ ville: string }> }) {
  const v = getVille((await params).ville);
  if (!v) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Vitrerie et miroiterie",
    provider: { "@id": "https://www.puilletvitrerie.fr/#entreprise" },
    areaServed: { "@type": "City", name: v.nom, postalCode: v.cp },
  };

  return (
    <div style={{ background: "var(--color-bg)", color: "var(--color-ink)" }} className="px-5 md:px-14 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto">
        {SHOW_DRAFTS_VILLES && !v.publie && (
          <div style={{ background: "#fff4d6", border: "1px solid #f0d58a", color: "#6b5200", borderRadius: 12, padding: "10px 14px", fontSize: 14, marginBottom: 16 }}>
            Brouillon : visible uniquement sur la version d&apos;essai, en attente de validation.
          </div>
        )}
        <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-red)" }}>
          {v.nom} · {v.cp}
        </div>
        <h1 style={{ fontSize: "clamp(30px, 5vw, 54px)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.05, margin: "12px 0 16px" }}>
          Vitrier à {v.nom}
        </h1>
        <p style={{ fontSize: 18, color: "var(--color-ink-soft)", maxWidth: 680, lineHeight: 1.6 }}>{v.intro}</p>

        <div className="flex flex-col sm:flex-row gap-3" style={{ margin: "24px 0 36px" }}>
          <a href="tel:0650440673" style={{ background: "var(--color-red)", color: "#fff", padding: "14px 24px", borderRadius: 999, fontWeight: 700, textAlign: "center" }}>Appeler · 06 50 44 06 73</a>
          <Link href="/contact" style={{ border: "1.5px solid var(--color-ink)", color: "var(--color-ink)", padding: "13px 24px", borderRadius: 999, fontWeight: 700, textAlign: "center" }}>Demander un devis gratuit</Link>
        </div>

        <div className="grid gap-6 md:grid-cols-[3fr_2fr] items-start">
          <div style={{ fontSize: 17, lineHeight: 1.7 }}>
            <h2 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 10px" }}>Mes interventions à {v.nom}</h2>
            <ul style={{ paddingLeft: 22, listStyle: "disc", margin: "0 0 20px" }}>
              <li>Remplacement de vitres cassées, à l&apos;identique</li>
              <li>Doubles vitrages fissurés ou embués, sans changer la fenêtre</li>
              <li>Vitrages feuilletés 44.2 pour les portes d&apos;immeuble</li>
              <li>Verres imprimés, martelés et dépolis</li>
              <li>Vitrines de commerce</li>
              <li>Miroirs sur mesure</li>
            </ul>
            <h2 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 10px" }}>Des délais courts</h2>
            <p style={{ margin: "0 0 12px" }}>
              Pour un simple vitrage, j&apos;interviens en urgence en moins de 2 heures. Pour le feuilleté, le double vitrage et les miroirs, fabriqués sur mesure, le remplacement est réalisé sous 24 à 72 heures.
            </p>
            <p style={{ margin: "0 0 20px" }}>
              En attendant, si vous le souhaitez, je peux poser un panneau OSB le jour même pour sécuriser l&apos;ouverture, y compris le week-end.
            </p>
            <h2 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 10px" }}>Particuliers, copropriétés et commerces</h2>
            <p style={{ margin: "0 0 20px" }}>
              J&apos;interviens chez les particuliers, dans les immeubles pour le compte des syndics et des régies, et dans les commerces. Je me rends sur place en toute autonomie, je prends les mesures et j&apos;envoie un devis clair et détaillé.
            </p>
          </div>
          <div className="grid gap-4">
            {v.avantApres && (
              <BeforeAfterGallery items={[{ before: v.avantApres.avant, after: v.avantApres.apres, ratio: v.avantApres.ratio, caption: v.avantApres.caption }]} />
            )}
            {v.photo && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={v.photo.src} alt={v.photo.alt} className="w-full rounded-2xl" style={{ maxHeight: 460, objectFit: "cover" }} />
            )}
            <div style={card}>
              <div style={{ fontWeight: 800, marginBottom: 6 }}>Infos pratiques</div>
              <div style={{ fontSize: 15, color: "var(--color-ink-soft)", lineHeight: 1.6 }}>
                Déplacement et devis gratuits<br />
                Lundi au samedi · 7h à 20h<br />
                Dépannage 7j/7<br />
                Assuré RC pro et décennale MAAF
              </div>
            </div>
            <div style={card}>
              <div style={{ fontWeight: 800, marginBottom: 6 }}>J&apos;interviens aussi à proximité</div>
              <div style={{ fontSize: 15, color: "var(--color-ink-soft)", lineHeight: 1.6 }}>{v.voisines.join(" · ")}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
