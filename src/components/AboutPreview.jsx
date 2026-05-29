import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

function AboutPreview({ full = false }) {
  const points = [
    'Private, respectful, women-only training environment',
    'Goal-based coaching for weight loss, strength, wellness, and confidence',
    'Flexible class timings for students, professionals, and mothers'
  ];

  return (
    <section className="section about-section">
      <div className="container split-layout">
        <div className="image-stack">
          <img
            src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=900&q=80"
            alt="Trainer helping a member with strength training"
          />
          <div className="glass-note">
            <strong>Women-first coaching</strong>
            <span>Supportive, precise, and progress-focused.</span>
          </div>
        </div>
        <div>
          <div className="section-kicker">About Us</div>
          <h2>Designed for women who want fitness to feel powerful, personal, and sustainable.</h2>
          <p>
            Femme Fit Hub blends premium gym facilities with expert coaching and a warm community.
            Whether you are beginning your journey, returning after a break, or ready for a bold
            transformation, our trainers help you move with confidence and purpose.
          </p>
          {full && (
            <p>
              Our studio combines strength zones, cardio equipment, group class energy, yoga recovery,
              nutrition guidance, and personal training into one easy-to-follow experience.
            </p>
          )}
          <div className="check-list">
            {points.map((point) => (
              <span key={point}><CheckCircle2 size={18} /> {point}</span>
            ))}
          </div>
          {!full && <Link className="text-link" to="/about">Discover our story</Link>}
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
