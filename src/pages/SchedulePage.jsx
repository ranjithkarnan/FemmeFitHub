import React from 'react';
import Schedule from '../components/Schedule.jsx';
import Contact from '../components/Contact.jsx';

function SchedulePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker">Class Schedule</div>
          <h1>Find a time that fits your day and keeps your momentum alive.</h1>
        </div>
      </section>
      <Schedule />
      <Contact />
    </>
  );
}

export default SchedulePage;
