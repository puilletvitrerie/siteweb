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
    publie: true,
    intro:
      "J'interviens régulièrement à Meyzieu, comme dans tout l'Est lyonnais, pour remplacer des vitrages cassés chez les particuliers, dans les copropriétés et dans les commerces.",
    voisines: ["Décines-Charpieu", "Jonage", "Genas", "Chassieu", "Pusignan", "Vaulx-en-Velin"],
    chantiers: [
      {
        avant: "/assets/villes/meyzieu-avant.jpg",
        apres: "/assets/villes/meyzieu-apres.jpg",
        ratio: 1005 / 1300,
        caption: "Meyzieu : vitrage de porte d'immeuble de 2,50 m × 90 cm remplacé en moins de 24 h",
      },
    ],
  },
  {
    slug: "lyon",
    nom: "Lyon",
    cp: "69001 à 69009",
    publie: true,
    intro:
      "J'interviens dans tous les arrondissements de Lyon pour remplacer des vitrages cassés, sans changer la menuiserie : portes d'immeuble, fenêtres, vitrines de commerce, miroirs. Un simple vitrage est remplacé en moins de 2 heures en urgence ; un vitrage sur mesure (feuilleté, double vitrage, miroir) sous 24 à 72 heures. Voici quelques chantiers réalisés à Lyon.",
    voisines: ["Villeurbanne", "Caluire-et-Cuire", "Vénissieux", "Bron", "Oullins", "Tassin-la-Demi-Lune", "Sainte-Foy-lès-Lyon", "Écully"],
    chantiers: [
      S("vitrine-facade", 757 / 1300, "Lyon 7e : vitrine de commerce, sécurisation en OSB puis pose du nouveau vitrage"),
      R(3, 590 / 1300, "Lyon 7e : vitrage de porte d'immeuble remplacé après vandalisme"),
      R(10, 1100 / 1109, "Lyon 7e : vitrage de porte d'immeuble remplacé"),
      S("miroir-hall", 661 / 1300, "Lyon 7e : miroir remplacé à l'identique dans un hall de copropriété"),
      R(9, 1091 / 1300, "Lyon 2e : remplacement du vitrage imprimé d'une fenêtre de cage d'escalier, à l'identique"),
      R(12, 1, "Lyon 4e (Croix-Rousse) : verre de poêle à bois remplacé sur mesure"),
    ],
  },
  {
    slug: "villeurbanne",
    nom: "Villeurbanne",
    cp: "69100",
    publie: true,
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
    publie: true,
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
    publie: true,
    intro:
      "J'interviens à Vaulx-en-Velin pour les particuliers et les copropriétés. Sur les portes d'immeuble, je remplace les vitrages cassés et je peux remettre aux normes les anciens vitrages en passant au feuilleté 44.2.",
    voisines: ["Villeurbanne", "Décines-Charpieu", "Bron", "Rillieux-la-Pape", "Meyzieu"],
    chantiers: [
      S("feuillete-44-2", 870 / 1300, "Vaulx-en-Velin : remise aux normes, vitrage de 8 mm remplacé par un feuilleté 44.2"),
      R(13, 980 / 1000, "Vaulx-en-Velin : vitrage armé de porte d'immeuble remplacé"),
    ],
  },
  {
    slug: "decines-charpieu",
    nom: "Décines-Charpieu",
    cp: "69150",
    publie: true,
    intro:
      "À Décines-Charpieu, j'interviens sur tous types de vitrages, y compris les verres décoratifs des portes anciennes. Je retrouve le même motif (martelé, imprimé) et je remplace le vitrage à l'identique, en respectant la menuiserie en bois.",
    voisines: ["Meyzieu", "Vaulx-en-Velin", "Chassieu", "Genas", "Villeurbanne"],
    chantiers: [S("martele-parclose-bois", 1100 / 891, "Décines-Charpieu : vitrage martelé remplacé à l'identique sur une porte de copropriété en bois")],
  },
  {
    slug: "bron",
    nom: "Bron",
    cp: "69500",
    publie: true,
    intro:
      "J'interviens à Bron chez les particuliers et dans les résidences : vitres cassées, doubles vitrages, portes vitrées, mais aussi garde-corps vitrés de balcon. Le vitrage est remplacé sans changer la structure existante.",
    voisines: ["Lyon 8e", "Vénissieux", "Saint-Priest", "Chassieu", "Villeurbanne"],
    chantiers: [R(1, 1100 / 852, "Bron : panneau en verre opale de garde-corps de balcon remplacé")],
  },
  {
    slug: "rillieux-la-pape",
    nom: "Rillieux-la-Pape",
    cp: "69140",
    publie: true,
    intro:
      "Au nord de Lyon, j'interviens à Rillieux-la-Pape, y compris pour les grands vitrages qui demandent plusieurs poseurs et un équipement à ventouses, comme les vitrages fixes de hall d'immeuble.",
    voisines: ["Caluire-et-Cuire", "Sathonay-Camp", "Vaulx-en-Velin", "Neuville-sur-Saône", "Montluel"],
    chantiers: [R(11, 1, "Rillieux-la-Pape : grand vitrage fixe de hall d'immeuble remplacé")],
  },
  {
    slug: "caluire-et-cuire",
    nom: "Caluire-et-Cuire",
    cp: "69300",
    publie: true,
    intro:
      "Juste au nord de Lyon, j'interviens à Caluire-et-Cuire pour les copropriétés et les particuliers. Je remplace les vitrages cassés à l'identique, y compris sur les menuiseries en bois avec parclose, sans changer la fenêtre : en moins de 2 heures pour un simple vitrage en urgence.",
    voisines: ["Lyon 4e", "Rillieux-la-Pape", "Sathonay-Camp", "Fontaines-sur-Saône", "Villeurbanne"],
    chantiers: [R(14, 875 / 1000, "Caluire-et-Cuire : vitrage 4 mm remplacé avec parclose en bois sur la fenêtre d'un local poubelle")],
  },
  {
    slug: "tassin-la-demi-lune",
    nom: "Tassin-la-Demi-Lune",
    cp: "69160",
    publie: true,
    intro:
      "Tout proche de Francheville, Tassin-la-Demi-Lune fait partie de mon secteur d'intervention quotidien. J'y remplace les vitrages cassés des portes d'immeuble et des fenêtres, sans toucher à la menuiserie.",
    voisines: ["Francheville", "Craponne", "Écully", "Charbonnières-les-Bains", "Lyon 5e", "Lyon 9e"],
    chantiers: [R(4, 890 / 1300, "Tassin-la-Demi-Lune : vitrage de porte d'entrée d'immeuble remplacé")],
  },
  {
    slug: "montluel",
    nom: "Montluel",
    cp: "01120",
    publie: true,
    intro:
      "J'interviens jusqu'à Montluel, dans l'Ain, à l'est de Lyon. J'y remplace notamment des vitrages de portes de hall d'immeuble, avec prise de mesures sur place et devis gratuit.",
    voisines: ["Dagneux", "La Boisse", "Beynost", "Miribel", "Niévroz"],
    chantiers: [R(7, 874 / 1300, "Montluel : vitrage de porte vitrée de hall remplacé")],
  },
  {
    slug: "saint-genis-les-ollieres",
    nom: "Saint-Genis-les-Ollières",
    cp: "69290",
    publie: true,
    intro:
      "À Saint-Genis-les-Ollières, dans l'ouest lyonnais, je remplace les doubles vitrages cassés ou embués sans changer la fenêtre : la menuiserie reste en place, seul le vitrage est remplacé.",
    voisines: ["Craponne", "Tassin-la-Demi-Lune", "Francheville", "Grézieu-la-Varenne", "Charbonnières-les-Bains"],
    chantiers: [R(8, 1100 / 1099, "Saint-Genis-les-Ollières : double vitrage cassé remplacé sur une fenêtre PVC")],
  },
  {
    slug: "craponne",
    nom: "Craponne",
    cp: "69290",
    publie: true,
    intro:
      "J'interviens à Craponne pour les vitrages et les miroirs, y compris les miroirs convexes de sortie de parking ou de résidence, remplacés à l'identique pour retrouver une bonne visibilité.",
    voisines: ["Francheville", "Tassin-la-Demi-Lune", "Saint-Genis-les-Ollières", "Brindas", "Grézieu-la-Varenne"],
    chantiers: [S("miroir-convexe", 960 / 1150, "Craponne : miroir convexe remplacé à l'identique")],
  },
  {
    slug: "francheville",
    nom: "Francheville",
    cp: "69340",
    publie: true,
    intro:
      "Puillet Vitrerie est installée à Francheville : j'y interviens très rapidement. Je remplace tous types de vitrages, y compris sur les fenêtres anciennes en bois, avec une pose au mastic traditionnel.",
    voisines: ["Tassin-la-Demi-Lune", "Craponne", "Sainte-Foy-lès-Lyon", "Chaponost", "Lyon 5e"],
    chantiers: [S("mastic", 1100 / 1183, "Francheville : vitre fendue remplacée et posée au mastic traditionnel")],
  },
  {
    slug: "ecully",
    nom: "Écully",
    cp: "69130",
    publie: true,
    intro:
      "Écully est à quelques minutes de Francheville, où je suis installé, dans l'ouest lyonnais. J'y remplace les vitres cassées, les doubles vitrages embués et les vitrages de portes de résidence, sans changer la menuiserie. Mon camion transporte du verre en stock : un simple vitrage est recoupé et posé sur place, en moins de 2 heures en urgence.",
    voisines: ["Tassin-la-Demi-Lune", "Dardilly", "Champagne-au-Mont-d'Or", "Charbonnières-les-Bains", "Lyon 9e", "Lyon 5e"],
  },
  {
    slug: "sainte-foy-les-lyon",
    nom: "Sainte-Foy-lès-Lyon",
    cp: "69110",
    publie: true,
    intro:
      "Voisine directe de Francheville, Sainte-Foy-lès-Lyon fait partie de mon secteur de tous les jours. Maisons, copropriétés, commerces : je remplace le vitrage à l'identique en conservant vos fenêtres et vos portes, y compris les verres imprimés ou martelés des portes anciennes.",
    voisines: ["Francheville", "Lyon 5e", "Oullins", "La Mulatière", "Tassin-la-Demi-Lune", "Chaponost"],
  },
  {
    slug: "oullins",
    nom: "Oullins",
    cp: "69600",
    publie: true,
    intro:
      "J'interviens à Oullins (aujourd'hui Oullins-Pierre-Bénite) pour les particuliers, les commerces du centre-ville et les copropriétés. Vitre cassée, double vitrage fissuré ou embué, vitrage de porte d'immeuble : je prends les mesures sur place et j'envoie un devis gratuit, dont le prix est le prix final.",
    voisines: ["Pierre-Bénite", "Sainte-Foy-lès-Lyon", "La Mulatière", "Saint-Genis-Laval", "Lyon 7e", "Francheville"],
  },
  {
    slug: "pierre-benite",
    nom: "Pierre-Bénite",
    cp: "69310",
    publie: true,
    intro:
      "Au sud de Lyon, j'interviens à Pierre-Bénite (commune d'Oullins-Pierre-Bénite) pour remplacer les vitrages cassés des logements, des parties communes et des locaux professionnels. Pour les portes d'immeuble, je pose du verre feuilleté 44.2, conforme aux exigences de sécurité.",
    voisines: ["Oullins", "Saint-Fons", "Irigny", "Saint-Genis-Laval", "Lyon 7e"],
  },
  {
    slug: "charbonnieres-les-bains",
    nom: "Charbonnières-les-Bains",
    cp: "69260",
    publie: true,
    intro:
      "À Charbonnières-les-Bains, dans l'ouest lyonnais, je remplace les vitrages de maisons et de résidences : doubles vitrages embués, baies vitrées, portes vitrées, miroirs sur mesure. La menuiserie reste en place, seul le verre est changé.",
    voisines: ["Tassin-la-Demi-Lune", "Écully", "Saint-Genis-les-Ollières", "Marcy-l'Étoile", "La Tour-de-Salvagny", "Dardilly"],
  },
  {
    slug: "dardilly",
    nom: "Dardilly",
    cp: "69570",
    publie: true,
    intro:
      "J'interviens à Dardilly chez les particuliers comme dans les entreprises et commerces de la zone d'activité. Vitre cassée à sécuriser, double vitrage à remplacer, vitrine endommagée : je peux poser un panneau OSB le jour même, puis le vitrage définitif sous 24 à 72 heures.",
    voisines: ["Écully", "Limonest", "Champagne-au-Mont-d'Or", "Charbonnières-les-Bains", "La Tour-de-Salvagny"],
  },
  {
    slug: "limonest",
    nom: "Limonest",
    cp: "69760",
    publie: true,
    intro:
      "Au nord-ouest de Lyon, j'interviens à Limonest pour les maisons, les bureaux et les commerces : remplacement de vitrages cassés, doubles vitrages, vitrines et miroirs. Je me déplace gratuitement pour le devis, et un seul interlocuteur suit votre chantier du premier appel à la pose.",
    voisines: ["Dardilly", "Champagne-au-Mont-d'Or", "Saint-Didier-au-Mont-d'Or", "Lissieu", "Écully"],
  },
  {
    slug: "champagne-au-mont-d-or",
    nom: "Champagne-au-Mont-d'Or",
    cp: "69410",
    publie: true,
    intro:
      "J'interviens à Champagne-au-Mont-d'Or, entre Écully et les Monts d'Or, pour les particuliers et les copropriétés. Je remplace les vitres cassées et les doubles vitrages sans changer la fenêtre, et je réalise des miroirs sur mesure pour salle de bain, dressing ou hall d'entrée.",
    voisines: ["Écully", "Dardilly", "Limonest", "Saint-Didier-au-Mont-d'Or", "Lyon 9e"],
  },
  {
    slug: "venissieux",
    nom: "Vénissieux",
    cp: "69200",
    publie: true,
    intro:
      "J'interviens à Vénissieux pour les particuliers, les commerces et les copropriétés, notamment pour les syndics et les régies : portes d'immeuble vandalisées, vitrages de parties communes, vitrines. Je me rends sur place en autonomie et j'envoie un devis détaillé HT/TTC.",
    voisines: ["Lyon 8e", "Saint-Fons", "Saint-Priest", "Bron", "Corbas", "Feyzin"],
  },
  {
    slug: "saint-priest",
    nom: "Saint-Priest",
    cp: "69800",
    publie: true,
    intro:
      "À Saint-Priest, dans l'Est lyonnais, je remplace les vitrages cassés des logements, des immeubles et des locaux d'activité. Un simple vitrage est remplacé en moins de 2 heures en urgence ; un double vitrage ou un feuilleté, fabriqué sur mesure, est posé sous 24 à 72 heures.",
    voisines: ["Bron", "Vénissieux", "Chassieu", "Mions", "Corbas", "Genas"],
  },
  {
    slug: "saint-fons",
    nom: "Saint-Fons",
    cp: "69190",
    publie: true,
    intro:
      "J'interviens à Saint-Fons pour remplacer les vitres cassées des particuliers, des commerces et des immeubles. Pour les portes d'entrée de résidence, je remets aux normes les anciens vitrages en passant au feuilleté 44.2, en conservant la menuiserie.",
    voisines: ["Vénissieux", "Pierre-Bénite", "Feyzin", "Lyon 7e", "Lyon 8e"],
  },
  {
    slug: "neuville-sur-saone",
    nom: "Neuville-sur-Saône",
    cp: "69250",
    publie: true,
    intro:
      "Au nord de Lyon, au bord de la Saône, j'interviens à Neuville-sur-Saône pour les maisons, les commerces et les copropriétés : vitres cassées, doubles vitrages embués, verres de portes anciennes remplacés à l'identique, miroirs sur mesure.",
    voisines: ["Rillieux-la-Pape", "Fontaines-sur-Saône", "Genay", "Montanay", "Albigny-sur-Saône"],
  },
  {
    slug: "villefranche-sur-saone",
    nom: "Villefranche-sur-Saône",
    cp: "69400",
    publie: true,
    intro:
      "J'interviens jusqu'à Villefranche-sur-Saône, dans le Beaujolais, pour les particuliers, les commerces et les copropriétés. Je me déplace pour prendre les mesures, j'envoie un devis gratuit et je remplace le vitrage sans changer votre menuiserie : vitrines, portes d'immeuble, doubles vitrages, miroirs.",
    voisines: ["Gleizé", "Limas", "Arnas", "Anse", "Jassans-Riottier"],
  },
];

export const SHOW_DRAFTS_VILLES = process.env.VERCEL_ENV !== "production";

export function villesVisibles() {
  return VILLES.filter((v) => SHOW_DRAFTS_VILLES || v.publie);
}
