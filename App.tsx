import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { CommissionAssistant } from './components/CommissionAssistant';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { View } from './types';

function App() {
  const [currentView, setCurrentView] = useState<View>(View.HOME);

  const renderView = () => {
    switch (currentView) {
      case View.HOME:
        return (
          <>
            <Hero setView={setCurrentView} />
            <Services />
            <Portfolio />
            <div className="bg-orange-600 py-16 text-center text-white">
              <h2 className="text-3xl font-serif font-bold mb-4">¿Tienes una idea única?</h2>
              <p className="mb-8 max-w-2xl mx-auto text-orange-100">
                Usa nuestra Inteligencia Artificial para describir lo que buscas y obtén una recomendación personalizada al instante.
              </p>
              <button 
                onClick={() => setCurrentView(View.COMMISSION_AI)}
                className="bg-white text-orange-700 px-8 py-3 rounded-full font-bold hover:bg-stone-100 transition-colors shadow-lg"
              >
                Probar Asistente IA
              </button>
            </div>
          </>
        );
      case View.PORTFOLIO:
        return <Portfolio />;
      case View.SERVICES:
        return <Services />;
      case View.COMMISSION_AI:
        return <CommissionAssistant />;
      case View.CONTACT:
        return <Contact />;
      default:
        return <Hero setView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentView={currentView} setView={setCurrentView} />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer />
    </div>
  );
}

export default App;