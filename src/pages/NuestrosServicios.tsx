import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiciosHero from '@/components/servicios/ServiciosHero';
import ServiciosSection1 from '@/components/servicios/ServiciosSection1';
import ServiciosSection2 from '@/components/servicios/ServiciosSection2';
import ServiciosSection3 from '@/components/servicios/ServiciosSection3';
import ServiciosSection4 from '@/components/servicios/ServiciosSection4';

const NuestrosServicios = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ServiciosHero />
      <ServiciosSection1 />
      <ServiciosSection2 />
      <ServiciosSection3 />
      <ServiciosSection4 />
      <Footer />
    </div>
  );
};

export default NuestrosServicios;