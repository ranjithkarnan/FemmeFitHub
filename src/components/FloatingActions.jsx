import React from 'react';
import { MessageCircle, Phone, Send } from 'lucide-react';

function FloatingActions() {
  return (
    <div className="floating-actions" aria-label="Quick contact actions">
      <a href="tel:+919876543210" aria-label="Call Femme Fit Hub"><Phone /></a>
      <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" aria-label="WhatsApp Femme Fit Hub"><MessageCircle /></a>
      <a href="#contact" aria-label="Quick inquiry"><Send /></a>
    </div>
  );
}

export default FloatingActions;
