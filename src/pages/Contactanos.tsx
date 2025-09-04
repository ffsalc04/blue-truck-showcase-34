import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/contactanos/ContactSection';

const Contactanos = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Contactanos;