import React, { useEffect, useState } from 'react';
import { Clock3, Flame, Trophy, UserRound, X } from 'lucide-react';
import { getActiveChallenge } from '../utils/challengeStorage';
import { useContactModal } from '../context/ContactModalContext.jsx';

function ChallengeNotification() {
  const [show, setShow] = useState(false);
  const [challenge, setChallenge] = useState(() => getActiveChallenge());
  const { openContactModal } = useContactModal();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setChallenge(getActiveChallenge());
      setShow(true);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, []);

  const closeNotification = () => {
    setShow(false);
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
        <span>{challenge.type} Challenge is Live!</span>
        <h3>{challenge.title}</h3>
        <p>{challenge.description}</p>

        <div className="challenge-notification-meta">
          <small><Clock3 size={14} /> {challenge.daysLeft}</small>
          <small><Trophy size={14} /> Reward: {challenge.reward}</small>
          <small><UserRound size={14} /> Trainer: {challenge.trainer}</small>
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
