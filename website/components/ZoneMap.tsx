"use client";

import { useEffect, useRef } from "react";

// Carte réelle (Leaflet + fond de carte CARTO / OpenStreetMap), chargée depuis un CDN
// pour ne pas ajouter de dépendance au projet.
const LEAFLET = "https://unpkg.com/leaflet@1.9.4/dist/leaflet";
const LYON: [number, number] = [45.7578, 4.832];
const RAYON_KM = 60;
const ACCENT = "#3B8FD4";

type LeafletLike = {
  map: (el: HTMLElement, opts: object) => {
    fitBounds: (b: unknown, o?: object) => void;
    remove: () => void;
  } & Record<string, unknown>;
  tileLayer: (url: string, opts: object) => { addTo: (m: unknown) => unknown };
  circle: (c: [number, number], o: object) => { addTo: (m: unknown) => unknown; getBounds: () => unknown };
  circleMarker: (c: [number, number], o: object) => { addTo: (m: unknown) => { bindTooltip: (t: string, o: object) => unknown } };
  Browser: { mobile: boolean };
};

function loadLeaflet(): Promise<LeafletLike> {
  const w = window as unknown as { L?: LeafletLike; __leafletLoading?: Promise<LeafletLike> };
  if (w.L) return Promise.resolve(w.L);
  if (w.__leafletLoading) return w.__leafletLoading;
  w.__leafletLoading = new Promise((resolve, reject) => {
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = `${LEAFLET}.css`;
    document.head.appendChild(css);
    const js = document.createElement("script");
    js.src = `${LEAFLET}.js`;
    js.async = true;
    js.onload = () => (w.L ? resolve(w.L) : reject(new Error("Leaflet")));
    js.onerror = reject;
    document.head.appendChild(js);
  });
  return w.__leafletLoading;
}

export type MapStyle = "claire" | "sombre" | "satellite" | "villes";

const TILES: Record<MapStyle, { url: string; attribution: string; subdomains?: string }> = {
  claire: {
    url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: "abcd",
  },
  sombre: {
    url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: "abcd",
  },
  satellite: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    attribution: "Images &copy; Esri",
  },
  villes: {
    url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: "abcd",
  },
};

const VILLES: [string, number, number][] = [
  ["Villeurbanne", 45.7719, 4.8902], ["Caluire", 45.7953, 4.8467], ["Vénissieux", 45.6975, 4.8867],
  ["Bron", 45.7386, 4.9131], ["Saint-Priest", 45.6956, 4.9439], ["Meyzieu", 45.7667, 5.0036],
  ["Genas", 45.7317, 5.0019], ["Décines", 45.7686, 4.9586], ["Francheville", 45.7364, 4.7636],
  ["Villefranche", 45.99, 4.718], ["Vienne", 45.525, 4.874], ["Bourgoin-Jallieu", 45.5869, 5.2794],
  ["Pont-de-Chéruy", 45.7536, 5.1739], ["L'Arbresle", 45.836, 4.616], ["Givors", 45.59, 4.769],
];

export default function ZoneMap({ variant = "claire" }: { variant?: MapStyle }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: { remove: () => void } | null = null;
    let cancelled = false;
    loadLeaflet()
      .then((L) => {
        if (cancelled || !ref.current) return;
        const m = L.map(ref.current, {
          scrollWheelZoom: false,
          dragging: !L.Browser.mobile,
          attributionControl: true,
          zoomControl: true,
        });
        map = m;
        (m as unknown as { setView: (c: [number, number], z: number) => void }).setView(LYON, 9);
        const t = TILES[variant];
        L.tileLayer(t.url, { attribution: t.attribution, subdomains: t.subdomains ?? "abc", maxZoom: 18 }).addTo(m);
        const zone = L.circle(LYON, {
          radius: RAYON_KM * 1000,
          color: ACCENT,
          fillColor: ACCENT,
          fillOpacity: variant === "satellite" ? 0.18 : 0.12,
          weight: variant === "sombre" ? 3 : 2,
          dashArray: variant === "villes" ? undefined : "6 6",
        });
        zone.addTo(m);
        L.circleMarker(LYON, { radius: 8, color: "#fff", weight: 3, fillColor: ACCENT, fillOpacity: 1 })
          .addTo(m)
          .bindTooltip("Lyon", { permanent: true, direction: "right", offset: [10, 0] });
        if (variant === "villes") {
          VILLES.forEach(([nom, la, lo]) =>
            L.circleMarker([la, lo], { radius: 4, color: "#1f1d1b", weight: 1, fillColor: "#fff", fillOpacity: 1 })
              .addTo(m)
              .bindTooltip(nom, { permanent: true, direction: "top", offset: [0, -4], className: "zone-ville" }),
          );
        }
        m.fitBounds(zone.getBounds(), { padding: [12, 12], animate: false });
      })
      .catch(() => {
        if (ref.current) ref.current.textContent = "Carte indisponible : j'interviens dans un rayon d'environ 60 km autour de Lyon.";
      });
    return () => {
      cancelled = true;
      map?.remove();
    };
  }, [variant]);

  return <div ref={ref} style={{ position: "absolute", inset: 0, zIndex: 0 }} aria-label="Carte de la zone d'intervention : rayon de 60 km autour de Lyon" role="img" />;
}
