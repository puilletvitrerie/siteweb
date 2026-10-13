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

export default function ZoneMap() {
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
        L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 18,
        }).addTo(m);
        const zone = L.circle(LYON, {
          radius: RAYON_KM * 1000,
          color: ACCENT,
          weight: 2,
          fillColor: ACCENT,
          fillOpacity: 0.12,
          dashArray: "6 6",
        });
        zone.addTo(m);
        L.circleMarker(LYON, { radius: 8, color: "#fff", weight: 3, fillColor: ACCENT, fillOpacity: 1 })
          .addTo(m)
          .bindTooltip("Lyon", { permanent: true, direction: "right", offset: [10, 0] });
        m.fitBounds(zone.getBounds(), { padding: [12, 12], animate: false });
      })
      .catch(() => {
        if (ref.current) ref.current.textContent = "Carte indisponible : j'interviens dans un rayon d'environ 60 km autour de Lyon.";
      });
    return () => {
      cancelled = true;
      map?.remove();
    };
  }, []);

  return <div ref={ref} style={{ position: "absolute", inset: 0, zIndex: 0 }} aria-label="Carte de la zone d'intervention : rayon de 60 km autour de Lyon" role="img" />;
}
