import React from 'react';
import { Button } from '@/components/ui/button';
import { Truck, Shield, Clock } from 'lucide-react';
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
          <div className="text-white space-y-6">
            <h3 className="text-3xl font-bold">Transporte Especializado</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Ofrecemos servicios de transporte terrestre con una flota moderna y equipada 
              con la última tecnología. Nuestro compromiso es brindar soluciones logísticas 
              integrales que se adapten a las necesidades específicas de cada cliente, 
              garantizando la seguridad y puntualidad en cada entrega.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Con más de una década de experiencia en el sector, hemos desarrollado 
              protocolos estrictos de calidad y seguridad que nos permiten mantener 
              los más altos estándares en el transporte de mercancías.
            </p>
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
          <div className="bg-white rounded-lg p-8 text-center space-y-4">
            <div className="flex justify-center">
              <Truck className="h-12 w-12 text-brand-blue" />
            </div>
            <h4 className="text-xl font-bold text-brand-brown">Flota Moderna</h4>
            <p className="text-gray-600">
              Vehículos equipados con GPS y sistemas de monitoreo en tiempo real
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-8 text-center space-y-4">
            <div className="flex justify-center">
              <Shield className="h-12 w-12 text-brand-blue" />
            </div>
            <h4 className="text-xl font-bold text-brand-brown">Seguridad Total</h4>
            <p className="text-gray-600">
              Protocolos de seguridad certificados y seguros integrales
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-8 text-center space-y-4">
            <div className="flex justify-center">
              <Clock className="h-12 w-12 text-brand-blue" />
            </div>
            <h4 className="text-xl font-bold text-brand-brown">Puntualidad</h4>
            <p className="text-gray-600">
              Entregas a tiempo garantizadas con seguimiento 24/7
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;