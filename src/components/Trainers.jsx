import React from 'react';
import { trainers } from '../data/trainers.js';

function Trainers() {
  return (
    <section className="section alt-section">
      <div className="container">
        <div className="section-heading">
          <div className="section-kicker">Trainers</div>
          <h2>Certified coaches who keep your progress safe, smart, and motivating.</h2>
        </div>
        <div className="card-grid trainer-grid">
          {trainers.map((trainer) => (
            <article className="trainer-card lift-card" key={trainer.name}>
              <img src={trainer.image} alt={`${trainer.name}, ${trainer.role}`} />
              <div>
                <h3>{trainer.name}</h3>
                <p>{trainer.role}</p>
                <span>{trainer.specialty}</span>
                <strong>{trainer.experience} experience</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trainers;
