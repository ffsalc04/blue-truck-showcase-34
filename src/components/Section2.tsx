import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import TransportModal from '@/components/transportes/TransportModal';
import seaport from '@/assets/seaport.jpg';
import cargaTerrestreImg from '@/assets/transport/carga-terrestre.jpg';
import logisticaIntegradaImg from '@/assets/transport/logistica-integrada.jpg';
import transporteRefrigeradoImg from '@/assets/transport/transporte-refrigerado.jpg';
import mudanzasCorporativasImg from '@/assets/transport/mudanzas-corporativas.jpg';
import seguimientoGpsImg from '@/assets/transport/seguimiento-gps.jpg';
import segurosIntegralesImg from '@/assets/transport/seguros-integrales.jpg';
import truckLoading from '@/assets/truck-loading.jpg';

const Section2 = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    { 
      title: "Caja refrigerada", 
      description: "Transporte con temperatura controlada",
      fullDescription: "Nuestro servicio de caja refrigerada mantiene la cadena de frío intacta para productos perecederos, farmacéuticos y otros que requieren temperatura controlada. Contamos con vehículos especializados y sistemas de monitoreo continuo.",
      image: cargaTerrestreImg
    },
    { 
      title: "Operaciones Transfronterizas", 
      description: "Cruces internacionales",
      fullDescription: "Especialistas en operaciones transfronterizas entre México, Estados Unidos y Canadá. Manejamos toda la documentación aduanera y cumplimos con las regulaciones internacionales para garantizar cruces sin contratiempos.",
      image: logisticaIntegradaImg
    },
    { 
      title: "Bodega de Transbordos", 
      description: "Consolidación de cargas",
      fullDescription: "Nuestras bodegas de transbordo optimizan la consolidación y desconsolidación de cargas. Facilitamos el intercambio eficiente entre diferentes modos de transporte y rutas de distribución.",
      image: transporteRefrigeradoImg
    },
    { 
      title: "Remolque de Plataforma", 
      description: "Carga especializada",
      fullDescription: "Remolques de plataforma para el transporte de maquinaria pesada, equipos industriales y cargas de dimensiones especiales. Contamos con equipos especializados y personal capacitado para manejos complejos.",
      image: mudanzasCorporativasImg
    },
    { 
      title: "Caja seca", 
      description: "Transporte general",
      fullDescription: "Servicio de caja seca para el transporte seguro de mercancía general. Nuestros remolques cerrados protegen la carga de las condiciones climáticas y garantizan la integridad de los productos.",
      image: truckLoading
    },
    { 
      title: "LTL", 
      description: "Less Than Truckload",
      fullDescription: "Servicio LTL (Less Than Truckload) para cargas que no requieren un remolque completo. Optimizamos costos consolidando múltiples envíos en una sola unidad, manteniendo la eficiencia y puntualidad.",
      image: segurosIntegralesImg
    },
    { 
      title: "Almacenaje", 
      description: "Gestión de inventarios",
      fullDescription: "Servicios de almacenaje con instalaciones modernas y seguras. Ofrecemos gestión de inventarios, preparación de pedidos y distribución desde nuestros centros estratégicamente ubicados.",
      image: seguimientoGpsImg
    },
    { 
      title: "Contenedores", 
      description: "Transporte marítimo",
      fullDescription: "Manejo especializado de contenedores para comercio internacional. Coordinamos el transporte desde puertos hasta destino final, incluyendo servicios de desconsolidación y distribución.",
      image: logisticaIntegradaImg
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
      <section id="nosotros" className="py-0">
        {/* Upper Half - Image with Text Overlay */}
        <div className="relative h-96 bg-brand-blue">
          <div 
            className="absolute inset-0 bg-cover bg-center rounded-b-[3rem]"
            style={{ backgroundImage: `url(${seaport})` }}
          >
            <div className="absolute inset-0 bg-black/50 rounded-b-[3rem]"></div>
          </div>
          
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white space-y-4">
            <h2 className="text-4xl lg:text-5xl font-semibold">Adaptamos la logística a tu operación</h2>
            <p className="text-xl text-gray-200 max-w-2xl">
              Con nuestros servicios multimodales, elegimos el camino más inteligente para tu negocio.
            </p>
          </div>
        </div>

        {/* Lower Half - Services Grid */}
        <div className="bg-brand-blue py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-brand-brown rounded-lg p-6 text-center space-y-4">
                  <h3 className="text-lg font-medium text-white">{service.title}</h3>
                  <Button 
                    variant="pill-white" 
                    size="sm"
                    onClick={() => handleServiceClick(index)}
                  >
                    →
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedService !== null && (
        <TransportModal
          isOpen={selectedService !== null}
          onClose={closeModal}
          title={services[selectedService].title}
          description={services[selectedService].fullDescription}
          serviceImage={services[selectedService].image}
        />
      )}
    </>
  );
};

export default Section2;