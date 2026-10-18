"use client";

import { useEffect, useRef, useState } from "react";

const C = {
  card: "#FFFFFF",
  line: "#E3DDD1",
  ink: "#1F1D1B",
  inkSoft: "#5A5550",
  blue: "#3B8FD4",
  blueDark: "#2B6FA8",
  red: "#B3261E",
} as const;

const WHATSAPP = "https://wa.me/33650440673";
const MAX_PHOTOS = 3;
const MAX_RAW_BYTES = 25 * 1024 * 1024; // photo d'origine (avant compression)
const MAX_SENT_BYTES = 1.3 * 1024 * 1024; // par photo, après compression

export const VILLES_SUGGEREES = [
  "Lyon 1er", "Lyon 2e", "Lyon 3e", "Lyon 4e", "Lyon 5e", "Lyon 6e", "Lyon 7e", "Lyon 8e", "Lyon 9e",
  "Villeurbanne", "Vaulx-en-Velin", "Bron", "Décines-Charpieu", "Meyzieu", "Rillieux-la-Pape",
  "Tassin-la-Demi-Lune", "Craponne", "Francheville", "Saint-Genis-les-Ollières", "Montluel", "Bourgoin-Jallieu", "Autre",
];
const TYPES = ["Vitre / fenêtre", "Double vitrage", "Vitrine", "Miroir", "Porte vitrée", "Autre"];
const URGENCES = ["Aujourd'hui", "Cette semaine", "Pas pressé"];

type Photo = { id: string; blob: Blob; url: string };

// Réduit la photo à 1600 px max et la ré-encode en JPEG 0.75 pour que l'envoi passe en 4G.
async function compress(file: File): Promise<Blob> {
  const bitmap = await createImageBitmap(file).catch(async () => {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    await img.decode();
    return img;
  });
  const w0 = "naturalWidth" in bitmap ? bitmap.naturalWidth : bitmap.width;
  const h0 = "naturalHeight" in bitmap ? bitmap.naturalHeight : bitmap.height;
  const scale = Math.min(1, 1600 / Math.max(w0, h0));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(w0 * scale);
  canvas.height = Math.round(h0 * scale);
  canvas.getContext("2d")!.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  return new Promise((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("compression"))), "image/jpeg", 0.75),
  );
}

const telOk = (t: string) => /^(?:(?:\+|00)33[\s.-]?|0)[1-9](?:[\s.-]?\d{2}){4}$/.test(t.trim());

