import Image from 'next/image';
import SEO from '@components/layout/SEO';
import SiteLayout, { ArrowLink } from '@components/layout/SiteLayout';
import { DetailFaq, DetailHero, OnPageNavigation } from '@components/sections/DetailPage';
import { CLIENT, PAINTING_PATH, QUOTE_PATH, SITE_URL } from '@data/client';
import { buildBreadcrumbSchema, buildFAQSchema, buildWebPageSchema } from '@data/schemas';
import styles from '@/styles/Painting.module.css';
import siteStyles from '@/styles/Site.module.css';
import detailStyles from '@/styles/Detail.module.css';

const sections = [
  { id: 'surfaces', label: 'Surfaces peintes' },
  { id: 'finitions', label: 'Finitions et techniques' },
  { id: 'etapes', label: 'Étapes du chantier' },
  { id: 'tarif', label: 'Tarif' },
  { id: 'realisations', label: 'Réalisations' },
];

const surfaces = [
  { title: 'Murs', detail: 'Je prépare les supports avant de peindre. Lors de la visite, je relève l’état des murs et les surfaces à traiter.' },
  { title: 'Plafonds', detail: 'Les plafonds sont préparés puis mis en peinture. Je protège le mobilier et les sols avant le début des travaux.' },
  { title: 'Boiseries', detail: 'Les boiseries intérieures, comme les plinthes et les encadrements, sont préparées et peintes avec une finition adaptée au support.' },
];

const finishes = [
  { id: 'matte', title: 'Mate', detail: 'Peu de reflets.' },
  { id: 'satin', title: 'Satinée', detail: 'Des reflets doux.' },
  { id: 'gloss', title: 'Brillante', detail: 'Des reflets plus marqués.' },
];

const steps = [
  { title: 'Visite et mesures', detail: 'Je me déplace gratuitement pour examiner les surfaces, prendre les mesures et comprendre vos attentes.' },
  { title: 'Devis détaillé', detail: 'Vous recevez sous 24 h le détail des quantités, des matériaux, de la main-d’œuvre et du délai.' },
  { title: 'Protection et préparation', detail: 'Je protège sols et meubles. Selon l’état des supports, je les nettoie, les rebouche, les lisse et les ponce.' },
  { title: 'Mise en peinture', detail: 'J’applique le nombre de couches prévu au devis et la finition choisie.' },
  { title: 'Contrôle et livraison', detail: 'Nous vérifions le résultat ensemble. Le chantier est livré propre et les déchets sont évacués.' },
];

const priceFactors = [
  { title: 'État des supports', detail: 'La préparation dépend des défauts à corriger avant la peinture.' },
  { title: 'Nombre de couches', detail: 'Le nombre de couches retenu est pris en compte dans le devis.' },
  { title: 'Finition choisie', detail: 'Le tarif varie selon la finition mate, satinée ou brillante.' },
];

const photos = [
  {
    src: '/assets/img/realisations/renovation-master-bedroom/renovation-master-bedroom-5.webp',
    alt: 'Chambre aux murs terracotta avec deux fenêtres et un parquet clair',
    caption: 'Peinture murale dans les tons terracotta',
    sizes: '(max-width: 920px) 90vw, 52vw',
  },
  {
    src: '/assets/img/realisations/renovation-master-bedroom/renovation-master-bedroom-6.webp',
    alt: 'Deux portes foncées dans un angle aux murs terracotta',
    caption: 'Détail de boiseries peintes',
    sizes: '(max-width: 920px) 90vw, 32vw',
  },
];

const faq = [
  {
    q: 'Comment connaître la durée de mes travaux ?',
    a: 'Le devis précise le délai d’exécution après la visite et la prise de mesures.',
  },
  {
    q: 'Le chantier est-il couvert par une assurance ?',
    a: 'Oui. Léna Rénove est couverte par une responsabilité civile professionnelle. Léna Renaud est titulaire du CAP Peintre en bâtiment.',
  },
];

const title = 'Peinture intérieure à Vétheuil (95) · Léna Rénove';
const description = 'Peinture des murs, plafonds et boiseries par Léna Renaud à Vétheuil, dans le Val-d’Oise et les Yvelines. Devis gratuit sous 24 h après visite.';
const jsonLd = [
  buildWebPageSchema({ path: PAINTING_PATH, title, description }),
  buildBreadcrumbSchema([
    { name: 'Accueil', url: `${SITE_URL}/` },
    { name: 'Peinture intérieure', url: `${SITE_URL}${PAINTING_PATH}` },
  ]),
  buildFAQSchema(faq),
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Peinture intérieure',
    url: `${SITE_URL}${PAINTING_PATH}`,
    provider: { '@id': `${SITE_URL}/#business` },
    areaServed: ['Val-d’Oise', 'Yvelines'],
  },
];

