import Image from 'next/image';
import SEO from '@components/layout/SEO';
import SiteLayout, { QuoteButton } from '@components/layout/SiteLayout';
import { Breadcrumb } from '@components/sections/PageHero';
import ServiceLink from '@components/sections/ServiceLink';
import { ABOUT_PATH, CLIENT, SITE_URL } from '@data/client';
import { buildBreadcrumbSchema, buildWebPageSchema } from '@data/schemas';
import styles from '@/styles/About.module.css';
import siteStyles from '@/styles/Site.module.css';

const portrait = '/assets/img/about_heading_bg.webp';

const commitments = [
  {
    title: 'CAP Peintre en bâtiment',
    description: `Un diplôme d’État et ${CLIENT.credentials.experience} ans d’expérience sur les chantiers.`,
  },
  {
    title: 'Assurance professionnelle',
    description: 'Une responsabilité civile professionnelle couvre mon activité.',
  },
  {
    title: 'Peintures professionnelles',
    description: `J’utilise exclusivement les peintures ${CLIENT.brands.join(' et ')}.`,
  },
  {
    title: 'Suivi par la même artisane',
    description: 'Je réalise personnellement chaque chantier, de la préparation au contrôle final.',
  },
];

const steps = [
  {
    title: 'Visite et diagnostic',
    description: 'Je viens gratuitement évaluer le chantier, écouter vos attentes et mesurer les surfaces.',
  },
  {
    title: 'Devis détaillé sous 24 h',
    description: 'Après la visite, je vous indique les quantités, les matériaux, la main-d’œuvre et les délais.',
  },
  {
    title: 'Préparation du chantier',
    description: <>Je protège les sols et les meubles, puis je prépare les supports selon leur état. Si les murs sont irréguliers, je les <ServiceLink service="enduits">lisse à l’enduit</ServiceLink>.</>,
  },
  {
    title: 'Application et finitions',
    description: 'J’applique la peinture ou je pose le papier peint ou le vinyle adhésif choisi.',
  },
  {
    title: 'Contrôle et livraison',
    description: 'Nous vérifions le résultat ensemble. Le chantier est livré propre et les déchets sont évacués.',
  },
];

