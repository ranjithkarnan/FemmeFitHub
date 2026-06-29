import React from 'react';
import CalculatorHub from '../components/CalculatorHub.jsx';
import SEO from '../components/SEO.jsx';

function CalculatorPage() {
  return (
    <>
      <SEO
        title="Fitness Calculator Hub | Femme Fit Hub"
        description="Estimate BMI, calories, hydration, body fat, and macros before your Femme Fit Hub women-only fitness consultation."
      />
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker">Fitness Calculator Hub</div>
          <h1>Start with clear personal numbers before your coaching plan.</h1>
        </div>
      </section>
      <CalculatorHub />
    </>
  );
}

export default CalculatorPage;
