import React from 'react';
import Programs from '../components/Programs.jsx';
import SEO from '../components/SEO.jsx';

function ProgramsPage() {
  return (
    <>
      <SEO
        title="Programs | Femme Fit Hub Women Only Gym"
        description="Explore strength training, weight loss training, Zumba, yoga, postnatal fitness, and nutrition coaching programs at Femme Fit Hub."
      />
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker">Programs</div>
          {/* <h1>Training options for strength, stamina, fat loss, flexibility, and lifestyle balance.</h1> */}
          <h1>Exclusive programs, Extraordinary results, step into a space where every session is designed to inspire confidence & celebrate your strength.</h1>

        </div>
      </section>
      <Programs />
    </>
  );
}

export default ProgramsPage;
