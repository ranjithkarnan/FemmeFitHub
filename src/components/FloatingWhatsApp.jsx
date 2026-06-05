import React from 'react';
// import { MessageCircle } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import { quickWhatsAppUrl } from '../utils/whatsapp';

function FloatingWhatsApp() {
  return (
    <a
      className="whatsapp-float"
      href={quickWhatsAppUrl}
      aria-label="Chat with Femme Fit Hub on WhatsApp"
      target="_blank"
      rel="noreferrer"
    >
      {/* <FaWhatsapp /> */}
      <FaWhatsapp size={35} color="#25D366" />
    </a>
  );
}

export default FloatingWhatsApp;
