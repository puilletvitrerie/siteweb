"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const RED = "#c8221e";
const INK = "#1f1d1b";
const INK_SOFT = "#5a5550";
const LINE = "#e3ddd1";
const BG = "#f6f3ec";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/a-propos", label: "Réalisations" },
    { href: "/a-propos", label: "À propos" },
    { href: "/#zones", label: "Zones" },
    { href: "/#faq", label: "FAQ" },
  ];

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50 }}>
      {/* Urgency strip */}
      <div
        style={{
          background: INK,
          color: "#fff",
          fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
          fontSize: 12,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 999,
              background: "#34c759",
              boxShadow: "0 0 0 4px rgba(52,199,89,.2)",
              flexShrink: 0,
            }}
          />
          {/* Short version on mobile, full on sm+ */}
          <span className="sm:hidden">Disponible · &lt; 2h Lyon</span>
          <span className="hidden sm:inline">Dépannage 7j/7 · Intervention &lt; 2h sur Lyon</span>
        </span>
        <span
          style={{ color: "#bdb6a8" }}
          className="hidden sm:block"
        >
          Agréé toutes assurances · Devis gratuit
        </span>
      </div>

      {/* Nav */}
      <div
        style={{
          background: BG,
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: `1px solid ${LINE}`,
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
          <div
            style={{
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontWeight: 800,
              fontSize: 22,
              letterSpacing: "-0.01em",
              color: INK,
            }}
          >
            <span style={{ color: RED }}>Puillet</span> Vitrerie
          </div>
          <div
            style={{
              fontFamily: "var(--font-instrument-serif), Georgia, serif",
              fontStyle: "italic",
              color: INK_SOFT,
              fontSize: 16,
            }}
            className="hidden lg:block"
          >
            — artisan vitrier · Lyon
          </div>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden lg:flex"
          style={{ gap: 28, fontSize: 14, color: INK, alignItems: "center" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                color: INK,
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
              }}
              className="hover:text-[#c8221e] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:0650440673"
            style={{
              background: RED,
              color: "#fff",
              padding: "10px 18px",
              borderRadius: 999,
              fontWeight: 700,
              fontSize: 14,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
            </svg>
            06 50 44 06 73
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 8,
          }}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X size={24} color={INK} />
          ) : (
            <Menu size={24} color={INK} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          style={{
            background: BG,
            borderBottom: `1px solid ${LINE}`,
            padding: "16px 24px",
          }}
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{ color: INK, fontSize: 16, fontWeight: 500 }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:0650440673"
              style={{
                background: RED,
                color: "#fff",
                padding: "14px 20px",
                borderRadius: 999,
                fontWeight: 700,
                fontSize: 15,
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginTop: 8,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
              </svg>
              06 50 44 06 73
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
