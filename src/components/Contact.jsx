import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

function Contact() {
  return (
    <section className="section contact-section">
      <div className="container contact-grid">
        <div>
          <div className="section-kicker">Contact Us</div>
          <h2>Book a tour, trial class, or membership consultation.</h2>
          <p>
            Tell us your goal and preferred timing. Our team will help you choose a program that
            feels realistic, exciting, and built around your lifestyle.
          </p>
          <div className="contact-info">
            <span><Phone size={18} /> +91 98765 43210</span>
            <span><Mail size={18} /> hello@femmefithub.com</span>
            <span><MapPin size={18} /> 2nd Floor, Wellness Avenue, Bengaluru</span>
          </div>
          <div className="map-placeholder" role="img" aria-label="Google Maps placeholder for Femme Fit Hub location">
            <MapPin />
            <strong>Google Maps Location</strong>
            <span>Embed your exact map here before launch.</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <label>
            Full Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" placeholder="+91 98765 43210" required />
          </label>
          <label>
            Fitness Goal
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
            Message
            <textarea name="message" rows="5" placeholder="Tell us about your goals" />
          </label>
          <button className="btn btn-primary" type="submit">Send Enquiry</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
