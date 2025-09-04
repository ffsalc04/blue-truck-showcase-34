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
      description: "Movemos tus productos a lo largo de todo México con estrategias logísticas pensadas para cada destino. Priorizamos la velocidad, confiabilidad y adaptación a tus operaciones. Nuestra red sólida y herramientas tecnológicas nos permiten ofrecer un servicio ágil, alineado a las necesidades específicas de tu negocio.",
      image: tollHighway
    },
    {
      title: "Servicios Internacionales", 
      description: "Llevamos tus productos más allá de las fronteras con soluciones diseñadas para simplificar cada paso del proceso. Desde la coordinación de envíos, monitoreo y colaboración con el agente aduanal de su elección, nos encargamos de que sus operaciones internacionales fluyan con precisión. Ya sea importación o exportación, aseguramos entregas seguras, puntuales y en cumplimiento con las normativas internacionales.",
      image: highwayTrucks
    },
    {
      title: "Servicios Domésticos",
      description: "En Torego, conectamos cada punto del país con precisión. Nos especializamos en trasladar tu carga dentro del territorio nacional con agilidad, seguridad y eficiencia. Conectamos rutas inteligentes que se ajustan a lo que tu negocio necesita, reduciendo tiempos y mejorando resultados.",
      image: shipContainers
    },
    {
      title: "Servicios Especializados",
      description: "Transportamos tus productos con soluciones de transporte terrestre adaptado a tus necesidades. Contamos con distintos tipos de equipo de arrastre: contenedores, plataformas, fulles, refrigerados, servicio intermodal, gestión aduanal y manejo de materiales peligrosos hazmat o químicos.",
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