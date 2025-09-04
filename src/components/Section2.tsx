import React from 'react';
import { Button } from '@/components/ui/button';
import seaport from '@/assets/seaport.jpg';

const Section2 = () => {
  const services = [
    { title: "Transporte Terrestre", description: "Servicio nacional" },
    { title: "Logística Integral", description: "Soluciones completas" },
    { title: "Carga Especializada", description: "Mercancías delicadas" },
    { title: "Distribución Urbana", description: "Última milla" },
    { title: "Almacenamiento", description: "Centros de distribución" },
    { title: "Consultoría", description: "Optimización logística" },
    { title: "Tracking 24/7", description: "Monitoreo continuo" },
    { title: "Soporte Técnico", description: "Asistencia especializada" }
  ];

  return (
    <section id="nosotros" className="py-0">
      {/* Upper Half - Image with Text Overlay */}
      <div className="relative h-96 bg-brand-blue">
        <div 
          className="absolute inset-0 bg-cover bg-center rounded-b-[3rem]"
          style={{ backgroundImage: `url(${seaport})` }}
        >
          <div className="absolute inset-0 bg-black/50 rounded-b-[3rem]"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white space-y-4">
          <h2 className="text-4xl lg:text-5xl font-semibold">Adaptamos la logística a tu operación</h2>
          <p className="text-xl text-gray-200 max-w-2xl">
            Con nuestros servicios multimodales, elegimos el camino más inteligente para tu negocio.
          </p>
        </div>
      </div>

      {/* Lower Half - Services Grid */}
      <div className="bg-brand-blue py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-brand-brown rounded-lg p-6 text-center space-y-4">
                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                <Button variant="pill-white" size="sm">
                  Más Info
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;