import Image from 'next/image';
import { MapPin } from 'lucide-react';
import SEO from '@components/layout/SEO';
import SiteLayout, { QuoteButton, type NavigationLink } from '@components/layout/SiteLayout';
import Qualifications from '@components/sections/Qualifications';
import type { CityPageContent, CityProject } from '@data/cities';
import { CLIENT, SITE_URL } from '@data/client';
import { buildBreadcrumbSchema, buildWebPageSchema } from '@data/schemas';
import { INTERIOR_SERVICES, serviceHref } from '@data/services';
import styles from '@/styles/City.module.css';
import siteStyles from '@/styles/Site.module.css';

const illustration = {
  src: '/assets/img/hero_bg.jpg',
  alt: 'Salon aux murs ocre et terracotta',
};
const navigation = [
  { label: 'Quartiers', href: '#quartiers' },
  { label: 'Prestations', href: '#prestations' },
] satisfies NavigationLink[];
const projectLink = { label: 'Réalisation', href: '#realisation' };
const contactLink = { label: 'Contact', href: '#contact' };
const visitSteps = [
  {
    title: 'Décrivez vos travaux',
    detail: 'Indiquez votre quartier et les pièces ou surfaces à rénover.',
  },
  {
    title: 'Planifiez la visite',
    detail: 'Léna vient voir le chantier, prendre les mesures et échanger avec vous sur les finitions.',
  },
  {
    title: 'Recevez votre devis',
    detail: 'Il détaille les matériaux, la main-d’œuvre et le délai des travaux.',
  },
];

