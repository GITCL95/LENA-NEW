import SEO from '@components/layout/SEO';
import SiteLayout from '@components/layout/SiteLayout';
import InteriorServices from '@components/sections/InteriorServices';
import PageHero from '@components/sections/PageHero';
import ServiceLink from '@components/sections/ServiceLink';
import { SERVICES_PATH, SITE_URL, ZONES_PATH } from '@data/client';
import { buildBreadcrumbSchema, buildWebPageSchema } from '@data/schemas';
import { INTERIOR_SERVICES, serviceHref } from '@data/services';
import detailStyles from '@/styles/Detail.module.css';
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
      <SiteLayout
        page="services"
        contactIntro={<>Vous souhaitez rénover vos façades de cuisine avec du <ServiceLink service="vinyle">vinyle adhésif</ServiceLink>&nbsp;? Indiquez dans votre demande quels éléments vous voulez habiller.</>}
      >
        <PageHero
          id="services-hub-title"
          breadcrumb="Services"
          eyebrow="Artisane peintre · Vétheuil"
          title={<>Peinture et <em>rénovation intérieure.</em></>}
          description={<>Pour vos travaux de <ServiceLink service="peinture">peinture intérieure</ServiceLink>, Léna Renaud prépare et peint les murs, les plafonds et les boiseries. Elle pose aussi des revêtements décoratifs.</>}
        >
          <a href="#prestations" className={`${styles.button} ${styles.primaryButton}`}>Voir les services</a>
          <a href={ZONES_PATH} className={styles.textLink}>Zones d’intervention</a>
        </PageHero>
        <InteriorServices intro={<>Des murs irréguliers&nbsp;? Le <ServiceLink service="enduits">ratissage</ServiceLink> permet de les lisser avant la finition.</>} />

        <section className={`${detailStyles.section} ${detailStyles.light}`} aria-labelledby="accent-wall-title">
          <div className={styles.container}>
            <h2 id="accent-wall-title" className={styles.sectionTitle}>Mettre un mur <em>en valeur.</em></h2>
            <p className={`${styles.textHeroDescription} mt-3`}>
              Pour mettre en valeur le mur derrière le lit ou le canapé, pensez au <ServiceLink service="papier-peint">papier peint panoramique</ServiceLink>.
            </p>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
