import React, { useEffect, useState } from 'react';
import { Clock3, Flame, Trophy, UserRound, X } from 'lucide-react';

function ChallengeNotification() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShow(true);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, []);

  const closeNotification = () => {
    setShow(false);
  };

  const joinChallenge = (event) => {
    event.preventDefault();
    setShow(false);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
  };

  if (!show) return null;

  return (
    <div className="challenge-notification" role="status" aria-label="This week's challenge announcement">
      <button
        className="challenge-notification-close"
        type="button"
        onClick={closeNotification}
        aria-label="Close challenge notification"
      >
        <X size={16} />
      </button>

      <div className="challenge-notification-icon" aria-hidden="true">
        <Flame size={28} />
      </div>

      <div className="challenge-notification-content">
        <span>This Week's Challenge is Live!</span>
        <h3>Plank Queen Challenge</h3>
        <p>Complete your daily plank goal and get featured on our Member Spotlight board.</p>

        <div className="challenge-notification-meta">
          <small><Clock3 size={14} /> 4 days left</small>
          <small><Trophy size={14} /> Reward: Member Spotlight</small>
          <small><UserRound size={14} /> Trainer: Aarohi</small>
        </div>
      </div>

      <a href="#contact" className="challenge-notification-btn" onClick={joinChallenge}>
        Join Challenge
      </a>
    </div>
  );
}

export default ChallengeNotification;
