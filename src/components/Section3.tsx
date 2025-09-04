import React from 'react';
import { Award, FileCheck } from 'lucide-react';

const Section3 = () => {
  return (
    <section id="certificaciones" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Half - Text Content */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-brand-brown">
              Certificaciones y Avales
            </h2>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-brand-blue">
                  Autoridades de Transporte
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Contamos con todas las certificaciones requeridas por las autoridades 
                  nacionales de transporte. Nuestros permisos están vigentes y cumplimos 
                  con todos los requisitos legales para operar en el territorio nacional.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-brand-blue">
                  Estándares de Calidad
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Certificados bajo normas ISO 9001 para gestión de calidad y ISO 14001 
                  para gestión ambiental. Estos estándares nos permiten garantizar 
                  servicios de la más alta calidad mientras cuidamos el medio ambiente.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-brand-blue">
                  Seguridad y Protección
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Avalados por organismos de seguridad especializados en transporte de 
                  carga. Nuestros protocolos de seguridad son auditados regularmente 
                  para mantener los más altos estándares de protección.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Half - Logos */}
          <div className="flex flex-col space-y-8">
            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center h-40">
              <div className="text-center space-y-2">
                <Award className="h-16 w-16 text-brand-blue mx-auto" />
                <p className="text-brand-brown font-semibold">Ministerio de Transporte</p>
                <p className="text-sm text-gray-600">Certificación Nacional</p>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center h-40">
              <div className="text-center space-y-2">
                <FileCheck className="h-16 w-16 text-brand-blue mx-auto" />
                <p className="text-brand-brown font-semibold">ISO Certification</p>
                <p className="text-sm text-gray-600">Calidad Certificada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;