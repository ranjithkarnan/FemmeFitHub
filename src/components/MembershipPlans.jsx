import React from 'react';
import { Check } from 'lucide-react';
import { plans } from '../data/plans.js';

function MembershipPlans() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <div className="section-kicker">Membership</div>
          <h2>Premium plans with clear value and flexible support.</h2>
          <p>Start simple, grow stronger, and upgrade whenever you want more personal attention.</p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article className={`pricing-card lift-card ${plan.featured ? 'featured' : ''}`} key={plan.name}>
              {plan.featured && <div className="plan-badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="price"><span>{plan.price}</span>{plan.period}</div>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}><Check size={17} /> {feature}</li>
                ))}
              </ul>
              <a className="btn btn-primary" href="/contact">Choose Plan</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MembershipPlans;
