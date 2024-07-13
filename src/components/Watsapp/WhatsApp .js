// FloatingWhatsAppButton.js
import React from 'react';
import "./whatsapp.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsApp = () => {
  const phoneNumber = "+918368949728"; // Replace with your WhatsApp number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="floating-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faWhatsapp} size="2x" />
    </a>
  );
};

export default WhatsApp;
