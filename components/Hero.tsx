import React from 'react';
import { View } from '../types';
import { ArrowRight, Pencil, PenTool } from 'lucide-react';

interface HeroProps {
  setView: (view: View) => void;
}

export const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <div className="relative bg-stone-900 text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/seed/artstudio/1920/1080" 
          alt="Art Studio Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-stone-900/50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="md:w-2/3 lg:w-1/2">
          <div className="flex items-center space-x-2 text-orange-400 mb-6 font-medium tracking-wide uppercase text-sm">
            <span className="w-8 h-0.5 bg-orange-400 inline-block"></span>
            <span>Estudio de Arte & Diseño</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight mb-8">
            Capturando el alma en <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-amber-600">cada trazo</span>.
          </h1>
          
          <p className="text-xl text-stone-300 mb-10 leading-relaxed font-light">
            Especialistas en bocetos a mano alzada, dibujos realistas y enmarcados artesanales que transforman tus recuerdos en obras maestras eternas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setView(View.PORTFOLIO)}
              className="px-8 py-4 bg-orange-700 hover:bg-orange-600 text-white rounded-sm font-semibold transition-all flex items-center justify-center group"
            >
              Ver Galería
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setView(View.COMMISSION_AI)}
              className="px-8 py-4 bg-transparent border border-stone-400 hover:border-white text-white hover:bg-white/10 rounded-sm font-semibold transition-all flex items-center justify-center"
            >
              <PenTool className="mr-2 h-5 w-5" />
              Asistente de Diseño IA
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 p-8 md:p-16 hidden md:block opacity-20">
        <Pencil className="h-64 w-64 text-white transform rotate-45" />
      </div>
    </div>
  );
};