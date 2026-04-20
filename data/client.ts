export const SITE_URL = 'https://lena-renove.com';

export const CLIENT = {
  brand: 'Léna Rénove',
  owner: 'Léna Renaud',
  tagline: 'Artisan peintre en bâtiment — Magny-en-Vexin, Val-d\'Oise',
  baseline: 'Peinture intérieure, enduits, papier peint, vinyle adhésif',
  phone: '06 71 96 94 00',
  phoneIntl: '+33671969400',
  email: 'l.renove95510@gmail.com',
  address: {
    street: 'Vétheuil',
    locality: 'Vétheuil',
    postalCode: '95510',
    region: 'Île-de-France',
    country: 'FR',
    lat: 49.0839,
    lng: 1.6603,
  },
  siret: '88880825000011',
  rcs: 'RCS Pontoise',
  instagram: 'https://www.instagram.com/lena.renove/',
  instagramHandle: '@lena.renove',
  hours: {
    weekdays: 'Lundi au Vendredi · 8h00 – 18h00',
    saturday: 'Samedi · 9h00 – 12h00',
    sunday: 'Dimanche · Fermé',
  },
  credentials: {
    diploma: 'CAP Peintre en Bâtiment',
    insurance: 'RC Professionnelle',
    experience: 10,
  },
  brands: ['Tollens', 'Sikkens'] as const,
  stats: {
    experience: '10+',
    projects: '500+',
    rating: '5.0',
    reviews: 32,
    deadline: '24h',
  },
} as const;

export const NAV_ROUTES = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/lena-renaud-peintre-magny-en-vexin.html' },
  { label: 'Services', href: '/peinture-interieure-renovation-magny-en-vexin.html' },
  { label: 'Portfolio', href: '/portfolio.html' },
  { label: 'Zones', href: '/peintre-renovation-val-d-oise-yvelines.html' },
  { label: 'Contact', href: '/contact-peintre-magny-en-vexin.html' },
] as const;
