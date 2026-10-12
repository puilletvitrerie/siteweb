"use client";

import { useState } from "react";

const EMAIL = "puilletvitrerie@gmail.com";
const PHONE = "0650440673";

const TYPES = [
  "Vitre cassée, dépannage urgent",
  "Remplacement de vitrage",
  "Double vitrage",
  "Miroir sur mesure",
  "Porte d'entrée vitrée",
  "Vitrine de magasin",
  "Autre",
];

const C = {
  bg: "var(--color-bg)",
  line: "var(--color-line)",
  ink: "var(--color-ink)",
  inkSoft: "var(--color-ink-soft)",
  accent: "var(--color-red)",
};
const MONO = "var(--font-jetbrains-mono), ui-monospace, monospace";

type Data = {
  prenom: string;
  nom: string;
  entreprise: string;
  telephone: string;
  email: string;
  adresse: string;
  codePostal: string;
  type: string;
  message: string;
};

const EMPTY: Data = {
  prenom: "", nom: "", entreprise: "", telephone: "", email: "",
  adresse: "", codePostal: "", type: "", message: "",
};

function buildMessage(d: Data) {
  const lines = [
    "DEMANDE DE DEVIS · puilletvitrerie.fr",
    "",
    "COORDONNÉES",
    `Nom : ${d.prenom} ${d.nom}`,
    d.entreprise ? `Entreprise / syndic : ${d.entreprise}` : null,
    `Téléphone : ${d.telephone}`,
    d.email ? `E-mail : ${d.email}` : null,
    "",
    "CHANTIER",
    d.adresse ? `Adresse : ${d.adresse}` : null,
    `Code postal : ${d.codePostal}`,
    `Type de demande : ${d.type}`,
    "",
    "DESCRIPTION",
    d.message,
  ];
  return lines.filter((l) => l !== null).join("\n");
}

function subject(d: Data) {
  const who = d.entreprise ? `${d.prenom} ${d.nom} (${d.entreprise})` : `${d.prenom} ${d.nom}`;
  return `Demande de devis : ${d.type} · ${who}`;
}

