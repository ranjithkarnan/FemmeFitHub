import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContactModal } from '../context/ContactModalContext.jsx';

const announcementItems = [
  '🎉 First Year Anniversary Offer is Live Now! Book Your Slot Today',
  'Limited Slots Available',
  'Call Now: +91 98844 97990',
  'Free Trial Class Available'
];

function TopAnnouncementBar() {
  const navigate = useNavigate();
  const { openContactModal } = useContactModal();

  const handleClick = () => {
    if (openContactModal) {
      openContactModal();
      return;
    }

    navigate('/contact');
  };

  return (
    <button
      className="top-announcement-bar"
      type="button"
      onClick={handleClick}
      aria-label="First year anniversary offer. Book your slot today."
    >
      <span className="top-announcement-track">
        {[...announcementItems, ...announcementItems].map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </span>
    </button>
  );
}

export default TopAnnouncementBar;
