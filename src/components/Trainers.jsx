import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, BadgeCheck, Instagram, Linkedin, MessageCircle, X, Youtube } from 'lucide-react';
import { trainers } from '../data/trainers.js';
import { quickWhatsAppUrl } from '../utils/whatsapp';

const trainerDetails = {
  'Aarohi Mehta': {
    bestFor: 'Strength, Weight Loss, Posture',
    availability: 'Available This Week'
  },
  'Nisha Kapoor': {
    bestFor: 'Zumba, Cardio, Stamina',
    availability: 'Limited Slots'
  },
  'Meera Iyer': {
    bestFor: 'Yoga, Mobility, Stress Relief',
    availability: 'Morning Batches'
  },
  'Samaira Khan': {
    bestFor: 'Nutrition, Habits, Lifestyle',
    availability: 'Weekend Slots'
  }
};

function Trainers() {
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const closeModal = () => setSelectedTrainer(null);

  return (
    <section className="trainers-section">
      <div className="container">
        <div className="section-heading trainers-heading">
          <div className="section-kicker">Certified Trainers</div>
          <h2>Meet Your Certified Trainers</h2>
          <p>Friendly experts in strength, dance fitness, yoga, nutrition, and sustainable habit change.</p>
        </div>
        <div className="trainers-grid trainer-grid">
          {trainers.map((trainer, index) => (
            <motion.article
              className="trainer-mini-card lift-card"
              key={trainer.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
            >
              <div className="trainer-avatar">
                <img src={trainer.image} alt={`${trainer.name}, ${trainer.role}`} loading="lazy" />
                <span className="verified-badge" aria-label="Verified trainer"><BadgeCheck size={16} /></span>
              </div>
              <h3>{trainer.name}</h3>
              <p>{trainer.role}</p>
              <span className="experience-badge">
                <Award size={14} /> {trainer.experience} Experience
              </span>
              <button type="button" onClick={() => setSelectedTrainer(trainer)}>
                View Profile
              </button>
            </motion.article>
          ))}
        </div>
        <div className="trainer-bottom-cta">
          <h3>Need Help Choosing the Right Coach?</h3>
          <p>
            Our team will guide you based on your fitness goal, comfort level, and preferred schedule.
          </p>
          <div className="trainer-cta-actions">
            <a className="btn btn-primary" href="#contact">Book Free Consultation</a>
            <a className="btn btn-soft" href={quickWhatsAppUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {selectedTrainer && (
        <div className="trainer-modal-backdrop" role="presentation" onClick={closeModal}>
          <div
            className="trainer-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedTrainer.name} trainer profile`}
            onClick={(event) => event.stopPropagation()}
          >
            <button className="trainer-modal-close" type="button" onClick={closeModal} aria-label="Close trainer profile">
              <X size={20} />
            </button>
            <div className="trainer-modal-header">
              <div className="trainer-avatar">
                <img src={selectedTrainer.image} alt={`${selectedTrainer.name}, ${selectedTrainer.role}`} />
                <span className="verified-badge" aria-label="Verified trainer"><BadgeCheck size={16} /></span>
              </div>
              <div>
                <h3>{selectedTrainer.name}</h3>
                <p>{selectedTrainer.role}</p>
                <span className="availability-badge">{trainerDetails[selectedTrainer.name].availability}</span>
              </div>
            </div>
            <div className="trainer-badges">
              <span><Award size={14} /> {selectedTrainer.experience} experience</span>
              {selectedTrainer.certifications.map((certification) => (
                <span key={certification}><BadgeCheck size={14} /> {certification}</span>
              ))}
            </div>
            <div className="trainer-best-for">
              <strong>Best For</strong>
              <p>{trainerDetails[selectedTrainer.name].bestFor}</p>
            </div>
            <p className="trainer-description">
              Helps members build confidence with {selectedTrainer.specialty.toLowerCase()} through
              clear coaching, kind accountability, and sustainable progress.
            </p>
            <div className="trainer-tags">
              {selectedTrainer.specialty.split(', ').map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <div className="trainer-footer">
              <a className="trainer-btn" href="#contact" onClick={closeModal}>Book Session</a>
              <div className="trainer-socials">
                <a href="https://instagram.com" aria-label={`${selectedTrainer.name} on Instagram`}><Instagram /></a>
                <a href="https://linkedin.com" aria-label={`${selectedTrainer.name} on LinkedIn`}><Linkedin /></a>
                <a href="https://youtube.com" aria-label={`${selectedTrainer.name} on YouTube`}><Youtube /></a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Trainers;
