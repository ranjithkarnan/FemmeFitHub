import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  Instagram,
  Linkedin,
  MessageCircle,
  X,
  Youtube,
} from "lucide-react";
import { trainers } from "../data/trainers.js";
import { quickWhatsAppUrl } from "../utils/whatsapp";
import { useContactModal } from "../context/ContactModalContext.jsx";

const trainerDetails = {
  "Deepa Saranya": {
    bestFor: "Pain Management, Flexibility Improvement, Personal Training",
    availability: "Available This Week",
  },
  "Kayathri Murugan": {
    bestFor: "Body Recomposition, Weight Training, Posture",
    availability: "Available This Week",
  },
  "Karthiga Devi Prakash": {
    bestFor: "Diet Planning, Fitness Guidance, Lifestyle Support",
    availability: "Limited Slots",
  },
  "Yuvashree Senthilkumar": {
    bestFor: "Mobility, Recovery, Posture Correction",
    availability: "Morning Batches",
  },
  "Ezilarasi Rajan": {
    bestFor: "Physio Guidance, Habit Coaching, Sustainable Wellness",
    availability: "Weekend Slots",
  },
};

const fallbackTrainerDetail = {
  bestFor: "Personalized Coaching, Confidence, Sustainable Progress",
  availability: "Available This Week",
};

const getInitials = (name) =>
  name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

function Trainers() {
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const { openContactModal } = useContactModal();

  const closeModal = () => setSelectedTrainer(null);
  const selectedDetails = selectedTrainer
    ? trainerDetails[selectedTrainer.name] || fallbackTrainerDetail
    : fallbackTrainerDetail;

  return (
    <section className="trainers-section">
      <div className="container">
        <div className="section-heading trainers-heading">
          <div className="section-kicker">Certified Coaches</div>
          <h2>Meet Our Expert Team</h2>
          <p>
            You get direct access to our physiotherapists and dietician. We also
            bring in women-focused fitness professionals to anchor your routine.
            They handle your posture correction and walk you through safe
            training. You also get clear nutrition guidance. And we dial in your
            mobility. So you actually hit those sustainable results.
          </p>
        </div>
        <div className="trainers-grid trainer-grid">
          {trainers.map((trainer, index) => (
            <motion.article
              className="trainer-mini-card lift-card"
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -8,
                scale: 1.03,
                transition: {
                  type: 'spring',
                  stiffness: 260,
                  damping: 18
                }
              }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              {trainer.image ? (
                <div
                  className="trainer-image-wrapper"
                  onContextMenu={(event) => event.preventDefault()}
                  onDragStart={(event) => event.preventDefault()}
                >
                  <img
                    src={trainer.image}
                    alt={`${trainer.name}, ${trainer.role} at Femme Fit Hub`}
                    className="trainer-image"
                    loading="lazy"
                    decoding="async"
                    width="110"
                    height="110"
                    draggable="false"
                    onContextMenu={(event) => event.preventDefault()}
                    onDragStart={(event) => event.preventDefault()}
                  />
                  <div className="trainer-image-protection" aria-hidden="true" />
                  <span className="trainer-watermark" aria-hidden="true">
                    Femme Fit Hub
                  </span>
                </div>
              ) : (
                <div className="trainer-avatar-initials" aria-hidden="true">
                  {getInitials(trainer.name)}
                </div>
              )}
              <h3>{trainer.name}</h3>
              <p className="trainer-role">{trainer.role}</p>
              <span className="experience-badge">
                <Award size={14} /> {trainer.experience} Experience
              </span>
              {/* <p className="trainer-specialty-preview">{trainer.specialty}</p> */}
              <button type="button" onClick={() => setSelectedTrainer(trainer)}>
                View Profile
              </button>
            </motion.article>
          ))}
        </div>
        <div className="trainer-bottom-cta">
          <h3>Need Help Choosing the Right Coach?</h3>
          <p>
            Our team will guide you based on your fitness goal, comfort level,
            and preferred schedule.
          </p>
          <div className="trainer-cta-actions">
            <button
              className="btn btn-primary"
              type="button"
              onClick={openContactModal}
            >
              Book Free Consultation
            </button>
            <a
              className="btn btn-soft"
              href={quickWhatsAppUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {selectedTrainer && (
        <div
          className="trainer-modal-backdrop"
          role="presentation"
          onClick={closeModal}
        >
          <div
            className="trainer-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedTrainer.name} trainer profile`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="trainer-modal-close"
              type="button"
              onClick={closeModal}
              aria-label="Close trainer profile"
            >
              <X size={20} />
            </button>
            <div className="trainer-modal-header">
              {selectedTrainer.image ? (
                <div
                  className="trainer-modal-image-wrapper"
                  onContextMenu={(event) => event.preventDefault()}
                  onDragStart={(event) => event.preventDefault()}
                >
                  <img
                    src={selectedTrainer.image}
                    alt={`${selectedTrainer.name}, ${selectedTrainer.role} at Femme Fit Hub`}
                    className="trainer-modal-image"
                    loading="lazy"
                    decoding="async"
                    width="132"
                    height="132"
                    draggable="false"
                    onContextMenu={(event) => event.preventDefault()}
                    onDragStart={(event) => event.preventDefault()}
                  />
                  <div className="trainer-image-protection" aria-hidden="true" />
                  <span className="trainer-modal-watermark" aria-hidden="true">
                    Femme Fit Hub
                  </span>
                </div>
              ) : (
                <div className="trainer-modal-avatar" aria-hidden="true">
                  {getInitials(selectedTrainer.name)}
                </div>
              )}
              <div>
                <h3>{selectedTrainer.name}</h3>
                <p>{selectedTrainer.role}</p>
                <span className="availability-badge">
                  {selectedDetails.availability}
                </span>
              </div>
            </div>
            <div className="trainer-badges">
              <span>
                <Award size={14} /> {selectedTrainer.experience} experience
              </span>
            </div>
            <div className="trainer-best-for">
              <strong>Best For</strong>
              <p>{selectedDetails.bestFor}</p>
            </div>
            <div className="trainer-best-for">
              <strong>Specialty</strong>
              <p>{selectedTrainer.specialty}</p>
            </div>
            <p className="trainer-description">
              Helps members build confidence with{" "}
              {selectedTrainer.specialty.toLowerCase()} through clear coaching,
              kind accountability, and sustainable progress.
            </p>
            <div
              className="trainer-certifications"
              aria-label={`${selectedTrainer.name} focus areas`}
            >
              <strong className="trainer-focus-title">Focus Areas</strong>
              {selectedTrainer.certifications.map((focusArea) => (
                <span key={focusArea}>
                  <BadgeCheck size={14} /> {focusArea}
                </span>
              ))}
            </div>
            <div className="trainer-footer">
              <button
                className="trainer-btn"
                type="button"
                onClick={() => {
                  closeModal();
                  openContactModal();
                }}
              >
                Book Session
              </button>
              <div className="trainer-socials">
                <a
                  href="https://instagram.com"
                  aria-label={`${selectedTrainer.name} on Instagram`}
                >
                  <Instagram />
                </a>
                <a
                  href="https://linkedin.com"
                  aria-label={`${selectedTrainer.name} on LinkedIn`}
                >
                  <Linkedin />
                </a>
                <a
                  href="https://youtube.com"
                  aria-label={`${selectedTrainer.name} on YouTube`}
                >
                  <Youtube />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Trainers;
