import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import womenLogo from '../assets/logo/femme-fit-logo.png';
import { useContactModal } from '../context/ContactModalContext.jsx';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Programs',
    to: '/programs',
    children: [
      { label: 'Why Choose Us', to: '/why-choose-us' }
    ]
  },
  { label: 'Trainers', to: '/trainers' },
  { label: 'Membership', to: '/membership' },
  {
    label: 'Gallery',
    to: '/gallery',
    children: [
      // { label: 'Transformation Gallery', to: '/gallery' },
      { label: 'Queens Stories', to: '/stories' }
    ]
  },
  {
    label: 'Schedule',
    to: '/schedule',
    children: [
      // { label: 'Class Schedule', to: '/schedule' },
      { label: 'Challenges', to: '/challenges' }
    ]
  },
  {
    label: 'Start Today',
    to: '/contact',
    children: [
      // { label: 'Start Today', to: '/contact' },
      // { label: 'Member Stories', to: '/stories' },
      { label: 'FAQ', to: '/faq' }
    ]
  }
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
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const { openContactModal } = useContactModal();

  const closeMenu = () => {
    setOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (id) => {
    setOpenDropdown((current) => (current === id ? null : id));
  };

  const isItemActive = (item) => location.pathname === item.to || item.children?.some((child) => child.to === location.pathname);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <NavLink className="brand" to="/" aria-label="Femme Fit Hub home" onClick={closeMenu}>
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
        </NavLink>

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
                className={`nav-dropdown ${isItemActive(item) ? 'active' : ''} ${openDropdown === item.label ? 'is-open' : ''}`.trim()}
                key={item.label}
              >
                <div className="nav-dropdown-head">
                  <NavLink
                    className={({ isActive }) => `nav-link nav-dropdown-trigger ${isActive || isItemActive(item) ? 'active' : ''}`.trim()}
                    to={item.to}
                    onClick={closeMenu}
                    aria-current={isItemActive(item) ? 'page' : undefined}
                  >
                    {item.label}
                  </NavLink>
                  <button
                    className="nav-dropdown-toggle"
                    type="button"
                    onClick={() => toggleDropdown(item.label)}
                    aria-label={`Toggle ${item.label} submenu`}
                    aria-expanded={openDropdown === item.label}
                  >
                    <ChevronDown size={15} />
                  </button>
                </div>
                <div className="nav-submenu" aria-label={`${item.label} submenu`}>
                  {item.children.map((child) => (
                    <NavLink
                      to={child.to}
                      key={`${item.label}-${child.label}`}
                      onClick={closeMenu}
                      className={({ isActive }) => (isActive ? 'active' : undefined)}
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`.trim()}
                to={item.to}
                key={item.to}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            )
          ))}
          <button
            className="nav-cta"
            type="button"
            onClick={() => {
              closeMenu();
              openContactModal();
            }}
          >
            Join Now
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
