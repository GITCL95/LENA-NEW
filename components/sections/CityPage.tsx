import Image from 'next/image';
import { MapPin } from 'lucide-react';
import SEO from '@components/layout/SEO';
import SiteLayout from '@components/layout/SiteLayout';
import AreaHero from '@components/sections/AreaHero';
import { OnPageNavigation } from '@components/sections/DetailPage';
import InteriorServices from '@components/sections/InteriorServices';
import Qualifications from '@components/sections/Qualifications';
import Questions from '@components/sections/Questions';
import ServiceLink from '@components/sections/ServiceLink';
import type { CityPageContent, CityProject } from '@data/cities';
import { CLIENT, SITE_URL, ZONES_PATH } from '@data/client';
import { getCityQuestions } from '@data/faq';
import { buildBreadcrumbSchema, buildFAQSchema, buildWebPageSchema } from '@data/schemas';
import { INTERIOR_SERVICES } from '@data/services';
import styles from '@/styles/City.module.css';
import siteStyles from '@/styles/Site.module.css';

const illustration = {
  src: '/assets/img/hero_bg.jpg',
  alt: 'Salon aux murs ocre et terracotta',
};
const responsiveIllustration = {
  ...illustration,
  src: '/assets/img/hero-1024.webp',
  srcSet: '/assets/img/hero-640.webp 640w, /assets/img/hero-1024.webp 1024w',
};
const compactLogo = { src: '/assets/img/logo-250.webp', width: 250, height: 221 };
const citySections = [
  { label: 'Quartiers', id: 'quartiers' },
  { label: 'Services', id: 'prestations' },
  { label: 'Tarifs', id: 'tarifs' },
  { label: 'Étapes', id: 'devis' },
  { label: 'FAQ', id: 'faq' },
];
const projectSection = { label: 'Réalisation', id: 'realisation' };
const contactSection = { label: 'Contact', id: 'contact' };
const workSteps = [
  {
    title: 'Prise de contact',
    detail: <>Indiquez votre quartier et les éléments à rénover. Pour un <ServiceLink service="vinyle">habillage en vinyle</ServiceLink>, précisez quels meubles ou quelles portes sont concernés.</>,
  },
  {
    title: 'Visite sur place selon le projet',
    detail: 'Si nécessaire, Léna examine les supports et prend les mesures.',
  },
  {
    title: 'Envoi du devis',
    detail: 'Le devis détaille les matériaux, la main-d’œuvre et le délai des travaux.',
  },
  {
    title: 'Réalisation des travaux',
    detail: 'Léna prépare les supports et réalise les travaux prévus au devis.',
  },
  {
    title: 'Réception du chantier',
    detail: 'Vous vérifiez ensemble le résultat avant la remise du chantier.',
  },
];

export default function CityPage({ city }: { city: CityPageContent }) {
  const { name, href, postalCode, title, metaDescription, departmentName, project, optimizedImages } = city;
  const photo = project?.photo ?? (optimizedImages ? responsiveIllustration : illustration);
  const questions = getCityQuestions(city);
  const sections = project
    ? [...citySections, projectSection, contactSection]
    : [...citySections, contactSection];
  const jsonLd = [
    buildWebPageSchema({ path: href, title, description: metaDescription }),
    buildBreadcrumbSchema([
      { name: 'Accueil', url: `${SITE_URL}/` },
      { name: 'Zones d’intervention', url: `${SITE_URL}${ZONES_PATH}` },
      { name, url: `${SITE_URL}${href}` },
    ]),
    buildFAQSchema(questions),
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
      <SiteLayout page="city" activePath={href} headerLogo={optimizedImages ? compactLogo : undefined}>
        <AreaHero
          id={city.slug}
          breadcrumb={name}
          breadcrumbParent={{ label: 'Zones d’intervention', href: ZONES_PATH }}
          eyebrow={`${CLIENT.brand} · Artisane peintre`}
          title={<>Rénovation <em>à {name}.</em></>}
          description={<><ServiceLink service="peinture">Peinture intérieure</ServiceLink>, enduits de ratissage, pose de papier peint et vinyle adhésif décoratif.</>}
          photo={project ? { ...photo, caption: { title: project.title, detail: `Chantier à ${name}` } } : photo}
        />

        <Qualifications />
        <OnPageNavigation sections={sections} />

        <section id="quartiers" className={`${styles.section} ${styles.neighbourhoods}`} aria-labelledby="neighbourhoods-title" tabIndex={-1}>
          <div className={siteStyles.container}>
            <div className={styles.sectionIntro}>
              <div>
                <p className={siteStyles.eyebrow}>{name} · {postalCode}</p>
                <h2 id="neighbourhoods-title" className={siteStyles.sectionTitle}>
                  Nos interventions dans <em>les quartiers de {name}</em>
                </h2>
              </div>
              <p>{city.neighbourhoodIntro} Pour préparer votre projet, consultez le détail des <ServiceLink service="overview">prestations de rénovation intérieure</ServiceLink>.</p>
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

        <InteriorServices compactImages={optimizedImages} />

        <CityPrices name={name} />

        <section id="devis" className={`${styles.section} ${styles.process}`} aria-labelledby="process-title" tabIndex={-1}>
          <div className={siteStyles.container}>
            <h2 id="process-title" className={`${siteStyles.sectionTitle} ${styles.inlineTitle}`}>
              Comment se déroulent <em>vos travaux&nbsp;?</em>
            </h2>
            <ol className={styles.processList} role="list">
              {workSteps.map(({ title, detail }, index) => (
                <li key={title}>
                  <span className={styles.step} aria-hidden="true">{index + 1}</span>
                  <div><h3>{title}</h3><p>{detail}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Questions id="faq" title={<>Questions <em>fréquentes</em></>} items={questions} />

        {project && <CityProjectSection cityName={name} project={project} />}
      </SiteLayout>
    </>
  );
}

function CityPrices({ name }: { name: string }) {
  return (
    <section id="tarifs" className={`${styles.section} ${styles.prices}`} aria-labelledby="prices-title" tabIndex={-1}>
      <div className={siteStyles.container}>
        <h2 id="prices-title" className={`${siteStyles.sectionTitle} ${styles.inlineTitle}`}>
          Quels tarifs pour vos travaux <em>à {name}&nbsp;?</em>
        </h2>
        <div className={styles.priceTableFrame}>
          <table className={styles.priceTable} aria-labelledby="prices-title" aria-describedby="prices-note">
            <thead>
              <tr>
                <th scope="col">Prestation</th>
                <th scope="col">Tarif indicatif</th>
                <th scope="col">Unité</th>
              </tr>
            </thead>
            <tbody>
              {INTERIOR_SERVICES.map(({ title, slug, unit, priceRange, priceDetail }) => (
                <tr key={slug}>
                  <th scope="row">
                    {title}
                    <small>{priceDetail}</small>
                  </th>
                  <td>{priceRange}</td>
                  <td>{unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p id="prices-note" className={styles.priceNote}>
          Ces fourchettes s’appuient sur les prix publiés par des professionnels en Île-de-France.
          {' '}Le devis tient compte des reprises à prévoir, comme un <ServiceLink service="enduits">ratissage</ServiceLink> si les murs sont irréguliers.
        </p>
      </div>
    </section>
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
