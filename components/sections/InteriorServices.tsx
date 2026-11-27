import Image from 'next/image';
import type { ReactNode } from 'react';
import { INTERIOR_SERVICES, serviceHref } from '@data/services';
import styles from '@/styles/AreaPage.module.css';
import siteStyles from '@/styles/Site.module.css';

export default function InteriorServices({ compactImages = false, intro = 'De la préparation des supports à la finition.' }: {
  compactImages?: boolean;
  intro?: ReactNode;
}) {
  return (
    <section id="prestations" className={styles.services} aria-labelledby="services-title" tabIndex={-1}>
      <div className={siteStyles.container}>
        <div className={styles.servicesIntro}>
          <div>
            <p className={siteStyles.eyebrow}>Services</p>
            <h2 id="services-title" className={siteStyles.sectionTitle}>Vos travaux <em>d’intérieur.</em></h2>
          </div>
          <p>{intro}</p>
        </div>
        <ul className={styles.servicesList}>
          {INTERIOR_SERVICES.map(({ title, slug, detail, image, thumbnail }) => (
            <li key={slug}>
              <a href={serviceHref(slug)} className={styles.serviceCard}>
                <div className={styles.servicePhoto}>
                  <Image src={`/assets/img/${compactImages ? thumbnail : image}`} alt="" fill sizes="(max-width: 920px) 29vw, (max-width: 1440px) 16vw, 212px" />
                </div>
                <div className={styles.serviceCopy}>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <p className={styles.photoNote}>Photos d’illustration des prestations.</p>
      </div>
    </section>
  );
}
