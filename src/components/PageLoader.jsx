import React, { useEffect, useState } from 'react';
import logo from '../assets/logo/femme-fit-logo-160.webp';
import './PageLoader.css';

const quotes = [
  'Strong women build strong routines.',
  'Your strength is already inside you.',
  'Every workout is a promise to yourself.',
  'Confidence grows one rep at a time.',
  'You are not starting over, you are starting stronger.',
  'Progress looks different for every woman.',
  'Move with purpose. Train with confidence.',
  'Small steps create powerful transformations.',
  'Your body deserves strength, care, and patience.',
  'Show up for yourself today.',
  'Train for the woman you are becoming.',
  'Strength is self-care in motion.',
  'Your confidence deserves a strong foundation.',
  'A powerful routine begins with one brave step.',
  'Lift your energy, your posture, and your belief.',
  'Wellness is built through consistent choices.',
  'Every session is a step toward self-trust.',
  'Strong feels beautiful on every woman.',
  'Your journey is personal, powerful, and worthy.',
  'Build strength that supports your whole life.',
  'You deserve a space where you feel unstoppable.',
  'Discipline becomes confidence when you keep going.',
  'Today is another chance to choose your health.',
  'Fitness is your time to feel fully yourself.',
  'Progress begins when you decide you matter.',
  'Celebrate the effort, not only the outcome.',
  'Your strongest chapter can start today.',
  'Move gently, train boldly, grow steadily.',
  'Healthy routines create lasting confidence.',
  'Strong women rise through consistent action.',
  'Your body is capable of beautiful strength.',
  'Train with patience, grow with pride.',
  'Confidence blooms when you honor your body.',
  'Every rep reminds you what you can do.',
  'Your strength story belongs only to you.',
  'A better routine can change your whole day.',
  'Wellness is not pressure, it is partnership.',
  'Choose strength, choose care, choose yourself.',
  'The goal is progress with peace.',
  'You are allowed to become stronger every day.'
];

function getNextQuote() {
  const lastIndex = Number(window.localStorage.getItem('lastLoaderQuoteIndex'));
  let nextIndex = Math.floor(Math.random() * quotes.length);

  if (quotes.length > 1) {
    while (nextIndex === lastIndex) {
      nextIndex = Math.floor(Math.random() * quotes.length);
    }
  }

  window.localStorage.setItem('lastLoaderQuoteIndex', String(nextIndex));

  return quotes[nextIndex];
}

function PageLoader({ onFinish }) {
  const [hide, setHide] = useState(false);
  const [quote, setQuote] = useState('Strong women build strong routines.');

  useEffect(() => {
    const scheduleIdle = window.requestIdleCallback || ((callback) => window.setTimeout(callback, 1200));
    const cancelIdle = window.cancelIdleCallback || window.clearTimeout;
    const idleId = scheduleIdle(() => setQuote(getNextQuote()), { timeout: 1500 });

    return () => cancelIdle(idleId);
  }, []);

  useEffect(() => {
    let finishTimer;
    const timer = window.setTimeout(() => {
      setHide(true);

      finishTimer = window.setTimeout(() => {
        onFinish?.();
      }, 450);
    }, 2200);

    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div className={`page-loader ${hide ? 'hide' : ''}`} role="status" aria-live="polite" aria-label="Femme Fit Hub loading">
      <div className="loader-glow" />

      <div className="loader-card">
        <div className="loader-logo-ring">
          <img src={logo} width="160" height="160" alt="Femme Fit Hub" decoding="async" />
        </div>

        {/* <h1>Femme Fit Hub</h1> */}

        <p className="loader-quote">"{quote}"</p>

        <div className="loader-line" aria-hidden="true">
          <span />
        </div>
      </div>
    </div>
  );
}

export default PageLoader;
