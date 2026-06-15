import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Catalogue des Vitrages - Puillet Vitrerie",
  description: "Découvrez notre catalogue complet de vitrages : verre simple, armé, feuilleté, imprimé, martelé, isolant et miroirs.",
};

export default function CataloguePage() {
  const vitrages = [
    {
      title: "Verre Simple",
      description: "Vitrage classique pour fenêtres et portes",
      specifications: [
        "Épaisseur 3mm",
        "Épaisseur 4mm",
        "Transparent",
        "Usage intérieur et extérieur",
        "Économique",
      ],
      applications: "Fenêtres, portes, cadres photo",
    },
    {
      title: "Verre Armé",
      description: "Verre renforcé avec treillis métallique intégré",
      specifications: [
        "Petites mailles",
        "Grosses mailles",
        "Résistance accrue",
        "Sécurité anti-effraction",
        "Retardateur de flammes",
      ],
      applications: "Portes, verrières, cloisons de sécurité",
    },
    {
      title: "Verre Feuilleté",
      description: "Double vitrage avec film plastique intercalaire",
      specifications: [
        "Haute sécurité",
        "Anti-effraction",
        "Retient les éclats",
        "Protection UV",
        "Isolation phonique",
      ],
      applications: "Vitrines, garde-corps, toitures vitrées",
    },
    {
      title: "Verre Imprimé",
      description: "Verre décoratif avec motifs en relief",
      specifications: [
        "Modèle 77",
        "Modèle 200",
        "Modèle 2004",
        "Intimité préservée",
        "Luminosité maintenue",
      ],
      applications: "Salles de bain, portes intérieures, cloisons",
    },
    {
      title: "Verre Martelé",
      description: "Aspect martelé pour un effet décoratif unique",
      specifications: [
        "Texture martelée",
        "Diffusion de lumière",
        "Intimité garantie",
        "Esthétique moderne",
        "Facile d'entretien",
      ],
      applications: "Portes, cloisons décoratives, mobilier",
    },
    {
      title: "Delta Mat",
      description: "Verre dépoli pour intimité et élégance",
      specifications: [
        "Aspect satiné",
        "Translucide",
        "Intimité totale",
        "Design contemporain",
        "Résistant aux traces",
      ],
      applications: "Salles de bain, bureaux, séparations",
    },
    {
      title: "Vitrage Isolant",
      description: "Double ou triple vitrage pour isolation thermique",
      specifications: [
        "Double vitrage",
        "Triple vitrage",
        "Isolation thermique",
        "Isolation phonique",
        "Économies d'énergie",
      ],
      applications: "Fenêtres, baies vitrées, vérandas",
    },
    {
      title: "Miroir",
      description: "Miroirs sur mesure pour tous espaces",
      specifications: [
        "Découpe sur mesure",
        "Différentes épaisseurs",
        "Qualité premium",
        "Bords polis",
        "Installation incluse",
      ],
      applications: "Salles de bain, dressing, décoration",
    },
  ];

  return (
    <div className="flex flex-col bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Catalogue des Vitrages</h1>
            <p className="text-xl text-gray-600 mb-8">
              Une large gamme de vitrages pour tous vos besoins : sécurité, isolation, décoration
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vitrages.map((vitrage, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-8">
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
