import Image from 'next/image';
import SEO from '@components/layout/SEO';
import SiteLayout, { ArrowLink } from '@components/layout/SiteLayout';
import { DetailFaq, DetailHero, OnPageNavigation } from '@components/sections/DetailPage';
import { PAINTING_PATH, PONTOISE_PATH, SITE_URL, ZONES_PATH } from '@data/client';
import { PONTOISE } from '@data/cities';
import { buildBreadcrumbSchema, buildFAQSchema, buildWebPageSchema } from '@data/schemas';
import detailStyles from '@/styles/Detail.module.css';
import siteStyles from '@/styles/Site.module.css';
import styles from '@/styles/Pontoise.module.css';

const salon = '/assets/img/projet-renov-3.jpg';

const sections = [
  { id: 'quartiers', label: 'Quartiers' },
  { id: 'prestations', label: 'Prestations' },
  { id: 'realisation', label: 'Réalisation' },
  { id: 'devis', label: 'Devis et visite' },
];

const districts = [
  { title: 'Centre historique', detail: 'Rue Thiers et rue de Gisors' },
  { title: 'Quartiers résidentiels', detail: 'Les Louvrais et Marcouville' },
];

const services = [
  { title: 'Peinture intérieure', detail: 'Murs, plafonds et boiseries. Finitions mates, satinées ou brillantes.', href: PAINTING_PATH },
  { title: 'Enduits et ratissage', detail: 'Rebouchage, traitement des fissures et lissage avant finition.', href: '/#enduits' },
  { title: 'Pose de papier peint', detail: 'Pose de papier peint intissé ou panoramique avec préparation du support.', href: '/#papier-peint' },
  { title: 'Vinyle adhésif décoratif', detail: 'Relooking de cuisines, de meubles, de portes et de plans de travail.', href: '/#vinyle' },
];

const visitSteps = [
  { title: 'Décrivez vos travaux', detail: 'Indiquez votre quartier à Pontoise et les pièces ou surfaces que vous souhaitez rénover.' },
  { title: 'Visite gratuite', detail: 'Je me déplace pour examiner le chantier, prendre les mesures et échanger sur vos attentes.' },
  { title: 'Devis détaillé sous 24 h', detail: 'Après la visite, le devis précise les quantités, les matériaux, la main-d’œuvre et le délai.' },
];

const faq = [
  {
    q: 'Intervenez-vous dans toute la commune ?',
    a: 'Oui, du centre historique aux quartiers résidentiels de Pontoise, dont Les Louvrais et Marcouville.',
  },
  {
    q: 'Le chantier est-il couvert par une assurance ?',
    a: 'Léna Rénove est couverte par une responsabilité civile professionnelle. Léna Renaud est titulaire du CAP Peintre en bâtiment.',
  },
];

const title = 'Artisane peintre à Pontoise (95) · Léna Rénove';
const description = 'Léna Rénove intervient à Pontoise pour vos travaux de peinture intérieure, enduits, papier peint et vinyle adhésif. Devis gratuit sous 24 h après visite.';
const jsonLd = [
  buildWebPageSchema({ path: PONTOISE_PATH, title, description }),
  buildBreadcrumbSchema([
    { name: 'Accueil', url: `${SITE_URL}/` },
    { name: 'Zones', url: `${SITE_URL}${ZONES_PATH}` },
    { name: 'Pontoise', url: `${SITE_URL}${PONTOISE_PATH}` },
  ]),
  buildFAQSchema(faq),
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Peinture intérieure à Pontoise',
    url: `${SITE_URL}${PONTOISE_PATH}`,
    provider: { '@id': `${SITE_URL}/#business` },
    areaServed: {
      '@type': 'City',
      name: PONTOISE.name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: PONTOISE.name,
        postalCode: PONTOISE.postalCode,
        addressRegion: PONTOISE.departmentName,
        addressCountry: 'FR',
      },
    },
  },
];

