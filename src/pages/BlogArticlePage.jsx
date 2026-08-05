import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, Copy, Instagram, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO.jsx';
import { getBlogCategory } from '../data/blogCategories.js';
import { getArticleUrl, getBlogArticle } from '../data/blogs.js';
import { useContactModal } from '../context/ContactModalContext.jsx';
import { WHATSAPP_NUMBER, quickWhatsAppUrl } from '../utils/whatsapp.js';

const siteUrl = 'https://femmefithub.com';

const internalLinkLabels = {
  '/about': 'About Femme Fit Hub',
  '/programs': 'Explore Programs',
  '/trainers': 'Meet Trainers',
  '/membership': 'View Membership',
  '/stories': 'Member Stories',
  '/contact': 'Contact Team',
  '/faq': 'Read FAQ'
};

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function renderInlineContent(content) {
  if (typeof content === 'string') return content;

  if (Array.isArray(content)) {
    return content.map((item, index) => {
      if (typeof item === 'string') return item;

      const key = `${item.text || item.href || 'link'}-${index}`;

      if (item.href?.startsWith('tel:') || item.href?.startsWith('mailto:')) {
        return (
          <a href={item.href} key={key}>
            {item.text}
          </a>
        );
      }

      if (item.type === 'external' || item.href?.startsWith('http')) {
        return (
          <a href={item.href} target="_blank" rel="noopener noreferrer" key={key}>
            {item.text}
          </a>
        );
      }

      return (
        <Link to={item.href} key={key}>
          {item.text}
        </Link>
      );
    });
  }

  return content?.text || '';
}

