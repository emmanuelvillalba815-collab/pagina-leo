import React from 'react';
import { Instagram, Facebook, Twitter, Frame } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center text-white mb-4">
              <Frame className="h-6 w-6 mr-2 text-orange-500" />
              <span className="text-xl font-bold font-serif">Trazos.Marcos</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Dedicados al arte del dibujo y la preservación a través del enmarcado artesanal. Calidad y pasión en cada detalle.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Inicio</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Galería</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Enmarcados</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Asistente IA</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Términos de Servicio</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Envíos y Devoluciones</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-400 hover:text-white transition-colors"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors"><Twitter className="h-6 w-6" /></a>
            </div>
          </div>

        </div>
        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Trazos y Marcos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};