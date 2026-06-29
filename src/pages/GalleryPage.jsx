import React from 'react';
import Gallery from '../components/Gallery.jsx';
import SEO from '../components/SEO.jsx';

function GalleryPage() {
  return (
    <>
      <SEO
        title="Transformation Gallery | Femme Fit Hub"
        description="Browse Femme Fit Hub transformation moments, training sessions, yoga flow, Zumba energy, and member confidence milestones."
      />
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker">Transformation Gallery</div>
          <h1>Progress looks different for every woman, and every win matters.</h1>
        </div>
      </section>
      <Gallery />
    </>
  );
}

export default GalleryPage;