function Field({ label, optional, children }: { label: string; optional?: boolean; children: React.ReactNode }) {
  return (
    <label style={{ display: "block" }}>
      <div style={{ fontFamily: MONO, fontSize: 10, color: C.inkSoft, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 7 }}>
        {label}
        {optional && <span style={{ textTransform: "none", letterSpacing: 0, marginLeft: 6, opacity: 0.8 }}>(facultatif)</span>}
      </div>
      {children}
    </label>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "11px 13px", border: `1px solid ${C.line}`, borderRadius: 10,
  background: C.bg, fontSize: 15, color: C.ink, outline: "none", fontFamily: "inherit",
};

function Step({ n, title }: { n: number; title: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: n > 1 ? 8 : 0 }}>
      <span style={{ width: 24, height: 24, borderRadius: 999, background: C.ink, color: "#fff", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{n}</span>
      <span style={{ fontWeight: 700, fontSize: 15, color: C.ink }}>{title}</span>
    </div>
  );
}

export default function QuoteForm() {
  const [d, setD] = useState<Data>(EMPTY);
  const [sent, setSent] = useState(false);

  const set = (k: keyof Data) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setD({ ...d, [k]: e.target.value });

  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject(d))}&body=${encodeURIComponent(buildMessage(d))}`;
  const sms = `sms:${PHONE}?&body=${encodeURIComponent(buildMessage(d))}`;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = mailto;
    setSent(true);
  };

  const card: React.CSSProperties = { background: "#fff", borderRadius: 18, padding: 22, border: `1px solid ${C.line}` };

  if (sent) {
    return (
      <div style={{ ...card, display: "grid", gap: 14 }}>
        <div style={{ fontWeight: 800, fontSize: 20, color: C.ink }}>Votre demande est prête</div>
        <p style={{ fontSize: 15, lineHeight: 1.55, color: C.inkSoft, margin: 0 }}>
          Votre messagerie s&rsquo;est ouverte avec votre demande déjà rédigée. Il ne reste plus qu&rsquo;à appuyer sur
          <strong style={{ color: C.ink }}> Envoyer</strong>. Vous pouvez y joindre vos photos.
        </p>
        <p style={{ fontSize: 14, lineHeight: 1.55, color: C.inkSoft, margin: 0 }}>
          La messagerie ne s&rsquo;est pas ouverte ? Envoyez la demande par SMS, ou écrivez directement à{" "}
          <a href={`mailto:${EMAIL}`} style={{ color: C.ink, textDecoration: "underline" }}>{EMAIL}</a>.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href={sms} style={{ background: C.accent, color: "#fff", padding: "13px 22px", borderRadius: 999, fontWeight: 700, fontSize: 14, textAlign: "center" }}>
            Envoyer par SMS
          </a>
          <a href={mailto} style={{ border: `1.5px solid ${C.ink}`, color: C.ink, padding: "12px 22px", borderRadius: 999, fontWeight: 700, fontSize: 14, textAlign: "center" }}>
            Rouvrir l&rsquo;e-mail
          </a>
          <button type="button" onClick={() => setSent(false)} style={{ background: "none", border: "none", color: C.inkSoft, fontSize: 14, textDecoration: "underline", cursor: "pointer" }}>
            Modifier ma demande
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} style={{ ...card, display: "grid", gap: 12 }}>
      <Step n={1} title="Vos coordonnées" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Field label="Prénom"><input required autoComplete="given-name" value={d.prenom} onChange={set("prenom")} placeholder="Marie" style={inputStyle} /></Field>
        <Field label="Nom"><input required autoComplete="family-name" value={d.nom} onChange={set("nom")} placeholder="Dupont" style={inputStyle} /></Field>
      </div>
      <Field label="Entreprise, syndic ou agence" optional>
        <input autoComplete="organization" value={d.entreprise} onChange={set("entreprise")} placeholder="Ex. : Régie Dupont Immobilier" style={inputStyle} />
      </Field>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Field label="Téléphone"><input required type="tel" autoComplete="tel" value={d.telephone} onChange={set("telephone")} placeholder="06 12 34 56 78" style={inputStyle} /></Field>
        <Field label="E-mail" optional><input type="email" autoComplete="email" value={d.email} onChange={set("email")} placeholder="marie@exemple.fr" style={inputStyle} /></Field>
      </div>

      <Step n={2} title="Le chantier" />
      <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-3">
        <Field label="Adresse ou ville" optional><input autoComplete="street-address" value={d.adresse} onChange={set("adresse")} placeholder="12 rue Garibaldi, Lyon 3e" style={inputStyle} /></Field>
        <Field label="Code postal"><input required inputMode="numeric" autoComplete="postal-code" value={d.codePostal} onChange={set("codePostal")} placeholder="69003" style={inputStyle} /></Field>
      </div>
      <Field label="Type de demande">
        <select required value={d.type} onChange={set("type")} style={{ ...inputStyle, color: d.type ? C.ink : C.inkSoft }}>
          <option value="" disabled>Choisissez…</option>
          {TYPES.map((t) => <option key={t}>{t}</option>)}
        </select>
      </Field>

      <Step n={3} title="Votre besoin" />
      <Field label="Description">
        <textarea required rows={4} value={d.message} onChange={set("message")} placeholder="Ex. : vitre cassée sur la porte du hall, environ 80 × 120 cm, rez-de-chaussée." style={{ ...inputStyle, resize: "vertical" }} />
      </Field>
      <div style={{ fontSize: 13, color: C.inkSoft }}>📷 Vous pourrez joindre vos photos à l&rsquo;étape suivante.</div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-1">
        <div style={{ fontSize: 12, color: C.inkSoft }}>Devis gratuit et sans engagement</div>
        <button
          type="submit"
          className="w-full sm:w-auto"
          style={{ background: C.accent, color: "#fff", border: "none", padding: "13px 24px", borderRadius: 999, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: "inherit" }}
        >
          Envoyer la demande
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
    </form>
  );
}
