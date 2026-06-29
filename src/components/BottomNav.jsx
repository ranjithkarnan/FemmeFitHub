import React from 'react';
import { NavLink } from 'react-router-dom';
import { CalendarDays, Crown, Home, Phone, Sparkles } from 'lucide-react';

const items = [
  { label: 'Home', to: '/', icon: Home },
  { label: 'Programs', to: '/programs', icon: Sparkles },
  { label: 'Plans', to: '/membership', icon: Crown },
  { label: 'Schedule', to: '/schedule', icon: CalendarDays },
  { label: 'Contact', to: '/contact', icon: Phone }
];

function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Mobile quick navigation">
      {items.map(({ label, to, icon: Icon }) => (
        <NavLink key={to} to={to}>
          <Icon />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export default BottomNav;
