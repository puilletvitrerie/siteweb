// Réception du formulaire « Devis express » (page /devis).
// Vérifie la demande puis la transmet au script Google de Léo (Apps Script), qui :
// enregistre la ligne dans le Google Sheet, range les photos dans son Drive (privé) et lui envoie l'e-mail.
// Variables d'environnement à définir chez Vercel : DEVIS_WEBHOOK_URL et DEVIS_WEBHOOK_SECRET.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_PHOTOS = 3;
const MAX_PHOTO_BYTES = 1.5 * 1024 * 1024;
const MIN_FILL_MS = 3000; // en dessous, c'est un robot
const RATE_LIMIT = 5; // demandes
const RATE_WINDOW_MS = 10 * 60 * 1000; // par 10 minutes et par adresse IP

const hits = new Map<string, number[]>();

function tooMany(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT;
}

const telOk = (t: string) => /^(?:(?:\+|00)33[\s.-]?|0)[1-9](?:[\s.-]?\d{2}){4}$/.test(t.trim());
const clean = (v: FormDataEntryValue | null, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

// Signature des formats d'image acceptés (on ne fait pas confiance au type annoncé par le navigateur).
function isImage(buf: Buffer) {
  const jpeg = buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff;
  const png = buf.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
  const webp = buf.subarray(0, 4).toString() === "RIFF" && buf.subarray(8, 12).toString() === "WEBP";
  return jpeg || png || webp;
}

const json = (body: object, status = 200) => Response.json(body, { status });

export async function POST(request: Request) {
  const ip = (request.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "inconnue";
  if (tooMany(ip)) return json({ error: "Trop de demandes en peu de temps. Réessayez dans quelques minutes ou appelez Léo." }, 429);

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ error: "La demande est trop lourde. Retirez une photo et réessayez." }, 413);
  }

  // Anti-spam invisible : pot de miel rempli ou formulaire envoyé trop vite → on fait semblant d'accepter.
  const duree = Number(clean(form.get("duree_ms"), 12)) || 0;
  if (clean(form.get("site_web"), 200) || duree < MIN_FILL_MS) return json({ ok: true });

  const data = {
    prenom: clean(form.get("prenom"), 60),
    telephone: clean(form.get("telephone"), 25),
    ville: clean(form.get("ville"), 80),
    type: clean(form.get("type"), 200),
    urgence: clean(form.get("urgence"), 30),
    message: clean(form.get("message"), 2000),
    ok_contact: clean(form.get("ok_contact"), 3) === "oui",
    ok_marketing: clean(form.get("ok_marketing"), 3) === "oui",
    utm_source: clean(form.get("utm_source"), 60),
    utm_medium: clean(form.get("utm_medium"), 60),
    utm_campaign: clean(form.get("utm_campaign"), 100),
    referrer: clean(form.get("referrer"), 300),
  };

  if (!data.prenom) return json({ error: "Indiquez votre prénom." }, 400);
  if (!telOk(data.telephone)) return json({ error: "Le numéro de téléphone n'est pas valide." }, 400);
  if (!data.ville) return json({ error: "Indiquez votre ville." }, 400);
  if (!data.ok_contact) return json({ error: "Cochez la case pour que Léo puisse vous rappeler." }, 400);

  const files = form.getAll("photos").filter((f): f is File => typeof f !== "string");
  if (files.length > MAX_PHOTOS) return json({ error: "3 photos maximum." }, 400);
  const photos = [];
  for (const [i, f] of files.entries()) {
    if (f.size > MAX_PHOTO_BYTES) return json({ error: "Une photo est trop lourde. Retirez-la et réessayez." }, 413);
    const buf = Buffer.from(await f.arrayBuffer());
    if (!isImage(buf)) return json({ error: "Un des fichiers n'est pas une photo." }, 400);
    photos.push({ nom: `photo-${i + 1}.jpg`, type: "image/jpeg", base64: buf.toString("base64") });
  }

  const url = process.env.DEVIS_WEBHOOK_URL;
  const secret = process.env.DEVIS_WEBHOOK_SECRET;
  if (!url || !secret) {
    console.error("devis: DEVIS_WEBHOOK_URL ou DEVIS_WEBHOOK_SECRET manquant");
    return json({ error: "Le formulaire n'est pas encore branché." }, 503);
  }

  const source = data.utm_source || (/instagram/i.test(data.referrer) ? "instagram" : /tiktok/i.test(data.referrer) ? "tiktok" : "site");
  try {
    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, ...data, source, date: new Date().toISOString(), photos }),
      redirect: "follow",
    });
    const out = await r.json().catch(() => null);
    if (!r.ok || !out?.ok) throw new Error(`webhook ${r.status} ${JSON.stringify(out)}`);
  } catch (e) {
    console.error("devis: échec de transmission", e);
    return json({ error: "L'envoi n'a pas marché, réessayez dans un instant." }, 502);
  }

  return json({ ok: true });
}
