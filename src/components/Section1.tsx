import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import cityNight from '@/assets/city-night.jpg';

const Section1 = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contactanos');
  };

  return (
    <section id="servicios" className="pt-8 pb-20 bg-brand-brown">
      <div className="container mx-auto px-6">
        {/* Top Section with Pill */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-brand-blue to-brand-light-blue rounded-full px-8 py-4 flex items-center w-full">
            <div className="flex-[3] flex justify-center">
              <h2 className="text-2xl font-semibold text-white">Soluciones de transporte con precisión y confianza</h2>
            </div>
            <div className="flex-1 flex justify-center">
              <Button variant="pill-white" onClick={handleContactClick}>
                Empieza Hoy
              </Button>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="text-white space-y-6 flex items-center justify-center">
            <h3 className="text-xl font-body text-white leading-relaxed text-center">
              Impulsamos el éxito de nuestros clientes con{' '}
              <span className="text-brand-light-blue">
                soluciones logísticas de alto valor, brindando un servicio claro, eficiente
              </span>
              {' '}y con verdadero compromiso.
            </h3>
          </div>
          
          <div className="flex justify-center">
            <img 
              src={cityNight} 
              alt="Ciudad nocturna" 
              className="rounded-lg shadow-xl w-full max-w-md h-80 object-cover"
            />
          </div>
        </div>

        {/* Bottom Section - Key Selling Points */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 space-y-4">
            <h4 className="text-xl font-medium text-brand-brown">Entregas puntuales y eficientes</h4>
            <p className="text-gray-600">
              Nuestros servicios se caracterizan por su meticulosidad. Torego fue diseñado para garantizar entregas rápidas y a tiempo. 
              Nos adaptamos a tu agenda, asegurando que tus envíos lleguen a su destino sin contratiempos.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-8 space-y-4">
            <h4 className="text-xl font-medium text-brand-brown">Soluciones accesibles</h4>
            <p className="text-gray-600">
              Porque la efectividad está en el centro de nuestra filosofía de servicio. Aprovecha nuestras tarifas competitivas y estructuras de precios transparentes que te ayudan a optimizar tus gastos logísticos.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-8 space-y-4">
            <h4 className="text-xl font-medium text-brand-brown">Tu carga en manos expertas</h4>
            <p className="text-gray-600">
              Porque la efectividad está en el centro de nuestra filosofía de servicio. Aprovecha nuestras tarifas competitivas y estructuras de precios transparentes que te ayudan a optimizar tus gastos logísticos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;