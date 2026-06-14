import React from 'react';
import Testimonials from '../components/Testimonials.jsx';
import Gallery from '../components/Gallery.jsx';

function TestimonialsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker">Google Reviews</div>
          <h1>Trusted by women who train with confidence.</h1>
        </div>
      </section>
      <Testimonials />
      <Gallery transformationsOnly />
    </>
  );
}

export default TestimonialsPage;
