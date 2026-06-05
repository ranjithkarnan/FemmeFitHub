import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { quickWhatsAppUrl } from "../utils/whatsapp";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h2>Femme Fit Hub</h2>
          <p>
            A premium women-only fitness studio built for strength, wellness,
            confidence, and sustainable routines.
          </p>

          <div className="footer-socials" aria-label="Social links">
            <a
              href="https://www.instagram.com/femme_fithub/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/femme.fithub"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.youtube.com/@femmefithub"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <Youtube size={21} />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#programs">Programs</a>
          <a href="#trainers">Trainers</a>
          <a href="#membership">Membership</a>
          <a href="#gallery">Gallery</a>
        </div>

        <div className="footer-column">
          <h3>Support</h3>
          <a href="#schedule">Class Schedule</a>
          <a href="#tips">Fitness Tips</a>
          <a href="#contact">FAQ</a>
          <a href="#contact">Contact</a>
          <a href="#contact">Free Trial</a>
        </div>

        <div className="footer-column footer-contact">
          <h3>Contact</h3>
          <p>+91 8220138783</p>
          <p>hello@femmefithub.com</p>
          <p>
            No 2/2, first floor, Sannathi street, Mari Amman Kovil St,
            Valasaravakkam, Tamil Nadu 600087
          </p>
          <a
            className="footer-whatsapp"
            href={quickWhatsAppUrl}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Femme Fit Hub. All rights reserved.</p>
        <p>
          Digital Experience by{" "}
          <strong>
            {" "}
            <a
              href="https://rk-web-solutions.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              RK Web Solutions
            </a>
          </strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
