// Articles du blog. Chaque article est un fichier dans content/blog/,
// ajouté à la liste POSTS ci-dessous.
//
// Sur le site public, un article n'apparaît que si `publie: true` ET que sa date est passée.
// Pour préparer un article à l'avance : publie: false, puis passer à true après validation.

import vitreCasseeNuit from "@/content/blog/vitre-cassee-que-faire";
import simpleOuDouble from "@/content/blog/simple-ou-double-vitrage-fenetre-ancienne";
import bueeDoubleVitrage from "@/content/blog/buee-entre-les-vitres-double-vitrage";

export type Block =
  | { h2: string }
  | { p: string }
  | { ul: string[] }
  | { img: string; alt: string; caption?: string };

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

const POSTS: Post[] = [vitreCasseeNuit, simpleOuDouble, bueeDoubleVitrage];

// Sur la version d'essai (Vercel « preview »), les brouillons sont visibles pour relecture.
// Sur le site public (« production »), seuls les articles validés et datés d'aujourd'hui ou avant apparaissent.
export const SHOW_DRAFTS = process.env.VERCEL_ENV !== "production";

export function getPublishedPosts(): Post[] {
  const today = new Date().toISOString().slice(0, 10);
  return POSTS.filter((p) => SHOW_DRAFTS || (p.publie && p.date <= today)).sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return getPublishedPosts().find((p) => p.slug === slug);
}

export function formatDate(date: string) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}
