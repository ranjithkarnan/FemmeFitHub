import React from 'react';
import { CalendarDays, Crown, Home, Phone, Sparkles } from 'lucide-react';

const items = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'Programs', href: '#programs', icon: Sparkles },
  { label: 'Plans', href: '#membership', icon: Crown },
  { label: 'Schedule', href: '#schedule', icon: CalendarDays },
  { label: 'Contact', href: '#contact', icon: Phone }
];

function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Mobile quick navigation">
      {items.map(({ label, href, icon: Icon }) => (
        <a key={href} href={href}>
          <Icon />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  );
}

export default BottomNav;
