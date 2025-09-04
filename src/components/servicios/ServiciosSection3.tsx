import React from 'react';
import { Shield, Clock, Award } from 'lucide-react';
import cargoFlight from '@/assets/cargo-flight.jpg';

const ServiciosSection3 = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Seguridad Garantizada",
      description: "Seguros completos y protocolos de seguridad certificados internacionalmente"
    },
    {
      icon: Clock,
      title: "Entrega Puntual",
      description: "Cumplimiento del 99.5% en tiempos de entrega acordados con nuestros clientes"
    },
    {
      icon: Award,
      title: "Calidad Premium",
      description: "Certificaciones ISO y reconocimientos por excelencia en servicios logísticos"
    }
  ];

  return (
    <section className="w-full">
      {/* Upper half - Brown background */}
      <div className="bg-brand-brown py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Dark brown box with text */}
            <div className="bg-brand-dark-brown p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-white mb-6">
                Experiencia Internacional
              </h2>
              <p className="text-brand-cream text-lg leading-relaxed mb-6">
                Con más de una década en el mercado, hemos consolidado una red logística 
                que abarca múltiples continentes. Nuestros servicios de transporte aéreo 
                conectan los principales centros comerciales del mundo.
              </p>
              <p className="text-brand-cream text-lg leading-relaxed">
                Trabajamos con las aerolíneas de carga más confiables y mantenemos 
                alianzas estratégicas que nos permiten ofrecer tarifas competitivas 
                y tiempos de tránsito optimizados para tu mercancía.
              </p>
            </div>
            
            {/* Right side - Cargo flight image */}
            <div className="flex justify-center">
              <img 
                src={cargoFlight} 
                alt="Cargo Flight Operations" 
                className="w-80 h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Lower half - Blue background */}
      <div className="bg-brand-blue py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            ¿Por qué elegirnos?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div key={index} className="text-white space-y-4">
                  <div className="flex justify-center">
                    <IconComponent size={48} className="text-brand-light-blue" />
                  </div>
                  <h3 className="text-xl font-bold">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-100 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiciosSection3;