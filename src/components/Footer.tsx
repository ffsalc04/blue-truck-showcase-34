import React from 'react';
import { Phone, Mail, MapPin, FileText, Shield, Info } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-brown py-16 relative overflow-hidden">
      {/* Semi-transparent vector graphic */}
      <div className="absolute left-0 top-0 h-full w-64 opacity-10">
        <div className="h-full w-full bg-white transform -skew-x-12 -translate-x-8"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-brand-light-blue">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-light-blue" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-light-blue" />
                <span>contacto@empresa.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-brand-light-blue" />
                <span>Av. Principal 123, Ciudad</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-brand-light-blue">Servicios</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-brand-light-blue transition-colors">
                Transporte Terrestre
              </a>
              <a href="#" className="block hover:text-brand-light-blue transition-colors">
                Logística Integral
              </a>
              <a href="#" className="block hover:text-brand-light-blue transition-colors">
                Carga Especializada
              </a>
              <a href="#" className="block hover:text-brand-light-blue transition-colors">
                Distribución
              </a>
            </div>
          </div>
          
          {/* Legal */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-brand-light-blue">Legal</h3>
            <div className="space-y-2">
              <a href="#" className="flex items-center gap-2 hover:text-brand-light-blue transition-colors">
                <FileText className="h-4 w-4" />
                Términos y Condiciones
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-brand-light-blue transition-colors">
                <Shield className="h-4 w-4" />
                Política de Privacidad
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-brand-light-blue transition-colors">
                <Info className="h-4 w-4" />
                Política de Cookies
              </a>
            </div>
          </div>
          
          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-brand-light-blue">Empresa</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-brand-light-blue transition-colors">
                Sobre Nosotros
              </a>
              <a href="#" className="block hover:text-brand-light-blue transition-colors">
                Nuestra Historia
              </a>
              <a href="#" className="block hover:text-brand-light-blue transition-colors">
                Certificaciones
              </a>
              <a href="#" className="block hover:text-brand-light-blue transition-colors">
                Trabajar con Nosotros
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-600 text-center text-gray-400">
          <p>&copy; 2024 Empresa de Transporte. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;