export default function CityPage({ city }: { city: CityPageContent }) {
  const { name, href, postalCode, title, metaDescription, departmentName, project } = city;
  const photo = project?.photo ?? illustration;
  const localNavigation = project
    ? [...navigation, projectLink, contactLink]
    : [...navigation, contactLink];
  const jsonLd = [
    buildWebPageSchema({ path: href, title, description: metaDescription }),
    buildBreadcrumbSchema([
      { name: 'Accueil', url: `${SITE_URL}/` },
      { name, url: `${SITE_URL}${href}` },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: `Peinture intérieure à ${name}`,
      url: `${SITE_URL}${href}`,
      provider: { '@id': `${SITE_URL}/#business` },
      areaServed: {
        '@type': 'City',
        name,
        address: {
          '@type': 'PostalAddress',
          addressLocality: name,
          postalCode,
          addressRegion: departmentName,
          addressCountry: 'FR',
        },
      },
    },
  ];

  return (
    <>
      <SEO title={title} description={metaDescription} path={href} ogImage={project?.photo.src} jsonLd={jsonLd} />
      <SiteLayout page="city" localNavigation={localNavigation}>
        <section id={city.slug} className={`${siteStyles.container} ${styles.hero}`} aria-labelledby="city-title">
          <nav className={styles.breadcrumb} aria-label="Fil d’Ariane">
            <a href="/">Accueil</a>
            <span aria-hidden="true" />
            <span aria-current="page">{name}</span>
          </nav>
          <div className={styles.heroGrid}>
            <div>
              <p className={siteStyles.eyebrow}>{CLIENT.brand} · Artisane peintre</p>
              <h1 id="city-title" className={styles.heroTitle}>Rénovation <em>à {name}.</em></h1>
              <p className={`${siteStyles.heroDescription} ${styles.heroDescription}`}>
                Peinture intérieure, enduits de ratissage, pose de papier peint et vinyle adhésif décoratif.
              </p>
              <QuoteButton />
              <p className={siteStyles.heroNote}>Devis gratuit sous 24&nbsp;h après visite.</p>
            </div>
            <figure className={project ? styles.heroPhoto : `${styles.heroPhoto} ${styles.illustration}`}>
              <Image src={photo.src} alt={photo.alt} fill priority sizes="(max-width: 920px) 89vw, (max-width: 1440px) 46vw, 640px" />
              <figcaption>
                {project ? <><span>{project.title}</span><small>Chantier à {name}</small></> : 'Photo d’illustration'}
              </figcaption>
            </figure>
          </div>
        </section>

        <Qualifications />

        <section id="quartiers" className={`${styles.section} ${styles.neighbourhoods}`} aria-labelledby="neighbourhoods-title" tabIndex={-1}>
          <div className={siteStyles.container}>
            <div className={styles.sectionIntro}>
              <div>
                <p className={siteStyles.eyebrow}>{name} · {postalCode}</p>
                <h2 id="neighbourhoods-title" className={siteStyles.sectionTitle}>
                  Nos interventions dans <em>les quartiers de {name}</em>
                </h2>
              </div>
              <p>{city.neighbourhoodIntro}</p>
            </div>
            <ul className={styles.neighbourhoodList}>
              {city.neighbourhoods.map(({ name, detail }) => (
                <li key={name}>
                  <MapPin size={17} strokeWidth={1.5} aria-hidden="true" />
                  <div>
                    <h3>{name}</h3>
                    {detail && <p>{detail}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="prestations" className={`${styles.section} ${styles.services}`} aria-labelledby="services-title" tabIndex={-1}>
          <div className={siteStyles.container}>
            <div className={styles.sectionIntro}>
              <div>
                <p className={siteStyles.eyebrow}>Prestations</p>
                <h2 id="services-title" className={siteStyles.sectionTitle}>Vos travaux <em>d’intérieur.</em></h2>
              </div>
              <p>De la préparation des supports à la finition.</p>
            </div>
            <ul className={styles.servicesList}>
              {INTERIOR_SERVICES.map(({ title: service, slug, detail, image }) => (
                <li key={slug}>
                  <a href={serviceHref(slug)} className={styles.serviceCard}>
                    <div className={styles.servicePhoto}>
                      <Image src={`/assets/img/${image}`} alt="" fill sizes="(max-width: 920px) 29vw, (max-width: 1440px) 16vw, 212px" />
                    </div>
                    <div className={styles.serviceCopy}>
                      <h3>{service}</h3>
                      <p>{detail}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            <p className={styles.photoNote}>Photos d’illustration des prestations.</p>
          </div>
        </section>

        {project && <CityProjectSection cityName={name} project={project} />}

        <section id="devis" className={`${styles.section} ${styles.process}`} aria-labelledby="visit-title">
          <div className={siteStyles.container}>
            <p className={siteStyles.eyebrow}>Devis et visite</p>
            <h2 id="visit-title" className={siteStyles.sectionTitle}>Du premier échange <em>au devis.</em></h2>
            <ol className={styles.processList} role="list">
              {visitSteps.map(({ title, detail }, index) => (
                <li key={title}>
                  <span className={styles.step} aria-hidden="true">{index + 1}</span>
                  <div><h3>{title}</h3><p>{detail}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}

function CityProjectSection({ cityName, project }: { cityName: string; project: CityProject }) {
  const photo = project.detailPhoto ?? project.photo;
  const crop = project.detailPhoto?.crop;

  return (
    <section id="realisation" className={`${styles.section} ${styles.project}`} aria-labelledby="project-title" tabIndex={-1}>
      <div className={`${siteStyles.container} ${styles.projectGrid}`}>
        <div className={styles.projectCopy}>
          <p className={siteStyles.eyebrow}>Réalisation à {cityName}</p>
          <h2 id="project-title" className={siteStyles.sectionTitle}>
            {project.heading}{project.emphasis ? <> <em>{project.emphasis}</em></> : null}
          </h2>
          <p className={styles.projectDescription}>{project.description}</p>
          <dl className={styles.projectFacts}>
            <div><dt>Prestation</dt><dd>{project.service}</dd></div>
            <div><dt>Lieu</dt><dd>{cityName}</dd></div>
          </dl>
        </div>
        <figure className={styles.projectFigure}>
          <div className={styles.projectPhoto}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className={crop ? styles.croppedPhoto : undefined}
              style={crop ? {
                width: `${crop.width}%`,
                left: `${crop.left}%`,
                transform: `translateY(${crop.translateY}%)`,
              } : undefined}
            />
          </div>
          {project.detailPhoto && <figcaption>{project.detailPhoto.caption}</figcaption>}
        </figure>
      </div>
    </section>
  );
}
