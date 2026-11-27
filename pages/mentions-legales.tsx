import SEO from '@components/layout/SEO';
import SiteLayout from '@components/layout/SiteLayout';
import PageHero from '@components/sections/PageHero';
import ServiceLink from '@components/sections/ServiceLink';
import { CLIENT, LEGAL_PATH } from '@data/client';
import styles from '@/styles/Legal.module.css';
import siteStyles from '@/styles/Site.module.css';

export default function MentionsLegales() {
  const title = 'Mentions légales · Léna Rénove';
  const description = 'Mentions légales du site lena-renove.com. Éditeur, hébergeur, données personnelles, cookies et propriété intellectuelle.';

  return (
    <>
      <SEO title={title} description={description} path={LEGAL_PATH} noIndex />
      <SiteLayout
        page="legal"
        contactIntro={<>Si vous prévoyez de <ServiceLink service="papier-peint">faire poser du papier peint</ServiceLink>, indiquez les dimensions du mur dans votre demande.</>}
      >
        <PageHero
          id="legal-title"
          eyebrow="Informations légales"
          title={<>Mentions <em>légales.</em></>}
          description="Éditeur, hébergeur, traitement des données personnelles, cookies et propriété intellectuelle."
          breadcrumb="Mentions légales"
        />

        <div className={styles.details}>
          <div className={siteStyles.container}>
            <div className={styles.prose}>
              <article>
                <h2>Éditeur du site</h2>
                <p>
                  <strong>{CLIENT.brand}</strong> — Entreprise individuelle<br />
                  Représentée par {CLIENT.owner}<br />
                  Siège : {CLIENT.address.street}, {CLIENT.address.postalCode} {CLIENT.address.locality}<br />
                  SIRET : {CLIENT.siret}<br />
                  {CLIENT.rcs}<br />
                  Email : <a href={`mailto:${CLIENT.email}`}>{CLIENT.email}</a>
                </p>
                <p>Ce site présente les <ServiceLink service="overview">prestations de rénovation intérieure</ServiceLink> de Léna Rénove.</p>
              </article>

              <article>
                <h2>Directrice de la publication</h2>
                <p>{CLIENT.owner}</p>
              </article>

              <article>
                <h2>Hébergement</h2>
                <p>
                  Site hébergé par <strong>Vercel Inc.</strong><br />
                  440 N Barranca Ave #4133, Covina, CA 91723, United States<br />
                  <a href="https://vercel.com">vercel.com</a>
                </p>
              </article>

              <article>
                <h2>Propriété intellectuelle</h2>
                <p>
                  L&apos;ensemble des contenus présents sur ce site (textes, images, logos, photographies,
                  graphismes, code) sont la propriété exclusive de {CLIENT.brand} ou de ses ayants droit.
                  Toute reproduction, même partielle, sans autorisation écrite préalable, est interdite.
                </p>
                <p>Cette protection s’applique notamment aux photos de chantiers de <ServiceLink service="peinture">peinture intérieure</ServiceLink> publiées sur le site.</p>
              </article>

              <article id="donnees-personnelles">
                <h2>Données personnelles</h2>
                <p>
                  Léna Rénove traite les informations du formulaire de contact (prénom, nom, adresse e-mail,
                  téléphone, ville du chantier, message et prestations éventuellement sélectionnées, comme les <ServiceLink service="enduits">enduits de ratissage</ServiceLink>) pour
                  répondre à votre demande et préparer un devis. Ce traitement correspond aux mesures
                  précontractuelles prises à votre demande. Léna Rénove conserve les demandes au maximum trois ans.
                </p>
                <p>
                  <strong>Prestataire du formulaire de contact.</strong> Formspree, Inc. reçoit les données saisies
                  dans le formulaire et transmet votre demande par e-mail à Léna Rénove. Selon sa politique
                  de confidentialité, Formspree peut traiter ces données aux États-Unis et dans les autres pays où
                  l’entreprise exerce ses activités. Consultez la{' '}
                  <a href="https://formspree.io/legal/privacy-policy/">politique de confidentialité de Formspree</a>{' '}
                  pour en savoir plus sur le traitement et les transferts de données.
                </p>
                <p>
                  Conformément au RGPD et à la loi « Informatique et libertés », vous disposez d&apos;un
                  droit d&apos;accès, de rectification et d&apos;effacement de vos données, ainsi que, selon
                  votre situation, d&apos;un droit à la limitation et à la portabilité. Pour exercer vos droits,
                  écrivez à <a href={`mailto:${CLIENT.email}`}>{CLIENT.email}</a>. Vous pouvez aussi{' '}
                  <a href="https://www.cnil.fr/fr/plaintes">adresser une réclamation à la CNIL</a>.
                </p>
              </article>

              <article>
                <h2>Cookies et Google Maps</h2>
                <p>
                  La page Contact intègre une carte Google Maps. Lorsque la carte se charge, votre navigateur
                  se connecte aux serveurs de Google et lui transmet des informations techniques, dont votre
                  adresse IP. Google peut lire ou déposer des cookies selon les paramètres de votre navigateur.
                  Pour connaître les usages de ces données et les réglages disponibles, consultez les{' '}
                  <a href="https://policies.google.com/privacy?hl=fr">règles de confidentialité de Google</a>.
                </p>
              </article>

              <article>
                <h2>Crédits</h2>
                <p>
                  Conception & développement : {CLIENT.brand}<br />
                  Photographies : {CLIENT.owner} / Instagram {CLIENT.instagramHandle}<br />
                  Polices : Corben, Quicksand (Google Fonts)
                </p>
              </article>
            </div>
          </div>
        </div>
      </SiteLayout>
    </>
  );
}
