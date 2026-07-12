import React from 'react';
import { MessageCircle, Phone, Send } from 'lucide-react';
import { quickWhatsAppUrl } from '../utils/whatsapp';
import { useContactModal } from '../context/ContactModalContext.jsx';
import ScrollToTop from './ScrollToTop.jsx';

function FloatingActions() {
  const { openContactModal } = useContactModal();

  return (
    <div className="floating-actions" aria-label="Quick contact actions">
      <ScrollToTop />
      <a href="tel:+918220138783" aria-label="Call Femme Fit Hub"><Phone /></a>
      <a href={quickWhatsAppUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp Femme Fit Hub"><MessageCircle /></a>
      <button type="button" onClick={openContactModal} aria-label="Quick inquiry"><Send /></button>
    </div>
  );
}

export default FloatingActions;
