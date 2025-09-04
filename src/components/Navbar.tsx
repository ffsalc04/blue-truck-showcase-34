import React from 'react';
import logo from '@/assets/logo.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50" style={{ backgroundColor: 'rgba(69, 93, 123, 0.45)' }}>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Company Logo" className="h-8 w-auto" />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#servicios" className="text-white hover:text-brand-light-blue transition-colors">
            Servicios
          </a>
          <a href="#nosotros" className="text-white hover:text-brand-light-blue transition-colors">
            Nosotros
          </a>
          <a href="#certificaciones" className="text-white hover:text-brand-light-blue transition-colors">
            Certificaciones
          </a>
          <a href="#contacto" className="text-white hover:text-brand-light-blue transition-colors">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;