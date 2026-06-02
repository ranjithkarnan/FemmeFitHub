import React from 'react';
import { useMemo, useState } from 'react';

const schedule = [
  { day: 'Monday', type: 'Strength', morning: 'Strength Basics', morningTime: '7:00 AM', evening: 'Zumba Burn', eveningTime: '6:30 PM', trainer: 'Aarohi' },
  { day: 'Tuesday', type: 'Yoga', morning: 'Yoga Flow', morningTime: '8:00 AM', evening: 'Personal Training', eveningTime: '7:00 PM', trainer: 'Meera' },
  { day: 'Wednesday', type: 'Cardio', morning: 'Cardio Fitness', morningTime: '7:30 AM', evening: 'Strength Sculpt', eveningTime: '6:00 PM', trainer: 'Nisha' },
  { day: 'Thursday', type: 'Wellness', morning: 'Postnatal Fitness', morningTime: '10:00 AM', evening: 'Yoga Restore', eveningTime: '7:30 PM', trainer: 'Meera' },
  { day: 'Friday', type: 'Cardio', morning: 'HIIT Circuit', morningTime: '7:00 AM', evening: 'Zumba Party', eveningTime: '6:30 PM', trainer: 'Nisha' },
  { day: 'Saturday', type: 'Wellness', morning: 'Nutrition Clinic', morningTime: '11:00 AM', evening: 'Open Gym', eveningTime: '5:00 PM', trainer: 'Samaira' }
];

function Schedule() {
  const [filter, setFilter] = useState('All');
  const filtered = useMemo(() => filter === 'All' ? schedule : schedule.filter((row) => row.type === filter), [filter]);

  return (
    <section className="section schedule-section">
      <div className="container">
        <div className="section-header centered">
          <span className="section-kicker">Class Schedule</span>
          <h2>Find a Class That Fits Your Day</h2>
          <p>Choose from strength, yoga, cardio, and wellness sessions designed around your routine.</p>
        </div>
        <div className="schedule-filters">
          {['All', 'Strength', 'Yoga', 'Cardio', 'Wellness'].map((item) => (
            <button className={`schedule-filter ${filter === item ? 'active' : ''}`} type="button" onClick={() => setFilter(item)} key={item}>{item}</button>
          ))}
        </div>
        <div className="schedule-grid">
          {filtered.map((row) => (
            <article className={`schedule-card type-${row.type.toLowerCase()}`} key={row.day}>
              <div className="schedule-card-header">
                <div>
                  <span className="schedule-day">{row.day}</span>
                  <h3>{row.type} Day</h3>
                </div>
                <span className="schedule-type">{row.type}</span>
              </div>

              <div className="schedule-sessions">
                <div className="session-block">
                  <span className="session-label">Morning</span>
                  <strong>{row.morning}</strong>
                  <small>{row.morningTime}</small>
                </div>
                <div className="session-block">
                  <span className="session-label">Evening</span>
                  <strong>{row.evening}</strong>
                  <small>{row.eveningTime}</small>
                </div>
              </div>

              <div className="schedule-footer">
                <span className="trainer-chip">Trainer: {row.trainer}</span>
                <a href="#contact" className="schedule-book-btn">Book Class</a>
              </div>
            </article>
          ))}
        </div>

        <div className="schedule-help-card">
          <h3>Need help choosing your class?</h3>
          <p>Tell us your goal and availability. We'll recommend the right weekly rhythm.</p>
          <a href="#contact" className="schedule-book-btn">Book Free Consultation</a>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
