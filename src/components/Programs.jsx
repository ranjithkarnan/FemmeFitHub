import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Clock3, GaugeCircle, MessageCircle } from 'lucide-react';
import { programs } from '../data/programs.js';
import { quickWhatsAppUrl } from '../utils/whatsapp';

const programOrder = [
  {
    sourceTitle: 'Strength Training',
    title: 'Strength Training',
    difficulty: 'Beginner Friendly',
    difficultyLevel: 'beginner',
    duration: 'Flexible Schedule',
    benefits: ['Strength Building', 'Fat Reduction', 'Better Confidence'],
    popular: true
  },
  {
    sourceTitle: 'Weight Loss Training',
    title: 'Fat Loss Program',
    difficulty: 'Intermediate',
    difficultyLevel: 'intermediate',
    duration: '12 Week Program',
    benefits: ['Personalized Coaching', 'Goal Tracking', 'Flexible Timings']
  },
  {
    sourceTitle: 'Yoga',
    title: 'Yoga & Recovery',
    difficulty: 'Beginner Friendly',
    difficultyLevel: 'beginner',
    duration: 'Flexible Schedule',
    benefits: ['Mobility Support', 'Stress Relief', 'Recovery Focus']
  },
  {
    sourceTitle: 'Zumba',
    title: 'Zumba Fitness',
    difficulty: 'Intermediate',
    difficultyLevel: 'intermediate',
    duration: '8 Week Program',
    benefits: ['Dance Cardio', 'Calorie Burn', 'Community Energy']
  },
  {
    sourceTitle: 'Postnatal Fitness',
    title: 'Postnatal Fitness',
    difficulty: 'Beginner Friendly',
    difficultyLevel: 'beginner',
    duration: 'Flexible Schedule',
    benefits: ['Core Stability', 'Safe Strength', 'Energy Rebuild']
  },
  {
    sourceTitle: 'Nutrition Guidance',
    title: 'Nutrition Coaching',
    difficulty: 'Personalized',
    difficultyLevel: 'advanced',
    duration: '12 Week Program',
    benefits: ['Meal Structure', 'Habit Coaching', 'Lifestyle Balance']
  }
];

const programCatalog = programOrder.map((item) => {
  const source = programs.find((program) => program.title === item.sourceTitle);
  return { ...source, ...item };
});

function Programs({ limit, showIntro = true }) {
  const visiblePrograms = limit ? programCatalog.slice(0, limit) : programCatalog;

  return (
    <section className="section programs-showcase">
      <div className="container">
        {showIntro && (
          <div className="section-heading programs-heading">
            <div className="section-kicker">Programs & Classes</div>
            <h2>Programs Designed Around Your Goals</h2>
            <p>
              From strength training to recovery-focused wellness, every program is designed to
              support your fitness journey with expert guidance and measurable results.
            </p>
          </div>
        )}
        <div className="program-grid programs-grid">
          {visiblePrograms.map(({ title, icon: Icon, image, description, duration, difficulty, difficultyLevel, benefits, popular }, index) => (
            <motion.article
              className={`program-card premium-program-card lift-card ${popular ? 'popular-program' : ''}`}
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.04 }}
            >
              <div className="program-image">
                <img src={image} alt={`${title} class at Femme Fit Hub`} loading="lazy" />
                {popular && <span className="popular-badge">Most Popular</span>}
              </div>
              <div className="program-content">
                <div className="program-header">
                  <div className="program-title-row">
                    <div className="program-icon"><Icon size={22} /></div>
                    <h3>{title}</h3>
                  </div>
                  <p>{description}</p>
                </div>
                <div className="program-meta">
                  <span className={`difficulty-badge ${difficultyLevel}`}>
                    <GaugeCircle size={15} /> {difficulty}
                  </span>
                  <span className="duration-badge">
                    <Clock3 size={15} /> {duration}
                  </span>
                </div>
                <div className="program-benefits">
                  {benefits.map((item) => (
                    <span key={item}><CheckCircle2 size={16} /> {item}</span>
                  ))}
                </div>
                <a className="program-btn program-card-cta" href="#contact">
                  Learn More <ArrowRight size={17} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
        {limit && <div className="center-action"><a className="btn btn-primary" href="#programs">Explore all programs</a></div>}
        {!limit && (
          <div className="programs-bottom-cta">
            <div>
              <h3>Not Sure Which Program Fits You?</h3>
              <p>Take a free consultation and let our coaches help you choose the right fitness journey.</p>
            </div>
            <div className="programs-bottom-actions">
              <a className="btn btn-primary" href="#contact">Book Free Consultation</a>
              <a className="btn btn-soft" href={quickWhatsAppUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Programs;
