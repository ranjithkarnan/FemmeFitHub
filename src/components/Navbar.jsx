import React from 'react';
import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import womenLogo from "../assets/logo/femme-fit-logo.png";

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  {
    label: 'Programs',
    id: 'programs',
    children: [
      { label: 'Programs', id: 'programs' },
      { label: 'Why Choose Us', id: 'why' },
      { label: 'Fitness Calculator Hub', id: 'calculator' }
    ]
  },
  {
    label: 'Trainers',
    id: 'trainers',
    children: [
      { label: 'Trainers', id: 'trainers' },
      { label: 'Member Stories', id: 'stories' }
    ]
  },
  { label: 'Membership', id: 'membership' },
  {
    label: 'Gallery',
    id: 'gallery',
    children: [
      { label: 'Transformation Gallery', id: 'gallery' },
      { label: 'Fitness Tips', id: 'tips' },
      { label: 'Community', id: 'community' }
    ]
  },
  {
    label: 'Schedule',
    id: 'schedule',
    children: [
      { label: 'Class Schedule', id: 'schedule' },
      { label: 'Upcoming Challenges', id: 'challenges' }
    ]
  },
  {
    label: 'Contact',
    id: 'contact',
    children: [
      { label: 'Start Today', id: 'contact' },
      { label: 'FAQ', id: 'faq' },
      { label: 'Contact Us', id: 'contact' }
    ]
  }
];

const navSectionIds = [...new Set(navItems.flatMap((item) => [item.id, ...(item.children || []).map((child) => child.id)]))];

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
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = navSectionIds
      .map((id) => document.getElementById(id))
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

  const handleNavClick = (event, id) => {
    event?.preventDefault();
    setOpen(false);
    setOpenDropdown(null);

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
  };

  const toggleDropdown = (id) => {
    setOpenDropdown((current) => (current === id ? null : id));
  };

  const isItemActive = (item) => activeSection === item.id || item.children?.some((child) => child.id === activeSection);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Femme Fit Hub home" onClick={(event) => handleNavClick(event, 'home')}>
          {/* <span className="brand-mark"><Dumbbell size={22} /></span> */}
          <span className="brand-mark">
  <img src={womenLogo} size={25} alt="Femme Fit Hub women-only fitness studio logo" />
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
            item.children ? (
              <div
                className={`nav-dropdown ${isItemActive(item) ? 'active' : ''} ${openDropdown === item.id ? 'is-open' : ''}`.trim()}
                key={item.label}
              >
                <button
                  className="nav-link nav-dropdown-trigger"
                  type="button"
                  onClick={() => toggleDropdown(item.id)}
                  aria-expanded={openDropdown === item.id}
                  aria-current={isItemActive(item) ? 'page' : undefined}
                >
                  {item.label}
                  <ChevronDown size={15} />
                </button>
                <div className="nav-submenu" aria-label={`${item.label} submenu`}>
                  {item.children.map((child) => (
                    <a
                      href={`#${child.id}`}
                      key={`${item.label}-${child.label}`}
                      onClick={(event) => handleNavClick(event, child.id)}
                      className={activeSection === child.id ? 'active' : ''}
                      aria-current={activeSection === child.id ? 'page' : undefined}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`.trim()}
                href={`#${item.id}`}
                key={item.id}
                onClick={(event) => handleNavClick(event, item.id)}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </a>
            )
          ))}
          <a className="nav-cta" href="#contact" onClick={(event) => handleNavClick(event, 'contact')}>
            Join Now
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
