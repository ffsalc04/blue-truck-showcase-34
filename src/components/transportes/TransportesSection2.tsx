import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import TransportModal from './TransportModal';
import cargaTerrestreImg from '@/assets/transport/carga-terrestre.jpg';
import logisticaIntegradaImg from '@/assets/transport/logistica-integrada.jpg';
import transporteRefrigeradoImg from '@/assets/transport/transporte-refrigerado.jpg';
import mudanzasCorporativasImg from '@/assets/transport/mudanzas-corporativas.jpg';
import seguimientoGpsImg from '@/assets/transport/seguimiento-gps.jpg';
import segurosIntegralesImg from '@/assets/transport/seguros-integrales.jpg';
import cargaPeligrosaImg from '@/assets/transport/carga-peligrosa.jpg';
import transporteUrgenteImg from '@/assets/transport/transporte-urgente.jpg';

const TransportesSection2 = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    { 
      title: "Caja refrigerada", 
      description: "Transporte con temperatura controlada",
      fullDescription: "Unidades de alto rendimiento con control de temperatura, diseñadas para cumplir con cada requisito: cumplen con FSMA y CARB, son rentables y reconocidas por brindar un servicio excepcional.",
      image: transporteRefrigeradoImg
    },
    { 
      title: "Operaciones Transfronterizas", 
      description: "Cruces internacionales",
      fullDescription: "Coordinamos y ejecutamos operaciones de comercio internacional con eficiencia y precisión. Facilitamos el cruce fronterizo, gestionamos con tu agente aduanal documentación y ofrecemos soluciones logísticas puerta a puerta en importación y exportación.",
      image: logisticaIntegradaImg
    },
    { 
      title: "Bodega de Transbordos", 
      description: "Consolidación de cargas",
      fullDescription: "Soluciones de envío personalizadas para Estados Unidos, tanto nacionales como transfronterizas, guiadas por los mejores expertos en logística del país.",
      image: cargaTerrestreImg
    },
    { 
      title: "Remolque de Plataforma", 
      description: "Carga especializada",
      fullDescription: "Ofrecemos transporte seguro y eficiente en plataformas de carga para todo tipo de mercancía sobredimensionada o de gran volumen. Nuestro servicio garantiza rutas optimizadas, cumplimiento normativo y manejo especializado para asegurar que tu carga llegue a destino a tiempo y en perfectas condiciones.",
      image: mudanzasCorporativasImg
    },
    { 
      title: "Caja seca", 
      description: "Transporte general",
      fullDescription: "Servicio de carga en caja seca, seguro, eficiente y optimizado para todo tipo de mercancía no perecedera. Operamos bajo estrictos estándares de calidad y cumplimiento normativo, garantizando entregas puntuales y confiables.",
      image: transporteUrgenteImg
    },
    { 
      title: "LTL", 
      description: "Less Than Truckload",
      fullDescription: "Evita demoras y costos innecesarios en tus envíos pequeños. Nuestro equipo experto se encarga de asignar tu carga al equipo especializado ideal, optimizando tiempos y eficiencia logística.",
      image: segurosIntegralesImg
    },
    { 
      title: "Almacenaje", 
      description: "Gestión de inventarios",
      fullDescription: "Conectamos cada envío con el proveedor ideal regional, superregional o nacional, dentro de nuestra red especializada, para ofrecer servicios LTL confiables y rentables.",
      image: seguimientoGpsImg
    },
    { 
      title: "Contenedores", 
      description: "Transporte marítimo",
      fullDescription: "Reduce retrasos y costos innecesarios gracias a una visibilidad completa desde puerto a puerto, comunicación anticipada y una amplia red que conecta todos los terminales y rampas principales.",
      image: cargaPeligrosaImg
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
      <section className="py-20 bg-brand-blue">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Nuestros Servicios de Transporte
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-brand-brown rounded-lg p-6 text-center space-y-4">
                <h3 className="text-lg font-medium text-white">{service.title}</h3>
                <Button 
                  variant="pill-white" 
                  size="sm"
                  className="rounded-full px-8 w-full"
                  onClick={() => handleServiceClick(index)}
                >
                  <span className="text-lg">→</span>
                </Button>
              </div>
            ))}
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

export default TransportesSection2;