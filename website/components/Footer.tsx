import Link from "next/link";

const RED = "#c8221e";

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
  ];

  return (
    <footer
      style={{
        background: "#1f1d1b",
        color: "#a8a39a",
        fontFamily: "var(--font-manrope), system-ui, sans-serif",
      }}
    >
      {/* Main content */}
      <div className="px-5 md:px-14" style={{ paddingTop: 48, paddingBottom: 40 }}>

        {/* Brand block — full width on mobile */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ fontWeight: 800, fontSize: 24, color: "#fff", marginBottom: 10 }}>
            <span style={{ color: RED }}>Puillet</span> Vitrerie
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.65, maxWidth: 340, margin: 0, color: "#a8a39a" }}>
            Artisan vitrier indépendant à Lyon. Dépannage rapide, double vitrage, miroirs et portes vitrées sur-mesure.
          </p>
          {/* Phone CTA visible on mobile */}
          <a
            href="tel:0650440673"
            className="md:hidden"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              marginTop: 20, background: RED, color: "#fff",
              padding: "12px 20px", borderRadius: 999,
              fontWeight: 700, fontSize: 14,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
            </svg>
            06 50 44 06 73
          </a>
        </div>

        {/* Link columns — 2 cols on mobile, 3 cols (with Contact) on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8" style={{ marginBottom: 40 }}>
          {columns.map((col) => (
            <div key={col.title}>
              <div style={{ color: "#fff", fontWeight: 600, fontSize: 13, marginBottom: 14, letterSpacing: "0.02em" }}>
                {col.title}
              </div>
              <div style={{ display: "grid", gap: 11, fontSize: 14 }}>
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

          {/* Contact column — hidden on mobile (phone CTA replaces it), visible on desktop */}
          <div className="hidden md:block">
            <div style={{ color: "#fff", fontWeight: 600, fontSize: 13, marginBottom: 14, letterSpacing: "0.02em" }}>
              Contact
            </div>
            <div style={{ display: "grid", gap: 11, fontSize: 14 }}>
              {[
                { label: "06 50 44 06 73", href: "tel:0650440673" },
                { label: "puilletvitrerie@gmail.com", href: "mailto:puilletvitrerie@gmail.com" },
                { label: "Lyon & métropole", href: "/#zones" },
                { label: "Devis gratuit", href: "/contact" },
              ].map((item) => (
                <Link key={item.label} href={item.href} style={{ color: "#a8a39a" }} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: 20,
            borderTop: "1px solid rgba(255,255,255,.08)",
            fontSize: 12,
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
          className="md:flex-row md:justify-between"
        >
          <div>© 2026 Puillet Vitrerie · SIRET 821 384 922 00018</div>
          <div>Mentions légales · Politique de confidentialité</div>
        </div>
      </div>
    </footer>
  );
}
