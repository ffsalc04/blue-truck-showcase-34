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
      title: "Transporte Terrestre", 
      description: "Servicio nacional",
      fullDescription: "Nuestro servicio de transporte terrestre ofrece cobertura nacional completa con una flota moderna y conductores certificados. Garantizamos entregas seguras y puntuales en todo el territorio, adaptándonos a las necesidades específicas de cada cliente y tipo de carga.",
      image: cargaTerrestreImg
    },
    { 
      title: "Logística Integral", 
      description: "Soluciones completas",
      fullDescription: "Ofrecemos servicios logísticos integrales que incluyen almacenamiento, gestión de inventarios, preparación de pedidos y distribución. Nuestros centros estratégicamente ubicados optimizan tiempos y costos para tu cadena de suministro.",
      image: logisticaIntegradaImg
    },
    { 
      title: "Carga Especializada", 
      description: "Mercancías delicadas",
      fullDescription: "Manejamos cargas que requieren cuidados especiales como productos refrigerados, materiales peligrosos, equipos sensibles y mercancías de alto valor. Contamos con personal capacitado y equipos especializados para cada tipo de carga.",
      image: transporteRefrigeradoImg
    },
    { 
      title: "Distribución Urbana", 
      description: "Última milla",
      fullDescription: "Nuestro servicio de distribución urbana garantiza la entrega final de tu mercancía en centros urbanos. Optimizamos rutas y horarios para evitar congestión y asegurar entregas puntuales en la última milla del proceso logístico.",
      image: mudanzasCorporativasImg
    },
    { 
      title: "Almacenamiento", 
      description: "Centros de distribución",
      fullDescription: "Disponemos de centros de almacenamiento y distribución equipados con la última tecnología en control de inventarios. Ofrecemos espacios seguros, clima controlado y sistemas de gestión que optimizan el flujo de tu mercancía.",
      image: truckLoading
    },
    { 
      title: "Consultoría", 
      description: "Optimización logística",
      fullDescription: "Nuestros especialistas en logística analizan tu cadena de suministro para identificar oportunidades de mejora. Desarrollamos estrategias personalizadas que reducen costos, mejoran tiempos y optimizan tus procesos logísticos.",
      image: segurosIntegralesImg
    },
    { 
      title: "Tracking 24/7", 
      description: "Monitoreo continuo",
      fullDescription: "Sistema de seguimiento en tiempo real que te permite monitorear tu carga las 24 horas del día. Recibe actualizaciones instantáneas sobre ubicación, estado y tiempo estimado de llegada de tus envíos a través de nuestra plataforma digital.",
      image: seguimientoGpsImg
    },
    { 
      title: "Soporte Técnico", 
      description: "Asistencia especializada",
      fullDescription: "Nuestro equipo de soporte técnico está disponible para resolver cualquier consulta o incidencia. Brindamos asistencia especializada en logística, documentación, seguimiento y resolución de problemas durante todo el proceso de transporte.",
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
                    Más Info
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