export default function Painting() {
  return (
    <>
      <SEO title={title} description={description} path={PAINTING_PATH} jsonLd={jsonLd} />
      <SiteLayout page="painting">
        <DetailHero
          id="peinture"
          eyebrow="Artisane peintre · Vétheuil"
          title="Peinture"
          emphasis="intérieure."
          description="Murs, plafonds et boiseries dans le neuf comme en rénovation. De la préparation des supports à la finition, votre chantier est réalisé par Léna Renaud."
          photo={{
            src: '/assets/img/projet-renov-3.jpg',
            alt: 'Salon aux murs bleu-gris, soubassements blancs et parquet clair',
            caption: 'Peinture d’un salon à Pontoise',
          }}
        />
        <OnPageNavigation sections={sections} />

        <section id="surfaces" className={`${detailStyles.section} ${detailStyles.light}`} aria-labelledby="surfaces-title">
          <div className={siteStyles.container}>
            <div className={styles.splitHeading}>
              <div>
                <p className={siteStyles.eyebrow}>Surfaces peintes</p>
                <h2 id="surfaces-title" className={siteStyles.sectionTitle}>Murs, plafonds <em>et boiseries.</em></h2>
              </div>
              <p>Pour les appartements, les maisons et les locaux professionnels, en neuf ou en rénovation.</p>
            </div>
            <ul className={`${styles.threeColumns} ${styles.surfaceGrid}`} role="list">
              {surfaces.map(({ title, detail }) => (
                <li key={title} className={styles.surface}>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="finitions" className={`${detailStyles.section} ${detailStyles.blush}`} aria-labelledby="finish-title">
          <div className={siteStyles.container}>
            <p className={siteStyles.eyebrow}>Finitions et techniques</p>
            <h2 id="finish-title" className={`${siteStyles.sectionTitle} ${detailStyles.inlineTitle}`}>Du mat <em>au brillant.</em></h2>
            <ul className={styles.threeColumns} role="list">
              {finishes.map(({ id, title, detail }) => (
                <li key={id} className={styles.finish}>
                  <span className={styles.swatch} data-finish={id} aria-hidden="true" />
                  <div className={styles.finishCopy}>
                    <h3>{title}</h3>
                    <p>{detail}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className={styles.finishNote}>Aperçus illustratifs des niveaux de brillance.</p>
            <div className={styles.techniques}>
              <div>
                <h3>Peintures utilisées</h3>
                <p>Peintures professionnelles <strong>{CLIENT.brands.join(' et ')}</strong>. Selon le support, la prestation prévoit une peinture acrylique, glycéro ou naturelle.</p>
              </div>
              <div>
                <h3>Modes d’application</h3>
                <p>Application <strong>manuelle ou au pistolet airless</strong>, selon la surface à peindre et l’état du support.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="etapes" className={`${detailStyles.section} ${detailStyles.light}`} aria-labelledby="steps-title">
          <div className={siteStyles.container}>
            <p className={siteStyles.eyebrow}>Étapes du chantier</p>
            <h2 id="steps-title" className={siteStyles.sectionTitle}>De la visite <em>au contrôle final.</em></h2>
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

        <section id="tarif" className={`${detailStyles.section} ${styles.budget}`} aria-labelledby="budget-title">
          <div className={`${siteStyles.container} ${styles.budgetInner}`}>
            <div>
              <p className={siteStyles.eyebrow}>Tarif de peinture intérieure</p>
              <h2 id="budget-title" className={`${siteStyles.sectionTitle} ${detailStyles.inlineTitle}`}>Quel budget <em>prévoir ?</em></h2>
              <p className={styles.price}>25 à 45 <span>€/m²</span></p>
              <p className={styles.priceNote}>Fourchette indicative, fournitures comprises.</p>
              <ArrowLink href={QUOTE_PATH} className={`${siteStyles.button} ${siteStyles.contactButton}`}>
                Demander un devis
              </ArrowLink>
            </div>
            <div className={styles.priceFactors}>
              <h3>Ce qui fait varier le prix</h3>
              <dl>
                {priceFactors.map(({ title, detail }) => (
                  <div key={title}><dt>{title}</dt><dd>{detail}</dd></div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="realisations" className={`${detailStyles.section} ${detailStyles.light}`} aria-labelledby="painting-projects-title">
          <div className={siteStyles.container}>
            <p className={siteStyles.eyebrow}>Réalisations de peinture</p>
            <h2 id="painting-projects-title" className={`${siteStyles.sectionTitle} ${detailStyles.inlineTitle}`}>Couleurs <em>et boiseries.</em></h2>
            <div className={styles.photos}>
              {photos.map(({ src, alt, caption, sizes }) => (
                <figure key={src}>
                  <div className={styles.projectPhoto}><Image src={src} alt={alt} fill sizes={sizes} /></div>
                  <figcaption>{caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <DetailFaq items={faq} />
      </SiteLayout>
    </>
  );
}
