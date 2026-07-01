import React, { useState } from 'react';
import { Award, CalendarDays, Clock3, Sparkles, Trophy, UserRound } from 'lucide-react';
import { useContactModal } from '../context/ContactModalContext.jsx';
import {
  getCountdownLabel,
  getFeaturedChallenge,
  getVisibleChallenges
} from '../data/challenges.js';

function Challenges() {
  const [activeTab, setActiveTab] = useState('week');
  const activeChallenges = getVisibleChallenges(activeTab);
  const featured = getFeaturedChallenge();
  const weekCount = getVisibleChallenges('week').length;
  const monthCount = getVisibleChallenges('month').length;
  const { openContactModal } = useContactModal();

  return (
    <section id="challenges" className="section challenges-section landing-anchor">
      <div className="container">
        <div className="section-header centered">
          <span className="section-kicker">Upcoming Challenges</span>
          <h2>Upcoming Challenges</h2>
          <p>Join weekly and monthly challenges designed to keep members motivated, consistent, and excited.</p>
        </div>

        {featured && (
          <article className="challenge-featured">
            <div>
              <span className="challenge-featured-kicker"><Trophy size={16} /> Featured Challenge</span>
              <h3>{featured.name}</h3>
              <p>{featured.shortDescription}</p>
              <small>{featured.type} with coach {featured.trainer}. Reward: {featured.reward}.</small>
            </div>
            <button className="challenge-btn" type="button" onClick={openContactModal}>Join Challenge</button>
          </article>
        )}

        <div className="challenges-tabs" role="tablist" aria-label="Challenge time period">
          <button
            type="button"
            className={activeTab === 'week' ? 'active' : ''}
            onClick={() => setActiveTab('week')}
            role="tab"
            aria-selected={activeTab === 'week'}
          >
            This Week ({weekCount})
          </button>
          <button
            type="button"
            className={activeTab === 'month' ? 'active' : ''}
            onClick={() => setActiveTab('month')}
            role="tab"
            aria-selected={activeTab === 'month'}
          >
            This Month ({monthCount})
          </button>
        </div>

        <div className="challenges-grid">
          {activeChallenges.length === 0 && (
            <article className="challenge-empty-state">
              <h3>No active challenges right now.</h3>
              <p>Stay tuned for our next Femme Fit Hub challenge.</p>
            </article>
          )}

          {activeChallenges.map((challenge) => (
            <article className="challenge-card" key={challenge.name}>
              <div className="challenge-card-top">
                <span className="challenge-type"><Sparkles size={15} /> {challenge.type}</span>
                <span className="challenge-countdown"><Clock3 size={15} /> {getCountdownLabel(challenge)}</span>
              </div>

              <h3>{challenge.name}</h3>

              <div className="challenge-meta">
                <span><CalendarDays size={16} /> {challenge.displayDates}</span>
                <span><Award size={16} /> {challenge.difficulty}</span>
                <span><UserRound size={16} /> Trainer: {challenge.trainer}</span>
              </div>

              <div className="challenge-reward">
                <Trophy size={17} />
                <span>Reward: {challenge.reward}</span>
              </div>

              <div className="challenge-progress" aria-label={`${challenge.progress}% challenge progress`}>
                <div>
                  <span>Member Progress</span>
                  <strong>{challenge.progress}%</strong>
                </div>
                <div className="challenge-progress-track">
                  <span style={{ width: `${challenge.progress}%` }} />
                </div>
              </div>

              <button className="challenge-btn" type="button" onClick={openContactModal}>Join Challenge</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Challenges;
