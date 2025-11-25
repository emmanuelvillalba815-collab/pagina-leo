import React, { useState } from 'react';
import { ArtPiece } from '../types';
import { ZoomIn } from 'lucide-react';

const portfolioItems: ArtPiece[] = [
  { id: 1, title: 'Mirada Profunda', category: 'Dibujo', imageUrl: 'https://picsum.photos/seed/draw1/600/800', description: 'Carbón sobre papel texturizado, 50x70cm.' },
  { id: 2, title: 'Boceto Urbano', category: 'Boceto', imageUrl: 'https://picsum.photos/seed/sketch2/600/600', description: 'Grafito rápido, escena callejera.' },
  { id: 3, title: 'Marco Roble', category: 'Enmarcado', imageUrl: 'https://picsum.photos/seed/frame1/600/700', description: 'Marco de roble macizo con paspartú libre de ácido.' },
  { id: 4, title: 'Retrato Familiar', category: 'Dibujo', imageUrl: 'https://picsum.photos/seed/family/600/500', description: 'Lápiz compuesto, encargo personalizado.' },
  { id: 5, title: 'Estudio de Manos', category: 'Boceto', imageUrl: 'https://picsum.photos/seed/hands/600/900', description: 'Sanguina sobre papel crema.' },
  { id: 6, title: 'Marco Flotante', category: 'Enmarcado', imageUrl: 'https://picsum.photos/seed/frame2/600/600', description: 'Estilo moderno para lienzo, madera lacada negra.' },
  { id: 7, title: 'Paisaje Etéreo', category: 'Dibujo', imageUrl: 'https://picsum.photos/seed/land/600/400', description: 'Técnica mixta, paisaje de montaña.' },
  { id: 8, title: 'Doble Paspartú', category: 'Enmarcado', imageUrl: 'https://picsum.photos/seed/frame3/600/800', description: 'Acabado museo con vidrio anti-reflejo.' },
];

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'Todos' | 'Boceto' | 'Dibujo' | 'Enmarcado'>('Todos');

  const filteredItems = filter === 'Todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="bg-stone-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">Nuestra Galería</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Una selección de nuestros trabajos más recientes. Desde bocetos rápidos llenos de energía hasta enmarcados que protegen y realzan la belleza.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['Todos', 'Boceto', 'Dibujo', 'Enmarcado'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-stone-900 text-white shadow-lg'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-ish Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative break-inside-avoid">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-sm bg-stone-200 shadow-md transition-shadow hover:shadow-xl">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-4">
                    <p className="text-orange-300 text-sm font-bold uppercase tracking-wider mb-2">{item.category}</p>
                    <h3 className="text-2xl font-serif text-white mb-2">{item.title}</h3>
                    <p className="text-stone-300 text-sm mb-4">{item.description}</p>
                    <button className="inline-flex items-center text-white border border-white px-4 py-2 hover:bg-white hover:text-stone-900 transition-colors">
                      <ZoomIn className="w-4 h-4 mr-2" />
                      Ver Detalle
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};