import Image from 'next/image';
import SEO from '@components/layout/SEO';
import SiteLayout from '@components/layout/SiteLayout';
import { DetailHero, OnPageNavigation } from '@components/sections/DetailPage';
import Questions from '@components/sections/Questions';
import { PORTFOLIO_PATH, SERVICES_PATH, SITE_URL } from '@data/client';
import { buildBreadcrumbSchema, buildFAQSchema, buildWebPageSchema } from '@data/schemas';
import type { ServiceContent } from '@data/service-details';
import { INTERIOR_SERVICES, serviceHref, serviceQuoteHref, type InteriorService } from '@data/services';
import styles from '@/styles/Service.module.css';
import siteStyles from '@/styles/Site.module.css';
import detailStyles from '@/styles/Detail.module.css';

export type ServicePageProps = {
  service: InteriorService['slug'];
  content: ServiceContent;
};

const serviceTitles = Object.fromEntries(INTERIOR_SERVICES.map(({ slug, title }) => [slug, title]));
const hub = { label: 'Services', href: SERVICES_PATH };
const sections = [
  { id: 'surfaces', label: 'Prestation' },
  { id: 'tarif', label: 'Tarifs' },
  { id: 'etapes', label: 'Étapes du chantier' },
  { id: 'realisations', label: 'Réalisations' },
  { id: 'faq', label: 'FAQ' },
];

const visit = { title: 'Visite et mesures', detail: 'Léna se déplace gratuitement pour examiner les surfaces, prendre les mesures et comprendre vos attentes.' };
const estimate = { title: 'Devis détaillé', detail: 'Sous 24 h après la visite, vous recevez le détail des quantités, des matériaux, de la main-d’œuvre et du délai.' };
const preparation = { title: 'Préparation', detail: 'Léna protège les sols et le mobilier, puis prépare les supports selon leur état.' };
const check = { title: 'Contrôle et livraison', detail: 'Vous vérifiez le résultat avec Léna, qui livre le chantier propre après évacuation des déchets.' };

