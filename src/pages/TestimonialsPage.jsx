import React from 'react';
import Testimonials from '../components/Testimonials.jsx';
import Gallery from '../components/Gallery.jsx';

function TestimonialsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker">Member Stories</div>
          <h1>Honest words from women who chose consistency and found confidence.</h1>
        </div>
      </section>
      <Testimonials />
      <Gallery transformationsOnly />
    </>
  );
}

export default TestimonialsPage;
