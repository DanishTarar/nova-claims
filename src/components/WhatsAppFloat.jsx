import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloat = () => {
  return (
    <a 
      href="https://wa.me/447949452171" 
      className="whatsapp-float" 
      target="_blank" 
      rel="noopener noreferrer"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppFloat;