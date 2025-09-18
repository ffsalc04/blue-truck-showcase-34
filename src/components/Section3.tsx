import React from 'react';
import { Award, FileCheck } from 'lucide-react';

const Section3 = () => {
  return (
    <section id="certificaciones" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Half - Text Content */}
          <div className="space-y-8">
            <h2 className="text-4xl font-semibold text-brand-brown">
              Calidad
            </h2>
            
            <h3 className="text-2xl font-medium text-brand-blue">
              Certificaciones Internacionales en Seguridad Logística
            </h3>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                En Torego, la seguridad no es opcional, es un estándar. Colaboramos con socios comerciales que operan bajo las certificaciones más estrictas y reconocidas a nivel global, como CTPAT (Customs Trade Partnership Against Terrorism) y OEA (Operador Económico Autorizado). Gracias a esta alianza, garantizamos un entorno seguro y conforme para el movimiento de mercancías en México, Estados Unidos y Canadá.
              </p>
              
              <p>
                Estas certificaciones respaldan nuestro compromiso con:
              </p>
              
              <ul className="space-y-2 ml-4">
                <li>• Protocolos de seguridad robustos en cada eslabón de la cadena logística</li>
                <li>• Cumplimiento integral de normativas aduaneras internacionales</li>
                <li>• Gestión trazable y documentada de mercancías</li>
                <li>• Procesos aduanales más ágiles y controlados en cruces fronterizos</li>
                <li>• Reducción de riesgos operativos mediante controles preventivos</li>
              </ul>
              
              <p>
                Al elegir nuestros servicios, su empresa se integra a una red logística alineada con las mejores prácticas internacionales, fortaleciendo la seguridad, eficiencia y confiabilidad de sus operaciones en el corredor comercial de América del Norte.
              </p>
            </div>
          </div>
          
          {/* Right Half - Logos */}
          <div className="flex flex-col space-y-8">
            <div className="flex items-center justify-center">
              <img 
                src="/src/assets/certification-ctpat.png" 
                alt="CTPAT Certification" 
                className="max-h-32 w-auto"
              />
            </div>
            
            <div className="flex items-center justify-center">
              <img 
                src="/src/assets/certification-oea.png" 
                alt="OEA Certification" 
                className="max-h-32 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;