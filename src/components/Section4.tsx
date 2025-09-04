import React from 'react';
import { Phone, Mail, MapPin, Calendar } from 'lucide-react';

const Section4 = () => {
  return (
    <section id="contacto" className="py-20 bg-brand-brown">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Half - Contact Information */}
          <div className="text-white space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">Contáctanos</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Estamos listos para atender tus necesidades de transporte. 
                Nuestro equipo de especialistas te brindará la mejor solución 
                logística para tu empresa.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-brand-light-blue" />
                <div>
                  <p className="font-semibold">Teléfono</p>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-brand-light-blue" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300">contacto@empresa.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-brand-light-blue" />
                <div>
                  <p className="font-semibold">Dirección</p>
                  <p className="text-gray-300">Av. Principal 123, Ciudad</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Half - Meeting Arrangement Box */}
          <div className="bg-brand-dark-blue rounded-lg p-8 space-y-6">
            <div className="text-center">
              <Calendar className="h-12 w-12 text-brand-light-blue mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                Agenda una Reunión
              </h3>
              <p className="text-gray-300">
                Programa una cita con nuestros especialistas
              </p>
            </div>
            
            <div className="space-y-4 text-white">
              <div className="flex justify-between items-center py-2 border-b border-gray-600">
                <span>Consulta Gratuita</span>
                <span className="text-brand-light-blue">30 min</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-gray-600">
                <span>Análisis de Necesidades</span>
                <span className="text-brand-light-blue">60 min</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-gray-600">
                <span>Propuesta Personalizada</span>
                <span className="text-brand-light-blue">45 min</span>
              </div>
              
              <div className="pt-4">
                <button className="w-full bg-white text-brand-dark-blue font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors">
                  Agendar Ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;