// Contenus déplacés de l'ancienne page d'accueil : réalisations (page /realisations) et FAQ (page /faq).

export const REALISATIONS = [
  { n: "06", title: "Porte d'entrée de résidence", meta: "Remplacement du vitrage de porte", tag: "Copropriété", ratio: 711 / 1300 },
  { n: "01", title: "Garde-corps vitré de balcon", meta: "Remplacement du panneau en verre opale", tag: "Copropriété", ratio: 1100 / 852 },
  { n: "02", title: "Porte d'entrée d'immeuble", meta: "Remplacement du vitrage de porte", tag: "Copropriété", ratio: 708 / 1300 },
  { n: "03", title: "Porte d'entrée d'immeuble", meta: "Remplacement du vitrage après vandalisme", tag: "Dépannage", ratio: 590 / 1300 },
  { n: "04", title: "Porte d'entrée d'immeuble", meta: "Remplacement du vitrage de porte", tag: "Copropriété", ratio: 890 / 1300 },
  { n: "05", title: "Porte d'entrée d'immeuble", meta: "Remplacement du vitrage de porte", tag: "Copropriété", ratio: 609 / 1300 },
  { n: "07", title: "Porte vitrée de hall", meta: "Remplacement du vitrage de porte", tag: "Copropriété", ratio: 874 / 1300 },
  { n: "08", title: "Fenêtre PVC", meta: "Remplacement du vitrage", tag: "Particulier", ratio: 1100 / 1099 },
  { n: "09", title: "Fenêtre ancienne de cage d'escalier", meta: "Vitrage imprimé posé à l'identique", tag: "Copropriété", ratio: 1091 / 1300 },
  { n: "10", title: "Porte d'entrée d'immeuble", meta: "Remplacement du vitrage de porte", tag: "Copropriété", ratio: 1100 / 1109 },
  { n: "11", title: "Vitrine de hall d'immeuble", meta: "Remplacement du grand vitrage fixe", tag: "Copropriété", ratio: 1 },
].map((r) => ({ ...r, before: `/assets/realisations/${r.n}-avant.jpg`, after: `/assets/realisations/${r.n}-apres.jpg` }));

export const FAQ_ITEMS = [
  { q: "Quels sont vos délais pour un dépannage urgent ?", a: "Pour un simple vitrage cassé, j'interviens en urgence en moins de 2h. Pour le verre feuilleté, le double vitrage et les miroirs, le remplacement est réalisé sous 24 à 72h. En attendant, je peux sécuriser l'ouverture le jour même avec une plaque OSB." },
  { q: "Le devis est-il payant ?", a: "Non, le devis est gratuit et sans engagement. Je me déplace pour prendre les mesures, puis je vous envoie un devis clair et détaillé. Le déplacement pour établir le devis est gratuit. Le prix indiqué sur le devis est celui que vous payez." },
  { q: "Mon assurance peut-elle prendre en charge ma vitre cassée ?", a: "Si votre contrat d'assurance habitation comprend la garantie bris de glace, le remplacement de votre vitrage peut être pris en charge : seule la franchise reste alors généralement à votre charge. N'hésitez pas à m'appeler au 06 50 44 06 73, je vous indique les démarches à faire auprès de votre assurance." },
  { q: "Combien coûte un remplacement de vitrage ?", a: "Le prix dépend de plusieurs éléments : les dimensions et l'épaisseur du verre, le type de vitrage (simple, double vitrage, feuilleté, dépoli, imprimé…), l'accès au chantier et la main d'œuvre nécessaire. Un grand vitrage lourd peut demander deux ou trois poseurs, voire un équipement à ventouses. Un devis gratuit et clair vous est remis avant toute intervention, généralement sous 24h." },
  { q: "Intervenez-vous le week-end ?", a: "Oui, le dépannage fonctionne 7j/7, y compris le week-end et les jours fériés. Les fournisseurs de verre étant fermés le week-end, je sécurise l'ouverture le jour même (plaque OSB) en attendant la commande du vitrage, puis je reviens le poser dès sa réception." },
  { q: "Faites-vous des miroirs sur mesure ?", a: "Bien sûr : miroirs muraux, salle de bain anti-buée, dressing, biseautés, percés. Mesure sur place, fabrication à l'atelier, pose à domicile." },
];
