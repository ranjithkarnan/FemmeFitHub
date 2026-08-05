import { useEffect } from 'react';

function setMetaTag(name, content, attribute = 'name') {
  if (!content) return;

  let tag = document.head.querySelector(`meta[${attribute}="${name}"]`);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
}

function setCanonical(url) {
  if (!url) return;

  let link = document.head.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }

  link.setAttribute('href', url);
}

function SEO({ title, description, keywords, canonical, image, type = 'website', schema }) {
  useEffect(() => {
    if (title) {
      document.title = title;
      setMetaTag('og:title', title, 'property');
      setMetaTag('twitter:title', title);
    }

    if (description) {
      setMetaTag('description', description);
      setMetaTag('og:description', description, 'property');
      setMetaTag('twitter:description', description);
    }

    if (keywords) {
      setMetaTag('keywords', keywords);
    }

    if (canonical) {
      setCanonical(canonical);
      setMetaTag('og:url', canonical, 'property');
    }

    if (image) {
      setMetaTag('og:image', image, 'property');
      setMetaTag('twitter:image', image);
    }

    setMetaTag('og:type', type, 'property');
    setMetaTag('twitter:card', image ? 'summary_large_image' : 'summary');

    document.head.querySelectorAll('script[data-seo-schema="true"]').forEach((node) => node.remove());
    const schemas = Array.isArray(schema) ? schema : schema ? [schema] : [];

    schemas.forEach((item) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seoSchema = 'true';
      script.textContent = JSON.stringify(item);
      document.head.appendChild(script);
    });

    return () => {
      document.head.querySelectorAll('script[data-seo-schema="true"]').forEach((node) => node.remove());
    };
  }, [title, description, keywords, canonical, image, type, schema]);

  return null;
}

export default SEO;
