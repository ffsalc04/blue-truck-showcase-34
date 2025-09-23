import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import TransportModal from './TransportModal';
import cajaRefrigeradaImg from '@/assets/transport/caja-refrigerada.jpg';
import operacionesTransfronterizasImg from '@/assets/transport/operaciones-transfronterizas.jpg';
import bodegaTransbordosImg from '@/assets/transport/bodega-de-transbordos.jpg';
import remolquePlataformaImg from '@/assets/transport/remolque-de-plataforma.jpg';
import cajaSecaImg from '@/assets/transport/caja-seca.jpg';
import ltlImg from '@/assets/transport/ltl.jpg';
import almacenajeImg from '@/assets/transport/almacenaje.jpg';
import contenedoresImg from '@/assets/transport/contenedores.jpg';
import bannerCajaRefrigerada from '@/assets/banners/banner-caja-refrigerada.png';
import bannerOperacionesTransfronterizas from '@/assets/banners/banner-operaciones-transfronterizas.png';
import bannerOperacionesNacionales from '@/assets/banners/banner-operaciones-nacionales.png';
import bannerRemolquePlataforma from '@/assets/banners/banner-remolque-de-plataforma.png';
import bannerCajaSeca from '@/assets/banners/banner-caja-seca.png';
import bannerLtl from '@/assets/banners/banner-ltl.png';
import bannerCargaParcial from '@/assets/banners/banner-carga-parcial.png';
import bannerContenedores from '@/assets/banners/banner-contenedores.png';

const TransportesSection2 = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    { 
      title: "Caja refrigerada", 
      description: "Transporte con temperatura controlada",
      fullDescription: "Unidades de alto rendimiento con control de temperatura, diseñadas para cumplir con cada requisito: cumplen con FSMA y CARB, son rentables y reconocidas por brindar un servicio excepcional.",
      image: cajaRefrigeradaImg,
      banner: bannerCajaRefrigerada
    },
    { 
      title: "Operaciones Transfronterizas", 
      description: "Cruces internacionales",
      fullDescription: "Coordinamos y ejecutamos operaciones de comercio internacional con eficiencia y precisión. Facilitamos el cruce fronterizo, gestionamos con tu agente aduanal documentación y ofrecemos soluciones logísticas puerta a puerta en importación y exportación.",
      image: operacionesTransfronterizasImg,
      banner: bannerOperacionesTransfronterizas
    },
    { 
      title: "Operaciones Nacionales", 
      description: "Consolidación de cargas",
      fullDescription: "Soluciones de envío personalizadas para Estados Unidos, tanto nacionales como transfronterizas, guiadas por los mejores expertos en logística del país.",
      image: bodegaTransbordosImg,
      banner: bannerOperacionesNacionales
    },
    { 
      title: "Remolque de Plataforma", 
      description: "Carga especializada",
      fullDescription: "Ofrecemos transporte seguro y eficiente en plataformas de carga para todo tipo de mercancía sobredimensionada o de gran volumen. Nuestro servicio garantiza rutas optimizadas, cumplimiento normativo y manejo especializado para asegurar que tu carga llegue a destino a tiempo y en perfectas condiciones.",
      image: remolquePlataformaImg,
      banner: bannerRemolquePlataforma
    },
    { 
      title: "Caja seca", 
      description: "Transporte general",
      fullDescription: "Servicio de carga en caja seca, seguro, eficiente y optimizado para todo tipo de mercancía no perecedera. Operamos bajo estrictos estándares de calidad y cumplimiento normativo, garantizando entregas puntuales y confiables.",
      image: cajaSecaImg,
      banner: bannerCajaSeca
    },
    { 
      title: "LTL", 
      description: "Less Than Truckload",
      fullDescription: "Evita demoras y costos innecesarios en tus envíos pequeños. Nuestro equipo experto se encarga de asignar tu carga al equipo especializado ideal, optimizando tiempos y eficiencia logística.",
      image: ltlImg,
      banner: bannerLtl
    },
    { 
      title: "Carga Parcial", 
      description: "Gestión de inventarios",
      fullDescription: "Conectamos cada envío con el proveedor ideal regional, superregional o nacional, dentro de nuestra red especializada, para ofrecer servicios LTL confiables y rentables.",
      image: almacenajeImg,
      banner: bannerCargaParcial
    },
    { 
      title: "Contenedores", 
      description: "Transporte marítimo",
      fullDescription: "Reduce retrasos y costos innecesarios gracias a una visibilidad completa desde puerto a puerto, comunicación anticipada y una amplia red que conecta todos los terminales y rampas principales.",
      image: contenedoresImg,
      banner: bannerContenedores
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
                <div className="mb-4">
                  <img 
                    src={service.banner} 
                    alt={service.title}
                    className="w-full h-16 object-contain"
                  />
                </div>
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