import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  Crown,
  Play,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import heroPoster480 from "../assets/images/hero-poster-480.webp";
import heroPoster768 from "../assets/images/hero-poster-768.webp";
import heroPoster360 from "../assets/images/hero-poster-360.webp";
import heroPoster1200 from "../assets/images/hero-poster-1200.webp";
import floorImage480 from "../assets/images/Floor-480.webp";
import floorImage768 from "../assets/images/Floor-768.webp";
import floorImage from "../assets/images/Floor-960.webp";
import { useContactModal } from '../context/ContactModalContext.jsx';


const heroStats = [
  { value: 200, suffix: "+", label: "Members" },
  { value: 150, suffix: "+", label: "Classes" },
  { value: 15, suffix: "+", label: "Trainers" },
  { value: 99, suffix: "%", label: "Satisfaction" },
];

function AnimatedCounter({ value, suffix = "", start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return undefined;

    let frameId;
    const duration = 1500;
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;

      setCount(Math.round(value * easedProgress));

      if (progress < 1) {
        frameId = requestAnimationFrame(updateCount);
      }
    };

    frameId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(frameId);
  }, [start, value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 120]);
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.35 });
  const { openContactModal } = useContactModal();

  return (
    <section className="hero cinematic-hero">
      <motion.div className="hero-video-wrap" style={{ y }} aria-hidden="true">
        <picture>
          <source media="(max-width: 380px)" srcSet={heroPoster360} />
          <source media="(max-width: 480px)" srcSet={heroPoster480} />
          <source media="(max-width: 768px)" srcSet={heroPoster768} />
          <img
            src={heroPoster1200}
            alt=""
            width="1200"
            height="898"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </picture>
      </motion.div>
      <div className="hero-gradient" aria-hidden="true" />
      <div className="lux-particles" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* <div className="eyebrow"><Crown size={16} /> Premium women-only fitness studio</div> */}
          <div className="eyebrow">
            <Crown size={16} /> Women fitness, strength & wellness studio
          </div>
          <h1>Train like a Queen, Rise like a Champion</h1>
          <p>
            Women-only fitness studio for weight loss, strength training, cross fit,
            nutrition guidance, mental strength and personal coaching.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary glow-btn magnetic" type="button" onClick={openContactModal}>
              Book Free Trial <ArrowRight size={18} />
            </button>
            <a className="btn btn-soft magnetic" href="/programs">
              <Play size={17} /> Explore Programs
            </a>
          </div>
          <div className="hero-badges" aria-label="Gym highlights">
            <span>
              <ShieldCheck size={18} /> Women Only
            </span>
            <span>
              <Sparkles size={18} /> Certified Physiotherapists
            </span>
              <span>
              <Sparkles size={18} /> Certified Acupuncture doctor
            </span>
            <span>
              <CalendarCheck size={18} /> Free Trial Class
            </span>

          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <img
            src={floorImage480}
            srcSet={`${floorImage480} 480w, ${floorImage768} 768w, ${floorImage} 960w`}
            sizes="(max-width: 640px) 92vw, (max-width: 980px) 70vw, 42vw"
            alt="Women training at Femme Fit Hub ladies gym in Valasaravakkam Chennai"
            width="856"
            height="640"
            loading="lazy"
            decoding="async"
          />
          <div
            ref={statsRef}
            className="hero-stat-cluster"
            aria-label="Femme Fit Hub studio stats"
          >
            {heroStats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <strong>
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    start={statsInView}
                  />
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
