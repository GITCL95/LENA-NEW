import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Instagram, ArrowRight } from 'lucide-react';
import SEO from '@components/layout/SEO';
import Layout from '@components/layout/Layout';
import CTA from '@components/sections/CTA';
import { CLIENT, SITE_URL } from '@data/client';
import { buildWebPageSchema, buildBreadcrumbSchema } from '@data/schemas';

type Category = 'all' | 'cabinet-medical' | 'chambre' | 'escalier' | 'cuisine-bain' | 'wc';

const PROJECTS = [
  // 1. Cabinet Médical
  {
    src: '/assets/img/realisations/cabinet-medical-fresque/cabinet-medical-fresque-1.webp',
    alt: "Création d'une fresque murale artistique dans un cabinet médical (détail)",
    category: 'cabinet-medical',
    location: 'Pontoise'
  },
  {
    src: '/assets/img/realisations/cabinet-medical-fresque/cabinet-medical-fresque-2.webp',
    alt: "Fresque murale personnalisée pour la salle d'attente d'un cabinet médical",
    category: 'cabinet-medical',
    location: 'Pontoise'
  },
  {
    src: '/assets/img/realisations/inauguration-cabinet-medical/inauguration-cabinet-medical-1.webp',
    alt: "Inauguration du cabinet médical après la réalisation de la fresque",
    category: 'cabinet-medical',
    location: 'Pontoise'
  },

  // 2. WC
  {
    src: '/assets/img/realisations/decoration-wc/decoration-wc-1.webp',
    alt: "Décoration des WC - Pose de papier peint à motifs géométriques",
    category: 'wc',
    location: 'Cergy'
  },
  {
    src: '/assets/img/realisations/decoration-wc/decoration-wc-2.webp',
    alt: "Décoration des WC - Finition peinture et harmonie des couleurs",
    category: 'wc',
    location: 'Cergy'
  },

  // 3. Escaliers
  {
    src: '/assets/img/realisations/entretien-cage-escalier/entretien-cage-escalier-1.webp',
    alt: "Entretien d'une cage d'escalier - Préparation et mise en peinture des murs",
    category: 'escalier',
    location: 'Conflans-Sainte-Honorine'
  },
  {
    src: '/assets/img/realisations/entretien-cage-escalier/entretien-cage-escalier-2.webp',
    alt: "Mise en peinture blanche et finitions soignées de la cage d'escalier",
    category: 'escalier',
    location: 'Conflans-Sainte-Honorine'
  },
  {
    src: '/assets/img/realisations/entretien-cage-escalier/entretien-cage-escalier-3.webp',
    alt: "Cage d'escalier rénovée - Luminosité et propreté retrouvées",
    category: 'escalier',
    location: 'Conflans-Sainte-Honorine'
  },
  {
    src: '/assets/img/realisations/renovation-escalier-magistral/renovation-escalier-magistral-1.webp',
    alt: "Rénovation d'un accent d'escalier magistral - Ponçage et préparation du bois",
    category: 'escalier',
    location: 'Saint-Germain-en-Laye'
  },
  {
    src: '/assets/img/realisations/renovation-escalier-magistral/renovation-escalier-magistral-2.webp',
    alt: "Mise en peinture bicolore de l'escalier magistral",
    category: 'escalier',
    location: 'Saint-Germain-en-Laye'
  },
  {
    src: '/assets/img/realisations/renovation-escalier-magistral/renovation-escalier-magistral-3.webp',
    alt: "Finitions de peinture sur les marches et contremarches",
    category: 'escalier',
    location: 'Saint-Germain-en-Laye'
  },
  {
    src: '/assets/img/realisations/renovation-escalier-magistral/renovation-escalier-magistral-4.webp',
    alt: "Escalier magistral rénové - Rendu élégant et moderne",
    category: 'escalier',
    location: 'Saint-Germain-en-Laye'
  },

  // 4. Cuisine & Bain
  {
    src: '/assets/img/realisations/modification-chambre-sdb/modification-chambre-sdb-1.webp',
    alt: "Transformation d'une chambre en salle de bain - Douche à l'italienne",
    category: 'cuisine-bain',
    location: 'Herblay'
  },
  {
    src: '/assets/img/realisations/modification-chambre-sdb/modification-chambre-sdb-2.webp',
    alt: "Rénovation de salle de bain - Pose de faïence et peinture résistante à l'humidité",
    category: 'cuisine-bain',
    location: 'Herblay'
  },
  {
    src: '/assets/img/realisations/modification-chambre-sdb/modification-chambre-sdb-3.webp',
    alt: "Transformation de chambre en salle de bain - Aménagement et peinture",
    category: 'cuisine-bain',
    location: 'Herblay'
  },
  {
    src: '/assets/img/realisations/modification-chambre-sdb/modification-chambre-sdb-4.webp',
    alt: "Finitions de la nouvelle salle de bain - Peinture et décoration",
    category: 'cuisine-bain',
    location: 'Herblay'
  },
  {
    src: '/assets/img/realisations/beton-cire-cuisine/beton-cire-cuisine-1.webp',
    alt: "Application de béton ciré sur le plan de travail de cuisine",
    category: 'cuisine-bain',
    location: 'L\'Isle-Adam'
  },
  {
    src: '/assets/img/realisations/beton-cire-cuisine/beton-cire-cuisine-2.webp',
    alt: "Béton ciré de cuisine - Détail du lissage de l'enduit",
    category: 'cuisine-bain',
    location: 'L\'Isle-Adam'
  },
  {
    src: '/assets/img/realisations/beton-cire-cuisine/beton-cire-cuisine-3.webp',
    alt: "Plan de travail en béton ciré - Finition protectrice hydrofuge",
    category: 'cuisine-bain',
    location: 'L\'Isle-Adam'
  },
  {
    src: '/assets/img/realisations/beton-cire-cuisine/beton-cire-cuisine-4.webp',
    alt: "Mise en peinture des meubles et portes de cuisine",
    category: 'cuisine-bain',
    location: 'L\'Isle-Adam'
  },
  {
    src: '/assets/img/realisations/beton-cire-cuisine/beton-cire-cuisine-5.webp',
    alt: "Entretien et rénovation de cuisine - Rendu final du plan de travail et des meubles",
    category: 'cuisine-bain',
    location: 'L\'Isle-Adam'
  },
  {
    src: '/assets/img/realisations/beton-cire-cuisine/beton-cire-cuisine-6.webp',
    alt: "Rénovation de cuisine - Préparation des surfaces avant peinture",
    category: 'cuisine-bain',
    location: 'L\'Isle-Adam'
  },
  {
    src: '/assets/img/realisations/beton-cire-cuisine/beton-cire-cuisine-7.webp',
    alt: "Application de la peinture de finition sur les façades de cuisine",
    category: 'cuisine-bain',
    location: 'L\'Isle-Adam'
  },
  {
    src: '/assets/img/realisations/beton-cire-cuisine/beton-cire-cuisine-8.webp',
    alt: "Détail de finition sur le béton ciré et jonction crédence",
    category: 'cuisine-bain',
    location: 'L\'Isle-Adam'
  },

  // 5. Chambres
  {
    src: '/assets/img/realisations/papier-peint-panoramique-lit/papier-peint-panoramique-lit-1.webp',
    alt: "Pose de papier peint panoramique moderne en tête de lit",
    category: 'chambre',
    location: 'Magny-en-Vexin'
  },
  {
    src: '/assets/img/realisations/renovation-master-bedroom/renovation-master-bedroom-1.webp',
    alt: "Rénovation de la chambre parentale - Peinture murale raffinée",
    category: 'chambre',
    location: 'Enghien-les-Bains'
  },
  {
    src: '/assets/img/realisations/renovation-master-bedroom/renovation-master-bedroom-2.webp',
    alt: "Pose de papier peint panoramique floral en tête de lit",
    category: 'chambre',
    location: 'Enghien-les-Bains'
  },
  {
    src: '/assets/img/realisations/renovation-master-bedroom/renovation-master-bedroom-3.webp',
    alt: "Rénovation master bedroom - Association de la peinture et du papier peint",
    category: 'chambre',
    location: 'Enghien-les-Bains'
  },
  {
    src: '/assets/img/realisations/renovation-master-bedroom/renovation-master-bedroom-4.webp',
    alt: "Master bedroom - Zoom sur la pose parfaite du lé de papier peint",
    category: 'chambre',
    location: 'Enghien-les-Bains'
  },
  {
    src: '/assets/img/realisations/renovation-master-bedroom/renovation-master-bedroom-5.webp',
    alt: "Rénovation de la suite parentale - Préparation minutieuse des supports",
    category: 'chambre',
    location: 'Enghien-les-Bains'
  },
  {
    src: '/assets/img/realisations/renovation-master-bedroom/renovation-master-bedroom-6.webp',
    alt: "Chambre parentale rénovée - Ambiance douce et lumineuse",
    category: 'chambre',
    location: 'Enghien-les-Bains'
  },
  {
    src: '/assets/img/realisations/renovation-chambre-chapelle/renovation-chambre-chapelle-1.webp',
    alt: "Rénovation de la chambre chapelle - Peinture et décoration",
    category: 'chambre',
    location: 'Marines'
  }
];

