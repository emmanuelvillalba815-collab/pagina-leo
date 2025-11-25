import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Boceto',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
        <div className="text-center bg-white p-12 rounded-lg shadow-xl max-w-lg w-full">
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">¡Mensaje Recibido!</h2>
          <p className="text-stone-600 mb-8">
            Gracias por contactarnos, {formData.name}. Hemos recibido tu solicitud sobre "{formData.service}". Nos pondremos en contacto contigo pronto.
          </p>
          <button 
            onClick={() => { setSubmitted(false); setFormData({...formData, message: ''}); }}
            className="text-orange-600 font-semibold hover:text-orange-800"
          >
            Enviar otro mensaje
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">Contáctanos</h2>
          <p className="text-lg text-stone-600 mb-10 leading-relaxed">
            ¿Listo para transformar tu idea en arte? Ya sea un boceto rápido o un enmarcado complejo, estamos aquí para escuchar tu visión.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-stone-900 text-white">
                  <MapPin className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-stone-900">Visita el Taller</h3>
                <p className="mt-1 text-stone-600">Av. de las Artes 123<br />Centro Histórico, CDMX</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-stone-900 text-white">
                  <Mail className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-stone-900">Email</h3>
                <p className="mt-1 text-stone-600">contacto@trazosymarcos.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-stone-900 text-white">
                  <Phone className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-stone-900">Teléfono</h3>
                <p className="mt-1 text-stone-600">+52 (55) 1234-5678</p>
                <p className="text-sm text-stone-500 mt-1">Lunes a Viernes, 10am - 7pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white shadow-xl rounded-sm p-8 sm:p-12 border-t-4 border-orange-600">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-stone-700">Nombre completo</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-sm focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-sm focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-stone-700">Servicio de interés</label>
              <select
                name="service"
                id="service"
                value={formData.service}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-sm focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="Boceto">Boceto Personalizado</option>
                <option value="Dibujo">Dibujo Realista</option>
                <option value="Enmarcado">Servicio de Enmarcado</option>
                <option value="Otro">Otro / Consulta General</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-stone-700">Detalles del pedido</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe el tamaño, estilo o idea que tienes..."
                className="mt-1 block w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-sm focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-4 px-4 border border-transparent rounded-sm shadow-sm text-sm font-medium text-white bg-stone-900 hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900 transition-colors"
            >
              Enviar Solicitud
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};