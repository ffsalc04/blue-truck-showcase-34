import React from 'react';
import { Button } from '@/components/ui/button';

const ServiciosSection4 = () => {
  return (
    <section className="relative min-h-96 flex items-center">
      {/* Diagonal background */}
      <div className="absolute inset-0">
        {/* Light blue section */}
        <div 
          className="absolute inset-0 bg-brand-light-blue"
          style={{
            clipPath: 'polygon(0 0, 70% 0, 50% 100%, 0% 100%)'
          }}
        ></div>
        {/* Brown section */}
        <div 
          className="absolute inset-0 bg-brand-brown"
          style={{
            clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 30% 100%)'
          }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="max-w-2xl">
          <h2 className="text-5xl font-bold text-white mb-6">
            Hablemos
          </h2>
          <p className="text-xl text-white mb-8 max-w-lg">
            ¿Listo para optimizar tu cadena de suministro? 
            Contacta con nuestros especialistas y descubre cómo podemos 
            ayudarte a llevar tu negocio al siguiente nivel.
          </p>
          <Button variant="pill" size="lg">
            Solicitar Cotización
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiciosSection4;