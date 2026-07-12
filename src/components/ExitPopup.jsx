import React, { useCallback, useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { quickWhatsAppUrl } from '../utils/whatsapp';
import { useContactModal } from '../context/ContactModalContext.jsx';

function ExitPopup() {
  const [show, setShow] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const showRef = useRef(false);
  const hasShownRef = useRef(false);
  const lastScrollYRef = useRef(0);
  const maxScrollYRef = useRef(0);
  const { openContactModal } = useContactModal();

  useEffect(() => {
    showRef.current = show;
  }, [show]);

  const openPopup = useCallback(() => {
    if (hasShownRef.current || showRef.current) {
      return;
    }

    hasShownRef.current = true;
    setHasShown(true);
    setShow(true);
  }, []);

  useEffect(() => {
    const handleExitIntent = (event) => {
      if (hasShownRef.current || showRef.current || event.clientY > 8) {
        return;
      }

      openPopup();
    };

    document.addEventListener('mouseleave', handleExitIntent);

    return () => {
      document.removeEventListener('mouseleave', handleExitIntent);
    };
  }, [openPopup]);

  useEffect(() => {
    const isMobileIntent =
      window.matchMedia?.('(hover: none), (pointer: coarse), (max-width: 768px)').matches;

    if (!isMobileIntent) {
      return undefined;
    }

    lastScrollYRef.current = window.scrollY;
    maxScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;

      maxScrollYRef.current = Math.max(maxScrollYRef.current, currentScrollY);

      if (
        maxScrollYRef.current > 700 &&
        currentScrollY < 140 &&
        currentScrollY < lastScrollY - 70
      ) {
        openPopup();
      }

      lastScrollYRef.current = currentScrollY;
    };

    const timer = window.setTimeout(() => {
      if (maxScrollYRef.current > 240) {
        openPopup();
      }
    }, 18000);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [openPopup]);

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
