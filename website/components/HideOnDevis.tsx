"use client";

import { usePathname } from "next/navigation";

// La page /devis (lien en bio Instagram / TikTok) s'affiche sans menu, pied de page ni barre d'appel.
export default function HideOnDevis({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/devis")) return null;
  return <>{children}</>;
}
