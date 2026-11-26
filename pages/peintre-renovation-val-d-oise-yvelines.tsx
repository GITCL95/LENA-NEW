import Image from 'next/image';
import SEO from '@components/layout/SEO';
import SiteLayout, { Arrow, ArrowLink, type NavigationLink } from '@components/layout/SiteLayout';
import AreaHero from '@components/sections/AreaHero';
import InteriorServices from '@components/sections/InteriorServices';
import Qualifications from '@components/sections/Qualifications';
import { CITIES, PONTOISE } from '@data/cities';
import { ABOUT_PATH, CLIENT, PORTFOLIO_PATH, SITE_URL, ZONES_PATH } from '@data/client';
import { buildBreadcrumbSchema, buildFAQSchema, buildWebPageSchema } from '@data/schemas';
import styles from '@/styles/Zones.module.css';
import siteStyles from '@/styles/Site.module.css';

const navigation = [
  { label: 'Prestations', href: '#prestations' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'À propos', href: ABOUT_PATH },
  { label: 'Zones', href: ZONES_PATH, current: 'page' },
  { label: 'Contact', href: '#contact' },
] satisfies NavigationLink[];

const departments = [
  { code: '95', name: 'Val-d’Oise' },
  { code: '78', name: 'Yvelines' },
  { code: '27', name: 'Eure' },
  { code: '60', name: 'Oise' },
];

const cities = departments.flatMap(({ code, name: department }) =>
  CITIES.filter((city) => city.department === code)
    .map(({ href, name, postalCode }) => ({ href, name, postalCode, department })),
);

const projects = [
  {
    title: 'Papier peint panoramique',
    src: '/assets/img/realisations/papier-peint-panoramique-lit/papier-peint-panoramique-lit-1.webp',
    alt: 'Chambre mansardée avec un papier peint panoramique à motif de palmiers',
    href: `${PORTFOLIO_PATH}#papier-peint-panoramique`,
    sizes: '(max-width: 920px) 89vw, (max-width: 1440px) 56vw, 804px',
  },
  {
    title: 'Peinture d’une chambre',
    src: '/assets/img/realisations/renovation-master-bedroom/renovation-master-bedroom-6.webp',
    alt: 'Deux portes sombres dans une chambre aux murs terracotta',
    href: `${PORTFOLIO_PATH}#chambre-terracotta`,
    sizes: '(max-width: 920px) 89vw, (max-width: 1440px) 28vw, 402px',
  },
];

const questions = [
  {
    q: 'Comment se passe la demande de devis\u00a0?',
    a: 'Décrivez votre projet à Léna. Après la visite du chantier, elle vous envoie un devis gratuit sous 24\u00a0h.',
  },
  {
    q: 'Quels travaux réalisez-vous dans les Yvelines\u00a0?',
    a: 'Léna Rénove y propose la peinture intérieure, les enduits de ratissage, la pose de papier peint et le vinyle adhésif décoratif.',
  },
  {
    q: 'Votre activité est-elle assurée\u00a0?',
    a: 'Léna Rénove dispose d’une assurance responsabilité civile professionnelle (RC Pro).',
  },
];

const title = 'Peintre Val-d’Oise (95) et Yvelines (78) · Léna Rénove';
const description = 'Artisane peintre basée à Vétheuil. Peinture intérieure, enduits, papier peint et vinyle adhésif dans un rayon de 40 km. Devis gratuit sous 24 h après visite.';
const jsonLd = [
  buildWebPageSchema({ path: ZONES_PATH, title, description }),
  buildBreadcrumbSchema([
    { name: 'Accueil', url: `${SITE_URL}/` },
    { name: 'Zones d’intervention', url: `${SITE_URL}${ZONES_PATH}` },
  ]),
  buildFAQSchema(questions),
];

const salon = PONTOISE.project;
const heroPhoto = {
  ...salon.photo,
  caption: { title: salon.title, detail: 'Pontoise, Val-d’Oise' },
};

