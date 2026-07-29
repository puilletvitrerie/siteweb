import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Catalogue des Vitrages et Miroirs - Puillet Vitrerie",
  description: "Découvrez notre catalogue complet de vitrages et de miroirs : verre simple, armé, feuilleté, imprimé, martelé, Delta, Listral, cathédrale, trempé, anti-effraction, et toute notre gamme de miroirs.",
};

export default function CataloguePage() {
  const vitrages = [
    {
      title: "Vitrage clair",
      tag: "Standard",
      description: "Disponible en 3 mm et 4 mm. Le verre le plus courant, parfaitement transparent, offrant une transmission lumineuse optimale. On le retrouve souvent dans les montées d'escalier, posé au mastic traditionnel.",
      specifications: ["Disponible en 3 mm et 4 mm", "Transparent, haute luminosité", "Pose au mastic traditionnel"],
      applications: "Fenêtres, montées d'escalier, usage courant",
    },
    {
      title: "Verre armé à grandes mailles",
      tag: "Sécurité passive",
      description: "Grillage métallique noyé dans la masse. En cas de bris, les éclats restent retenus par le grillage. Existe aussi en petites mailles.",
      specifications: ["Grillage métallique intégré", "Anti-chute d'éclats", "Petites et grosses mailles"],
      applications: "Zones exposées, verrières, châssis industriels",
    },
    {
      title: "Verre feuilleté",
      tag: "Sécurité renforcée",
      description: "Deux ou plusieurs feuilles de verre collées entre elles par un film PVB. En cas de choc, il se fissure sans se fragmenter. Recommandé pour les vitrines, garde-corps et portes d'allée en copropriété.",
      specifications: ["33.2, 44.2, 44.6, SP10, SP10A", "Anti-effraction", "Norme EN 12543"],
      applications: "Vitrines, garde-corps, portes d'allée de copropriété",
    },
    {
      title: "Verre imprimé motif 77",
      tag: "Décoratif",
      description: "Verre imprimé à grains fins et réguliers. Translucide, il laisse passer la lumière tout en préservant l'intimité.",
      specifications: ["Texture fine régulière", "Translucide", "Intimité préservée"],
      applications: "Portes vitrées, cloisons, salle de bain",
    },
    {
      title: "Verre imprimé motif 200",
      tag: "Décoratif",
      description: "Relief plus marqué que le 77, aussi appelé « cathédrale » ou motif cannelé selon les variantes. Diffuse davantage la lumière pour un effet légèrement plus opaque.",
      specifications: ["Relief prononcé", "Diffusion lumineuse"],
      applications: "Vitrages de séparation, portes d'entrée, cloisons",
    },
    {
      title: "Verre martelé",
      tag: "Esthétique",
      description: "Surface irrégulière façon « peau d'orange » imitant l'aspect d'un métal martelé. Brise les reflets pour un effet visuel unique.",
      specifications: ["Texture irrégulière", "Aspect artisanal"],
      applications: "Décoration intérieure, menuiserie ancienne, restauration",
    },
    {
      title: "Verre Delta",
      tag: "Imprimé",
      description: "Motif organique évoquant les nervures d'une feuille ou des vaguelettes d'eau. Texture douce et translucide, très appréciée en rénovation ancienne et dans les logements lyonnais haussmanniens.",
      specifications: ["Motif organique nervuré", "Translucide"],
      applications: "Rénovation ancienne, portes intérieures, style haussmannien",
    },
    {
      title: "Verre Listral",
      tag: "Imprimé",
      description: "Cannelures verticales fines et régulières apportant de la verticalité et de l'élégance à une menuiserie. Discret mais distinctif.",
      specifications: ["Stries verticales", "Discret et distinctif"],
      applications: "Portes d'entrée, couloirs, séparations de bureaux",
    },
    {
      title: "Verre cathédrale",
      tag: "Vitrail & Déco",
      description: "Verre teinté dans la masse, translucide, qui laisse passer la lumière en la colorant. Disponible en de nombreuses teintes (ambre, vert, bleu, rouge…).",
      specifications: ["Coloré, teinté dans la masse", "Effet vitrail"],
      applications: "Vitraux, décoration intérieure, meubles de style",
    },
    {
      title: "Verre dépoli / sablé",
      tag: "Intimité",
      description: "Surface mate obtenue par sablage ou traitement à l'acide fluorhydrique. Diffuse la lumière sans permettre de voir au travers.",
      specifications: ["Opacité totale", "Sablage ou acide"],
      applications: "Salle de bain, vitrine de douche, cloison de bureau",
    },
    {
      title: "Verre granité",
      tag: "Intimité",
      description: "Surface finement granulée ressemblant à du givre. Offre une bonne diffusion lumineuse tout en masquant les silhouettes. Plus discret que le dépoli classique.",
      specifications: ["Texture givrée fine", "Diffusion douce"],
      applications: "Immeubles anciens du centre lyonnais",
    },
    {
      title: "Verre trempé",
      tag: "Sécurité",
      description: "Traitement thermique le rendant 4 à 5 fois plus résistant qu'un verre ordinaire. En cas de bris, il se fragmente en petits morceaux non coupants.",
      specifications: ["4 à 5× plus résistant", "Norme EN 12150"],
      applications: "Douches, garde-corps, portes vitrées, vitrines commerciales",
    },
    {
      title: "Verre anti-effraction",
      tag: "Sécurité renforcée",
      description: "Feuilleté multicouches avec intercalaires résistants, retardant considérablement l'intrusion. Classé de P2A (résistance de base) à P8B (haute sécurité).",
      specifications: ["Classé P2A à P8B", "Anti-intrusion"],
      applications: "Vitrines, agences, commerces exposés, logements en RDC",
    },
  ];

  const miroirs = [
    {
      title: "Miroir argenté",
      tag: "Classique",
      description: "Le miroir classique par excellence. Reflet net, lumineux et fidèle aux couleurs. Disponible sur mesure, pose sur silicone neutre ou système de fixation invisible.",
      applications: "Salle de bain, salon, couloir, salle de sport, coiffeur",
    },
    {
      title: "Miroir bronze",
      tag: "Teinté",
      description: "Reflets chauds, dorés et cuivrés. Apporte élégance et chaleur, s'associe parfaitement aux menuiseries de style haussmannien.",
      applications: "Décoration, entrée, salon",
    },
    {
      title: "Miroir gris",
      tag: "Teinté",
      description: "Reflet légèrement tamisé et discret, sobre et contemporain. Souvent utilisé en crédence de cuisine ou porte de placard coulissant.",
      applications: "Crédence de cuisine, placards coulissants",
    },
    {
      title: "Miroir vieilli / antique",
      tag: "Décoratif",
      description: "Reproduit l'aspect des anciens miroirs à effet mercure, nuances dorées ou argentées patinées. Caractère unique et charme ancien.",
      applications: "Halls d'entrée, hôtels de standing, appartements lyonnais anciens",
    },
    {
      title: "Miroir biseauté",
      tag: "Décoratif",
      description: "Bords taillés en biseau sur environ 30 mm, créant un effet de profondeur et de lumière sur le pourtour. Se pose sans cadre.",
      applications: "Salon, chambre, finition haut de gamme",
    },
    {
      title: "Miroir noir",
      tag: "Décoratif",
      description: "Reflet sombre et profond, effet graphique fort pour les intérieurs contemporains à dominante sombre ou industrielle.",
      applications: "Habillage mural, crédence de cuisine, salle de bain",
    },
    {
      title: "Miroir sans tain",
      tag: "Spécial",
      description: "Reflète la lumière du côté le plus éclairé tout en restant transparent du côté le plus sombre.",
      applications: "Salles d'observation, cabines d'essayage, showrooms",
    },
    {
      title: "Miroir avec film de sécurité",
      tag: "Sécurité",
      description: "Miroir argenté standard avec film anti-éclats appliqué au dos. En cas de bris, les éclats restent retenus par le film.",
      applications: "Espaces recevant du public, salles de sport, crèches, écoles",
    },
  ];

  return (
    <div className="flex flex-col bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Catalogue des Vitrages et Miroirs</h1>
            <p className="text-xl text-gray-600 mb-8">
              Une large gamme de vitrages et de miroirs pour tous vos besoins : sécurité, isolation, intimité, décoration
            </p>
            <a href="tel:0650440673">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white rounded-full px-8">
                <Phone className="mr-2 h-5 w-5" />
                Demander conseil
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Catalogue Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Catalogue des vitrages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vitrages.map((vitrage, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-8">
                  <span className="inline-block text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">{vitrage.tag}</span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{vitrage.title}</h3>
                  <p className="text-gray-600 mb-6">{vitrage.description}</p>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Spécifications</h4>
                    <div className="space-y-2">
                      {vitrage.specifications.map((spec, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-gray-900 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-2 text-sm">Applications</h4>
                    <p className="text-sm text-gray-600">{vitrage.applications}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Miroirs Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">Catalogue des miroirs</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Découpe sur mesure aux bonnes cotes, récupérée chez notre fournisseur.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {miroirs.map((miroir, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-6 hover:shadow-lg transition-shadow">
                <span className="inline-block text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">{miroir.tag}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{miroir.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{miroir.description}</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500">{miroir.applications}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Conseils et Expertise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900 text-white p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-3">Choix du vitrage</h3>
                <p className="text-gray-300">
                  Nous vous conseillons sur le choix du vitrage le plus adapté à vos besoins : 
                  sécurité, isolation thermique ou phonique, intimité, esthétique.
                </p>
              </div>
              <div className="bg-gray-900 text-white p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-3">Remplacement à l'identique</h3>
                <p className="text-gray-300">
                  Spécialiste du remplacement à l'identique, nous reproduisons fidèlement 
                  vos vitrages existants pour préserver le cachet de votre bâtiment.
                </p>
              </div>
              <div className="bg-gray-900 text-white p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-3">Stock permanent</h3>
                <p className="text-gray-300">
                  Stock de vitrages courants dans le camion pour une intervention immédiate. 
                  Découpe sur place pour un service rapide et efficace.
                </p>
              </div>
              <div className="bg-gray-900 text-white p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-3">Sur mesure</h3>
                <p className="text-gray-300">
                  Tous nos vitrages peuvent être découpés sur mesure selon vos dimensions exactes. 
                  Précision et qualité garanties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-gray-900 rounded-3xl p-12 lg:p-16 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Besoin d'un conseil ?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour choisir le vitrage adapté à votre projet
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0650440673">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-8 h-14">
                  <Phone className="mr-2 h-5 w-5" />
                  06 50 44 06 73
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8 h-14">
                  Demander un devis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
