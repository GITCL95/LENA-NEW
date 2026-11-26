import Head from 'next/head';
import SiteLayout from '@components/layout/SiteLayout';
import PageHero from '@components/sections/PageHero';
import { CLIENT, LEGAL_PATH, SITE_URL } from '@data/client';
import styles from '@/styles/Legal.module.css';
import siteStyles from '@/styles/Site.module.css';

export default function MentionsLegales() {
  const title = 'Mentions légales · Léna Rénove';
  const description = 'Mentions légales du site lena-renove.com. Éditeur, hébergeur, données personnelles, propriété intellectuelle.';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={`${SITE_URL}${LEGAL_PATH}`} />
      </Head>
      <SiteLayout page="legal">
        <PageHero
          id="legal-title"
          eyebrow="Informations légales"
          title={<>Mentions <em>légales.</em></>}
          description="Éditeur, hébergeur, traitement des données personnelles et propriété intellectuelle."
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
              </article>

              <article>
                <h2>Données personnelles</h2>
                <p>
                  Les données collectées via le formulaire de contact (nom, email, téléphone, ville,
                  message) sont utilisées uniquement pour répondre aux demandes de devis. Elles ne sont
                  transmises à aucun tiers et sont conservées 3 ans maximum.
                </p>
                <p>
                  Conformément au RGPD et à la loi « Informatique et libertés », vous disposez d&apos;un
                  droit d&apos;accès, de rectification et de suppression de vos données. Pour l&apos;exercer,
                  écrivez à <a href={`mailto:${CLIENT.email}`}>{CLIENT.email}</a>.
                </p>
              </article>

              <article>
                <h2>Cookies</h2>
                <p>
                  Ce site utilise uniquement des cookies techniques strictement nécessaires à son
                  fonctionnement. Aucun cookie de suivi ou publicitaire n&apos;est déposé sans votre accord.
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
