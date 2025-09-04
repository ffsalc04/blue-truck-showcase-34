import React from 'react';
import truckDriverBg from '@/assets/truck-driver.jpg';

const ServiciosSection2 = () => {
  const teamHighlights = [
    "Nos dedicamos a construir relaciones sólidas y duraderas.",
    "Buscamos la excelencia, enfrentando retos difíciles con determinación.",
    "Llevamos cada proyecto con cuidado y atención hasta el final."
  ];

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${truckDriverBg})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="flex min-h-screen">
          {/* Left side - transparent to show background */}
          <div className="w-1/2"></div>
          
          {/* Right side - irregular hexagon-like brown background */}
          <div className="w-1/2 relative">
            {/* Hexagon-like shape using clip-path */}
            <div 
              className="absolute inset-0 bg-brand-brown"
              style={{
                clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)'
              }}
            ></div>
            
            {/* Content over the brown background */}
            <div className="relative z-10 h-full flex flex-col justify-center px-12 py-16">
              <div className="space-y-6">
                {teamHighlights.map((highlight, index) => (
                  <div key={index} className="bg-brand-blue p-6 rounded-lg shadow-lg">
                    <p className="text-white text-lg font-medium">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiciosSection2;