import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Consider scrolled if past 400px (typical hero height)
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className="fixed top-0 w-full z-50 bg-primary/20 backdrop-blur-lg border-b border-white/20">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src={logo} 
              alt="Company Logo" 
              className={`h-8 w-auto cursor-pointer drop-shadow-lg transition-all duration-300 ${
                isScrolled ? '' : 'brightness-0 invert'
              }`} 
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
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

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-brand-blue w-[300px]">
            <div className="flex flex-col space-y-6 mt-8">
              {getVisibleNavItems().map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-lg font-medium hover:text-brand-light-blue transition-colors py-2"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;