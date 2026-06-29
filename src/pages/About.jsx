import React from 'react';
import AboutPreview from '../components/AboutPreview.jsx';
import SEO from '../components/SEO.jsx';

function About() {
  return (
    <>
      <SEO
        title="About Femme Fit Hub | Women Only Fitness Studio"
        description="Learn the story behind Femme Fit Hub, a premium women-only fitness studio built for comfort, confidence, strength, and sustainable wellness."
      />
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker">Our Story</div>
          <h1>A premium fitness space where women train with clarity, comfort, and confidence.</h1>
          {/* <p>Femme Fit Hub was created for women who want serious coaching without intimidation.</p> */}
        </div>
      </section>
      <AboutPreview full />
    </>
  );
}

export default About;
