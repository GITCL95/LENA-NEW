import Image from 'next/image';
import { ArrowLink } from '@components/layout/SiteLayout';
import { Breadcrumb } from '@components/sections/PageHero';
import { QUOTE_PATH } from '@data/client';
import styles from '@/styles/Detail.module.css';
import siteStyles from '@/styles/Site.module.css';

export function DetailHero({ id, breadcrumb, breadcrumbParent, eyebrow, title, emphasis, description, photo, quoteHref = QUOTE_PATH, className = '' }: {
  id: string;
  breadcrumb: string;
  breadcrumbParent?: { label: string; href: string };
  eyebrow: string;
  title: string;
  emphasis: string;
  description: string;
  photo: { src: string; alt: string; caption: string };
  quoteHref?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`${siteStyles.container} ${styles.heroSection} ${className}`} aria-labelledby={`${id}-title`}>
      <Breadcrumb current={breadcrumb} parent={breadcrumbParent} />
      <div className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={siteStyles.eyebrow}>{eyebrow}</p>
          <h1 id={`${id}-title`} className={`${siteStyles.heroTitle} ${styles.heroTitle}`}>
            {title}<br /><em>{emphasis}</em>
          </h1>
          <p className={`${siteStyles.heroDescription} ${styles.heroDescription}`}>{description}</p>
          <ArrowLink href={quoteHref} className={`${siteStyles.button} ${siteStyles.contactButton}`}>
            Demander un devis
          </ArrowLink>
          <p className={`${siteStyles.heroNote} ${styles.heroNote}`}>Devis gratuit sous 24&nbsp;h après visite.</p>
        </div>
        <figure className={styles.heroPhoto}>
          <Image src={photo.src} alt={photo.alt} fill priority sizes="(max-width: 920px) 89vw, (max-width: 1440px) 50vw, 700px" />
          <figcaption>{photo.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}

export function OnPageNavigation({ sections, className = '' }: {
  sections: readonly { id: string; label: string }[];
  className?: string;
}) {
  return (
    <nav className={`${styles.pageNav} ${className}`} aria-labelledby="page-nav-label">
      <div className={`${siteStyles.container} ${styles.pageNavInner}`}>
        <p id="page-nav-label">Sur cette page</p>
        <ul className={styles.pageNavLinks}>
          {sections.map(({ id, label }) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}
        </ul>
      </div>
    </nav>
  );
}
