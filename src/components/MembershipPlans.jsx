import React from 'react';
import { motion } from 'framer-motion';
import { plans } from '../data/plans.js';
import { quickWhatsAppUrl } from '../utils/whatsapp';

function MembershipPlans() {
  return (
    <section className="section membership-section">
      <div className="container membership-layout">
        <motion.div
          className="membership-advisor"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-kicker">Membership</div>
          <h2>Choose Your Fitness Journey</h2>
          <p>Tell us your goal, and we'll guide you to the right membership plan.</p>

          <div className="membership-help-card">
            <span>Need help choosing?</span>
            <h3>Book a free consultation</h3>
            <p>Our team will suggest the best plan for your goal, comfort level, and schedule.</p>
            <div className="membership-help-actions">
              <a href="#contact" className="button primary">Book Free Consultation</a>
              <a href={quickWhatsAppUrl} target="_blank" rel="noreferrer" className="button secondary">
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>

        <div className="membership-stack">
          {plans.map((plan, index) => (
            <motion.article
              className={`membership-card ${plan.featured ? 'recommended' : ''}`}
              key={plan.name}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="membership-card-main">
                <span className="plan-badge">{plan.badge}</span>
                <h3>{plan.name}</h3>
                <p className="plan-desc">{plan.shortBestFor}</p>
              </div>

              <div className="membership-feature-tags" aria-label={`${plan.name} features`}>
                {plan.features.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>

              <a className="plan-btn" href="#contact">{plan.cta}</a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MembershipPlans;
