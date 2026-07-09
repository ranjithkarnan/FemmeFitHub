import React, { useEffect, useState } from 'react';
import { CheckCircle2, MessageCircle, ShieldCheck, Sparkles, Star, Users, X } from 'lucide-react';

const goalOptions = [
  'General Fitness',
  'Weight Loss Training',
  'Weight Gain Training',
  'Strength Training',
  'Cross Fit',
  'Steam',
  'Personal Training',
  'Nutrition Guidance'
];

const trustPoints = [
  { label: 'Women-only fitness studio', icon: ShieldCheck },
  { label: 'Certified trainers', icon: Users },
  { label: '5★ Google rating', icon: Star },
  { label: 'Free trial available', icon: Sparkles }
];

const initialFormData = {
  name: '',
  phone: '',
  goal: 'General Fitness',
  message: ''
};

function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState(initialFormData);
  const [sending, setSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && !sending) {
        onClose();
      }
    };

    document.body.classList.add('modal-open');
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, sending]);

  const handleChange = (event) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.goal.trim()) {
      window.alert('Please complete all required fields.');
      return;
    }

    const whatsappMessage = `
FITNESS CONSULTATION REQUEST

A new consultation request has been submitted.

Customer Name:
${formData.name}

Phone Number:
${formData.phone}

Goal:
${formData.goal}

Customer Message:
"${formData.message || 'No additional message provided.'}"

Source: Femme Fit Hub Website
`;

    const whatsappUrl = `https://wa.me/918220138783?text=${encodeURIComponent(whatsappMessage)}`;

    setSending(true);
    setShowSuccess(true);

    window.setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setSending(false);
      setShowSuccess(false);
      setFormData(initialFormData);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div
      className="contact-modal-overlay"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !sending) {
          onClose();
        }
      }}
    >
      <div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
        <button
          className="contact-modal-close"
          type="button"
          aria-label="Close contact form"
          onClick={onClose}
          disabled={sending}
        >
          <X size={20} />
        </button>

        {showSuccess ? (
          <div className="contact-modal-success">
            <div className="success-icon">✓</div>
            <h3>Enquiry Ready!</h3>
            <p>You are being redirected to WhatsApp.</p>
            <p className="success-note">
              Our team typically responds within 15-30 minutes during business hours.
            </p>
            <div className="success-loader" aria-hidden="true">
              <span />
            </div>
            <strong>Opening WhatsApp...</strong>
          </div>
        ) : (
          <div className="contact-modal-grid">
            <aside className="contact-modal-trust">
              <span className="section-kicker">Free Consultation</span>
              <h2>Start Your Fitness Journey</h2>
              <p>
                Tell us your goal and our team will guide you with the right program and membership details.
              </p>
              <div className="contact-modal-trust-list">
                {trustPoints.map(({ label, icon: Icon }) => (
                  <span key={label}>
                    <Icon size={18} />
                    {label}
                  </span>
                ))}
              </div>
              <div className="contact-modal-mini-card">
                <CheckCircle2 size={20} />
                <div>
                  <strong>Quick reply promise</strong>
                  <small>Usually within 15-30 minutes during business hours.</small>
                </div>
              </div>
            </aside>

            {/* <form className="contact-modal-form" onSubmit={handleSubmit}>
              <div>
                <h3 id="contact-modal-title">Book Your Free Trial</h3>
                <p>Share your details and continue to WhatsApp with a ready enquiry message.</p>
              </div>

              <label>
                <span>Full Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                <span>Phone Number</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                <span>Fitness Goal</span>
                <select name="goal" value={formData.goal} onChange={handleChange} required>
                  {goalOptions.map((goal) => <option key={goal}>{goal}</option>)}
                </select>
              </label>

              <label>
                <span>Message</span>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your preferred timing or goal"
                  value={formData.message}
                  onChange={handleChange}
                />
              </label>

              <button className="btn btn-primary contact-modal-submit" type="submit" disabled={sending}>
                Continue to WhatsApp <MessageCircle size={18} />
              </button>
            </form> */}
            <form className="contact-modal-form" onSubmit={handleSubmit}>
  <div className="contact-modal-header">
    <span className="contact-modal-badge">
      ✨ Free Fitness Consultation
    </span>

    <h3 id="contact-modal-title">
      Start Your Fitness Journey Today
    </h3>

    <p>
      Fill in your details below and continue to WhatsApp.
      Our team will help you choose the right fitness program,
      membership plan, and suitable batch timing.
    </p>
  </div>

  <label>
    <span>Your Name</span>
    <input
      type="text"
      name="name"
      placeholder="Enter your full name"
      value={formData.name}
      onChange={handleChange}
      required
    />
  </label>

  <label>
    <span>Mobile Number</span>
    <input
      type="tel"
      name="phone"
      placeholder="+91 98765 43210"
      value={formData.phone}
      onChange={handleChange}
      required
    />
  </label>

  <label>
    <span>What is your fitness goal?</span>
    <select
      name="goal"
      value={formData.goal}
      onChange={handleChange}
      required
    >
      {goalOptions.map((goal) => (
        <option key={goal}>{goal}</option>
      ))}
    </select>
  </label>

  <label>
    <span>Tell us more (Optional)</span>
    <textarea
      name="message"
      rows="4"
      placeholder="Preferred batch timing, fitness experience, or any questions..."
      value={formData.message}
      onChange={handleChange}
    />
  </label>

  <div className="contact-modal-note">
    <ShieldCheck size={18} />

    <span>
      Your information is kept private and will only be used to
      contact you regarding your fitness consultation.
    </span>
  </div>

  <button
    className="btn btn-primary contact-modal-submit"
    type="submit"
    disabled={sending}
  >
    Continue to WhatsApp

    <MessageCircle size={18} />
  </button>
</form>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactModal;
