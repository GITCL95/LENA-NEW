import type { ReactNode } from 'react';
import Image from 'next/image';
import { QuoteButton } from '@components/layout/SiteLayout';
import { Breadcrumb } from '@components/sections/PageHero';
import styles from '@/styles/AreaPage.module.css';
import siteStyles from '@/styles/Site.module.css';

type AreaHeroProps = {
  id?: string;
  breadcrumb: string;
  breadcrumbParent?: { label: string; href: string };
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  photo: {
    src: string;
    alt: string;
    caption?: { title: string; detail: string };
  };
  regional?: boolean;
  directoryLink?: { label: string; href: string };
};

export default function AreaHero({ id, breadcrumb, breadcrumbParent, eyebrow, title, description, photo, regional, directoryLink }: AreaHeroProps) {
  const { src, alt, caption } = photo;

  return (
    <section
      id={id}
      className={`${siteStyles.container} ${siteStyles.pageIntroSpacing}${regional ? ` ${styles.regionalHero}` : ''}`}
      aria-labelledby="area-title"
    >
      <Breadcrumb current={breadcrumb} parent={breadcrumbParent} />
      <div className={styles.heroGrid}>
        <div>
          <p className={siteStyles.eyebrow}>{eyebrow}</p>
          <h1 id="area-title" className={styles.heroTitle}>{title}</h1>
          <p className={`${siteStyles.heroDescription} ${styles.heroDescription}`}>{description}</p>
          <div className={styles.heroActions}>
            <QuoteButton />
            {directoryLink && <a href={directoryLink.href} className={siteStyles.textLink}>{directoryLink.label}</a>}
          </div>
          <p className={siteStyles.heroNote}>Devis gratuit sous 24&nbsp;h après visite.</p>
        </div>
        <figure className={caption ? styles.heroPhoto : `${styles.heroPhoto} ${styles.illustration}`}>
          <Image src={src} alt={alt} fill priority sizes="(max-width: 920px) 89vw, (max-width: 1440px) 46vw, 640px" />
          <figcaption>
            {caption ? <><span>{caption.title}</span><small>{caption.detail}</small></> : 'Photo d’illustration'}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
