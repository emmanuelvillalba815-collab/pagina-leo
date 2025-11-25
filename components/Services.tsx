import React from 'react';
import { ServiceItem } from '../types';
import { PenTool, Layers, Frame, Scissors, Ruler, Heart } from 'lucide-react';

const services: ServiceItem[] = [
  {
    title: 'Bocetos Express',
    description: 'Capturamos la esencia en minutos. Ideal para regalos rápidos, ideas de diseño o recuerdos de eventos.',
    priceRange: 'Desde $25',
    icon: <PenTool className="w-8 h-8" />,
  },
  {
    title: 'Dibujo Realista',
    description: 'Obras de alto detalle en grafito o carboncillo. Retratos de personas y mascotas con acabado fotográfico.',
    priceRange: 'Desde $120',
    icon: <Heart className="w-8 h-8" />,
  },
  {
    title: 'Enmarcado a Medida',
    description: 'Marcos construidos desde cero para adaptarse a tu obra. Maderas nobles, aluminio y acabados vintage.',
    priceRange: 'Cotizar',
    icon: <Frame className="w-8 h-8" />,
  },
  {
    title: 'Restauración de Marcos',
    description: 'Damos nueva vida a marcos antiguos dañados, reparando molduras y aplicando nuevos acabados.',
    priceRange: 'Cotizar',
    icon: <Layers className="w-8 h-8" />,
  },
  {
    title: 'Paspartú Personalizado',
    description: 'Corte preciso de paspartú (matboard) con bisel, en múltiples colores y texturas para realzar la obra.',
    priceRange: 'Desde $15',
    icon: <Scissors className="w-8 h-8" />,
  },
  {
    title: 'Asesoría de Montaje',
    description: 'Visitamos tu espacio para sugerir tamaños, estilos de marco y ubicación ideal para tus cuadros.',
    priceRange: 'Gratis con compra',
    icon: <Ruler className="w-8 h-8" />,
  },
];

export const Services: React.FC = () => {
  return (
    <div className="bg-stone-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">Nuestros Servicios</h2>
          <p className="text-lg text-stone-600">
            Más que una tienda, somos un taller dedicado a la preservación y creación de arte. 
            Utilizamos materiales de conservación para asegurar que tus obras perduren.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-transparent hover:border-orange-600 group"
            >
              <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center text-stone-700 mb-6 group-hover:bg-orange-100 group-hover:text-orange-700 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3 font-serif">{service.title}</h3>
              <p className="text-stone-600 mb-6 leading-relaxed">{service.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                <span className="text-sm font-semibold text-stone-400 uppercase tracking-wide">Precio estimado</span>
                <span className="text-lg font-bold text-orange-700">{service.priceRange}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};