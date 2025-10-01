import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingContactButton = () => {
  const handleClick = () => {
    // WhatsApp number - adjust this to your actual number
    const phoneNumber = '5215512345678'; // Format: country code + number without + or spaces
    const message = encodeURIComponent('Hola, me gustaría obtener más información sobre sus servicios.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      variant="default"
      size="icon"
      aria-label="Contact us via WhatsApp"
    >
      <Phone className="h-6 w-6" />
    </Button>
  );
};

export default FloatingContactButton;
