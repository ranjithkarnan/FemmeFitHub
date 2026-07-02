import React, { useEffect, useRef, useState } from "react";
import {
  Clock3,
  Eye,
  Goal,
  HeartHandshake,
  Target,
  Trophy,
  UsersRound,
} from "lucide-react";
import TreadmillMobile from "../assets/images/TreadMils-480.webp";
import Treadmill from "../assets/images/TreadMils-960.webp";
import { useContactModal } from "../context/ContactModalContext.jsx";
import { CheckCircle2 } from "lucide-react";

const features = [
  { title: "Women-Only Environment", icon: UsersRound },
  { title: "Certified Coaches", icon: Trophy },
  { title: "Flexible Schedules", icon: Clock3 },
  { title: "Personalized Programs", icon: Goal },
];

const stats = [
  { value: 200, suffix: "+", label: "Members" },
  { value: 15, suffix: "+", label: "Certified Trainers" },
  { value: 99, suffix: "%", label: "Satisfaction" },
  { value: 50, suffix: "+", label: "Weekly Classes" },
];

// const principles = [
//   {
//     title: 'Mission',
//     text: 'Empowering women to transform their health, build confidence, and create stronger lifestyles through fitness, support, and consistency. Strong Women. Mental strength. Healthy Lives. Endless Confidence.',
//     icon: Target
//   },
//   {
//     title: 'Vision',
//     text: 'To become the most trusted lady’s fitness destination, helping women transform their health, unlock their confidence, and achieve sustainable wellness at every stage of life. We aim to inspire every woman to become stronger physically and mentally through expert guidance, supportive coaching, and a positive environment where every fitness journey is celebrated.',
//     icon: Eye
//   },
//   {
//     title: 'Values',
//     text: 'We believe every woman deserves to feel strong, mentally, healthy, and confident. We are committed to providing a supportive, safe, and motivating environment with personalized guidance to help every client achieve her proper life cycle & fitness goals.',
//     icon: HeartHandshake
//   }
// ];

const principles = [
  {
    title: "Mission",
    text: [
      "Empowering women to transform their health.",
      "Build confidence.",
      "Create stronger lifestyles through fitness, support, and consistency.",
      "Strong Women.",
      "Mental strength.",
      "Healthy Lives.",
      "Endless Confidence.",
    ],
    icon: Target,
  },
  {
    title: "Vision",
    text: [
      "To become the most trusted lady’s fitness destination.",
      "Helping women transform their health.",
      "Unlock their confidence.",
      "Achieve sustainable wellness at every stage of life.",
      "Inspire every woman to become stronger physically and mentally.",
      "Provide expert guidance.",
      "Offer supportive coaching.",
      "Create a positive environment where every fitness journey is celebrated.",
    ],
    icon: Eye,
  },
  {
    title: "Values",
    text: [
      "We believe every woman deserves to feel strong.",
      "Mentally healthy.",
      "Confident.",
      "Committed to providing a supportive, safe, and motivating environment.",
      "Personalized guidance.",
      "Help every client achieve her proper life cycle & fitness goals.",
    ],
    icon: HeartHandshake,
  },
];

function CountUpStat({ value, suffix, label }) {
  const [count, setCount] = useState(0);
  const statRef = useRef(null);

  useEffect(() => {
    const node = statRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const startTime = performance.now();
        const duration = 1100;

        const animate = (time) => {
          const progress = Math.min((time - startTime) / duration, 1);
          setCount(Math.round(value * progress));

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <article ref={statRef}>
      <strong>
        {count}
        {suffix}
      </strong>
      <span>{label}</span>
    </article>
  );
}

function AboutPreview({ full = false }) {
  const { openContactModal } = useContactModal();

  return (
    <section className="section about-section">
      <div className="container">
        <div className="about-section-header">
          <div className="section-kicker">About Femme Fit Hub</div>
          <h2>A Premium Fitness Space Designed for Women.</h2>
          <p>
            Femme Fit Hub was created for women who want serious coaching,
            lasting results, and a supportive environment without intimidation.
          </p>
        </div>

        <div className="split-layout about-split">
          <div className="image-stack about-image-stack">
            <img
              src={Treadmill}
              srcSet={`${TreadmillMobile} 480w, ${Treadmill} 960w`}
              sizes="(max-width: 640px) 92vw, (max-width: 980px) 70vw, 46vw"
              alt="Trainer helping a member with strength training"
              width="960"
              height="640"
              loading="lazy"
              decoding="async"
            />
            <div className="glass-note">
              <strong>Women-First Coaching</strong>
              <span>Supportive • Professional • Results Driven</span>
            </div>
          </div>

          <div className="about-content-card">
            <div className="section-kicker">Why Women Choose Us</div>
            <h3>Serious coaching with comfort, clarity, and community.</h3>
            <p>
              We've loaded up on premium gym facilities, but we kept the expert
              coaching and warm community front and center. So every member can
              train with confidence (and finally stay consistent).
            </p>
            {full && (
              <p>
                Our studio rolls everything into one easy-to-follow experience.
                You'll find dedicated strength zones and cardio equipment
                feeding right into that group class energy. We also bolted on
                recovery and grounded nutrition guidance. And we round it
                all out with one-on-one personal training.
              </p>
            )}
            <div className="about-feature-grid">
              {features.map(({ title, icon: Icon }) => (
                <article className="about-feature-card" key={title}>
                  <Icon size={22} />
                  <span>{title}</span>
                </article>
              ))}
            </div>
            {!full && (
              <button
                className="text-link"
                type="button"
                onClick={openContactModal}
              >
                Book a studio visit
              </button>
            )}
          </div>
        </div>

        <div
          className="about-stat-grid"
          aria-label="Femme Fit Hub quick statistics"
        >
          {stats.map((stat) => (
            <CountUpStat key={stat.label} {...stat} />
          ))}
        </div>

        <div className="about-principles-grid">
          {principles.map(({ title, text, icon: Icon }) => (
            <article className="about-principle-card lift-card" key={title}>
              <div className="about-principle-icon">
                <Icon size={26} />
              </div>
              <h3>{title}</h3>
              {/* <p>{text}</p> */}
              <ul className="principle-list">
                {text.map((text) => (
                  <li key={text}>
                    <CheckCircle2 size={16} />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
