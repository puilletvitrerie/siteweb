import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  alternates: { canonical: "/confidentialite" },
  robots: { index: false, follow: true },
};

const h2: React.CSSProperties = { fontSize: 22, fontWeight: 800, letterSpacing: "-0.01em", margin: "32px 0 10px" };
const p: React.CSSProperties = { margin: "0 0 10px", lineHeight: 1.7 };
const ul: React.CSSProperties = { margin: "0 0 10px", paddingLeft: 22, listStyle: "disc", lineHeight: 1.7 };

export default function Confidentialite() {
  return (
    <div style={{ background: "#f6f3ec", color: "#1f1d1b", fontFamily: "var(--font-manrope), system-ui, sans-serif" }} className="px-5 md:px-14 py-12">
      <div className="max-w-3xl mx-auto" style={{ fontSize: 16 }}>
        <h1 style={{ fontSize: "clamp(30px, 5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, margin: "0 0 8px" }}>Politique de confidentialité</h1>
        <p style={p}>Responsable : Puillet Vitrerie (Léo Puillet), 42 avenue du Chater, 69340 Francheville · puilletvitrerie@gmail.com</p>

        <h2 style={h2}>Quelles données ?</h2>
        <p style={p}>Quand vous demandez un devis (formulaire, téléphone, SMS, WhatsApp ou e-mail), je reçois :</p>
        <ul style={ul}>
          <li>votre prénom, votre numéro de téléphone et votre ville ;</li>
          <li>le type de travaux, l&rsquo;urgence et votre message, si vous les indiquez ;</li>
          <li>les photos de votre vitre, si vous en envoyez ;</li>
          <li>la page d&rsquo;où vous venez (par exemple Instagram ou TikTok) ;</li>
          <li>vos choix de consentement et leur date.</li>
        </ul>

        <h2 style={h2}>Pourquoi ?</h2>
        <ul style={ul}>
          <li>Pour vous rappeler, établir votre devis et réaliser l&rsquo;intervention : c&rsquo;est la raison de votre demande.</li>
          <li>Pour vous envoyer de temps en temps des conseils et offres, <strong>uniquement si vous avez coché la case prévue</strong>. Vous pouvez retirer ce consentement à tout moment, d&rsquo;un simple message.</li>
        </ul>

        <h2 style={h2}>Qui y a accès ?</h2>
        <p style={p}>
          Léo Puillet uniquement. Vos données ne sont ni vendues ni transmises à d&rsquo;autres entreprises. Elles sont conservées dans les outils Google
          (Gmail, Drive, Sheets) du compte de Puillet Vitrerie, et le site est hébergé par Vercel. Les photos sont rangées dans un dossier privé, non partagé.
        </p>

        <h2 style={h2}>Combien de temps ?</h2>
        <p style={p}>
          Trois ans après notre dernier contact si vous n&rsquo;êtes pas devenu client. Pour les clients, les devis et factures sont conservés pendant la
          durée imposée par la loi (dix ans pour les documents comptables).
        </p>

        <h2 style={h2}>Vos droits</h2>
        <p style={p}>
          Vous pouvez demander à consulter, corriger ou supprimer vos données, ou ne plus recevoir d&rsquo;offres, en écrivant à{" "}
          <a href="mailto:puilletvitrerie@gmail.com" style={{ textDecoration: "underline" }}>puilletvitrerie@gmail.com</a>. Réponse sous un mois au plus.
          Vous pouvez aussi adresser une réclamation à la CNIL (cnil.fr).
        </p>

        <h2 style={h2}>Cookies</h2>
        <p style={p}>Ce site n&rsquo;utilise pas de cookies de suivi ni de publicité.</p>
      </div>
    </div>
  );
}