function buildSchemas(article, category) {
  const articleUrl = getArticleUrl(article);
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: article.title,
      description: article.metaDescription,
      image: `${siteUrl}${article.image}`,
      datePublished: article.datePublished || article.date,
      dateModified: article.dateModified || article.datePublished || article.date,
      author: {
        '@type': 'Organization',
        name: 'Femme Fit Hub'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Femme Fit Hub',
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/femme-fit-logo-160.webp`
        }
      },
      mainEntityOfPage: articleUrl,
      articleSection: category?.title || article.category,
      keywords: article.keywords,
      inLanguage: 'en-IN'
    }
  ];

  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${siteUrl}/`
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${siteUrl}/blog`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: category?.title || article.category,
        item: `${siteUrl}/blog/${article.categorySlug}`
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: article.title,
        item: articleUrl
      }
    ]
  });

  if (article.localGuide) {
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'HealthClub'],
      name: 'Femme Fit Hub',
      url: siteUrl,
      telephone: '+918220138783',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'No 2/2, First Floor, Sannathi Street, Mari Amman Kovil St',
        addressLocality: 'Valasaravakkam',
        addressRegion: 'Tamil Nadu',
        postalCode: '600087',
        addressCountry: 'IN'
      },
      areaServed: ['Valasaravakkam', 'Chennai', 'Porur', 'Virugambakkam', 'KK Nagar']
    };

    if (article.localBusinessSchema !== 'minimal') {
      localBusinessSchema.priceRange = '$$';
      localBusinessSchema.openingHoursSpecification = [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '06:00',
          closes: '20:30'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Sunday',
          opens: '14:00',
          closes: '20:00'
        }
      ];
      localBusinessSchema.sameAs = ['https://www.instagram.com/femme_fithub/'];
    }

    schemas.push({
      ...localBusinessSchema
    });
  }

  if (article.faqs?.length) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: article.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    });
  }

  return schemas;
}

function BlogArticlePage({ categorySlug: categorySlugOverride, articleSlug: articleSlugOverride }) {
  const params = useParams();
  const categorySlug = categorySlugOverride || params.categorySlug;
  const articleSlug = articleSlugOverride || params.articleSlug;
  const article = getBlogArticle(categorySlug, articleSlug);
  const category = getBlogCategory(categorySlug);
  const { openContactModal } = useContactModal();
  const [progress, setProgress] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  const schemas = useMemo(() => (article ? buildSchemas(article, category) : []), [article, category]);
  const tocItems = useMemo(() => (article?.sections || []).map((section) => ({
    id: slugify(section.heading),
    label: section.heading
  })), [article]);

  useEffect(() => {
    if (!article?.premiumArticle) return undefined;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(documentHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / documentHeight) * 100)) : 0);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });

    return () => window.removeEventListener('scroll', updateProgress);
  }, [article]);

  if (!article) {
    return (
      <section className="section blog-page">
        <SEO title="Blog Article Not Found | Femme Fit Hub" description="The requested Femme Fit Hub article could not be found." />
        <div className="container blog-empty-state">
          <h1>Article Not Found</h1>
          <p>The fitness article you are looking for may have moved.</p>
          <Link className="button primary" to="/blog">Back to Blog</Link>
        </div>
      </section>
    );
  }

  const articleUrl = getArticleUrl(article);
  const articleWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi Femme Fit Hub,\n\nI was reading this article and would like to know more:\n${article.title}\n${articleUrl}\n\nPlease share details about your women-only fitness programs.`)}`;
  const isPremiumArticle = Boolean(article.premiumArticle);

  return (
    <article className={`blog-page blog-article-page ${isPremiumArticle ? 'blog-premium-article-page' : ''}`.trim()}>
      <SEO
        title={article.seoTitle}
        description={article.metaDescription}
        keywords={article.keywords}
        canonical={getArticleUrl(article)}
        image={`${siteUrl}${article.image}`}
        type="article"
        schema={schemas}
      />

      {isPremiumArticle && (
        <div className="blog-reading-progress" aria-hidden="true">
          <span style={{ width: `${progress}%` }} />
        </div>
      )}

      <section className="section blog-article-hero">
        <div className={`container ${isPremiumArticle ? 'blog-premium-hero-wrap' : 'blog-article-hero-grid'}`}>
          <div>
            <nav className="blog-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <ChevronRight size={15} />
              <Link to="/blog">Blog</Link>
              <ChevronRight size={15} />
              <Link to={`/blog/${article.categorySlug}`}>{article.category}</Link>
              <ChevronRight size={15} />
              <span>{article.title}</span>
            </nav>
            <span className="section-kicker">{article.category}</span>
            <h1>{article.title}</h1>
            <p>{article.excerpt}</p>
            <div className="blog-article-meta">
              <span>{article.date}</span>
              <span>{article.readTime}</span>
              {article.verifiedBy ? <span>{article.verifiedBy}</span> : null}
            </div>
          </div>
          {isPremiumArticle ? (
            <figure className="blog-premium-featured-image">
              <img
                src={article.image}
                alt={article.featuredAlt || article.title}
                width={1200}
                height={675}
                loading="eager"
                decoding="async"
              />
              <figcaption>
                <span>{article.category}</span>
                <span>{article.readTime}</span>
                <span>{article.updated}</span>
              </figcaption>
            </figure>
          ) : (
            <img src={article.image} alt={article.title} loading="eager" decoding="async" />
          )}
        </div>
      </section>

      <section className="section blog-section">
        <div className={`container ${isPremiumArticle ? 'blog-premium-layout' : 'blog-article-layout'}`}>
          {isPremiumArticle && (
            <aside className="blog-share-bar" aria-label="Share article">
              <a href="https://www.instagram.com/femme_fithub/" target="_blank" rel="noreferrer" aria-label="Open Femme Fit Hub on Instagram"><Instagram size={18} /></a>
              <a href={articleWhatsAppUrl} target="_blank" rel="noreferrer" aria-label={`Send ${article.title} enquiry on WhatsApp`}><MessageCircle size={18} /></a>
              <button type="button" aria-label="Copy article link" onClick={() => navigator.clipboard?.writeText(articleUrl)}><Copy size={18} /></button>
            </aside>
          )}

          <div className="blog-article-content">
            {isPremiumArticle && tocItems.length ? (
              <div className="blog-mobile-toc">
                <button type="button" onClick={() => setMobileTocOpen((value) => !value)} aria-expanded={mobileTocOpen}>
                  On this page
                  <span>{mobileTocOpen ? '-' : '+'}</span>
                </button>
                {mobileTocOpen ? (
                  <div>
                    {tocItems.map((item) => (
                      <a href={`#${item.id}`} key={item.id} onClick={() => setMobileTocOpen(false)}>{item.label}</a>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : null}

            <p className="blog-lead">{article.intro}</p>

            {isPremiumArticle ? (
              <aside className="blog-author-review-card">
                <div>
                  <span>Written by</span>
                  <strong>{article.author || 'Femme Fit Hub Editorial Team'}</strong>
                </div>
                <div>
                  <span>Reviewed by</span>
                  <strong>{article.reviewedBy || article.verifiedBy || 'Certified Fitness Trainers'}</strong>
                </div>
                <div>
                  <span>Last updated</span>
                  <strong>{article.updated || article.date}</strong>
                </div>
              </aside>
            ) : null}

            {article.sections.map((section) => (
              <section key={section.heading} id={slugify(section.heading)}>
                <h2>{section.heading}</h2>
                {section.body ? <p>{section.body}</p> : null}
                {section.paragraphs?.map((paragraph, index) => <p key={`${section.heading}-paragraph-${index}`}>{renderInlineContent(paragraph)}</p>)}

                {section.subsections?.map((subsection) => (
                  <div className="blog-subsection" key={subsection.heading}>
                    <h3>{subsection.heading}</h3>
                    {subsection.body ? <p>{subsection.body}</p> : null}
                    {subsection.paragraphs?.map((paragraph, index) => <p key={`${subsection.heading}-paragraph-${index}`}>{renderInlineContent(paragraph)}</p>)}

                    {subsection.list?.length ? (
                      <ul className="blog-rich-list">
                        {subsection.list.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    ) : null}

                    {subsection.image ? (
                      <figure className="blog-article-image">
                        <img
                          src={subsection.image.src}
                          alt={subsection.image.alt}
                          width={subsection.image.width || 1200}
                          height={subsection.image.height || 675}
                          loading="lazy"
                          decoding="async"
                        />
                        <figcaption>{subsection.image.caption}</figcaption>
                      </figure>
                    ) : null}
                  </div>
                ))}

                {section.list?.length ? (
                  <ul className="blog-rich-list">
                    {section.list.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                ) : null}

                {section.checklist?.length ? (
                  <ul className="blog-checklist">
                    {section.checklist.map((item) => <li key={item}><CheckCircle2 size={18} /> {item}</li>)}
                  </ul>
                ) : null}

                {section.callout ? (
                  <aside className={`blog-callout ${section.callout.type || 'tip'}`}>
                    <strong>{section.callout.title}</strong>
                    <p>{section.callout.body}</p>
                  </aside>
                ) : null}

                {section.table ? (
                  <div className="blog-comparison-table table-scroll" role="region" aria-label={section.table.label || section.heading}>
                    <table>
                      <thead>
                        <tr>
                          {section.table.headers.map((header) => <th key={header}>{header}</th>)}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row) => (
                          <tr key={row.join('-')}>
                            {row.map((cell) => <td key={cell}>{cell}</td>)}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : null}

                {section.image ? (
                  <figure className="blog-article-image">
                    <img
                      src={section.image.src}
                      alt={section.image.alt}
                      width={section.image.width || 1200}
                      height={section.image.height || 675}
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption>{section.image.caption}</figcaption>
                  </figure>
                ) : null}
              </section>
            ))}

            {article.takeaways?.length ? (
              <section className="blog-takeaways">
                <h2>Key Takeaways</h2>
                <ul>
                  {article.takeaways.map((item) => (
                    <li key={item}><CheckCircle2 size={18} /> {item}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {article.faqs?.length && !isPremiumArticle ? (
              <section className="blog-faq-block">
                <h2>Frequently Asked Questions</h2>
                {article.faqs.map((faq, index) => (
                  <div className={`blog-faq-item ${openFaq === index ? 'is-open' : ''}`.trim()} key={faq.question}>
                    <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>
                      {faq.question}
                      <span>{openFaq === index ? '-' : '+'}</span>
                    </button>
                    {openFaq === index ? <p>{faq.answer}</p> : null}
                  </div>
                ))}
              </section>
            ) : null}

            <section className="blog-internal-links">
              <h2>Helpful Next Steps</h2>
              <div>
                {article.internalLinks.map((href) => (
                  <Link to={href} key={href}>
                    {internalLinkLabels[href] || href}
                    <ArrowRight size={15} />
                  </Link>
                ))}
              </div>
            </section>

            <section className="blog-cta">
              <span className="section-kicker">Start Today</span>
              <h2>Ready to start your fitness journey?</h2>
              <p>{article.ctaText || 'Book a free trial class or compare membership options with guidance from the Femme Fit Hub team.'}</p>
              {isPremiumArticle ? (
                <ul className="blog-cta-points">
                  <li>Women-only Environment</li>
                  <li>Certified Female Trainers</li>
                  <li>Strength & Weight Loss Programs</li>
                </ul>
              ) : null}
              <div>
                <button type="button" className="button primary" onClick={openContactModal}>Book Free Trial</button>
                <Link className="button secondary" to="/membership">View Membership Plans</Link>
                {isPremiumArticle ? <a className="button secondary" href={quickWhatsAppUrl} target="_blank" rel="noreferrer">WhatsApp Us</a> : null}
              </div>
            </section>

            {article.faqs?.length && isPremiumArticle ? (
              <section className="blog-faq-block">
                <h2>Frequently Asked Questions</h2>
                {article.faqs.map((faq, index) => (
                  <div className={`blog-faq-item ${openFaq === index ? 'is-open' : ''}`.trim()} key={faq.question}>
                    <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>
                      {faq.question}
                      <span>{openFaq === index ? '-' : '+'}</span>
                    </button>
                    {openFaq === index ? <p>{faq.answer}</p> : null}
                  </div>
                ))}
              </section>
            ) : null}

            {article.relatedArticles?.length ? (
              <section className="blog-related-articles">
                <h2>Related Articles</h2>
                <div>
                  {article.relatedArticles.map((related) => {
                    const item = typeof related === 'string'
                      ? { title: related, category: 'Femme Fit Hub Guide', href: '/blog' }
                      : related;

                    return (
                    <Link to={item.href || '/blog'} key={item.href || item.title}>
                      <span>{item.category || 'Femme Fit Hub Guide'}</span>
                      <strong>{item.title}</strong>
                      <ArrowRight size={16} />
                    </Link>
                    );
                  })}
                </div>
              </section>
            ) : null}
          </div>

          <aside className="blog-sidebar blog-article-sidebar">
            {isPremiumArticle && tocItems.length ? (
              <>
                <h2>In This Guide</h2>
                {tocItems.map((item) => (
                  <a href={`#${item.id}`} key={item.id}>{item.label}</a>
                ))}
              </>
            ) : (
              <h2>Related Pages</h2>
            )}
            <Link to="/programs">Programs</Link>
            <Link to="/trainers">Trainers</Link>
            <Link to="/membership">Membership</Link>
            <Link to="/stories">Member Stories</Link>
            <Link to="/contact">Contact</Link>
            <div className="blog-sidebar-cta">
              <h3>Want guidance?</h3>
              <p>Our team can suggest the right program based on your goal and schedule.</p>
              <button type="button" className="button primary" onClick={openContactModal}>Ask a Coach</button>
            </div>
          </aside>
        </div>
      </section>
    </article>
  );
}

export default BlogArticlePage;
