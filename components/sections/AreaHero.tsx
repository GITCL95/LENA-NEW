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
    srcSet?: string;
    alt: string;
    caption?: { title: string; detail: string };
  };
  regional?: boolean;
  directoryLink?: { label: string; href: string };
};

const photoSizes = '(max-width: 920px) 89vw, (max-width: 1440px) 46vw, 640px';

export default function AreaHero({ id, breadcrumb, breadcrumbParent, eyebrow, title, description, photo, regional, directoryLink }: AreaHeroProps) {
  const { src, srcSet, alt, caption } = photo;

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
          {srcSet ? (
            <img
              src={src}
              srcSet={srcSet}
              sizes={photoSizes}
              alt={alt}
              fetchPriority="high"
              decoding="async"
              className={styles.responsiveHeroPhoto}
            />
          ) : (
            <Image src={src} alt={alt} fill priority sizes={photoSizes} />
          )}
          <figcaption>
            {caption ? <><span>{caption.title}</span><small>{caption.detail}</small></> : 'Photo d’illustration'}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
