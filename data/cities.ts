import { PONTOISE_PATH, ZONES_PATH } from './client';

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
  project?: CityProject;
  keyword: string;
  secondaryKeywords: string[];
  title: string;
  metaDescription: string;
  landmarks: string;
};

export type CityPageContent = Pick<City,
  'name' | 'slug' | 'href' | 'postalCode' | 'departmentName' | 'title' | 'metaDescription'
  | 'neighbourhoodIntro' | 'neighbourhoods' | 'project'
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
    "Préfecture du Val-d'Oise, Pontoise mêle patrimoine médiéval et maisons de caractère. Léna Rénove intervient sur tout le centre historique (rue Thiers, rue de Gisors) comme sur les quartiers résidentiels (Les Louvrais, Marcouville) pour vos travaux de peinture intérieure, enduit de ratissage, pose de papier peint et relooking en vinyle adhésif.",
  neighbourhoodIntro: 'Léna Rénove se déplace dans toute la commune, du centre historique aux quartiers résidentiels.',
  neighbourhoods: [
    { name: 'Centre historique', detail: 'Rue Thiers et rue de Gisors' },
    { name: 'Les Louvrais' },
    { name: 'Marcouville' },
  ],
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
  metaDescription: 'Léna Rénove intervient à Pontoise pour vos travaux de peinture intérieure, enduits, papier peint et vinyle adhésif. Devis gratuit sous 24 h après visite.',
  landmarks: 'Cathédrale Saint-Maclou, Musée Tavet-Delacour, centre médiéval',
} satisfies City;

