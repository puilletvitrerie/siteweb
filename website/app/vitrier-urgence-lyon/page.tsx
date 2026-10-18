import type { Metadata } from "next";
import SeoPage from "@/components/SeoPage";

export const metadata: Metadata = {
  title: "Vitrier en urgence à Lyon, 7j/7",
  description:
    "Vitre cassée à Lyon ? Vitrier en urgence 7j/7 : simple vitrage remplacé en moins de 2h, mise en sécurité le jour même. Devis gratuit. 06 50 44 06 73",
  alternates: { canonical: "/vitrier-urgence-lyon" },
};

export default function Page() {
  return (
    <SeoPage
      path="/vitrier-urgence-lyon"
      crumb="Vitrier en urgence à Lyon"
      label="Dépannage 7j/7"
      title="Vitrier en urgence"
      titleSerif="à Lyon, 7j/7."
      answer="Puillet Vitrerie est un vitrier indépendant basé à Francheville qui intervient en urgence dans tout Lyon et sa métropole, 7 jours sur 7 : un simple vitrage cassé est remplacé en moins de 2 heures, et toute ouverture peut être mise en sécurité le jour même."
      facts={[
        "Simple vitrage cassé : remplacé en moins de 2 h en urgence sur Lyon.",
        "Feuilleté, double vitrage, miroir : fabriqués sur mesure, posés sous 24 à 72 h.",
        "Mise en sécurité le jour même avec un panneau OSB, y compris le week-end.",
        "Devis gratuit, et le prix du devis est le prix final.",
        "Assuré en responsabilité civile professionnelle et décennale (MAAF).",
      ]}
      sections={[
        {
          h2: "Comment se passe une intervention en urgence",
          ul: [
            "Vous appelez le 06 50 44 06 73, ou vous envoyez une photo de la vitre sur WhatsApp.",
            "Je vous dis tout de suite si le vitrage peut être remplacé dans la journée ou s'il doit être fabriqué sur mesure.",
            "Simple vitrage : j'ai du verre dans le camion, je le coupe et le pose sur place.",
            "Vitrage sur mesure (feuilleté, double vitrage, miroir) : je sécurise l'ouverture le jour même, je prends les mesures et je reviens poser le vitrage neuf dès sa fabrication.",
          ],
        },
        {
          h2: "Délais réels selon le type de vitrage",
          table: {
            head: ["Type de vitrage", "Délai de remplacement"],
            rows: [
              ["Simple vitrage", "Moins de 2 h en urgence"],
              ["Verre feuilleté (44.2, 33.2, SP10)", "24 à 72 h (fabrication sur mesure)"],
              ["Double vitrage", "24 à 72 h (fabrication sur mesure)"],
              ["Miroir", "24 à 72 h (découpe sur mesure)"],
              ["Mise en sécurité (panneau OSB)", "Le jour même, 7j/7"],
            ],
          },
          p: ["Le week-end, les fournisseurs de verre sont fermés : l'ouverture est sécurisée le jour même, et le vitrage est posé dès sa réception."],
        },
        {
          h2: "Que faire en attendant le vitrier",
          ul: [
            "Éloignez les enfants et les animaux, ne touchez pas les morceaux de verre à mains nues.",
            "Si des éclats risquent de tomber, ne forcez pas : je les retire en sécurité à mon arrivée.",
            "Prenez une photo de la vitre cassée : elle sert pour le devis et pour votre assurance.",
            "Particuliers : si votre assurance habitation comprend la garantie bris de glace, seule la franchise reste généralement à votre charge.",
          ],
        },
        {
          h2: "Où j'interviens en urgence",
          p: [
            "Dans tous les arrondissements de Lyon et jusqu'à environ 60 km autour : Villeurbanne, Vaulx-en-Velin, Bron, Décines-Charpieu, Meyzieu, Rillieux-la-Pape, Tassin-la-Demi-Lune, Craponne, Francheville, Saint-Genis-les-Ollières, Montluel, Bourgoin-Jallieu et les communes voisines.",
            "Horaires : du lundi au samedi de 7 h à 20 h, et dépannage 7j/7 pour les urgences.",
          ],
        },
      ]}
      faq={[
        { q: "Intervenez-vous le dimanche et les jours fériés ?", a: "Oui, le dépannage fonctionne 7j/7. Le week-end, je sécurise l'ouverture le jour même et je pose le vitrage dès que les fournisseurs l'ont fabriqué." },
        { q: "En combien de temps arrivez-vous ?", a: "Pour un simple vitrage cassé, j'interviens en moins de 2 heures sur Lyon. Pour un vitrage sur mesure, je sécurise le jour même et je pose le vitrage neuf sous 24 à 72 heures." },
        { q: "Le devis est-il payant en urgence ?", a: "Non. Le devis est gratuit et le prix indiqué sur le devis est celui que vous payez. Vous pouvez aussi m'envoyer une photo et les dimensions pour avoir un prix plus vite." },
        { q: "Mon assurance peut-elle payer le remplacement ?", a: "Si votre contrat habitation comprend la garantie bris de glace, le remplacement peut être pris en charge ; seule la franchise reste généralement à votre charge. Je vous indique les démarches." },
      ]}
      updated="2026-10-18"
      related={[
        { href: "/remplacement-vitre-lyon", label: "Remplacement de vitre à Lyon" },
        { href: "/double-vitrage-lyon", label: "Remplacement de double vitrage à Lyon" },
        { href: "/prix-vitrier-lyon", label: "Comment est calculé le prix d'un vitrier" },
        { href: "/blog/vitre-cassee-que-faire", label: "Vitre cassée : que faire en attendant le vitrier ?" },
        { href: "/realisations", label: "Mes chantiers en photos, avant / après" },
      ]}
      service={{ name: "Dépannage vitrerie en urgence", description: "Remplacement de vitrage cassé et mise en sécurité 7j/7 à Lyon et dans la métropole." }}
    />
  );
}
