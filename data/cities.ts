import { PONTOISE_PATH } from './client';

type CityPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type CityProject = {
  title: string;
  heading: string;
  emphasis?: string;
  description: string;
  service: string;
  photo: CityPhoto;
  detailPhoto?: CityPhoto & {
    caption: string;
    crop?: { width: number; left: number; translateY: number };
  };
};

export type City = {
  name: string;
  slug: string;
  href: string;
  postalCode: string;
  distance: string;
  department: string;
  departmentName: string;
  population: string;
  priority: 1 | 2 | 3;
  description: string;
  neighbourhoodIntro: string;
  neighbourhoods: { name: string; detail?: string }[];
  planningQuestion: { q: string; a: string };
  project?: CityProject;
  optimizedImages?: boolean;
  keyword: string;
  secondaryKeywords: string[];
  title: string;
  metaDescription: string;
  landmarks: string;
};

export type CityPageContent = Pick<City,
  'name' | 'slug' | 'href' | 'postalCode' | 'title' | 'metaDescription'
  | 'neighbourhoodIntro' | 'neighbourhoods' | 'planningQuestion' | 'project' | 'optimizedImages'
>;

const pontoiseSalon: CityPhoto = {
  src: '/assets/img/projet-renov-3.jpg',
  alt: 'Salon rénové avec des murs bleu-gris, des boiseries blanches et du parquet clair',
  width: 608,
  height: 750,
};

export const PONTOISE = {
  name: 'Pontoise',
  slug: 'pontoise',
  href: PONTOISE_PATH,
  postalCode: '95000',
  distance: '35 min',
  department: '95',
  departmentName: 'Val-d\'Oise',
  population: '30 000 hab.',
  priority: 1,
  description:
    "Peinture intérieure, enduits et revêtements décoratifs à Pontoise, du centre historique aux Louvrais et à Marcouville.",
  neighbourhoodIntro: 'Pour rénover un logement à Pontoise, indiquez les finitions à conserver. Dans un intérieur ancien, les boiseries, les moulures et les soubassements peuvent demander une préparation différente de celle des murs.',
  neighbourhoods: [
    { name: 'Centre historique', detail: 'Précisez si les moulures, plinthes ou soubassements sont à repeindre.' },
    { name: 'Les Louvrais', detail: 'Pour un appartement, indiquez l’étage et les conditions d’accès.' },
    { name: 'Marcouville', detail: 'Si le logement reste occupé, indiquez les pièces à traiter en priorité.' },
  ],
  planningQuestion: {
    q: 'Peut-on repeindre les boiseries en même temps que les murs ?',
    a: 'Oui. Lors de la visite, Léna examine séparément les boiseries et les murs. Le devis détaille la préparation et la finition de chaque support.',
  },
  project: {
    title: 'Peinture d’un salon',
    heading: 'Un salon',
    emphasis: 'bleu-gris.',
    description: 'La peinture bleu-gris fait ressortir les boiseries blanches et le parquet clair du salon.',
    service: 'Peinture intérieure',
    photo: pontoiseSalon,
    detailPhoto: {
      ...pontoiseSalon,
      alt: 'Détail du soubassement blanc sous un mur bleu-gris',
      caption: 'Détail des boiseries du salon présenté en ouverture.',
      crop: { width: 162, left: -3, translateY: -50.5 },
    },
  },
  keyword: 'peintre pontoise',
  secondaryKeywords: ['peinture intérieure pontoise', 'travaux de ratissage pontoise', 'pose de tapisserie pontoise', 'peinture de boiseries pontoise'],
  title: 'Artisane peintre à Pontoise (95) · Léna Rénove',
  metaDescription: 'Peinture intérieure à Pontoise, du centre historique à Marcouville et aux Louvrais. Découvrez les finitions d’un salon peint sur place et demandez un devis.',
  landmarks: 'Cathédrale Saint-Maclou, Musée Tavet-Delacour, centre médiéval',
} satisfies City;

