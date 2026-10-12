"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuoteForm from "@/components/QuoteForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Contactez-nous</h1>
            <p className="text-xl text-gray-600">
              Nous sommes à votre écoute pour tous vos besoins en vitrerie
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-3xl">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Téléphone</h3>
                <a href="tel:0650440673" className="text-lg font-semibold text-gray-900 hover:text-gray-700">
                  06 50 44 06 73
                </a>
                <p className="text-sm text-gray-600 mt-2">
                  Disponible 24h/24 et 7j/7 pour les urgences
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <a href="mailto:puilletvitrerie@gmail.com" className="text-lg font-semibold text-gray-900 hover:text-gray-700 break-all">
                  puilletvitrerie@gmail.com
                </a>
                <p className="text-sm text-gray-600 mt-2">
                  Réponse sous 24h
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Zone d'intervention</h3>
                <p className="font-semibold text-gray-900">Francheville (69340)</p>
                <p className="text-sm text-gray-600 mt-2">
                  Lyon et toute l'agglomération lyonnaise
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Horaires</h3>
                <p className="font-semibold text-gray-900">Lundi au samedi · 7h à 20h</p>
                <p className="text-sm text-gray-600 mt-2">
                  Dépannage d&apos;urgence 7j/7 : intervention en moins de 2 heures pour un simple vitrage
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-3xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Demande de devis ou d'information</h2>
                <p className="text-gray-600 mb-8">
                  Remplissez les 3 étapes ci-dessous : je vous rappelle rapidement. Devis gratuit et sans engagement.
                </p>
                
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgence CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-gray-900 rounded-3xl p-12 lg:p-16 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Urgence Vitrerie ?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Pour une intervention immédiate, appelez-nous directement
            </p>
            <a href="tel:0650440673">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-12 h-14">
                <Phone className="mr-2 h-6 w-6" />
                06 50 44 06 73
              </Button>
            </a>
            <p className="mt-4 text-gray-300">Intervention en moins de 2 heures</p>
          </div>
        </div>
      </section>
    </div>
  );
}
