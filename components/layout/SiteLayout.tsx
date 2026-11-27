import { useRef, useState, type ReactNode } from 'react';
import Image from 'next/image';
import SiteNavigation, { type SitePage } from '@components/layout/SiteNavigation';
import { CLIENT, LEGAL_PATH, QUOTE_PATH, SERVICE_AREA, ZONES_PATH } from '@data/client';
import styles from '@/styles/Site.module.css';

type HeaderLogo = { src: string; width: number; height: number };

const defaultHeaderLogo: HeaderLogo = { src: '/assets/img/logo-lt.png', width: 500, height: 442 };

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

export function QuoteButton({ href = QUOTE_PATH }: { href?: string }) {
  return (
    <ArrowLink href={href} className={`${styles.button} ${styles.primaryButton}`}>
      Demander un devis
    </ArrowLink>
  );
}

function SiteHeader({ page, activePath, quoteHref, logo = defaultHeaderLogo }: {
  page: SitePage;
  activePath?: string;
  quoteHref: string;
  logo?: HeaderLogo;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

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
        <a href="/" className={styles.logo} aria-label="Léna Rénove, accueil" aria-current={page === 'home' ? 'page' : undefined}>
          <Image {...logo} alt="" loading="eager" />
        </a>
        <nav className={styles.desktopNav} aria-label="Navigation principale">
          <SiteNavigation page={page} activePath={activePath} />
        </nav>
        <ArrowLink href={quoteHref} className={`${styles.button} ${styles.headerButton}`}>
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
        {menuOpen && (
          <div className={styles.container}>
            <SiteNavigation page={page} activePath={activePath} mobile onFragmentNavigate={closeMenu} />
          </div>
        )}
      </nav>
    </header>
  );
}

function SiteContact({ page, quoteHref, intro }: { page: SitePage; quoteHref: string; intro?: ReactNode }) {
  const cityPage = page === 'city';
  const contactPage = page === 'contact';
  const zonesPage = page === 'zones';
  const descriptionClass = page === 'service'
    ? `${styles.contactDescription} ${styles.detailContactDescription}`
    : styles.contactDescription;

  return (
    <section
      id={contactPage ? undefined : 'contact'}
      className={zonesPage ? `${styles.contact} ${styles.regionalContact}` : styles.contact}
      aria-labelledby="contact-title"
      tabIndex={contactPage ? undefined : -1}
    >
      <div className={`${styles.container} ${styles.contactInner}`}>
        <div>
          <p className={styles.eyebrow}>Contact</p>
          <h2 id="contact-title" className={styles.contactTitle}>
            Parlons de<br /><em>votre projet.</em>
          </h2>
          {!cityPage && (
            <p className={descriptionClass}>
              {intro ?? 'Décrivez les travaux que vous souhaitez réaliser.'}
              {!zonesPage && ' Le devis est gratuit et envoyé sous 24 h après visite.'}
            </p>
          )}
          <ArrowLink href={quoteHref} className={`${styles.button} ${styles.contactButton}`}>
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
                  <p>{SERVICE_AREA}.</p>
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

export default function SiteLayout({ children, page = 'home', activePath, quoteHref = QUOTE_PATH, headerLogo, contactIntro }: {
  children: ReactNode;
  page?: SitePage;
  activePath?: string;
  quoteHref?: string;
  headerLogo?: HeaderLogo;
  contactIntro?: ReactNode;
}) {
  const contactHref = page === 'contact' ? '#contact' : quoteHref;

  return (
    <div className={styles.site}>
      <SiteHeader page={page} activePath={activePath} quoteHref={contactHref} logo={headerLogo} />
      <main id="content" tabIndex={-1}>
        {children}
        {page !== 'notFound' && <SiteContact page={page} quoteHref={contactHref} intro={contactIntro} />}
      </main>
      <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.footerInner}${page === 'home' ? ` ${styles.footerWithCredit}` : ''}`}>
          <a href="/" className={styles.wordmark}>Léna <em>Rénove</em></a>
          {page === 'home' && (
            <span className={styles.footerCredit}>
              Site créé par <a href="https://www.alizee-web.pt/" target="_blank" rel="noopener">Alizée Web</a>
            </span>
          )}
          <a href={LEGAL_PATH} aria-current={page === 'legal' ? 'page' : undefined}>Mentions légales</a>
        </div>
      </footer>
    </div>
  );
}
