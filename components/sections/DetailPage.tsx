import Image from 'next/image';
import { QuoteButton } from '@components/layout/SiteLayout';
import { Breadcrumb } from '@components/sections/PageHero';
import styles from '@/styles/Detail.module.css';
import siteStyles from '@/styles/Site.module.css';

export function DetailHero({ id, breadcrumb, breadcrumbParent, eyebrow, title, emphasis, description, photo, quoteHref, className = '' }: {
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
    <section id={id} className={`${siteStyles.container} ${siteStyles.pageIntroSpacing} ${className}`} aria-labelledby={`${id}-title`}>
      <Breadcrumb current={breadcrumb} parent={breadcrumbParent} />
      <div className={styles.hero}>
        <div>
          <p className={siteStyles.eyebrow}>{eyebrow}</p>
          <h1 id={`${id}-title`} className={`${siteStyles.heroTitle} ${styles.heroTitle}`}>
            {title}<br /><em>{emphasis}</em>
          </h1>
          <p className={`${siteStyles.heroDescription} ${styles.heroDescription}`}>{description}</p>
          <QuoteButton href={quoteHref} />
          <p className={siteStyles.heroNote}>Devis gratuit sous 24&nbsp;h après visite.</p>
        </div>
        <figure className={styles.heroPhoto}>
          <Image src={photo.src} alt={photo.alt} fill priority sizes="(max-width: 920px) 90vw, 44vw" />
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
