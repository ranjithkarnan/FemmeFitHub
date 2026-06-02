import React from 'react';
import { Award, Check, Mail, MapPin, Phone, ShieldCheck, Sparkles, Star, Users } from 'lucide-react';
import FAQ from './FAQ.jsx';

const consultationBenefits = [
  'Personalized Program Guidance',
  'Women-Only Fitness Environment',
  'Certified Coaching Team',
  'Flexible Class Scheduling'
];

const trustBadges = ['500+ Active Members', '15+ Certified Trainers', '98% Satisfaction', 'Women-Only Environment'];

const trustCards = [
  { title: 'Women-Only Space', icon: ShieldCheck },
  { title: 'Expert Coaches', icon: Award },
  { title: 'Supportive Community', icon: Users },
  { title: 'Proven Results', icon: Star }
];

function Contact() {
  return (
    <section className="section consultation-hub">
      <div className="container">
        <div className="consultation-header">
          <span className="section-kicker">Start Today</span>
          <h2>Start Your Transformation Today</h2>
          <strong>Ready to feel stronger, healthier, and more confident?</strong>
          <p>
            Tell us your goal and preferred schedule. Our coaching team will guide you toward the
            program that best fits your lifestyle and fitness journey.
          </p>
          <div className="consultation-stats" aria-label="Femme Fit Hub trust highlights">
            {trustBadges.map((badge) => <span key={badge}>{badge}</span>)}
          </div>
        </div>

        <div className="consultation-layout">
          <div className="consultation-info">
            <article className="consultation-card">
              <span className="panel-badge">Free Consultation</span>
              <h3>Book Your Free Fitness Consultation</h3>
              <p>Speak with our team and receive personalized guidance based on your goals, schedule, and experience level.</p>
              <div className="consultation-benefits">
                {consultationBenefits.map((benefit) => (
                  <span key={benefit}><Check size={17} /> {benefit}</span>
                ))}
              </div>
            </article>

            <div className="contact-info">
              <a href="tel:+919876543210"><Phone size={18} /> +91 98765 43210</a>
              <a href="mailto:hello@femmefithub.com"><Mail size={18} /> hello@femmefithub.com</a>
              <span><MapPin size={18} /> 2nd Floor, Wellness Avenue, Bengaluru</span>
            </div>

            <div className="map-placeholder premium-map-card" role="img" aria-label="Google Maps placeholder for Femme Fit Hub location">
              <MapPin />
              <div>
                <strong>Visit Our Studio</strong>
                <span>2nd Floor, Wellness Avenue<br />Bengaluru</span>
                <a href="https://maps.google.com/?q=Wellness%20Avenue%20Bengaluru" target="_blank" rel="noreferrer">Open in Google Maps</a>
              </div>
            </div>
          </div>

          <div className="consultation-form-area">
            <form className="contact-form consultation-form" onSubmit={(event) => event.preventDefault()}>
              <label>
                <span>Full Name</span>
                <input type="text" name="name" placeholder="Your name" required />
              </label>
              <label>
                <span>Phone Number</span>
                <input type="tel" name="phone" placeholder="+91 98765 43210" required />
              </label>
              <label>
                <span>Fitness Goal</span>
                <select name="goal" defaultValue="Weight Loss Training">
                  <option>Weight Loss Training</option>
                  <option>Strength Training</option>
                  <option>Zumba</option>
                  <option>Yoga</option>
                  <option>Personal Training</option>
                  <option>Nutrition Guidance</option>
                </select>
              </label>
              <label>
                <span>Message</span>
                <textarea name="message" rows="5" placeholder="Tell us about your goals" />
              </label>
              <button className="btn btn-primary" type="submit">Send Enquiry <Sparkles size={18} /></button>
            </form>

            <FAQ embedded />

            <div className="choose-trust-grid">
              <h3>Why Women Choose Femme Fit Hub</h3>
              <div>
                {trustCards.map(({ title, icon: Icon }) => (
                  <article key={title}>
                    <Icon size={20} />
                    <span>{title}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
