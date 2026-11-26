import type { ReactNode } from 'react';
import styles from '@/styles/Site.module.css';

export function Breadcrumb({ current }: { current: string }) {
  return (
    <nav className={styles.breadcrumb} aria-label="Fil d’Ariane">
      <a href="/">Accueil</a>
      <span aria-hidden="true" />
      <span aria-current="page">{current}</span>
    </nav>
  );
}

export default function PageHero({ id, eyebrow, title, description, breadcrumb, children }: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  description: string;
  breadcrumb: string;
  children?: ReactNode;
}) {
  return (
    <section className={styles.textHero} aria-labelledby={id}>
      <div className={`${styles.container} ${styles.pageIntroSpacing}`}>
        <Breadcrumb current={breadcrumb} />
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h1 id={id} className={styles.heroTitle}>{title}</h1>
        <p className={styles.textHeroDescription}>{description}</p>
        {children && <div className={styles.heroActions}>{children}</div>}
      </div>
    </section>
  );
}
