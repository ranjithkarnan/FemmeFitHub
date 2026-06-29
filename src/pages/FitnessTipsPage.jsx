import React from 'react';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO.jsx';
import { blogs } from '../data/blogs.js';
import { useContactModal } from '../context/ContactModalContext.jsx';

function FitnessTipsPage() {
  const { openContactModal } = useContactModal();

  return (
    <>
      <SEO
        title="Fitness Tips | Femme Fit Hub"
        description="Simple, practical fitness tips for women building healthier routines with strength training, nutrition, recovery, and consistency."
      />
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker">Fitness Tips</div>
          <h1>Simple, practical guidance for women building healthier routines.</h1>
        </div>
      </section>
      <section className="section tips-community-section">
        <div className="container">
          <div className="section-header centered">
            <span className="section-kicker">Fitness Tips</span>
            <h2>Simple Guidance for Healthier Routines</h2>
            {/* <p>Simple, practical guidance for women building healthier routines.</p> */}
          </div>
          <div className="tips-grid">
            {blogs.map((blog) => (
              <article className="tip-card" key={blog.title}>
                <span className="tip-meta">
                  {blog.category} ? {blog.date}
                </span>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                <button type="button" onClick={openContactModal}>
                  Ask a coach <ArrowRight size={15} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default FitnessTipsPage;
