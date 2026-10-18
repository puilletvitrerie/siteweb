import type { MetadataRoute } from "next";

// Tout le site est ouvert aux moteurs de recherche et aux assistants IA (pour être cité par ChatGPT, Claude, Perplexity…).
// Seules les pages sans intérêt pour la recherche sont exclues.
const AI_BOTS = [
  "GPTBot", // OpenAI : entraînement des modèles
  "OAI-SearchBot", // OpenAI : recherche ChatGPT
  "ChatGPT-User", // OpenAI : page ouverte à la demande d'un utilisateur
  "ClaudeBot", // Anthropic : entraînement
  "Claude-SearchBot", // Anthropic : recherche Claude
  "Claude-User", // Anthropic : page ouverte à la demande d'un utilisateur
  "PerplexityBot", // Perplexity : index de recherche
  "Perplexity-User", // Perplexity : page ouverte à la demande d'un utilisateur
  "Google-Extended", // Google : utilisation par Gemini
  "Applebot", // Apple : Siri, Spotlight
  "Applebot-Extended", // Apple : Apple Intelligence
  "Bingbot", // Bing : alimente aussi ChatGPT et Copilot
];

const DISALLOW = ["/api/", "/devis", "/merci", "/liens", "/avis", "/choix-carte"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: DISALLOW },
      { userAgent: AI_BOTS, allow: "/", disallow: DISALLOW },
    ],
    sitemap: "https://www.puilletvitrerie.fr/sitemap.xml",
    host: "https://www.puilletvitrerie.fr",
  };
}
