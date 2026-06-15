import Link from "next/link";

const RED = "#c8221e";
const INK = "#1f1d1b";

export default function Footer() {
  const columns = [
    {
      title: "Services",
      items: [
        { label: "Dépannage 7j/7", href: "/services" },
        { label: "Double vitrage", href: "/services" },
        { label: "Vitrage feuilleté", href: "/services" },
        { label: "Miroiterie", href: "/services" },
        { label: "Portes vitrées", href: "/services" },
      ],
    },
    {
      title: "Société",
      items: [
        { label: "À propos", href: "/a-propos" },
        { label: "Réalisations", href: "/a-propos" },
        { label: "Témoignages", href: "/#temoignages" },
        { label: "Zones d'intervention", href: "/#zones" },
        { label: "FAQ", href: "/#faq" },
      ],
    },
    {
      title: "Contact",
      items: [
        { label: "06 50 44 06 73", href: "tel:0650440673" },
        { label: "puilletvitrerie@gmail.com", href: "mailto:puilletvitrerie@gmail.com" },
        { label: "Lyon, France", href: "#" },
        { label: "Devis gratuit", href: "/contact" },
      ],
    },
  ];

  return (
    <footer
      style={{
        padding: "56px 56px 40px",
        background: INK,
        color: "#a8a39a",
        fontFamily: "var(--font-manrope), system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: 40,
          marginBottom: 48,
        }}
        className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]"
      >
        {/* Brand */}
        <div>
          <div
            style={{
              fontWeight: 800,
              fontSize: 22,
              color: "#fff",
              marginBottom: 12,
            }}
          >
            <span style={{ color: RED }}>Puillet</span> Vitrerie
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.6, maxWidth: 320 }}>
            Artisan vitrier indépendant à Lyon. Dépannage rapide, double
            vitrage, miroirs et portes vitrées sur-mesure.
          </div>
        </div>

        {/* Link columns */}
        {columns.map((col) => (
          <div key={col.title}>
            <div
              style={{
                color: "#fff",
                fontWeight: 600,
                fontSize: 14,
                marginBottom: 14,
              }}
            >
              {col.title}
            </div>
            <div style={{ display: "grid", gap: 10, fontSize: 14 }}>
              {col.items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{ color: "#a8a39a" }}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,.08)",
          display: "flex",
          justifyContent: "space-between",
          fontSize: 12,
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <div>© 2026 Puillet Vitrerie · SIRET 821 384 922 00018</div>
        <div>Mentions légales · Politique de confidentialité</div>
      </div>
    </footer>
  );
}
