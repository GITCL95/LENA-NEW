import { ABOUT_PATH, CLIENT, CONTACT_PATH, SERVICE_AREA, SITE_URL } from './client';

const homeUrl = `${SITE_URL}/`;
const websiteId = `${homeUrl}#website`;
const businessId = `${homeUrl}#business`;
const businessRef = { '@id': businessId };

type Entity = { '@id': string; '@type': string } & Record<string, unknown>;
type Breadcrumb = { label: string; parent?: { label: string; href: string } };
type PageType = 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';

export type PageSchemaOptions = {
  breadcrumb?: Breadcrumb;
  pageType?: PageType;
  mainEntity?: Entity;
};

export function buildPageGraph({
  url, title, description, primaryImage, breadcrumb, pageType = 'WebPage', mainEntity,
}: PageSchemaOptions & { url: string; title: string; description: string; primaryImage?: string }) {
  const breadcrumbId = `${url}#breadcrumb`;
  const trail = breadcrumb && [
    { label: 'Accueil', url: homeUrl },
    ...(breadcrumb.parent ? [{ label: breadcrumb.parent.label, url: `${SITE_URL}${breadcrumb.parent.href}` }] : []),
    { label: breadcrumb.label, url },
  ];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': pageType,
        '@id': `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: 'fr-FR',
        isPartOf: { '@id': websiteId },
        publisher: businessRef,
        ...(mainEntity && { mainEntity: { '@id': mainEntity['@id'] } }),
        ...(primaryImage && { primaryImageOfPage: { '@type': 'ImageObject', contentUrl: primaryImage } }),
        ...(trail && { breadcrumb: { '@id': breadcrumbId } }),
      },
      ...(url === homeUrl ? [{
        '@type': 'WebSite',
        '@id': websiteId,
        url: homeUrl,
        name: CLIENT.brand,
        inLanguage: 'fr-FR',
        publisher: businessRef,
      }] : []),
      ...(trail ? [{
        '@type': 'BreadcrumbList',
        '@id': breadcrumbId,
        itemListElement: trail.map(({ label, url: item }, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: label,
          item,
        })),
      }] : []),
      ...(mainEntity ? [mainEntity] : []),
    ],
  };
}

export function buildOrganization(): Entity {
  return {
    '@type': 'Organization',
    '@id': businessId,
    name: CLIENT.brand,
    url: homeUrl,
    logo: `${SITE_URL}/assets/img/logo-lt.png`,
    email: CLIENT.email,
    sameAs: [CLIENT.instagram],
  };
}

export function buildHousePainter(): Entity {
  const { street, locality, postalCode, region, country } = CLIENT.address;
  return {
    ...buildOrganization(),
    '@type': 'HousePainter',
    areaServed: SERVICE_AREA,
    address: {
      '@type': 'PostalAddress',
      streetAddress: street,
      addressLocality: locality,
      postalCode,
      addressRegion: region,
      addressCountry: country,
    },
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: CLIENT.hours.opens,
      closes: CLIENT.hours.closes,
    }],
    mainEntityOfPage: { '@id': `${SITE_URL}${CONTACT_PATH}#webpage` },
  };
}

export function buildOwner(): Entity {
  return {
    '@type': 'Person',
    '@id': `${SITE_URL}${ABOUT_PATH}#person`,
    name: CLIENT.owner,
    jobTitle: 'Artisane peintre en bâtiment',
    worksFor: businessRef,
  };
}

export function buildService({
  path, name, serviceType = name, description, city,
}: { path: string; name: string; serviceType?: string; description: string; city?: string }): Entity {
  return {
    '@type': 'Service',
    '@id': `${SITE_URL}${path}#service`,
    url: `${SITE_URL}${path}`,
    name,
    serviceType,
    description,
    provider: businessRef,
    areaServed: city
      ? { '@type': 'City', name: city }
      : SERVICE_AREA,
  };
}

export function buildItemList(path: string, name: string, items: { name: string; href: string }[]): Entity {
  return {
    '@type': 'ItemList',
    '@id': `${SITE_URL}${path}#liste`,
    name,
    itemListElement: items.map(({ name, href }, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      url: `${SITE_URL}${href}`,
    })),
  };
}
