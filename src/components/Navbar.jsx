import React from 'react';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import womenLogo from "../assets/logo/femme-fit-logo.png";

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Programs', id: 'programs' },
  { label: 'Trainers', id: 'trainers' },
  { label: 'Membership', id: 'membership' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Schedule', id: 'schedule' },
  { label: 'Contact', id: 'contact' }
];

function RoundedM() {
  return (
    <svg className="brand-rounded-m" viewBox="0 0 62 50" aria-hidden="true" focusable="false">
      <path d="M8 43V19C8 10.5 13.5 6 21 6C28.5 6 34 10.5 34 19V43" />
      <path d="M34 43V19C34 10.5 39.5 6 47 6C54.5 6 60 10.5 60 19V43" />
    </svg>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: [0.12, 0.28, 0.45]
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Femme Fit Hub home" onClick={handleNavClick}>
          {/* <span className="brand-mark"><Dumbbell size={22} /></span> */}
          <span className="brand-mark">
  <img src={womenLogo} size={25} alt="Femme Fit Hub Logo" />
</span>
          <span className="brand-wordmark">
            <span className="brand-femme" aria-hidden="true">
              <span>F</span>
              <span>E</span>
              <RoundedM />
              <RoundedM />
              <span>E</span>
            </span>
            <span className="brand-fithub">FIT HUB</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>

        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {navItems.map((item) => (
            <a
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`.trim()}
              href={`#${item.id}`}
              key={item.id}
              onClick={handleNavClick}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={handleNavClick}>
            Join Now
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
