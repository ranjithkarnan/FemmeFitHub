import React, { useState } from 'react';
import { Award, Check, Mail, MapPin, Phone, ShieldCheck, Sparkles, Star, Users } from 'lucide-react';

const consultationBenefits = [
  'Personalized Program Guidance',
  'Women-Only Fitness Environment',
  'Certified Physio Therapist & diet Team',
  'Flexible Class Scheduling',
];

const trustBadges = ['200+ Active Members', '15+ Certified Trainers', '99% Satisfaction', 'Women-Only Environment'];

const trustCards = [
  { title: 'Women-Only Space', icon: ShieldCheck },
  { title: 'Expert Coaches', icon: Award },
  { title: 'Supportive Community', icon: Users },
  { title: 'Proven Results', icon: Star }
];

const studioAddress = 'No 2/2, first floor, Sannathi street, Mari Amman Kovil St, Valasaravakkam, Tamil Nadu 600087';
const mapLink = 'https://share.google/kSjLapvUefpUvJ45R';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goal: 'Weight Loss Training',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.goal.trim()) {
      window.alert('Please complete all required fields.');
      return;
    }

    setSending(true);
    setSuccess(true);
    setShowSuccessPopup(true);

    const whatsappMessage = `
🌸 FITNESS CONSULTATION REQUEST

A new consultation request has been submitted.

👤 ${formData.name}
📞 ${formData.phone}

Goal:
🎯 ${formData.goal}

Customer Message:
"${formData.message || 'No additional message provided.'}"

Preferred Action:
✅ Schedule Consultation
✅ Share Membership Plans
✅ Free Trial Invitation

Source: Femme Fit Hub Website
`;

    const whatsappUrl = `https://wa.me/918220138783?text=${encodeURIComponent(whatsappMessage)}`;

    window.setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setShowSuccessPopup(false);
      setSending(false);
      setSuccess(false);
      setFormData({
        name: '',
        phone: '',
        goal: 'Weight Loss Training',
        message: ''
      });
    }, 2500);
  };

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
              <a href="tel:+918220138783"><Phone size={18} /> +91 8220138783</a>
              <a href="mailto:hello@femmefithub.com"><Mail size={18} /> hello@femmefithub.com</a>
              <span><MapPin size={18} /> {studioAddress}</span>
            </div>

            <div className="map-placeholder premium-map-card" role="img" aria-label="Google Maps placeholder for Femme Fit Hub location">
              <MapPin />
              <div>
                <strong>Visit Our Studio</strong>
                <span>No 2/2, first floor, Sannathi street<br />Mari Amman Kovil St, Valasaravakkam<br />Tamil Nadu 600087</span>
                <a href={mapLink} target="_blank" rel="noreferrer">Open in Google Maps</a>
              </div>
            </div>
          </div>

          <div className="consultation-form-area">
            <form className="contact-form consultation-form" onSubmit={handleSubmit}>
              <label>
                <span>Full Name</span>
                <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
              </label>
              <label>
                <span>Phone Number</span>
                <input type="tel" name="phone" placeholder="+91 8220138783" value={formData.phone} onChange={handleChange} required />
              </label>
<label className="custom-select-wrapper">
  <span>Fitness Goal</span>

  <div className="custom-select">
    <select
      name="goal"
      value={formData.goal}
      onChange={handleChange}
      required
    >
      <option>General Fitness</option>
      <option>Weight Loss Training</option>
      <option>Weight Gain Training</option>
      <option>Strength Training</option>
      <option>Cross Fit</option>
      <option>Steam</option>
      <option>Personal Training</option>
      <option>Nutrition Guidance</option>
       <option>Post-Natal Fitness</option>
        <option>Posture Correction</option>
    </select>

    <span className="select-arrow">▼</span>
  </div>
</label>
              <label>
                <span>Message</span>
                <textarea name="message" rows="5" placeholder="Tell us about your goals" value={formData.message} onChange={handleChange} />
              </label>
              <button className="btn btn-primary" type="submit" disabled={sending}>
                {sending ? 'Preparing WhatsApp...' : 'Send Enquiry'} {!sending && <Sparkles size={18} />}
              </button>
              {success && !showSuccessPopup && (
                <div className="form-success" role="status">
                  Thank you! Redirecting to WhatsApp...
                </div>
              )}
            </form>


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
      {showSuccessPopup && (
        <div className="success-modal-overlay" role="dialog" aria-modal="true" aria-label="Enquiry ready">
          <div className="success-modal">
            <div className="success-icon">✓</div>

            <h3>Enquiry Ready!</h3>

            <p>You are being redirected to WhatsApp.</p>

            <p className="success-note">
              Our team typically responds within 15-30 minutes during business hours.
            </p>

            <div className="success-loader" aria-hidden="true">
              <span />
            </div>

            <strong className="success-action">Opening WhatsApp...</strong>

            <small>
              Thank you for choosing Femme Fit Hub. 💪🌸
            </small>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