export const CITIES: City[] = [
  PONTOISE,
  {
    name: 'Cergy',
    slug: 'cergy',
    href: '/peintre-cergy',
    optimizedImages: true,
    postalCode: '95000 / 95800',
    distance: '30 min',
    department: '95',
    departmentName: 'Val-d\'Oise',
    population: '65 000 hab.',
    priority: 1,
    description:
      "Ville pôle de l'agglomération de Cergy-Pontoise, Cergy offre un mélange unique d'architecture moderne et de quartiers pavillonnaires. De Cergy-Préfecture à Cergy-Saint-Christophe en passant par Cergy-le-Haut, Léna Rénove rénove appartements, maisons et locaux professionnels avec une exigence constante de finition.",
    neighbourhoodIntro: 'À Cergy, vous pouvez demander de repeindre une pièce ou de rafraîchir un logement entier. Pour préparer la visite d’un appartement, indiquez si le logement est vide ou meublé et comment accéder à l’immeuble.',
    neighbourhoods: [
      { name: 'Grand Centre (Cergy-Préfecture)', detail: 'Indiquez l’étage et si un ascenseur est disponible.' },
      { name: 'Axe Majeur–Horloge (Saint-Christophe)', detail: 'Pour un mur d’accent, précisez la surface et la finition souhaitée.' },
      { name: 'Hauts-de-Cergy', detail: 'Si le logement est vide avant emménagement, communiquez la date de remise des clés.' },
      { name: 'Cergy-Village', detail: 'Signalez les boiseries ou corniches à protéger ou à repeindre.' },
    ],
    planningQuestion: {
      q: 'Puis-je demander un devis avant d’emménager dans mon appartement à Cergy ?',
      a: 'Oui. Précisez la date de remise des clés, les pièces à repeindre et le moment où le logement sera accessible pour la visite.',
    },
    keyword: 'peintre cergy',
    secondaryKeywords: ['peintre cergy 95', 'peinture plafond cergy', 'peintre intérieur cergy', 'artisan peintre cergy'],
    title: 'Artisane peintre à Cergy (95) · Léna Rénove',
    metaDescription: 'Peinture d’appartement ou de maison à Cergy, de la Préfecture aux Hauts-de-Cergy. Préparez le rafraîchissement de votre logement avec Léna Rénove.',
    landmarks: 'Axe Majeur, La Villarceaux, Parc François-Mitterrand',
  },
  {
    name: 'Gisors',
    slug: 'gisors',
    href: '/peintre-gisors',
    postalCode: '27140',
    distance: '35 min',
    department: '27',
    departmentName: 'Eure',
    population: '12 000 hab.',
    priority: 2,
    description:
      "Porte du Vexin Normand, Gisors offre un mélange unique de patrimoine médiéval et d'habitat moderne. À seulement 35 minutes de Vétheuil, Léna Rénove intervient rapidement dans toute la ville pour vos projets de peinture, enduit, papier peint et relooking.",
    neighbourhoodIntro: 'À Gisors, Léna intervient dans le centre, près de la gare et au Boisgeloup. Si plusieurs revêtements se superposent, précisez ce que vous souhaitez garder et envoyez une photo de l’état actuel du mur.',
    neighbourhoods: [
      { name: 'Centre historique', detail: 'Indiquez si les murs portent une ancienne peinture ou un papier peint.' },
      { name: 'Quartier de la gare', detail: 'Pour rafraîchir plusieurs pièces, listez les plafonds et les boiseries à inclure.' },
      { name: 'Hameau du Boisgeloup', detail: 'Si la pièce comporte des poutres apparentes, indiquez celles à conserver.' },
    ],
    planningQuestion: {
      q: 'Que prévoit le devis si les murs sont déjà tapissés ?',
      a: 'Signalez les lés décollés et les fissures visibles. Léna vérifie l’état du support sous le revêtement et détaille les reprises nécessaires avant la finition.',
    },
    keyword: 'peintre gisors',
    secondaryKeywords: ['peinture intérieure gisors', 'artisan peintre gisors', 'peintre 27140'],
    title: 'Artisane peintre à Gisors (27) · Léna Rénove',
    metaDescription: 'Rénovez vos murs à Gisors, du centre historique au Boisgeloup. Léna Rénove vous accompagne de la préparation des supports à la peinture ou au papier peint.',
    landmarks: 'Château fort de Gisors, Église Saint-Gervais-Saint-Protais',
  },
  {
    name: 'Marines',
    slug: 'marines-95',
    href: '/peintre-marines-95',
    postalCode: '95640',
    distance: '30 min',
    department: '95',
    departmentName: 'Val-d\'Oise',
    population: '4 000 hab.',
    priority: 3,
    description:
      "À seulement 30 minutes de Vétheuil, Marines bénéficie d'une intervention rapide de Léna Rénove. Maisons anciennes du Vexin, pavillons récents et corps de ferme rénovés — chaque typologie est traitée avec des techniques adaptées et des peintures professionnelles Tollens & Sikkens.",
    neighbourhoodIntro: 'Léna se déplace à Marines, du centre-bourg aux Hautiers. Si votre maison mêle plâtre, bois et pierre, précisez les surfaces à repeindre et les éléments que vous souhaitez laisser apparents.',
    neighbourhoods: [
      { name: 'Centre-bourg', detail: 'Pour un séjour, précisez si vous souhaitez repeindre aussi le plafond ou les portes.' },
      { name: 'Hameau des Hautiers', detail: 'Photographiez la jonction entre un enduit ancien et les éléments en pierre à conserver.' },
    ],
    planningQuestion: {
      q: 'Comment préparer la rénovation d’un mur partiellement en pierre ?',
      a: 'Indiquez les parties qui doivent rester apparentes. Léna examine l’état de l’enduit à reprendre et délimite les surfaces qui seront peintes.',
    },
    keyword: 'peintre marines 95',
    secondaryKeywords: ['peinture marines val d\'oise', 'rénovation intérieure marines', 'peintre 95640'],
    title: 'Artisane peintre à Marines (95) · Léna Rénove',
    metaDescription: 'Travaux de peinture, d’enduits et de décoration à Marines, du centre-bourg au hameau des Hautiers. Parlez de votre projet à Léna Rénove.',
    landmarks: 'Église Saint-Rémi, Château des Lévis-Mirepoix',
  },
  {
    name: 'Chars',
    slug: 'chars-95',
    href: '/chars-95',
    postalCode: '95750',
    distance: '30 min',
    department: '95',
    departmentName: 'Val-d\'Oise',
    population: '2 000 hab.',
    priority: 3,
    description:
      "Village de caractère au cœur du Vexin français, Chars mêle maisons en pierre, bâtiments agricoles reconvertis et habitat pavillonnaire. Léna Rénove intervient dans toute la commune pour vos travaux de peinture, ratissage, pose de papier peint ou vinyle adhésif.",
    neighbourhoodIntro: 'À Chars, Léna intervient dans le village et autour de la gare. Pour un plafond haut ou un escalier, indiquez la hauteur et ajoutez une vue d’ensemble pour préparer la visite.',
    neighbourhoods: [
      { name: 'Centre du village', detail: 'Si la pièce a des murs anciens ou irréguliers, signalez les fissures et les zones qui s’écaillent.' },
      { name: 'Secteur de la gare', detail: 'Pour un logement en rénovation, précisez quelles pièces sont déjà accessibles.' },
    ],
    planningQuestion: {
      q: 'Quelles photos envoyer pour faire repeindre une cage d’escalier ?',
      a: 'Photographiez l’escalier depuis le bas et le palier, ainsi que les murs et le plafond. Indiquez la hauteur approximative et les boiseries à inclure dans le devis.',
    },
    keyword: 'peintre chars 95',
    secondaryKeywords: ['peinture intérieure chars', 'artisan peintre chars val d\'oise', 'peintre 95750'],
    title: 'Artisane peintre à Chars (95) · Léna Rénove',
    metaDescription: 'Peinture intérieure et enduits à Chars (95750), du centre du village au secteur de la gare. Préparez votre projet de rénovation avec Léna Rénove.',
    landmarks: 'Église Saint-Sulpice, vallée de la Viosne',
  },
  {
    name: 'Chaumont-en-Vexin',
    slug: 'chaumont-en-vexin',
    href: '/peintre-chaumont-en-vexin',
    optimizedImages: true,
    postalCode: '60240',
    distance: '45 min',
    department: '60',
    departmentName: 'Oise',
    population: '3 500 hab.',
    priority: 3,
    description:
      'Peinture intérieure et revêtements décoratifs à Chaumont-en-Vexin, du centre-ville au secteur de la gare.',
    neighbourhoodIntro: 'Du centre-ville au secteur de la gare, Léna prépare et décore les murs de votre logement à Chaumont-en-Vexin. Si vous envisagez un papier peint panoramique, indiquez le mur choisi et l’emplacement des portes ou des fenêtres.',
    neighbourhoods: [
      { name: 'Centre-ville', detail: 'Autour de la place de la Foulerie, précisez si le mur doit être lissé avant la finition.' },
      { name: 'Secteur de la gare', detail: 'Pour un décor panoramique, notez la largeur du mur et la hauteur sous plafond.' },
    ],
    planningQuestion: {
      q: 'Faut-il acheter le papier peint panoramique avant la visite ?',
      a: 'Si vous avez repéré un motif, envoyez sa référence. Les mesures du mur et la position du motif autour des ouvertures permettent de choisir le bon format avant de commander.',
    },
    keyword: 'peintre chaumont en vexin',
    secondaryKeywords: ['peinture intérieure chaumont en vexin', 'artisan peintre vexin', 'peintre 60240'],
    title: 'Artisane peintre à Chaumont-en-Vexin (60) · Léna Rénove',
    metaDescription: 'Peinture intérieure, lissage des murs et papier peint à Chaumont-en-Vexin, du centre-ville au secteur de la gare. Demandez un devis à Léna Rénove.',
    landmarks: 'Collégiale Saint-Jean-Baptiste, lavoir ancien',
  },
];
