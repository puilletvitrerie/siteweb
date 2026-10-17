import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import { getPost, getPublishedPosts, formatDate, SHOW_DRAFTS, type Block } from "@/lib/blog";

// Revérifié toutes les heures : un article validé apparaît tout seul le jour de sa date.
export const revalidate = 3600;

export function generateStaticParams() {
  return getPublishedPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.description, images: post.image ? [post.image] : undefined },
  };
}

function renderBlock(b: Block, i: number) {
  if ("h2" in b) return <h2 key={i} style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.01em", margin: "32px 0 10px" }}>{b.h2}</h2>;
  if ("ul" in b)
    return (
      <ul key={i} style={{ paddingLeft: 22, margin: "0 0 16px", listStyle: "disc" }}>
        {b.ul.map((li) => <li key={li} style={{ marginBottom: 8 }}>{li}</li>)}
      </ul>
    );
  if ("galerie" in b)
    return (
      <div key={i} style={{ margin: "24px 0" }}>
        <BeforeAfterGallery size={85} maxWidth={640} items={b.galerie.map((g) => ({ before: g.avant, after: g.apres, ratio: g.ratio, caption: g.caption }))} />
      </div>
    );
  if ("avant" in b)
    return (
      <div key={i} style={{ margin: "24px 0" }}>
        <BeforeAfterGallery size={85} maxWidth={640} items={[{ before: b.avant, after: b.apres, ratio: b.ratio, caption: b.caption }]} />
      </div>
    );
  if ("img" in b)
    return (
      <figure key={i} style={{ margin: "24px 0" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={b.img} alt={b.alt} loading="lazy" className="rounded-2xl mx-auto" style={{ maxWidth: "100%", maxHeight: 620, width: "auto" }} />
        {b.caption && <figcaption style={{ fontSize: 14, color: "var(--color-ink-soft)", marginTop: 8, textAlign: "center" }}>{b.caption}</figcaption>}
      </figure>
    );
  return <p key={i} style={{ margin: "0 0 16px" }}>{b.p}</p>;
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    image: post.image ? `https://www.puilletvitrerie.fr${post.image}` : undefined,
    author: { "@type": "Person", name: "Léo Puillet" },
    publisher: { "@id": "https://www.puilletvitrerie.fr/#entreprise" },
    mainEntityOfPage: `https://www.puilletvitrerie.fr/blog/${post.slug}`,
  };

  return (
    <article style={{ background: "var(--color-bg)", color: "var(--color-ink)" }} className="px-5 md:px-14 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto">
        {SHOW_DRAFTS && !post.publie && (
          <div style={{ background: "#fff4d6", border: "1px solid #f0d58a", color: "#6b5200", borderRadius: 12, padding: "10px 14px", fontSize: 14, marginBottom: 16 }}>
            Brouillon : visible uniquement sur la version d&apos;essai, en attente de validation.
          </div>
        )}
        <Link href="/blog" style={{ fontSize: 14, color: "var(--color-ink-soft)" }}>← Tous les articles</Link>
        <h1 style={{ fontSize: "clamp(28px, 4.5vw, 46px)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.1, margin: "16px 0 10px" }}>{post.title}</h1>
        <div style={{ fontSize: 14, color: "var(--color-ink-soft)", marginBottom: 24 }}>
          Par Léo Puillet, artisan vitrier · {formatDate(post.date)}
        </div>
        {post.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.image} alt={post.imageAlt ?? ""} className="rounded-2xl mb-8 mx-auto block" style={{ maxWidth: "100%", maxHeight: 640, width: "auto" }} />
        )}
        <div style={{ fontSize: 17, lineHeight: 1.7 }}>{post.body.map(renderBlock)}</div>

        <div style={{ marginTop: 40, background: "var(--color-ink)", color: "#fff", borderRadius: 18, padding: "26px 24px" }}>
          <div style={{ fontSize: 22, fontWeight: 800 }}>Besoin d&apos;un vitrier à Lyon ?</div>
          <p style={{ color: "#d6d1c7", margin: "8px 0 18px" }}>Devis gratuit et sans engagement. Dépannage 7j/7.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:0650440673" style={{ background: "var(--color-red)", color: "#fff", padding: "13px 22px", borderRadius: 999, fontWeight: 700, textAlign: "center" }}>Appeler · 06 50 44 06 73</a>
            <Link href="/contact" style={{ border: "1.5px solid #fff", color: "#fff", padding: "12px 22px", borderRadius: 999, fontWeight: 700, textAlign: "center" }}>Demander un devis</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
