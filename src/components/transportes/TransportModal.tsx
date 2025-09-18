import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import whiteBoxVector from '@/assets/vectors/white-box.png';

interface TransportModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  serviceImage: string;
}

const TransportModal = ({ isOpen, onClose, title, description, serviceImage }: TransportModalProps) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleContactClick = () => {
    navigate('/contactanos');
    onClose();
  };

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
        {/* Brown Background */}
        <div className="absolute inset-0 bg-brand-brown rounded-lg overflow-hidden">
          {/* White Box Vector on Right Half */}
          <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center">
            <img 
              src={whiteBoxVector} 
              alt="White Box Vector"
              className="w-[120%] h-[120%] object-contain opacity-20"
            />
            
            {/* Service Image on top of vector */}
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <img 
                src={serviceImage} 
                alt={title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
        
        {/* Close Button */}
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          variant="ghost"
          size="sm"
          className="absolute top-6 right-6 z-10 text-white hover:bg-white/20 p-3"
        >
          <X size={24} />
        </Button>
        
        {/* Content - Left Half */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-1/2 p-12">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-bold text-white mb-8">
                {title}
              </h2>
              <p className="text-brand-cream text-xl leading-relaxed mb-10">
                {description}
              </p>
              <Button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleContactClick();
                }}
                variant="pill-white" 
                size="lg"
                className="hover-scale"
              >
                Empieza Hoy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportModal;