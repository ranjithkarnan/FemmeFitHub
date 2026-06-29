import React, { useEffect, useRef, useState } from 'react';
import { quickWhatsAppUrl } from '../utils/whatsapp';
import { useContactModal } from '../context/ContactModalContext.jsx';

function BookingPopup() {
  const [show, setShow] = useState(false);
  const reopenTimerRef = useRef(null);
  const { openContactModal } = useContactModal();

  useEffect(() => {
    const initialTimer = window.setTimeout(() => {
      setShow(true);
    }, 4200);

    return () => {
      window.clearTimeout(initialTimer);
      if (reopenTimerRef.current) {
        window.clearTimeout(reopenTimerRef.current);
      }
    };
  }, []);

  const close = () => {
    setShow(false);

    if (reopenTimerRef.current) {
      window.clearTimeout(reopenTimerRef.current);
    }

    reopenTimerRef.current = window.setTimeout(() => {
      setShow(true);
    }, 120000);
  };

  if (!show) return null;

  return (
    <div className="booking-popup" role="dialog" aria-label="Free trial booking popup">
      <button className="booking-popup-close" type="button" onClick={close} aria-label="Close booking popup">
        x
      </button>

      <span className="booking-popup-badge">Free Trial Available</span>

      <strong>Ready to Start Your Fitness Journey?</strong>

      <p>
        Book a free trial class or chat with us on WhatsApp to choose the right membership plan.
      </p>

      <div className="booking-popup-actions">
        <button
          className="button primary"
          type="button"
          onClick={() => {
            close();
            openContactModal();
          }}
        >
          Book Free Trial
        </button>

        <a
          className="button secondary"
          href={quickWhatsAppUrl}
          target="_blank"
          rel="noreferrer"
          onClick={close}
        >
          WhatsApp Us
        </a>
      </div>
    </div>
  );
}

export default BookingPopup;
