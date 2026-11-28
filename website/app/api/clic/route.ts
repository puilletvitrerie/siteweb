// Reçoit les clics téléphone / WhatsApp envoyés par components/SuiviContacts.tsx
// et les transmet au script Google de Léo (même script que les devis), qui ajoute une ligne
// dans l'onglet « Contacts site » du Google Sheet « Demandes de devis ». Aucun e-mail n'est envoyé.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TYPES = new Set(["telephone", "whatsapp"]);
const RATE_LIMIT = 20; // clics
const RATE_WINDOW_MS = 10 * 60 * 1000; // par 10 minutes et par adresse IP (l'adresse n'est pas transmise)
const hits = new Map<string, number[]>();

function tooMany(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT;
}

const txt = (v: unknown, max: number) => (typeof v === "string" ? v.replace(/[\r\n\t]/g, " ").trim().slice(0, max) : "");

export async function POST(request: Request) {
  const ip = (request.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "inconnue";
  if (tooMany(ip)) return new Response(null, { status: 204 });

  let d: Record<string, unknown>;
  try {
    d = JSON.parse(await request.text());
  } catch {
    return new Response(null, { status: 204 });
  }
  const type = txt(d.type, 20);
  if (!TYPES.has(type)) return new Response(null, { status: 204 });
  const page = txt(d.page, 200).startsWith("/") ? txt(d.page, 200) : "/";
  const provenance = txt(d.provenance, 60) || "direct";

  const url = process.env.DEVIS_WEBHOOK_URL;
  const secret = process.env.DEVIS_WEBHOOK_SECRET;
  if (!url || !secret) return new Response(null, { status: 204 });

  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, kind: "clic", type, page, provenance }),
      redirect: "follow",
    });
  } catch (e) {
    console.error("clic: échec de transmission", e);
  }
  return new Response(null, { status: 204 });
}
