import React from 'react';
import { MessageCircle, Phone, Send } from 'lucide-react';
import { quickWhatsAppUrl } from '../utils/whatsapp';

function FloatingActions() {
  return (
    <div className="floating-actions" aria-label="Quick contact actions">
      <a href="tel:+918220138783" aria-label="Call Femme Fit Hub"><Phone /></a>
      <a href={quickWhatsAppUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp Femme Fit Hub"><MessageCircle /></a>
      <a href="#contact" aria-label="Quick inquiry"><Send /></a>
    </div>
  );
}

export default FloatingActions;
