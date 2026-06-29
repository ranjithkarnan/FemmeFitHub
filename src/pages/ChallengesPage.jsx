import React from 'react';
import Challenges from '../components/Challenges.jsx';
import SEO from '../components/SEO.jsx';

function ChallengesPage() {
  return (
    <>
      <SEO
        title="Upcoming Challenges | Femme Fit Hub"
        description="Join weekly and monthly women-only fitness challenges at Femme Fit Hub for strength, Zumba, nutrition, and consistency."
      />
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker">Upcoming Challenges</div>
          <h1>Member challenges that keep fitness exciting and consistent.</h1>
        </div>
      </section>
      <Challenges />
    </>
  );
}

export default ChallengesPage;
