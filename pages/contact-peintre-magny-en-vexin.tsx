import { useState, type FormEvent, type HTMLInputTypeAttribute } from 'react';
import { useRouter } from 'next/router';
import SEO from '@components/layout/SEO';
import SiteLayout, { Arrow, ArrowLink } from '@components/layout/SiteLayout';
import PageHero from '@components/sections/PageHero';
import ServiceLink from '@components/sections/ServiceLink';
import { CLIENT, CONTACT_PATH, LEGAL_PATH } from '@data/client';
import { buildHousePainter } from '@data/schemas';
import { QUOTE_SERVICES, type QuoteService } from '@data/services';
import styles from '@/styles/Contact.module.css';
import siteStyles from '@/styles/Site.module.css';

const FORM_ENDPOINT = 'https://formspree.io/f/xeajyayy';
const EMAIL_LINK = `mailto:${CLIENT.email}`;
const MAP_ADDRESS = `${CLIENT.address.street}, ${CLIENT.address.postalCode} ${CLIENT.address.locality}`;
const mapQuery = encodeURIComponent(MAP_ADDRESS);
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
const MAP_EMBED_URL = `https://www.google.com/maps?q=${mapQuery}&hl=fr&output=embed`;
const serviceOptions = Object.keys(QUOTE_SERVICES) as QuoteService[];

const title = 'Contact et devis pour vos travaux de peinture · Léna Rénove';
const description = 'Décrivez vos travaux à Léna Rénove par formulaire ou par e-mail. Devis gratuit sous 24 h après visite, depuis Vétheuil.';

export default function Contact() {
  return (
    <>
      <SEO title={title} description={description} path={CONTACT_PATH}
        breadcrumb={{ label: 'Contact' }} pageType="ContactPage" mainEntity={buildHousePainter()} />
      <SiteLayout
        page="contact"
        contactIntro={<>Pour <ServiceLink service="vinyle">rénover vos meubles de cuisine avec un film adhésif</ServiceLink>, indiquez dans votre demande quels éléments vous souhaitez habiller.</>}
      >
        <PageHero
          id="contact-hero-title"
          breadcrumb="Contact"
          eyebrow="Contact et devis"
          title={<>Contact et <em>demande de devis.</em></>}
          description={<>Vous échangez directement avec Léna, qui réalisera vos travaux. Consultez <ServiceLink service="overview">les prestations proposées</ServiceLink> pour préciser votre projet. Le devis est gratuit et envoyé sous 24&nbsp;h après visite.</>}
        >
          <ArrowLink href={EMAIL_LINK} className={siteStyles.textLink}>Écrire à Léna par e-mail</ArrowLink>
        </PageHero>

        <section id="contact" className={styles.details} aria-labelledby="quote-title" tabIndex={-1}>
          <div className={`${siteStyles.container} ${styles.columns}`}>
            <div>
              <h2 id="quote-title" className={styles.formTitle}>Votre demande de devis</h2>
              <QuoteForm />
              <ContactMap />
            </div>
            <ContactDetails />
          </div>
        </section>
      </SiteLayout>
    </>
  );
}

function QuoteForm() {
  const { query } = useRouter();
  const [serviceChoices, setServiceChoices] = useState<Partial<Record<QuoteService, boolean>>>({});
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
              <p id="services-hint" className={styles.servicesHint}>
                Vous pouvez sélectionner plusieurs prestations. Pour un devis de <ServiceLink service="peinture">peinture intérieure</ServiceLink>, indiquez les pièces à peindre dans votre message.
              </p>
              <div className={styles.services}>
                {serviceOptions.map((service) => (
                  <label key={service} className={styles.service}>
                    <input
                      type="checkbox"
                      name="services[]"
                      value={QUOTE_SERVICES[service]}
                      checked={serviceChoices[service] ?? (query.prestation === service)}
                      onChange={(event) => {
                        const { checked } = event.currentTarget;
                        setServiceChoices((choices) => ({ ...choices, [service]: checked }));
                      }}
                    />
                    {QUOTE_SERVICES[service]}
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
                Votre demande est transmise via Formspree.{' '}
                <label htmlFor="quote-consent">J’ai pris connaissance des informations sur le traitement de mes données.</label>{' '}
                <a href={`${LEGAL_PATH}#donnees-personnelles`} target="_blank" rel="noopener" aria-label="Données personnelles dans les mentions légales (nouvel onglet)">Mentions légales</a>.
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
        <p className={styles.directNote}>
          Pour une <ServiceLink service="papier-peint">pose de papier peint</ServiceLink>, vous pouvez indiquer par e-mail les dimensions du mur et le revêtement choisi.
        </p>
      </div>

      <div className={styles.office}>
        <div>
          <h3>Siège</h3>
          <p>
            {CLIENT.address.street}<br />
            {CLIENT.address.postalCode} {CLIENT.address.locality}<br />
            Val-d’Oise, {CLIENT.address.region}
          </p>
          <p className={styles.registration}>SIRET {siret} · {CLIENT.rcs}</p>
        </div>
        <div className={styles.hours}>
          <h3>Horaires</h3>
          <p>Du lundi au vendredi, de 8 h à 18 h.</p>
        </div>
      </div>
      <div className={styles.office}>
        <h3>Carte</h3>
        <p>{MAP_ADDRESS}</p>
        <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className={`${siteStyles.textLink} ${styles.mapLink}`}>
          Ouvrir dans Google Maps <span className="sr-only">(nouvel onglet)</span>
          <Arrow />
        </a>
      </div>
    </aside>
  );
}

function ContactMap() {
  return (
    <iframe
      className={styles.mapFrame}
      title={`Google Maps – ${MAP_ADDRESS}`}
      src={MAP_EMBED_URL}
      width={600}
      height={450}
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
}
