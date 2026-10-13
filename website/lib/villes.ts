// Pages « Vitrier à [ville] ». Une entrée = une page /vitrier/[slug].
// Règle : uniquement des informations vraies (pas de chantier inventé dans une ville).
// `publie: false` = visible seulement sur la version d'essai.

export type Ville = {
  slug: string;
  nom: string;
  cp: string;
  publie: boolean;
  intro: string;
  voisines: string[];
  photo: { src: string; alt: string };
};

export const VILLES: Ville[] = [
  {
    slug: "meyzieu",
    nom: "Meyzieu",
    cp: "69330",
    publie: false,
    intro:
      "J'interviens régulièrement à Meyzieu, comme dans tout l'Est lyonnais, pour remplacer des vitrages cassés chez les particuliers, dans les copropriétés et dans les commerces.",
    voisines: ["Décines-Charpieu", "Jonage", "Genas", "Chassieu", "Pusignan", "Vaulx-en-Velin"],
    photo: { src: "/assets/services/feuillete-44-2-apres.jpg", alt: "Porte d'immeuble avec vitrage feuilleté 44.2 posé par un vitrier dans l'Est lyonnais" },
  },
];

export const SHOW_DRAFTS_VILLES = process.env.VERCEL_ENV !== "production";

export function villesVisibles() {
  return VILLES.filter((v) => SHOW_DRAFTS_VILLES || v.publie);
}
