import React from 'react';
import { Button } from '@/components/ui/button';
import heroTruck from '@/assets/hero-truck.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroTruck})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Soluciones de
              <span className="block text-brand-light-blue">Transporte</span>
              Confiables
            </h1>
            <p className="text-xl text-gray-200 max-w-lg">
              Conectamos tu negocio con el mundo a través de servicios de transporte 
              eficientes y seguros que garantizan la entrega puntual de tus mercancías.
            </p>
            <Button variant="pill" size="lg" className="mt-8">
              Contáctanos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;