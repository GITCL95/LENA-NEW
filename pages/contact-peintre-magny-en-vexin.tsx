import { useState, type FormEvent, type HTMLInputTypeAttribute } from 'react';
import SEO from '@components/layout/SEO';
import SiteLayout, { Arrow, ArrowLink } from '@components/layout/SiteLayout';
import { CLIENT, CONTACT_PATH, SITE_URL } from '@data/client';
import { buildBreadcrumbSchema, buildWebPageSchema } from '@data/schemas';
import styles from '@/styles/Contact.module.css';
import siteStyles from '@/styles/Site.module.css';

const FORM_ENDPOINT = 'https://formspree.io/f/xeajyayy';
const EMAIL_LINK = `mailto:${CLIENT.email}`;
const LEGAL_PATH = '/mentions-legales.html';

const SERVICES = [
  'Peinture intérieure',
  'Enduits et ratissage',
  'Pose de papier peint',
  'Vinyle adhésif décoratif',
  'Rénovation complète',
  'Peinture extérieure',
  'Autre demande ou conseil',
];

const title = 'Contact · Devis gratuit sous 24 h · Léna Rénove';
const description = 'Contactez Léna Rénove pour un devis gratuit sous 24 h après visite. Artisane peintre à Vétheuil, dans le Val-d’Oise et les Yvelines.';
const jsonLd = [
  buildWebPageSchema({ path: CONTACT_PATH, title, description }),
  buildBreadcrumbSchema([
    { name: 'Accueil', url: `${SITE_URL}/` },
    { name: 'Contact', url: `${SITE_URL}${CONTACT_PATH}` },
  ]),
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    url: `${SITE_URL}${CONTACT_PATH}`,
    name: title,
    mainEntity: { '@id': `${SITE_URL}/#business` },
  },
];

export default function Contact() {
  return (
    <>
      <SEO title={title} description={description} path={CONTACT_PATH} jsonLd={jsonLd} />
      <SiteLayout page="contact">
        <section className={styles.hero} aria-labelledby="contact-hero-title">
          <div className={siteStyles.container}>
            <p className={siteStyles.eyebrow}>Contact et devis</p>
            <h1 id="contact-hero-title">Parlons de <em>votre projet.</em></h1>
            <p className={styles.heroDescription}>
              Vous échangez directement avec Léna, qui réalisera vos travaux. Le devis est gratuit et envoyé sous 24 h après visite.
            </p>
            <ArrowLink href={EMAIL_LINK} className={`${siteStyles.textLink} ${styles.heroLink}`}>
              Écrire à Léna par e-mail
            </ArrowLink>
          </div>
        </section>

        <section id="contact" className={styles.details} aria-labelledby="quote-title">
          <div className={`${siteStyles.container} ${styles.columns}`}>
            <div>
              <h2 id="quote-title" className={styles.formTitle}>Votre demande de devis</h2>
              <QuoteForm />
            </div>
            <ContactDetails />
          </div>
        </section>
      </SiteLayout>
    </>
  );
}

function QuoteForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  async function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading || submitted) return;

    const { action, method } = event.currentTarget;
    const body = new FormData(event.currentTarget);
    setLoading(true);
    setError('');

    try {
      const response = await fetch(action, {
        method,
        body,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const result = await response.json().catch(() => null);
        const messages = Array.isArray(result?.errors)
          ? result.errors.map((item: { message?: string }) => item?.message).filter(Boolean)
          : [];
        setError(messages.join(', ') || 'Votre demande n’a pas pu être envoyée. Réessayez ou écrivez directement à Léna par e-mail.');
      }
    } catch {
      setError('Une erreur réseau est survenue. Vérifiez votre connexion puis réessayez.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div role="status">
        {submitted && (
          <div className={styles.confirmation}>
            <h3>Message reçu, merci !</h3>
            <p>Je reviens vers vous sous 24 h ouvrées.</p>
          </div>
        )}
      </div>
      {!submitted && (
        <>
          <p id="quote-required" className={styles.requiredNote}>
            Les champs marqués d’un astérisque (*) sont obligatoires.
          </p>
          <form
            className={styles.form}
            action={FORM_ENDPOINT}
            method="post"
            onSubmit={submitQuote}
            aria-labelledby="quote-title"
            aria-describedby="quote-required"
            aria-busy={loading}
          >
            <input type="hidden" name="_subject" value="Nouveau devis depuis lena-renove.com" />
            <div className={styles.fields}>
              <Field name="firstname" label="Prénom" autoComplete="given-name" />
              <Field name="lastname" label="Nom" autoComplete="family-name" />
              <Field className={styles.contactField} name="email" label="Adresse e-mail" type="email" autoComplete="email" />
              <Field className={styles.contactField} name="phone" label="Téléphone" type="tel" autoComplete="tel" />
              <Field className={styles.cityField} name="city" label="Ville du chantier" placeholder="Ex. Pontoise, Cergy ou Vétheuil" />
            </div>

            <fieldset aria-describedby="services-hint">
              <legend className={styles.label}>Type de prestation <span>(facultatif)</span></legend>
              <p id="services-hint" className={styles.servicesHint}>Vous pouvez sélectionner plusieurs prestations.</p>
              <div className={styles.services}>
                {SERVICES.map((service) => (
                  <label key={service} className={styles.service}>
                    <input type="checkbox" name="services[]" value={service} />
                    {service}
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor="message" className={styles.label}>Votre message <RequiredMark /></label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Surface approximative, état des murs, délai souhaité..."
                className={styles.control}
              />
            </div>

            <div className={styles.consent}>
              <input type="checkbox" id="quote-consent" required />
              <p>
                <label htmlFor="quote-consent">J’accepte que mes données soient utilisées pour traiter ma demande.</label>{' '}
                <a href={LEGAL_PATH}>Mentions légales</a>.
              </p>
            </div>

            {error && <p className={styles.error} role="alert">{error}</p>}

            <button type="submit" className={`${siteStyles.button} ${siteStyles.primaryButton} ${styles.submit}`} disabled={loading}>
              {loading ? 'Envoi…' : 'Envoyer ma demande'}
              <Arrow />
            </button>
          </form>
        </>
      )}
    </>
  );
}

function RequiredMark() {
  return <span className={styles.requiredMark} aria-hidden="true">*</span>;
}

function Field({ name, label, type = 'text', autoComplete, placeholder, className }: {
  name: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  autoComplete?: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className={styles.label} htmlFor={name}>{label} <RequiredMark /></label>
      <input
        className={styles.control}
        type={type}
        id={name}
        name={name}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required
      />
    </div>
  );
}

function ContactDetails() {
  const siret = CLIENT.siret.replace(/^(\d{3})(\d{3})(\d{3})(\d{5})$/, '$1 $2 $3 $4');

  return (
    <aside className={styles.sidebar} aria-labelledby="direct-contact-title">
      <div className={styles.direct}>
        <p className={siteStyles.eyebrow}>Contact direct</p>
        <h2 id="direct-contact-title">Parler à Léna</h2>
        <a href={EMAIL_LINK} className={styles.directLink}>
          <span>
            <span className={styles.directLabel}>E-mail</span>
            {CLIENT.email}
          </span>
          <Arrow />
        </a>
        <a href={CLIENT.instagram} target="_blank" rel="noopener noreferrer" className={styles.directLink}>
          <span>
            <span className={styles.directLabel}>Instagram</span>
            {CLIENT.instagramHandle}
          </span>
          <Arrow />
        </a>
      </div>

      <div className={styles.office}>
        <div>
          <h3>Siège</h3>
          <p>{CLIENT.address.postalCode} {CLIENT.address.locality}<br />Val-d’Oise, {CLIENT.address.region}</p>
          <p className={styles.registration}>SIRET {siret} · {CLIENT.rcs}</p>
        </div>
        <div className={styles.hours}>
          <h3>Horaires</h3>
          <p>Du lundi au vendredi, de 8 h à 18 h.</p>
        </div>
      </div>
    </aside>
  );
}
