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
      "J'interviens dans tous les arrondissements de Lyon pour remplacer des vitrages cassés, sans changer la menuiserie : portes d'immeuble, fenêtres, vitrines de commerce, miroirs. Un simple vitrage est remplacé en moins de 2 heures en urgence ; un vitrage sur mesure (feuilleté, double vitrage, miroir) sous 24 à 72 heures. Voici quelques chantiers réalisés à Lyon.",
    voisines: ["Villeurbanne", "Caluire-et-Cuire", "Vénissieux", "Bron", "Oullins", "Tassin-la-Demi-Lune", "Sainte-Foy-lès-Lyon", "Écully"],
    chantiers: [
      S("vitrine-facade", 757 / 1300, "Lyon 7e : vitrine de commerce, sécurisation en OSB puis pose du nouveau vitrage"),
      R(3, 590 / 1300, "Lyon 7e : vitrage de porte d'immeuble remplacé après vandalisme"),
      R(10, 1100 / 1109, "Lyon 7e : vitrage de porte d'immeuble remplacé"),
      S("miroir-hall", 661 / 1300, "Lyon 7e : miroir remplacé à l'identique dans un hall de copropriété"),
      R(9, 1091 / 1300, "Lyon 2e : remplacement du vitrage imprimé d'une fenêtre de cage d'escalier, à l'identique"),
    ],
  },
  {
    slug: "villeurbanne",
    nom: "Villeurbanne",
    cp: "69100",
    publie: false,
    intro:
      "Juste à côté de Lyon, Villeurbanne fait partie des communes où j'interviens le plus souvent, notamment sur les portes vitrées d'immeuble. Je remplace le vitrage sans toucher à la menuiserie : en moins de 2 heures pour un simple vitrage en urgence, sous 24 à 72 heures pour un vitrage sur mesure.",
    voisines: ["Lyon 3e", "Lyon 6e", "Vaulx-en-Velin", "Bron", "Caluire-et-Cuire", "Décines-Charpieu"],
    chantiers: [
      R(2, 708 / 1300, "Villeurbanne : vitrage de porte d'entrée d'immeuble remplacé"),
      R(5, 609 / 1300, "Villeurbanne : vitrage de porte d'entrée d'immeuble remplacé"),
    ],
  },
  {
    slug: "bourgoin-jallieu",
    nom: "Bourgoin-Jallieu",
    cp: "38300",
    publie: false,
    intro:
      "J'interviens jusqu'à Bourgoin-Jallieu, dans le Nord-Isère. J'y remplace des vitrages de portes de résidence et d'immeubles, notamment en verre feuilleté, en conservant la menuiserie existante.",
    voisines: ["L'Isle-d'Abeau", "Villefontaine", "Saint-Quentin-Fallavier", "Heyrieux", "Crémieu"],
    chantiers: [
      R(6, 711 / 1300, "Bourgoin-Jallieu : vitrage de porte d'entrée de résidence remplacé"),
      S("feuillete-imprime-200", 1100 / 1282, "Bourgoin-Jallieu : vitrage feuilleté imprimé 200 remplacé sur une porte d'immeuble"),
    ],
  },
  {
    slug: "vaulx-en-velin",
    nom: "Vaulx-en-Velin",
    cp: "69120",
    publie: false,
    intro:
      "J'interviens à Vaulx-en-Velin pour les particuliers et les copropriétés. Sur les portes d'immeuble, je remplace les vitrages cassés et je peux remettre aux normes les anciens vitrages en passant au feuilleté 44.2.",
    voisines: ["Villeurbanne", "Décines-Charpieu", "Bron", "Rillieux-la-Pape", "Meyzieu"],
    chantiers: [S("feuillete-44-2", 870 / 1300, "Vaulx-en-Velin : remise aux normes, vitrage de 8 mm remplacé par un feuilleté 44.2")],
  },
  {
    slug: "decines-charpieu",
    nom: "Décines-Charpieu",
    cp: "69150",
    publie: false,
    intro:
      "À Décines-Charpieu, j'interviens sur tous types de vitrages, y compris les verres décoratifs des portes anciennes. Je retrouve le même motif (martelé, imprimé) et je remplace le vitrage à l'identique, en respectant la menuiserie en bois.",
    voisines: ["Meyzieu", "Vaulx-en-Velin", "Chassieu", "Genas", "Villeurbanne"],
    chantiers: [S("martele-parclose-bois", 1100 / 891, "Décines-Charpieu : vitrage martelé remplacé à l'identique sur une porte de copropriété en bois")],
  },
  {
    slug: "bron",
    nom: "Bron",
    cp: "69500",
    publie: false,
    intro:
      "J'interviens à Bron chez les particuliers et dans les résidences : vitres cassées, doubles vitrages, portes vitrées, mais aussi garde-corps vitrés de balcon. Le vitrage est remplacé sans changer la structure existante.",
    voisines: ["Lyon 8e", "Vénissieux", "Saint-Priest", "Chassieu", "Villeurbanne"],
    chantiers: [R(1, 1100 / 852, "Bron : panneau en verre opale de garde-corps de balcon remplacé")],
  },
  {
    slug: "rillieux-la-pape",
    nom: "Rillieux-la-Pape",
    cp: "69140",
    publie: false,
    intro:
      "Au nord de Lyon, j'interviens à Rillieux-la-Pape, y compris pour les grands vitrages qui demandent plusieurs poseurs et un équipement à ventouses, comme les vitrages fixes de hall d'immeuble.",
    voisines: ["Caluire-et-Cuire", "Sathonay-Camp", "Vaulx-en-Velin", "Neuville-sur-Saône", "Montluel"],
    chantiers: [R(11, 1, "Rillieux-la-Pape : grand vitrage fixe de hall d'immeuble remplacé")],
  },
];
export const SHOW_DRAFTS_VILLES = process.env.VERCEL_ENV !== "production";

export function villesVisibles() {
  return VILLES.filter((v) => SHOW_DRAFTS_VILLES || v.publie);
}
