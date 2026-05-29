import React from 'react';
// import { MessageCircle } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

function FloatingWhatsApp() {
  return (
    <a
      className="whatsapp-float"
      href="https://wa.me/919876543210?text=Hi%20Femme%20Fit%20Hub%2C%20I%20want%20to%20know%20about%20membership."
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
