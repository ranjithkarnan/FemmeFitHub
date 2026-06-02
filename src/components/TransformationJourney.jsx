import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const timeline = [
  { week: 'Week 1', label: 'Movement assessment', progress: 30 },
  { week: 'Week 4', label: 'Routine locked in', progress: 56 },
  { week: 'Week 8', label: 'Visible strength gains', progress: 78 },
  { week: 'Week 12', label: 'Lifestyle transformation', progress: 94 }
];

function TransformationJourney() {
  const [slider, setSlider] = useState(52);

  return (
    <section className="section transformation-luxury">
      <div className="container transformation-grid">
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="section-kicker">Transformation Journey</div>
          <h2>Not a before-and-after gimmick. A guided evolution.</h2>
          <p>
            Members move through assessment, habit design, coaching, recovery, and performance
            tracking so the result feels earned, healthy, and permanent.
          </p>
          <div className="journey-metrics">
            <span><strong>12 kg</strong> average fat-loss spotlight</span>
            <span><strong>3x</strong> strength confidence gain</span>
            <span><strong>90 days</strong> signature challenge</span>
          </div>
        </motion.div>

        <motion.div
          className="comparison-card"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="comparison-frame">
            <img
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80"
              alt="Fitness coaching before phase"
            />
            <div className="comparison-after" style={{ width: `${slider}%` }}>
              <img
                src="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&w=900&q=80"
                alt="Fitness transformation after phase"
              />
            </div>
            <span className="before-label">Before</span>
            <span className="after-label">After</span>
          </div>
          <input
            aria-label="Before and after comparison slider"
            type="range"
            min="15"
            max="85"
            value={slider}
            onChange={(event) => setSlider(event.target.value)}
          />
        </motion.div>
      </div>

      <div className="container timeline-grid">
        {timeline.map((item, index) => (
          <motion.article
            key={item.week}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <span>{item.week}</span>
            <h3>{item.label}</h3>
            <div className="progress-track"><i style={{ width: `${item.progress}%` }} /></div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default TransformationJourney;
