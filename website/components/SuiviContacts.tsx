"use client";

// Compte les clics sur le téléphone et sur WhatsApp, sans cookie ni bandeau.
// Chaque clic envoie au serveur : le type (telephone / whatsapp), la page et la provenance de la visite
// (google, instagram, chatgpt…). Rien qui identifie le visiteur.
// La provenance est gardée le temps de l'onglet (sessionStorage), puis effacée à sa fermeture.

import { useEffect } from "react";

const CLE = "pv_provenance";

function provenance(): string {
  try {
    const deja = sessionStorage.getItem(CLE);
    if (deja) return deja;
    const p = new URLSearchParams(location.search);
    let src = p.get("utm_source") || "";
    if (!src && document.referrer) {
      const host = new URL(document.referrer).hostname.replace(/^www\./, "");
      if (!host.endsWith("puilletvitrerie.fr")) src = host;
    }
    src = (src || "direct").slice(0, 60);
    sessionStorage.setItem(CLE, src);
    return src;
  } catch {
    return "inconnue";
  }
}

export default function SuiviContacts() {
  useEffect(() => {
    provenance();
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      const href = a?.getAttribute("href") || "";
      const type = href.startsWith("tel:") ? "telephone" : /wa\.me|whatsapp\.com/.test(href) ? "whatsapp" : "";
      if (!type) return;
      const body = JSON.stringify({ type, page: location.pathname, provenance: provenance() });
      try {
        if (!navigator.sendBeacon?.("/api/clic", new Blob([body], { type: "application/json" }))) {
          fetch("/api/clic", { method: "POST", body, keepalive: true, headers: { "Content-Type": "application/json" } });
        }
      } catch {}
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}
