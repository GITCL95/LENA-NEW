export type Service = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  excerpt: string;
  description: string;
  features: string[];
  image: string;
  slug: string;
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
