import { useRef, useState, type ReactNode } from 'react';
import Image from 'next/image';
import { ABOUT_PATH, CLIENT, CONTACT_PATH, LEGAL_PATH, PORTFOLIO_PATH, QUOTE_PATH, ZONES_PATH } from '@data/client';
import styles from '@/styles/Site.module.css';

type SitePage = 'home' | 'about' | 'contact' | 'portfolio' | 'painting' | 'pontoise' | 'zones' | 'city' | 'legal';

const contactIntros: Partial<Record<SitePage, string>> = {
  portfolio: 'Décrivez votre projet de rénovation intérieure.',
  painting: 'Décrivez votre projet de peinture intérieure.',
  pontoise: 'Indiquez votre quartier et les travaux envisagés.',
};

export function Arrow() {
  return <span className={styles.arrow} aria-hidden="true" />;
}

export function ArrowLink({ href, className, children }: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  return (
    <a href={href} className={className}>
      {children}
      <Arrow />
    </a>
  );
}

export function QuoteButton() {
  return (
    <ArrowLink href={QUOTE_PATH} className={`${styles.button} ${styles.primaryButton}`}>
      Demander un devis
    </ArrowLink>
  );
}

function SiteHeader({ page }: { page: SitePage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const zoneLocation = page === 'pontoise' || page === 'city';
  const contactLocation = page === 'contact';
  const navigation: { label: string; href: string; current?: 'page' | 'location' }[] = [
    { label: 'Prestations', href: page === 'home' ? '#prestations' : '/#prestations', current: page === 'painting' ? 'location' : undefined },
    { label: 'Réalisations', href: PORTFOLIO_PATH, current: page === 'portfolio' ? 'page' : undefined },
    { label: 'À propos', href: ABOUT_PATH, current: page === 'about' ? 'page' : undefined },
    { label: 'Zones', href: ZONES_PATH, current: page === 'zones' ? 'page' : zoneLocation ? 'location' : undefined },
    { label: 'Contact', href: contactLocation ? '#contact' : CONTACT_PATH, current: contactLocation ? 'page' : undefined },
  ];

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      className={styles.header}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && menuOpen) {
          closeMenu();
          menuButton.current?.focus();
        }
      }}
    >
      <div className={`${styles.container} ${styles.headerInner}`}>
        <a href="/" className={styles.logo} aria-label="Léna Rénove, accueil">
          <Image src="/assets/img/logo-lt.png" alt="" width={500} height={442} loading="eager" />
        </a>
        <nav className={styles.desktopNav} aria-label="Navigation principale">
          {navigation.map(({ label, href, current }) => (
            <a href={href} key={href} aria-current={current}>{label}</a>
          ))}
        </nav>
        <ArrowLink href={contactLocation ? '#contact' : QUOTE_PATH} className={`${styles.button} ${styles.headerButton}`}>
          Demander un devis
        </ArrowLink>
        <button
          ref={menuButton}
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          Menu <span className={styles.menuIcon} aria-hidden="true" />
        </button>
      </div>
      <nav id="site-navigation" className={styles.mobileNav} aria-label="Navigation principale" hidden={!menuOpen}>
        <div className={styles.container}>
          {navigation.map(({ label, href, current }) => (
            <a href={href} key={href} aria-current={current} onClick={closeMenu}>{label}</a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function SiteContact({ page }: { page: SitePage }) {
  const descriptionClass = page === 'painting' || page === 'pontoise'
    ? `${styles.contactDescription} ${styles.detailContactDescription}`
    : styles.contactDescription;

  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-title">
      <div className={`${styles.container} ${styles.contactInner}`}>
        <div>
          <p className={styles.eyebrow}>Contact</p>
          <h2 id="contact-title" className={styles.contactTitle}>
            {page === 'pontoise' ? 'Votre projet' : 'Parlons de'}<br />
            <em>{page === 'pontoise' ? 'à Pontoise.' : 'votre projet.'}</em>
          </h2>
          <p className={descriptionClass}>
            {contactIntros[page] ?? 'Décrivez les travaux que vous souhaitez réaliser.'}{' '}
            Le devis est gratuit et envoyé sous 24 h après visite.
          </p>
          <ArrowLink href={QUOTE_PATH} className={`${styles.button} ${styles.contactButton}`}>
            Demander un devis
          </ArrowLink>
        </div>
        <div>
          <div className={styles.contactRow}>
            <h3>Coordonnées</h3>
            <ArrowLink href={`mailto:${CLIENT.email}`} className={styles.textLink}>{CLIENT.email}</ArrowLink>
            <p>{CLIENT.address.postalCode} {CLIENT.address.locality}, Val-d’Oise</p>
          </div>
          <div className={styles.contactRow}>
            <h3><a href={ZONES_PATH} className={styles.contactAreaLink}>Zone d’intervention</a></h3>
            <p>Dans un rayon de 40 km autour de Vétheuil, notamment dans le Val-d’Oise et les Yvelines.</p>
          </div>
          {page !== 'portfolio' && (
            <div className={`${styles.contactRow} ${styles.instagramRow}`}>
              <h3>Instagram</h3>
              <ArrowLink href={CLIENT.instagram} className={styles.textLink}>{CLIENT.instagramHandle}</ArrowLink>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function SiteLayout({ children, page = 'home' }: {
  children: ReactNode;
  page?: SitePage;
}) {
  return (
    <div className={styles.site}>
      <SiteHeader page={page} />
      <main id="content" tabIndex={-1}>
        {children}
        {page !== 'contact' && page !== 'legal' && <SiteContact page={page} />}
      </main>
      <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.footerInner}`}>
          <a href="/" className={styles.wordmark}>Léna <em>Rénove</em></a>
          <a href={LEGAL_PATH} aria-current={page === 'legal' ? 'page' : undefined}>Mentions légales</a>
        </div>
      </footer>
    </div>
  );
}
