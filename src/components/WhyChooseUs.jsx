import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Dumbbell, Flower2, Handshake } from 'lucide-react';

const valueCards = [
  {
    icon: Handshake,
    number: '01',
    title: 'Respectful Space',
    text: 'We anchor every workout and private consultation in your personal comfort. You\'ll find genuine encouragement in our classes (along with plenty of dignity).'
  },
  {
    icon: Dumbbell,
    number: '02',
    title: 'Smart Training',
    text: 'Our coaches lean heavily on progressive programming and dialed-in form coaching. So you hit realistic goals and hold onto those results long-term.'
  },
  {
    icon: Flower2,
    number: '03',
    title: 'Whole Lifestyle',
    text: 'Fitness here ties together your strength work and physical recovery. We also bolt on grounded nutrition and flexible schedule support. And you get a community that actually has your back.'
  }
];

const whyQuotes = [
  {
    text: "Fitness is not about being better than someone else. It's about becoming stronger than you were yesterday.",
    author: 'Femme Fit Hub'
  },
  {
    text: 'Strength begins the moment you decide your health deserves time, care, and consistency.',
    author: 'Femme Fit Hub Trainers'
  },
  {
    text: 'Every confident woman was once a beginner who chose to keep showing up.',
    author: 'Femme Fit Hub Community'
  }
];

function WhyChooseUs() {
  const [activeQuote, setActiveQuote] = useState(0);
  const quote = whyQuotes[activeQuote];

  const changeQuote = (direction) => {
    setActiveQuote((index) => (index + direction + whyQuotes.length) % whyQuotes.length);
  };

  return (
    <section id="why" className="why-section landing-anchor">
      <div className="container">
        <div className="section-header centered">
          <span className="section-kicker">Why Choose Us</span>
          <h2>Everything You Need to Train With Confidence</h2>
          <p>Comfort, structure, expert coaching, and a supportive women-first environment.</p>
        </div>
        <div className="why-grid">
          {valueCards.map(({ icon: Icon, number, title, text }) => (
            <article className="why-card" key={title}>
              <div className="why-icon"><Icon size={28} /></div>
              <strong>{number}</strong>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="why-quote-card">
          <div className="quote-icon">&ldquo;</div>
          <blockquote key={quote.text}>{quote.text}</blockquote>
          <span className="quote-author">- {quote.author}</span>
          <div className="quote-controls" aria-label="Motivational quote controls">
            <button type="button" onClick={() => changeQuote(-1)} aria-label="Previous quote">
              <ChevronLeft size={18} />
            </button>
            <span>{activeQuote + 1} / {whyQuotes.length}</span>
            <button type="button" onClick={() => changeQuote(1)} aria-label="Next quote">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <div className="why-trust-strip" aria-label="Femme Fit Hub trust highlights">
          <span>Women-Only Environment</span>
          <span>Certified Physiotherapists</span>
          {/* <span>Certified Acupuncture Doctor</span> */}
          <span>Flexible Timings</span>
          <span>Supportive Community</span>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
