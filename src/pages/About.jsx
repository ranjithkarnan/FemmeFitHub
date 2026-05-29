import React from 'react';
import AboutPreview from '../components/AboutPreview.jsx';
import FAQ from '../components/FAQ.jsx';

function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker">Our Story</div>
          <h1>A premium fitness space where women train with clarity, comfort, and confidence.</h1>
          <p>Femme Fit Hub was created for women who want serious coaching without intimidation.</p>
        </div>
      </section>
      <AboutPreview full />
      <section className="section values-section">
        <div className="container value-grid">
          <article><strong>01</strong><h2>Respectful Space</h2><p>Every class, consultation, and workout is built around comfort, dignity, and encouragement.</p></article>
          <article><strong>02</strong><h2>Smart Training</h2><p>We use progressive programming, form coaching, and realistic goals for long-term results.</p></article>
          <article><strong>03</strong><h2>Whole Lifestyle</h2><p>Fitness here includes strength, nutrition, recovery, schedule support, and community.</p></article>
        </div>
      </section>
      <FAQ />
    </>
  );
}

export default About;
