import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import quienesSomosTop from '@/assets/quienes-somos-top.png';
import quienesSomosMiddle from '@/assets/quienes-somos-middle.png';
import quienesSomosBottom from '@/assets/quienes-somos-bottom.png';

const QuienesSomos = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contactanos');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${quienesSomosTop})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 py-16">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Quiénes Somos
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl leading-relaxed">
              Torego Global, transforma la forma en que se mueve tu mercancía con soluciones logísticas eficientes y hechas a la medida de cada necesidad.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-brand-navy">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                Nuestro personal, ha impulsado el comercio entre México y Estados Unidos y Canadá 
                con estrategias logísticas inteligentes, adaptadas a los retos del mercado moderno.
              </p>
            </div>
            <div>
              <img 
                src={quienesSomosMiddle} 
                alt="Quiénes somos" 
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-brand-light-blue">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl text-white mb-8">
              Nuestra Misión
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-white">
              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <p className="text-lg leading-relaxed">
                  Creemos en el poder de las relaciones duraderas y de confianza. 
                  Ejecutamos cada proyecto con precisión y atención al detalle, 
                  acompañando a nuestros clientes en cada paso del camino.
                </p>
              </div>
              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <p className="text-lg leading-relaxed">
                  Nos impulsa la excelencia: enfrentamos cada reto con determinación, 
                  resiliencia y el compromiso de superar lo imposible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-brand-navy">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={quienesSomosBottom} 
                alt="El equipo de Torego Global" 
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl text-brand-light-blue mb-6">
                El Equipo
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                Somos un equipo de personas apasionadas por la logística, con amplia experiencia 
                en transporte y comercio internacional, pero sobre todo, con un compromiso real 
                por entender las necesidades de cada cliente.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                Trabajamos hombro a hombro, combinando conocimiento, calidad y tecnología para 
                ofrecer soluciones que no solo mueven mercancías, sino que facilitan la vida 
                de quienes confían en nosotros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trajectory Section */}
      <section className="py-16 bg-brand-brown">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl text-white mb-8 text-center">
              Nuestra Trayectoria
            </h2>
            <div className="space-y-6 text-white">
              <p className="text-lg leading-relaxed">
                Creamos conexiones que se complementan. A lo largo del tiempo, hemos construido 
                alianzas sólidas con clientes y socios estratégicos que han sido clave para llevar 
                nuestra operación a nuevos horizontes.
              </p>
              <p className="text-lg leading-relaxed">
                Esta red de confianza nos ha permitido evolucionar, optimizar cada movimiento y 
                fortalecer nuestra huella en el transporte terrestre.
              </p>
              <p className="text-lg leading-relaxed">
                Cada paso que damos representa un avance hacia una logística más conectada, 
                eficiente y humana.
              </p>
              <p className="text-lg leading-relaxed font-medium">
                En Torego Global contamos con una red confiable y eficiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-blue">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl text-white mb-6">
            Contáctanos y accede a nuevas oportunidades de carga
          </h2>
          <Button 
            variant="pill-white" 
            size="lg"
            onClick={handleContactClick}
            className="mt-4"
          >
            Llena el formulario
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuienesSomos;