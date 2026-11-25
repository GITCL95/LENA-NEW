import Image from 'next/image';
import { QuoteButton } from '@components/layout/SiteLayout';
import { CONTACT_PATH } from '@data/client';
import styles from '@/styles/Detail.module.css';
import siteStyles from '@/styles/Site.module.css';

export function DetailHero({ id, eyebrow, title, emphasis, description, photo, className = '' }: {
  id: string;
  eyebrow: string;
  title: string;
  emphasis: string;
  description: string;
  photo: { src: string; alt: string; caption: string };
  className?: string;
}) {
  return (
    <section id={id} className={`${siteStyles.container} ${styles.hero} ${className}`} aria-labelledby={`${id}-title`}>
      <div>
        <p className={siteStyles.eyebrow}>{eyebrow}</p>
        <h1 id={`${id}-title`} className={`${siteStyles.heroTitle} ${styles.heroTitle}`}>
          {title}<br /><em>{emphasis}</em>
        </h1>
        <p className={`${siteStyles.heroDescription} ${styles.heroDescription}`}>{description}</p>
        <QuoteButton href={CONTACT_PATH} />
        <p className={siteStyles.heroNote}>Devis gratuit sous 24 h après visite.</p>
      </div>
      <figure className={styles.heroPhoto}>
        <Image src={photo.src} alt={photo.alt} fill priority sizes="(max-width: 920px) 90vw, 44vw" />
        <figcaption>{photo.caption}</figcaption>
      </figure>
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

export function DetailFaq({ items, className = '' }: {
  items: readonly { q: string; a: string }[];
  className?: string;
}) {
  return (
    <section className={`${styles.section} ${styles.blush} ${className}`} aria-labelledby="detail-faq-title">
      <div className={`${siteStyles.container} ${styles.faq}`}>
        <h2 id="detail-faq-title" className={`${siteStyles.sectionTitle} ${styles.faqTitle}`}>Questions<br /><em>fréquentes.</em></h2>
        <div className={styles.questions}>
          {items.map(({ q, a }) => (
            <details key={q} open>
              <summary>{q}<span className={styles.questionIcon} aria-hidden="true" /></summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
