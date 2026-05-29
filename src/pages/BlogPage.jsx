import React from 'react';
import { blogs } from '../data/blogs.js';

function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker">Fitness Tips</div>
          <h1>Simple, practical guidance for women building healthier routines.</h1>
        </div>
      </section>
      <section className="section">
        <div className="container blog-grid">
          {blogs.map((blog) => (
            <article className="blog-card lift-card" key={blog.title}>
              <img src={blog.image} alt={blog.title} />
              <div>
                <span>{blog.category} · {blog.date}</span>
                <h2>{blog.title}</h2>
                <p>{blog.excerpt}</p>
                <a className="text-link" href="/blog">Read fitness tip</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default BlogPage;
