import React from 'react';
import { Button } from '@/components/ui/button';
import alpsBackground from '@/assets/alps-background.jpg';

const ServiciosHero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${alpsBackground})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="flex">
          {/* Blue square on left 2/3 extending from left edge */}
          <div className="w-2/3 bg-brand-blue min-h-96 flex items-center">
            <div className="container mx-auto px-6 py-12">
              <div className="text-white space-y-6 max-w-2xl">
                <h1 className="text-5xl lg:text-6xl font-semibold leading-tight">
                  NUESTROS SERVICIOS
                </h1>
                <p className="text-xl text-gray-100 max-w-lg">
                  Movemos tu negocio con estrategia y precisión entendemos que no existen soluciones únicas. Cada empresa enfrenta desafíos logísticos distintos, y por eso creamos estrategias alineadas con tus objetivos. Nos encargamos de que tu mercancía llegue a tiempo, segura y con una tarifa competitiva y transparente sin importar si es un envío nacional o cruza fronteras.
                </p>
                <p className="text-xl text-gray-100 max-w-lg">
                  Combinamos experiencia, tecnología y una red sólida para darte visibilidad total, respuesta inmediata y resultados que impulsan tu operación.
                </p>
              </div>
            </div>
          </div>
          {/* Right 1/3 transparent to show Alps */}
          <div className="w-1/3"></div>
        </div>
      </div>
    </section>
  );
};

export default ServiciosHero;