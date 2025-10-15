import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Phone, MessageCircle, X, Calendar as CalendarIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import cityNightMotion from '@/assets/city-night-motion.jpg';

const ContactSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [volumeWeight, setVolumeWeight] = useState<'volume' | 'weight'>('volume');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [temperaturaControlada, setTemperaturaControlada] = useState(false);
  const [cargaPeligrosa, setCargaPeligrosa] = useState(false);
  const [date, setDate] = useState<Date>();
  const [phone, setPhone] = useState('');
  const { toast } = useToast();

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(value);
  };

  const formatPhone = (value: string) => {
    if (value.length <= 2) return value;
    if (value.length <= 6) return `${value.slice(0, 2)} ${value.slice(2)}`;
    return `${value.slice(0, 2)} ${value.slice(2, 6)} ${value.slice(6)}`;
  };

  const validateEmail = (e: React.FocusEvent<HTMLInputElement>) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (e.target.value && !emailPattern.test(e.target.value)) {
      e.target.setCustomValidity('Por favor ingrese un correo electrónico válido con dominio (ejemplo: usuario@dominio.com)');
    } else {
      e.target.setCustomValidity('');
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/523340860672', '_blank');
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      
      // Add switch values explicitly
      formData.set('temperaturaControlada', temperaturaControlada ? 'Sí' : 'No');
      formData.set('cargaPeligrosa', cargaPeligrosa ? 'Sí' : 'No');
      formData.set('tipoCarga', volumeWeight === 'volume' ? 'Volumen' : 'Peso');
      
      // Format phone number
      formData.set('telefono', phone);
      
      // Format date
      if (date) {
        formData.set('fechaServicio', format(date, 'yyyy-MM-dd'));
      }
      
      // Append unit to cargo estimation
      const estimacionCarga = formData.get('estimacionCarga');
      if (estimacionCarga) {
        const unit = volumeWeight === 'volume' ? 'm³' : 'kg';
        formData.set('estimacionCarga', `${estimacionCarga} ${unit}`);
      }

      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbxNd4NPqZE7yjXxf45OckXl73bwBtngC7ATW7pOgtOZzlPXjyWGPDAxc6brLE2DfsnV/exec',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      // Success - hide form and show success message
      setShowForm(false);
      toast({
        title: "¡Solicitud enviada!",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      
      // Reset form states
      setTemperaturaControlada(false);
      setCargaPeligrosa(false);
      setVolumeWeight('volume');
      setDate(undefined);
      setPhone('');
      e.currentTarget.reset();
    } catch (error) {
      // Error - show error message but keep form visible
      toast({
        title: "Error al enviar",
        description: "Hubo un problema al enviar tu solicitud. Por favor, intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                  
                  <form 
                    method="POST" 
                    action="https://script.google.com/macros/s/AKfycbxNd4NPqZE7yjXxf45OckXl73bwBtngC7ATW7pOgtOZzlPXjyWGPDAxc6brLE2DfsnV/exec"
                    onSubmit={handleFormSubmit} 
                    className="space-y-6"
                  >
                    {/* Basic Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        name="nombre"
                        placeholder="Nombre completo *"
                        className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                        pattern="[A-Za-zÀ-ÿ\s]+"
                        title="Solo se permiten letras"
                        required
                      />
                      <Input
                        name="empresa"
                        placeholder="Empresa"
                        className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                        pattern="[A-Za-z0-9À-ÿ\s]+"
                        title="Solo se permiten letras y números"
                        required
                      />
                      <Input
                        name="email"
                        type="email"
                        placeholder="Correo electrónico *"
                        className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                        onBlur={validateEmail}
                        onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                        title="Ingrese un correo electrónico válido con dominio"
                        required
                      />
                      <Input
                        name="telefono"
                        type="tel"
                        placeholder="Teléfono *"
                        className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                        value={formatPhone(phone)}
                        onChange={handlePhoneChange}
                        pattern="\d{2}\s\d{4}\s\d{4}"
                        title="Ingrese un número de 10 dígitos"
                        required
                      />
                    </div>

                    {/* Service Section */}
                    <div className="space-y-4 pt-4 border-t border-white/20">
                      <h4 className="text-lg font-semibold text-white mb-3">Información del Servicio</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="col-span-2">
                          <Select name="tipoServicio" required>
                            <SelectTrigger className="bg-white/10 border-white/30 text-white">
                              <SelectValue placeholder="Tipo de Servicio Requerido *" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border-gray-200 z-50">
                              <SelectItem value="flete-nacional">Flete Nacional</SelectItem>
                              <SelectItem value="contenedor-puerto">Contenedor por Puerto</SelectItem>
                              <SelectItem value="cruce-fronterizo">Cruce Fronterizo EEUU/CAN</SelectItem>
                              <SelectItem value="otro">Otro</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <Select name="origen">
                          <SelectTrigger className="bg-white/10 border-white/30 text-white">
                            <SelectValue placeholder="Origen" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border-gray-200 z-50 max-h-[300px]">
                            <SelectGroup>
                              <SelectLabel>México</SelectLabel>
                              <SelectItem value="Aguascalientes">Aguascalientes</SelectItem>
                              <SelectItem value="Baja California">Baja California</SelectItem>
                              <SelectItem value="Baja California Sur">Baja California Sur</SelectItem>
                              <SelectItem value="Campeche">Campeche</SelectItem>
                              <SelectItem value="Chiapas">Chiapas</SelectItem>
                              <SelectItem value="Chihuahua">Chihuahua</SelectItem>
                              <SelectItem value="Coahuila">Coahuila</SelectItem>
                              <SelectItem value="Colima">Colima</SelectItem>
                              <SelectItem value="Durango">Durango</SelectItem>
                              <SelectItem value="Guanajuato">Guanajuato</SelectItem>
                              <SelectItem value="Guerrero">Guerrero</SelectItem>
                              <SelectItem value="Hidalgo">Hidalgo</SelectItem>
                              <SelectItem value="Jalisco">Jalisco</SelectItem>
                              <SelectItem value="México">México</SelectItem>
                              <SelectItem value="Michoacán">Michoacán</SelectItem>
                              <SelectItem value="Morelos">Morelos</SelectItem>
                              <SelectItem value="Nayarit">Nayarit</SelectItem>
                              <SelectItem value="Nuevo León">Nuevo León</SelectItem>
                              <SelectItem value="Oaxaca">Oaxaca</SelectItem>
                              <SelectItem value="Puebla">Puebla</SelectItem>
                              <SelectItem value="Querétaro">Querétaro</SelectItem>
                              <SelectItem value="Quintana Roo">Quintana Roo</SelectItem>
                              <SelectItem value="San Luis Potosí">San Luis Potosí</SelectItem>
                              <SelectItem value="Sinaloa">Sinaloa</SelectItem>
                              <SelectItem value="Sonora">Sonora</SelectItem>
                              <SelectItem value="Tabasco">Tabasco</SelectItem>
                              <SelectItem value="Tamaulipas">Tamaulipas</SelectItem>
                              <SelectItem value="Tlaxcala">Tlaxcala</SelectItem>
                              <SelectItem value="Veracruz">Veracruz</SelectItem>
                              <SelectItem value="Yucatán">Yucatán</SelectItem>
                              <SelectItem value="Zacatecas">Zacatecas</SelectItem>
                              <SelectItem value="Ciudad de México">Ciudad de México</SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                              <SelectLabel>USA</SelectLabel>
                              <SelectItem value="Alabama">Alabama</SelectItem>
                              <SelectItem value="Alaska">Alaska</SelectItem>
                              <SelectItem value="Arizona">Arizona</SelectItem>
                              <SelectItem value="Arkansas">Arkansas</SelectItem>
                              <SelectItem value="California">California</SelectItem>
                              <SelectItem value="Colorado">Colorado</SelectItem>
                              <SelectItem value="Connecticut">Connecticut</SelectItem>
                              <SelectItem value="Delaware">Delaware</SelectItem>
                              <SelectItem value="Florida">Florida</SelectItem>
                              <SelectItem value="Georgia">Georgia</SelectItem>
                              <SelectItem value="Hawaii">Hawaii</SelectItem>
                              <SelectItem value="Idaho">Idaho</SelectItem>
                              <SelectItem value="Illinois">Illinois</SelectItem>
                              <SelectItem value="Indiana">Indiana</SelectItem>
                              <SelectItem value="Iowa">Iowa</SelectItem>
                              <SelectItem value="Kansas">Kansas</SelectItem>
                              <SelectItem value="Kentucky">Kentucky</SelectItem>
                              <SelectItem value="Louisiana">Louisiana</SelectItem>
                              <SelectItem value="Maine">Maine</SelectItem>
                              <SelectItem value="Maryland">Maryland</SelectItem>
                              <SelectItem value="Massachusetts">Massachusetts</SelectItem>
                              <SelectItem value="Michigan">Michigan</SelectItem>
                              <SelectItem value="Minnesota">Minnesota</SelectItem>
                              <SelectItem value="Mississippi">Mississippi</SelectItem>
                              <SelectItem value="Missouri">Missouri</SelectItem>
                              <SelectItem value="Montana">Montana</SelectItem>
                              <SelectItem value="Nebraska">Nebraska</SelectItem>
                              <SelectItem value="Nevada">Nevada</SelectItem>
                              <SelectItem value="New Hampshire">New Hampshire</SelectItem>
                              <SelectItem value="New Jersey">New Jersey</SelectItem>
                              <SelectItem value="New Mexico">New Mexico</SelectItem>
                              <SelectItem value="New York">New York</SelectItem>
                              <SelectItem value="North Carolina">North Carolina</SelectItem>
                              <SelectItem value="North Dakota">North Dakota</SelectItem>
                              <SelectItem value="Ohio">Ohio</SelectItem>
                              <SelectItem value="Oklahoma">Oklahoma</SelectItem>
                              <SelectItem value="Oregon">Oregon</SelectItem>
                              <SelectItem value="Pennsylvania">Pennsylvania</SelectItem>
                              <SelectItem value="Rhode Island">Rhode Island</SelectItem>
                              <SelectItem value="South Carolina">South Carolina</SelectItem>
                              <SelectItem value="South Dakota">South Dakota</SelectItem>
                              <SelectItem value="Tennessee">Tennessee</SelectItem>
                              <SelectItem value="Texas">Texas</SelectItem>
                              <SelectItem value="Utah">Utah</SelectItem>
                              <SelectItem value="Vermont">Vermont</SelectItem>
                              <SelectItem value="Virginia">Virginia</SelectItem>
                              <SelectItem value="Washington">Washington</SelectItem>
                              <SelectItem value="West Virginia">West Virginia</SelectItem>
                              <SelectItem value="Wisconsin">Wisconsin</SelectItem>
                              <SelectItem value="Wyoming">Wyoming</SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                              <SelectLabel>Canada</SelectLabel>
                              <SelectItem value="Alberta">Alberta</SelectItem>
                              <SelectItem value="British Columbia">British Columbia</SelectItem>
                              <SelectItem value="Manitoba">Manitoba</SelectItem>
                              <SelectItem value="New Brunswick">New Brunswick</SelectItem>
                              <SelectItem value="Newfoundland and Labrador">Newfoundland and Labrador</SelectItem>
                              <SelectItem value="Nova Scotia">Nova Scotia</SelectItem>
                              <SelectItem value="Ontario">Ontario</SelectItem>
                              <SelectItem value="Prince Edward Island">Prince Edward Island</SelectItem>
                              <SelectItem value="Quebec">Quebec</SelectItem>
                              <SelectItem value="Saskatchewan">Saskatchewan</SelectItem>
                            </SelectGroup>
                            <SelectItem value="Otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                        <Select name="destino">
                          <SelectTrigger className="bg-white/10 border-white/30 text-white">
                            <SelectValue placeholder="Destino" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border-gray-200 z-50 max-h-[300px]">
                            <SelectGroup>
                              <SelectLabel>México</SelectLabel>
                              <SelectItem value="Aguascalientes">Aguascalientes</SelectItem>
                              <SelectItem value="Baja California">Baja California</SelectItem>
                              <SelectItem value="Baja California Sur">Baja California Sur</SelectItem>
                              <SelectItem value="Campeche">Campeche</SelectItem>
                              <SelectItem value="Chiapas">Chiapas</SelectItem>
                              <SelectItem value="Chihuahua">Chihuahua</SelectItem>
                              <SelectItem value="Coahuila">Coahuila</SelectItem>
                              <SelectItem value="Colima">Colima</SelectItem>
                              <SelectItem value="Durango">Durango</SelectItem>
                              <SelectItem value="Guanajuato">Guanajuato</SelectItem>
                              <SelectItem value="Guerrero">Guerrero</SelectItem>
                              <SelectItem value="Hidalgo">Hidalgo</SelectItem>
                              <SelectItem value="Jalisco">Jalisco</SelectItem>
                              <SelectItem value="México">México</SelectItem>
                              <SelectItem value="Michoacán">Michoacán</SelectItem>
                              <SelectItem value="Morelos">Morelos</SelectItem>
                              <SelectItem value="Nayarit">Nayarit</SelectItem>
                              <SelectItem value="Nuevo León">Nuevo León</SelectItem>
                              <SelectItem value="Oaxaca">Oaxaca</SelectItem>
                              <SelectItem value="Puebla">Puebla</SelectItem>
                              <SelectItem value="Querétaro">Querétaro</SelectItem>
                              <SelectItem value="Quintana Roo">Quintana Roo</SelectItem>
                              <SelectItem value="San Luis Potosí">San Luis Potosí</SelectItem>
                              <SelectItem value="Sinaloa">Sinaloa</SelectItem>
                              <SelectItem value="Sonora">Sonora</SelectItem>
                              <SelectItem value="Tabasco">Tabasco</SelectItem>
                              <SelectItem value="Tamaulipas">Tamaulipas</SelectItem>
                              <SelectItem value="Tlaxcala">Tlaxcala</SelectItem>
                              <SelectItem value="Veracruz">Veracruz</SelectItem>
                              <SelectItem value="Yucatán">Yucatán</SelectItem>
                              <SelectItem value="Zacatecas">Zacatecas</SelectItem>
                              <SelectItem value="Ciudad de México">Ciudad de México</SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                              <SelectLabel>USA</SelectLabel>
                              <SelectItem value="Alabama">Alabama</SelectItem>
                              <SelectItem value="Alaska">Alaska</SelectItem>
                              <SelectItem value="Arizona">Arizona</SelectItem>
                              <SelectItem value="Arkansas">Arkansas</SelectItem>
                              <SelectItem value="California">California</SelectItem>
                              <SelectItem value="Colorado">Colorado</SelectItem>
                              <SelectItem value="Connecticut">Connecticut</SelectItem>
                              <SelectItem value="Delaware">Delaware</SelectItem>
                              <SelectItem value="Florida">Florida</SelectItem>
                              <SelectItem value="Georgia">Georgia</SelectItem>
                              <SelectItem value="Hawaii">Hawaii</SelectItem>
                              <SelectItem value="Idaho">Idaho</SelectItem>
                              <SelectItem value="Illinois">Illinois</SelectItem>
                              <SelectItem value="Indiana">Indiana</SelectItem>
                              <SelectItem value="Iowa">Iowa</SelectItem>
                              <SelectItem value="Kansas">Kansas</SelectItem>
                              <SelectItem value="Kentucky">Kentucky</SelectItem>
                              <SelectItem value="Louisiana">Louisiana</SelectItem>
                              <SelectItem value="Maine">Maine</SelectItem>
                              <SelectItem value="Maryland">Maryland</SelectItem>
                              <SelectItem value="Massachusetts">Massachusetts</SelectItem>
                              <SelectItem value="Michigan">Michigan</SelectItem>
                              <SelectItem value="Minnesota">Minnesota</SelectItem>
                              <SelectItem value="Mississippi">Mississippi</SelectItem>
                              <SelectItem value="Missouri">Missouri</SelectItem>
                              <SelectItem value="Montana">Montana</SelectItem>
                              <SelectItem value="Nebraska">Nebraska</SelectItem>
                              <SelectItem value="Nevada">Nevada</SelectItem>
                              <SelectItem value="New Hampshire">New Hampshire</SelectItem>
                              <SelectItem value="New Jersey">New Jersey</SelectItem>
                              <SelectItem value="New Mexico">New Mexico</SelectItem>
                              <SelectItem value="New York">New York</SelectItem>
                              <SelectItem value="North Carolina">North Carolina</SelectItem>
                              <SelectItem value="North Dakota">North Dakota</SelectItem>
                              <SelectItem value="Ohio">Ohio</SelectItem>
                              <SelectItem value="Oklahoma">Oklahoma</SelectItem>
                              <SelectItem value="Oregon">Oregon</SelectItem>
                              <SelectItem value="Pennsylvania">Pennsylvania</SelectItem>
                              <SelectItem value="Rhode Island">Rhode Island</SelectItem>
                              <SelectItem value="South Carolina">South Carolina</SelectItem>
                              <SelectItem value="South Dakota">South Dakota</SelectItem>
                              <SelectItem value="Tennessee">Tennessee</SelectItem>
                              <SelectItem value="Texas">Texas</SelectItem>
                              <SelectItem value="Utah">Utah</SelectItem>
                              <SelectItem value="Vermont">Vermont</SelectItem>
                              <SelectItem value="Virginia">Virginia</SelectItem>
                              <SelectItem value="Washington">Washington</SelectItem>
                              <SelectItem value="West Virginia">West Virginia</SelectItem>
                              <SelectItem value="Wisconsin">Wisconsin</SelectItem>
                              <SelectItem value="Wyoming">Wyoming</SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                              <SelectLabel>Canada</SelectLabel>
                              <SelectItem value="Alberta">Alberta</SelectItem>
                              <SelectItem value="British Columbia">British Columbia</SelectItem>
                              <SelectItem value="Manitoba">Manitoba</SelectItem>
                              <SelectItem value="New Brunswick">New Brunswick</SelectItem>
                              <SelectItem value="Newfoundland and Labrador">Newfoundland and Labrador</SelectItem>
                              <SelectItem value="Nova Scotia">Nova Scotia</SelectItem>
                              <SelectItem value="Ontario">Ontario</SelectItem>
                              <SelectItem value="Prince Edward Island">Prince Edward Island</SelectItem>
                              <SelectItem value="Quebec">Quebec</SelectItem>
                              <SelectItem value="Saskatchewan">Saskatchewan</SelectItem>
                            </SelectGroup>
                            <SelectItem value="Otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>

                        <Input
                          name="tipoUnidad"
                          placeholder="Tipo de Unidad Requerido (si aplica)"
                          className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                        />

                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white",
                                !date && "text-gray-300"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, 'dd/MM/yyyy') : "Fecha de Servicio"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                              initialFocus
                              className="pointer-events-auto"
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    {/* Cargo Type Section */}
                    <div className="space-y-4 pt-4 border-t border-white/20">
                      <h4 className="text-lg font-semibold text-white mb-3">Tipo de Carga</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                            name="estimacionCarga"
                            type="text"
                            inputMode="decimal"
                            pattern="[0-9]*\.?[0-9]*"
                            placeholder={volumeWeight === 'volume' ? 'Volumen estimado (m³)' : 'Peso estimado (kg)'}
                            className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                            onInput={(e) => {
                              const target = e.target as HTMLInputElement;
                              target.value = target.value.replace(/[^\d.]/g, '');
                            }}
                          />
                        </div>

                        <div className="space-y-4">
                          {/* Temperature Control */}
                          <div className="flex items-center justify-between">
                            <Label className="text-white text-sm">¿Requiere temperatura controlada?</Label>
                            <Switch 
                              checked={temperaturaControlada}
                              onCheckedChange={setTemperaturaControlada}
                              className="data-[state=checked]:bg-green-500" 
                            />
                          </div>

                          {/* Dangerous Cargo */}
                          <div className="flex items-center justify-between">
                            <Label className="text-white text-sm">¿Es carga peligrosa?</Label>
                            <Switch 
                              checked={cargaPeligrosa}
                              onCheckedChange={setCargaPeligrosa}
                              className="data-[state=checked]:bg-green-500" 
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Comments Section */}
                    <div className="space-y-3 pt-4 border-t border-white/20">
                      <Label className="text-white text-sm">Comentarios adicionales:</Label>
                      <Textarea
                        name="comentarios"
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
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
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