export default function Zones() {
  return (
    <>
      <SEO title={title} description={description} path={ZONES_PATH} ogImage={heroPhoto.src} jsonLd={jsonLd} />
      <SiteLayout page="zones" localNavigation={navigation}>
        <AreaHero
          breadcrumb="Zones d’intervention"
          eyebrow="Artisane peintre · Vétheuil"
          title={<>Peintre en bâtiment <em>dans le Val-d’Oise <br />et les Yvelines.</em></>}
          description={<>Peinture intérieure, enduits, papier peint et vinyle adhésif. Léna Rénove intervient dans un rayon de 40&nbsp;km autour de Vétheuil.</>}
          photo={heroPhoto}
          regional
        />

        <section className={styles.departments} aria-label="Départements d’intervention">
          <ul className={`${siteStyles.container} ${styles.departmentList}`}>
            {departments.map(({ code, name }) => (
              <li key={code}><strong>{code}</strong><span>{name}</span></li>
            ))}
          </ul>
        </section>

        <section id="villes" className={`${styles.section} ${styles.cities}`} aria-labelledby="cities-title" tabIndex={-1}>
          <div className={siteStyles.container}>
            <div className={styles.citiesIntro}>
              <div>
                <p className={siteStyles.eyebrow}>Communes desservies</p>
                <h2 id="cities-title" className={siteStyles.sectionTitle}>Six villes <em>à découvrir.</em></h2>
              </div>
              <p>Retrouvez les informations locales et les prestations proposées dans chaque ville.</p>
            </div>
            <ul className={styles.cityList}>
              {cities.map(({ href, name, postalCode, department }) => (
                <li key={href}>
                  <a href={href} className={styles.cityLink}>
                    <div>
                      <h3>{name}</h3>
                      <p>{postalCode} · {department}</p>
                    </div>
                    <span className={styles.cityArrow} aria-hidden="true"><Arrow /></span>
                  </a>
                </li>
              ))}
            </ul>
            <div className={styles.localNote}>
              <p>Votre commune n’apparaît pas dans la liste&nbsp;?</p>
              <ArrowLink href={`mailto:${CLIENT.email}`} className={siteStyles.textLink}>Vérifier ma commune</ArrowLink>
            </div>
          </div>
        </section>

        <InteriorServices />

        <section id="realisations" className={`${styles.section} ${styles.projects}`} aria-labelledby="projects-title" tabIndex={-1}>
          <div className={`${siteStyles.container} ${styles.projectsInner}`}>
            <div className={styles.projectsHeading}>
              <p className={siteStyles.eyebrow}>Réalisations</p>
              <h2 id="projects-title" className={siteStyles.sectionTitle}>Les chantiers <em>en images.</em></h2>
            </div>
            <ul className={styles.projectList}>
              {projects.map(({ title, alt, src, href, sizes }) => (
                <li key={src} className={styles.project}>
                  <figure>
                    <div className={styles.projectPhoto}>
                      <Image src={src} alt={alt} fill sizes={sizes} />
                    </div>
                    <figcaption><a href={href}>{title}</a></figcaption>
                  </figure>
                </li>
              ))}
            </ul>
            <ArrowLink href={PORTFOLIO_PATH} className={`${siteStyles.textLink} ${styles.projectsLink}`}>
              Voir toutes les réalisations
            </ArrowLink>
          </div>
        </section>

        <Qualifications light />

        <section className={`${styles.section} ${styles.faq}`} aria-labelledby="faq-title">
          <div className={`${siteStyles.container} ${styles.faqInner}`}>
            <div>
              <p className={siteStyles.eyebrow}>Questions fréquentes</p>
              <h2 id="faq-title" className={siteStyles.sectionTitle}>Avant <em>les travaux.</em></h2>
            </div>
            <div className={styles.questions}>
              {questions.map(({ q, a }, index) => (
                <details key={q} open={index === 0}>
                  <summary>{q}<span className={styles.questionIcon} aria-hidden="true" /></summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
