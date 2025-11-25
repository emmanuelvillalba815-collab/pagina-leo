import React from 'react';

export enum View {
  HOME = 'HOME',
  PORTFOLIO = 'PORTFOLIO',
  SERVICES = 'SERVICES',
  COMMISSION_AI = 'COMMISSION_AI',
  CONTACT = 'CONTACT'
}

export interface ArtPiece {
  id: number;
  title: string;
  category: 'Boceto' | 'Dibujo' | 'Enmarcado';
  imageUrl: string;
  price?: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface ServiceItem {
  title: string;
  description: string;
  priceRange: string;
  icon: React.ReactNode;
}