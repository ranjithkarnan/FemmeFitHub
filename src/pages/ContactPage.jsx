import React from 'react';
import Contact from '../components/Contact.jsx';
import FAQ from '../components/FAQ.jsx';

function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker">Start Today</div>
          <h1>Ready to feel stronger, healthier, and more confident?</h1>
        </div>
      </section>
      <Contact />
      <FAQ />
    </>
  );
}

export default ContactPage;
