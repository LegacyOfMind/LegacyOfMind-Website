import { useEffect } from 'react';

type SEOProps = {
  title: string;
  description: string;
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  schema?: Record<string, unknown>;
};

const setMeta = (selector: string, attribute: 'name' | 'property', key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
};

export function SEO({ title, description, canonicalUrl, ogTitle = title, ogDescription = description, schema }: SEOProps) {
  useEffect(() => {
    document.title = title;

    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', ogTitle);
    setMeta('meta[property="og:description"]', 'property', 'og:description', ogDescription);
    setMeta('meta[property="og:type"]', 'property', 'og:type', 'article');
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', ogTitle);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', ogDescription);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }

    canonical.href = canonicalUrl;

    const schemaId = 'page-schema';
    document.getElementById(schemaId)?.remove();

    if (schema) {
      const script = document.createElement('script');
      script.id = schemaId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      document.getElementById(schemaId)?.remove();
    };
  }, [canonicalUrl, description, ogDescription, ogTitle, schema, title]);

  return null;
}
