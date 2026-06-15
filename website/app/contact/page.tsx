"use client";

import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
                <h3 className="font-bold text-gray-900 mb-2">Disponibilité</h3>
                <p className="font-semibold text-gray-900">24h/24 - 7j/7</p>
                <p className="text-sm text-gray-600 mt-2">
                  Intervention en moins de 2 heures pour les urgences
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-3xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Demande de devis ou d'information</h2>
                <p className="text-gray-600 mb-8">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais
                </p>
                
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-3xl p-8 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-green-900 mb-2">Message envoyé !</h3>
                    <p className="text-green-700">Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                          placeholder="06 00 00 00 00"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
                        Objet de la demande *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      >
                        <option value="">Sélectionnez un objet</option>
                        <option value="urgence">Urgence - Intervention rapide</option>
                        <option value="devis">Demande de devis</option>
                        <option value="vitrage">Remplacement de vitrage</option>
                        <option value="miroiterie">Miroiterie</option>
                        <option value="vitrine">Vitrine de magasin</option>
                        <option value="credence">Crédence</option>
                        <option value="autre">Autre demande</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        placeholder="Décrivez votre besoin..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-black hover:bg-gray-800 text-white rounded-full h-14">
                      Envoyer le message
                    </Button>
                  </form>
                )}
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
