import type { Metadata } from "next";
import SeoPage from "@/components/SeoPage";

export const metadata: Metadata = {
  title: "Vitrier pour syndics et régies à Lyon",
  description:
    "Syndics, régies, gestionnaires de copropriété : remplacement de vitrages de portes d'immeuble et parties communes à Lyon. Intervention en autonomie, devis détaillé HT/TTC. 06 50 44 06 73",
  alternates: { canonical: "/vitrier-syndic-regie-lyon" },
};

export default function Page() {
  return (
    <SeoPage
      path="/vitrier-syndic-regie-lyon"
      crumb="Syndics et régies"
      label="Copropriétés"
      title="Vitrier pour les syndics"
      titleSerif="et les régies à Lyon."
      answer="Puillet Vitrerie remplace les vitrages des parties communes pour les syndics de copropriété et les régies immobilières de Lyon et de sa métropole : portes de hall, portes d'entrée d'immeuble, fenêtres de cage d'escalier, vitrines de hall. Le gestionnaire envoie une demande, je m'occupe de tout sur place en autonomie, du relevé des mesures à la pose."
      facts={[
        "Un seul interlocuteur, du premier appel à la pose.",
        "Intervention en autonomie : pas besoin que quelqu'un m'attende sur place.",
        "Verre courant en stock dans le camion : remplacement immédiat possible.",
        "Vitrage sur mesure (feuilleté, double vitrage) posé sous 24 à 72 h après accord.",
        "Assuré en responsabilité civile professionnelle et décennale (MAAF), attestation sur demande.",
      ]}
      sections={[
        {
          h2: "Comment se passe une intervention",
          ul: [
            "Vous m'envoyez l'adresse et la description du problème, avec une photo si vous l'avez.",
            "Je me rends sur place en autonomie : si personne n'est disponible pour m'accueillir, je sonne chez un copropriétaire pour me faire ouvrir.",
            "Je relève les dimensions et le type de vitrage, puis je vous envoie un devis détaillé.",
            "Après votre accord, je pose le vitrage : tout de suite si le verre est dans le camion, sous 24 à 72 h s'il est fabriqué sur mesure.",
          ],
        },
        {
          h2: "Ce que j'ai en stock dans le camion",
          p: ["Pour les urgences, les parties communes ou les logements occupés, j'ai en permanence ces vitrages dans le camion, ce qui permet de remplacer le verre juste après la demande du gestionnaire :"],
          ul: ["Vitrage clair (3 et 4 mm)", "Verre armé à grandes mailles", "Verre feuilleté", "Verre imprimé (77 et 200)", "Verre martelé"],
        },
        {
          h2: "Délais selon le type de vitrage",
          table: {
            head: ["Type de vitrage", "Délai"],
            rows: [
              ["Verre en stock (clair, armé, imprimé, martelé)", "Remplacement immédiat possible"],
              ["Verre feuilleté de sécurité (44.2, 33.2)", "24 à 72 h (fabrication sur mesure)"],
              ["Double vitrage", "24 à 72 h (fabrication sur mesure)"],
              ["Mise en sécurité (panneau OSB)", "Le jour même, 7j/7"],
            ],
          },
          p: ["En cas de vandalisme, si le vitrage est complètement sorti de la feuillure, une mise en sécurité est possible en attendant la validation du devis, dans la majorité des cas."],
        },
        {
          h2: "Portes d'immeuble : remise aux normes en feuilleté",
          p: [
            "Sur certaines portes anciennes, on trouve encore du verre simple de 6 ou 8 mm. Lors d'un remplacement, je propose de passer au verre feuilleté 44.2 : en cas de choc, il se fissure mais reste en place grâce à son film, personne ne se blesse et la porte reste fermée jusqu'au remplacement.",
            "Pour les portes de hall en verre décoratif, je remplace à l'identique (imprimé, martelé, dépoli) pour garder le même aspect et l'intimité du hall.",
          ],
        },
        {
          h2: "Des documents en règle",
          ul: [
            "Devis détaillé avec la description de l'intervention et les montants HT, TVA et TTC.",
            "Devis et factures édités sur un logiciel de facturation conforme.",
            "Attestation d'assurance responsabilité civile professionnelle et décennale (MAAF) sur demande.",
            "Le déplacement pour établir le devis est gratuit, et le devis est sans engagement.",
          ],
        },
        {
          h2: "Où j'interviens",
          p: [
            "Dans tous les arrondissements de Lyon et jusqu'à environ 60 km autour : Villeurbanne, Vaulx-en-Velin, Bron, Décines-Charpieu, Meyzieu, Rillieux-la-Pape, Tassin-la-Demi-Lune, Craponne, Francheville, Saint-Genis-les-Ollières, Montluel, Bourgoin-Jallieu et les communes voisines.",
          ],
        },
      ]}
      faq={[
        { q: "Faut-il que quelqu'un soit présent pour vous ouvrir ?", a: "Non. Je me rends sur place en autonomie : si personne n'est disponible, je sonne chez un copropriétaire pour me faire ouvrir, puis je relève les mesures et le type de vitrage." },
        { q: "La porte du hall ne ferme plus après la casse, que faites-vous ?", a: "Je peux mettre l'ouverture en sécurité avec un panneau OSB le jour même, en attendant la validation du devis et la fabrication du vitrage, dans la majorité des cas." },
        { q: "Quels documents fournissez-vous ?", a: "Un devis détaillé (description, HT, TVA, TTC), puis une facture, édités sur un logiciel de facturation conforme. Mon attestation d'assurance RC professionnelle et décennale (MAAF) est disponible sur demande." },
        { q: "Un copropriétaire peut-il vous contacter directement ?", a: "Les vitrages des parties communes relèvent de la copropriété : c'est le syndic ou la régie qui me mandate. Un copropriétaire peut prévenir son gestionnaire avec une photo, et me recommander auprès de lui." },
      ]}
      updated="2026-10-28"
      related={[
        { href: "/remplacement-vitre-lyon", label: "Remplacement de vitre à Lyon" },
        { href: "/vitrier-urgence-lyon", label: "Vitrier en urgence à Lyon, 7j/7" },
        { href: "/prix-vitrier-lyon", label: "Comment est calculé le prix d'un vitrier" },
        { href: "/realisations", label: "Mes chantiers en photos, avant / après" },
      ]}
      service={{ name: "Remplacement de vitrage pour syndics et régies", description: "Remplacement de vitrages de portes d'immeuble et de parties communes pour les syndics de copropriété et les régies immobilières à Lyon." }}
    />
  );
}
