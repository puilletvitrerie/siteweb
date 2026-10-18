import type { Metadata } from "next";
import SeoPage from "@/components/SeoPage";

export const metadata: Metadata = {
  title: "Prix d'un vitrier à Lyon et devis gratuit",
  description:
    "Prix d'un remplacement de vitre à Lyon : ce qui fait varier le tarif, devis gratuit sur photo, prix du devis = prix final, éviter les arnaques. 06 50 44 06 73",
  alternates: { canonical: "/prix-vitrier-lyon" },
};

export default function Page() {
  return (
    <SeoPage
      path="/prix-vitrier-lyon"
      crumb="Prix d'un vitrier à Lyon"
      label="Prix et devis"
      title="Prix d'un vitrier à Lyon :"
      titleSerif="comment est calculé le devis."
      answer="Chez Puillet Vitrerie, le prix d'un remplacement de vitre dépend du type de verre, de son épaisseur, de ses dimensions et de l'accès au chantier : il n'y a donc pas de prix unique, mais un devis gratuit, établi sur photo et dimensions ou après prise de mesures sur place, et le prix du devis est le prix final."
      facts={[
        "Devis gratuit et sans engagement.",
        "Prix établi sur photo + dimensions, ou après un déplacement gratuit pour prendre les mesures.",
        "Le prix indiqué sur le devis est celui que vous payez.",
        "Devis et factures détaillés (HT, TVA, TTC), édités avec un logiciel de facturation conforme.",
      ]}
      sections={[
        {
          h2: "Ce qui fait varier le prix",
          table: {
            head: ["Élément", "Pourquoi ça change le prix"],
            rows: [
              ["Type de vitrage", "Simple vitrage, double vitrage, feuilleté (44.2, 33.2, SP10), imprimé, martelé, dépoli, miroir : chaque verre a un coût différent."],
              ["Épaisseur", "Plus le verre est épais, plus il est cher et lourd à poser."],
              ["Dimensions", "Le verre est vendu et découpé à la surface ; un grand vitrage demande aussi plus de manutention."],
              ["Fabrication sur mesure", "Feuilleté, double vitrage et miroirs sont fabriqués aux bonnes dimensions par le fournisseur."],
              ["Accès et poids", "Un grand vitrage lourd peut demander deux ou trois poseurs, voire un équipement à ventouses."],
              ["Menuiserie", "Pose au mastic sur une fenêtre ancienne en bois ou avec parcloses sur une menuiserie récente."],
            ],
          },
        },
        {
          h2: "Comment avoir un prix rapidement",
          ul: [
            "Prenez une photo de la vitre, de près et de loin.",
            "Mesurez la largeur et la hauteur du verre visible (ou du cadre), en centimètres.",
            "Envoyez le tout par WhatsApp au 06 50 44 06 73, ou via le formulaire de devis.",
            "Si les informations ne suffisent pas, je me déplace gratuitement pour prendre les mesures.",
          ],
        },
        {
          h2: "Bris de glace : votre assurance peut payer",
          p: ["Si votre contrat d'assurance habitation comprend la garantie bris de glace, le remplacement de votre vitrage peut être pris en charge : seule la franchise reste généralement à votre charge."],
        },
        {
          h2: "Comment éviter une arnaque au dépannage",
          ul: [
            "Demandez toujours un devis écrit avant le début des travaux.",
            "Méfiez-vous des prospectus « numéros d'urgence » sans nom d'entreprise ni adresse.",
            "Vérifiez que l'artisan a un SIRET et une assurance décennale.",
            "Un vitrier sérieux vous explique ce qui fait le prix et ne vous presse pas de signer.",
          ],
          p: ["Puillet Vitrerie : SIRET 995 238 169 00016, assurance responsabilité civile professionnelle et décennale MAAF, attestation sur demande."],
        },
      ]}
      faq={[
        { q: "Pourquoi ne pas afficher de prix fixe ?", a: "Parce que deux vitres qui se ressemblent peuvent avoir des prix très différents selon l'épaisseur, le type de verre et les dimensions. Un devis sur photo et dimensions vous donne le vrai prix, gratuitement." },
        { q: "Le devis est-il payant ?", a: "Non, le devis est gratuit et sans engagement, et le déplacement pour établir le devis est gratuit." },
        { q: "Le prix peut-il changer après le devis ?", a: "Non : le prix indiqué sur le devis est celui que vous payez." },
      ]}
      updated="2026-10-18"
      related={[
        { href: "/devis", label: "Demander un devis express en 1 photo" },
        { href: "/remplacement-vitre-lyon", label: "Remplacement de vitre à Lyon" },
        { href: "/double-vitrage-lyon", label: "Remplacement de double vitrage à Lyon" },
        { href: "/vitrier-urgence-lyon", label: "Vitrier en urgence à Lyon" },
        { href: "/faq", label: "Toutes les questions fréquentes" },
      ]}
    />
  );
}
