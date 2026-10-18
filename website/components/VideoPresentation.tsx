"use client";

import { useState } from "react";

// Lecteur de la vidéo de présentation. Pour brancher la vidéo une fois tournée :
// - fichier MP4 : <VideoPresentation src="/videos/presentation.mp4" poster="..." />
// - YouTube ou Vimeo : <VideoPresentation embedUrl="https://www.youtube-nocookie.com/embed/ID" poster="..." />
// Rien n'est chargé avant le clic, et la vidéo ne démarre jamais seule avec le son.
type Props = { src?: string; embedUrl?: string; poster: string; title: string };

export default function VideoPresentation({ src, embedUrl, poster, title }: Props) {
  const [playing, setPlaying] = useState(false);
  const hasVideo = Boolean(src || embedUrl);

  return (
    <div style={{ position: "relative", aspectRatio: "16 / 9", borderRadius: 20, overflow: "hidden", background: "#1f1d1b" }}>
      {playing && src && (
        <video src={src} poster={poster} controls autoPlay preload="none" playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      )}
      {playing && embedUrl && (
        <iframe
          src={`${embedUrl}${embedUrl.includes("?") ? "&" : "?"}autoplay=1`}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{ width: "100%", height: "100%", border: 0 }}
        />
      )}
      {!playing && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={poster} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.55 }} />
          <button
            type="button"
            onClick={() => hasVideo && setPlaying(true)}
            aria-label={hasVideo ? `Lire la vidéo : ${title}` : "Vidéo bientôt disponible"}
            disabled={!hasVideo}
            style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14, background: "transparent", border: "none", cursor: hasVideo ? "pointer" : "default", color: "#fff", fontFamily: "inherit" }}
          >
            <span style={{ width: 84, height: 84, borderRadius: 999, background: "#3B8FD4", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 30px rgba(0,0,0,.35)" }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff" aria-hidden><path d="M8 5v14l11-7z" /></svg>
            </span>
            {!hasVideo && <span style={{ fontWeight: 700, fontSize: 14, background: "rgba(15,15,15,.7)", padding: "6px 12px", borderRadius: 999 }}>Vidéo bientôt disponible</span>}
          </button>
        </>
      )}
    </div>
  );
}
