import Image from 'next/image';
import SEO from '@components/layout/SEO';
import SiteLayout, { ArrowLink, QuoteButton } from '@components/layout/SiteLayout';
import { CLIENT, PONTOISE_PATH, PORTFOLIO_PATH } from '@data/client';
import { PONTOISE } from '@data/cities';
import { interiorIllustration, panoramicWallpaper, workPortrait } from '@data/images';
import Qualifications from '@components/sections/Qualifications';
import ServiceLink from '@components/sections/ServiceLink';
import { INTERIOR_SERVICES, serviceHref } from '@data/services';
import { buildOrganization } from '@data/schemas';
import styles from '@/styles/Home.module.css';
import siteStyles from '@/styles/Site.module.css';

const images = '/assets/img';

const projects: { title: string; location?: string; href: string; src: string; alt: string }[] = [
  {
    title: 'Peinture d’un salon',
    location: 'Pontoise',
    href: `${PONTOISE_PATH}#realisation`,
    ...PONTOISE.project.photo,
  },
  {
    title: 'Papier peint panoramique',
    href: `${PORTFOLIO_PATH}#papier-peint-panoramique`,
    ...panoramicWallpaper,
  },
  {
    title: 'Peinture d’une chambre',
    href: `${PORTFOLIO_PATH}#chambre-terracotta`,
    src: `${images}/realisations/renovation-master-bedroom/renovation-master-bedroom-6.webp`,
    alt: 'Deux portes sombres dans une chambre aux murs terracotta',
  },
];

export default function Home() {
  const title = 'Peintre en bâtiment à Vétheuil (95) · Léna Rénove';
  const description =
    'Léna Renaud, artisane peintre à Vétheuil, réalise vos travaux de peinture intérieure, d’enduits et de revêtements décoratifs. Demandez un devis gratuit.';

  return (
    <>
      <SEO title={title} description={description} path="/" image={PONTOISE.project.photo} mainEntity={buildOrganization()} />
      <SiteLayout>
        <section className={`${siteStyles.container} ${styles.hero}`} aria-labelledby="home-title">
          <div className={styles.heroCopy}>
            <p className={siteStyles.eyebrow}>Artisane peintre · Val-d’Oise</p>
            <h1 id="home-title" className={siteStyles.heroTitle}>
              Peintre en<br />bâtiment<br /><em>à Vétheuil.</em>
            </h1>
            <p className={siteStyles.heroDescription}>
              <ServiceLink service="peinture">Peinture intérieure</ServiceLink>, enduits de ratissage, pose de papier peint et vinyle adhésif décoratif.
            </p>
            <QuoteButton />
            <p className={siteStyles.heroNote}>Devis gratuit sous 24&nbsp;h après visite.</p>
          </div>
          <figure className={styles.heroPhoto}>
            <Image {...interiorIllustration} fill priority />
            <figcaption>Photo d’illustration</figcaption>
          </figure>
        </section>

        <Qualifications />

        <section id="prestations" className={styles.services} aria-labelledby="services-title">
          <div className={siteStyles.container}>
            <div className={styles.sectionIntro}>
              <div>
                <p className={siteStyles.eyebrow}>Services</p>
                <h2 id="services-title" className={siteStyles.sectionTitle}>Vos travaux <em>d’intérieur.</em></h2>
              </div>
              <p className={styles.servicesIntro}>
                Découvrez les <ServiceLink service="overview">prestations de rénovation intérieure</ServiceLink>, de la préparation des supports aux finitions.
              </p>
            </div>
            <ul className={styles.serviceGrid}>
              {INTERIOR_SERVICES.map(({ title: service, slug, detail, image }) => (
                <li key={slug} id={slug} className={styles.serviceCard}>
                  <div className={styles.servicePhoto}>
                    <Image src={`${images}/${image}`} alt="" fill />
                  </div>
                  <div className={styles.serviceCopy}>
                    <h3><a href={serviceHref(slug)} className={styles.cardLink}>{service}</a></h3>
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
              <p className="mt-3">Un <ServiceLink service="papier-peint">papier peint panoramique</ServiceLink> suffit à changer l’ambiance d’une chambre.</p>
            </div>
            <div className={styles.projectGrid}>
              {projects.map(({ title: project, location, src, alt, href }) => (
                <figure className={styles.projectCard} key={project}>
                  <div className={styles.projectPhoto}>
                    <Image src={src} alt={alt} fill />
                  </div>
                  <figcaption>
                    <a href={href} className={styles.cardLink}>{project}</a>
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
            <Image {...workPortrait} fill />
          </div>
          <figure className={styles.testimonial}>
            <div className={siteStyles.stars} role="img" aria-label="5 étoiles sur 5">★★★★★</div>
            <blockquote>
              <p>« Ma cuisine a été totalement transformée en 2 jours. Résultat bluffant pour un budget raisonnable. Léna est à l’écoute et force de proposition sur les finitions. »</p>
            </blockquote>
            <figcaption>
              <strong>Sophie Dubois</strong>
              <span>Relooking de cuisine au <ServiceLink service="vinyle">vinyle adhésif</ServiceLink> · Saint-Germain-en-Laye</span>
            </figcaption>
          </figure>
        </section>
      </SiteLayout>
    </>
  );
}
