export type City = {
  name: string;
  slug: string;
  href: string;
  postalCode: string;
  distance: string;
  department: string;
  priority: 1 | 2 | 3;
};

export const CITIES: City[] = [
  { name: 'Pontoise', slug: 'pontoise', href: '/peintre-pontoise.html', postalCode: '95000', distance: '30 min', department: '95', priority: 1 },
  { name: 'Cergy', slug: 'cergy', href: '/peintre-cergy.html', postalCode: '95000', distance: '30 min', department: '95', priority: 1 },
  { name: 'Saint-Germain-en-Laye', slug: 'saint-germain-en-laye', href: '/peintre-saint-germain-en-laye.html', postalCode: '78100', distance: '40 min', department: '78', priority: 1 },
  { name: 'Conflans-Sainte-Honorine', slug: 'conflans-sainte-honorine', href: '/peintre-conflans-sainte-honorine.html', postalCode: '78700', distance: '35 min', department: '78', priority: 2 },
  { name: "L'Isle-Adam", slug: 'l-isle-adam', href: '/peintre-l-isle-adam.html', postalCode: '95290', distance: '25 min', department: '95', priority: 2 },
  { name: 'Gisors', slug: 'gisors', href: '/peintre-gisors.html', postalCode: '27140', distance: '15 min', department: '27', priority: 2 },
  { name: 'Beaumont-sur-Oise', slug: 'beaumont-sur-oise', href: '/peintre-beaumont-sur-oise.html', postalCode: '95260', distance: '25 min', department: '95', priority: 2 },
  { name: 'Marines', slug: 'marines-95', href: '/peintre-marines-95.html', postalCode: '95640', distance: '10 min', department: '95', priority: 3 },
  { name: 'Chars', slug: 'chars-95', href: '/peintre-chars-95.html', postalCode: '95750', distance: '12 min', department: '95', priority: 3 },
  { name: 'Chaumont-en-Vexin', slug: 'chaumont-en-vexin', href: '/peintre-chaumont-en-vexin.html', postalCode: '60240', distance: '15 min', department: '60', priority: 3 },
];
