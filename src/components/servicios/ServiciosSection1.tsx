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
      title: "Transporte Terrestre",
      description: "Ofrecemos servicios especializados de carga por carretera con cobertura nacional e internacional. Nuestra flota moderna y nuestros conductores certificados garantizan el transporte seguro y puntual de tu mercancía. Contamos con vehículos adaptados para diferentes tipos de carga, desde productos generales hasta cargas especiales que requieren condiciones específicas de transporte.",
      backgroundImage: tollHighway
    },
    {
      title: "Logística Integrada", 
      description: "Proporcionamos soluciones completas de almacenamiento, distribución y gestión de inventarios. Nuestros centros de distribución estratégicamente ubicados permiten optimizar los tiempos de entrega y reducir costos operativos. Incluimos servicios de cross-docking, preparación de pedidos, y gestión de inventarios con tecnología de última generación.",
      backgroundImage: highwayTrucks
    },
    {
      title: "Transporte Aéreo",
      description: "Especializados en envíos urgentes y carga especializada a través de nuestra red aérea global. Trabajamos con las principales aerolíneas de carga para ofrecer conexiones directas a más de 200 destinos internacionales. Ideal para productos de alto valor, perecederos, y envíos que requieren tiempos de tránsito mínimos.",
      backgroundImage: shipContainers
    },
    {
      title: "Consultoría Logística",
      description: "Brindamos asesoramiento experto para optimizar tus procesos de supply chain y reducir costos operativos. Nuestro equipo de consultores especializados analiza tu cadena de suministro actual y propone mejoras que pueden generar ahorros significativos. Incluye análisis de rutas, optimización de inventarios, y implementación de tecnologías logísticas.",
      backgroundImage: truckLoading
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
            <h2 className="text-3xl font-bold text-white mb-4">
              Conoce nuestros servicios
            </h2>
            <p className="text-brand-cream text-lg max-w-2xl mx-auto">
              Servicios especializados diseñados para cubrir todas tus necesidades de transporte y logística
            </p>
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
          backgroundImage={services[selectedService].backgroundImage}
        />
      )}
    </>
  );
};

export default ServiciosSection1;