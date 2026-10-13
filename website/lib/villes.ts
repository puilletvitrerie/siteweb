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
  photo?: { src: string; alt: string };
  // Chantiers réellement réalisés dans cette ville (photos avant/après).
  chantiers?: { avant: string; apres: string; ratio: number; caption: string }[];
};

const R = (n: number, ratio: number, caption: string) => ({
  avant: `/assets/realisations/${String(n).padStart(2, "0")}-avant.jpg`,
  apres: `/assets/realisations/${String(n).padStart(2, "0")}-apres.jpg`,
  ratio,
  caption,
});
const S = (k: string, ratio: number, caption: string) => ({
  avant: `/assets/services/${k}-avant.jpg`,
  apres: `/assets/services/${k}-apres.jpg`,
  ratio,
  caption,
});

export const VILLES: Ville[] = [
  {
    slug: "meyzieu",
    nom: "Meyzieu",
    cp: "69330",
    publie: false,
    intro:
      "J'interviens régulièrement à Meyzieu, comme dans tout l'Est lyonnais, pour remplacer des vitrages cassés chez les particuliers, dans les copropriétés et dans les commerces.",
    voisines: ["Décines-Charpieu", "Jonage", "Genas", "Chassieu", "Pusignan", "Vaulx-en-Velin"],
  },
  {
    slug: "lyon",
    nom: "Lyon",
    cp: "69001 à 69009",
    publie: false,
    intro:
      "J'interviens dans tous les arrondissements de Lyon pour remplacer des vitrages cassés : portes d'immeuble, fenêtres anciennes, vitrines de commerce, miroirs. Voici quelques chantiers réalisés à Lyon.",
    voisines: ["Villeurbanne", "Caluire-et-Cuire", "Vénissieux", "Bron", "Oullins", "Tassin-la-Demi-Lune", "Sainte-Foy-lès-Lyon", "Écully"],
    chantiers: [
      S("vitrine-facade", 757 / 1300, "Lyon 7e : vitrine de commerce, sécurisation en OSB puis pose du nouveau vitrage"),
      R(3, 590 / 1300, "Lyon 7e : vitrage de porte d'immeuble remplacé après vandalisme"),
      R(10, 1100 / 1109, "Lyon 7e : vitrage de porte d'immeuble remplacé"),
      S("miroir-hall", 661 / 1300, "Lyon 7e : miroir remplacé à l'identique dans un hall de copropriété"),
      R(9, 1091 / 1300, "Lyon 2e : fenêtre ancienne de cage d'escalier, verre imprimé posé à l'identique"),
    ],
  },
];

export const SHOW_DRAFTS_VILLES = process.env.VERCEL_ENV !== "production";

export function villesVisibles() {
  return VILLES.filter((v) => SHOW_DRAFTS_VILLES || v.publie);
}
