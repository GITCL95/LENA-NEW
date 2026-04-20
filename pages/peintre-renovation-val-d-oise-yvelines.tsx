import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight, Navigation, Clock, Check } from 'lucide-react';
import SEO from '@components/layout/SEO';
import Layout from '@components/layout/Layout';
import PageHero from '@components/sections/PageHero';
import FAQ from '@components/sections/FAQ';
import CTA from '@components/sections/CTA';
import { CITIES } from '@data/cities';
import { SITE_URL } from '@data/client';
import { buildWebPageSchema, buildBreadcrumbSchema, buildFAQSchema } from '@data/schemas';

const ZONES_FAQ = [
  {
    q: 'Dans quelles villes du Val-d\'Oise intervenez-vous ?',
    a: 'Léna Rénove couvre l\'ensemble du Val-d\'Oise (95) avec des pages dédiées pour Pontoise, Cergy, L\'Isle-Adam, Beaumont-sur-Oise, Marines, Chars — et intervient également dans toutes les communes du Vexin français.',
  },
  {
    q: 'Intervenez-vous à Pontoise pour des travaux de peinture ?',
    a: 'Oui. Pontoise est l\'une de nos zones principales d\'intervention. Nous réalisons peinture intérieure, enduits de ratissage, pose de tapisserie et peinture de boiseries dans toute la ville — centre historique, Les Louvrais, Marcouville.',
  },
  {
    q: 'Quel est le délai d\'intervention dans le Val-d\'Oise ?',
    a: 'Devis gratuit sous 24h après visite, et début des travaux sous 15 jours en moyenne selon le planning. Les communes proches de Magny-en-Vexin (Marines, Chars, L\'Isle-Adam) peuvent bénéficier d\'une intervention encore plus rapide.',
  },
  {
    q: 'Quels travaux réalisez-vous dans les Yvelines ?',
    a: 'Tous nos services : peinture intérieure, ratissage, pose de papier peint, vinyle adhésif. Principales villes des Yvelines couvertes : Saint-Germain-en-Laye, Conflans-Sainte-Honorine.',
  },
  {
    q: 'Proposez-vous des devis gratuits à Cergy ?',
    a: 'Oui. Devis gratuit et sans engagement à Cergy, comme sur l\'ensemble de nos zones d\'intervention. Je me déplace personnellement pour évaluer votre chantier et vous remettre un devis détaillé.',
  },
  {
    q: 'Êtes-vous assurée pour intervenir dans le Val-d\'Oise et les Yvelines ?',
    a: 'Oui. Léna Rénove est couverte par une Responsabilité Civile Professionnelle valide dans tous les départements où nous intervenons. CAP Peintre en Bâtiment, SIRET 88880825000011.',
  },
];

const DEPARTMENTS = [
  { code: '95', name: 'Val-d\'Oise', count: CITIES.filter(c => c.department === '95').length + ' villes' },
  { code: '78', name: 'Yvelines', count: CITIES.filter(c => c.department === '78').length + ' villes' },
  { code: '27', name: 'Eure', count: CITIES.filter(c => c.department === '27').length + ' ville' },
  { code: '60', name: 'Oise', count: CITIES.filter(c => c.department === '60').length + ' ville' },
];

