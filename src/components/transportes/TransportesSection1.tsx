import React from 'react';

const TransportesSection1 = () => {
  const advantages = [
    "Patio, almacen y servicio de burreo en el puerto de Manzanillo.",
    "Capacidad para embarcar full y sencillo.",
    "Presencia en las principales aduanas maritimas."
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-brown mb-4">
            Ventajas de Torego
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-brand-blue p-8 rounded-lg shadow-lg">
              <p className="text-white text-lg leading-relaxed text-center">
                {advantage}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransportesSection1;