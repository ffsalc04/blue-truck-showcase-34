import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Divider from '@/components/Divider';
import Section1 from '@/components/Section1';
import Section2 from '@/components/Section2';
import Section3 from '@/components/Section3';
import Section4 from '@/components/Section4';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Divider />
      <Section2 />
      <Section1 />
      <Divider />
      <Section3 />
      <Divider />
      <Section4 />
      <Divider />
      <Footer />
    </div>
  );
};

export default Index;
