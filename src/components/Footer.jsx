import React from 'react';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand footer-brand" to="/">Femme Fit Hub</Link>
          <p>Premium women-only fitness coaching for strength, confidence, health, and community.</p>
          <div className="social-links" aria-label="Social links">
            <a href="https://instagram.com" aria-label="Instagram"><Instagram /></a>
            <a href="https://facebook.com" aria-label="Facebook"><Facebook /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin /></a>
            <a href="mailto:hello@femmefithub.com" aria-label="Email"><Mail /></a>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          <Link to="/about">About</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/membership">Membership</Link>
          <Link to="/schedule">Schedule</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h3>Timings</h3>
          <p>Monday - Saturday<br />6:00 AM - 9:00 PM</p>
          <p>Sunday<br />7:00 AM - 12:00 PM</p>
        </div>
        <div>
          <h3>Newsletter</h3>
          <p>Monthly fitness tips, class updates, and member stories.</p>
          <form className="newsletter" onSubmit={(event) => event.preventDefault()}>
            <input type="email" aria-label="Email address" placeholder="Email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">© 2026 Femme Fit Hub. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
