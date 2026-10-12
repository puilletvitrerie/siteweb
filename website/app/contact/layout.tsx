import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact et devis gratuit · Vitrier à Lyon",
  description:
    "Demandez un devis gratuit pour le remplacement d'un vitrage, d'un double vitrage ou d'un miroir à Lyon et dans l'Est lyonnais. Appel au 06 50 44 06 73, dépannage 7j/7.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
