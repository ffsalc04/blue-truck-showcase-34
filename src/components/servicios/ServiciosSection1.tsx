import React, { useState } from 'react';
import ServiceModal from './ServiceModal';
import tollHighway from '@/assets/toll-highway.jpg';
import highwayTrucks from '@/assets/highway-trucks.jpg';
import shipContainers from '@/assets/ship-containers.jpg';
import truckLoading from '@/assets/truck-loading.jpg';

const ServiciosSection1 = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      title: "Servicios Nacionales",
      description: "Transporte y logística dentro del territorio nacional con cobertura completa y entregas garantizadas en todo México.",
      image: tollHighway
    },
    {
      title: "Servicios Internacionales", 
      description: "Operaciones transfronterizas especializadas entre México, Estados Unidos y Canadá con gestión aduanera completa.",
      image: highwayTrucks
    },
    {
      title: "Servicios Domésticos",
      description: "Soluciones de distribución local y regional para entregas eficientes en centros urbanos y zonas metropolitanas.",
      image: shipContainers
    },
    {
      title: "Servicios Especializados",
      description: "Transporte de cargas que requieren manejo especial como productos refrigerados, peligrosos o de alto valor.",
      image: truckLoading
    }
  ];

  const handleServiceClick = (index: number) => {
    setSelectedService(index);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      <section className="bg-brand-brown py-16">
        <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Nosotros llevamos su logística, para que usted se enfoque en su negocio
          </h2>
          <p className="text-brand-cream text-lg max-w-3xl mx-auto mb-8">
            Deje en nuestras manos el transporte, sin importar el destino o la complejidad. Mientras transportamos con eficiencia, usted se enfoca en crecer.
          </p>
          <h3 className="text-xl font-medium text-white">
            Conoce nuestros servicios:
          </h3>
        </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => handleServiceClick(index)}
                className="bg-white hover:bg-brand-brown text-brand-brown hover:text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale text-left group"
              >
                <h3 className="text-xl font-bold">
                  {service.title}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedService !== null && (
        <ServiceModal
          isOpen={selectedService !== null}
          onClose={closeModal}
          title={services[selectedService].title}
          description={services[selectedService].description}
          backgroundImage={services[selectedService].image}
        />
      )}
    </>
  );
};

export default ServiciosSection1;