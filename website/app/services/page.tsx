import { Phone, Home, Sparkles, Building2, Flame, Droplets, Layers, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Nos Services - Puillet Vitrerie",
  description: "Découvrez tous nos services de vitrerie : remplacement de vitrage, miroiterie, vitrines de magasin, crédences et verres de cheminée.",
};

export default function ServicesPage() {
  const services = [
    {
      icon: Home,
      title: "Remplacement de vitrage à l'identique",
      description: "Spécialiste du remplacement de tous types de vitrages : vitres simples, imprimées, armées, isolantes, etc.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      details: [
        "Vitres simples (3mm, 4mm)",
        "Verre armé (petites et grosses mailles)",
        "Verre feuilleté pour sécurité",
        "Verre imprimé (77, 200, 130)",
        "Verre martelé et Delta",
        "Vitrage isolant double ou triple",
      ],
    },
    {
      icon: Sparkles,
      title: "Miroiterie sur mesure",
      description: "Pose de miroirs pour tous types d'espaces, avec découpe et installation professionnelle.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
      details: [
        "Miroirs de salles de bain",
        "Miroirs de cuisines",
        "Miroirs pour halls d'entrée",
        "Miroirs d'ascenseurs",
        "Découpe sur mesure",
        "Installation sécurisée",
      ],
    },
    {
      icon: Building2,
      title: "Vitrines de magasin",
      description: "Sécurisation immédiate après sinistre, puis remplacement organisé selon les moyens nécessaires — plusieurs vitrages de grande dimension demandent plusieurs poseurs et/ou un équipement à ventouses.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      details: [
        "Sécurisation d'urgence < 2h",
        "Pose complète selon disponibilité des moyens",
        "Prise en charge assurance",
        "Vitrages de grande dimension",
        "Respect des normes commerciales",
        "Disponible 24h/24 et 7j/7",
      ],
    },
    {
      icon: Droplets,
      title: "Crédence de cuisine et salle de bain",
      description: "Large choix de couleurs et épaisseurs (4mm à 6mm) pour vos crédences personnalisées.",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
      details: [
        "Épaisseurs 4mm et 6mm",
        "Large gamme de couleurs",
        "Découpe sur mesure, encoches pour prises électriques",
        "Installation professionnelle",
        "Résistant à l'humidité",
        "Facile d'entretien",
      ],
    },
    {
      icon: Flame,
      title: "Verre de cheminée",
      description: "Remplacement sur mesure de vitres de cheminée pour une utilisation en toute sécurité.",
      image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=800&q=80",
      details: [
        "Verre haute température",
        "Découpe aux dimensions exactes",
        "Respect des normes de sécurité",
        "Installation rapide",
        "Conseils personnalisés",
        "Garantie qualité",
      ],
    },
  ];

  return (
    <div className="flex flex-col bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Nos Services</h1>
            <p className="text-xl text-gray-600 mb-8">
              Une expertise complète en vitrerie pour particuliers, professionnels et régies immobilières
            </p>
            <a href="tel:0650440673">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white rounded-full px-8">
                <Phone className="mr-2 h-5 w-5" />
                Contactez-nous
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  <div className="grid gap-3">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Double vitrage isolant */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
              <Layers className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Double vitrage isolant</h2>
            <p className="text-lg text-gray-600 mb-6">
              Argon, faible émissivité — confort thermique et facture d&apos;énergie qui baisse.
            </p>
            <p className="text-gray-600 mb-4">
              Un simple vitrage laisse passer le froid, le bruit et fait grimper vos factures de chauffage : c&apos;est une seule feuille de verre, aucune barrière contre les températures extérieures.
            </p>
            <p className="text-gray-600 mb-6">
              Le double vitrage, c&apos;est deux vitres avec une lame de gaz isolant entre les deux. Ce gaz bloque les échanges de chaleur et amortit les bruits extérieurs : un intérieur plus chaud en hiver, plus frais en été, et une consommation d&apos;énergie réduite.
            </p>
            <div className="grid gap-3 mb-10">
              {["Plus de confort au quotidien", "Moins de bruit", "Des économies sur votre chauffage", "Une meilleure valeur pour votre logement"].map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{b}</span>
                </div>
              ))}
            </div>
            <div className="bg-gray-900 text-white p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-3">Votre double vitrage est fissuré ?</h3>
              <p className="text-gray-300 mb-3">
                Pas d&apos;inquiétude : appelez votre assurance pour déclarer un sinistre — seule la franchise reste à votre charge, le reste est pris en charge. Une fois votre assurance contactée, appelez-moi au 06 50 44 06 73 pour organiser l&apos;intervention.
              </p>
              <p className="text-gray-300 mb-3">
                Après réalisation du devis, je vous l&apos;envoie afin que vous puissiez le transmettre à votre assurance. Une fois le devis accepté, j&apos;interviens sous 24h si aucune main d&apos;œuvre supplémentaire n&apos;est nécessaire.
              </p>
              <p className="text-gray-300">
                Le double vitrage posé est garanti contre la formation de buée/condensation entre les vitres. Cette garantie ne couvre pas la casse : choc, fissure liée à un impact, défaut de menuiserie qui force sur le vitrage, ou casse thermique due au non-respect des conditions d&apos;usage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Régies immobilières */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">Régies immobilières & syndics</h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
              Je travaille actuellement avec de nombreuses régies immobilières. Dès réception d&apos;une demande, j&apos;interviens rapidement pour remplacer vos vitrages, en autonomie complète.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900 text-white p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-3">Stock permanent dans le camion</h3>
                <p className="text-gray-300 mb-4">
                  Remplacement immédiat après la demande du gestionnaire, pour les urgences, parties communes ou logements occupés :
                </p>
                <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                  <li>Vitrage clair (3 et 4 mm)</li>
                  <li>Verre armé à grandes mailles</li>
                  <li>Verre feuilleté</li>
                  <li>Verre imprimé (77 et 200)</li>
                  <li>Verre martelé</li>
                </ul>
              </div>
              <div className="bg-gray-900 text-white p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-3">Doubles vitrages, miroirs et vitrines</h3>
                <p className="text-gray-300">
                  Pour le sur-mesure, je collabore avec un fournisseur capable de fabriquer les vitrages en moins de 24h. Je récupère ensuite le vitrage directement à la miroiterie pour sécuriser rapidement les lieux.
                </p>
              </div>
              <div className="bg-gray-900 text-white p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-3">Cas de vandalisme</h3>
                <p className="text-gray-300">
                  Si le vitrage est complètement sorti de la feuillure, une mise en sécurité est possible en attendant la validation du devis, dans la majorité des cas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artisanal Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Notre Approche Artisanale</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900 text-white p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-3">Pose au mastic traditionnel</h3>
                <p className="text-gray-300">
                  Technique artisanale respectueuse du cachet ancien de vos menuiseries. 
                  Idéal pour les bâtiments historiques et les rénovations patrimoniales.
                </p>
              </div>
              <div className="bg-gray-900 text-white p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-3">Découpe sur place</h3>
                <p className="text-gray-300">
                  Stock permanent dans le camion permettant une découpe et une pose immédiate. 
                  Intervention rapide sans délai d'attente.
                </p>
              </div>
              <div className="bg-gray-900 text-white p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-3">Travail en autonomie</h3>
                <p className="text-gray-300">
                  Intervention complète de A à Z par un artisan qualifié. 
                  Pas de sous-traitance, garantie d'un travail soigné et professionnel.
                </p>
              </div>
              <div className="bg-gray-900 text-white p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-3">Spécialisation verre</h3>
                <p className="text-gray-300">
                  Pas de menuiserie : spécialisation exclusive dans le verre pour garantir 
                  une expertise pointue et une haute qualité de service.
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Besoin d'un devis ?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour une intervention rapide ou un devis gratuit
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
