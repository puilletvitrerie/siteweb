import type { Metadata } from "next";
import SeoPage from "@/components/SeoPage";

export const metadata: Metadata = {
  title: "Vitrine cassée à Lyon : sécurisation et remplacement",
  description:
    "Vitrine de magasin ou devanture cassée à Lyon ? Mise en sécurité le jour même 7j/7, puis remplacement du vitrage sur mesure sous 24 à 72 h. Devis gratuit. 06 50 44 06 73",
  alternates: { canonical: "/vitrine-cassee-lyon" },
};

export default function Page() {
  return (
    <SeoPage
      path="/vitrine-cassee-lyon"
      crumb="Vitrine cassée à Lyon"
      label="Commerces"
      title="Vitrine cassée"
      titleSerif="à Lyon : sécurisation et remplacement."
      answer="Puillet Vitrerie remplace les vitrines de magasin et les devantures cassées à Lyon et dans sa métropole. Après une casse, un choc ou du vandalisme, je mets la façade en sécurité le jour même, 7 jours sur 7, puis je pose le nouveau vitrage fabriqué sur mesure, en général sous 24 à 72 heures."
      facts={[
        "Mise en sécurité de la vitrine le jour même avec un panneau OSB, y compris le week-end.",
        "Vitrage de vitrine fabriqué sur mesure et posé sous 24 à 72 h après accord.",
        "Verre feuilleté de sécurité (44.2, SP10 anti-effraction) selon la vitrine.",
        "Devis gratuit, et le prix du devis est le prix final.",
        "Assuré en responsabilité civile professionnelle et décennale (MAAF).",
      ]}
      photos={{
        h2: "Avant / après : vitrines remplacées",
        items: [
          { before: "/assets/realisations/11-avant.jpg", after: "/assets/realisations/11-apres.jpg", ratio: 1, caption: "Rillieux-la-Pape : grande vitrine fixe de hall d'immeuble remplacée." },
          { before: "/assets/services/vitrine-facade-avant.jpg", after: "/assets/services/vitrine-facade-apres.jpg", ratio: 757 / 1300, caption: "Lyon 7e : vitrine de commerce sécurisée en OSB, puis pose du nouveau vitrage." },
        ],
      }}
      sections={[
        {
          h2: "Comment se passe le remplacement d'une vitrine cassée",
          ul: [
            "Vous appelez le 06 50 44 06 73, ou vous envoyez une photo de la vitrine sur WhatsApp.",
            "Je viens mettre la façade en sécurité avec un panneau OSB, pour que le magasin reste fermé et protégé.",
            "Je relève les dimensions et le type de vitrage, puis je vous envoie un devis détaillé.",
            "Après votre accord, le vitrage est fabriqué sur mesure et je reviens le poser, en général sous 24 à 72 heures.",
          ],
        },
        {
          h2: "Quel verre pour une vitrine de magasin",
          p: ["Je remplace le vitrage à l'identique, ou je vous propose un verre plus sûr si l'ancien ne l'était pas :"],
          ul: [
            "Verre feuilleté 44.2 : en cas de choc, il se fissure mais reste en place grâce à son film, la vitrine reste fermée.",
            "Verre feuilleté anti-effraction (SP10) : retarde l'intrusion, pour les commerces exposés.",
          ],
        },
        {
          h2: "Les grandes vitrines",
          p: [
            "Selon la taille de la vitrine, la pose demande plusieurs poseurs ou un équipement à ventouses : j'organise le remplacement en fonction des moyens nécessaires, et la façade reste sécurisée en attendant.",
          ],
        },
        {
          h2: "Délais",
          table: {
            head: ["Étape", "Délai"],
            rows: [
              ["Mise en sécurité (panneau OSB)", "Le jour même, 7j/7"],
              ["Devis", "Gratuit, après relevé des mesures"],
              ["Vitrage feuilleté sur mesure", "24 à 72 h après accord (fabrication)"],
            ],
          },
        },
        {
          h2: "Où j'interviens",
          p: [
            "Dans tous les arrondissements de Lyon et jusqu'à environ 60 km autour : Villeurbanne, Vaulx-en-Velin, Bron, Décines-Charpieu, Meyzieu, Rillieux-la-Pape, Caluire-et-Cuire, Tassin-la-Demi-Lune, Craponne, Francheville, Saint-Genis-les-Ollières, Montluel, Bourgoin-Jallieu et les communes voisines.",
            "Horaires : du lundi au samedi de 7 h à 20 h et le dimanche de 8 h à 19 h, dépannage 7j/7 pour les urgences.",
          ],
        },
      ]}
      faq={[
        { q: "Ma vitrine a été cassée cette nuit, que faire ?", a: "Appelez-moi ou envoyez une photo sur WhatsApp. Je viens mettre la façade en sécurité le jour même avec un panneau OSB, puis je prends les mesures pour le nouveau vitrage." },
        { q: "Combien de temps pour remplacer une vitrine ?", a: "La mise en sécurité se fait le jour même. Le vitrage d'une vitrine est fabriqué sur mesure : il est posé en général sous 24 à 72 heures après l'accord sur le devis." },
        { q: "Combien coûte le remplacement d'une vitrine cassée ?", a: "Le prix dépend des dimensions, de l'épaisseur et du type de verre (feuilleté, anti-effraction), et des moyens nécessaires à la pose. Le devis est gratuit et le prix indiqué est celui que vous payez." },
        { q: "Mon assurance peut-elle payer le remplacement ?", a: "Si votre contrat d'assurance professionnelle comprend la garantie bris de glace, le remplacement peut être pris en charge ; une franchise reste généralement à votre charge. Je vous fournis un devis et une facture détaillés." },
      ]}
      updated="2026-11-28"
      related={[
        { href: "/vitrier-urgence-lyon", label: "Vitrier en urgence à Lyon, 7j/7" },
        { href: "/remplacement-vitre-lyon", label: "Remplacement de vitre à Lyon" },
        { href: "/services", label: "Vitrines de magasin : photos avant / après" },
        { href: "/prix-vitrier-lyon", label: "Comment est calculé le prix d'un vitrier" },
        { href: "/realisations", label: "Mes chantiers en photos, avant / après" },
      ]}
      service={{ name: "Remplacement de vitrine cassée", description: "Mise en sécurité et remplacement de vitrines de magasin et de devantures cassées à Lyon et dans la métropole." }}
    />
  );
}
