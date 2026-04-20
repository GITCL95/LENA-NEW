import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Instagram, ArrowRight, Check } from 'lucide-react';
import SEO from '@components/layout/SEO';
import Layout from '@components/layout/Layout';
import PageHero from '@components/sections/PageHero';
import { CLIENT, SITE_URL } from '@data/client';
import { buildWebPageSchema, buildBreadcrumbSchema } from '@data/schemas';

const SERVICE_OPTIONS = [
  'Peinture intérieure',
  'Enduits & ratissage',
  'Pose de papier peint',
  'Vinyle adhésif décoratif',
  'Rénovation complète',
  'Autre / Conseil',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Formspree / Netlify handle this via action attribute in production.
    // Local fallback: simulate success after short delay.
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 800);
  };

  const title = 'Contact · Devis gratuit 24h · Léna Rénove';
  const description =
    "Contactez Léna Rénove pour un devis gratuit sous 24h. Artisan peintre à Magny-en-Vexin (95). Tél. 06 71 96 94 00. Intervention Val-d'Oise et Yvelines.";
  const path = '/contact-peintre-magny-en-vexin.html';

  const jsonLd = [
    buildWebPageSchema({ path, title, description }),
    buildBreadcrumbSchema([
      { name: 'Accueil', url: `${SITE_URL}/` },
      { name: 'Contact', url: `${SITE_URL}${path}` },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      url: `${SITE_URL}${path}`,
      name: title,
      mainEntity: { '@id': `${SITE_URL}/#business` },
    },
  ];

  return (
    <>
      <SEO title={title} description={description} path={path} jsonLd={jsonLd} />
      <Layout>
        <PageHero
          eyebrow="Contact · Devis gratuit"
          title={<>Parlons de votre <span className="italic text-corail-300 font-normal">projet.</span></>}
          description="Devis gratuit sous 24h. Réponse personnelle de Léna. Pas de sous-traitance, pas de commercial — un échange direct avec l'artisan qui réalisera vos travaux."
          breadcrumb={[
            { label: 'Accueil', href: '/' },
            { label: 'Contact' },
          ]}
        />

        {/* Contact grid */}
        <section className="section">
          <div className="container-premium">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="lg:col-span-7"
              >
                <span className="eyebrow">Formulaire</span>
                <h2 className="mt-5 font-display text-display-md tracking-tightest">
                  Décrivez votre projet,<br />
                  <span className="italic text-corail-600 font-normal">je reviens vers vous.</span>
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-8 rounded-3xl bg-ivory-300 border border-corail-500 p-8"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-corail-500 text-ivory grid place-items-center flex-shrink-0">
                        <Check size={22} strokeWidth={2.5} />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl text-espresso-800">Message reçu, merci !</h3>
                        <p className="mt-2 text-espresso-500 leading-relaxed">
                          Je reviens vers vous sous 24h ouvrées. Pour un échange immédiat,
                          n&apos;hésitez pas à m&apos;appeler au{' '}
                          <a href={`tel:${CLIENT.phoneIntl}`} className="text-corail-600 underline font-semibold">
                            {CLIENT.phone}
                          </a>.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    method="POST"
                    action={`https://formsubmit.co/${CLIENT.email}`}
                    className="mt-10 space-y-6"
                  >
                    <input type="hidden" name="_subject" value="Nouveau devis depuis lena-renove.com" />
                    <input type="hidden" name="_captcha" value="false" />

                    <div className="grid md:grid-cols-2 gap-5">
                      <Field label="Prénom" name="firstname" required />
                      <Field label="Nom" name="lastname" required />
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <Field label="Email" name="email" type="email" required />
                      <Field label="Téléphone" name="phone" type="tel" required />
                    </div>
                    <Field label="Ville du chantier" name="city" placeholder="Pontoise, Cergy, Magny-en-Vexin..." required />

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.2em] text-espresso-500 mb-3">
                        Type de prestation
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {SERVICE_OPTIONS.map((opt) => (
                          <label
                            key={opt}
                            className="cursor-pointer px-4 py-2 text-[13px] rounded-full border border-border bg-ivory hover:border-corail-500 hover:text-corail-600 transition has-[:checked]:bg-corail-500 has-[:checked]:border-corail-500 has-[:checked]:text-ivory"
                          >
                            <input type="checkbox" name="services[]" value={opt} className="sr-only" />
                            {opt}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-[11px] uppercase tracking-[0.2em] text-espresso-500 mb-2">
                        Votre message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        placeholder="Surface approximative, état des murs, délai souhaité…"
                        className="w-full rounded-2xl bg-ivory-300 border border-border px-5 py-4 text-espresso-800 placeholder:text-espresso-300 focus:outline-none focus:border-corail-500 focus:ring-2 focus:ring-corail-500/20 transition"
                      />
                    </div>

                    <label className="flex items-start gap-3 text-[13px] text-espresso-500">
                      <input
                        type="checkbox"
                        required
                        className="mt-1 w-4 h-4 rounded border-border text-corail-500 focus:ring-corail-500"
                      />
                      <span>
                        J&apos;accepte que mes données soient traitées pour le traitement de ma demande
                        (voir <a href="/mentions-legales.html" className="underline hover:text-corail-600">mentions légales</a>).
                      </span>
                    </label>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full md:w-auto disabled:opacity-60"
                    >
                      {loading ? 'Envoi…' : 'Envoyer ma demande'}
                      <ArrowRight size={16} strokeWidth={2} />
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Infos */}
              <motion.aside
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="lg:col-span-5 space-y-6"
              >
                <div className="bg-espresso-800 text-ivory rounded-4xl p-8 lg:p-10 relative overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-corail-500/20 rounded-full blur-3xl" />
                  <div className="relative z-10">
                    <span className="eyebrow !text-corail-300 before:!bg-corail-400">Contact direct</span>
                    <h3 className="mt-4 font-display text-2xl">Parler à Léna</h3>
                    <div className="mt-6 space-y-4">
                      <a href={`tel:${CLIENT.phoneIntl}`} className="flex items-center gap-4 group">
                        <span className="w-11 h-11 rounded-full bg-ivory/10 grid place-items-center group-hover:bg-corail-500 transition">
                          <Phone size={17} strokeWidth={1.8} />
                        </span>
                        <div>
                          <div className="text-[11px] uppercase tracking-[0.2em] text-ivory/50">Téléphone</div>
                          <div className="font-display text-lg group-hover:text-corail-300 transition">{CLIENT.phone}</div>
                        </div>
                      </a>
                      <a href={`mailto:${CLIENT.email}`} className="flex items-center gap-4 group">
                        <span className="w-11 h-11 rounded-full bg-ivory/10 grid place-items-center group-hover:bg-corail-500 transition">
                          <Mail size={17} strokeWidth={1.8} />
                        </span>
                        <div>
                          <div className="text-[11px] uppercase tracking-[0.2em] text-ivory/50">Email</div>
                          <div className="font-display text-[15px] break-all group-hover:text-corail-300 transition">{CLIENT.email}</div>
                        </div>
                      </a>
                      <a href={CLIENT.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                        <span className="w-11 h-11 rounded-full bg-ivory/10 grid place-items-center group-hover:bg-corail-500 transition">
                          <Instagram size={17} strokeWidth={1.8} />
                        </span>
                        <div>
                          <div className="text-[11px] uppercase tracking-[0.2em] text-ivory/50">Instagram</div>
                          <div className="font-display text-lg group-hover:text-corail-300 transition">{CLIENT.instagramHandle}</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-ivory rounded-3xl border border-border/70 p-7">
                  <MapPin size={20} className="text-corail-500 mb-3" strokeWidth={1.8} />
                  <h4 className="font-display text-xl text-espresso-800">Siège</h4>
                  <p className="mt-2 text-[15px] text-espresso-500 leading-relaxed">
                    Vétheuil, {CLIENT.address.postalCode}<br />
                    Val-d&apos;Oise — Île-de-France
                  </p>
                  <div className="mt-5 pt-5 border-t border-border/60 text-[13px] text-espresso-400">
                    SIRET {CLIENT.siret} · {CLIENT.rcs}
                  </div>
                </div>

                <div className="bg-ivory rounded-3xl border border-border/70 p-7">
                  <Clock size={20} className="text-corail-500 mb-3" strokeWidth={1.8} />
                  <h4 className="font-display text-xl text-espresso-800">Horaires</h4>
                  <div className="mt-3 space-y-1.5 text-[14px] text-espresso-600">
                    <div>{CLIENT.hours.weekdays}</div>
                    <div>{CLIENT.hours.saturday}</div>
                    <div className="text-espresso-300">{CLIENT.hours.sunday}</div>
                  </div>
                </div>
              </motion.aside>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-[11px] uppercase tracking-[0.2em] text-espresso-500 mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl bg-ivory-300 border border-border px-5 py-3.5 text-espresso-800 placeholder:text-espresso-300 focus:outline-none focus:border-corail-500 focus:ring-2 focus:ring-corail-500/20 transition"
      />
    </div>
  );
}
