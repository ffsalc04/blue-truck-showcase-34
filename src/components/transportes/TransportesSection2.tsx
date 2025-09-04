import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import TransportModal from './TransportModal';
import cargaTerrestreImg from '@/assets/transport/carga-terrestre.jpg';
import logisticaIntegradaImg from '@/assets/transport/logistica-integrada.jpg';
import transporteRefrigeradoImg from '@/assets/transport/transporte-refrigerado.jpg';
import cargaPeligrosaImg from '@/assets/transport/carga-peligrosa.jpg';
import mudanzasCorporativasImg from '@/assets/transport/mudanzas-corporativas.jpg';
import transporteUrgenteImg from '@/assets/transport/transporte-urgente.jpg';
import seguimientoGpsImg from '@/assets/transport/seguimiento-gps.jpg';
import segurosIntegralesImg from '@/assets/transport/seguros-integrales.jpg';

const TransportesSection2 = () => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  const features = [
    {
      title: "Carga Terrestre",
      description: "Transporte especializado para mercancía general y carga pesada por carretera.",
      fullDescription: "Nuestro servicio de carga terrestre ofrece soluciones completas para el transporte de mercancías por carretera. Contamos con una flota moderna de vehículos especializados para diferentes tipos de carga, desde productos generales hasta cargas pesadas que requieren equipos especiales. Nuestros conductores están certificados y capacitados para manejar todo tipo de mercancías con la máxima seguridad y eficiencia.",
      image: cargaTerrestreImg
    },
    {
      title: "Logística Integrada",
      description: "Servicios completos de almacenamiento, inventario y distribución.",
      fullDescription: "Ofrecemos soluciones logísticas integrales que incluyen almacenamiento, gestión de inventarios, preparación de pedidos y distribución. Nuestros centros de distribución estratégicamente ubicados están equipados con la última tecnología para optimizar los procesos y garantizar la trazabilidad completa de tu mercancía desde el origen hasta el destino final.",
      image: logisticaIntegradaImg
    },
    {
      title: "Transporte Refrigerado",
      description: "Cadena de frío para productos perecederos y farmacéuticos.",
      fullDescription: "Mantenemos la cadena de frío intacta para productos perecederos, farmacéuticos y otros que requieren temperatura controlada. Nuestros vehículos refrigerados cuentan con sistemas de monitoreo continuo de temperatura y humedad, garantizando que tus productos lleguen en perfectas condiciones. Cumplimos con todas las normativas sanitarias y de calidad.",
      image: transporteRefrigeradoImg
    },
    {
      title: "Carga Peligrosa",
      description: "Manejo especializado de materiales peligrosos con certificaciones.",
      fullDescription: "Somos especialistas en el transporte de materiales peligrosos con todas las certificaciones y permisos requeridos. Nuestro personal está altamente capacitado en el manejo de sustancias químicas, gases, líquidos inflamables y otros materiales que requieren cuidados especiales. Cumplimos estrictamente con todas las regulaciones nacionales e internacionales.",
      image: cargaPeligrosaImg
    },
    {
      title: "Mudanzas Corporativas",
      description: "Traslado de oficinas y equipos empresariales con máxima seguridad.",
      fullDescription: "Facilitamos el traslado de oficinas y equipos empresariales con un servicio especializado que minimiza el tiempo de inactividad de tu empresa. Nos encargamos del embalaje, transporte y montaje de equipos de oficina, servidores, mobiliario y documentos importantes. Planificamos cada mudanza corporativa para garantizar una transición sin contratiempos.",
      image: mudanzasCorporativasImg
    },
    {
      title: "Transporte Urgente",
      description: "Entregas express para situaciones que requieren rapidez excepcional.",
      fullDescription: "Para situaciones que requieren máxima rapidez, ofrecemos nuestro servicio de transporte urgente con tiempos de respuesta inmediatos. Contamos con vehículos dedicados y rutas prioritarias para garantizar la entrega en el menor tiempo posible. Ideal para repuestos críticos, documentos importantes y mercancías de emergencia.",
      image: transporteUrgenteImg
    },
    {
      title: "Seguimiento GPS",
      description: "Monitoreo en tiempo real de tu carga durante todo el trayecto.",
      fullDescription: "Todos nuestros vehículos están equipados con sistemas de seguimiento GPS de última generación que te permiten monitorear tu carga en tiempo real. Recibirás actualizaciones constantes sobre la ubicación, velocidad, rutas tomadas y tiempo estimado de llegada. Nuestro centro de control opera 24/7 para garantizar la seguridad de tu mercancía.",
      image: seguimientoGpsImg
    },
    {
      title: "Seguros Integrales",
      description: "Cobertura completa para proteger tu mercancía contra cualquier eventualidad.",
      fullDescription: "Protegemos tu inversión con seguros integrales que cubren todo tipo de eventualidades durante el transporte. Nuestras pólizas incluyen cobertura por daños, pérdidas, robos y demoras. Trabajamos con las mejores aseguradoras para ofrecerte tranquilidad total y la certeza de que tu mercancía está completamente protegida.",
      image: segurosIntegralesImg
    }
  ];

  const handleFeatureClick = (index: number) => {
    setSelectedFeature(index);
  };

  const closeModal = () => {
    setSelectedFeature(null);
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-brand-brown p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-brand-cream text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>
                <Button 
                  onClick={() => handleFeatureClick(index)}
                  variant="pill-white" 
                  size="sm" 
                  className="w-full hover-scale"
                >
                  Más Info
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedFeature !== null && (
        <TransportModal
          isOpen={selectedFeature !== null}
          onClose={closeModal}
          title={features[selectedFeature].title}
          description={features[selectedFeature].fullDescription}
          serviceImage={features[selectedFeature].image}
        />
      )}
    </>
  );
};

export default TransportesSection2;