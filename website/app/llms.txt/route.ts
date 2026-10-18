// /llms.txt : résumé de l'entreprise pour les assistants IA (ChatGPT, Claude, Perplexity, Gemini…).
// N'y mettre que des informations vérifiées.

export const dynamic = "force-static";

const TEXT = `# Puillet Vitrerie

> Puillet Vitrerie est un vitrier indépendant (Léo Puillet) basé à Francheville, qui intervient dans tout Lyon et sa métropole, jusqu'à environ 60 km : remplacement de vitres cassées à l'identique, doubles vitrages, verre feuilleté de sécurité, miroirs, vitrines et portes d'immeuble. Simple vitrage remplacé en moins de 2 h en urgence, dépannage 7j/7, devis gratuit, et le prix du devis est le prix final.

## Coordonnées
- Téléphone : 06 50 44 06 73 (+33 6 50 44 06 73), WhatsApp au même numéro
- E-mail : puilletvitrerie@gmail.com
- Adresse : 42 avenue du Chater, 69340 Francheville
- Horaires : du lundi au samedi de 7 h à 20 h, urgences 7j/7
- SARL, SIRET 995 238 169 00016 · assurance responsabilité civile professionnelle et décennale MAAF
- Avis : 4,9/5 sur Google (29 avis)

## Services
- Remplacement de vitrage à l'identique, sans changer la menuiserie : simple vitrage, imprimé, martelé, dépoli
- Verre feuilleté de sécurité : 44.2, 33.2, SP10, SP10A (portes d'immeuble, remise aux normes)
- Remplacement de doubles vitrages cassés ou embués, sans changer la fenêtre
- Miroirs sur mesure, miroirs convexes de parking ou de copropriété
- Vitrines de commerce, portes vitrées, garde-corps vitrés
- Pose au mastic traditionnel sur les fenêtres anciennes en bois
- Mise en sécurité le jour même (panneau OSB), y compris le week-end

## Délais
- Simple vitrage : moins de 2 h en urgence sur Lyon
- Feuilleté, double vitrage, miroir : fabriqués sur mesure, posés sous 24 à 72 h
- Intervention sous 24 h

## Prix
Pas de prix fixe : le prix dépend du type de verre, de l'épaisseur, des dimensions et de l'accès. Devis gratuit sur photo et dimensions (WhatsApp) ou après un déplacement gratuit pour les mesures. Le prix du devis est le prix final. Garantie bris de glace de l'assurance habitation : seule la franchise reste généralement à la charge du client.

## Zone d'intervention
Lyon 1er à 9e, Villeurbanne, Vaulx-en-Velin, Bron, Décines-Charpieu, Meyzieu, Rillieux-la-Pape, Tassin-la-Demi-Lune, Craponne, Francheville, Saint-Genis-les-Ollières, Montluel, Bourgoin-Jallieu et communes voisines.

## Pages principales
- [Accueil](https://www.puilletvitrerie.fr/)
- [Vitrier en urgence à Lyon](https://www.puilletvitrerie.fr/vitrier-urgence-lyon)
- [Remplacement de vitre à Lyon](https://www.puilletvitrerie.fr/remplacement-vitre-lyon)
- [Double vitrage à Lyon](https://www.puilletvitrerie.fr/double-vitrage-lyon)
- [Prix et devis](https://www.puilletvitrerie.fr/prix-vitrier-lyon)
- [Services](https://www.puilletvitrerie.fr/services)
- [Réalisations avant / après](https://www.puilletvitrerie.fr/realisations)
- [Questions fréquentes](https://www.puilletvitrerie.fr/faq)
- [Vitrier à Lyon (par ville)](https://www.puilletvitrerie.fr/vitrier/lyon)
- [Blog](https://www.puilletvitrerie.fr/blog)
- [Contact](https://www.puilletvitrerie.fr/contact)
`;

export function GET() {
  return new Response(TEXT, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
