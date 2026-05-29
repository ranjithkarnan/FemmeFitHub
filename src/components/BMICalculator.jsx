import React from 'react';
import { useMemo, useState } from 'react';

function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const result = useMemo(() => {
    const h = Number(height) / 100;
    const w = Number(weight);
    if (!h || !w) return null;
    const bmi = w / (h * h);
    const category = bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Healthy range' : bmi < 30 ? 'Overweight' : 'Obesity range';
    return { bmi: bmi.toFixed(1), category };
  }, [height, weight]);

  return (
    <section className="section bmi-section">
      <div className="container bmi-card">
        <div>
          <div className="section-kicker">BMI Calculator</div>
          <h2>Check your starting point in seconds.</h2>
          <p>BMI is only one health marker, but it can help begin a practical conversation with your trainer.</p>
        </div>
        <form className="bmi-form" onSubmit={(event) => event.preventDefault()}>
          <label>
            Height (cm)
            <input value={height} onChange={(event) => setHeight(event.target.value)} type="number" min="1" placeholder="165" />
          </label>
          <label>
            Weight (kg)
            <input value={weight} onChange={(event) => setWeight(event.target.value)} type="number" min="1" placeholder="62" />
          </label>
          <div className="bmi-result" aria-live="polite">
            {result ? (
              <>
                <strong>{result.bmi}</strong>
                <span>{result.category}</span>
              </>
            ) : (
              <span>Enter your details to calculate.</span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default BMICalculator;
