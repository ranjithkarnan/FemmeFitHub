import React from 'react';
import MembershipPlans from '../components/MembershipPlans.jsx';
import SEO from '../components/SEO.jsx';

function MembershipPage() {
  return (
    <>
      <SEO
        title="Membership Plans | Femme Fit Hub"
        description="Choose a Femme Fit Hub membership journey with beginner, guided progress, and transformation-focused women-only fitness support."
      />
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker">Membership</div>
          <h1>Choose the support level that matches your goal and schedule.</h1>
        </div>
      </section>
      <MembershipPlans />
    </>
  );
}

export default MembershipPage;
