import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  backgroundImage: string;
}

const ServiceModal = ({ isOpen, onClose, title, description, backgroundImage }: ServiceModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div 
        className="relative w-[95%] h-[90%] max-w-7xl animate-fade-in cursor-pointer"
        onClick={onClose}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Close Button */}
        <Button
          onClick={onClose}
          variant="ghost"
          size="sm"
          className="absolute top-6 right-6 z-10 text-white hover:bg-white/20 p-3"
        >
          <X size={24} />
        </Button>
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="flex">
              {/* Left Half - Brown Box with Content */}
              <div className="w-1/2">
                <div className="bg-brand-brown/45 backdrop-blur-sm p-12 rounded-lg max-w-2xl">
                  <h2 className="text-4xl font-bold text-white mb-6">
                    {title}
                  </h2>
                  <p className="text-brand-cream text-lg leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
              
              {/* Right Half - Empty to show background */}
              <div className="w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;