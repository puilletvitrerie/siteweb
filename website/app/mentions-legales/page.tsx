import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

const h2: React.CSSProperties = { fontSize: 22, fontWeight: 800, letterSpacing: "-0.01em", margin: "32px 0 10px" };
const p: React.CSSProperties = { margin: "0 0 10px", lineHeight: 1.7 };

export default function MentionsLegales() {
  return (
    <div style={{ background: "#f6f3ec", color: "#1f1d1b", fontFamily: "var(--font-manrope), system-ui, sans-serif" }} className="px-5 md:px-14 py-12">
      <div className="max-w-3xl mx-auto" style={{ fontSize: 16 }}>
        <h1 style={{ fontSize: "clamp(30px, 5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, margin: "0 0 8px" }}>Mentions légales</h1>

        <h2 style={h2}>Éditeur du site</h2>
        <p style={p}>
          Puillet Vitrerie, SARL<br />
          42 avenue du Chater, 69340 Francheville<br />
          SIRET 995 238 169 00016 · TVA intracommunautaire FR05995238169 · Code APE 4334Z<br />
          Téléphone : <a href="tel:+33650440673" style={{ textDecoration: "underline" }}>06 50 44 06 73</a> · E-mail :{" "}
          <a href="mailto:puilletvitrerie@gmail.com" style={{ textDecoration: "underline" }}>puilletvitrerie@gmail.com</a>
        </p>
        <p style={p}>Directeur de la publication : Léo Puillet.</p>

        <h2 style={h2}>Assurance</h2>
        <p style={p}>Responsabilité civile professionnelle et garantie décennale souscrites auprès de la MAAF. Attestation disponible sur demande.</p>

        <h2 style={h2}>Hébergement</h2>
        <p style={p}>Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis · vercel.com</p>

        <h2 style={h2}>Données personnelles</h2>
        <p style={p}>
          Ce site n&rsquo;utilise pas de cookies de suivi. Les informations envoyées pour une demande de devis sont traitées comme expliqué dans la{" "}
          <a href="/confidentialite" style={{ textDecoration: "underline" }}>politique de confidentialité</a>.
        </p>

        <h2 style={h2}>Propriété intellectuelle</h2>
        <p style={p}>Les textes, photos et vidéos de ce site appartiennent à Puillet Vitrerie. Toute reproduction sans autorisation est interdite.</p>
      </div>
    </div>
  );
}
