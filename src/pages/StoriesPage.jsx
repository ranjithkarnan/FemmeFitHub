import React from 'react';
import Testimonials from '../components/Testimonials.jsx';
import SEO from '../components/SEO.jsx';

function StoriesPage() {
  return (
    <>
      <SEO
        title="Member Stories | Femme Fit Hub"
        description="Read real member stories and Google reviews from women who found strength, confidence, consistency, and community at Femme Fit Hub."
      />
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker">Queens Stories </div>
          {/* <h1>Honest words from women who chose consistency and found confidence.</h1> */}
           <h1>Trusted by women. Celebrated through stories. Every experience share
reflects growth confidence and meaningful transformation
</h1>
        </div>
      </section>
      <Testimonials />
    </>
  );
}

export default StoriesPage;
