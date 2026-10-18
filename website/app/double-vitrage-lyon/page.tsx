import type { Metadata } from "next";
import SeoPage from "@/components/SeoPage";

export const metadata: Metadata = {
  title: "Double vitrage à Lyon · remplacement sans changer la fenêtre",
  description:
    "Double vitrage cassé, fissuré ou embué à Lyon : remplacé sur mesure sous 24 à 72h, sans changer la fenêtre. Devis gratuit sur photo. 06 50 44 06 73",
  alternates: { canonical: "/double-vitrage-lyon" },
};

export default function Page() {
  return (
    <SeoPage
      path="/double-vitrage-lyon"
      crumb="Double vitrage à Lyon"
      label="Double vitrage"
      title="Remplacement de double vitrage"
      titleSerif="à Lyon."
      answer="Puillet Vitrerie remplace les doubles vitrages cassés, fissurés ou embués à Lyon et dans sa métropole sans changer la fenêtre : le nouveau vitrage est fabriqué sur mesure et posé sous 24 à 72 heures, dans la menuiserie existante."
      facts={[
        "Double vitrage cassé, fissuré ou plein de buée entre les deux verres.",
        "Fabriqué sur mesure, posé sous 24 à 72 h ; mise en sécurité le jour même si besoin.",
        "Fenêtres PVC, aluminium et bois.",
        "Vitrages isolants à gaz argon et à faible émissivité.",
        "Devis gratuit, sur photo et dimensions ou après prise de mesures sur place.",
      ]}
      sections={[
        {
          h2: "Quand faut-il remplacer un double vitrage ?",
          ul: [
            "Il est fêlé ou cassé, même sur un seul des deux verres.",
            "De la buée apparaît entre les deux verres : le joint n'est plus étanche et le vitrage n'isole plus correctement. Ça ne se répare pas, il faut remplacer le vitrage.",
            "Vous voulez améliorer le confort d'une fenêtre dont la menuiserie est en bon état.",
          ],
        },
        {
          h2: "Sans changer la fenêtre",
          p: [
            "La menuiserie reste en place : je dépose l'ancien vitrage et je pose le nouveau, fabriqué aux bonnes dimensions et à la bonne épaisseur.",
            "Sur une fenêtre ancienne en bois, je vérifie d'abord que la feuillure, la solidité de l'ouvrant et des paumelles, l'état du bois et la fixation permettent de recevoir un double vitrage. Si ce n'est pas le cas, je vous le dis franchement et je propose un simple vitrage posé à l'identique.",
          ],
        },
        {
          h2: "Délais",
          table: {
            head: ["Étape", "Délai"],
            rows: [
              ["Mise en sécurité si le vitrage est cassé", "Le jour même, 7j/7"],
              ["Fabrication et pose du double vitrage", "24 à 72 h après la prise de mesures"],
            ],
          },
        },
        {
          h2: "Un chantier réel",
          p: ["À Saint-Genis-les-Ollières, j'ai remplacé un double vitrage cassé sur une fenêtre PVC, sans toucher à la fenêtre : photos avant / après sur la page de la ville."],
        },
      ]}
      faq={[
        { q: "La buée entre les vitres se répare-t-elle ?", a: "Non. Elle signifie que le joint du double vitrage n'est plus étanche : il faut remplacer le vitrage, mais pas la fenêtre." },
        { q: "Peut-on mettre du double vitrage dans une fenêtre ancienne ?", a: "Parfois. Il faut une feuillure assez grande et une menuiserie assez solide, car un double vitrage pèse environ deux fois plus lourd. Je vérifie sur place avant de proposer quoi que ce soit." },
        { q: "Combien de temps faut-il ?", a: "Le double vitrage est fabriqué sur mesure : il est posé sous 24 à 72 heures. Si la vitre est cassée, je sécurise l'ouverture le jour même." },
      ]}
      updated="2026-10-18"
      related={[
        { href: "/vitrier/saint-genis-les-ollieres", label: "Double vitrage remplacé à Saint-Genis-les-Ollières" },
        { href: "/remplacement-vitre-lyon", label: "Remplacement de vitre à Lyon" },
        { href: "/vitrier-urgence-lyon", label: "Vitrier en urgence à Lyon" },
        { href: "/prix-vitrier-lyon", label: "Comment est calculé le prix d'un double vitrage" },
      ]}
      service={{ name: "Remplacement de double vitrage", description: "Remplacement de doubles vitrages cassés ou embués sans changer la fenêtre, à Lyon et dans la métropole." }}
    />
  );
}
