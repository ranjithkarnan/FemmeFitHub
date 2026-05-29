import React from 'react';
import { ArrowRight, CalendarCheck, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero section">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy reveal-up">
          <div className="eyebrow">Premium women-only fitness studio</div>
          <h1>Empowering Women Through Fitness</h1>
          <p>
            Build strength, confidence, health, and a lifestyle you love with expert-led training,
            uplifting community, and flexible programs made for women at every stage.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/contact">
              Join Now <ArrowRight size={18} />
            </Link>
            <Link className="btn btn-soft" to="/programs">View Programs</Link>
          </div>
          <div className="hero-badges" aria-label="Gym highlights">
            <span><ShieldCheck size={18} /> Women Only Gym</span>
            <span><Sparkles size={18} /> Certified Trainers</span>
            <span><CalendarCheck size={18} /> Flexible Timings</span>
          </div>
        </div>

        <div className="hero-visual reveal-up delay-1">
          <img
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80"
            alt="Women training confidently in a modern fitness studio"
          />
          <div className="hero-stat top">
            <strong>4.9/5</strong>
            <span>Member happiness</span>
          </div>
          <div className="hero-stat bottom">
            <strong>1,200+</strong>
            <span>Transformations guided</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
