import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedPosts, formatDate, SHOW_DRAFTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog · Conseils de vitrier à Lyon",
  description:
    "Conseils d'un artisan vitrier à Lyon : vitre cassée, double vitrage, verre feuilleté, miroirs, copropriété. Des réponses claires pour bien choisir et agir vite.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <div style={{ background: "var(--color-bg)", color: "var(--color-ink)" }} className="px-5 md:px-14 py-14">
      <div className="max-w-4xl mx-auto">
        <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-red)" }}>
          Blog
        </div>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.05, margin: "12px 0 14px" }}>
          Conseils de vitrier
        </h1>
        <p style={{ fontSize: 17, color: "var(--color-ink-soft)", maxWidth: 620, marginBottom: 36 }}>
          Vitre cassée, double vitrage, verre feuilleté, miroirs : mes conseils d&apos;artisan pour bien choisir et agir vite.
        </p>

        {posts.length === 0 ? (
          <p style={{ color: "var(--color-ink-soft)" }}>Les premiers articles arrivent très bientôt.</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2">
            {posts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} style={{ background: "#fff", border: "1px solid var(--color-line)", borderRadius: 18, overflow: "hidden", display: "block" }}>
                {p.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.image} alt={p.imageAlt ?? ""} loading="lazy" className="w-full aspect-[16/10] object-cover" />
                )}
                <div style={{ padding: "18px 20px 22px" }}>
                  <div style={{ fontSize: 13, color: "var(--color-ink-soft)" }}>
                    {SHOW_DRAFTS && !p.publie && (
                      <span style={{ background: "#fff4d6", color: "#6b5200", border: "1px solid #f0d58a", borderRadius: 999, padding: "2px 8px", marginRight: 8, fontSize: 12 }}>Brouillon · prévu le</span>
                    )}
                    {formatDate(p.date)}
                  </div>
                  <h2 style={{ fontSize: 20, fontWeight: 800, lineHeight: 1.25, margin: "6px 0 8px" }}>{p.title}</h2>
                  <p style={{ fontSize: 15, color: "var(--color-ink-soft)", lineHeight: 1.5 }}>{p.description}</p>
                  <div style={{ marginTop: 12, fontWeight: 700, fontSize: 14, color: "var(--color-red)" }}>Lire l&apos;article →</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
