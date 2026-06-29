import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import ContactModal from '../components/ContactModal.jsx';

const ContactModalContext = createContext(null);

export function ContactModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openContactModal = useCallback(() => setIsOpen(true), []);
  const closeContactModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({
    isOpen,
    openContactModal,
    closeContactModal
  }), [isOpen, openContactModal, closeContactModal]);

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      <ContactModal isOpen={isOpen} onClose={closeContactModal} />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactModalContext);

  if (!context) {
    throw new Error('useContactModal must be used inside ContactModalProvider');
  }

  return context;
}
