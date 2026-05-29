import React from 'react';
import MembershipPlans from '../components/MembershipPlans.jsx';
import FAQ from '../components/FAQ.jsx';
import Contact from '../components/Contact.jsx';

function MembershipPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker">Membership</div>
          <h1>Choose the support level that matches your goal and schedule.</h1>
        </div>
      </section>
      <MembershipPlans />
      <FAQ />
      <Contact />
    </>
  );
}

export default MembershipPage;
