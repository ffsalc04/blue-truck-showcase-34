import React from 'react';

const ServiciosSection1 = () => {
  const services = [
    {
      title: "Transporte Terrestre",
      description: "Servicios especializados de carga por carretera con cobertura nacional e internacional."
    },
    {
      title: "Logística Integrada", 
      description: "Soluciones completas de almacenamiento, distribución y gestión de inventarios."
    },
    {
      title: "Transporte Aéreo",
      description: "Envíos urgentes y carga especializada a través de nuestra red aérea global."
    },
    {
      title: "Consultoría Logística",
      description: "Asesoramiento experto para optimizar tus procesos de supply chain y reducir costos."
    }
  ];

  return (
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
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-brand-brown mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiciosSection1;