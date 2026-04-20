import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, Check, ArrowUpRight, ArrowRight, Star } from 'lucide-react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import SEO from '@components/layout/SEO';
import Layout from '@components/layout/Layout';
import PageHero from '@components/sections/PageHero';
import FAQ from '@components/sections/FAQ';
import CTA from '@components/sections/CTA';
import { CITIES, City, getCityBySlug } from '@data/cities';
import { SERVICES } from '@data/services';
import { CLIENT, SITE_URL } from '@data/client';
import { buildWebPageSchema, buildBreadcrumbSchema, buildFAQSchema } from '@data/schemas';

interface CityPageProps {
  city: City;
  neighbours: City[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: CITIES.map((c) => ({ params: { slug: c.filePath } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<CityPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const city = getCityBySlug(slug);
  if (!city) return { notFound: true };

  const neighbours = city.nearbyCities
    .map((s) => CITIES.find((c) => c.slug === s))
    .filter(Boolean) as City[];

  return { props: { city, neighbours } };
};

export default function CityPage({ city, neighbours }: CityPageProps) {
  const path = city.href;

  const cityFaq = [
    {
      q: `Intervenez-vous à ${city.name} pour des travaux de peinture ?`,
      a: `Oui. Léna Rénove intervient régulièrement à ${city.name} (${city.postalCode}) pour tous types de chantiers de peinture intérieure : murs, plafonds, boiseries, enduits, papier peint et vinyle adhésif. Depuis Vétheuil, nous sommes à ${city.distance} de chez vous.`,
    },
    {
      q: `Quels quartiers de ${city.name} couvrez-vous ?`,
      a: `Nous couvrons l'ensemble de ${city.name} et notamment les secteurs suivants : ${city.neighbourhoods.join(', ')}. Quel que soit le quartier, le niveau de service et de finition reste identique.`,
    },
    {
      q: `Quel est le délai de devis pour un chantier à ${city.name} ?`,
      a: `Le devis est remis sous 24h après visite gratuite du chantier. À ${city.name}, le début des travaux peut intervenir dans les 15 jours selon le planning et la taille du projet.`,
    },
    {
      q: `Utilisez-vous des peintures professionnelles à ${city.name} ?`,
      a: `Oui, exclusivement. Les peintures Tollens et Sikkens sont utilisées sur tous les chantiers ${city.name}, comme sur l'ensemble de notre zone d'intervention. Ces produits garantissent un rendu durable et esthétique.`,
    },
    {
      q: `Êtes-vous assurée pour intervenir à ${city.name} ?`,
      a: `Oui. Léna Rénove dispose d'une Responsabilité Civile Professionnelle active et du CAP Peintre en Bâtiment. SIRET : ${CLIENT.siret}. Tous nos chantiers ${city.name} sont couverts légalement.`,
    },
  ];

  const jsonLd = [
    buildWebPageSchema({ path, title: city.title, description: city.metaDescription }),
    buildBreadcrumbSchema([
      { name: 'Accueil', url: `${SITE_URL}/` },
      { name: 'Zones', url: `${SITE_URL}/peintre-renovation-val-d-oise-yvelines.html` },
      { name: city.name, url: `${SITE_URL}${path}` },
    ]),
    buildFAQSchema(cityFaq),
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: `Peinture intérieure à ${city.name}`,
      provider: { '@id': `${SITE_URL}/#business` },
      areaServed: {
        '@type': 'City',
        name: city.name,
        address: {
          '@type': 'PostalAddress',
          addressLocality: city.name,
          postalCode: city.postalCode,
          addressRegion: city.departmentName,
          addressCountry: 'FR',
        },
      },
    },
  ];

  return (
    <>
      <SEO title={city.title} description={city.metaDescription} path={path} jsonLd={jsonLd} />
      <Layout>
        <PageHero
          eyebrow={`${city.postalCode} · ${city.departmentName}`}
          title={<>{city.h1.split(' à ')[0]} à<br /><span className="italic text-corail-300 font-normal">{city.name}.</span></>}
          description={city.description.split('.')[0] + '.'}
          breadcrumb={[
            { label: 'Accueil', href: '/' },
            { label: 'Zones', href: '/peintre-renovation-val-d-oise-yvelines.html' },
            { label: city.name },
          ]}
        />

        {/* Key facts bar */}
        <section className="border-b border-border/60 bg-ivory-300">
          <div className="container-premium">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border/70">
              <Fact icon={MapPin} label="Code postal" value={city.postalCode} />
              <Fact icon={Clock} label="Distance" value={city.distance} />
              <Fact icon={Users} label="Population" value={city.population} />
              <Fact icon={Star} label="Note Léna" value={`${CLIENT.stats.rating} / 5`} />
            </div>
          </div>
        </section>

        {/* Intro texte + services */}
        <section className="section">
          <div className="container-premium">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="lg:col-span-7"
              >
                <span className="eyebrow">Votre artisan local</span>
                <h2 className="mt-5 font-display text-display-md tracking-tightest text-balance">
                  Peinture & rénovation<br />
                  <span className="italic text-corail-600 font-normal">à {city.name}.</span>
                </h2>
                <p className="mt-6 text-espresso-600 leading-relaxed text-[17px]">
                  {city.description}
                </p>
                <p className="mt-5 text-espresso-600 leading-relaxed text-[17px]">
                  <strong className="text-espresso-800">Léna Rénove</strong> est basée à Vétheuil, à{' '}
                  {city.distance} de {city.name}. Léna Renaud, titulaire du CAP Peintre en Bâtiment,
                  réalise personnellement chaque chantier. Peintures professionnelles{' '}
                  <strong>Tollens & Sikkens</strong>, application manuelle et airless selon le support.
                </p>
                {city.landmarks && (
                  <div className="mt-8 p-5 rounded-2xl bg-ivory-300 border border-border/60 text-[14px] text-espresso-500 leading-relaxed">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-corail-600 mb-2">Points de repère</div>
                    {city.landmarks}
                  </div>
                )}
              </motion.div>

              <motion.aside
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="lg:col-span-5"
              >
                <div className="bg-espresso-800 text-ivory rounded-4xl p-8 relative overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-corail-500/20 rounded-full blur-3xl" />
                  <div className="relative z-10">
                    <span className="eyebrow !text-corail-300 before:!bg-corail-400">Quartiers couverts</span>
                    <h3 className="mt-4 font-display text-2xl">Secteurs {city.name}</h3>
                    <ul className="mt-6 space-y-3">
                      {city.neighbourhoods.map((n) => (
                        <li key={n} className="flex items-start gap-3 text-[15px] text-ivory/80">
                          <span className="w-5 h-5 rounded-full bg-corail-500 grid place-items-center flex-shrink-0 mt-0.5">
                            <Check size={11} className="text-ivory" strokeWidth={3} />
                          </span>
                          {n}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact-peintre-magny-en-vexin.html"
                      className="mt-8 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-corail-300 hover:text-corail-200 transition"
                    >
                      Demander un devis
                      <ArrowRight size={14} strokeWidth={2} />
                    </Link>
                  </div>
                </div>
              </motion.aside>
            </div>
          </div>
        </section>

        {/* Services adapted */}
        <section className="section bg-ivory-300">
          <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="max-w-3xl mb-12"
            >
              <span className="eyebrow">Services à {city.name}</span>
              <h2 className="mt-5 font-display text-display-md tracking-tightest text-balance">
                Quatre expertises,<br />
                <span className="italic text-corail-600 font-normal">disponibles à {city.name}.</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {SERVICES.map((service, i) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  className="bg-ivory rounded-3xl p-7 border border-border/60 hover:border-corail-500 hover:shadow-card transition-all duration-500 group"
                >
                  <div className="font-display text-xs tracking-[0.3em] text-corail-600">{service.number}</div>
                  <h3 className="mt-3 font-display text-xl text-espresso-800 leading-tight group-hover:text-corail-600 transition">
                    {service.shortTitle}
                  </h3>
                  <p className="mt-3 text-[13px] text-espresso-500 leading-relaxed">
                    {service.excerpt}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby cities */}
        {neighbours.length > 0 && (
          <section className="section">
            <div className="container-premium">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-10">
                <div>
                  <span className="eyebrow">À proximité</span>
                  <h2 className="mt-5 font-display text-display-md tracking-tightest">
                    Villes voisines<br />
                    <span className="italic text-corail-600 font-normal">couvertes.</span>
                  </h2>
                </div>
                <Link href="/peintre-renovation-val-d-oise-yvelines.html" className="btn-link">
                  Toutes les zones <ArrowRight size={14} strokeWidth={1.8} />
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                {neighbours.map((n) => (
                  <Link
                    key={n.slug}
                    href={n.href}
                    className="group relative bg-ivory-300 rounded-3xl p-6 border border-transparent hover:border-corail-500 hover:bg-ivory hover:shadow-card transition-all"
                  >
                    <div className="flex items-start justify-between mb-5">
                      <MapPin size={16} className="text-corail-500" strokeWidth={1.8} />
                      <ArrowUpRight size={16} className="text-espresso-300 group-hover:text-corail-600 group-hover:rotate-45 transition" strokeWidth={1.8} />
                    </div>
                    <div className="font-display text-xl text-espresso-800 tracking-tight group-hover:text-corail-600 transition">
                      {n.name}
                    </div>
                    <div className="mt-1 text-[12px] text-espresso-400">{n.postalCode} · {n.distance}</div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <FAQ
          eyebrow="Questions fréquentes"
          title={`FAQ — Peintre à ${city.name}`}
          items={cityFaq}
        />
        <CTA />
      </Layout>
    </>
  );
}

function Fact({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
}) {
  return (
    <div className="p-6 md:p-8 text-center flex flex-col items-center">
      <Icon size={18} className="text-corail-500 mb-3" strokeWidth={1.8} />
      <div className="font-display text-lg text-espresso-800">{value}</div>
      <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-espresso-400">{label}</div>
    </div>
  );
}
