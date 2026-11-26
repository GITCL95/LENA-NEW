import { useRef, useState } from 'react';
import Image from 'next/image';
import SEO from '@components/layout/SEO';
import SiteLayout, { Arrow } from '@components/layout/SiteLayout';
import PageHero from '@components/sections/PageHero';
import { CLIENT, PORTFOLIO_PATH, SITE_URL } from '@data/client';
import { buildBreadcrumbSchema, buildWebPageSchema } from '@data/schemas';
import styles from '@/styles/Portfolio.module.css';
import siteStyles from '@/styles/Site.module.css';

const CATEGORIES = {
  'cabinet-medical': 'Cabinet médical',
  chambre: 'Chambres',
  escalier: 'Escaliers',
  'cuisine-bain': 'Cuisine et bain',
  wc: 'WC',
} as const;

type Category = keyof typeof CATEGORIES;
type Photo = { src: string; alt: string };
type Project = {
  anchor?: string;
  title: string;
  category: Category;
  photos: readonly [Photo, ...Photo[]];
  before?: Photo;
  coverPosition?: string;
  wideOnMobile?: boolean;
};

function photo(folder: string, number: number, alt: string): Photo {
  return { src: `/assets/img/realisations/${folder}/${folder}-${number}.webp`, alt };
}

const PROJECTS: readonly Project[] = [
  {
    title: 'Fresque dans une salle d’attente',
    category: 'cabinet-medical',
    before: photo('cabinet-medical-fresque', 1, 'Salle d’attente avant la réalisation de la fresque'),
    photos: [
      photo('cabinet-medical-fresque', 2, 'Salle d’attente après la réalisation de la fresque aux palmiers'),
      photo('inauguration-cabinet-medical', 1, 'Inauguration du cabinet médical devant la fresque'),
    ],
    coverPosition: '42% center',
  },
  {
    anchor: 'papier-peint-panoramique',
    title: 'Papier peint panoramique',
    category: 'chambre',
    photos: [photo('papier-peint-panoramique-lit', 1, 'Chambre avec un papier peint panoramique derrière le lit')],
    coverPosition: 'center 57%',
  },
  {
    title: 'Rénovation d’un escalier',
    category: 'escalier',
    photos: [
      photo('renovation-escalier-magistral', 3, 'Escalier en bois, soubassement gris et rampe en fer forgé'),
      photo('renovation-escalier-magistral', 2, 'Palier et boiseries de la cage d’escalier'),
      photo('renovation-escalier-magistral', 1, 'Vue plongeante de l’escalier et de sa rampe'),
      photo('renovation-escalier-magistral', 4, 'Autre vue de la cage d’escalier'),
    ],
    coverPosition: 'center 58%',
  },
  {
    title: 'Rénovation d’une cuisine',
    category: 'cuisine-bain',
    photos: [
      photo('beton-cire-cuisine', 2, 'Cuisine rénovée avec des meubles bleus et un îlot en bois'),
      photo('beton-cire-cuisine', 1, 'Autre vue des meubles bleus et de la crédence'),
      photo('beton-cire-cuisine', 3, 'Vue de l’îlot et du plan de travail'),
      photo('beton-cire-cuisine', 4, 'Détail des meubles et du plan de travail'),
    ],
    coverPosition: '51% center',
  },
  {
    title: 'Rénovation d’une salle de bain',
    category: 'cuisine-bain',
    photos: [
      photo('modification-chambre-sdb', 2, 'Salle de bain rénovée avec un meuble vasque et une paroi de douche'),
      photo('modification-chambre-sdb', 1, 'Vue de la pièce en cours de transformation'),
      photo('modification-chambre-sdb', 3, 'Autre vue de la pièce en travaux'),
      photo('modification-chambre-sdb', 4, 'Détail de la douche'),
    ],
    coverPosition: 'center 54%',
  },
  {
    title: 'Décoration de WC',
    category: 'wc',
    photos: [
      photo('decoration-wc', 2, 'WC décorés avec un soubassement peint en rouge sombre'),
      photo('decoration-wc', 1, 'WC avant la décoration'),
    ],
    coverPosition: 'center 57%',
  },
  {
    anchor: 'chambre-terracotta',
    title: 'Chambre aux tons terracotta',
    category: 'chambre',
    photos: [
      photo('renovation-master-bedroom', 5, 'Chambre aux murs terracotta et au parquet en bois'),
      photo('renovation-master-bedroom', 6, 'Détail des portes foncées sur les murs terracotta'),
    ],
    coverPosition: 'center 56%',
  },
  {
    title: 'Chambre sous les combles',
    category: 'chambre',
    photos: [photo('renovation-chambre-chapelle', 1, 'Chambre sous les combles avec poutres apparentes et une fenêtre centrale')],
    coverPosition: 'center 55%',
    wideOnMobile: true,
  },
];

const FILTERS = [
  { id: 'all', label: 'Tous les projets' },
  ...(Object.keys(CATEGORIES) as Category[]).map((id) => ({ id, label: CATEGORIES[id] })),
] as const;

const title = 'Réalisations · Les chantiers en images · Léna Rénove';
const description = 'Avant/après et détails de finition des chantiers de Léna Rénove dans le Val-d’Oise et les Yvelines.';
const jsonLd = [
  buildWebPageSchema({ path: PORTFOLIO_PATH, title, description }),
  buildBreadcrumbSchema([
    { name: 'Accueil', url: `${SITE_URL}/` },
    { name: 'Réalisations', url: `${SITE_URL}${PORTFOLIO_PATH}` },
  ]),
];

