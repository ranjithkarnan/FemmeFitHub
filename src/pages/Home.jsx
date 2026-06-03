import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Dumbbell, Flower2, Handshake, Star } from 'lucide-react';
import Hero from '../components/Hero.jsx';
import AboutPreview from '../components/AboutPreview.jsx';
import Programs from '../components/Programs.jsx';
import Trainers from '../components/Trainers.jsx';
import MembershipPlans from '../components/MembershipPlans.jsx';
import Schedule from '../components/Schedule.jsx';
import Contact from '../components/Contact.jsx';
import CalculatorHub from '../components/CalculatorHub.jsx';
import Community from '../components/Community.jsx';
import Footer from '../components/Footer.jsx';
import { blogs } from '../data/blogs.js';
import { galleryImages } from '../data/gallery.js';
import { testimonials } from '../data/testimonials.js';

const valueCards = [
  {
    icon: Handshake,
    number: '01',
    title: 'Respectful Space',
    text: 'Every class, consultation, and workout is built around comfort, dignity, and encouragement.'
  },
  {
    icon: Dumbbell,
    number: '02',
    title: 'Smart Training',
    text: 'We use progressive programming, form coaching, and realistic goals for long-term results.'
  },
  {
    icon: Flower2,
    number: '03',
    title: 'Whole Lifestyle',
    text: 'Fitness here includes strength, nutrition, recovery, schedule support, and community.'
  }
];

const whyQuotes = [
  {
    text: "Fitness is not about being better than someone else. It's about becoming stronger than you were yesterday.",
    author: 'Femme Fit Hub'
  },
  {
    text: 'Strength begins the moment you decide your health deserves time, care, and consistency.',
    author: 'Femme Fit Hub Coaches'
  },
  {
    text: 'Every confident woman was once a beginner who chose to keep showing up.',
    author: 'Femme Fit Hub Community'
  }
];

function Home() {
  const [activeQuote, setActiveQuote] = useState(0);

  const changeQuote = (direction) => {
    setActiveQuote((index) => (index + direction + whyQuotes.length) % whyQuotes.length);
  };

  const quote = whyQuotes[activeQuote];

  return (
    <>
      <section id="home" className="landing-anchor">
        <Hero />
      </section>

      <section id="about" className="landing-anchor">
        <AboutPreview full />
      </section>

      <section id="programs" className="landing-anchor home-programs-preview">
        <Programs />
      </section>

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
            <div className="quote-icon">❝</div>
            <blockquote key={quote.text}>{quote.text}</blockquote>
            <span className="quote-author">— {quote.author}</span>
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
            <span>Certified Coaches</span>
            <span>Flexible Timings</span>
            <span>Supportive Community</span>
          </div>
        </div>
      </section>

      <section id="trainers" className="landing-anchor">
        <Trainers />
      </section>

      <section id="membership" className="landing-anchor home-membership-preview">
        <MembershipPlans />
      </section>

      <section id="gallery" className="landing-anchor section gallery-section home-transformation-preview">
        <div className="container gallery-showcase">
          <div className="gallery-copy">
            <span className="section-kicker">Transformation Gallery</span>
            <h2>Every Woman's Progress Tells a Powerful Story</h2>
            <p>Progress looks different for every woman, and every win matters.</p>
            <p>Real studio moments, stronger routines, and visible confidence from members building their next chapter.</p>
            <a className="button primary" href="#gallery">
              View Transformations <ArrowRight size={18} />
            </a>
          </div>

          <div>
            <div className="gallery-bento">
              {galleryImages.slice(0, 3).map((item, index) => (
                <article className={`gallery-card ${index === 0 ? 'featured' : ''}`} key={item.title}>
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <div className="gallery-overlay">
                    <span>{item.title}</span>
                  </div>
                </article>
              ))}
            </div>
            <div className="gallery-stat-strip" aria-label="Transformation gallery values">
              <span>Real Progress</span>
              <span>Real Confidence</span>
              <span>Real Community</span>
            </div>
          </div>
        </div>
      </section>

      <section id="stories" className="landing-anchor section home-testimonials-preview">
        <div className="container">
          <div className="section-header centered">
            <span className="section-kicker">Member Stories</span>
            <h2>Real Women. Real Confidence. Real Progress.</h2>
            <p>Trusted by women who wanted sustainable fitness, not pressure.</p>
          </div>
          <div className="stories-grid">
            {testimonials.slice(0, 3).map((item) => (
              <article className="story-card" key={item.name}>
                <div className="story-stars" aria-label="5 star rating">
                  {[...Array(5)].map((_, index) => <Star fill="currentColor" size={17} key={index} />)}
                </div>
                <div className="story-quote-icon">❝</div>
                <p className="story-text">{item.quote}</p>
                <div className="story-member">
                  <div className="story-avatar" aria-hidden="true">{item.name.charAt(0)}</div>
                  <div>
                    <h3>{item.name}</h3>
                    <span>{item.result}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="stories-trust-strip" aria-label="Member stories trust highlights">
            <span>98% Satisfaction</span>
            <span>Supportive Coaching</span>
            <span>Women-Only Community</span>
          </div>
        </div>
      </section>

      <CalculatorHub />
      <section id="schedule" className="landing-anchor">
        <Schedule />
      </section>
      <section id="tips" className="landing-anchor">
        <section className="section tips-community-section">
          <div className="container">
            <div className="section-header centered">
              <span className="section-kicker">Fitness Tips</span>
              <h2>Simple Guidance for Healthier Routines</h2>
              <p>Simple, practical guidance for women building healthier routines.</p>
            </div>
            <div className="tips-grid">
              {blogs.map((blog) => (
              <article className="tip-card" key={blog.title}>
                  <span className="tip-meta">{blog.category} · {blog.date}</span>
                  <h3>{blog.title}</h3>
                  <p>{blog.excerpt}</p>
                  <a href="#contact">Ask a coach <ArrowRight size={15} /></a>
                </article>
              ))}
            </div>
            <Community />
          </div>
        </section>
      </section>
      <section id="contact" className="landing-anchor">
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default Home;
