import React from 'react';
import { Button } from '@/components/ui/button';

const TransportesSection2 = () => {
  const features = [
    {
      title: "Carga Terrestre",
      description: "Transporte especializado para mercancía general y carga pesada por carretera."
    },
    {
      title: "Logística Integrada",
      description: "Servicios completos de almacenamiento, inventario y distribución."
    },
    {
      title: "Transporte Refrigerado",
      description: "Cadena de frío para productos perecederos y farmacéuticos."
    },
    {
      title: "Carga Peligrosa",
      description: "Manejo especializado de materiales peligrosos con certificaciones."
    },
    {
      title: "Mudanzas Corporativas",
      description: "Traslado de oficinas y equipos empresariales con máxima seguridad."
    },
    {
      title: "Transporte Urgente",
      description: "Entregas express para situaciones que requieren rapidez excepcional."
    },
    {
      title: "Seguimiento GPS",
      description: "Monitoreo en tiempo real de tu carga durante todo el trayecto."
    },
    {
      title: "Seguros Integrales",
      description: "Cobertura completa para proteger tu mercancía contra cualquier eventualidad."
    }
  ];

  return (
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
              <Button variant="pill-white" size="sm" className="w-full">
                Más Info
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransportesSection2;