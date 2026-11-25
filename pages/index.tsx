import Image from 'next/image';
import SEO from '@components/layout/SEO';
import SiteLayout, { ArrowLink, QuoteButton } from '@components/layout/SiteLayout';
import { CLIENT, PAINTING_PATH, PORTFOLIO_PATH, SITE_URL } from '@data/client';
import {
  buildBreadcrumbSchema,
  buildLocalBusinessSchema,
  buildWebPageSchema,
  buildWebSiteSchema,
} from '@data/schemas';
import styles from '@/styles/Home.module.css';
import siteStyles from '@/styles/Site.module.css';

const images = '/assets/img';
const credentials = [
  { title: `${CLIENT.credentials.experience} ans`, detail: 'd’expérience' },
  { title: 'CAP', detail: 'Peintre en bâtiment' },
  { title: 'RC Pro', detail: 'Assurance professionnelle' },
  { title: CLIENT.brands.join(' & '), detail: 'Peintures professionnelles' },
];

const services = [
  {
    title: 'Peinture intérieure',
    slug: 'peinture',
    href: PAINTING_PATH,
    detail: 'Murs, plafonds et boiseries. Finitions mates, satinées ou brillantes.',
    image: 'insta-9.jpg',
  },
  {
    title: 'Enduits de ratissage',
    slug: 'enduits',
    detail: 'Rebouchage, lissage et traitement des fissures.',
    image: 'service_thumb_2.jpg',
  },
  {
    title: 'Pose de papier peint',
    slug: 'papier-peint',
    detail: 'Papiers peints intissés ou panoramiques.',
    image: 'service_thumb_3.jpg',
  },
  {
    title: 'Vinyle adhésif décoratif',
    slug: 'vinyle',
    detail: 'Relooking de cuisines, de meubles et de portes.',
    image: 'service_thumb_4.jpg',
  },
];

const projects = [
  {
    title: 'Peinture d’un salon',
    location: 'Pontoise',
    image: 'projet-renov-3.jpg',
    alt: 'Salon aux murs bleu-gris, soubassements blancs et parquet clair',
  },
  {
    title: 'Papier peint panoramique',
    image: 'realisations/papier-peint-panoramique-lit/papier-peint-panoramique-lit-1.webp',
    alt: 'Chambre mansardée avec un papier peint panoramique à motif de palmiers',
  },
  {
    title: 'Peinture d’une chambre',
    image: 'realisations/renovation-master-bedroom/renovation-master-bedroom-6.webp',
    alt: 'Deux portes sombres dans une chambre aux murs terracotta',
  },
];

