import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { href: '/', label: 'Inicio', key: 'inicio' },
    { href: '/quienes-somos', label: 'Quienes Somos', key: 'nosotros' },
    { href: '/servicios', label: 'Nuestros Servicios', key: 'servicios' },
    { href: '/transportes', label: 'Transportes', key: 'transportes' },
    { href: '/contactanos', label: 'Contacto', key: 'contactanos' }
  ];

  const getVisibleNavItems = () => {
    return navItems.filter(item => {
      // Always show Inicio
      if (item.key === 'inicio') return true;
      
      // Hide current page's button
      if (currentPath === '/servicios' && item.key === 'servicios') return false;
      if (currentPath === '/transportes' && item.key === 'transportes') return false;
      if (currentPath === '/quienes-somos' && item.key === 'nosotros') return false;
      if (currentPath === '/contactanos' && item.key === 'contactanos') return false;
      if (currentPath === '/' && item.key === 'inicio') return true; // Still show on homepage
      
      return true;
    });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Company Logo" className="h-8 w-auto cursor-pointer" />
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {getVisibleNavItems().map((item) => (
            <Link 
              key={item.key}
              to={item.href} 
              className="text-white hover:text-brand-light-blue transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;