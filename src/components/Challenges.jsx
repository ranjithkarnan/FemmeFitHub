import React, { useState } from 'react';
import { Award, CalendarDays, Clock3, Sparkles, Trophy, UserRound } from 'lucide-react';

const challenges = {
  week: [
    {
      name: 'Plank Queen Challenge',
      type: 'Core Strength',
      dates: 'June 24 - June 30',
      difficulty: 'Beginner Friendly',
      trainer: 'Aarohi',
      reward: 'Member Spotlight',
      progress: 68,
      countdown: '4 days left'
    },
    {
      name: 'Zumba Energy Week',
      type: 'Dance Fitness',
      dates: 'June 24 - June 30',
      difficulty: 'All Levels',
      trainer: 'Nisha',
      reward: 'Free Group Class Pass',
      progress: 52,
      countdown: '4 days left'
    }
  ],
  month: [
    {
      name: '30-Day Strength Reset',
      type: 'Strength',
      dates: 'June 1 - June 30',
      difficulty: 'Intermediate',
      trainer: 'Aarohi',
      reward: 'Free Progress Consultation',
      progress: 78,
      countdown: '10 days left'
    },
    {
      name: 'Healthy Meal Routine Challenge',
      type: 'Nutrition',
      dates: 'June 1 - June 30',
      difficulty: 'Beginner Friendly',
      trainer: 'Samaira',
      reward: 'Nutrition Guide PDF',
      progress: 64,
      countdown: '10 days left'
    }
  ]
};

function Challenges() {
  const [activeTab, setActiveTab] = useState('week');
  const activeChallenges = challenges[activeTab];
  const featured = challenges.week[0];

  return (
    <section id="challenges" className="section challenges-section landing-anchor">
      <div className="container">
        <div className="section-header centered">
          <span className="section-kicker">Upcoming Challenges</span>
          <h2>Upcoming Challenges</h2>
          <p>Join weekly and monthly challenges designed to keep members motivated, consistent, and excited.</p>
        </div>

        <article className="challenge-featured">
          <div>
            <span className="challenge-featured-kicker"><Trophy size={16} /> This Week's Featured Challenge</span>
            <h3>{featured.name}</h3>
            <p>{featured.type} with coach {featured.trainer}. Stay consistent, track your effort, and earn the {featured.reward} reward.</p>
          </div>
          <a className="challenge-btn" href="#contact">Join Challenge</a>
        </article>

        <div className="challenges-tabs" role="tablist" aria-label="Challenge time period">
          <button
            type="button"
            className={activeTab === 'week' ? 'active' : ''}
            onClick={() => setActiveTab('week')}
            role="tab"
            aria-selected={activeTab === 'week'}
          >
            This Week
          </button>
          <button
            type="button"
            className={activeTab === 'month' ? 'active' : ''}
            onClick={() => setActiveTab('month')}
            role="tab"
            aria-selected={activeTab === 'month'}
          >
            This Month
          </button>
        </div>

        <div className="challenges-grid">
          {activeChallenges.map((challenge) => (
            <article className="challenge-card" key={challenge.name}>
              <div className="challenge-card-top">
                <span className="challenge-type"><Sparkles size={15} /> {challenge.type}</span>
                <span className="challenge-countdown"><Clock3 size={15} /> {challenge.countdown}</span>
              </div>

              <h3>{challenge.name}</h3>

              <div className="challenge-meta">
                <span><CalendarDays size={16} /> {challenge.dates}</span>
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

              <a className="challenge-btn" href="#contact">Join Challenge</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Challenges;