export default function About() {
  const title = 'Léna Renaud · Artisane peintre à Vétheuil · Léna Rénove';
  const description = 'Découvrez le parcours de Léna Renaud, artisane peintre à Vétheuil, sa méthode de travail et ses engagements pour vos travaux de peinture et de décoration intérieure.';
  const jsonLd = [
    buildWebPageSchema({ path: ABOUT_PATH, title, description }),
    buildBreadcrumbSchema([
      { name: 'Accueil', url: `${SITE_URL}/` },
      { name: 'À propos', url: `${SITE_URL}${ABOUT_PATH}` },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: CLIENT.owner,
      jobTitle: 'Artisane peintre en bâtiment',
      worksFor: { '@type': 'LocalBusiness', '@id': `${SITE_URL}/#business` },
      hasCredential: CLIENT.credentials.diploma,
      url: `${SITE_URL}${ABOUT_PATH}`,
    },
  ];

  return (
    <>
      <SEO title={title} description={description} path={ABOUT_PATH} ogImage={portrait} jsonLd={jsonLd} />
      <SiteLayout page="about">
        <section className={`${siteStyles.container} ${siteStyles.pageIntroSpacing}`} aria-labelledby="about-title">
          <Breadcrumb current="À propos" />
          <div className={styles.intro}>
            <div>
              <p className={siteStyles.eyebrow}>À propos</p>
              <h1 id="about-title" className={`${siteStyles.heroTitle} ${styles.title}`}>
                {CLIENT.owner},<br /><em>artisane peintre.</em>
              </h1>
              <p className={`${siteStyles.heroDescription} ${styles.introDescription}`}>
                Basée à Vétheuil, je réalise moi-même vos <ServiceLink service="overview">travaux de peinture et de décoration intérieure</ServiceLink>.
              </p>
              <QuoteButton />
              <p className={siteStyles.heroNote}>Devis gratuit sous 24&nbsp;h après visite.</p>
            </div>
            <figure className={styles.portrait}>
              <Image
                src={portrait}
                alt="Léna Renaud découpe un lé de papier peint sur sa table de travail"
                fill
                priority
              />
            </figure>
          </div>
        </section>

        <section className={`${styles.section} ${styles.light}`} aria-labelledby="parcours-title">
          <div className={`${siteStyles.container} ${styles.story}`}>
            <div>
              <p className={siteStyles.eyebrow}>Parcours</p>
              <h2 id="parcours-title" className={siteStyles.sectionTitle}>Du bureau d’études<br /><em>au pinceau.</em></h2>
            </div>
            <div className={styles.storyCopy}>
              <p>J’ai travaillé plusieurs années en bureau d’études. J’y ai appris à connaître les structures, les matériaux et les contraintes techniques du bâtiment.</p>
              <p>Après avoir obtenu mon <strong>CAP Peintre en bâtiment</strong>, j’ai fondé <strong>Léna Rénove</strong> à Vétheuil. Pour les <ServiceLink service="peinture">travaux de peinture intérieure</ServiceLink>, je prépare les supports, puis j’applique la peinture à la main ou au pistolet airless selon la surface.</p>
              <blockquote className={styles.storyQuote}>« Je ne livre que ce que j’accepterais chez moi. »</blockquote>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.blush}`} aria-labelledby="engagements-title">
          <div className={siteStyles.container}>
            <p className={siteStyles.eyebrow}>Engagements</p>
            <h2 id="engagements-title" className={siteStyles.sectionTitle}>Ce qui guide <em>chaque chantier.</em></h2>
            <ul className={styles.commitmentGrid}>
              {commitments.map(({ title: heading, description: text }) => (
                <li key={heading} className={styles.commitment}>
                  <h3>{heading}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={`${styles.section} ${styles.light}`} aria-labelledby="methode-title">
          <div className={`${siteStyles.container} ${styles.method}`}>
            <div className={styles.methodHeading}>
              <p className={siteStyles.eyebrow}>Méthode</p>
              <h2 id="methode-title" className={siteStyles.sectionTitle}>De la visite<br /><em>à la livraison.</em></h2>
            </div>
            <ol className={styles.steps}>
              {steps.map(({ title: heading, description: text }, index) => (
                <li key={heading} className={styles.step}>
                  <span className={styles.number} aria-hidden="true">{index + 1}</span>
                  <div>
                    <h3>{heading}</h3>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <figure className={styles.methodFigure}>
              <div className={styles.methodPhoto}>
                <Image
                  src="/assets/img/realisations/renovation-master-bedroom/renovation-master-bedroom-5.webp"
                  alt="Pièce rénovée aux murs terracotta, avec du parquet et deux fenêtres"
                  fill
                />
              </div>
              <figcaption>Réalisation de peinture intérieure</figcaption>
            </figure>
          </div>
        </section>

        <section className={`${styles.section} ${styles.blush}`} aria-labelledby="avis-title">
          <div className={`${siteStyles.container} ${styles.review}`}>
            <div>
              <p className={siteStyles.eyebrow}>Avis client</p>
              <h2 id="avis-title" className={siteStyles.sectionTitle}>Ce qu’en dit<br /><em>un client.</em></h2>
            </div>
            <figure className={styles.reviewCard}>
              <div className={siteStyles.stars} role="img" aria-label="5 étoiles sur 5">★★★★★</div>
              <blockquote>
                <p>« Pose impeccable d’un panoramique dans notre salon. Précision du raccord, rigueur sur la préparation – rien à redire. On sent la passion du métier. »</p>
              </blockquote>
              <figcaption>
                <strong>Marc Legrand</strong>
                <span><ServiceLink service="papier-peint">Pose de papier peint panoramique</ServiceLink> · Cergy</span>
              </figcaption>
            </figure>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
