import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import whiteBoxVector from '@/assets/vectors/white-box.png';
import bannerCajaRefrigerada from '@/assets/banners/banner-caja-refrigerada.png';
import bannerCajaSeca from '@/assets/banners/banner-caja-seca.png';
import bannerCargaParcial from '@/assets/banners/banner-carga-parcial.png';
import bannerContenedores from '@/assets/banners/banner-contenedores.png';
import bannerLtl from '@/assets/banners/banner-ltl.png';
import bannerOperacionesNacionales from '@/assets/banners/banner-operaciones-nacionales.png';
import bannerOperacionesTransfronterizas from '@/assets/banners/banner-operaciones-transfronterizas.png';
import bannerRemolquePlataforma from '@/assets/banners/banner-remolque-de-plataforma.png';

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

  // Map service titles to banner images
  const getBannerImage = (serviceTitle: string) => {
    const bannerMap: Record<string, string> = {
      "Caja refrigerada": bannerCajaRefrigerada,
      "Operaciones Transfronterizas": bannerOperacionesTransfronterizas,
      "Operaciones Nacionales": bannerOperacionesNacionales,
      "Remolque de Plataforma": bannerRemolquePlataforma,
      "Caja seca": bannerCajaSeca,
      "LTL": bannerLtl,
      "Carga Parcial": bannerCargaParcial,
      "Contenedores": bannerContenedores,
    };
    return bannerMap[serviceTitle] || bannerCajaSeca;
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
              className="w-[400%] h-[500%] object-contain opacity-30"
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
              {/* Banner Image */}
              <div className="mb-6">
                <img 
                  src={getBannerImage(title)} 
                  alt={`${title} banner`}
                  className="w-32 h-auto object-contain"
                />
              </div>
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