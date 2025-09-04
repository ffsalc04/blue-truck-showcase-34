import React from 'react';
import { Users, Network, Settings } from 'lucide-react';
import cargoFlight from '@/assets/cargo-flight.jpg';

const ServiciosSection3 = () => {
  const advantages = [
    {
      icon: Users,
      title: "Especialistas que entienden tu camino",
      description: "Nuestro equipo no solo resuelve retos logísticos: los anticipa. Con un profundo conocimiento de tu industria y una visión estratégica, te acompañamos en cada paso, ofreciendo soluciones que marcan la diferencia, incluso en los escenarios más exigentes."
    },
    {
      icon: Network,
      title: "Conectividad",
      description: "Complementamos tus operaciones con nuestra red de transporte y clientes para fortalecer la logística, eficientar las rutas y ofrecer servicios competitivos."
    },
    {
      icon: Settings,
      title: "Estrategias hechas para ti",
      description: "Creamos soluciones logísticas ajustadas a las particularidades de tu operación, combinando distintos métodos de transporte con herramientas tecnológicas que impulsan eficiencia y control."
    }
  ];

  return (
    <section className="w-full">
      {/* Upper half - Brown background */}
      <div className="bg-brand-brown py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Dark brown box with text */}
            <div className="bg-brand-dark-brown p-8 rounded-lg">
              <h2 className="text-3xl font-semibold text-white mb-6">
                Cobertura inteligente para llegar a donde lo necesite
              </h2>
              <p className="text-brand-cream text-base leading-relaxed mb-6">
                En Torego global, entendemos que la ubicación lo es todo en logística. Por eso, hemos construido una red de operación sólida y bien distribuida a lo largo del país, que nos permite estar siempre cerca de ti y de tus clientes.
              </p>
              <p className="text-brand-cream text-base leading-relaxed mb-6">
                Gracias a nuestra presencia estratégica en zonas clave y a una infraestructura logística robusta, podemos planear rutas más eficientes, reducir los tiempos de entrega y adaptarnos con agilidad a cualquier cambio o desafío del mercado. Ya sea en grandes ciudades o destinos menos accesibles, conectamos cada tramo del recorrido con precisión, cuidando que tu mercancía llegue siempre a tiempo y en las mejores condiciones.
              </p>
              <p className="text-brand-cream text-base leading-relaxed">
                Tu operación tiene el respaldo de una conectividad logística diseñada para crecer contigo.
              </p>
            </div>
            
            {/* Right side - Cargo flight image */}
            <div className="flex justify-center">
              <img 
                src={cargoFlight} 
                alt="Cargo Flight Operations" 
                className="w-80 h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Lower half - Dark Blue background */}
      <div className="bg-brand-dark-blue py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-white mb-12">
            ¿Qué nos hace destacar en el mundo de la logística?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div key={index} className="text-white space-y-4">
                  <div className="flex justify-center">
                    <IconComponent size={48} className="text-white" fill="white" />
                  </div>
                  <h3 className="text-xl font-medium">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-100 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiciosSection3;