import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials.js';

function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % testimonials.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  const changeSlide = (direction) => {
    setActive((index) => (index + direction + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[active];

  return (
    <section className="section testimonial-section">
      <div className="container testimonial-wrap">
        <div>
          <div className="section-kicker">Member Stories</div>
          <h2>Honest words from women who chose consistency and found confidence.</h2>
        </div>
        <article className="testimonial-card" aria-live="polite">
          <div className="video-testimonial"><Play /><span>Video Story Preview</span></div>
          <Quote />
          <p>“{testimonial.quote}”</p>
          <div>
            <strong>{testimonial.name}</strong>
            <span>{testimonial.result}</span>
          </div>
          <div className="slider-controls">
            <button type="button" aria-label="Previous testimonial" onClick={() => changeSlide(-1)}><ChevronLeft /></button>
            <button type="button" aria-label="Next testimonial" onClick={() => changeSlide(1)}><ChevronRight /></button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Testimonials;
