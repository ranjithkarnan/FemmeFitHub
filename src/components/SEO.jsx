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

function SEO({ title, description, keywords }) {
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
  }, [title, description, keywords]);

  return null;
}

export default SEO;
