import React from 'react';
import Gallery from '../components/Gallery.jsx';
import Testimonials from '../components/Testimonials.jsx';

function GalleryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker">Transformation Gallery</div>
          <h1>Progress looks different for every woman, and every win matters.</h1>
        </div>
      </section>
      <Gallery />
      <Testimonials />
    </>
  );
}

export default GalleryPage;
