import { CLIENT, SITE_URL } from './client';
import { HOME_FAQ } from './faq';

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: CLIENT.brand,
    description: 'Artisan peintre en bâtiment à Magny-en-Vexin, Val-d\'Oise',
    inLanguage: 'fr-FR',
  };
}

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#business`,
    name: CLIENT.brand,
    description: 'Artisan peintre en bâtiment — peinture intérieure, enduits, papier peint, vinyle adhésif',
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/assets/img/logo-lt.png`,
    image: `${SITE_URL}/assets/img/hero_bg.jpg`,
    telephone: CLIENT.phoneIntl,
    email: CLIENT.email,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: CLIENT.address.street,
      addressLocality: CLIENT.address.locality,
      postalCode: CLIENT.address.postalCode,
      addressRegion: CLIENT.address.region,
      addressCountry: CLIENT.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: CLIENT.address.lat,
      longitude: CLIENT.address.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '12:00',
      },
    ],
    founder: { '@type': 'Person', name: CLIENT.owner },
    sameAs: [CLIENT.instagram],
    hasCredential: CLIENT.credentials.diploma,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: CLIENT.stats.rating,
      reviewCount: CLIENT.stats.reviews,
      bestRating: '5',
    },
    areaServed: [
      'Magny-en-Vexin', 'Pontoise', 'Cergy', 'Saint-Germain-en-Laye',
      'Conflans-Sainte-Honorine', 'L\'Isle-Adam', 'Gisors', 'Beaumont-sur-Oise',
      'Marines', 'Chars', 'Chaumont-en-Vexin',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de peinture',
      itemListElement: [
        { '@type': 'Offer', name: 'Peinture intérieure' },
        { '@type': 'Offer', name: 'Enduits de ratissage' },
        { '@type': 'Offer', name: 'Pose de papier peint' },
        { '@type': 'Offer', name: 'Vinyle adhésif décoratif' },
      ],
    },
  };
}

export function buildFAQSchema(faq = HOME_FAQ) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildWebPageSchema({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}) {
  const url = `${SITE_URL}${path}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#business` },
    inLanguage: 'fr-FR',
  };
}
