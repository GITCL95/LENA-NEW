import SEO from '@components/layout/SEO';
import SiteLayout from '@components/layout/SiteLayout';
import InteriorServices from '@components/sections/InteriorServices';
import PageHero from '@components/sections/PageHero';
import { SERVICES_PATH, SITE_URL, ZONES_PATH } from '@data/client';
import { buildBreadcrumbSchema, buildWebPageSchema } from '@data/schemas';
import { INTERIOR_SERVICES, serviceHref } from '@data/services';
import styles from '@/styles/Site.module.css';

const title = 'Services de peinture et de rénovation intérieure · Léna Rénove';
const description = 'Découvrez les services de Léna Rénove à Vétheuil et dans les environs. Peinture intérieure, enduits de ratissage, pose de papier peint et vinyle adhésif décoratif.';
const jsonLd = [
  buildWebPageSchema({ path: SERVICES_PATH, title, description }),
  buildBreadcrumbSchema([
    { name: 'Accueil', url: `${SITE_URL}/` },
    { name: 'Services', url: `${SITE_URL}${SERVICES_PATH}` },
  ]),
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Services de Léna Rénove',
    itemListElement: INTERIOR_SERVICES.map(({ title, slug }, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: title,
      url: `${SITE_URL}${serviceHref(slug)}`,
    })),
  },
];

export default function ServicesHub() {
  return (
    <>
      <SEO title={title} description={description} path={SERVICES_PATH} jsonLd={jsonLd} />
      <SiteLayout page="services">
        <PageHero
          id="services-hub-title"
          breadcrumb="Services"
          eyebrow="Artisane peintre · Vétheuil"
          title={<>Peinture et <em>rénovation intérieure.</em></>}
          description="Léna Renaud prépare vos murs, peint vos pièces et pose vos revêtements décoratifs. Découvrez les travaux proposés pour votre projet."
        >
          <a href="#prestations" className={`${styles.button} ${styles.primaryButton}`}>Voir les services</a>
          <a href={ZONES_PATH} className={styles.textLink}>Zones d’intervention</a>
        </PageHero>
        <InteriorServices />
      </SiteLayout>
    </>
  );
}
