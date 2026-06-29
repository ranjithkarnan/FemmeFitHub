import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { quickWhatsAppUrl } from '../utils/whatsapp';
import { useContactModal } from '../context/ContactModalContext.jsx';

function ExitPopup() {
  const [show, setShow] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const { openContactModal } = useContactModal();

  useEffect(() => {
    const handleExitIntent = (event) => {
      if (hasShown || show || event.clientY > 8) {
        return;
      }

      setShow(true);
      setHasShown(true);
    };

    document.addEventListener('mouseleave', handleExitIntent);

    return () => {
      document.removeEventListener('mouseleave', handleExitIntent);
    };
  }, [hasShown, show]);

  const closePopup = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="exit-popup-overlay" role="dialog" aria-modal="true" aria-label="Free trial class offer">
      <div className="exit-popup">
        <button className="exit-popup-close" type="button" onClick={closePopup} aria-label="Close free trial offer">
          <X size={20} />
        </button>

        <span className="exit-popup-kicker">Before You Go</span>
        <h2>Wait!</h2>
        <h3>Get a Free Trial Class</h3>
        <p>
          Experience Femme Fit Hub with a women-only class, certified coach support,
          and a friendly studio walkthrough before choosing your plan.
        </p>

        <div className="exit-popup-actions">
          <button
            className="exit-popup-btn primary"
            type="button"
            onClick={() => {
              closePopup();
              openContactModal();
            }}
          >
            Claim Free Trial
          </button>
          <a className="exit-popup-btn secondary" href={quickWhatsAppUrl} target="_blank" rel="noreferrer" onClick={closePopup}>
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default ExitPopup;
