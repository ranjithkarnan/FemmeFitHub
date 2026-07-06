import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
} from "lucide-react";
import Hero from "../components/Hero.jsx";
import SEO from "../components/SEO.jsx";

const AboutPreview = lazy(() => import("../components/AboutPreview.jsx"));
const Programs = lazy(() => import("../components/Programs.jsx"));
const WhyChooseUs = lazy(() => import("../components/WhyChooseUs.jsx"));
const Trainers = lazy(() => import("../components/Trainers.jsx"));
const Testimonials = lazy(() => import("../components/Testimonials.jsx"));
const MembershipPlans = lazy(() => import("../components/MembershipPlans.jsx"));
const Schedule = lazy(() => import("../components/Schedule.jsx"));
const Challenges = lazy(() => import("../components/Challenges.jsx"));
const Contact = lazy(() => import("../components/Contact.jsx"));

function DeferredSection({ children, minHeight = 420 }) {
  const ref = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (shouldRender) return undefined;

    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setShouldRender(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: "520px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldRender]);

  return (
    <div ref={ref} style={!shouldRender ? { minHeight } : undefined}>
      {shouldRender ? (
        <Suspense fallback={<div className="deferred-section-placeholder" style={{ minHeight }} />}>
          {children}
        </Suspense>
      ) : null}
    </div>
  );
}

function Home() {
  return (
    <>
      <SEO
        title="Ladies Gym in Valasaravakkam | Femme Fit Hub"
        description="Join Femme Fit Hub, a premium ladies gym in Valasaravakkam, Chennai. Strength training, weight loss programs, cross fit, nutrition guidance, personal training, and women-only fitness coaching."
      />
      <section id="home" className="landing-anchor">
        <Hero />
      </section>

      <section id="about" className="landing-anchor">
        <DeferredSection minHeight={620}>
          <AboutPreview full />
        </DeferredSection>
      </section>

      <section id="programs" className="landing-anchor home-programs-preview">
        <DeferredSection minHeight={720}>
          <Programs />
        </DeferredSection>
      </section>

      <DeferredSection minHeight={620}>
        <WhyChooseUs />
      </DeferredSection>


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
        <DeferredSection minHeight={560}>
          <Trainers />
        </DeferredSection>
      </section>

      <section
        id="membership"
        className="landing-anchor home-membership-preview"
      >
        <DeferredSection minHeight={620}>
          <MembershipPlans />
        </DeferredSection>
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
        <DeferredSection minHeight={520}>
          <Testimonials />
        </DeferredSection>
      </div>


      {/* <CalculatorHub /> */}
      <section id="schedule" className="landing-anchor">
        <DeferredSection minHeight={620}>
          <Schedule />
        </DeferredSection>
      </section>
      <DeferredSection minHeight={620}>
        <Challenges />
      </DeferredSection>
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
        <DeferredSection minHeight={720}>
          <Contact />
        </DeferredSection>
      </section>
    </>
  );
}

export default Home;
