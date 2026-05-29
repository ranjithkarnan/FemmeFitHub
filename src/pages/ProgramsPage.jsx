import React from 'react';
import Programs from '../components/Programs.jsx';
import BMICalculator from '../components/BMICalculator.jsx';
import Schedule from '../components/Schedule.jsx';

function ProgramsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker">Programs & Classes</div>
          <h1>Training options for strength, stamina, fat loss, flexibility, and lifestyle balance.</h1>
        </div>
      </section>
      <Programs showIntro={false} />
      <BMICalculator />
      <Schedule />
    </>
  );
}

export default ProgramsPage;
