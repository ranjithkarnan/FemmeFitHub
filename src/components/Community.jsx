import React from 'react';
import { motion } from 'framer-motion';
import spotlightImage from '../assets/images/TreadMils2-960.webp';

const events = [
  { title: 'Sunrise Strength Club', date: 'Every Monday', note: 'Member-only lifting circle' },
  { title: 'Glow Zumba Night', date: 'June 14', note: 'High-energy dance celebration' },
  { title: 'Wellness Brunch', date: 'June 28', note: 'Nutrition, mindset, and community' }
];

function Community() {
  return (
    <div id="community" className="community-showcase landing-anchor">
      <div className="community-panel">
        <div className="community-copy">
          <span className="section-kicker">Community</span>
          <h2>The boutique club energy that makes consistency feel social.</h2>
          <p>
            Challenges, monthly achievements, member spotlights, and wellness events make Femme
            Fit Hub feel like a lifestyle community, not a treadmill room.
          </p>
        </div>
        <div className="community-events">
          {events.map((event, index) => (
            <motion.article
              key={event.title}
              initial={{ opacity: 0, x: 26 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <span>{event.date}</span>
              <h3>{event.title}</h3>
              <p>{event.note}</p>
            </motion.article>
          ))}
        </div>
      </div>

      <article className="spotlight-card">
        <div className="spotlight-image">
          <img
            src={spotlightImage}
            alt="Member spotlight portrait"
            width="480"
            height="640"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="spotlight-content">
          <span>Member Spotlight</span>
          <h3>Ritika completed 42 sessions in 90 days</h3>
          <p>Her milestone unlocked a custom strength plan and studio recognition board feature.</p>
          <div className="spotlight-progress">
            <div><strong>42</strong><span>/ 50 sessions</span></div>
            <div className="progress-bar"><span /></div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Community;