export default function Portfolio() {
  const [filter, setFilter] = useState<Category | 'all'>('all');
  const [selected, setSelected] = useState<Project | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const projects = filter === 'all' ? PROJECTS : PROJECTS.filter(({ category }) => category === filter);
  const selectedPhotos = selected?.before ? [selected.before, ...selected.photos] : selected?.photos;
  const currentPhoto = selectedPhotos?.[photoIndex];

  function openProject(project: Project) {
    setSelected(project);
    setPhotoIndex(0);
    dialog.current?.showModal();
  }

  function changePhoto(direction: number) {
    const count = selectedPhotos?.length ?? 0;
    if (count > 1) setPhotoIndex((index) => (index + direction + count) % count);
  }

  return (
    <>
      <SEO title={title} description={description} path={PORTFOLIO_PATH} jsonLd={jsonLd} />
      <SiteLayout page="portfolio">
        <PageHero
          id="portfolio-title"
          breadcrumb="Réalisations"
          eyebrow="Réalisations"
          title={<>Les chantiers <em>en images.</em></>}
          description={description}
        />

        <section className={styles.gallery} aria-label="Projets réalisés">
          <div className={siteStyles.container}>
            <div className={styles.filters} role="group" aria-label="Filtrer les projets">
              {FILTERS.map(({ id, label }) => (
                <button
                  key={id}
                  type="button"
                  className={styles.filter}
                  aria-pressed={filter === id}
                  aria-controls="portfolio-projects"
                  onClick={() => setFilter(id)}
                >
                  {label}
                </button>
              ))}
            </div>
            <p className="sr-only" role="status">{projects.length} {projects.length === 1 ? 'projet' : 'projets'}</p>

            <ul id="portfolio-projects" className={styles.projects} role="list">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} onOpen={() => openProject(project)} />
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.instagram} aria-labelledby="instagram-title">
          <div className={`${siteStyles.container} ${styles.instagramInner}`}>
            <h2 id="instagram-title">Plus de chantiers <em>sur Instagram.</em></h2>
            <a href={CLIENT.instagram} target="_blank" rel="noopener noreferrer" className={`${siteStyles.button} ${styles.instagramButton}`}>
              {CLIENT.instagramHandle}
              <Arrow />
            </a>
          </div>
        </section>

        <dialog
          ref={dialog}
          className={styles.lightbox}
          aria-labelledby="project-title"
          data-lenis-prevent
          onClose={() => setSelected(null)}
          onClick={(event) => {
            if (event.target === event.currentTarget) event.currentTarget.close();
          }}
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
              event.preventDefault();
              changePhoto(event.key === 'ArrowLeft' ? -1 : 1);
            }
          }}
        >
          <div className={styles.lightboxContent}>
            <div className={styles.lightboxHeader}>
              <h2 id="project-title">{selected?.title}</h2>
              <button type="button" className={styles.close} aria-label="Fermer" onClick={() => dialog.current?.close()}>×</button>
            </div>
            {currentPhoto && (
              <figure>
                <div className={styles.lightboxPhoto}>
                  <Image src={currentPhoto.src} alt={currentPhoto.alt} fill sizes="90vw" loading="eager" />
                </div>
                <figcaption className={styles.lightboxCaption} aria-live="polite">{currentPhoto.alt}</figcaption>
              </figure>
            )}
            {selectedPhotos && selectedPhotos.length > 1 && (
              <div className={styles.lightboxControls}>
                <button type="button" onClick={() => changePhoto(-1)}>Précédente</button>
                <span>{photoIndex + 1} / {selectedPhotos.length}</span>
                <button type="button" onClick={() => changePhoto(1)}>Suivante</button>
              </div>
            )}
          </div>
        </dialog>
      </SiteLayout>
    </>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const { title, category, photos: [cover], before, wideOnMobile, coverPosition } = project;
  const sizes = `(max-width: 920px) ${wideOnMobile ? '90vw' : '44vw'}, 28vw`;
  const cardClass = before ? styles.featured : wideOnMobile ? styles.wideOnMobile : undefined;

  return (
    <li id={project.anchor} className={cardClass}>
      <button type="button" className={styles.card} aria-haspopup="dialog" aria-label={title} onClick={onOpen}>
        <span className={styles.media}>
          {before ? (
            <>
              <span className={styles.comparisonPhoto}>
                <Image {...before} fill sizes={sizes} style={{ objectPosition: coverPosition }} loading="eager" />
                <span className={styles.beforeLabel}>Avant</span>
              </span>
              <span className={styles.comparisonPhoto}>
                <Image {...cover} fill sizes={sizes} style={{ objectPosition: coverPosition }} loading="eager" />
                <span className={styles.afterLabel}>Après</span>
              </span>
            </>
          ) : (
            <Image {...cover} fill sizes={sizes} style={{ objectPosition: coverPosition }} />
          )}
        </span>
        <span className={styles.caption}>
          <span className={styles.category}>{CATEGORIES[category]}</span>
          <span className={styles.cardTitle}>
            <span>{title}</span>
            {!before && <span className={styles.cardArrow} aria-hidden="true">↗</span>}
          </span>
        </span>
      </button>
    </li>
  );
}
