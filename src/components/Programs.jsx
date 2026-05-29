import React from 'react';
import { Link } from 'react-router-dom';
import { programs } from '../data/programs.js';

function Programs({ limit, showIntro = true }) {
  const visiblePrograms = limit ? programs.slice(0, limit) : programs;

  return (
    <section className="section">
      <div className="container">
        {showIntro && (
          <div className="section-heading">
            <div className="section-kicker">Programs</div>
            <h2>Classes that meet your body where it is and take it further.</h2>
            <p>Choose from strength, cardio, yoga, Zumba, nutrition, and personal coaching programs.</p>
          </div>
        )}
        <div className="card-grid programs-grid">
          {visiblePrograms.map(({ title, icon: Icon, image, description, duration }) => (
            <article className="program-card lift-card" key={title}>
              <img src={image} alt={`${title} class at Femme Fit Hub`} />
              <div className="program-content">
                <div className="program-icon"><Icon size={22} /></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <span>{duration}</span>
              </div>
            </article>
          ))}
        </div>
        {limit && <div className="center-action"><Link className="btn btn-primary" to="/programs">Explore all programs</Link></div>}
      </div>
    </section>
  );
}

export default Programs;
