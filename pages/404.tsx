import Head from 'next/head';
import SiteLayout, { ArrowLink } from '@components/layout/SiteLayout';
import PageHero from '@components/sections/PageHero';
import ServiceLink from '@components/sections/ServiceLink';
import { ZONES_PATH } from '@data/client';
import detailStyles from '@/styles/Detail.module.css';
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
          description={<>Cette adresse ne mène à aucune page du site. Vous pouvez retrouver <ServiceLink service="overview">tous les services de Léna Rénove</ServiceLink>.</>}
        >
          <ArrowLink href="/" className={`${styles.button} ${styles.primaryButton}`}>Retour à l’accueil</ArrowLink>
          <ArrowLink href={ZONES_PATH} className={styles.textLink}>Voir les zones d’intervention</ArrowLink>
        </PageHero>
        <div className={`${styles.container} ${detailStyles.section} grid gap-8 sm:grid-cols-2`}>
          <section aria-labelledby="repair-walls-title">
            <h2 id="repair-walls-title" className="text-3xl">Refaire vos murs</h2>
            <p className={`${styles.textHeroDescription} mt-3`}>
              Découvrez la <ServiceLink service="peinture">peinture intérieure</ServiceLink> et les <ServiceLink service="enduits">enduits de ratissage</ServiceLink>.
            </p>
          </section>
          <section aria-labelledby="refresh-decor-title">
            <h2 id="refresh-decor-title" className="text-3xl">Changer de décor</h2>
            <p className={`${styles.textHeroDescription} mt-3`}>
              Pensez à la <ServiceLink service="papier-peint">pose de papier peint</ServiceLink> ou à l’<ServiceLink service="vinyle">habillage de meubles en vinyle</ServiceLink>.
            </p>
          </section>
        </div>
      </SiteLayout>
    </>
  );
}
