import React from 'react';
import { useState } from 'react';
import { galleryImages } from '../data/gallery.js';

function Gallery({ transformationsOnly = false }) {
  const [preview, setPreview] = useState(null);

  return (
    <section className="section gallery-section">
      <div className="container">
        <div className="section-heading">
          <div className="section-kicker">Transformations</div>
          <h2>Progress looks different for every woman, and every win matters.</h2>
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
              <figure className="gallery-item" key={item.title} onClick={() => setPreview(item)}>
                <img src={item.image} alt={item.alt} loading="lazy" />
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
      {preview && (
        <button className="lightbox" type="button" onClick={() => setPreview(null)} aria-label="Close gallery preview">
          <img src={preview.image} alt={preview.alt} />
          <span>{preview.title}</span>
        </button>
      )}
    </section>
  );
}

export default Gallery;
