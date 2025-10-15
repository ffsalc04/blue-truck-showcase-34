import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContactButton from '@/components/FloatingContactButton';

const Legal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingContactButton />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-brand-blue to-brand-blue/90">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Información Legal
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Términos y Condiciones y Aviso de Privacidad de Tri Transporte Internacional
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Términos y Condiciones */}
          <div className="mb-16" id="terminos">
            <h2 className="text-4xl font-bold text-brand-blue mb-8">
              Términos y Condiciones
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-2xl font-semibold text-brand-blue mb-4">1. Aceptación de Términos</h3>
                <p className="leading-relaxed">
                  Al utilizar los servicios de Tri Transporte Internacional, usted acepta estar sujeto a estos Términos y Condiciones. 
                  Si no está de acuerdo con alguno de estos términos, le recomendamos no utilizar nuestros servicios.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-brand-blue mb-4">2. Servicios Ofrecidos</h3>
                <p className="leading-relaxed">
                  Tri Transporte Internacional ofrece servicios de transporte de carga terrestre, incluyendo operaciones nacionales 
                  e internacionales, transporte de contenedores, carga refrigerada, y otros servicios logísticos relacionados.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-brand-blue mb-4">3. Responsabilidades del Cliente</h3>
                <p className="leading-relaxed">
                  El cliente se compromete a proporcionar información precisa y completa sobre la carga a transportar, incluyendo 
                  peso, dimensiones, naturaleza de la mercancía, y cualquier requisito especial. El cliente es responsable de 
                  asegurar que la mercancía esté debidamente empacada y etiquetada según las normativas aplicables.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-brand-blue mb-4">4. Tarifas y Pagos</h3>
                <p className="leading-relaxed">
                  Las tarifas por nuestros servicios se cotizarán según las características específicas de cada envío. Los pagos 
                  deberán realizarse según los términos acordados en cada contrato de servicio. Nos reservamos el derecho de 
                  modificar nuestras tarifas, notificando previamente a nuestros clientes.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-brand-blue mb-4">5. Limitación de Responsabilidad</h3>
                <p className="leading-relaxed">
                  Tri Transporte Internacional se compromete a manejar la carga con el máximo cuidado. Sin embargo, nuestra 
                  responsabilidad estará limitada según lo establecido en las leyes y regulaciones aplicables de transporte. 
                  Se recomienda que los clientes contraten seguros adicionales para sus mercancías.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-brand-blue mb-4">6. Fuerza Mayor</h3>
                <p className="leading-relaxed">
                  No seremos responsables por retrasos o incumplimientos causados por circunstancias fuera de nuestro control 
                  razonable, incluyendo pero no limitado a desastres naturales, actos de guerra, huelgas, o regulaciones 
                  gubernamentales.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-brand-blue mb-4">7. Modificaciones</h3>
                <p className="leading-relaxed">
                  Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones 
                  entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t-2 border-gray-200 my-16"></div>

          {/* Aviso de Privacidad */}
          <div id="privacidad">
            <h2 className="text-4xl font-bold text-brand-blue mb-8">
              Aviso de Privacidad
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-2xl font-semibold text-brand-blue mb-4">Responsable de la Protección de Datos</h3>
                <p className="leading-relaxed">
                  Tri Transporte Internacional, con domicilio en México, es responsable del tratamiento de sus datos personales.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-brand-blue mb-4">Datos Personales Recabados</h3>
                <p className="leading-relaxed mb-3">
                  Para la prestación de nuestros servicios, podemos recopilar los siguientes datos personales:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Nombre completo</li>
                  <li>Razón social o nombre de la empresa</li>
                  <li>Correo electrónico</li>
                  <li>Número telefónico</li>
                  <li>Información sobre envíos y mercancías</li>
                  <li>Datos de facturación</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-brand-blue mb-4">Finalidades del Tratamiento</h3>
                <p className="leading-relaxed mb-3">
                  Los datos personales que recabamos serán utilizados para las siguientes finalidades:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Prestación de servicios de transporte y logística</li>
                  <li>Comunicación relacionada con los servicios contratados</li>
                  <li>Facturación y gestión de pagos</li>
                  <li>Cumplimiento de obligaciones legales</li>
                  <li>Mejora de nuestros servicios</li>
                  <li>Envío de información sobre nuestros servicios (con su consentimiento)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-brand-blue mb-4">Transferencia de Datos</h3>
                <p className="leading-relaxed">
                  Sus datos personales podrán ser compartidos con autoridades competentes cuando sea requerido por ley, 
                  o con terceros necesarios para la prestación de nuestros servicios (transportistas, agentes aduanales, etc.), 
                  quienes están obligados a mantener la confidencialidad de su información.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-brand-blue mb-4">Derechos ARCO</h3>
                <p className="leading-relaxed">
                  Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales (Derechos ARCO). 
                  Para ejercer estos derechos, puede contactarnos a través del correo electrónico o teléfono proporcionado en nuestro 
                  sitio web.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-brand-blue mb-4">Seguridad de Datos</h3>
                <p className="leading-relaxed">
                  Implementamos medidas de seguridad administrativas, técnicas y físicas para proteger sus datos personales contra 
                  daño, pérdida, alteración, destrucción o uso no autorizado.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-brand-blue mb-4">Cambios al Aviso de Privacidad</h3>
                <p className="leading-relaxed">
                  Nos reservamos el derecho de modificar este aviso de privacidad en cualquier momento. Los cambios serán publicados 
                  en nuestro sitio web y entrarán en vigor inmediatamente después de su publicación.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-brand-blue mb-4">Contacto</h3>
                <p className="leading-relaxed">
                  Para cualquier duda o aclaración sobre este Aviso de Privacidad, puede contactarnos al teléfono (+52) 33 4086 0672 
                  o a través de nuestro formulario de contacto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Legal;
