import React from 'react';
import Schedule from '../components/Schedule.jsx';
import SEO from '../components/SEO.jsx';

function SchedulePage() {
  return (
    <>
      <SEO
        title="Class Schedule | Femme Fit Hub"
        description="Find Femme Fit Hub class timings for strength training, yoga, Zumba, cardio fitness, and women-only coaching sessions."
      />
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker">Class Schedule</div>
          <h1>Find a time that fits your day and keeps your momentum alive.</h1>
        </div>
      </section>
      <Schedule />
    </>
  );
}

export default SchedulePage;
