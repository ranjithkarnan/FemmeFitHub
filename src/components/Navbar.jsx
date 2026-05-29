import React from 'react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Dumbbell, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Programs', path: '/programs' },
  { label: 'Trainers', path: '/trainers' },
  { label: 'Membership', path: '/membership' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Stories', path: '/testimonials' },
  { label: 'Schedule', path: '/schedule' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' }
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <Link className="brand" to="/" aria-label="Femme Fit Hub home">
          <span className="brand-mark"><Dumbbell size={22} /></span>
          <span>Femme Fit Hub</span>
        </Link>

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
            <NavLink key={item.path} to={item.path} end={item.path === '/'}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
