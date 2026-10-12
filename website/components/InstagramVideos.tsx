const REELS = [
  { id: "DaZ5B1fKJD-", label: "Porte vitrée cassée remplacée" },
  { id: "DbbbSo2IQ-7", label: "Pose d'un double vitrage à la ventouse" },
  { id: "DcbOYhoo9LT", label: "Découpe du verre sur place" },
  { id: "DdjinFqKpuG", label: "Dépose d'une porte vitrée brisée" },
  { id: "DcRFiu0Im4O", label: "Remplacement d'une porte vitrée de hall" },
  { id: "DaiaAhqoKME", label: "Remise en état d'un châssis vitré" },
];

export default function InstagramVideos() {
  return (
    <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-2 -mx-5 px-5 md:mx-0 md:px-0">
      {REELS.map((r) => (
        <div key={r.id} className="snap-start shrink-0 w-[78%] sm:w-[45%] md:w-auto" style={{ borderRadius: 16, overflow: "hidden", background: "#fff", border: "1px solid var(--color-line)" }}>
          <iframe
            src={`https://www.instagram.com/reel/${r.id}/embed`}
            title={`Vidéo Instagram : ${r.label}`}
            loading="lazy"
            allowFullScreen
            scrolling="no"
            style={{ width: "100%", height: 560, border: 0, display: "block" }}
          />
        </div>
      ))}
    </div>
  );
}
