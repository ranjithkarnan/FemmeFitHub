import React, { useEffect, useState } from 'react';
import { Clock3, Flame, Trophy, UserRound, X } from 'lucide-react';
import { useContactModal } from '../context/ContactModalContext.jsx';
import { getCountdownLabel, getFeaturedChallenge } from '../data/challenges.js';

function ChallengeNotification() {
  const [showChallengeNotice, setShowChallengeNotice] = useState(false);
  const featuredChallenge = getFeaturedChallenge();
  const { openContactModal } = useContactModal();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowChallengeNotice(true);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, []);

  const closeNotification = () => {
    setShowChallengeNotice(false);
  };

  if (!showChallengeNotice || !featuredChallenge) return null;

  return (
    <div className="challenge-notification" role="status" aria-label="Featured challenge announcement">
      <button
        className="challenge-notification-close"
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          closeNotification();
        }}
        aria-label="Close challenge notification"
      >
        <X size={20} />
      </button>

      <div className="challenge-notification-icon" aria-hidden="true">
        <Flame size={28} />
      </div>

      <div className="challenge-notification-content">
        <span>{featuredChallenge.type} Challenge is Live!</span>
        <h3>{featuredChallenge.name}</h3>
        <p>{featuredChallenge.shortDescription}</p>

        <div className="challenge-notification-meta">
          <small><Clock3 size={14} /> {getCountdownLabel(featuredChallenge)}</small>
          <small><Trophy size={14} /> Reward: {featuredChallenge.reward}</small>
          <small><UserRound size={14} /> Trainer: {featuredChallenge.trainer}</small>
        </div>
      </div>

      <button
        type="button"
        className="challenge-notification-btn"
        onClick={() => {
          closeNotification();
          openContactModal();
        }}
      >
        Join Challenge
      </button>
    </div>
  );
}

export default ChallengeNotification;
