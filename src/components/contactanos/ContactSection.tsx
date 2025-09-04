import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, MessageCircle, X } from 'lucide-react';
import cityNightMotion from '@/assets/city-night-motion.jpg';

const ContactSection = () => {
  const [showForm, setShowForm] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
    setShowForm(false);
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cityNightMotion})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Half - Title and Subtitle */}
          <div className="text-white space-y-6">
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              Contáctanos
            </h1>
            <p className="text-xl text-gray-200 max-w-lg leading-relaxed">
              Estamos aquí para ayudarte. Puedes contactarnos a través de WhatsApp 
              para respuestas inmediatas o completar nuestro formulario de contacto 
              para consultas más detalladas.
            </p>
            <div className="flex items-center space-x-4 text-brand-light-blue">
              <Phone size={24} />
              <span className="text-lg">+1 (555) 123-4567</span>
            </div>
          </div>
          
          {/* Right Half - Blue Square / Form */}
          <div className="flex justify-center">
            <div 
              className={`bg-brand-blue rounded-lg shadow-2xl transition-all duration-500 ease-in-out ${
                showForm 
                  ? 'w-full max-w-md h-auto p-8 animate-scale-in' 
                  : 'w-80 h-80 p-8 flex flex-col justify-center animate-fade-in'
              }`}
            >
              {!showForm ? (
                /* Initial State - Contact Options */
                <div className="text-center text-white space-y-6">
                  <h3 className="text-2xl font-bold mb-6">
                    ¿Cómo prefieres contactarnos?
                  </h3>
                  
                  <Button 
                    onClick={handleWhatsAppClick}
                    variant="pill-white" 
                    size="lg" 
                    className="w-full mb-4 hover-scale"
                  >
                    <MessageCircle className="mr-2" size={20} />
                    WhatsApp
                  </Button>
                  
                  <Button 
                    onClick={() => setShowForm(true)}
                    variant="outline" 
                    size="lg" 
                    className="w-full border-white text-white hover:bg-white hover:text-brand-blue hover-scale"
                  >
                    Formulario de Contacto
                  </Button>
                </div>
              ) : (
                /* Expanded State - Contact Form */
                <div className="text-white animate-fade-in">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold">
                      Formulario de Contacto
                    </h3>
                    <Button
                      onClick={() => setShowForm(false)}
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/20 p-2"
                    >
                      <X size={20} />
                    </Button>
                  </div>
                  
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <Input
                      placeholder="Nombre completo"
                      className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Correo electrónico"
                      className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                      required
                    />
                    <Input
                      type="tel"
                      placeholder="Teléfono"
                      className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                    />
                    <Textarea
                      placeholder="Mensaje"
                      rows={4}
                      className="bg-white/10 border-white/30 text-white placeholder:text-gray-300 resize-none"
                      required
                    />
                    <Button 
                      type="submit" 
                      variant="pill-white" 
                      size="lg" 
                      className="w-full mt-6 hover-scale"
                    >
                      Enviar Mensaje
                    </Button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;