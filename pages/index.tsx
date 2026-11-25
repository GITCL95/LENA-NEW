import { useRef, useState, type ReactNode } from 'react';
import Image from 'next/image';
import SEO from '@components/layout/SEO';
import { CLIENT, SITE_URL } from '@data/client';
import {
  buildBreadcrumbSchema,
  buildLocalBusinessSchema,
  buildWebPageSchema,
  buildWebSiteSchema,
} from '@data/schemas';
import styles from '@/styles/Home.module.css';

const images = '/assets/img';
const quoteEmail = `mailto:${CLIENT.email}?subject=${encodeURIComponent('Demande de devis')}`;

const navigation = [
  { label: 'Prestations', href: '#prestations' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'À propos', href: '#a-propos' },
  { label: 'Contact', href: '#contact' },
];

const credentials = [
  { title: `${CLIENT.credentials.experience} ans`, detail: 'd’expérience' },
  { title: 'CAP', detail: 'Peintre en bâtiment' },
  { title: 'RC Pro', detail: 'Assurance professionnelle' },
  { title: CLIENT.brands.join(' & '), detail: 'Peintures professionnelles' },
];

const services = [
  {
    title: 'Peinture intérieure',
    detail: 'Murs, plafonds et boiseries. Finitions mates, satinées ou brillantes.',
    image: 'insta-9.jpg',
  },
  {
    title: 'Enduits de ratissage',
    detail: 'Rebouchage, lissage et traitement des fissures.',
    image: 'service_thumb_2.jpg',
  },
  {
    title: 'Pose de papier peint',
    detail: 'Papiers peints intissés ou panoramiques.',
    image: 'service_thumb_3.jpg',
  },
  {
    title: 'Vinyle adhésif décoratif',
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

function ArrowLink({ href, className, children }: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  return (
    <a href={href} className={className}>
      {children}
      <span className={styles.arrow} aria-hidden="true" />
    </a>
  );
}

function HomeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header
      className={styles.header}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && menuOpen) {
          setMenuOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className={`${styles.container} ${styles.headerInner}`}>
        <a href="/" className={styles.logo} aria-label="Léna Rénove, accueil">
          <Image src={`${images}/logo-lt.png`} alt="" width={500} height={442} loading="eager" />
        </a>
        <nav className={styles.desktopNav} aria-label="Navigation principale">
          {navigation.map(({ label, href }) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <ArrowLink href="#contact" className={`${styles.button} ${styles.headerButton}`}>
          Demander un devis
        </ArrowLink>
        <button
          ref={menuButton}
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-controls="home-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          Menu <span className={styles.menuIcon} aria-hidden="true" />
        </button>
      </div>
      <nav
        id="home-navigation"
        className={styles.mobileNav}
        aria-label="Navigation principale"
        hidden={!menuOpen}
      >
        <div className={styles.container}>
          {navigation.map(({ label, href }) => (
            <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </div>
      </nav>
    </header>
  );
}

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
      <div className={styles.home}>
        <HomeHeader />
        <main id="content">
          <section className={`${styles.container} ${styles.hero}`} aria-labelledby="home-title">
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Artisane peintre · Val-d’Oise</p>
              <h1 id="home-title" className={styles.heroTitle}>
                Peintre en<br />bâtiment<br /><em>à Vétheuil.</em>
              </h1>
              <p className={styles.heroDescription}>
                Peinture intérieure, enduits de ratissage, pose de papier peint et vinyle adhésif décoratif.
              </p>
              <ArrowLink href="#contact" className={`${styles.button} ${styles.primaryButton}`}>
                Demander un devis
              </ArrowLink>
              <p className={styles.heroNote}>Devis gratuit sous 24 h après visite.</p>
            </div>
            <figure className={styles.heroPhoto}>
              <Image src={`${images}/hero_bg.jpg`} alt="Salon aux murs ocre et terracotta" fill priority />
              <figcaption>Photo d’illustration</figcaption>
            </figure>
          </section>

          <section className={styles.credentials} aria-label="Expérience et qualifications">
            <ul className={`${styles.container} ${styles.credentialGrid}`}>
              {credentials.map(({ title: credential, detail }) => (
                <li key={credential}>
                  <span className={styles.credentialTitle}>{credential}</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="prestations" className={styles.services} aria-labelledby="services-title">
            <div className={styles.container}>
              <div className={styles.sectionIntro}>
                <div>
                  <p className={styles.eyebrow}>Prestations</p>
                  <h2 id="services-title" className={styles.sectionTitle}>Vos travaux <em>d’intérieur.</em></h2>
                </div>
                <p className={styles.servicesIntro}>De la préparation des supports à la finition.</p>
              </div>
              <ul className={styles.serviceGrid}>
                {services.map(({ title: service, detail, image }) => (
                  <li key={service} className={styles.serviceCard}>
                    <div className={styles.servicePhoto}>
                      <Image src={`${images}/${image}`} alt="" fill />
                    </div>
                    <div className={styles.serviceCopy}>
                      <h3>{service}</h3>
                      <p>{detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className={styles.serviceNote}>Photos d’illustration des prestations.</p>
            </div>
          </section>

          <section id="realisations" className={styles.projects} aria-labelledby="projects-title">
            <div className={`${styles.container} ${styles.projectsInner}`}>
              <div className={styles.projectsIntro}>
                <p className={styles.eyebrow}>Réalisations</p>
                <h2 id="projects-title" className={styles.sectionTitle}>Les chantiers <em>en images.</em></h2>
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
              <ArrowLink href="/portfolio.html" className={`${styles.textLink} ${styles.projectsLink}`}>
                Voir toutes les réalisations
              </ArrowLink>
            </div>
          </section>

          <section id="a-propos" className={`${styles.container} ${styles.about}`} aria-labelledby="about-title">
            <div className={styles.aboutIntro}>
              <p className={styles.eyebrow}>À propos</p>
              <h2 id="about-title" className={styles.sectionTitle}>{CLIENT.owner},<br /><em>artisane peintre.</em></h2>
              <p>Basée à Vétheuil, Léna Renaud réalise elle-même chaque chantier, de la préparation des supports aux finitions.</p>
            </div>
            <div className={styles.aboutPhoto}>
              <Image src={`${images}/about_heading_bg.webp`} alt="Léna Renaud découpe un lé de papier peint sur sa table de travail" fill />
            </div>
            <figure className={styles.testimonial}>
              <div className={styles.stars} role="img" aria-label="5 étoiles sur 5">★★★★★</div>
              <blockquote>
                <p>« Ma cuisine a été totalement transformée en 2 jours. Résultat bluffant pour un budget raisonnable. Léna est à l’écoute et force de proposition sur les finitions. »</p>
              </blockquote>
              <figcaption>
                <strong>Sophie Dubois</strong>
                <span>Relooking de cuisine · Saint-Germain-en-Laye</span>
              </figcaption>
            </figure>
          </section>

          <section id="contact" className={styles.contact} aria-labelledby="contact-title">
            <div className={`${styles.container} ${styles.contactInner}`}>
              <div>
                <p className={styles.eyebrow}>Contact</p>
                <h2 id="contact-title" className={styles.contactTitle}>Parlons de<br /><em>votre projet.</em></h2>
                <p className={styles.contactDescription}>Décrivez vos travaux par e-mail. Le devis est gratuit et envoyé sous 24 h après visite.</p>
                <ArrowLink href={quoteEmail} className={`${styles.button} ${styles.contactButton}`}>
                  Demander un devis
                </ArrowLink>
              </div>
              <div className={styles.contactDetails}>
                <div className={styles.contactRow}>
                  <h3>Coordonnées</h3>
                  <ArrowLink href={`mailto:${CLIENT.email}`} className={styles.textLink}>{CLIENT.email}</ArrowLink>
                  <p>{CLIENT.address.postalCode} {CLIENT.address.locality}, Val-d’Oise</p>
                </div>
                <div className={styles.contactRow}>
                  <h3>Zone d’intervention</h3>
                  <p>Dans un rayon de 40 km autour de Vétheuil, notamment dans le Val-d’Oise et les Yvelines.</p>
                </div>
                <div className={`${styles.contactRow} ${styles.instagramRow}`}>
                  <h3>Instagram</h3>
                  <ArrowLink href={CLIENT.instagram} className={styles.textLink}>{CLIENT.instagramHandle}</ArrowLink>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <div className={`${styles.container} ${styles.footerInner}`}>
            <a href="/" className={styles.wordmark}>Léna <em>Rénove</em></a>
            <a href="/mentions-legales.html">Mentions légales</a>
          </div>
        </footer>
      </div>
    </>
  );
}
