import { CONTACT_PATH } from './client';

export const QUOTE_SERVICES = {
  peinture: 'Peinture intérieure',
  enduits: 'Enduits et ratissage',
  'papier-peint': 'Pose de papier peint',
  vinyle: 'Vinyle adhésif décoratif',
  renovation: 'Rénovation complète',
  exterieur: 'Peinture extérieure',
  autre: 'Autre demande ou conseil',
} as const;

export type QuoteService = keyof typeof QUOTE_SERVICES;

export function serviceQuoteHref(service: QuoteService) {
  return `${CONTACT_PATH}?prestation=${service}#contact`;
}

export const INTERIOR_SERVICES = [
  {
    title: 'Peinture intérieure',
    slug: 'peinture',
    route: 'peinture-interieure',
    unit: 'm²',
    // https://entreprise-sakani.fr/prix-peinture-val-doise-paris/
    // https://boyer-peinture.com/peinture-interieure
    priceRange: '25 à 45 €',
    priceDetail: 'Murs et plafonds, peinture comprise',
    detail: 'Murs, plafonds et boiseries. Finitions mates, satinées ou brillantes.',
    image: 'insta-9.jpg',
    thumbnail: 'thumbnails/insta-9.webp',
  },
  {
    title: 'Enduits de ratissage',
    slug: 'enduits',
    route: 'enduits-ratissage',
    unit: 'm²',
    // https://www.renovation-dany.fr/prix-ratissage-complet/
    priceRange: '25 à 40 €',
    priceDetail: 'Ratissage mural courant, hors peinture',
    detail: 'Rebouchage, lissage et traitement des fissures.',
    image: 'service_thumb_2.jpg',
    thumbnail: 'thumbnails/service_thumb_2.webp',
  },
  {
    title: 'Pose de papier peint',
    slug: 'papier-peint',
    route: 'pose-papier-peint',
    unit: 'm²',
    // https://boyer-peinture.com/papier-peint-revetements-muraux
    priceRange: '15 à 60 €',
    priceDetail: 'Intissé ou panoramique, papier non fourni',
    detail: 'Papiers peints intissés ou panoramiques.',
    image: 'service_thumb_3.jpg',
    thumbnail: 'thumbnails/service_thumb_3.webp',
  },
  {
    title: 'Vinyle adhésif décoratif',
    slug: 'vinyle',
    route: 'vinyle-adhesif-decoratif',
    unit: 'Par cuisine',
    // https://coverwithstyl.fr/pages/renovation-cuisine
    priceRange: '900 à 2 500 €',
    priceDetail: 'Film et pose compris',
    detail: 'Relooking de cuisines, de meubles et de portes.',
    image: 'service_thumb_4.jpg',
    thumbnail: 'thumbnails/service_thumb_4.webp',
  },
] as const;

export type InteriorService = (typeof INTERIOR_SERVICES)[number];

export function serviceHref(service: QuoteService) {
  const detail = INTERIOR_SERVICES.find(({ slug }) => slug === service);
  return detail ? `/${detail.route}` : serviceQuoteHref(service);
}

export type Service = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  excerpt: string;
  description: string;
  features: string[];
  image: string;
  slug: QuoteService;
};

export const SERVICES: Service[] = [
  {
    id: 'peinture-interieure',
    number: '01',
    title: 'Peinture Intérieure',
    shortTitle: 'Peinture',
    excerpt: 'Murs, plafonds, boiseries. Application manuelle et airless. Finitions mate, satinée, brillante.',
    description: 'Préparation des supports, application de peinture acrylique, glycéro ou naturelle. Intervention sur chantiers neufs comme en rénovation complète, avec des peintures professionnelles Tollens & Sikkens pour un rendu durable et esthétique.',
    features: [
      'Peintures Tollens & Sikkens',
      'Application manuelle + airless',
      'Finitions mate, satinée, brillante',
      'Protection des meubles et sols',
    ],
    image: '/assets/img/service_thumb_1.jpg',
    slug: 'peinture',
  },
  {
    id: 'enduits-ratissage',
    number: '02',
    title: 'Enduits & Ratissage',
    shortTitle: 'Enduits',
    excerpt: 'Rebouchage, ratissage, bandes à joint, traitement des fissures. Supports parfaitement prêts.',
    description: 'Rebouchage des trous, ratissage des murs, traitement des fissures, pose de bandes à joint sur placo. Obtention d\'un support parfaitement lisse et prêt à recevoir la finition.',
    features: [
      'Ratissage et enduit de lissage',
      'Traitement des fissures',
      'Bandes à joint placo',
      'Supports prêts peinture',
    ],
    image: '/assets/img/service_thumb_2.jpg',
    slug: 'enduits',
  },
  {
    id: 'papier-peint',
    number: '03',
    title: 'Pose de Papier Peint',
    shortTitle: 'Papier peint',
    excerpt: 'Intissé, panoramique, toile de verre, voile de rénovation. Pose soignée garantie sans raccord visible.',
    description: 'Maîtrise complète de la pose de papiers peints : intissé, panoramique, toile de verre et voile de rénovation. Préparation méticuleuse des murs pour un résultat sans défaut.',
    features: [
      'Intissé et panoramique',
      'Toile de verre & voile',
      'Raccords invisibles',
      'Préparation support incluse',
    ],
    image: '/assets/img/service_thumb_3.jpg',
    slug: 'papier-peint',
  },
  {
    id: 'vinyle-adhesif',
    number: '04',
    title: 'Vinyle Adhésif Décoratif',
    shortTitle: 'Vinyle',
    excerpt: 'Relooking cuisine, meubles, portes, plans de travail. Effets bois, cuir, métal, uni — rendu bluffant.',
    description: 'Transformation cuisine, meubles, portes et plans de travail grâce aux vinyles adhésifs décoratifs. Large choix d\'effets : bois, cuir, métal, uni, sans travaux lourds.',
    features: [
      'Relooking cuisine & meubles',
      'Effets bois, cuir, métal',
      'Sans gros travaux',
      'Résultat longue durée',
    ],
    image: '/assets/img/service_thumb_4.jpg',
    slug: 'vinyle',
  },
];
