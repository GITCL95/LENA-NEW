import { useRef, useState, type ReactNode } from 'react';
import Image from 'next/image';
import { CLIENT, LEGAL_PATH, MOBILE_NAV_ROUTES, NAV_ROUTES, QUOTE_PATH, ZONES_PATH } from '@data/client';
import styles from '@/styles/Site.module.css';

type NavigationRoute = typeof MOBILE_NAV_ROUTES[number];
type SitePage = NavigationRoute['page'] | 'city' | 'legal' | 'notFound';

const contactIntros: Partial<Record<SitePage, string>> = {
  portfolio: 'Décrivez votre projet de rénovation intérieure.',
  painting: 'Décrivez votre projet de peinture intérieure.',
  zones: 'Indiquez votre commune et les travaux envisagés dans votre demande.',
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
  const contactLocation = page === 'contact';

  function closeMenu() {
    setMenuOpen(false);
  }

  function renderNavLinks(routes: readonly NavigationRoute[], onClick?: () => void) {
    return routes.map(({ label, href, page: destination }) => {
      let current: 'page' | 'location' | undefined;
      if (destination === page) current = 'page';
      if (page === 'city' && destination === 'zones') current = 'location';
      const linkHref = contactLocation && destination === 'contact' ? '#contact' : href;

      return <a href={linkHref} key={href} aria-current={current} onClick={onClick}>{label}</a>;
    });
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
        <a href="/" className={styles.logo} aria-label="Léna Rénove, accueil" aria-current={page === 'home' ? 'page' : undefined}>
          <Image src="/assets/img/logo-lt.png" alt="" width={500} height={442} loading="eager" />
        </a>
        <nav className={styles.desktopNav} aria-label="Navigation principale">
          {renderNavLinks(NAV_ROUTES)}
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
          {renderNavLinks(MOBILE_NAV_ROUTES, closeMenu)}
        </div>
      </nav>
    </header>
  );
}

function SiteContact({ page }: { page: SitePage }) {
  const cityPage = page === 'city';
  const zonesPage = page === 'zones';
  const descriptionClass = page === 'painting'
    ? `${styles.contactDescription} ${styles.detailContactDescription}`
    : styles.contactDescription;

  return (
    <section
      id="contact"
      className={zonesPage ? `${styles.contact} ${styles.regionalContact}` : styles.contact}
      aria-labelledby="contact-title"
      tabIndex={-1}
    >
      <div className={`${styles.container} ${styles.contactInner}`}>
        <div>
          <p className={styles.eyebrow}>Contact</p>
          <h2 id="contact-title" className={styles.contactTitle}>
            Parlons de<br /><em>votre projet.</em>
          </h2>
          {!cityPage && (
            <p className={descriptionClass}>
              {contactIntros[page] ?? 'Décrivez les travaux que vous souhaitez réaliser.'}
              {!zonesPage && ' Le devis est gratuit et envoyé sous 24 h après visite.'}
            </p>
          )}
          <ArrowLink href={QUOTE_PATH} className={`${styles.button} ${styles.contactButton}`}>
            Demander un devis
          </ArrowLink>
        </div>
        <div>
          <div className={styles.contactRow}>
            <h3>Coordonnées</h3>
            <ArrowLink href={`mailto:${CLIENT.email}`} className={styles.textLink}>{CLIENT.email}</ArrowLink>
            {!cityPage && <p>{CLIENT.address.postalCode} {CLIENT.address.locality}, Val-d’Oise</p>}
          </div>
          {!cityPage && (
            <div className={styles.contactRow}>
              {zonesPage ? (
                <>
                  <h3>Zone d’intervention</h3>
                  <ArrowLink href="#villes" className={styles.textLink}>Voir les communes desservies</ArrowLink>
                </>
              ) : (
                <>
                  <h3><a href={ZONES_PATH} className={styles.contactAreaLink}>Zone d’intervention</a></h3>
                  <p>Dans un rayon de 40 km autour de Vétheuil, notamment dans le Val-d’Oise et les Yvelines.</p>
                </>
              )}
            </div>
          )}
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
  const showContact = page !== 'contact' && page !== 'legal' && page !== 'notFound';

  return (
    <div className={styles.site}>
      <SiteHeader page={page} />
      <main id="content" tabIndex={-1}>
        {children}
        {showContact && <SiteContact page={page} />}
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
