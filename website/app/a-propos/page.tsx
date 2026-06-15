import { Shield, Wrench, Clock, Award, MapPin, Heart, Phone, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "À Propos - Puillet Vitrerie",
  description: "Découvrez Puillet Vitrerie, artisan vitrier à Francheville. Savoir-faire traditionnel, intervention rapide sur Lyon et agglomération.",
};

export default function AProposPage() {
  const values = [
    {
      icon: Wrench,
      title: "Savoir-faire artisanal",
      description: "Techniques traditionnelles de pose au mastic, respect du cachet ancien des menuiseries.",
    },
    {
      icon: Shield,
      title: "Agréé Assurance",
      description: "Prise en charge directe par votre assurance pour tous vos sinistres.",
    },
    {
      icon: Clock,
      title: "Réactivité",
      description: "Intervention en moins de 2 heures pour les urgences, 24h/24 et 7j/7.",
    },
    {
      icon: Award,
      title: "Spécialisation",
      description: "Exclusivement spécialisé dans le verre, pas de menuiserie, pour une expertise pointue.",
    },
    {
      icon: Heart,
      title: "Autonomie",
      description: "Travail en totale autonomie de A à Z, sans sous-traitance.",
    },
    {
      icon: MapPin,
      title: "Proximité",
      description: "Basé à Francheville, intervention sur Lyon et toute l'agglomération lyonnaise.",
    },
  ];

  const expertise = [
    "Pose au mastic traditionnel",
    "Découpe sur place",
    "Stock permanent dans le camion",
    "Respect des menuiseries anciennes",
    "Intervention immédiate",
    "Conseil personnalisé",
  ];

  return (
    <div className="flex flex-col bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-gray-100 text-gray-900 rounded-full font-bold text-sm mb-6">
              AGRÉÉ ASSURANCE
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">À Propos</h1>
            <p className="text-xl text-gray-600">
              Artisan spécialisé dans le remplacement à l'identique de tous types de vitrages
            </p>
          </div>
        </div>
      </section>

      {/* Presentation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Un artisan à votre service</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Basé à Francheville (69340), Puillet Vitrerie intervient sur Lyon et toute l'agglomération lyonnaise 
              pour tous vos besoins en vitrerie.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Spécialisé dans le remplacement à l'identique de tous types de vitrages, nous mettons notre 
              savoir-faire artisanal au service des particuliers, des professionnels et des régies immobilières.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Nos Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-3xl text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Notre Expertise</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Savoir-faire traditionnel</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Nous privilégions les techniques artisanales éprouvées, notamment la pose au mastic traditionnel, 
                  particulièrement adaptée aux menuiseries anciennes.
                </p>
                <div className="space-y-3">
                  {expertise.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Intervention rapide</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Grâce à un stock permanent de vitrages dans notre camion, nous pouvons intervenir rapidement 
                  et réaliser la découpe sur place.
                </p>
                <div className="bg-gray-900 text-white p-6 rounded-3xl">
                  <h4 className="font-bold text-lg mb-3">Disponibilité</h4>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      <span className="font-semibold">24h/24 - 7j/7</span>
                    </p>
                    <p className="text-sm text-gray-300">Pour toutes vos urgences vitrerie</p>
                    <p className="text-sm mt-4 text-gray-300">
                      <span className="font-semibold text-white">Zone d'intervention :</span><br />
                      Francheville, Lyon et toute l'agglomération lyonnaise
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialization */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-gray-900 rounded-3xl p-12 lg:p-16 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Spécialisation exclusive</h2>
            <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
              Contrairement à de nombreux artisans, nous ne faisons pas de menuiserie. 
              Cette spécialisation exclusive dans le verre nous permet de garantir une expertise 
              pointue et une haute qualité de service.
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Chaque intervention est réalisée avec le plus grand soin, dans le respect de vos attentes 
              et des spécificités de votre projet.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Contactez-nous</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Pour toute demande d'information ou devis gratuit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0650440673">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white rounded-full px-8 h-14">
                <Phone className="mr-2 h-5 w-5" />
                06 50 44 06 73
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14">
                Formulaire de contact
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
