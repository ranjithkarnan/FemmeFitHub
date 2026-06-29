import React from 'react';
import Trainers from '../components/Trainers.jsx';
import SEO from '../components/SEO.jsx';

function TrainersPage() {
  return (
    <>
      <SEO
        title="Certified Trainers | Femme Fit Hub"
        description="Meet Femme Fit Hub certified trainers for strength training, Zumba, yoga, nutrition coaching, and sustainable habit change."
      />
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker">Certified Trainers</div>
          <h1>Meet the coaches behind our member transformations.</h1>
          {/* <p>Friendly experts in strength, dance fitness, yoga, nutrition, and sustainable habit change.</p> */}
        </div>
      </section>
      <Trainers />
    </>
  );
}

export default TrainersPage;
