import React from 'react';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const goals = ['Fat Loss', 'Strength', 'Dance Energy', 'Calm Mobility', 'Postnatal'];
const schedules = ['2 days', '3 days', '5 days'];

function RecommendationQuiz({ panelOnly = false }) {
  const [goal, setGoal] = useState('Strength');
  const [schedule, setSchedule] = useState('3 days');

  const suggestion = useMemo(() => {
    if (goal === 'Fat Loss') return 'Weight Loss Training + Cardio Fitness + Nutrition Guidance';
    if (goal === 'Dance Energy') return 'Zumba + HIIT Circuit + Weekend Recovery Yoga';
    if (goal === 'Calm Mobility') return 'Yoga Flow + Strength Basics + Wellness Coaching';
    if (goal === 'Postnatal') return 'Postnatal Fitness + Mobility Restore + Gentle Strength';
    return 'Strength Training + Personal Training + Protein-focused Nutrition';
  }, [goal]);

  const content = (
    <div className="fitness-panel match-panel">
      <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="panel-badge">AI Inspired Studio Match</span>
        <h3>Your personalized program suggestion.</h3>
        <p>Choose your current intention and weekly availability to preview a curated Femme Fit pathway.</p>
      </motion.div>
      <div className="quiz-controls">
        <div className="choice-group">
          <label>Goal</label>
          <div className="choice-chips">
            {goals.map((item) => (
              <button className={`choice-chip ${goal === item ? 'active' : ''}`} type="button" onClick={() => setGoal(item)} key={item}>{item}</button>
            ))}
          </div>
        </div>
        <div className="choice-group">
          <label>Weekly rhythm</label>
          <div className="rhythm-control">
            {schedules.map((item) => (
              <button className={schedule === item ? 'active' : ''} type="button" onClick={() => setSchedule(item)} key={item}>{item}</button>
            ))}
          </div>
        </div>
      </div>
      <motion.article className="recommendation-card" key={`${goal}-${schedule}`} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
        <Sparkles />
        <span>Recommended for {goal} / {schedule}</span>
        <h4>{suggestion}</h4>
        <p>Includes progress tracking, trainer notes, milestone badges, and a consultation-ready plan preview.</p>
        <a className="button primary" href="#contact">Book Consultation</a>
      </motion.article>
    </div>
  );

  if (panelOnly) {
    return content;
  }

  return (
    <section className="section quiz-section">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="section-kicker">AI Inspired Studio Match</div>
          <h2>Your personalized program suggestion.</h2>
          <p>Choose your current intention and weekly availability to preview a curated Femme Fit pathway.</p>
        </motion.div>
        {content}
      </div>
    </section>
  );
}

export default RecommendationQuiz;
