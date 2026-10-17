// Articles du blog. Chaque article est un fichier dans content/blog/,
// ajouté à la liste POSTS ci-dessous.
//
// Sur le site public, un article n'apparaît que si `publie: true` ET que sa date est passée.
// Pour préparer un article à l’avance : publie: false, puis passer à true après validation.
// Un article validé à date future apparaît tout seul à sa date (pages revérifiées toutes les heures).

import p_bilan_annee_chantiers from "@/content/blog/bilan-annee-chantiers";
import p_bruit_de_la_rue_vitrage from "@/content/blog/bruit-de-la-rue-vitrage";
import p_buee_entre_les_vitres_double_vitrage from "@/content/blog/buee-entre-les-vitres-double-vitrage";
import p_chantier_porte_bois_martele from "@/content/blog/chantier-porte-bois-martele";
import p_chantier_vitrage_150_kg_hall from "@/content/blog/chantier-vitrage-150-kg-hall";
import p_chantier_vitrine_lyon from "@/content/blog/chantier-vitrine-lyon";
import p_delais_remplacement_vitrage from "@/content/blog/delais-remplacement-vitrage";
import p_mesurer_une_vitre_devis from "@/content/blog/mesurer-une-vitre-devis";
import p_miroir_convexe_remplacement from "@/content/blog/miroir-convexe-remplacement";
import p_miroir_sur_mesure from "@/content/blog/miroir-sur-mesure";
import p_porte_immeuble_vandalisee from "@/content/blog/porte-immeuble-vandalisee";
import p_pose_au_mastic_traditionnel from "@/content/blog/pose-au-mastic-traditionnel";
import p_remplacer_vitrage_sans_changer_fenetre from "@/content/blog/remplacer-vitrage-sans-changer-fenetre";
import p_simple_ou_double_vitrage_fenetre_ancienne from "@/content/blog/simple-ou-double-vitrage-fenetre-ancienne";
import p_syndics_regies_remplacement_vitrage from "@/content/blog/syndics-regies-remplacement-vitrage";
import p_verre_arme_remplacement from "@/content/blog/verre-arme-remplacement";
import p_verre_feuillete_44_2_porte_immeuble from "@/content/blog/verre-feuillete-44-2-porte-immeuble";
import p_verre_feuillete_ou_trempe from "@/content/blog/verre-feuillete-ou-trempe";
import p_verre_imprime_martele_depoli_identique from "@/content/blog/verre-imprime-martele-depoli-identique";
import p_vitre_cassee_copropriete from "@/content/blog/vitre-cassee-copropriete";
import p_vitre_cassee_que_faire from "@/content/blog/vitre-cassee-que-faire";
import p_vitre_cassee_vacances from "@/content/blog/vitre-cassee-vacances";
import p_vitre_fissuree_changer from "@/content/blog/vitre-fissuree-changer";
import p_vitrier_miroitier_lyon from "@/content/blog/vitrier-miroitier-lyon";
import p_vitrier_villeurbanne from "@/content/blog/vitrier-villeurbanne";
import p_vitrine_magasin_cassee from "@/content/blog/vitrine-magasin-cassee";

export type Block =
  | { h2: string }
  | { p: string }
  | { ul: string[] }
  | { img: string; alt: string; caption?: string }
  | { avant: string; apres: string; ratio: number; caption: string }
  | { galerie: { avant: string; apres: string; ratio: number; caption: string }[] };

export type Post = {
  slug: string;
  title: string; // titre affiché et utilisé par Google
  description: string; // résumé de 140 à 160 caractères pour Google
  date: string; // AAAA-MM-JJ
  publie: boolean;
  image?: string;
  imageAlt?: string;
  body: Block[];
};

const POSTS: Post[] = [
  p_bilan_annee_chantiers,
  p_bruit_de_la_rue_vitrage,
  p_buee_entre_les_vitres_double_vitrage,
  p_chantier_porte_bois_martele,
  p_chantier_vitrage_150_kg_hall,
  p_chantier_vitrine_lyon,
  p_delais_remplacement_vitrage,
  p_mesurer_une_vitre_devis,
  p_miroir_convexe_remplacement,
  p_miroir_sur_mesure,
  p_porte_immeuble_vandalisee,
  p_pose_au_mastic_traditionnel,
  p_remplacer_vitrage_sans_changer_fenetre,
  p_simple_ou_double_vitrage_fenetre_ancienne,
  p_syndics_regies_remplacement_vitrage,
  p_verre_arme_remplacement,
  p_verre_feuillete_44_2_porte_immeuble,
  p_verre_feuillete_ou_trempe,
  p_verre_imprime_martele_depoli_identique,
  p_vitre_cassee_copropriete,
  p_vitre_cassee_que_faire,
  p_vitre_cassee_vacances,
  p_vitre_fissuree_changer,
  p_vitrier_miroitier_lyon,
  p_vitrier_villeurbanne,
  p_vitrine_magasin_cassee,
];

// Sur la version d'essai (Vercel « preview »), les brouillons sont visibles pour relecture.
// Sur le site public (« production »), seuls les articles validés et datés d'aujourd'hui ou avant apparaissent.
export const SHOW_DRAFTS = process.env.VERCEL_ENV !== "production";

export function getPublishedPosts(): Post[] {
  const today = new Date().toISOString().slice(0, 10);
  // En préversion : ordre chronologique (planning). En ligne : le plus récent d'abord.
  return POSTS.filter((p) => SHOW_DRAFTS || (p.publie && p.date <= today)).sort((a, b) =>
    SHOW_DRAFTS ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date),
  );
}

export function getPost(slug: string): Post | undefined {
  return getPublishedPosts().find((p) => p.slug === slug);
}

export function formatDate(date: string) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}
