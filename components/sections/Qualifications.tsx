import { CLIENT } from '@data/client';
import styles from '@/styles/Qualifications.module.css';
import siteStyles from '@/styles/Site.module.css';

const credentials = [
  { title: `${CLIENT.credentials.experience} ans`, detail: 'd’expérience' },
  { title: 'CAP', detail: 'Peintre en bâtiment' },
  { title: 'RC Pro', detail: 'Assurance professionnelle' },
  { title: CLIENT.brands.join(' & '), detail: 'Peintures professionnelles' },
];

export default function Qualifications({ light = false }: { light?: boolean }) {
  return (
    <section className={light ? `${styles.credentials} ${styles.light}` : styles.credentials} aria-label="Expérience et qualifications">
      <ul className={`${siteStyles.container} ${styles.credentialGrid}`}>
        {credentials.map(({ title, detail }) => (
          <li key={title}>
            <span className={styles.credentialTitle}>{title}</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
