import type { Metadata } from "next";
import SeoPage from "@/components/SeoPage";

export const metadata: Metadata = {
  title: "Remplacement de vitre à Lyon",
  description:
    "Remplacement de vitre cassée à Lyon : simple vitrage, feuilleté 44.2, imprimé, martelé, vitrine, porte d'immeuble. Sans changer la menuiserie. 06 50 44 06 73",
  alternates: { canonical: "/remplacement-vitre-lyon" },
};

export default function Page() {
  return (
    <SeoPage
      path="/remplacement-vitre-lyon"
      crumb="Remplacement de vitre à Lyon"
      label="Remplacement de vitrage"
      title="Remplacement de vitre"
      titleSerif="à Lyon."
      answer="Puillet Vitrerie remplace les vitres cassées ou fissurées à Lyon et dans sa métropole, à l'identique et sans changer la fenêtre ni la porte : seul le vitrage est remplacé, la menuiserie reste en place."
      facts={[
        "Tous types de verre : simple vitrage, feuilleté (44.2, 33.2, SP10, SP10A), imprimé, martelé, dépoli.",
        "Fenêtres, portes d'immeuble, portes vitrées, vitrines de commerce, garde-corps.",
        "Simple vitrage en moins de 2 h en urgence, vitrage sur mesure sous 24 à 72 h.",
        "Pose au mastic traditionnel sur les fenêtres anciennes en bois.",
        "Déplacement pour le devis gratuit, devis sans engagement.",
      ]}
      sections={[
        {
          h2: "Ce que je remplace",
          ul: [
            "Vitres de fenêtres et de portes-fenêtres, en bois, PVC ou aluminium.",
            "Vitrages de portes d'entrée d'immeuble, y compris après vandalisme, souvent en feuilleté 44.2.",
            "Verres décoratifs : imprimé, martelé, dépoli, retrouvés à l'identique.",
            "Vitrines de commerce, avec mise en sécurité le jour même si besoin.",
            "Panneaux de garde-corps vitrés et grands vitrages fixes de hall.",
          ],
        },
        {
          h2: "Comment ça se passe",
          ul: [
            "Vous m'envoyez une photo et les dimensions, ou je me déplace gratuitement pour prendre les mesures.",
            "Je vous envoie un devis clair et détaillé : le prix du devis est le prix final.",
            "Je dépose l'ancien vitrage avec une bâche de protection au sol, puis je pose le nouveau.",
            "Je laisse les lieux propres : coup de balai après chaque intervention.",
          ],
        },
        {
          h2: "Remise aux normes des portes d'immeuble",
          p: [
            "Sur les portes d'immeuble, je peux remplacer un ancien vitrage simple par un verre feuilleté 44.2 : en cas de choc, il se fissure mais reste en place, ce qui limite les risques de blessure et d'intrusion.",
          ],
        },
        {
          h2: "Des chantiers réels près de chez vous",
          p: [
            "Vitrages de portes d'immeuble à Lyon 7e, Villeurbanne, Tassin-la-Demi-Lune, Montluel et Bourgoin-Jallieu, vitrage martelé à Décines-Charpieu, vitre posée au mastic à Francheville : retrouvez les photos avant / après sur la page Réalisations et sur les pages de chaque ville.",
          ],
        },
      ]}
      faq={[
        { q: "Faut-il changer toute la fenêtre quand une vitre est cassée ?", a: "Non. Dans la grande majorité des cas, je remplace uniquement le vitrage et la menuiserie reste en place." },
        { q: "Pouvez-vous retrouver un verre imprimé ou martelé ancien ?", a: "Oui, je retrouve le même motif et je remplace le vitrage à l'identique." },
        { q: "Combien de temps faut-il ?", a: "Un simple vitrage est remplacé en moins de 2 heures en urgence. Un vitrage feuilleté, un double vitrage ou un miroir est fabriqué sur mesure et posé sous 24 à 72 heures." },
        { q: "Comment avoir un prix ?", a: "Envoyez une photo et les dimensions par WhatsApp, ou appelez le 06 50 44 06 73 : je me déplace gratuitement pour le devis si besoin." },
      ]}
      updated="2026-10-18"
      related={[
        { href: "/vitrier-urgence-lyon", label: "Vitrier en urgence à Lyon, 7j/7" },
        { href: "/double-vitrage-lyon", label: "Remplacement de double vitrage à Lyon" },
        { href: "/prix-vitrier-lyon", label: "Comment est calculé le prix d'un remplacement de vitre" },
        { href: "/realisations", label: "Réalisations avant / après" },
        { href: "/vitrier/lyon", label: "Vitrier à Lyon : chantiers par arrondissement" },
      ]}
      service={{ name: "Remplacement de vitrage", description: "Remplacement de vitres cassées à l'identique, sans changer la menuiserie, à Lyon et dans la métropole." }}
    />
  );
}
