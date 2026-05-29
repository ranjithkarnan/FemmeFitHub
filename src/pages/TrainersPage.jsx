import React from 'react';
import Trainers from '../components/Trainers.jsx';
import Testimonials from '../components/Testimonials.jsx';

function TrainersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker">Certified Trainers</div>
          <h1>Meet the coaches behind our member transformations.</h1>
          <p>Friendly experts in strength, dance fitness, yoga, nutrition, and sustainable habit change.</p>
        </div>
      </section>
      <Trainers />
      <Testimonials />
    </>
  );
}

export default TrainersPage;
