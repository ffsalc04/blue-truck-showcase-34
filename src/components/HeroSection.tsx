import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import heroTruck from '@/assets/hero-truck.jpg';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contactanos');
  };

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
            <h1 className="text-5xl lg:text-6xl font-semibold leading-tight">
              Transforma tu forma de mover carga
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              ¿Listo para empezar?
            </p>
            <Button 
              variant="pill" 
              size="lg" 
              className="mt-8 rounded-full px-8"
              onClick={handleContactClick}
            >
              Empieza a enviar hoy mismo →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;