export default function Pontoise() {
  return (
    <>
      <SEO title={title} description={description} path={PONTOISE_PATH} jsonLd={jsonLd} />
      <SiteLayout page="pontoise">
        <DetailHero
          id="pontoise"
          className={styles.intro}
          eyebrow="Zone d’intervention · Val-d’Oise"
          title="Artisane peintre"
          emphasis="à Pontoise."
          description="Depuis Vétheuil, j’interviens à Pontoise pour vos travaux de peinture et de rénovation intérieure, du centre historique aux quartiers résidentiels."
          photo={{
            src: salon,
            alt: 'Salon aux murs bleu-gris, soubassements blancs et parquet clair',
            caption: 'Réalisation · Peinture d’un salon à Pontoise',
          }}
        />
        <OnPageNavigation sections={sections} className={styles.pageNav} />

        <section id="quartiers" className={`${detailStyles.section} ${detailStyles.light}`} aria-labelledby="districts-title">
          <div className={siteStyles.container}>
            <p className={siteStyles.eyebrow}>Quartiers desservis</p>
            <h2 id="districts-title" className={siteStyles.sectionTitle}>Où j’interviens <em>à Pontoise.</em></h2>
            <div className={styles.districts}>
              <dl className={styles.districtList}>
                {districts.map(({ title, detail }) => (
                  <div key={title}><dt>{title}</dt><dd>{detail}</dd></div>
                ))}
              </dl>
              <div className={styles.travel}>
                <p>Depuis Vétheuil</p>
                <p className={styles.travelTime}>Env. {PONTOISE.distance}</p>
                <p>Temps de trajet indicatif</p>
              </div>
            </div>
          </div>
        </section>

        <section id="prestations" className={`${detailStyles.section} ${detailStyles.blush}`} aria-labelledby="pontoise-services-title">
          <div className={siteStyles.container}>
            <p className={siteStyles.eyebrow}>Prestations à Pontoise</p>
            <h2 id="pontoise-services-title" className={siteStyles.sectionTitle}>Vos travaux <em>d’intérieur.</em></h2>
            <ul className={styles.services} role="list">
              {services.map(({ title, detail, href }) => (
                <li key={title}>
                  <ArrowLink href={href} className={styles.serviceCard}>
                    <div><h3>{title}</h3><p>{detail}</p></div>
                  </ArrowLink>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="realisation" className={`${detailStyles.section} ${detailStyles.light}`} aria-labelledby="salon-title">
          <div className={`${siteStyles.container} ${styles.project}`}>
            <div>
              <p className={siteStyles.eyebrow}>Chantier à Pontoise</p>
              <h2 id="salon-title" className={`${siteStyles.sectionTitle} ${detailStyles.inlineTitle}`}>Un salon <em>bleu gris.</em></h2>
              <p className={styles.projectDescription}>Dans ce salon, les murs bleu gris contrastent avec les boiseries blanches et le plafond clair.</p>
              <dl className={styles.projectFacts}>
                <div><dt>Prestation</dt><dd>Peinture intérieure</dd></div>
                <div><dt>Lieu</dt><dd>Pontoise, Val-d’Oise</dd></div>
              </dl>
            </div>
            <figure className={styles.projectFigure}>
              <div className={styles.projectPhoto}>
                <Image src={salon} alt="Détail des murs bleu-gris et des boiseries blanches du salon" width={608} height={750} />
              </div>
              <figcaption>Détail du salon présenté en ouverture</figcaption>
            </figure>
          </div>
        </section>

        <section id="devis" className={`${detailStyles.section} ${styles.bordered}`} aria-labelledby="visit-title">
          <div className={siteStyles.container}>
            <p className={siteStyles.eyebrow}>Devis et visite</p>
            <h2 id="visit-title" className={siteStyles.sectionTitle}>Du premier échange <em>au devis.</em></h2>
            <ol className={styles.visitSteps} role="list">
              {visitSteps.map(({ title, detail }, index) => (
                <li key={title} className={styles.visitCard}>
                  <span className={styles.stepNumber} aria-hidden="true">{index + 1}</span>
                  <div><h3>{title}</h3><p>{detail}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <DetailFaq items={faq} className={styles.bordered} />
      </SiteLayout>
    </>
  );
}
