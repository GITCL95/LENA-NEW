import Image from 'next/image';
import type { ReactNode } from 'react';
import SEO from '@components/layout/SEO';
import SiteLayout from '@components/layout/SiteLayout';
import { DetailHero, OnPageNavigation } from '@components/sections/DetailPage';
import Questions from '@components/sections/Questions';
import ServiceLink from '@components/sections/ServiceLink';
import { PORTFOLIO_PATH, SERVICES_PATH } from '@data/client';
import { buildService } from '@data/schemas';
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
  { id: 'etapes', label: 'Étapes' },
  { id: 'realisations', label: 'Réalisations' },
  { id: 'faq', label: 'FAQ' },
];

const visit = { title: 'Visite et mesures', detail: 'Léna se déplace gratuitement pour examiner les surfaces, prendre les mesures et comprendre vos attentes.' };
const estimate = { title: 'Devis détaillé', detail: 'Sous 24 h après la visite, vous recevez le détail des quantités, des matériaux, de la main-d’œuvre et du délai.' };
const preparation = { title: 'Préparation', detail: 'Léna protège les sols et le mobilier, puis prépare les supports selon leur état.' };
const check = { title: 'Contrôle et livraison', detail: 'Vous vérifiez le résultat avec Léna, qui livre le chantier propre après évacuation des déchets.' };

const relatedServices: Record<InteriorService['slug'], { intro: ReactNode; scope: ReactNode; budget: ReactNode }> = {
  peinture: {
    intro: <>Si vos murs présentent des irrégularités, un <ServiceLink service="enduits">ratissage</ServiceLink> peut être nécessaire avant de peindre.</>,
    scope: <>Pour mettre en valeur un seul mur, vous pouvez aussi choisir un <ServiceLink service="papier-peint">papier peint panoramique</ServiceLink>.</>,
    budget: <>Si vous rénovez aussi vos meubles de cuisine, la <ServiceLink service="vinyle">pose de vinyle adhésif</ServiceLink> peut figurer dans le même devis.</>,
  },
  enduits: {
    intro: <>Vous pouvez ensuite confier à Léna la <ServiceLink service="peinture">mise en peinture</ServiceLink>.</>,
    scope: <>Le lissage prépare aussi les murs à la <ServiceLink service="papier-peint">pose de papier peint</ServiceLink>.</>,
    budget: <>Pour une rénovation de cuisine, le même devis peut prévoir la remise en état des murs et l’<ServiceLink service="vinyle">habillage des façades en vinyle</ServiceLink>.</>,
  },
  'papier-peint': {
    intro: <>Si le mur est irrégulier, elle peut d’abord le <ServiceLink service="enduits">lisser à l’enduit</ServiceLink>.</>,
    scope: <>Dans la même pièce, un <ServiceLink service="vinyle">film adhésif décoratif</ServiceLink> peut habiller une porte ou un meuble.</>,
    budget: <>Si vous souhaitez aussi <ServiceLink service="peinture">repeindre une partie de la pièce</ServiceLink>, précisez-le dans votre demande de devis.</>,
  },
  vinyle: {
    intro: <>Elle peut aussi <ServiceLink service="peinture">repeindre les murs et le plafond</ServiceLink>.</>,
    scope: <>Pour décorer les murs de la même pièce, Léna peut également poser du <ServiceLink service="papier-peint">papier peint intissé ou panoramique</ServiceLink>.</>,
    budget: <>Si les murs de la pièce sont irréguliers, vous pouvez aussi demander un devis pour les <ServiceLink service="enduits">lisser à l’enduit</ServiceLink>.</>,
  },
};

export default function ServicePage({ service, content }: ServicePageProps) {
  const { description, metaDescription, heading, photo, scopeIntro, scope, finishes, price, priceFactors, workStep, projects, faq } = content;
  const related = relatedServices[service];
  const label = serviceTitles[service];
  const path = serviceHref(service);
  const quoteHref = serviceQuoteHref(service);
  const title = `${label} à Vétheuil · Léna Rénove`;
  const steps = [visit, estimate, preparation, workStep, check];

  return (
    <>
      <SEO title={title} description={metaDescription} path={path} image={projects[0] ?? photo}
        breadcrumb={{ label, parent: hub }} mainEntity={buildService({ path, name: label, description })} />
      <SiteLayout
        page="service"
        activePath={path}
        quoteHref={quoteHref}
        contactIntro={<>Vous prévoyez plusieurs types de travaux&nbsp;? Consultez <ServiceLink service="overview">l’ensemble des prestations</ServiceLink> avant de demander votre devis.</>}
      >
        <DetailHero
          id="service"
          breadcrumb={label}
          breadcrumbParent={hub}
          eyebrow="Artisane peintre · Vétheuil"
          title={heading[0]}
          emphasis={heading[1]}
          description={<>{description} {related.intro}</>}
          photo={photo}
          quoteHref={quoteHref}
        />
        <OnPageNavigation sections={sections} className={detailStyles.plainNav} />

        <section id="surfaces" className={detailStyles.section} aria-labelledby="surfaces-title">
          <div className={siteStyles.container}>
            <div className={styles.scopeLayout}>
              <div>
                <p className={siteStyles.eyebrow}>La prestation</p>
                <h2 id="surfaces-title" className={siteStyles.sectionTitle}>Travaux <em>inclus.</em></h2>
                {scopeIntro && <p className={styles.scopeIntro}>{scopeIntro}</p>}
                <p className={styles.scopeIntro}>{related.scope}</p>
              </div>
              <ul className={styles.surfaces} role="list">
                {scope.map(({ title, detail }) => (
                  <li key={title} className={styles.surface}><h3>{title}</h3><p>{detail}</p></li>
                ))}
              </ul>
            </div>
            {finishes && (
              <div id="finitions" className={styles.finishes}>
                <div>
                  <h3>Finitions disponibles</h3>
                  <ul className={styles.finishGrid} role="list">
                    {finishes.options.map(({ id, title, detail }) => (
                      <li key={id} className={styles.finish}>
                        <span className={styles.swatch} data-finish={id} aria-hidden="true" />
                        <h4>{title}</h4>
                        <p>{detail}</p>
                      </li>
                    ))}
                  </ul>
                  <p className={styles.finishNote}>Aperçus illustratifs des niveaux de brillance.</p>
                </div>
                <div className={styles.techniques}>
                  <h3>Peintures et application</h3>
                  <p>{finishes.techniques}</p>
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
              <p className={styles.priceFactors}>{priceFactors} {related.budget}</p>
            </div>
            <div className={styles.priceFrame}>
              <table className={styles.priceTable} aria-label={`Tarif de la prestation ${label}`} aria-describedby={price ? 'price-note' : undefined}>
                <thead><tr><th scope="col">Prestation</th><th scope="col">Tarif indicatif</th><th scope="col">Unité</th></tr></thead>
                <tbody>
                  <tr>
                    <th scope="row">{label}{price?.scope && <small className={styles.priceScope}>{price.scope}</small>}</th>
                    <td className={price ? styles.price : styles.pricePending}>{price?.amount ?? 'Tarif à confirmer'}</td>
                    <td className={styles.priceUnit}>{price?.unit ?? 'À préciser'}</td>
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
                  <h3>{title}</h3>
                  <p>{detail}</p>
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
                      <Image src={src} alt={alt} fill sizes="(max-width: 920px) 89vw, (max-width: 1440px) 43vw, 736px" />
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

        <Questions id="faq" items={faq} layout="grid" />
      </SiteLayout>
    </>
  );
}
