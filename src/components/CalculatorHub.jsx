import React from 'react';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import RecommendationQuiz from './RecommendationQuiz.jsx';

function CalculatorHub() {
  const [profile, setProfile] = useState({
    height: 165,
    weight: 62,
    age: 29,
    activity: 1.45,
    waist: 72,
    neck: 32,
    goal: 'Tone & Strength'
  });

  const result = useMemo(() => {
    const heightM = profile.height / 100;
    const bmi = profile.weight / (heightM * heightM);
    const calories = Math.round((10 * profile.weight + 6.25 * profile.height - 5 * profile.age - 161) * profile.activity);
    const water = Math.round(profile.weight * 35);
    const bodyFat = Math.max(14, Math.min(45, Math.round(495 / (1.29579 - 0.35004 * Math.log10(profile.waist + profile.neck - profile.neck) + 0.221 * Math.log10(profile.height)) - 450)));
    const protein = Math.round(profile.weight * 1.7);
    const carbs = Math.round((calories * 0.42) / 4);
    const fats = Math.round((calories * 0.25) / 9);
    return { bmi: bmi.toFixed(1), calories, water, bodyFat, protein, carbs, fats };
  }, [profile]);

  const update = (key, value) => setProfile((current) => ({ ...current, [key]: Number(value) || value }));

  return (
    <section className="section fitness-hub-section">
      <div className="container">
        <div className="section-header centered">
          <span className="section-kicker">Fitness Calculator Hub</span>
          <h2>Luxury Coaching Begins With Clear Personal Numbers</h2>
          <p>Estimate BMI, calories, hydration, body fat, and macros before your consultation.</p>
        </div>

        <div className="fitness-hub-layout">
          <motion.div
            className="fitness-panel calculator-panel"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="panel-badge">Wellness Snapshot</span>
            <form className="calculator-form-grid" onSubmit={(event) => event.preventDefault()}>
              <div className="calculator-field">
                <label htmlFor="fitness-height">Height (cm)</label>
                <input id="fitness-height" type="number" value={profile.height} onChange={(e) => update('height', e.target.value)} />
              </div>
              <div className="calculator-field">
                <label htmlFor="fitness-weight">Weight (kg)</label>
                <input id="fitness-weight" type="number" value={profile.weight} onChange={(e) => update('weight', e.target.value)} />
              </div>
              <div className="calculator-field">
                <label htmlFor="fitness-age">Age</label>
                <input id="fitness-age" type="number" value={profile.age} onChange={(e) => update('age', e.target.value)} />
              </div>
              <div className="calculator-field">
                <label htmlFor="fitness-activity">Activity</label>
                <select id="fitness-activity" value={profile.activity} onChange={(e) => update('activity', e.target.value)}>
                  <option value="1.2">Light</option>
                  <option value="1.45">Moderate</option>
                  <option value="1.65">Active</option>
                </select>
              </div>
              <div className="calculator-field">
                <label htmlFor="fitness-waist">Waist (cm)</label>
                <input id="fitness-waist" type="number" value={profile.waist} onChange={(e) => update('waist', e.target.value)} />
              </div>
              <div className="calculator-field">
                <label htmlFor="fitness-goal">Goal</label>
                <select id="fitness-goal" value={profile.goal} onChange={(e) => update('goal', e.target.value)}>
                  <option>Tone & Strength</option>
                  <option>Weight Loss</option>
                  <option>Postnatal Fitness</option>
                  <option>Performance</option>
                </select>
              </div>
            </form>

            <div className="calculator-results">
              {[
                ['BMI', result.bmi, 'Healthy range target'],
                ['Calories', result.calories, 'Daily estimate'],
                ['Water', `${result.water} ml`, 'Daily hydration'],
                ['Body Fat', `${result.bodyFat}%`, 'Estimated range'],
                ['Protein', `${result.protein}g`, 'Daily macro'],
                ['Carbs / Fats', `${result.carbs}g / ${result.fats}g`, 'Balanced macros']
              ].map(([label, value, note], index) => (
                <motion.article
                  className="metric-card"
                  key={label}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <span>{label}</span>
                  <strong>{value}</strong>
                  <small>{note}</small>
                </motion.article>
              ))}
            </div>
            <p className="calculator-disclaimer">These estimates are for guidance only. Your coach will personalize recommendations during consultation.</p>
          </motion.div>

          <RecommendationQuiz panelOnly />
        </div>
      </div>
    </section>
  );
}

export default CalculatorHub;
