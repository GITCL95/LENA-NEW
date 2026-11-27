import type { ReactNode } from 'react';
import styles from '@/styles/Questions.module.css';
import siteStyles from '@/styles/Site.module.css';

export default function Questions({ items, id, title }: {
  items: readonly { q: string; a: string }[];
  id?: string;
  title?: ReactNode;
}) {
  const headingId = `${id ?? 'faq'}-title`;

  return (
    <section id={id} className={styles.section} aria-labelledby={headingId} tabIndex={id ? -1 : undefined}>
      <div className={`${siteStyles.container} ${styles.faqInner}`}>
        <div>
          {!title && <p className={siteStyles.eyebrow}>Questions fréquentes</p>}
          <h2 id={headingId} className={siteStyles.sectionTitle}>{title ?? <>Avant <em>les travaux.</em></>}</h2>
        </div>
        <div className={styles.questions}>
          {items.map(({ q, a }, index) => (
            <details key={q} name={id} open={index === 0}>
              <summary>{q}<span className={styles.questionIcon} aria-hidden="true" /></summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
