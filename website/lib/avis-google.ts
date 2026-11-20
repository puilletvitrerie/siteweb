// Note, nombre d'avis et derniers avis de la fiche Google, récupérés via l'API Google Places (New).
// Mis à jour automatiquement une fois par jour (cache Next.js), sans rien toucher.
//
// Variables d'environnement (Vercel → Settings → Environment Variables) :
//   GOOGLE_PLACES_API_KEY  (obligatoire) clé Google Cloud avec « Places API (New) » activée
//   GOOGLE_PLACE_ID        (facultatif)  identifiant de la fiche ; sinon recherche « Puillet Vitrerie Francheville »
//
// Sans clé, ou si l'API ne répond pas, le site affiche les valeurs de secours ci-dessous.

export type AvisClient = { text: string; name: string; date: string };
export type AvisGoogle = { note: number; nombre: number; avis: AvisClient[]; source: "google" | "secours" };

const REVALIDATE = 60 * 60 * 24; // 24 h

// Valeurs de secours (à jour au 20/11/2026)
export const AVIS_SECOURS: AvisGoogle = {
  note: 4.9,
  nombre: 31,
  source: "secours",
  avis: [
    { text: "Sa réactivité est tout simplement impressionnante : demande de devis envoyée à 15h, reçu en 1h !", name: "Nawelle C.", date: "avril 2026" },
    { text: "Service impeccable ! Intervention ultra rapide et travail très soigné.", name: "Florian R.", date: "avril 2026" },
    { text: "Nous sommes très satisfaits du travail réalisé par cet artisan.", name: "Anna M.", date: "juillet 2026" },
  ],
};

type PlaceReview = {
  rating?: number;
  publishTime?: string;
  text?: { text?: string };
  originalText?: { text?: string };
  authorAttribution?: { displayName?: string };
};
type Place = { id?: string; displayName?: { text?: string }; rating?: number; userRatingCount?: number; reviews?: PlaceReview[] };

const FIELDS = ["id", "displayName", "rating", "userRatingCount", "reviews"];

// « Florian Robert » → « Florian R. »
function nomCourt(nom = ""): string {
  const parts = nom.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "Client Google";
  const prenom = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
  if (parts.length === 1) return prenom;
  return `${prenom} ${parts[parts.length - 1][0].toUpperCase()}.`;
}

function moisAnnee(iso?: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("fr-FR", { month: "long", year: "numeric", timeZone: "Europe/Paris" });
}

function versAvis(place: Place): AvisGoogle | null {
  if (typeof place.rating !== "number" || typeof place.userRatingCount !== "number") return null;
  const avis = (place.reviews ?? [])
    .filter((r) => (r.rating ?? 0) >= 5)
    .map((r) => ({
      text: (r.originalText?.text ?? r.text?.text ?? "").trim(),
      name: nomCourt(r.authorAttribution?.displayName),
      date: moisAnnee(r.publishTime),
      t: r.publishTime ?? "",
    }))
    .filter((r) => r.text.length >= 25 && r.text.length <= 260)
    .sort((a, b) => b.t.localeCompare(a.t))
    .slice(0, 3)
    .map(({ text, name, date }) => ({ text, name, date }));
  return {
    note: place.rating,
    nombre: place.userRatingCount,
    // S'il n'y a pas 3 avis récents exploitables, on garde les avis choisis à la main.
    avis: avis.length === 3 ? avis : AVIS_SECOURS.avis,
    source: "google",
  };
}

async function chercherPlace(key: string): Promise<Place | null> {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const headers = { "X-Goog-Api-Key": key, "Content-Type": "application/json" };

  if (placeId) {
    const res = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=fr`, {
      headers: { ...headers, "X-Goog-FieldMask": FIELDS.join(",") },
      next: { revalidate: REVALIDATE, tags: ["avis-google"] },
    });
    if (!res.ok) throw new Error(`Places API ${res.status}`);
    return (await res.json()) as Place;
  }

  const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: { ...headers, "X-Goog-FieldMask": FIELDS.map((f) => `places.${f}`).join(",") },
    body: JSON.stringify({ textQuery: "Puillet Vitrerie, 42 avenue du Chater, 69340 Francheville", languageCode: "fr", regionCode: "FR" }),
    next: { revalidate: REVALIDATE, tags: ["avis-google"] },
  });
  if (!res.ok) throw new Error(`Places API ${res.status}`);
  const data = (await res.json()) as { places?: Place[] };
  return data.places?.find((p) => /puillet/i.test(p.displayName?.text ?? "")) ?? null;
}

export async function getAvisGoogle(): Promise<AvisGoogle> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!key) return AVIS_SECOURS;
  try {
    const place = await chercherPlace(key);
    return (place && versAvis(place)) ?? AVIS_SECOURS;
  } catch (e) {
    console.error("[avis-google]", e);
    return AVIS_SECOURS;
  }
}

// 4.9 → « 4,9 »
export function formatNote(note: number): string {
  return note.toLocaleString("fr-FR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}
