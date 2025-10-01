import React from 'react';
import { MessageCircle } from 'lucide-react';
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
      className="group fixed bottom-6 right-6 z-50 h-14 rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out hover:brightness-110 w-14 hover:w-auto hover:px-6 flex items-center justify-center"
      variant="default"
      aria-label="Contact us via WhatsApp"
    >
      <div className="flex items-center justify-center">
        <MessageCircle className="h-6 w-6 flex-shrink-0" fill="currentColor" />
        <span className="w-0 overflow-hidden opacity-0 group-hover:w-24 group-hover:opacity-100 group-hover:ml-2 transition-all duration-500 ease-in-out whitespace-nowrap">
          Empieza Hoy
        </span>
      </div>
    </Button>
  );
};

export default FloatingContactButton;
