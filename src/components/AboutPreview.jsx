import React, { useEffect, useRef, useState } from 'react';
import { Clock3, Eye, Goal, HeartHandshake, Target, Trophy, UsersRound } from 'lucide-react';

const features = [
  { title: 'Women-Only Environment', icon: UsersRound },
  { title: 'Certified Coaches', icon: Trophy },
  { title: 'Flexible Schedules', icon: Clock3 },
  { title: 'Personalized Programs', icon: Goal }
];

const stats = [
  { value: 500, suffix: '+', label: 'Members' },
  { value: 15, suffix: '+', label: 'Certified Trainers' },
  { value: 98, suffix: '%', label: 'Satisfaction' },
  { value: 50, suffix: '+', label: 'Weekly Classes' }
];

const principles = [
  {
    title: 'Mission',
    text: 'Empower women through strength, confidence, and sustainable fitness.',
    icon: Target
  },
  {
    title: 'Vision',
    text: 'Create the most supportive women-only fitness community.',
    icon: Eye
  },
  {
    title: 'Values',
    text: 'Respect, consistency, accountability, and lifelong wellness.',
    icon: HeartHandshake
  }
];

function CountUpStat({ value, suffix, label }) {
  const [count, setCount] = useState(0);
  const statRef = useRef(null);

  useEffect(() => {
    const node = statRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const startTime = performance.now();
        const duration = 1100;

        const animate = (time) => {
          const progress = Math.min((time - startTime) / duration, 1);
          setCount(Math.round(value * progress));

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <article ref={statRef}>
      <strong>{count}{suffix}</strong>
      <span>{label}</span>
    </article>
  );
}

function AboutPreview({ full = false }) {
  return (
    <section className="section about-section">
      <div className="container">
        <div className="about-section-header">
          <div className="section-kicker">About Femme Fit Hub</div>
          <h2>A Premium Fitness Space Designed for Women.</h2>
          <p>
            Femme Fit Hub was created for women who want serious coaching,
            lasting results, and a supportive environment without intimidation.
          </p>
        </div>

        <div className="split-layout about-split">
          <div className="image-stack about-image-stack">
            <img
              src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=900&q=80"
              alt="Trainer helping a member with strength training"
            />
            <div className="glass-note">
              <strong>Women-First Coaching</strong>
              <span>Supportive • Professional • Results Driven</span>
            </div>
          </div>

          <div className="about-content-card">
            <div className="section-kicker">Why Women Choose Us</div>
            <h3>Serious coaching with comfort, clarity, and community.</h3>
            <p>
              We blend premium gym facilities with expert coaching and a warm community, so every
              member can train with confidence and stay consistent.
            </p>
            {full && (
              <p>
                Our studio combines strength zones, cardio equipment, group class energy, yoga recovery,
                nutrition guidance, and personal training into one easy-to-follow experience.
              </p>
            )}
            <div className="about-feature-grid">
              {features.map(({ title, icon: Icon }) => (
                <article className="about-feature-card" key={title}>
                  <Icon size={22} />
                  <span>{title}</span>
                </article>
              ))}
            </div>
            {!full && <a className="text-link" href="#contact">Book a studio visit</a>}
          </div>
        </div>

        <div className="about-stat-grid" aria-label="Femme Fit Hub quick statistics">
          {stats.map((stat) => (
            <CountUpStat key={stat.label} {...stat} />
          ))}
        </div>

        <div className="about-principles-grid">
          {principles.map(({ title, text, icon: Icon }) => (
            <article className="about-principle-card lift-card" key={title}>
              <div className="about-principle-icon">
                <Icon size={26} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
