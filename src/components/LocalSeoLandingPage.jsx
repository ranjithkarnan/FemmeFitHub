import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BatteryCharging,
  CheckCircle2,
  ChevronDown,
  Dumbbell,
  HeartPulse,
  MessageCircle,
  Salad,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Star,
  Stethoscope,
  Trophy,
  UsersRound,
  Zap
} from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import SEO from './SEO.jsx';
import { quickWhatsAppUrl } from '../utils/whatsapp.js';
import { galleryImages } from '../data/gallery.js';
import { googleReviews } from '../data/testimonials.js';
import { useContactModal } from '../context/ContactModalContext.jsx';

const trustBadges = ['Women Only', 'Certified Trainers', 'Nutrition Support'];

const heroStats = [
  { value: 200, suffix: '+', label: 'Active Members' },
  { value: 79, suffix: '+', label: 'Google Reviews' },
  { value: 99, suffix: '%', label: 'Satisfaction' }
];

const conversionCards = [
  ['Free Trial Class', 'Experience the studio, trainer support, and class energy before joining.', Sparkles],
  ['Goal-Based Plan', 'Get a practical training direction for weight loss, strength, posture, or wellness.', BadgeCheck],
  ['Women-Only Comfort', 'Train in a supportive space designed around privacy, confidence, and consistency.', ShieldCheck]
];

const benefits = [
  ['Hygienic Environment', 'Clean, organized spaces designed for comfortable daily training.', ShieldCheck],
  ['Modern Equipment', 'Strength, cardio, and functional tools for all fitness levels.', Dumbbell],
  ['Women Trainers', 'Friendly coaching support for confidence, form, and consistency.', UsersRound],
  ['Cross Fit', 'Energetic functional workouts that build stamina and strength.', Zap],
  ['Nutrition Support', 'Practical guidance for sustainable eating and fitness results.', Salad],
  ['Physio Guidance', 'Mobility, posture, recovery, and safe movement support.', Stethoscope],
  ['Fully AC', 'A comfortable studio environment for focused workouts.', Snowflake],
  ['Power Backup', 'Reliable electrical backup for uninterrupted training sessions.', BatteryCharging]
];

const timeline = [
  ['Step 1', 'Consultation', 'Understand your goal, comfort level, and routine.'],
  ['Step 2', 'Fitness Assessment', 'Review stamina, strength, posture, and starting point.'],
  ['Step 3', 'Personalized Plan', 'Choose the right program, batch, and coaching support.'],
  ['Step 4', 'Training & Nutrition', 'Follow guided workouts with practical nutrition habits.'],
  ['Step 5', 'Results & Progress Tracking', 'Track consistency, confidence, stamina, and body changes.']
];

const programCards = [
  ['Strength Training', 'Build lean strength, posture, and everyday confidence.', Dumbbell, '/programs'],
  ['Cross Fit', 'Improve stamina with energetic functional fitness sessions.', Activity, '/programs'],
  ['Weight Loss', 'Structured fat-loss training with coaching and tracking.', HeartPulse, '/weight-loss-training-valasaravakkam'],
  ['Personal Training', 'One-on-one coaching for focused, customized progress.', BadgeCheck, '/programs'],
  ['Nutrition Guidance', 'Simple food habits to support strength and wellness.', Salad, '/programs']
];

const membershipPlans = [
  ['Monthly Plan', 'Flexible start for women building consistency.'],
  ['Quarterly Plan', 'A stronger routine window for visible progress.'],
  ['Half-Yearly Plan', 'Guided support for body composition and strength.'],
  ['Yearly Plan', 'Long-term wellness, confidence, and lifestyle transformation.']
];

const seoHighlights = [
  'Women-only fitness studio in Valasaravakkam and Chennai',
  'Strength training, cross fit, cardio, and weight loss support',
  'Nutrition guidance, consultation, and personal coaching options',
  'Clean facilities, modern equipment, female staff, and certified trainers'
];

