import React from 'react';
import { Phone, Mail, MapPin, FileText, Shield } from 'lucide-react';
import whiteBoxVector from '@/assets/vectors/white-box.png';

const Footer = () => {
  return (
    <footer className="bg-brand-brown py-16 relative overflow-hidden">
      {/* White box vector graphic */}
      <div className="absolute left-0 top-0 h-full w-[48rem] opacity-10">
        <img 
          src={whiteBoxVector} 
          alt="White Box Vector"
          className="h-full w-full object-contain -translate-x-8"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 text-white">
          {/* Column 1 - Office & Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-brand-light-blue">Nuestra oficina:</h3>
              
              <div className="space-y-2">
                <h4 className="text-lg font-medium">Guadalajara</h4>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-brand-light-blue mt-1 flex-shrink-0" />
                  <span>Av. Circunvalación 1335, Jardines del Country, C.P 44610 Guadalajara, Jal.</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-brand-light-blue">Contacto Directo</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-brand-light-blue" />
                  <span>contact@toregoglobal.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-brand-light-blue" />
                  <span>(+52) 33 4086 0672</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Column 2 - Legal Links */}
          <div className="space-y-6">
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-2 hover:text-brand-light-blue transition-colors">
                <FileText className="h-4 w-4" />
                Términos y Condiciones
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-brand-light-blue transition-colors">
                <Shield className="h-4 w-4" />
                Aviso de Privacidad
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Section - Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-600 text-center text-gray-400">
          <p>&copy; 2025 Torego Global. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;