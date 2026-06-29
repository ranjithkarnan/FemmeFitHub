import React from 'react';
import Community from '../components/Community.jsx';
import SEO from '../components/SEO.jsx';

function CommunityPage() {
  return (
    <>
      <SEO
        title="Community | Femme Fit Hub"
        description="Explore the Femme Fit Hub women-only fitness community with events, challenges, member spotlights, and wellness support."
      />
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker">Community</div>
          <h1>The boutique club energy that makes consistency feel social.</h1>
        </div>
      </section>
      <section className="section tips-community-section">
        <div className="container">
          <Community />
        </div>
      </section>
    </>
  );
}

export default CommunityPage;