export default function ServicePage({ service, content }: ServicePageProps) {
  const { description, heading, photo, scopeIntro, scope, finishes, price, priceFactors, workStep, projects, faq } = content;
  const label = serviceTitles[service];
  const path = serviceHref(service);
  const quoteHref = serviceQuoteHref(service);
  const title = `${label} à Vétheuil · Léna Rénove`;
  const steps = [visit, estimate, preparation, workStep, check];
  const jsonLd = [
    buildWebPageSchema({ path, title, description }),
    buildBreadcrumbSchema([
      { name: 'Accueil', url: `${SITE_URL}/` },
      { name: hub.label, url: `${SITE_URL}${hub.href}` },
      { name: label, url: `${SITE_URL}${path}` },
    ]),
    buildFAQSchema(faq),
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: label,
      url: `${SITE_URL}${path}`,
      provider: { '@id': `${SITE_URL}/#business` },
      areaServed: ['Val-d’Oise', 'Yvelines'],
    },
  ];

  return (
    <>
      <SEO title={title} description={description} path={path} ogImage={photo.src} jsonLd={jsonLd} />
      <SiteLayout page="service" activePath={path} quoteHref={quoteHref}>
        <DetailHero
          id="service"
          breadcrumb={label}
          breadcrumbParent={hub}
          eyebrow="Artisane peintre · Vétheuil"
          title={heading[0]}
          emphasis={heading[1]}
          description={description}
          photo={photo}
          quoteHref={quoteHref}
        />
        <OnPageNavigation sections={sections} />

        <section id="surfaces" className={`${detailStyles.section} ${detailStyles.light}`} aria-labelledby="surfaces-title">
          <div className={siteStyles.container}>
            <p className={siteStyles.eyebrow}>La prestation</p>
            <h2 id="surfaces-title" className={siteStyles.sectionTitle}>Travaux <em>et finitions.</em></h2>
            {scopeIntro && <p className={styles.scopeIntro}>{scopeIntro}</p>}
            <ul className={`${styles.threeColumns} ${styles.surfaceGrid}`} role="list">
              {scope.map(({ title, detail }) => (
                <li key={title} className={styles.surface}><h3>{title}</h3><p>{detail}</p></li>
              ))}
            </ul>
            {finishes && (
              <div id="finitions" className={styles.finishes}>
                <h3 className={styles.finishesTitle}>Finitions disponibles</h3>
                <ul className={`${styles.threeColumns} ${styles.finishGrid}`} role="list">
                  {finishes.options.map(({ id, title, detail }) => (
                    <li key={id} className={styles.finish}>
                      <span className={styles.swatch} data-finish={id} aria-hidden="true" />
                      <div className={styles.finishCopy}><h4>{title}</h4><p>{detail}</p></div>
                    </li>
                  ))}
                </ul>
                <p className={styles.finishNote}>Aperçus illustratifs des niveaux de brillance.</p>
                <div className={styles.techniques}>
                  {finishes.techniques.map(({ title, detail }) => (
                    <div key={title}><h4>{title}</h4><p>{detail}</p></div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <section id="tarif" className={`${detailStyles.section} ${styles.budget}`} aria-labelledby="budget-title">
          <div className={`${siteStyles.container} ${styles.budgetInner}`}>
            <div>
              <p className={siteStyles.eyebrow}>Tarifs</p>
              <h2 id="budget-title" className={siteStyles.sectionTitle}>Quel budget <em>prévoir&nbsp;?</em></h2>
              <p className={styles.priceFactors}>{priceFactors}</p>
            </div>
            <div className={styles.priceFrame}>
              <table className={styles.priceTable} aria-label={`Tarif de la prestation ${label}`} aria-describedby={price ? 'price-note' : undefined}>
                <thead><tr><th scope="col">Prestation</th><th scope="col">Tarif indicatif</th><th scope="col">Unité</th></tr></thead>
                <tbody>
                  <tr>
                    <th scope="row">{label}</th>
                    <td className={price ? styles.price : styles.pricePending}>{price?.amount ?? 'Tarif à confirmer'}</td>
                    <td>{price?.unit ?? 'À préciser'}</td>
                  </tr>
                </tbody>
              </table>
              {price && <p id="price-note" className={styles.priceNote}>{price.note}</p>}
            </div>
          </div>
        </section>

        <section id="etapes" className={`${detailStyles.section} ${detailStyles.light}`} aria-labelledby="steps-title">
          <div className={siteStyles.container}>
            <h2 id="steps-title" className={siteStyles.sectionTitle}>Votre chantier <em>en 5 étapes.</em></h2>
            <ol className={styles.steps} role="list">
              {steps.map(({ title, detail }, index) => (
                <li key={title} className={styles.step}>
                  <span className={styles.stepNumber} aria-hidden="true">{index + 1}</span>
                  <div><h3>{title}</h3><p>{detail}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="realisations" className={`${detailStyles.section} ${styles.projects}`} aria-labelledby="projects-title">
          <div className={siteStyles.container}>
            <h2 id="projects-title" className={siteStyles.sectionTitle}>Réalisations</h2>
            {projects.length > 0 ? (
              <div className={styles.photos}>
                {projects.map(({ src, alt, caption }) => (
                  <figure key={src}>
                    <div className={styles.projectPhoto}>
                      <Image src={src} alt={alt} fill sizes="(max-width: 920px) 90vw, (max-width: 1440px) 52vw, 760px" />
                    </div>
                    <figcaption>{caption}</figcaption>
                  </figure>
                ))}
              </div>
            ) : (
              <p className={styles.projectNote}>Photos de chantiers à compléter pour cette prestation.</p>
            )}
            <a href={PORTFOLIO_PATH} className={`${siteStyles.textLink} ${styles.projectsLink}`}>Voir toutes les réalisations</a>
          </div>
        </section>

        <Questions id="faq" items={faq} />
      </SiteLayout>
    </>
  );
}
