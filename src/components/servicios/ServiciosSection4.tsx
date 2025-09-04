import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ServiciosSection4 = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contactanos');
  };

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
        <div className="max-w-3xl">
          <h2 className="text-5xl font-semibold text-white mb-6">
            Hablemos
          </h2>
          <h3 className="text-2xl text-white mb-6">
            ¿Tienes dudas sobre la mejor opción para tu negocio?
          </h3>
          <p className="text-lg text-white mb-6 leading-relaxed">
            Estamos listos para orientarte. Cuéntanos tus objetivos logísticos y te guiaremos paso a paso para encontrar la mejor solución.
          </p>
          <p className="text-lg text-white mb-8 leading-relaxed">
            Tu operación es única, y por eso queremos conocerte. Escríbenos y descubramos juntos cómo mover tu mundo con eficiencia.
          </p>
          <Button 
            variant="pill" 
            size="lg"
            onClick={handleContactClick}
          >
            Contáctanos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiciosSection4;