import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TransportesHero from '@/components/transportes/TransportesHero';
import TransportesSection1 from '@/components/transportes/TransportesSection1';
import TransportesSection2 from '@/components/transportes/TransportesSection2';

const Transportes = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <TransportesHero />
      <TransportesSection1 />
      <TransportesSection2 />
      <Footer />
    </div>
  );
};

export default Transportes;