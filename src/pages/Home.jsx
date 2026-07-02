import React from "react";
import {
  ArrowRight,
} from "lucide-react";
import Hero from "../components/Hero.jsx";
import AboutPreview from "../components/AboutPreview.jsx";
import Programs from "../components/Programs.jsx";
import Trainers from "../components/Trainers.jsx";
import Testimonials from "../components/Testimonials.jsx";
import MembershipPlans from "../components/MembershipPlans.jsx";
import Schedule from "../components/Schedule.jsx";
import Challenges from "../components/Challenges.jsx";
import Contact from "../components/Contact.jsx";
// import CalculatorHub from "../components/CalculatorHub.jsx";
import Community from "../components/Community.jsx";
import { blogs } from "../data/blogs.js";
import { galleryImages } from "../data/gallery.js";
import {
  ShieldCheck,
  Sparkles,
  UsersRound,
  HeartPulse,
  Apple,
  Snowflake,
  Zap,
} from "lucide-react";
import SEO from "../components/SEO.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import { useContactModal } from "../context/ContactModalContext.jsx";



function Home() {
  const { openContactModal } = useContactModal();

  return (
    <>
      <SEO
        title="Femme Fit Hub | Best Ladies Gym in Valasaravakkam, Chennai"
        description="Join Femme Fit Hub, a premium ladies gym in Valasaravakkam, Chennai. Strength training, weight loss programs, cross fit, nutrition guidance, personal training, and women-only fitness coaching."
      />
      <section id="home" className="landing-anchor">
        <Hero />
      </section>

      <section id="about" className="landing-anchor">
        <AboutPreview full />
      </section>

      <section id="programs" className="landing-anchor home-programs-preview">
        <Programs />
      </section>

      <WhyChooseUs />


      <section className="section local-seo-home-links">
        <div className="container">
          <div className="section-header centered">
            <span className="section-kicker">Local Fitness Guides</span>
            <h2>Explore Femme Fit Hub in Valasaravakkam</h2>
            <p>Helpful pages for women comparing ladies gyms, weight loss training, women-only fitness spaces, and membership plan options.</p>
          </div>
          <div className="local-seo-home-grid">
            <a href="/ladies-gym-valasaravakkam">Ladies Gym in Valasaravakkam <ArrowRight size={16} /></a>
            <a href="/weight-loss-training-valasaravakkam">Weight Loss Training in Valasaravakkam <ArrowRight size={16} /></a>
            <a href="/women-only-gym-chennai">Women Only Gym in Chennai <ArrowRight size={16} /></a>
            <a href="/gym-membership-fees-valasaravakkam">Gym Membership Fees in Valasaravakkam <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section id="trainers" className="landing-anchor">
        <Trainers />
      </section>

      <section
        id="membership"
        className="landing-anchor home-membership-preview"
      >
        <MembershipPlans />
      </section>

      {/* <section
        id="gallery"
        className="landing-anchor section gallery-section home-transformation-preview"
      >
        <div className="container gallery-showcase">
          <div className="gallery-copy">
            <span className="section-kicker">Transformation Gallery</span>
            <h2>Every Woman's Progress Tells a Powerful Story</h2>
            <p>
              Progress looks different for every woman, and every win matters.
            </p>
            <p>
              Real studio moments, stronger routines, and visible confidence
              from members building their next chapter.
            </p>
            <a className="button primary" href="/gallery">
              View Transformations <ArrowRight size={18} />
            </a>
          </div>

          <div>
            <div className="gallery-bento">
              {galleryImages.slice(0, 3).map((item, index) => (
                <article
                  className={`gallery-card ${index === 0 ? "featured" : ""}`}
                  key={item.title}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    width="960"
                    height="640"
                    sizes="(max-width: 760px) 100vw, 33vw"
                  />
                  <div className="gallery-overlay">
                    <span>{item.title}</span>
                  </div>
                </article>
              ))}
            </div>
            <div
              className="gallery-stat-strip"
              aria-label="Transformation gallery values"
            >
              <span>Real Progress</span>
              <span>Real Confidence</span>
              <span>Real Community</span>
            </div>
          </div>
        </div>
      </section> */}

      <div id="stories" className="landing-anchor">
        <Testimonials />
      </div>


      {/* <CalculatorHub /> */}
      <section id="schedule" className="landing-anchor">
        <Schedule />
      </section>
      <Challenges />
      {/* <section id="tips" className="landing-anchor">
        <section className="section tips-community-section">
          <div className="container">
            <div className="section-header centered">
              <span className="section-kicker">Fitness Tips</span>
              <h2>Simple Guidance for Healthier Routines</h2>
              <p>
                Simple, practical guidance for women building healthier
                routines.
              </p>
            </div>
            <div className="tips-grid">
              {blogs.map((blog) => (
                <article className="tip-card" key={blog.title}>
                  <span className="tip-meta">
                    {blog.category} · {blog.date}
                  </span>
                  <h3>{blog.title}</h3>
                  <p>{blog.excerpt}</p>
                  <button type="button" onClick={openContactModal}>
                    Ask a coach <ArrowRight size={15} />
                  </button>
                </article>
              ))}
            </div>
            <Community />
          </div>
        </section>
      </section> */}
      <section id="contact" className="landing-anchor">
        <Contact />
      </section>
    </>
  );
}

export default Home;