export default function Zones() {
  const title = 'Peintre Val-d\'Oise (95) et Yvelines (78) · Léna Rénove';
  const description =
    "Artisan peintre en bâtiment dans tout le Val-d'Oise et les Yvelines. Pontoise, Cergy, Saint-Germain, Conflans, L'Isle-Adam, Gisors, Beaumont, Marines, Chars. Devis 24h.";
  const path = '/peintre-renovation-val-d-oise-yvelines.html';

  const jsonLd = [
    buildWebPageSchema({ path, title, description }),
    buildBreadcrumbSchema([
      { name: 'Accueil', url: `${SITE_URL}/` },
      { name: 'Zones d\'intervention', url: `${SITE_URL}${path}` },
    ]),
    buildFAQSchema(ZONES_FAQ),
  ];

  return (
    <>
      <SEO title={title} description={description} path={path} jsonLd={jsonLd} />
      <Layout>
        <PageHero
          eyebrow="Zones d'intervention"
          title={<>Peintre en bâtiment dans le<br /><span className="italic text-corail-300 font-normal">Val-d&apos;Oise et les Yvelines.</span></>}
          description="Basée à Vétheuil (95510), Léna Rénove intervient dans un rayon de 50 km — Val-d'Oise, Yvelines, Oise, Eure. 10 villes principales couvertes par des pages dédiées."
          breadcrumb={[
            { label: 'Accueil', href: '/' },
            { label: 'Zones' },
          ]}
        />

        {/* Département stats */}
        <section className="border-b border-border/60">
          <div className="container-premium">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border/70 border-x border-border/70">
              {DEPARTMENTS.map((d) => (
                <div key={d.code} className="p-8 md:p-10 text-center">
                  <div className="font-display text-display-md text-corail-600 leading-none">{d.code}</div>
                  <div className="mt-2 font-display text-lg text-espresso-800">{d.name}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-espresso-400">{d.count}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cities list with content */}
        <section className="section">
          <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="max-w-3xl mb-14"
            >
              <span className="eyebrow">Nos villes</span>
              <h2 className="mt-5 font-display text-display-lg tracking-tightest text-balance">
                10 villes principales,<br />
                <span className="italic text-corail-600 font-normal">couvertes en détail.</span>
              </h2>
              <p className="mt-6 text-espresso-500 leading-relaxed">
                Chaque ville dispose d&apos;une page dédiée avec les informations locales,
                les quartiers couverts et les services spécifiques. Cliquez sur une ville pour en savoir plus.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {CITIES.map((city, i) => (
                <motion.div
                  key={city.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: i * 0.04 }}
                >
                  <Link
                    href={city.href}
                    className="group block relative bg-ivory rounded-3xl p-7 lg:p-8 border border-border/70 hover:border-corail-500 hover:shadow-card transition-all duration-500"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <MapPin size={18} className="text-corail-500" strokeWidth={1.8} />
                        <span className="text-[11px] uppercase tracking-[0.2em] text-espresso-400">
                          {city.postalCode} · {city.departmentName}
                        </span>
                      </div>
                      <ArrowUpRight
                        size={18}
                        className="text-espresso-300 group-hover:text-corail-600 group-hover:rotate-45 transition-all"
                        strokeWidth={1.8}
                      />
                    </div>

                    <h3 className="font-display text-2xl lg:text-3xl tracking-tight text-espresso-800 group-hover:text-corail-600 transition">
                      {city.name}
                    </h3>

                    <div className="mt-3 flex items-center gap-4 text-[13px] text-espresso-400">
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} strokeWidth={1.8} /> {city.distance}
                      </span>
                      <span className="h-0.5 w-0.5 rounded-full bg-espresso-300" />
                      <span>{city.population}</span>
                    </div>

                    <p className="mt-5 text-[14px] text-espresso-500 leading-relaxed line-clamp-3">
                      {city.description}
                    </p>

                    <div className="mt-5 pt-5 border-t border-border/60 flex items-center gap-2 text-[12px] uppercase tracking-[0.15em] text-corail-600 font-semibold">
                      Découvrir la page ville
                      <ArrowUpRight size={12} strokeWidth={2} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Promesse / Checklist */}
        <section className="section bg-ivory-300">
          <div className="container-premium">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="lg:col-span-6"
              >
                <span className="eyebrow">Engagements zone</span>
                <h2 className="mt-5 font-display text-display-lg tracking-tightest text-balance">
                  Un niveau de service<br />
                  <span className="italic text-corail-600 font-normal">identique partout.</span>
                </h2>
                <p className="mt-6 text-espresso-500 leading-relaxed text-[17px]">
                  Que vous soyez à Magny-en-Vexin, à Pontoise ou à Saint-Germain-en-Laye,
                  la méthode et le niveau d&apos;exigence restent les mêmes. Seuls le délai
                  d&apos;intervention et la typologie du bâti varient.
                </p>
              </motion.div>

              <motion.ul
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="lg:col-span-6 space-y-4"
              >
                {[
                  'Déplacement gratuit pour devis dans tout le Val-d\'Oise et les Yvelines',
                  'Délai de devis garanti sous 24h après visite du chantier',
                  'Peintures professionnelles Tollens & Sikkens pour toutes les villes',
                  'CAP Peintre + RC Pro — couverture légale identique en 95, 78, 27 et 60',
                  'Application manuelle ou airless selon le support, pas de bâclage',
                  'Protection des meubles et sols, évacuation des déchets incluse',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 bg-ivory rounded-2xl border border-border/60 p-5">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-corail-500 grid place-items-center">
                      <Check size={14} className="text-ivory" strokeWidth={3} />
                    </span>
                    <span className="text-[15px] text-espresso-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>
        </section>

        <FAQ
          eyebrow="Questions fréquentes"
          title="FAQ — Val-d'Oise & Yvelines"
          items={ZONES_FAQ}
        />
        <CTA />
      </Layout>
    </>
  );
}