export default function Home() {
  const title = 'Peintre Vétheuil (95) · Devis Gratuit · Léna Rénove';
  const description =
    'Artisane peintre à Vétheuil (95) depuis 10 ans. Peinture intérieure, enduits de ratissage, papier peint et vinyle adhésif. Devis gratuit sous 24 h après visite.';

  const jsonLd = [
    buildWebSiteSchema(),
    buildWebPageSchema({ path: '/', title, description }),
    buildLocalBusinessSchema(),
    buildBreadcrumbSchema([{ name: 'Accueil', url: `${SITE_URL}/` }]),
  ];

  return (
    <>
      <SEO title={title} description={description} path="/" jsonLd={jsonLd} />
      <SiteLayout>
        <section className={`${siteStyles.container} ${styles.hero}`} aria-labelledby="home-title">
          <div className={styles.heroCopy}>
            <p className={siteStyles.eyebrow}>Artisane peintre · Val-d’Oise</p>
            <h1 id="home-title" className={siteStyles.heroTitle}>
              Peintre en<br />bâtiment<br /><em>à Vétheuil.</em>
            </h1>
            <p className={siteStyles.heroDescription}>
              Peinture intérieure, enduits de ratissage, pose de papier peint et vinyle adhésif décoratif.
            </p>
            <QuoteButton />
            <p className={siteStyles.heroNote}>Devis gratuit sous 24 h après visite.</p>
          </div>
          <figure className={styles.heroPhoto}>
            <Image src={`${images}/hero_bg.jpg`} alt="Salon aux murs ocre et terracotta" fill priority />
            <figcaption>Photo d’illustration</figcaption>
          </figure>
        </section>

        <section className={styles.credentials} aria-label="Expérience et qualifications">
          <ul className={`${siteStyles.container} ${styles.credentialGrid}`}>
            {credentials.map(({ title: credential, detail }) => (
              <li key={credential}>
                <span className={styles.credentialTitle}>{credential}</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="prestations" className={styles.services} aria-labelledby="services-title">
          <div className={siteStyles.container}>
            <div className={styles.sectionIntro}>
              <div>
                <p className={siteStyles.eyebrow}>Prestations</p>
                <h2 id="services-title" className={siteStyles.sectionTitle}>Vos travaux <em>d’intérieur.</em></h2>
              </div>
              <p className={styles.servicesIntro}>De la préparation des supports à la finition.</p>
            </div>
            <ul className={styles.serviceGrid}>
              {services.map(({ title: service, slug, href, detail, image }) => (
                <li key={slug} id={slug} className={styles.serviceCard}>
                  <div className={styles.servicePhoto}>
                    <Image src={`${images}/${image}`} alt="" fill />
                  </div>
                  <div className={styles.serviceCopy}>
                    <h3>{href ? <a href={href} className={styles.serviceLink}>{service}</a> : service}</h3>
                    <p>{detail}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className={styles.serviceNote}>Photos d’illustration des prestations.</p>
          </div>
        </section>

        <section id="realisations" className={styles.projects} aria-labelledby="projects-title">
          <div className={`${siteStyles.container} ${styles.projectsInner}`}>
            <div className={styles.projectsIntro}>
              <p className={siteStyles.eyebrow}>Réalisations</p>
              <h2 id="projects-title" className={siteStyles.sectionTitle}>Les chantiers <em>en images.</em></h2>
            </div>
            <div className={styles.projectGrid}>
              {projects.map(({ title: project, location, image, alt }) => (
                <figure className={styles.projectCard} key={project}>
                  <div className={styles.projectPhoto}>
                    <Image src={`${images}/${image}`} alt={alt} fill />
                  </div>
                  <figcaption>
                    <span>{project}</span>
                    {location && <span className={styles.projectLocation}>{location}</span>}
                  </figcaption>
                </figure>
              ))}
            </div>
            <ArrowLink href={PORTFOLIO_PATH} className={`${siteStyles.textLink} ${styles.projectsLink}`}>
              Voir toutes les réalisations
            </ArrowLink>
          </div>
        </section>

        <section id="a-propos" className={`${siteStyles.container} ${styles.about}`} aria-labelledby="about-title">
          <div className={styles.aboutIntro}>
            <p className={siteStyles.eyebrow}>À propos</p>
            <h2 id="about-title" className={siteStyles.sectionTitle}>{CLIENT.owner},<br /><em>artisane peintre.</em></h2>
            <p>Basée à Vétheuil, Léna Renaud réalise elle-même chaque chantier, de la préparation des supports aux finitions.</p>
          </div>
          <div className={styles.aboutPhoto}>
            <Image src={`${images}/about_heading_bg.webp`} alt="Léna Renaud découpe un lé de papier peint sur sa table de travail" fill />
          </div>
          <figure className={styles.testimonial}>
            <div className={siteStyles.stars} role="img" aria-label="5 étoiles sur 5">★★★★★</div>
            <blockquote>
              <p>« Ma cuisine a été totalement transformée en 2 jours. Résultat bluffant pour un budget raisonnable. Léna est à l’écoute et force de proposition sur les finitions. »</p>
            </blockquote>
            <figcaption>
              <strong>Sophie Dubois</strong>
              <span>Relooking de cuisine · Saint-Germain-en-Laye</span>
            </figcaption>
          </figure>
        </section>
      </SiteLayout>
    </>
  );
}
