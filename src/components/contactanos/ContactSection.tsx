import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Phone, MessageCircle, X, Calendar } from 'lucide-react';
import cityNightMotion from '@/assets/city-night-motion.jpg';

const ContactSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [volumeWeight, setVolumeWeight] = useState<'volume' | 'weight'>('volume');

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/523340860672', '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
    setShowForm(false);
  };

  return (
    <section className="relative min-h-[120vh] flex items-center py-20">
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
              <span className="text-lg">(+52) 33 4086 0672</span>
            </div>
          </div>
          
          {/* Right Half - Blue Square / Form */}
          <div className="flex justify-center">
            <div 
              className={`bg-brand-blue rounded-lg shadow-2xl transition-all duration-500 ease-in-out ${
                showForm 
                  ? 'w-full max-w-4xl h-auto p-8 animate-scale-in' 
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
                    className="w-full border-white text-white hover:bg-white hover:text-brand-blue hover-scale bg-transparent"
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
                  
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    {/* Basic Contact Info */}
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="Nombre completo"
                        className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                        required
                      />
                      <Input
                        placeholder="Empresa"
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
                        required
                      />
                    </div>

                    {/* Service Section */}
                    <div className="space-y-4 pt-4 border-t border-white/20">
                      <h4 className="text-lg font-semibold text-white mb-3">Información del Servicio</h4>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                          <Select>
                            <SelectTrigger className="bg-white/10 border-white/30 text-white">
                              <SelectValue placeholder="Tipo de Servicio Requerido" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border-gray-200 z-50">
                              <SelectItem value="flete-nacional">Flete Nacional</SelectItem>
                              <SelectItem value="contenedor-puerto">Contenedor por Puerto</SelectItem>
                              <SelectItem value="cruce-fronterizo">Cruce Fronterizo EEUU/CAN</SelectItem>
                              <SelectItem value="otro">Otro</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <Input
                          placeholder="Origen"
                          className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                        />
                        <Input
                          placeholder="Destino"
                          className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                        />

                        <Input
                          placeholder="Tipo de Unidad Requerido (si aplica)"
                          className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                        />

                        <div className="relative">
                          <Input
                            type="date"
                            placeholder="Fecha de Servicio"
                            className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                          />
                          <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300" size={16} />
                        </div>
                      </div>
                    </div>

                    {/* Cargo Type Section */}
                    <div className="space-y-4 pt-4 border-t border-white/20">
                      <h4 className="text-lg font-semibold text-white mb-3">Tipo de Carga</h4>
                      
                      <div className="grid grid-cols-2 gap-6">
                        {/* Volume/Weight Toggle */}
                        <div className="space-y-3">
                          <Label className="text-white text-sm">Estimación de carga:</Label>
                          <div className="flex items-center space-x-2">
                            <button
                              type="button"
                              onClick={() => setVolumeWeight('volume')}
                              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                volumeWeight === 'volume' 
                                  ? 'bg-white text-brand-blue' 
                                  : 'bg-white/20 text-white hover:bg-white/30'
                              }`}
                            >
                              Volumen
                            </button>
                            <button
                              type="button"
                              onClick={() => setVolumeWeight('weight')}
                              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                volumeWeight === 'weight' 
                                  ? 'bg-white text-brand-blue' 
                                  : 'bg-white/20 text-white hover:bg-white/30'
                              }`}
                            >
                              Peso
                            </button>
                          </div>
                          <Input
                            placeholder={volumeWeight === 'volume' ? 'Volumen estimado (m³)' : 'Peso estimado (kg)'}
                            className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                          />
                        </div>

                        <div className="space-y-4">
                          {/* Temperature Control */}
                          <div className="flex items-center justify-between">
                            <Label className="text-white text-sm">¿Requiere temperatura controlada?</Label>
                            <Switch className="data-[state=checked]:bg-white" />
                          </div>

                          {/* Dangerous Cargo */}
                          <div className="flex items-center justify-between">
                            <Label className="text-white text-sm">¿Es carga peligrosa?</Label>
                            <Switch className="data-[state=checked]:bg-white" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Comments Section */}
                    <div className="space-y-3 pt-4 border-t border-white/20">
                      <Label className="text-white text-sm">Comentarios adicionales:</Label>
                      <Textarea
                        placeholder="Ingrese cualquier información adicional sobre su solicitud..."
                        className="bg-white/10 border-white/30 text-white placeholder:text-gray-300 min-h-[100px]"
                        rows={4}
                      />
                    </div>

                    <Button
                      type="submit" 
                      variant="pill-white" 
                      size="lg" 
                      className="w-full mt-8 hover-scale"
                    >
                      Enviar Solicitud
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