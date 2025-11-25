import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// System instruction to guide the AI persona
const SYSTEM_INSTRUCTION = `
Eres "Arturo", un asistente experto en arte y diseño para un estudio llamado "Trazos y Marcos".
Tu objetivo es ayudar a los clientes a definir qué tipo de obra de arte o enmarcado necesitan.
El estudio vende:
1. Bocetos rápidos (carboncillo, lápiz).
2. Dibujos detallados y realistas.
3. Servicios de enmarcado a medida (madera, metal, flotante).

Guía al usuario haciendo preguntas breves y amables sobre:
- ¿Qué tema buscan? (Retrato, mascota, paisaje, abstracto).
- ¿Qué estilo les gusta?
- ¿Tienen ya la obra y solo necesitan marco?
- ¿Cuál es el presupuesto aproximado?

Al final, sugiere una idea concreta y anímalos a usar el formulario de contacto para pedir una cotización real.
Sé conciso, inspirador y artístico en tu lenguaje.
`;

export class GeminiService {
  private chat: Chat | null = null;

  constructor() {
    this.initChat();
  }

  private initChat() {
    try {
      this.chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });
    } catch (error) {
      console.error("Failed to initialize Gemini chat:", error);
    }
  }

  async sendMessageStream(message: string): Promise<AsyncGenerator<string, void, unknown>> {
    if (!this.chat) {
      this.initChat();
      if (!this.chat) throw new Error("Chat not initialized");
    }

    try {
      const responseStream = await this.chat.sendMessageStream({ message });
      
      // Return a generator that yields text chunks
      return (async function* () {
        for await (const chunk of responseStream) {
          const content = chunk as GenerateContentResponse;
          if (content.text) {
            yield content.text;
          }
        }
      })();
      
    } catch (error) {
      console.error("Error sending message to Gemini:", error);
      throw error;
    }
  }

  async resetChat() {
    this.initChat();
  }
}

export const geminiService = new GeminiService();