import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import shippingBoxVector from '@/assets/shipping-box-vector.svg';

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
          {/* Shipping Box Vector on Right Half */}
          <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center">
            <div 
              className="w-full h-full opacity-10"
              dangerouslySetInnerHTML={{ __html: `
                <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
                  <g fill="white" stroke="white" stroke-width="2" stroke-linejoin="round">
                    <path d="M80 160 L80 320 L320 320 L320 160 L320 120 L200 120 L200 100 L180 100 L180 120 L80 120 Z" fill-opacity="0.1"/>
                    <path d="M320 160 L340 140 L340 300 L320 320" fill-opacity="0.05"/>
                    <path d="M80 320 L100 300 L340 300 L320 320" fill-opacity="0.05"/>
                    <path d="M80 120 L60 100 L240 100 L260 120" fill-opacity="0.08"/>
                    <path d="M260 120 L280 100 L360 100 L340 120 L320 120" fill-opacity="0.08"/>
                    <rect x="180" y="95" width="40" height="10" rx="5" fill-opacity="0.15"/>
                    <line x1="80" y1="160" x2="320" y2="160" stroke-opacity="0.3"/>
                    <line x1="200" y1="120" x2="200" y2="160" stroke-opacity="0.3"/>
                    <line x1="140" y1="120" x2="140" y2="320" stroke-opacity="0.2"/>
                    <line x1="260" y1="120" x2="260" y2="320" stroke-opacity="0.2"/>
                    <g transform="translate(180, 220)" stroke-opacity="0.4" fill-opacity="0.1">
                      <circle cx="20" cy="20" r="25" stroke-width="3"/>
                      <path d="M10 35 L30 35 M20 10 L20 30" stroke-width="3"/>
                    </g>
                  </g>
                </svg>
              ` }}
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