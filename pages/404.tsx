import Head from 'next/head';
import SiteLayout, { ArrowLink } from '@components/layout/SiteLayout';
import PageHero from '@components/sections/PageHero';
import { ZONES_PATH } from '@data/client';
import styles from '@/styles/Site.module.css';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page introuvable · Léna Rénove</title>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <SiteLayout page="notFound">
        <PageHero
          id="not-found-title"
          breadcrumb="Page introuvable"
          title={<>Page <em>introuvable.</em></>}
          description="Cette adresse ne mène à aucune page du site."
        >
          <ArrowLink href="/" className={`${styles.button} ${styles.primaryButton}`}>Retour à l’accueil</ArrowLink>
          <ArrowLink href={ZONES_PATH} className={styles.textLink}>Voir les zones d’intervention</ArrowLink>
        </PageHero>
      </SiteLayout>
    </>
  );
}