function Chip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      style={{
        minHeight: 44,
        padding: "0 16px",
        borderRadius: 999,
        border: `1.5px solid ${active ? C.blue : C.line}`,
        background: active ? C.blue : C.card,
        color: active ? "#fff" : C.ink,
        fontWeight: 700,
        fontSize: 14,
        fontFamily: "inherit",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
}

const labelStyle: React.CSSProperties = { display: "block", fontWeight: 700, fontSize: 15, marginBottom: 8, color: C.ink };
const inputStyle: React.CSSProperties = {
  width: "100%",
  minHeight: 52,
  padding: "12px 16px",
  borderRadius: 14,
  border: `1.5px solid ${C.line}`,
  background: C.card,
  fontSize: 16, // 16 px : évite le zoom automatique sur iPhone
  fontFamily: "inherit",
  color: C.ink,
};

export default function DevisForm() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [photoMsg, setPhotoMsg] = useState("");
  const [prenom, setPrenom] = useState("");
  const [tel, setTel] = useState("");
  const [ville, setVille] = useState("");
  const [types, setTypes] = useState<string[]>([]);
  const [urgence, setUrgence] = useState("");
  const [message, setMessage] = useState("");
  const [okContact, setOkContact] = useState(false);
  const [okMarketing, setOkMarketing] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [serverMsg, setServerMsg] = useState("");
  const startedAt = useRef(Date.now());
  const fileRef = useRef<HTMLInputElement>(null);
  const honeypot = useRef<HTMLInputElement>(null);
  const [source, setSource] = useState({ utm_source: "", utm_medium: "", utm_campaign: "", referrer: "" });

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    setSource({
      utm_source: p.get("utm_source") || "",
      utm_medium: p.get("utm_medium") || "",
      utm_campaign: p.get("utm_campaign") || "",
      referrer: document.referrer || "",
    });
  }, []);

  async function addPhotos(files: FileList | null) {
    if (!files) return;
    setPhotoMsg("");
    const room = MAX_PHOTOS - photos.length;
    const list = Array.from(files).slice(0, room);
    if (files.length > room) setPhotoMsg(`3 photos maximum : ${room > 0 ? `seules les ${room} premières sont ajoutées` : "supprimez-en une pour en ajouter une autre"}.`);
    const added: Photo[] = [];
    for (const f of list) {
      if (!f.type.startsWith("image/") && !/\.(heic|heif)$/i.test(f.name)) {
        setPhotoMsg("Ce fichier n'est pas une photo.");
        continue;
      }
      if (f.size > MAX_RAW_BYTES) {
        setPhotoMsg("Cette photo est trop lourde (plus de 25 Mo). Essayez une autre photo.");
        continue;
      }
      try {
        const blob = await compress(f);
        if (blob.size > MAX_SENT_BYTES) {
          setPhotoMsg("Cette photo est trop lourde, même réduite. Essayez une autre photo.");
          continue;
        }
        added.push({ id: `${Date.now()}-${Math.random()}`, blob, url: URL.createObjectURL(blob) });
      } catch {
        setPhotoMsg("Impossible de lire cette photo. Essayez une capture d'écran ou une autre photo.");
      }
    }
    setPhotos((p) => [...p, ...added]);
    setErrors((e) => ({ ...e, photos: "" }));
    if (fileRef.current) fileRef.current.value = "";
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!prenom.trim()) e.prenom = "Indiquez votre prénom.";
    if (!telOk(tel)) e.tel = "Indiquez un numéro français valide, par exemple 06 12 34 56 78.";
    if (!ville.trim()) e.ville = "Indiquez votre ville.";
    if (!okContact) e.okContact = "Cochez cette case pour que Léo puisse vous rappeler.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function submit(ev: React.FormEvent) {
    ev.preventDefault();
    if (status === "sending") return;
    if (!validate()) return;
    setStatus("sending");
    setServerMsg("");
    const fd = new FormData();
    photos.forEach((p, i) => fd.append("photos", p.blob, `photo-${i + 1}.jpg`));
    fd.append("prenom", prenom);
    fd.append("telephone", tel);
    fd.append("ville", ville);
    fd.append("type", types.join(", "));
    fd.append("urgence", urgence);
    fd.append("message", message);
    fd.append("ok_contact", okContact ? "oui" : "non");
    fd.append("ok_marketing", okMarketing ? "oui" : "non");
    fd.append("site_web", honeypot.current?.value || "");
    fd.append("duree_ms", String(Date.now() - startedAt.current));
    Object.entries(source).forEach(([k, v]) => fd.append(k, v));
    try {
      const r = await fetch("/api/devis", { method: "POST", body: fd });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) {
        setServerMsg(data.error || "L'envoi n'a pas marché.");
        setStatus("error");
        return;
      }
      setStatus("sent");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setServerMsg("Pas de connexion internet ? Vos informations sont gardées : réessayez dans un instant.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 20, padding: "28px 22px", textAlign: "center" }}>
        <div style={{ fontSize: 44, lineHeight: 1 }} aria-hidden>✓</div>
        <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em", margin: "12px 0 10px" }}>C&rsquo;est envoyé !</h2>
        <p style={{ fontSize: 17, lineHeight: 1.55, color: C.inkSoft, margin: "0 0 22px" }}>
          Léo vous rappelle très vite (Lun–Sam 7h–20h, urgences 7j/7).
        </p>
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: 56, borderRadius: 999, background: "#1F1D1B", color: "#fff", fontWeight: 700, fontSize: 16 }}>
          Une urgence ? Écrivez-lui directement
        </a>
      </div>
    );
  }

  const err = (k: string) => errors[k] && <p role="alert" style={{ color: C.red, fontSize: 14, margin: "6px 0 0" }}>{errors[k]}</p>;

  return (
    <form onSubmit={submit} noValidate style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      {/* Photos */}
      <div>
        <span style={labelStyle}>Photo de la vitre</span>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {photos.map((p) => (
            <div key={p.id} style={{ position: "relative", width: 96, height: 96, borderRadius: 14, overflow: "hidden", border: `1px solid ${C.line}` }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.url} alt="Photo ajoutée" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <button
                type="button"
                onClick={() => setPhotos((list) => list.filter((x) => x.id !== p.id))}
                aria-label="Retirer cette photo"
                style={{ position: "absolute", top: 4, right: 4, width: 32, height: 32, borderRadius: 999, border: "none", background: "rgba(15,15,15,.75)", color: "#fff", fontSize: 18, cursor: "pointer" }}
              >
                ×
              </button>
            </div>
          ))}
          {photos.length < MAX_PHOTOS && (
            <label
              style={{
                position: "relative",
                flex: photos.length ? "0 0 96px" : "1 1 100%",
                height: photos.length ? 96 : 120,
                borderRadius: 14,
                border: `2px dashed ${C.blue}`,
                background: "#EEF5FC",
                color: C.blueDark,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                fontWeight: 700,
                fontSize: photos.length ? 13 : 16,
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
              {photos.length ? "Ajouter" : "Prendre ou choisir une photo"}
              <input ref={fileRef} type="file" accept="image/*" multiple onChange={(e) => addPhotos(e.target.files)} style={{ position: "absolute", width: 1, height: 1, opacity: 0 }} />
            </label>
          )}
        </div>
        <p style={{ fontSize: 13, color: C.inkSoft, margin: "6px 0 0" }}>Jusqu&rsquo;à 3 photos. Facultatif, mais ça permet d&rsquo;avoir un prix plus vite.</p>
        {photoMsg && <p role="alert" style={{ color: C.red, fontSize: 14, margin: "6px 0 0" }}>{photoMsg}</p>}
      </div>

      <div>
        <label htmlFor="prenom" style={labelStyle}>Prénom</label>
        <input id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} autoComplete="given-name" style={inputStyle} />
        {err("prenom")}
      </div>

      <div>
        <label htmlFor="tel" style={labelStyle}>Téléphone</label>
        <input id="tel" type="tel" inputMode="tel" value={tel} onChange={(e) => setTel(e.target.value)} autoComplete="tel" placeholder="06 12 34 56 78" style={inputStyle} />
        {err("tel")}
      </div>

      <div>
        <label htmlFor="ville" style={labelStyle}>Ville</label>
        <input id="ville" list="villes-devis" value={ville} onChange={(e) => setVille(e.target.value)} autoComplete="address-level2" style={inputStyle} />
        <datalist id="villes-devis">
          {VILLES_SUGGEREES.map((v) => <option key={v} value={v} />)}
        </datalist>
        {err("ville")}
      </div>

      <fieldset style={{ border: "none", padding: 0, margin: 0 }}>
        <legend style={labelStyle}>Type <span style={{ fontWeight: 400, color: C.inkSoft }}>(facultatif)</span></legend>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {TYPES.map((t) => (
            <Chip key={t} label={t} active={types.includes(t)} onClick={() => setTypes((l) => (l.includes(t) ? l.filter((x) => x !== t) : [...l, t]))} />
          ))}
        </div>
      </fieldset>

      <fieldset style={{ border: "none", padding: 0, margin: 0 }}>
        <legend style={labelStyle}>Urgence <span style={{ fontWeight: 400, color: C.inkSoft }}>(facultatif)</span></legend>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {URGENCES.map((u) => (
            <Chip key={u} label={u} active={urgence === u} onClick={() => setUrgence((x) => (x === u ? "" : u))} />
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" style={labelStyle}>Message <span style={{ fontWeight: 400, color: C.inkSoft }}>(facultatif)</span></label>
        <textarea
          id="message"
          rows={1}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
          placeholder="Dimensions, étage, accès…"
          style={{ ...inputStyle, resize: "none", overflow: "hidden" }}
        />
      </div>

      {/* Pot de miel : invisible pour les humains, rempli par les robots */}
      <div aria-hidden style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label htmlFor="site_web">Site web</label>
        <input id="site_web" ref={honeypot} tabIndex={-1} autoComplete="off" />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <label style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 15, lineHeight: 1.45, cursor: "pointer" }}>
          <input type="checkbox" checked={okContact} onChange={(e) => setOkContact(e.target.checked)} style={{ width: 24, height: 24, flexShrink: 0, accentColor: C.blue, marginTop: 1 }} />
          <span>J&rsquo;accepte d&rsquo;être recontacté par Puillet Vitrerie au sujet de ma demande.</span>
        </label>
        {err("okContact")}
        <label style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 15, lineHeight: 1.45, cursor: "pointer", color: C.inkSoft }}>
          <input type="checkbox" checked={okMarketing} onChange={(e) => setOkMarketing(e.target.checked)} style={{ width: 24, height: 24, flexShrink: 0, accentColor: C.blue, marginTop: 1 }} />
          <span>J&rsquo;accepte de recevoir de temps en temps des conseils et offres de Puillet Vitrerie (désinscription en un message). <em>Facultatif.</em></span>
        </label>
        <a href="/confidentialite" target="_blank" style={{ fontSize: 14, color: C.inkSoft, textDecoration: "underline", alignSelf: "flex-start", minHeight: 32, display: "inline-flex", alignItems: "center" }}>
          Politique de confidentialité
        </a>
      </div>

      {status === "error" && (
        <div role="alert" style={{ background: "#FCEBEA", border: `1px solid #F2C7C4`, color: C.red, borderRadius: 14, padding: "14px 16px", fontSize: 15, lineHeight: 1.5 }}>
          {serverMsg} Vous pouvez aussi{" "}
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", fontWeight: 700 }}>écrire à Léo sur WhatsApp</a>.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        style={{
          minHeight: 60,
          borderRadius: 999,
          border: "none",
          background: C.blue,
          color: "#fff",
          fontWeight: 800,
          fontSize: 18,
          fontFamily: "inherit",
          cursor: status === "sending" ? "wait" : "pointer",
          opacity: status === "sending" ? 0.7 : 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          boxShadow: "0 8px 24px rgba(59,143,212,.35)",
        }}
      >
        {status === "sending" && <span className="devis-spinner" aria-hidden />}
        {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>
    </form>
  );
}
