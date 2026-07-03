import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, MapPin, Sparkles } from 'lucide-react';
import SEO from '../components/SEO.jsx';
import { blogCategories } from '../data/blogCategories.js';
import { blogArticles } from '../data/blogs.js';
import { useContactModal } from '../context/ContactModalContext.jsx';

const siteUrl = 'https://femmefithub.com';

function BlogHome() {
  const { openContactModal } = useContactModal();
  const featuredArticle = blogArticles[0];
  const latestArticles = blogArticles.slice(0, 6);
  const localGuides = blogArticles.filter((article) => article.categorySlug === 'local-guides');

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Femme Fit Hub Fitness Knowledge Hub',
    description: 'Women-focused fitness articles, local gym guides, workout tips, nutrition guidance, and success stories.',
    url: `${siteUrl}/blog`,
    publisher: {
      '@type': 'Organization',
      name: 'Femme Fit Hub'
    }
  };

  return (
    <div className="blog-page">
      <SEO
        title="Blog | Femme Fit Hub Fitness Knowledge Hub"
        description="Explore women-focused fitness articles, strength training tips, weight loss guidance, nutrition advice, local gym guides, and FAQs from Femme Fit Hub."
        keywords="women fitness blog, ladies gym tips, strength training women, weight loss training, ladies gym Valasaravakkam"
        canonical={`${siteUrl}/blog`}
        schema={schema}
      />

      <section className="blog-hero section">
        <div className="container blog-hero-grid">
          <div className="blog-hero-copy">
            <span className="section-kicker">Fitness Knowledge Hub</span>
            <h1>Expert Fitness Guidance for Women Who Want Lasting Results</h1>
            <p>
              Practical strength, weight loss, nutrition, wellness, and local gym guidance from a premium women-only fitness studio.
            </p>
            <div className="blog-hero-actions">
              <button type="button" className="button primary" onClick={openContactModal}>Book Free Trial</button>
              <Link className="button secondary" to="/programs">View Programs</Link>
            </div>
          </div>

          <article className="blog-featured-card">
            <span><Sparkles size={17} /> Featured Article</span>
            <img src={featuredArticle.image} alt={featuredArticle.title} loading="eager" decoding="async" />
            <div>
              <p>{featuredArticle.category} · {featuredArticle.readTime}</p>
              <h2>{featuredArticle.title}</h2>
              <Link to={featuredArticle.path}>Read guide <ArrowRight size={16} /></Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section blog-section">
        <div className="container">
          <div className="section-header centered">
            <span className="section-kicker">Categories</span>
            <h2>Explore Fitness Topics</h2>
            <p>Choose the guide that matches your current goal, comfort level, and next fitness step.</p>
          </div>
          <div className="blog-category-grid">
            {blogCategories.map((category) => (
              <Link className="blog-category-card" to={`/blog/${category.slug}`} key={category.slug}>
                <BookOpen size={22} />
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <span>Explore <ArrowRight size={15} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section blog-section blog-soft-section">
        <div className="container">
          <div className="section-header">
            <span className="section-kicker">Latest Articles</span>
            <h2>Fresh Fitness Guidance</h2>
          </div>
          <div className="blog-card-grid">
            {latestArticles.map((article) => (
              <article className="blog-card" key={article.path}>
                <img src={article.image} alt={article.title} loading="lazy" decoding="async" />
                <div>
                  <span>{article.category} · {article.date}</span>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <Link to={article.path}>Read article <ArrowRight size={15} /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section blog-section">
        <div className="container blog-local-panel">
          <div>
            <span className="section-kicker">Local Guides</span>
            <h2>Fitness Guides for Valasaravakkam and Chennai</h2>
            <p>SEO-friendly local resources for women comparing gyms, memberships, weight loss programs, and women-only training options.</p>
          </div>
          <div className="blog-local-links">
            {localGuides.map((article) => (
              <Link to={article.path} key={article.path}>
                <MapPin size={17} />
                {article.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogHome;