const FILTERS: { id: Category; label: string }[] = [
  { id: 'all', label: 'Tous les projets' },
  { id: 'cabinet-medical', label: 'Cabinet médical' },
  { id: 'chambre', label: 'Chambres' },
  { id: 'escalier', label: 'Escaliers' },
  { id: 'cuisine-bain', label: 'Cuisine & Bain' },
  { id: 'wc', label: 'WC' },
];

export default function Portfolio() {
  const [filter, setFilter] = useState<Category>('all');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const title = 'Portfolio · Réalisations peinture · Léna Rénove';
  const description = 'Découvrez les réalisations de Léna Rénove, artisan peintre dans le Val-d\'Oise. Peinture, papier peint, enduits et vinyle adhésif en images.';

  const jsonLd = [
    buildWebPageSchema({ path: '/portfolio.html', title, description }),
    buildBreadcrumbSchema([
      { name: 'Accueil', url: `${SITE_URL}/` },
      { name: 'Portfolio', url: `${SITE_URL}/portfolio.html` },
    ]),
  ];

  return (
    <>
      <SEO title={title} description={description} path="/portfolio.html" jsonLd={jsonLd} />
      <Layout>
        {/* Hero */}
        <section className="relative pt-44 pb-20 md:pt-52 md:pb-24 bg-espresso-800 text-ivory overflow-hidden">
          <div className="absolute inset-0 grain-overlay opacity-50" />
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-corail-500/15 rounded-full blur-3xl" />
          <div className="container-premium relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
              className="max-w-4xl"
            >
              <span className="eyebrow !text-corail-300 before:!bg-corail-400">Portfolio</span>
              <h1 className="mt-6 font-display text-display-xl tracking-tightest text-balance">
                Réalisations
                <span className="italic text-corail-300 font-normal"> soignées.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-ivory/75 text-lg leading-relaxed">
                Avant/après, détails de finitions, chantiers en cours. Les projets
                réalisés par Léna Rénove dans le Val-d&apos;Oise et les Yvelines.
              </p>
              <a
                href={CLIENT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-corail-300 hover:text-corail-200 transition"
              >
                <span className="w-10 h-10 rounded-full border border-corail-300/40 grid place-items-center">
                  <Instagram size={16} strokeWidth={1.5} />
                </span>
                Suivre {CLIENT.instagramHandle}
              </a>
            </motion.div>
          </div>
        </section>

        {/* Filters + Grid */}
        <section className="section">
          <div className="container-premium">
            {/* Filters */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-14">
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={
                    'px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.15em] rounded-full border transition-all duration-300 ' +
                    (filter === f.id
                      ? 'bg-espresso-800 border-espresso-800 text-ivory'
                      : 'bg-transparent border-border text-espresso-600 hover:border-espresso-800 hover:text-espresso-800')
                  }
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Masonry grid */}
            <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-5">
              <AnimatePresence>
                {filtered.map((project, i) => (
                  <motion.button
                    key={project.src}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, delay: i * 0.04, ease: [0.19, 1, 0.22, 1] }}
                    onClick={() => setLightbox(PROJECTS.indexOf(project))}
                    className="group relative block w-full mb-5 break-inside-avoid overflow-hidden rounded-2xl bg-ivory-300"
                  >
                    <div className="relative aspect-[3/4]">
                      <Image
                        src={project.src}
                        alt={project.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="transition-transform duration-[1200ms] ease-out-expo group-hover:scale-110"
                        style={{ objectFit: 'cover' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso-800/90 via-espresso-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-x-0 bottom-0 p-6 text-ivory opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-left">
                        <div className="text-[10px] uppercase tracking-[0.25em] text-corail-300 mb-2">
                          {project.location}
                        </div>
                        <div className="font-display text-lg leading-snug">
                          {project.alt}
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightbox(null)}
              className="fixed inset-0 z-[100] bg-espresso-800/95 backdrop-blur-md grid place-items-center p-4 md:p-10 cursor-zoom-out"
            >
              <button
                onClick={() => setLightbox(null)}
                aria-label="Fermer"
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-ivory/10 hover:bg-ivory/20 text-ivory grid place-items-center transition"
              >
                <X size={22} />
              </button>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl aspect-[3/4] md:aspect-[4/5] cursor-default"
              >
                <Image
                  src={PROJECTS[lightbox].src}
                  alt={PROJECTS[lightbox].alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </motion.div>
              <div className="absolute bottom-8 inset-x-0 text-center text-ivory/80">
                <div className="text-[12px] uppercase tracking-[0.25em] text-corail-300 mb-1">
                  {PROJECTS[lightbox].location}
                </div>
                <div className="font-display text-lg">{PROJECTS[lightbox].alt}</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bandeau Instagram */}
        <section className="section-sm bg-ivory-300 border-y border-border/60">
          <div className="container-premium text-center">
            <p className="font-display text-[clamp(24px,3vw,36px)] tracking-tightest text-espresso-800">
              Suivez tous les projets sur{' '}
              <a
                href={CLIENT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="italic text-corail-600 hover:text-corail-700 transition inline-flex items-center gap-2"
              >
                Instagram <ArrowRight size={24} strokeWidth={1.5} />
              </a>
            </p>
            <p className="mt-3 text-[14px] uppercase tracking-[0.25em] text-espresso-400">
              {CLIENT.instagramHandle}
            </p>
            <div className="mt-6">
              <Link href="/contact-peintre-magny-en-vexin.html" className="btn-primary">
                Commencer votre projet
              </Link>
            </div>
          </div>
        </section>

        <CTA />
      </Layout>
    </>
  );
}
