import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO.jsx';
import { blogCategories, getBlogCategory } from '../data/blogCategories.js';
import { getArticlesByCategory } from '../data/blogs.js';

const siteUrl = 'https://femmefithub.com';

function BlogCategoryPage() {
  const { categorySlug } = useParams();
  const category = getBlogCategory(categorySlug);

  if (!category) {
    return (
      <section className="section blog-page">
        <SEO title="Blog Category Not Found | Femme Fit Hub" description="The requested Femme Fit Hub blog category could not be found." />
        <div className="container blog-empty-state">
          <h1>Category Not Found</h1>
          <p>The fitness topic you are looking for may have moved.</p>
          <Link className="button primary" to="/blog">Back to Blog</Link>
        </div>
      </section>
    );
  }

  const articles = getArticlesByCategory(category.slug);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.title,
    description: category.metaDescription,
    url: `${siteUrl}/blog/${category.slug}`,
    isPartOf: {
      '@type': 'Blog',
      name: 'Femme Fit Hub Fitness Knowledge Hub',
      url: `${siteUrl}/blog`
    }
  };

  return (
    <div className="blog-page">
      <SEO
        title={category.seoTitle}
        description={category.metaDescription}
        keywords={`${category.title}, women fitness, ladies gym Chennai, Femme Fit Hub`}
        canonical={`${siteUrl}/blog/${category.slug}`}
        schema={schema}
      />

      <section className="section blog-category-hero">
        <div className="container">
          <nav className="blog-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={15} />
            <Link to="/blog">Blog</Link>
            <ChevronRight size={15} />
            <span>{category.title}</span>
          </nav>
          <span className="section-kicker">{category.title}</span>
          <h1>{category.title} Guides</h1>
          <p>{category.description}</p>
        </div>
      </section>

      <section className="section blog-section">
        <div className="container blog-layout">
          <div className="blog-card-grid blog-category-articles">
            {articles.map((article) => (
              <article className="blog-card" key={article.path}>
                <img src={article.image} alt={article.title} loading="lazy" decoding="async" />
                <div>
                  <span>{article.date} · {article.readTime}</span>
                  <h2>{article.title}</h2>
                  <p>{article.excerpt}</p>
                  <Link to={article.path}>Read article <ArrowRight size={15} /></Link>
                </div>
              </article>
            ))}
          </div>

          <aside className="blog-sidebar">
            <h2>Explore More</h2>
            {blogCategories.map((item) => (
              <Link className={item.slug === category.slug ? 'active' : ''} to={`/blog/${item.slug}`} key={item.slug}>
                {item.title}
              </Link>
            ))}
            <div className="blog-sidebar-cta">
              <h3>Need personal guidance?</h3>
              <p>Talk to our team and choose the right plan for your goal.</p>
              <Link className="button primary" to="/contact">Start Today</Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default BlogCategoryPage;