function AnimatedCounter({ value, suffix, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return undefined;

    let frameId;
    const duration = 1300;
    const startedAt = performance.now();

    const tick = (time) => {
      const progress = Math.min((time - startedAt) / duration, 1);
      const eased = 1 - ((1 - progress) ** 3);
      setCount(Math.round(value * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [start, value]);

  return <>{count}{suffix}</>;
}

function LocalSeoLandingPage({ page }) {
  const [openFaq, setOpenFaq] = useState(0);
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.35 });
  const { openContactModal } = useContactModal();
  const heroImage = galleryImages[0];
  const galleryPreview = galleryImages.slice(0, 6);
  const reviewPreview = googleReviews.slice(0, 3);

  return (
    <div className={`local-seo-page local-seo-page-${page.variant || 'default'}`}>
      <SEO title={page.title} description={page.description} />

      <section className="local-premium-hero">
        <div className="container local-premium-hero-grid">
          <motion.div
            className="local-premium-copy"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <span className="section-kicker">{page.heroLabel || page.kicker}</span>
            <h1>{page.h1}</h1>
            <p>
              Women-only fitness studio for weight loss, strength training, cross fit,
              personal coaching, nutrition guidance, and wellness transformation.
            </p>
            <div className="local-premium-actions">
              <button className="btn btn-primary" type="button" onClick={openContactModal}>Book Free Trial <ArrowRight size={18} /></button>
              <a className="btn btn-soft" href={quickWhatsAppUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp Us</a>
            </div>
            <div className="local-premium-badges" aria-label="Femme Fit Hub trust badges">
              {trustBadges.map((badge) => <span key={badge}><CheckCircle2 size={16} /> {badge}</span>)}
            </div>
            <div className="local-hero-micro-panel" aria-label="Studio visit highlights">
              <span>Valasaravakkam</span>
              <span>Fully AC Studio</span>
              <span>Free Trial Available</span>
            </div>
          </motion.div>

          <motion.div
            className="local-premium-visual"
            initial={{ opacity: 0, x: 34 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.12 }}
          >
            <div className="local-hero-image-card">
              <img src={heroImage.image} alt="Women achieving fitness goals at Femme Fit Hub Valasaravakkam" />
              <div className="local-hero-image-note">
                <strong>Women-first coaching</strong>
                <span>Strength • Wellness • Confidence</span>
              </div>
            </div>
            <div className="local-floating-stats" ref={statsRef}>
              {heroStats.map((stat) => (
                <article key={stat.label}>
                  <strong><AnimatedCounter value={stat.value} suffix={stat.suffix} start={statsInView} /></strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="local-conversion-strip-section">
        <div className="container local-conversion-strip">
          <div className="local-conversion-copy">
            <span className="section-kicker">Start with clarity</span>
            <h2>{page.conversionTitle || 'Choose the right fitness path from day one'}</h2>
            <p>{page.conversionText || 'Book a consultation and our team will help you choose the right training direction before you commit.'}</p>
          </div>
          <div className="local-conversion-cards">
            {conversionCards.map(([title, text, Icon]) => (
              <article key={title}>
                <Icon size={22} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section local-benefits-section">
        <div className="container">
          <div className="section-header centered">
            <span className="section-kicker">Why Women Choose Femme Fit Hub</span>
            <h2>A premium fitness space built around comfort, coaching, and results.</h2>
          </div>
          <div className="local-benefits-grid">
            {benefits.map(([title, text, Icon], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
              >
                <Icon size={24} />
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section local-timeline-section">
        <div className="container">
          <div className="section-header centered">
            <span className="section-kicker">Transformation Timeline</span>
            <h2>From first visit to measurable progress.</h2>
          </div>
          <div className="local-timeline">
            {timeline.map(([step, title, text], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <span>{step}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section local-programs-section">
        <div className="container">
          <div className="section-header centered">
            <span className="section-kicker">Programs</span>
            <h2>Choose the training style that fits your goal.</h2>
          </div>
          <div className="local-program-cards">
            {programCards.map(([title, text, Icon, href]) => (
              <article key={title}>
                <Icon size={24} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <a href={href}>Learn More <ArrowRight size={15} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section local-reviews-section">
        <div className="container">
          <div className="section-header centered">
            <span className="section-kicker">Google Reviews</span>
            <h2>Loved by Women Across Valasaravakkam</h2>
            <p>★★★★★ 5★ Based on 79+ Google Reviews</p>
          </div>
          <div className="local-review-grid">
            {reviewPreview.map((review) => (
              <article key={review.name}>
                <div><FcGoogle size={22} /><strong>5★</strong></div>
                <p>{review.text}</p>
                <span>{review.name}</span>
              </article>
            ))}
          </div>
          <div className="center-action"><a className="btn btn-primary" href="/stories">See All Reviews on Google</a></div>
        </div>
      </section>

      <section className="section local-membership-section">
        <div className="container">
          <div className="section-header centered">
            <span className="section-kicker">Membership Preview</span>
            <h2>Flexible plans without pressure.</h2>
            <p>Exact prices are shared after consultation so our team can recommend the right support level.</p>
          </div>
          <div className="local-membership-grid">
            {membershipPlans.map(([title, text]) => (
              <article key={title}>
                <Trophy size={22} />
                <h3>{title}</h3>
                <p>{text}</p>
                <button type="button" onClick={openContactModal}>Get Membership Details</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section local-seo-content-section">
        <div className="container local-seo-premium-content">
          <div>
            <span className="section-kicker">Local SEO Guide</span>
            <h2>{page.sections[0].heading}</h2>
            <p>{page.intro}</p>
            <ul>
              {seoHighlights.map((item) => <li key={item}><CheckCircle2 size={17} /> {item}</li>)}
            </ul>
          </div>
          <div className="local-seo-highlight-card">
            {page.sections.slice(1, 4).map((section) => (
              <article key={section.heading}>
                <h3>{section.heading}</h3>
                <p>{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section local-accordion-section">
        <div className="container local-accordion-card" itemScope itemType="https://schema.org/FAQPage">
          <div className="section-header centered">
            <span className="section-kicker">FAQ</span>
            <h2>Questions before you visit.</h2>
          </div>
          <div className="local-accordion-list">
            {page.faqs.map(([question, answer], index) => {
              const isOpen = openFaq === index;
              return (
                <article className={isOpen ? 'is-open' : ''} itemScope itemProp="mainEntity" itemType="https://schema.org/Question" key={question}>
                  <button type="button" onClick={() => setOpenFaq(isOpen ? -1 : index)} aria-expanded={isOpen} itemProp="name">
                    {question}
                    <ChevronDown size={19} />
                  </button>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">{answer}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

            {/* hide for now */}
      {/* <section className="section local-gallery-section">
        <div className="container">
          <div className="section-header centered">
            <span className="section-kicker">Studio Gallery</span>
            <h2>Real energy from a women-only fitness space.</h2>
          </div>
          <div className="local-gallery-grid">
            {galleryPreview.map((item, index) => (
              <article className={index === 0 ? 'featured' : ''} key={item.title}>
                <img src={item.image} alt={item.alt} />
                <span>{item.title}</span>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      <section className="section local-final-cta-section">
        <div className="container local-final-cta">
          <span className="section-kicker">Start Today</span>
          <h2>Ready to Start Your Fitness Journey?</h2>
          <p>Join hundreds of women who trust Femme Fit Hub for strength, wellness, confidence, and sustainable fitness.</p>
          <div>
            <button className="btn btn-primary" type="button" onClick={openContactModal}>Book Free Trial</button>
            <a className="btn btn-soft" href={quickWhatsAppUrl} target="_blank" rel="noreferrer">WhatsApp Us</a>
          </div>
        </div>
      </section>

      {/* <div className="local-sticky-cta">
        <button type="button" onClick={openContactModal}><Sparkles size={18} /> Book Free Trial</button>
      </div> */}
    </div>
  );
}

export default LocalSeoLandingPage;
