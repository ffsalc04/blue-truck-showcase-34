import React from 'react';
import { Button } from '@/components/ui/button';
import heroTruck from '@/assets/hero-truck.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroTruck})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-5xl lg:text-6xl font-semibold leading-tight">
              Aliados en logística portuaria, nacional y fronteriza: conectamos México con EE.UU. y Canadá
            </h1>
            <Button variant="pill" size="lg" className="mt-8 rounded-full px-8">
              Contáctanos →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;