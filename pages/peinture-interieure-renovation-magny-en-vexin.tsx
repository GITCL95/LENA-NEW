import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Clock, Euro, ShieldCheck } from 'lucide-react';
import SEO from '@components/layout/SEO';
import Layout from '@components/layout/Layout';
import PageHero from '@components/sections/PageHero';
import FAQ from '@components/sections/FAQ';
import CTA from '@components/sections/CTA';
import { SERVICES } from '@data/services';
import { CLIENT, SITE_URL } from '@data/client';
import { buildWebPageSchema, buildBreadcrumbSchema, buildFAQSchema } from '@data/schemas';

const SERVICES_FAQ = [
  {
    q: 'Quel est le prix au m² pour une peinture intérieure à Magny-en-Vexin ?',
    a: 'Entre 25 et 45 €/m² fournitures comprises selon l\'état du support, le nombre de couches et la finition choisie (mate, satinée, brillante). Devis gratuit et détaillé sous 24h après visite.',
  },
  {
    q: 'Pouvez-vous poser un papier peint panoramique professionnel ?',
    a: 'Oui. Léna Rénove maîtrise la pose d\'intissé, de panoramique, de toile de verre et de voiles de rénovation. Chaque raccord est préparé avec soin pour un rendu sans défaut.',
  },
  {
    q: 'Combien de temps dure un chantier de rénovation complète ?',
    a: 'Pour un appartement de 50 m² : 3 à 5 jours. Pour une maison de 100 m² : 7 à 10 jours. Le devis précise le délai d\'exécution exact.',
  },
  {
    q: 'Proposez-vous le relooking de cuisine en vinyle adhésif ?',
    a: 'Oui. Le vinyle adhésif décoratif transforme meubles, portes et plans de travail sans gros travaux. Effets bois, cuir, métal, uni — rendu surprenant et longue durée.',
  },
  {
    q: 'Quelles marques de peinture utilisez-vous ?',
    a: 'Exclusivement Tollens et Sikkens — peintures professionnelles à la durabilité et au pouvoir couvrant supérieurs. Je sélectionne la gamme en fonction du support et de l\'usage.',
  },
];

const PACKAGES = [
  {
    icon: Clock,
    title: 'Intervention rapide',
    text: 'Devis sous 24h. Début de chantier dans les 15 jours selon planning.',
  },
  {
    icon: Euro,
    title: 'Devis transparent',
    text: 'Quantités, matériaux, main-d\'œuvre : tout est détaillé. Pas d\'extras cachés.',
  },
  {
    icon: ShieldCheck,
    title: 'Garantie sérénité',
    text: 'RC Pro active. Chantier net, déchets évacués, SAV assuré en cas de retouche.',
  },
];

export default function Services() {
  const title = 'Peinture intérieure Magny-en-Vexin (95) · Services · Léna Rénove';
  const description =
    "Services de peinture intérieure, enduits de ratissage, pose de papier peint et vinyle adhésif à Magny-en-Vexin. CAP Peintre, RC Pro. Tollens & Sikkens. Devis 24h.";
  const path = '/peinture-interieure-renovation-magny-en-vexin.html';

  const jsonLd = [
    buildWebPageSchema({ path, title, description }),
    buildBreadcrumbSchema([
      { name: 'Accueil', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}${path}` },
    ]),
    buildFAQSchema(SERVICES_FAQ),
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Peinture intérieure et rénovation',
      provider: { '@id': `${SITE_URL}/#business` },
      areaServed: { '@type': 'AdministrativeArea', name: 'Val-d\'Oise' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services de peinture',
        itemListElement: SERVICES.map((s) => ({
          '@type': 'Offer',
          name: s.title,
          description: s.excerpt,
        })),
      },
    },
  ];

  return (
    <>
      <SEO title={title} description={description} path={path} jsonLd={jsonLd} />
      <Layout>
        <PageHero
          eyebrow="Services · Peinture intérieure"
          title={<>Peinture, enduits, papier peint,<br /><span className="italic text-corail-300 font-normal">vinyle adhésif.</span></>}
          description="Quatre expertises complémentaires pour transformer tous types d'intérieurs — appartements, maisons, locaux professionnels. Préparation exigeante, finitions impeccables."
          breadcrumb={[
            { label: 'Accueil', href: '/' },
            { label: 'Services' },
          ]}
        />

        {/* Packages bar */}
        <section className="border-b border-border/60 bg-ivory-300">
          <div className="container-premium">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/70">
              {PACKAGES.map((p) => (
                <div key={p.title} className="py-8 md:py-10 px-6 flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-corail-500 text-ivory grid place-items-center">
                    <p.icon size={18} strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="font-display text-xl text-espresso-800">{p.title}</div>
                    <p className="mt-1 text-[14px] text-espresso-500 leading-relaxed">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service blocks alternés */}
        {SERVICES.map((service, i) => {
          const reverse = i % 2 === 1;
          return (
            <section
              key={service.id}
              id={service.slug}
              className={'section ' + (i % 2 === 1 ? 'bg-ivory-300' : '')}
            >
              <div className="container-premium">
                <div className={'grid lg:grid-cols-12 gap-12 lg:gap-20 items-center ' + (reverse ? 'lg:[&>*:first-child]:order-2' : '')}>
                  <motion.div
                    initial={{ opacity: 0, x: reverse ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                    className="lg:col-span-6 relative"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-4xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -top-6 -left-4 font-display text-[clamp(80px,10vw,160px)] text-corail-500/10 leading-none select-none pointer-events-none">
                      {service.number}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.9, delay: 0.1 }}
                    className="lg:col-span-6"
                  >
                    <span className="eyebrow">Service {service.number} / 04</span>
                    <h2 className="mt-5 font-display text-display-md tracking-tightest text-balance">
                      {service.title}
                    </h2>
                    <p className="mt-6 text-espresso-600 leading-relaxed text-[17px]">
                      {service.description}
                    </p>

                    <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-[15px] text-espresso-700">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-corail-500 grid place-items-center mt-0.5">
                            <Check size={13} className="text-ivory" strokeWidth={3} />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-10 flex flex-wrap gap-4">
                      <Link href="/contact-peintre-magny-en-vexin.html" className="btn-primary">
                        Devis pour ce service
                        <ArrowRight size={16} strokeWidth={2} />
                      </Link>
                      <a href={`tel:${CLIENT.phoneIntl}`} className="btn-outline">
                        {CLIENT.phone}
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          );
        })}

        <FAQ
          eyebrow="Questions fréquentes"
          title="FAQ — Nos services"
          items={SERVICES_FAQ}
        />
        <CTA />
      </Layout>
    </>
  );
}