const cityDetails: Omit<City, 'href'>[] = [
  {
    name: 'Cergy',
    slug: 'cergy',
    postalCode: '95000',
    distance: '30 min',
    department: '95',
    departmentName: 'Val-d\'Oise',
    population: '65 000 hab.',
    priority: 1,
    description:
      "Ville pôle de l'agglomération de Cergy-Pontoise, Cergy offre un mélange unique d'architecture moderne et de quartiers pavillonnaires. De Cergy-Préfecture à Cergy-Saint-Christophe en passant par Cergy-le-Haut, Léna Rénove rénove appartements, maisons et locaux professionnels avec une exigence constante de finition.",
    neighbourhoodIntro: 'Léna Rénove intervient dans les appartements et maisons de Cergy, du village aux quartiers autour de la Préfecture.',
    neighbourhoods: [
      { name: 'Cergy-Préfecture' },
      { name: 'Cergy-Saint-Christophe' },
      { name: 'Cergy-le-Haut' },
      { name: 'Cergy-Village' },
    ],
    keyword: 'peintre cergy',
    secondaryKeywords: ['peintre cergy 95', 'peinture plafond cergy', 'peintre intérieur cergy', 'artisan peintre cergy'],
    title: 'Peintre Cergy (95) · Rénovation intérieure · Léna Rénove',
    metaDescription: "Artisan peintre à Cergy (95). Peinture intérieure, enduits, papier peint, vinyle adhésif. Devis gratuit sous 24h. CAP Peintre, RC Pro, Tollens & Sikkens.",
    landmarks: 'Axe Majeur, La Villarceaux, Parc François-Mitterrand',
  },
  {
    name: 'Gisors',
    slug: 'gisors',
    postalCode: '27140',
    distance: '35 min',
    department: '27',
    departmentName: 'Eure',
    population: '12 000 hab.',
    priority: 2,
    description:
      "Porte du Vexin Normand, Gisors offre un mélange unique de patrimoine médiéval et d'habitat moderne. À seulement 35 minutes de Vétheuil, Léna Rénove intervient rapidement dans toute la ville pour vos projets de peinture, enduit, papier peint et relooking.",
    neighbourhoodIntro: 'Léna Rénove intervient dans toute la ville de Gisors, dans le centre historique et les quartiers résidentiels.',
    neighbourhoods: [{ name: 'Centre historique' }, { name: 'La Croix Blanche' }, { name: 'Bois d’Authry' }],
    keyword: 'peintre gisors',
    secondaryKeywords: ['peinture intérieure gisors', 'artisan peintre gisors', 'peintre 27140'],
    title: 'Peintre Gisors (27) · Peinture intérieure · Léna Rénove',
    metaDescription: 'Artisane peintre à Gisors (27140), du centre historique à La Croix Blanche. Peinture intérieure, enduits et papier peint. Devis gratuit après visite.',
    landmarks: 'Château fort de Gisors, Église Saint-Gervais-Saint-Protais',
  },
  {
    name: 'Marines',
    slug: 'marines-95',
    postalCode: '95640',
    distance: '30 min',
    department: '95',
    departmentName: 'Val-d\'Oise',
    population: '4 000 hab.',
    priority: 3,
    description:
      "À seulement 30 minutes de Vétheuil, Marines bénéficie d'une intervention rapide de Léna Rénove. Maisons anciennes du Vexin, pavillons récents et corps de ferme rénovés — chaque typologie est traitée avec des techniques adaptées et des peintures professionnelles Tollens & Sikkens.",
    neighbourhoodIntro: 'À Marines, Léna Rénove intervient dans les maisons anciennes, les pavillons et les corps de ferme rénovés.',
    neighbourhoods: [{ name: 'Centre-bourg' }, { name: 'Hameau de la Hée' }],
    keyword: 'peintre marines 95',
    secondaryKeywords: ['peinture marines val d\'oise', 'rénovation intérieure marines', 'peintre 95640'],
    title: 'Peintre Marines (95) · Vexin · Léna Rénove',
    metaDescription: 'Peinture intérieure, enduits et papier peint à Marines, du centre-bourg au hameau de la Hée. Devis gratuit sous 24 h après visite.',
    landmarks: 'Église Saint-Rémi, Château des Lévis-Mirepoix',
  },
  {
    name: 'Chars',
    slug: 'chars-95',
    postalCode: '95750',
    distance: '30 min',
    department: '95',
    departmentName: 'Val-d\'Oise',
    population: '2 000 hab.',
    priority: 3,
    description:
      "Village de caractère au cœur du Vexin français, Chars mêle maisons en pierre, bâtiments agricoles reconvertis et habitat pavillonnaire. Léna Rénove intervient dans toute la commune pour vos travaux de peinture, ratissage, pose de papier peint ou vinyle adhésif.",
    neighbourhoodIntro: 'Léna Rénove se déplace dans toute la commune de Chars, des maisons en pierre aux pavillons et bâtiments reconvertis.',
    neighbourhoods: [{ name: 'Centre du village' }, { name: 'La Villeneuve-Saint-Martin' }],
    keyword: 'peintre chars 95',
    secondaryKeywords: ['peinture intérieure chars', 'artisan peintre chars val d\'oise', 'peintre 95750'],
    title: 'Peintre Chars (95) · Vexin · Léna Rénove',
    metaDescription: 'Artisane peintre à Chars (95750). Peinture intérieure, enduits et papier peint, du centre du village à La Villeneuve-Saint-Martin.',
    landmarks: 'Église Saint-Sulpice, vallée de la Viosne',
  },
  {
    name: 'Chaumont-en-Vexin',
    slug: 'chaumont-en-vexin',
    postalCode: '60240',
    distance: '45 min',
    department: '60',
    departmentName: 'Oise',
    population: '3 500 hab.',
    priority: 3,
    description:
      "Chaumont-en-Vexin, ville historique de l'Oise, se trouve à la croisée de trois départements (60-95-27). Léna Rénove y propose tous ses services — peinture, enduits, papier peint, vinyle — avec le même niveau d'exigence que sur Vétheuil.",
    neighbourhoodIntro: 'À Chaumont-en-Vexin, Léna Rénove intervient pour la peinture intérieure, les enduits et les revêtements décoratifs.',
    neighbourhoods: [{ name: 'Centre-ville' }, { name: 'La Porte-aux-Saints' }],
    keyword: 'peintre chaumont en vexin',
    secondaryKeywords: ['peinture intérieure chaumont en vexin', 'artisan peintre vexin', 'peintre 60240'],
    title: 'Peintre Chaumont-en-Vexin (60) · Léna Rénove',
    metaDescription: "Artisan peintre à Chaumont-en-Vexin (60). Peinture intérieure, enduits, papier peint, vinyle. Devis gratuit 24h.",
    landmarks: 'Collégiale Saint-Jean-Baptiste, lavoir ancien',
  },
];

export const CITIES: City[] = [
  PONTOISE,
  ...cityDetails.map((city) => ({ ...city, href: `${ZONES_PATH}/${city.slug}` })),
];

export const getCityBySlug = (slug: string) =>
  CITIES.find((city) => city.slug === slug);
