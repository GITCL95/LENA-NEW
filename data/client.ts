export const SITE_URL = "https://lena-renove.com";
export const ABOUT_PATH = "/lena-renaud-peintre-magny-en-vexin";
export const CONTACT_PATH = "/contact-peintre-magny-en-vexin";
export const QUOTE_PATH = `${CONTACT_PATH}#contact`;
export const LEGAL_PATH = "/mentions-legales";
export const PORTFOLIO_PATH = "/portfolio";
export const PAINTING_PATH = "/peinture-interieure-renovation-magny-en-vexin";
export const ZONES_PATH = "/peintre-renovation-val-d-oise-yvelines";
export const PONTOISE_PATH = "/peintre-pontoise";

export const CLIENT = {
  brand: "Léna Rénove",
  owner: "Léna Renaud",
  tagline: "Artisan peintre en bâtiment — Vétheuil, Val-d'Oise",
  baseline: "Peinture intérieure, enduits, papier peint, vinyle adhésif",
  phone: "",
  phoneIntl: "",
  email: "l.renove95510@gmail.com",
  address: {
    street: "Vétheuil",
    locality: "Vétheuil",
    postalCode: "95510",
    region: "Île-de-France",
    country: "FR",
    lat: 49.0839,
    lng: 1.6603,
  },
  siret: "88880825000011",
  rcs: "RCS Pontoise",
  instagram: "https://www.instagram.com/lena.renove/",
  instagramHandle: "@lena.renove",
  hours: {
    weekdays: "Lundi au Vendredi · 8h00 – 18h00",
    saturday: "Samedi · Fermé",
    sunday: "Dimanche · Fermé",
  },
  credentials: {
    diploma: "CAP Peintre en Bâtiment",
    insurance: "RC Professionnelle",
    experience: 10,
  },
  brands: ["Tollens", "Sikkens"] as const,
  stats: {
    experience: "10+",
    projects: "500+",
    rating: "5.0",
    reviews: 32,
    deadline: "24h",
  },
} as const;

const navRoutes = {
  home: { label: "Accueil", href: "/", page: "home" },
  about: { label: "À propos", href: ABOUT_PATH, page: "about" },
  painting: { label: "Prestations", href: PAINTING_PATH, page: "painting" },
  portfolio: { label: "Réalisations", href: PORTFOLIO_PATH, page: "portfolio" },
  zones: { label: "Zones", href: ZONES_PATH, page: "zones" },
  contact: { label: "Contact", href: CONTACT_PATH, page: "contact" },
} as const;

export const NAV_ROUTES = [
  navRoutes.painting,
  navRoutes.portfolio,
  navRoutes.about,
  navRoutes.zones,
  navRoutes.contact,
] as const;

export const MOBILE_NAV_ROUTES = [
  navRoutes.home,
  navRoutes.about,
  navRoutes.painting,
  navRoutes.portfolio,
  navRoutes.zones,
  navRoutes.contact,
] as const;
