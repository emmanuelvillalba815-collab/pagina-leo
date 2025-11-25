import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Send, Bot, User, Sparkles, RefreshCw } from 'lucide-react';

export const CommissionAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: '¡Hola! Soy Arturo, tu asistente de diseño. ¿Te gustaría cotizar un dibujo personalizado o buscas el marco perfecto para una obra que ya tienes?',
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const stream = await geminiService.sendMessageStream(userMsg.text);
      
      const botMsgId = (Date.now() + 1).toString();
      setMessages(prev => [...prev, {
        id: botMsgId,
        role: 'model',
        text: '',
        timestamp: Date.now()
      }]);

      let fullText = '';
      for await (const chunk of stream) {
        fullText += chunk;
        setMessages(prev => 
          prev.map(msg => 
            msg.id === botMsgId ? { ...msg, text: fullText } : msg
          )
        );
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: 'Lo siento, tuve un problema creativo. ¿Podrías intentar de nuevo?',
        timestamp: Date.now()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleReset = () => {
    geminiService.resetChat();
    setMessages([{
      id: 'welcome-reset',
      role: 'model',
      text: '¡Empecemos de nuevo! Cuéntame, ¿qué tienes en mente hoy?',
      timestamp: Date.now()
    }]);
  };

  return (
    <div className="min-h-screen bg-stone-100 py-12 px-4 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[80vh]">
        
        {/* Sidebar Info */}
        <div className="bg-stone-900 text-stone-300 md:w-1/3 p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-3 text-orange-400 mb-6">
              <Sparkles className="w-6 h-6" />
              <h3 className="text-xl font-serif font-bold text-white">Asistente Creativo</h3>
            </div>
            <p className="mb-6 leading-relaxed">
              No necesitas ser un experto en arte. Simplemente charla con Arturo, nuestra IA, para:
            </p>
            <ul className="space-y-3 mb-8 text-sm">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-2"></span>
                Definir el estilo de tu retrato (realista, boceto, pop-art).
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-2"></span>
                Elegir el mejor marco para tu diploma o lienzo.
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-2"></span>
                Obtener una recomendación de tamaño y precio estimado.
              </li>
            </ul>
          </div>
          <button 
            onClick={handleReset}
            className="flex items-center justify-center w-full py-3 px-4 bg-stone-800 hover:bg-stone-700 rounded-lg text-white transition-colors text-sm font-medium"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Reiniciar Conversación
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-stone-50">
          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                    msg.role === 'user' ? 'bg-orange-100 ml-3' : 'bg-stone-200 mr-3'
                  }`}>
                    {msg.role === 'user' ? <User className="w-6 h-6 text-orange-700" /> : <Bot className="w-6 h-6 text-stone-700" />}
                  </div>
                  
                  <div className={`p-4 rounded-2xl shadow-sm text-sm md:text-base leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-orange-600 text-white rounded-tr-none' 
                      : 'bg-white text-stone-800 border border-stone-200 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex w-full justify-start">
                 <div className="flex flex-row max-w-[85%]">
                   <div className="flex-shrink-0 h-10 w-10 rounded-full bg-stone-200 mr-3 flex items-center justify-center">
                     <Bot className="w-6 h-6 text-stone-700" />
                   </div>
                   <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-stone-200 flex items-center space-x-2">
                     <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                     <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                     <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                   </div>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-stone-200">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Escribe tu idea aquí..."
                className="w-full py-4 pl-6 pr-14 bg-stone-100 border-none rounded-full focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all text-stone-800 placeholder-stone-400"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className={`absolute right-2 p-2 rounded-full transition-all ${
                  input.trim() && !isLoading
                    ? 'bg-orange-600 text-white hover:bg-orange-700 shadow-md'
                    : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                }`}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-center text-xs text-stone-400 mt-3">
              La IA puede cometer errores. Considera verificar la cotización final con nosotros.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};