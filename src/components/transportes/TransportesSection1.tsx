import React from 'react';

const TransportesSection1 = () => {
  const advantages = [
    {
      title: "Cobertura Nacional",
      description: "Red de distribución que abarca todo el territorio nacional con tiempos de entrega garantizados."
    },
    {
      title: "Flota Moderna",
      description: "Vehículos de última generación equipados con tecnología GPS y sistemas de seguridad avanzados."
    },
    {
      title: "Servicio 24/7",
      description: "Atención al cliente las 24 horas del día, los 7 días de la semana para emergencias y consultas."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-brown mb-4">
            Ventajas de Empresas
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-brand-blue p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {advantage.title}
              </h3>
              <p className="text-white text-lg leading-relaxed text-center">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransportesSection1;