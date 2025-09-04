import React from 'react';
import { Button } from '@/components/ui/button';
import highwayTruck from '@/assets/highway-truck.jpg';

const TransportesHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${highwayTruck})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content - Centered */}
      <div className="relative z-10 text-center text-white space-y-6 max-w-4xl px-6">
        <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
          Transportes
          <span className="block text-brand-light-blue">Especializados</span>
        </h1>
        <p className="text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto">
          Conectamos destinos con seguridad, eficiencia y puntualidad. 
          Tu carga en las mejores manos del transporte profesional.
        </p>
        <Button variant="pill" size="lg" className="mt-8">
          Solicitar Servicio
        </Button>
      </div>
    </section>
  );
};

export default TransportesHero;