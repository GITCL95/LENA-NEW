export type City = {
  name: string;
  slug: string;
  href: string;
  filePath: string; // slug utilisé pour le routing dynamique
  postalCode: string;
  distance: string;
  department: string;
  departmentName: string;
  population: string;
  priority: 1 | 2 | 3;
  description: string;
  neighbourhoods: string[];
  nearbyCities: string[]; // slugs des villes voisines
  keyword: string;
  secondaryKeywords: string[];
  title: string;
  metaDescription: string;
  h1: string;
  landmarks: string;
};

export const CITIES: City[] = [
  {
    name: 'Pontoise',
    slug: 'pontoise',
    href: '/peintre-pontoise.html',
    filePath: 'peintre-pontoise',
    postalCode: '95000',
    distance: '35 min',
    department: '95',
    departmentName: 'Val-d\'Oise',
    population: '30 000 hab.',
    priority: 1,
    description:
      "Préfecture du Val-d'Oise, Pontoise mêle patrimoine médiéval et maisons de caractère. Léna Rénove intervient sur tout le centre historique (rue Thiers, rue de Gisors) comme sur les quartiers résidentiels (Les Louvrais, Marcouville) pour vos travaux de peinture intérieure, enduit de ratissage, pose de papier peint et relooking en vinyle adhésif.",
    neighbourhoods: ['Centre historique', 'Les Louvrais', 'Marcouville', 'Maradas'],
    nearbyCities: ['cergy', 'marines-95', 'chars-95'],
    keyword: 'peintre pontoise',
    secondaryKeywords: ['peinture intérieure pontoise', 'travaux de ratissage pontoise', 'pose de tapisserie pontoise', 'peinture de boiseries pontoise'],
    title: 'Peintre Pontoise (95) · Peinture intérieure · Léna Rénove',
    metaDescription: "Artisan peintre à Pontoise (95). Peinture intérieure, ratissage, tapisserie, boiseries. Devis gratuit 24h. CAP Peintre, RC Pro. Tollens & Sikkens.",
    h1: 'Peintre à Pontoise',
    landmarks: 'Cathédrale Saint-Maclou, Musée Tavet-Delacour, centre médiéval',
  },
  {
    name: 'Cergy',
    slug: 'cergy',
    href: '/peintre-cergy.html',
    filePath: 'peintre-cergy',
    postalCode: '95000',
    distance: '30 min',
    department: '95',
    departmentName: 'Val-d\'Oise',
    population: '65 000 hab.',
    priority: 1,
    description:
      "Ville pôle de l'agglomération de Cergy-Pontoise, Cergy offre un mélange unique d'architecture moderne et de quartiers pavillonnaires. De Cergy-Préfecture à Cergy-Saint-Christophe en passant par Cergy-le-Haut, Léna Rénove rénove appartements, maisons et locaux professionnels avec une exigence constante de finition.",
    neighbourhoods: ['Cergy-Préfecture', 'Cergy-Saint-Christophe', 'Cergy-le-Haut', 'Cergy-Village'],
    nearbyCities: ['pontoise', 'chars-95', 'marines-95'],
    keyword: 'peintre cergy',
    secondaryKeywords: ['peintre cergy 95', 'peinture plafond cergy', 'peintre intérieur cergy', 'artisan peintre cergy'],
    title: 'Peintre Cergy (95) · Rénovation intérieure · Léna Rénove',
    metaDescription: "Artisan peintre à Cergy (95). Peinture intérieure, enduits, papier peint, vinyle adhésif. Devis gratuit sous 24h. CAP Peintre, RC Pro, Tollens & Sikkens.",
    h1: 'Peintre à Cergy',
    landmarks: 'Axe Majeur, La Villarceaux, Parc François-Mitterrand',
  },
  {
    name: 'Gisors',
    slug: 'gisors',
    href: '/peintre-gisors.html',
    filePath: 'peintre-gisors',
    postalCode: '27140',
    distance: '35 min',
    department: '27',
    departmentName: 'Eure',
    population: '12 000 hab.',
    priority: 2,
    description:
      "Porte du Vexin Normand, Gisors offre un mélange unique de patrimoine médiéval et d'habitat moderne. À seulement 35 minutes de Vétheuil, Léna Rénove intervient rapidement dans toute la ville pour vos projets de peinture, enduit, papier peint et relooking.",
    neighbourhoods: ['Centre historique', 'La Croix Blanche', 'Bois d\'Authry'],
    nearbyCities: ['chaumont-en-vexin', 'chars-95'],
    keyword: 'peintre gisors',
    secondaryKeywords: ['peinture intérieure gisors', 'artisan peintre gisors', 'peintre 27140'],
    title: 'Peintre Gisors (27) · Peinture intérieure · Léna Rénove',
    metaDescription: "Artisan peintre à Gisors (27). 35 min de Vétheuil. Peinture intérieure, enduits, tapisserie, vinyle. Devis gratuit 24h.",
    h1: 'Peintre à Gisors',
    landmarks: 'Château fort de Gisors, Église Saint-Gervais-Saint-Protais',
  },
  {
    name: 'Marines',
    slug: 'marines-95',
    href: '/peintre-marines-95.html',
    filePath: 'peintre-marines-95',
    postalCode: '95640',
    distance: '30 min',
    department: '95',
    departmentName: 'Val-d\'Oise',
    population: '4 000 hab.',
    priority: 3,
    description:
      "À seulement 30 minutes de Vétheuil, Marines bénéficie d'une intervention rapide de Léna Rénove. Maisons anciennes du Vexin, pavillons récents et corps de ferme rénovés — chaque typologie est traitée avec des techniques adaptées et des peintures professionnelles Tollens & Sikkens.",
    neighbourhoods: ['Centre-bourg', 'Hameau de la Hée'],
    nearbyCities: ['chars-95', 'chaumont-en-vexin', 'pontoise'],
    keyword: 'peintre marines 95',
    secondaryKeywords: ['peinture marines val d\'oise', 'rénovation intérieure marines', 'peintre 95640'],
    title: 'Peintre Marines (95) · Vexin · Léna Rénove',
    metaDescription: "Artisan peintre à Marines (95). Intervention en 30 min depuis Vétheuil. Peinture, enduits, papier peint. Devis gratuit 24h.",
    h1: 'Peintre à Marines',
    landmarks: 'Église Saint-Rémi, Château des Lévis-Mirepoix',
  },
  {
    name: 'Chars',
    slug: 'chars-95',
    href: '/peintre-chars-95.html',
    filePath: 'peintre-chars-95',
    postalCode: '95750',
    distance: '30 min',
    department: '95',
    departmentName: 'Val-d\'Oise',
    population: '2 000 hab.',
    priority: 3,
    description:
      "Village de caractère au cœur du Vexin français, Chars mêle maisons en pierre, bâtiments agricoles reconvertis et habitat pavillonnaire. Léna Rénove intervient dans toute la commune pour vos travaux de peinture, ratissage, pose de papier peint ou vinyle adhésif.",
    neighbourhoods: ['Centre du village', 'La Villeneuve-Saint-Martin'],
    nearbyCities: ['marines-95', 'chaumont-en-vexin', 'gisors'],
    keyword: 'peintre chars 95',
    secondaryKeywords: ['peinture intérieure chars', 'artisan peintre chars val d\'oise', 'peintre 95750'],
    title: 'Peintre Chars (95) · Vexin · Léna Rénove',
    metaDescription: "Artisan peintre à Chars (95). Intervention rapide depuis Vétheuil. Peinture, enduits, tapisserie, vinyle. Devis gratuit 24h.",
    h1: 'Peintre à Chars',
    landmarks: 'Église Saint-Sulpice, vallée de la Viosne',
  },
  {
    name: 'Chaumont-en-Vexin',
    slug: 'chaumont-en-vexin',
    href: '/peintre-chaumont-en-vexin.html',
    filePath: 'peintre-chaumont-en-vexin',
    postalCode: '60240',
    distance: '45 min',
    department: '60',
    departmentName: 'Oise',
    population: '3 500 hab.',
    priority: 3,
    description:
      "Chaumont-en-Vexin, ville historique de l'Oise, se trouve à la croisée de trois départements (60-95-27). Léna Rénove y propose tous ses services — peinture, enduits, papier peint, vinyle — avec le même niveau d'exigence que sur Vétheuil.",
    neighbourhoods: ['Centre-ville', 'La Porte-aux-Saints'],
    nearbyCities: ['gisors', 'chars-95', 'marines-95'],
    keyword: 'peintre chaumont en vexin',
    secondaryKeywords: ['peinture intérieure chaumont en vexin', 'artisan peintre vexin', 'peintre 60240'],
    title: 'Peintre Chaumont-en-Vexin (60) · Léna Rénove',
    metaDescription: "Artisan peintre à Chaumont-en-Vexin (60). Peinture intérieure, enduits, papier peint, vinyle. Devis gratuit 24h.",
    h1: 'Peintre à Chaumont-en-Vexin',
    landmarks: 'Collégiale Saint-Jean-Baptiste, lavoir ancien',
  },
];

export const getCityBySlug = (slug: string) =>
  CITIES.find((c) => c.filePath === slug || c.slug === slug);
