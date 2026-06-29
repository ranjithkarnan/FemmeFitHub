import React from 'react';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import SEO from '../components/SEO.jsx';

function WhyChooseUsPage() {
  return (
    <>
      <SEO
        title="Why Choose Femme Fit Hub | Ladies Fitness Studio"
        description="Discover why women choose Femme Fit Hub for respectful space, smart coaching, flexible schedules, and a supportive women-only fitness community."
      />
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker">Why Choose Us</div>
          <h1>Everything you need to train with confidence.</h1>
        </div>
      </section>
      <WhyChooseUs />
    </>
  );
}

export default WhyChooseUsPage;
