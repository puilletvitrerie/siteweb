import type { Metadata } from "next";
import SeoPage from "@/components/SeoPage";

export const metadata: Metadata = {
  title: "Miroir sur mesure à Lyon · Salle de bain, dressing, hall",
  description:
    "Miroirs sur mesure à Lyon : salle de bain, dressing, cuisine, hall d'immeuble, ascenseur, miroirs convexes. Mesures prises sur place, pose sous 24 à 72h. Devis gratuit. 06 50 44 06 73",
  alternates: { canonical: "/miroir-sur-mesure-lyon" },
};

export default function Page() {
  return (
    <SeoPage
      path="/miroir-sur-mesure-lyon"
      crumb="Miroir sur mesure à Lyon"
      label="Miroiterie"
      title="Miroir sur mesure"
      titleSerif="à Lyon."
      answer="Puillet Vitrerie fabrique et pose des miroirs sur mesure à Lyon et dans sa métropole : salle de bain, dressing, cuisine, hall d'immeuble, ascenseur. Je prends les mesures sur place, le miroir est fabriqué aux dimensions exactes et posé sous 24 à 72 heures. Je remplace aussi à l'identique les miroirs cassés, y compris les miroirs convexes de parking."
      facts={[
        "Miroirs de salle de bain, de dressing, de cuisine, de hall d'entrée et d'ascenseur.",
        "Mesures prises sur place : angles, niveaux, prises, interrupteurs et robinetterie.",
        "Bords simples, polis ou biseautés ; découpes et perçages à la demande.",
        "Remplacement à l'identique des miroirs cassés, y compris les miroirs convexes.",
        "Fabrication et pose sous 24 à 72 h, déplacement pour le devis gratuit.",
      ]}
      gallery={[
        { title: "Lyon 7e : miroir remplacé à l'identique dans un hall de copropriété", before: "/assets/services/miroir-hall-avant.jpg", after: "/assets/services/miroir-hall-apres.jpg" },
        { title: "Craponne : miroir convexe remplacé à l'identique", before: "/assets/services/miroir-convexe-avant.jpg", after: "/assets/services/miroir-convexe-apres.jpg" },
      ]}
      sections={[
        {
          h2: "Pour quels espaces ?",
          ul: [
            "Salle de bain : miroir adapté aux pièces humides, ajusté autour de la robinetterie et des prises.",
            "Dressing et chambre : grand miroir mural ou miroir de porte, pour agrandir la pièce.",
            "Cuisine : miroir en crédence ou en décoration.",
            "Hall d'immeuble et ascenseur : pour les copropriétés, à la demande des syndics et des régies.",
            "Miroirs convexes de sortie de parking ou de résidence, pour retrouver une bonne visibilité.",
          ],
        },
        {
          h2: "Comment ça se passe",
          p: [
            "Je viens mesurer sur place. Un mur n'est jamais parfaitement droit : je vérifie les angles, les niveaux et les obstacles (prises, interrupteurs, robinetterie). C'est ce qui garantit un miroir parfaitement ajusté, sans espace vide ni découpe approximative.",
            "Vous choisissez ensuite la finition des bords (simples, polis ou biseautés) et les éventuelles découpes ou perçages. Le miroir est fabriqué aux bonnes dimensions, puis je le pose chez vous.",
          ],
        },
        {
          h2: "Délais",
          table: {
            head: ["Étape", "Délai"],
            rows: [
              ["Prise de mesures et devis", "Déplacement gratuit, devis sans engagement"],
              ["Fabrication et pose du miroir", "24 à 72 h après la prise de mesures"],
            ],
          },
        },
        {
          h2: "Remplacement d'un miroir cassé",
          p: [
            "Dans un hall de copropriété, un miroir cassé ou abîmé dépareille toute l'entrée. Je le remplace à l'identique, aux mêmes dimensions et avec la même finition, comme dans ce hall du 7e arrondissement de Lyon entre deux poteaux en bois.",
          ],
        },
      ]}
      faq={[
        { q: "Peut-on avoir un devis sur photo ?", a: "Une photo m'aide à préparer le chantier, mais pour un miroir sur mesure je viens prendre les mesures sur place pour qu'il soit fabriqué exactement à la bonne taille. Ce déplacement pour le devis est gratuit." },
        { q: "Quel délai pour un miroir sur mesure ?", a: "Le miroir est fabriqué sur mesure : il est posé sous 24 à 72 heures après la prise de mesures." },
        { q: "Pouvez-vous découper le miroir autour d'une prise ou d'un robinet ?", a: "Oui. Les découpes et perçages sont prévus dès la prise de mesures, pour que le miroir s'ajuste parfaitement." },
        { q: "Intervenez-vous pour les copropriétés ?", a: "Oui. Je remplace les miroirs de hall et d'ascenseur pour le compte des syndics et des régies, avec un devis détaillé HT/TTC." },
      ]}
      updated="2026-11-17"
      related={[
        { href: "/vitrier/craponne", label: "Miroir convexe remplacé à Craponne" },
        { href: "/vitrier/lyon", label: "Chantiers réalisés à Lyon" },
        { href: "/vitrier-syndic-regie-lyon", label: "Vitrier pour syndics et régies" },
        { href: "/prix-vitrier-lyon", label: "Comment est calculé le prix" },
      ]}
      service={{ name: "Miroir sur mesure", description: "Fabrication, pose et remplacement de miroirs sur mesure (salle de bain, dressing, hall, ascenseur, miroirs convexes) à Lyon et dans la métropole." }}
    />
  );
}
