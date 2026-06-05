import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CalendarCheck, Crown, Play, ShieldCheck, Sparkles } from 'lucide-react';

const heroStats = [
  { value: 500, suffix: '+', label: 'Members' },
  { value: 50, suffix: '+', label: 'Classes' },
  { value: 15, suffix: '+', label: 'Trainers' },
  { value: 98, suffix: '%', label: 'Satisfaction' }
];

function AnimatedCounter({ value, suffix = '', start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return undefined;

    let frameId;
    const duration = 1500;
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - ((1 - progress) ** 3);

      setCount(Math.round(value * easedProgress));

      if (progress < 1) {
        frameId = requestAnimationFrame(updateCount);
      }
    };

    frameId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(frameId);
  }, [start, value]);

  return <>{count}{suffix}</>;
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 120]);
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.35 });

  return (
    <section className="hero cinematic-hero">
      <motion.div className="hero-video-wrap" style={{ y }} aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=80"
        >
          <source src="https://cdn.coverr.co/videos/coverr-working-out-in-the-gym-9955/1080p.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <div className="hero-gradient" aria-hidden="true" />
      <div className="lux-particles" aria-hidden="true"><i /><i /><i /><i /></div>
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="eyebrow"><Crown size={16} /> Premium women-only fitness studio</div>
          <h1>Train Strong. Feel Confident. Live Better.</h1>
          <p>
            A premium women-only fitness studio designed for strength, wellness,
            weight loss, and confidence.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary glow-btn magnetic" href="#contact">
              Book Free Trial <ArrowRight size={18} />
            </a>
            <a className="btn btn-soft magnetic" href="#programs"><Play size={17} /> Explore Programs</a>
          </div>
          <div className="hero-badges" aria-label="Gym highlights">
            <span><ShieldCheck size={18} /> Women Only</span>
            <span><Sparkles size={18} /> Certified Trainers</span>
            <span><CalendarCheck size={18} /> Free Trial Class</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <img
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80"
            alt="Women training confidently in a modern fitness studio"
            loading="eager"
          />
          <div ref={statsRef} className="hero-stat-cluster" aria-label="Femme Fit Hub studio stats">
            {heroStats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <strong>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} start={statsInView} />
                </strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
