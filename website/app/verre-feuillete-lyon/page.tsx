import type { Metadata } from "next";
import SeoPage from "@/components/SeoPage";

export const metadata: Metadata = {
  title: "Verre feuilleté 44.2 à Lyon · Vitrage de sécurité",
  description:
    "Vitrage feuilleté 44.2 à Lyon pour portes d'immeuble, vitrines et garde-corps : remplacement et remise aux normes sans changer la menuiserie, sous 24 à 72h. Devis gratuit. 06 50 44 06 73",
  alternates: { canonical: "/verre-feuillete-lyon" },
};

export default function Page() {
  return (
    <SeoPage
      path="/verre-feuillete-lyon"
      crumb="Verre feuilleté à Lyon"
      label="Verre feuilleté & sécurité"
      title="Verre feuilleté de sécurité"
      titleSerif="à Lyon."
      answer="Puillet Vitrerie pose du verre feuilleté 44.2 à Lyon et dans sa métropole, sur les portes d'immeuble, les vitrines et les garde-corps. Quand il casse, le feuilleté reste en place : pas d'éclats qui tombent, et l'ouverture reste fermée. Le vitrage est fabriqué sur mesure et posé sous 24 à 72 heures, dans la menuiserie existante."
      facts={[
        "Feuilleté 44.2 : deux verres de 4 mm assemblés par deux films, environ 9 mm d'épaisseur.",
        "Portes d'immeuble, vitrines de commerce, garde-corps.",
        "Remise aux normes des anciens vitrages simples de 6 ou 8 mm.",
        "Feuilleté clair ou imprimé, remplacé à l'identique.",
        "Mise en sécurité le jour même si besoin, pose sous 24 à 72 h.",
      ]}
      gallery={[
        { title: "Vaulx-en-Velin : vitrage de 8 mm remplacé par un feuilleté 44.2", before: "/assets/services/feuillete-44-2-avant.jpg", after: "/assets/services/feuillete-44-2-apres.jpg" },
        { title: "Bourgoin-Jallieu : feuilleté imprimé 200 remplacé sur une porte d'immeuble", before: "/assets/services/feuillete-imprime-200-avant.jpg", after: "/assets/services/feuillete-imprime-200-apres.jpg" },
      ]}
      sections={[
        {
          h2: "Que signifie 44.2 ?",
          p: [
            "Un verre feuilleté est fait de deux feuilles de verre collées entre elles par un film plastique très résistant. Dans « 44.2 », les deux premiers chiffres indiquent deux feuilles de 4 mm, et le « .2 » indique deux films intercalaires. On obtient un vitrage d'environ 9 mm d'épaisseur.",
            "Un vitrage ordinaire se brise en morceaux tranchants qui tombent. Le feuilleté, lui, se fissure, mais les éclats restent collés au film : la vitre reste en place, personne ne se blesse et l'ouverture reste fermée jusqu'au remplacement.",
          ],
        },
        {
          h2: "Où poser du verre feuilleté ?",
          ul: [
            "Portes d'immeuble : souvent poussées, claquées ou heurtées, dans un lieu de passage avec des enfants et des personnes âgées.",
            "Vitrines de commerce : le vitrage reste en place et limite l'intrusion en attendant la réparation.",
            "Garde-corps vitrés : le verre ne doit pas tomber en cas de casse.",
          ],
        },
        {
          h2: "Remise aux normes des portes d'immeuble",
          p: [
            "Sur certaines portes anciennes, on trouve encore du verre simple de 6 ou 8 mm. Lors d'un remplacement, je propose de passer au feuilleté 44.2, plus sûr pour les occupants, en conservant la menuiserie.",
            "À Vaulx-en-Velin, une porte de hall équipée d'un verre simple de 8 mm a été brisée : je l'ai remplacée aux normes par un feuilleté 44.2.",
          ],
        },
        {
          h2: "Feuilleté ou trempé ?",
          p: [
            "Le verre trempé est beaucoup plus résistant aux chocs, mais quand il casse, il se fragmente entièrement en petits morceaux et l'ouverture se retrouve vide. Le feuilleté, lui, reste en place. Pour une porte d'immeuble, une vitrine ou un garde-corps, c'est le feuilleté que je recommande. Dans le doute, je vous conseille sur place selon l'usage et l'emplacement.",
          ],
        },
        {
          h2: "Délais",
          table: {
            head: ["Étape", "Délai"],
            rows: [
              ["Mise en sécurité si le vitrage est cassé (panneau OSB)", "Le jour même, 7j/7"],
              ["Fabrication et pose du feuilleté", "24 à 72 h après la prise de mesures"],
            ],
          },
        },
      ]}
      faq={[
        { q: "Pourquoi le feuilleté sur une porte d'immeuble ?", a: "Parce qu'il reste en place quand il casse : pas d'éclats qui tombent sur les passants, et la porte reste fermée en attendant le remplacement." },
        { q: "Peut-on remplacer un vieux verre simple par du feuilleté ?", a: "Oui, c'est ce que je propose lors d'un remplacement sur les portes anciennes équipées de verre simple de 6 ou 8 mm, en conservant la menuiserie." },
        { q: "Quel délai pour un vitrage feuilleté ?", a: "Le feuilleté est fabriqué sur mesure : il est posé sous 24 à 72 heures. Si la vitre est cassée, je sécurise l'ouverture le jour même." },
        { q: "Existe-t-il du feuilleté décoratif ?", a: "Oui. Il existe du feuilleté imprimé, comme le modèle 200 que j'ai remplacé à l'identique sur une porte d'immeuble à Bourgoin-Jallieu." },
      ]}
      updated="2026-11-17"
      related={[
        { href: "/vitrier/vaulx-en-velin", label: "Remise aux normes en feuilleté à Vaulx-en-Velin" },
        { href: "/vitrier-syndic-regie-lyon", label: "Vitrier pour syndics et régies" },
        { href: "/vitrier-urgence-lyon", label: "Vitrier en urgence à Lyon" },
        { href: "/prix-vitrier-lyon", label: "Comment est calculé le prix d'un feuilleté" },
      ]}
      service={{ name: "Pose de verre feuilleté de sécurité", description: "Pose et remplacement de vitrages feuilletés 44.2 pour portes d'immeuble, vitrines et garde-corps, à Lyon et dans la métropole." }}
    />
  );
}
