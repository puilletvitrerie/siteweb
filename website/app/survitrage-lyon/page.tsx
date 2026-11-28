import type { Metadata } from "next";
import SeoPage from "@/components/SeoPage";

export const metadata: Metadata = {
  title: "Survitrage à Lyon : passer du simple au double vitrage",
  description:
    "Vous cherchez un survitrage à Lyon ? Pour passer d'un simple à un vrai double vitrage, il faut changer l'ouvrant. Prise de mesures et devis gratuit, sans engagement. 06 50 44 06 73",
  alternates: { canonical: "/survitrage-lyon" },
};

export default function Page() {
  return (
    <SeoPage
      path="/survitrage-lyon"
      crumb="Survitrage à Lyon"
      label="Survitrage"
      title="Survitrage à Lyon :"
      titleSerif="passer au double vitrage."
      answer="Puillet Vitrerie ne pose pas de survitrage. Pour passer d'un simple vitrage à un vrai double vitrage à Lyon et dans sa métropole, il faut changer l'ouvrant : la feuillure d'une fenêtre à simple vitrage est trop fine pour recevoir un double vitrage. Je passe prendre les dimensions, j'établis un devis gratuit et sans engagement, et je m'occupe de la suite."
      facts={[
        "Pas de survitrage : je propose un vrai double vitrage.",
        "Sur une fenêtre à simple vitrage, la feuillure est trop fine pour un double vitrage : il faut changer l'ouvrant.",
        "Je viens prendre les dimensions sur place.",
        "Devis gratuit et sans engagement, établi par moi.",
        "Je gère la suite du chantier, du devis à la pose.",
      ]}
      sections={[
        {
          h2: "Qu'est-ce que le survitrage ?",
          p: [
            "Le survitrage consiste à ajouter un second verre sur une fenêtre existante, sans toucher au vitrage d'origine. C'est souvent présenté comme une solution rapide pour isoler une fenêtre à simple vitrage.",
            "Je ne pose pas de survitrage. Quand on me demande d'isoler une fenêtre à simple vitrage, je propose de passer à un vrai double vitrage.",
          ],
        },
        {
          h2: "Pourquoi il faut changer l'ouvrant",
          p: [
            "Un double vitrage est plus épais qu'un simple vitrage. Sur une fenêtre prévue pour du simple vitrage, la feuillure (le logement du verre dans la menuiserie) est trop fine pour le recevoir.",
            "Pour passer au double vitrage, il faut donc changer l'ouvrant, c'est-à-dire la partie de la fenêtre qui s'ouvre et qui porte le vitrage.",
          ],
        },
        {
          h2: "Comment ça se passe",
          table: {
            head: ["Étape", "Ce que je fais"],
            rows: [
              ["1. Prise de mesures", "Je passe chez vous prendre les dimensions de la fenêtre"],
              ["2. Devis", "J'établis moi-même un devis gratuit et sans engagement"],
              ["3. Suite du chantier", "Si vous acceptez, je m'occupe de tout jusqu'à la pose"],
            ],
          },
        },
        {
          h2: "Votre double vitrage est déjà cassé ou embué ?",
          p: ["Si votre fenêtre a déjà un double vitrage cassé, fissuré ou plein de buée, pas besoin de changer l'ouvrant : je remplace seulement le vitrage, fabriqué sur mesure."],
        },
      ]}
      faq={[
        { q: "Posez-vous du survitrage à Lyon ?", a: "Non. Pour isoler une fenêtre à simple vitrage, je propose un vrai double vitrage, ce qui demande de changer l'ouvrant." },
        { q: "Peut-on mettre un double vitrage dans une fenêtre à simple vitrage ?", a: "Pas dans l'ouvrant existant : sa feuillure est trop fine pour l'épaisseur d'un double vitrage. Il faut changer l'ouvrant." },
        { q: "Le devis est-il payant ?", a: "Non. Je viens prendre les dimensions et j'établis un devis gratuit et sans engagement." },
      ]}
      updated="2026-11-24"
      related={[
        { href: "/double-vitrage-lyon", label: "Remplacement de double vitrage à Lyon" },
        { href: "/remplacement-vitre-lyon", label: "Remplacement de vitre à Lyon" },
        { href: "/prix-vitrier-lyon", label: "Prix et devis" },
        { href: "/contact", label: "Demander un devis gratuit" },
      ]}
      service={{ name: "Passage du simple au double vitrage", description: "Alternative au survitrage : changement de l'ouvrant pour poser un vrai double vitrage, à Lyon et dans la métropole. Prise de mesures et devis gratuit." }}
    />
  );
}
