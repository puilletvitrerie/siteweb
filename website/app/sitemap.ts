import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/blog";
import { villesVisibles } from "@/lib/villes";

// Revérifié toutes les heures : un article validé apparaît tout seul le jour de sa date.
export const revalidate = 3600;

const BASE = "https://www.puilletvitrerie.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/realisations`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/faq`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE}/contact`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE}/catalogue`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE}/a-propos`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/blog`, changeFrequency: "weekly", priority: 0.7 },
    ...villesVisibles().map((v) => ({ url: `${BASE}/vitrier/${v.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...getPublishedPosts().map((p) => ({ url: `${BASE}/blog/${p.slug}`, lastModified: p.date, changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
