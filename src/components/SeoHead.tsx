import { useEffect } from 'react';
import {
  BRAND,
  EssayArticle,
  FEATURED_PROJECTS,
  GITHUB_URL,
  SITE_URL,
} from '../data/portfolio';

interface SeoHeadProps {
  title: string;
  description: string;
  path?: string;
  type?: 'profile' | 'article';
  article?: EssayArticle;
}

function setMetaTag(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function toOrgSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function buildStructuredDataGraph(
  canonicalUrl: string,
  title: string,
  description: string,
  article?: EssayArticle
) {
  const cleanBase = SITE_URL.replace(/\/$/, '');
  const personId = `${cleanBase}/#person`;
  const websiteId = `${cleanBase}/#website`;

  const organizationEntities = FEATURED_PROJECTS.map((venture) => ({
    '@type': 'Organization',
    '@id': `${cleanBase}/#org-${toOrgSlug(venture.title)}`,
    name: venture.title,
    url: venture.url,
    logo: `${cleanBase}${venture.logoSrc}`,
    description: `${venture.problem} ${venture.solution}`,
    founder: { '@id': personId },
    knowsAbout: venture.techStack,
  }));

  const graphNodes: Record<string, unknown>[] = [
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: `${cleanBase}/`,
      name: BRAND.name,
      description: 'Official portfolio of Nihab Al Mahjabin — Founder, CEO & Software Architect.',
      publisher: { '@id': personId },
      inLanguage: 'en',
    },
    {
      '@type': 'Person',
      '@id': personId,
      name: BRAND.name,
      alternateName: ['Nihab', 'Nihab Mahjabin'],
      url: `${cleanBase}/`,
      image: `${cleanBase}/og-image.png`,
      email: `mailto:${BRAND.email}`,
      jobTitle: 'Founder, CEO & Software Architect',
      description:
        'Bangladesh-based tech entrepreneur and software architect leading Floraxen Labs, MedProfile Bangladesh, FeLoW WebStaR, SABLE, Lumora Studio, and Al Jabin Publications.',
      nationality: {
        '@type': 'Country',
        name: 'Bangladesh',
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'BD',
      },
      knowsAbout: [
        'Software Architecture',
        'Full-Stack Web Development',
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'UI/UX Design',
        'EdTech',
        'HealthTech',
        'SaaS Product Development',
      ],
      founder: organizationEntities.map((org) => ({ '@id': org['@id'] })),
      sameAs: [GITHUB_URL, ...FEATURED_PROJECTS.map((venture) => venture.url)],
    },
    ...organizationEntities,
    {
      '@type': article ? 'WebPage' : 'ProfilePage',
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: title,
      description,
      isPartOf: { '@id': websiteId },
      about: { '@id': personId },
      mainEntity: article ? { '@id': `${canonicalUrl}#article` } : { '@id': personId },
      inLanguage: 'en',
    },
  ];

  if (article) {
    graphNodes.push(
      {
        '@type': 'Article',
        '@id': `${canonicalUrl}#article`,
        headline: article.title,
        description: article.summary,
        datePublished: article.isoDate,
        dateModified: article.isoDate,
        articleSection: article.category,
        wordCount: article.content.join(' ').split(/\s+/).filter(Boolean).length,
        author: { '@id': personId },
        publisher: { '@id': personId },
        mainEntityOfPage: { '@id': `${canonicalUrl}#webpage` },
        url: canonicalUrl,
        inLanguage: 'en',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${cleanBase}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Writing',
            item: `${cleanBase}/#writing`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: article.title,
            item: canonicalUrl,
          },
        ],
      }
    );
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graphNodes,
  };
}

export function SeoHead({
  title,
  description,
  path = '/',
  type = 'profile',
  article,
}: SeoHeadProps) {
  useEffect(() => {
    const cleanBase = SITE_URL.replace(/\/$/, '');
    const normalizedPath = path === '/' ? '/' : `/${path.replace(/^\/+/, '')}`;
    const canonicalUrl = `${cleanBase}${normalizedPath}`;

    document.title = title;
    setMetaTag('meta[name="description"]', 'name', 'description', description);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', type);
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    let jsonLdScript = document.head.querySelector<HTMLScriptElement>(
      'script#structured-data-graph[type="application/ld+json"]'
    );
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.id = 'structured-data-graph';
      jsonLdScript.type = 'application/ld+json';
      document.head.appendChild(jsonLdScript);
    }
    jsonLdScript.textContent = JSON.stringify(
      buildStructuredDataGraph(canonicalUrl, title, description, article)
    );
  }, [title, description, path, type, article]);

  return null;
}
