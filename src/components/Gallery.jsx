import React from 'react';
import { galleryImages } from '../data/gallery.js';

function Gallery({ transformationsOnly = false }) {
  return (
    <section className="section gallery-section">
      <div className="container">
        <div className="section-heading">
          <div className="section-kicker">Transformations</div>
          <h2>Real effort, visible confidence, and a stronger lifestyle.</h2>
          <p>Browse moments from training sessions, group classes, and member transformation wins.</p>
        </div>
        <div className="transformation-row">
          <article>
            <span>Before</span>
            <p>Low energy, irregular routine, unsure about gym equipment.</p>
          </article>
          <article>
            <span>After</span>
            <p>Consistent workouts, stronger posture, better stamina, and renewed confidence.</p>
          </article>
        </div>
        {!transformationsOnly && (
          <div className="gallery-grid">
            {galleryImages.map((item) => (
              <figure className="gallery-item" key={item.title}>
                <img src={item.image} alt={item.alt} />
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;
