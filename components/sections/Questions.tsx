import styles from '@/styles/Questions.module.css';
import siteStyles from '@/styles/Site.module.css';

export default function Questions({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <section className={styles.section} aria-labelledby="faq-title">
      <div className={`${siteStyles.container} ${styles.faqInner}`}>
        <div>
          <p className={siteStyles.eyebrow}>Questions fréquentes</p>
          <h2 id="faq-title" className={siteStyles.sectionTitle}>Avant <em>les travaux.</em></h2>
        </div>
        <div className={styles.questions}>
          {items.map(({ q, a }, index) => (
            <details key={q} open={index === 0}>
              <summary>{q}<span className={styles.questionIcon} aria-hidden="true" /></summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
