export type Testimonial = {
  name: string;
  location: string;
  project: string;
  quote: string;
  rating: 5;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Claire Martin',
    location: 'Pontoise',
    project: 'Rénovation complète appartement 4 pièces',
    quote: 'Léna a entièrement refait la peinture de notre appartement à Pontoise. Travail soigné, respect des délais, conseils précieux sur les couleurs. Je recommande sans hésitation — le résultat dépasse nos attentes !',
    rating: 5,
  },
  {
    name: 'Marc Legrand',
    location: 'Cergy',
    project: 'Pose papier peint panoramique salon',
    quote: 'Pose impeccable d\'un panoramique dans notre salon. Précision du raccord, rigueur sur la préparation — rien à redire. On sent la passion du métier.',
    rating: 5,
  },
  {
    name: 'Sophie Dubois',
    location: 'Saint-Germain-en-Laye',
    project: 'Relooking cuisine vinyle adhésif',
    quote: 'Ma cuisine a été totalement transformée en 2 jours. Résultat bluffant pour un budget raisonnable. Léna est à l\'écoute et force de proposition sur les finitions.',
    rating: 5,
  },
];
