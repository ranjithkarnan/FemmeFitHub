import React from 'react';
import { ArrowRight, CalendarHeart, Crown, PhoneCall } from 'lucide-react';

const ctas = [
  { title: 'Join 90-Day Challenge', text: 'A guided transformation with weekly progress rituals.', icon: Crown, path: '#membership' },
  { title: 'Book Free Trial Class', text: 'Experience the studio, coaching, and community first.', icon: CalendarHeart, path: '#schedule' },
  { title: 'Free Consultation', text: 'Talk to a coach about your goal and ideal plan.', icon: PhoneCall, path: '#contact' }
];

function PremiumCTA() {
  return (
    <section className="section premium-cta">
      <div className="container cta-grid">
        {ctas.map(({ title, text, icon: Icon, path }) => (
          <a className="cta-card magnetic" href={path} key={title}>
            <Icon />
            <h3>{title}</h3>
            <p>{text}</p>
            <span>Schedule now <ArrowRight size={16} /></span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default PremiumCTA;
