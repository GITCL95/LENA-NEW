import type { CityPageContent } from './cities';

export type FAQItem = {
  q: string;
  a: string;
};

export const HOME_FAQ: FAQItem[] = [
  {
    q: "Léna Rénove est-elle assurée RC Pro ?",
    a: "Oui. Léna Rénove est couverte par une Responsabilité Civile Professionnelle. Léna Renaud est titulaire du CAP Peintre en Bâtiment, garantissant un travail conforme aux normes du métier.",
  },
  {
    q: "Intervenez-vous en dehors de Vétheuil ?",
    a: "Oui, dans tout le Val-d'Oise (95) et les Yvelines (78) : Pontoise, Cergy, Marines, Chars...",
  },
  {
    q: "Quelles marques de peinture utilisez-vous ?",
    a: "Léna Rénove travaille exclusivement avec des peintures professionnelles Tollens et Sikkens, réputées pour leur durabilité, leur couverture et la richesse de leurs teintes.",
  },
  {
    q: "Posez-vous du papier peint panoramique ?",
    a: "Oui, Léna Rénove maîtrise la pose de papiers peints intissés, panoramiques, toile de verre et voiles de rénovation. Chaque pose est préparée avec soin pour un rendu parfait.",
  },
];

export function getCityQuestions({ name, neighbourhoods }: CityPageContent): FAQItem[] {
  const areas = new Intl.ListFormat('fr').format(neighbourhoods.map((area) => area.name));

  return [
    {
      q: 'Quelles informations donner pour demander un devis ?',
      a: 'Indiquez votre quartier, les travaux souhaités, la surface approximative et l’état des supports. Précisez votre délai si vous en avez un.',
    },
    {
      q: 'Qu’est-ce qui fait varier le prix des travaux ?',
      a: 'Le prix dépend de la surface, de l’état des supports et de la finition choisie. En peinture, le nombre de couches compte aussi.',
    },
    {
      q: `Dans quels quartiers intervenez-vous à ${name} ?`,
      a: `Parmi les secteurs desservis figurent ${areas}.`,
    },
    {
      q: 'Le devis est-il gratuit ?',
      a: 'Oui, le devis est gratuit. Si le projet nécessite une visite, le devis est envoyé sous 24 h après le rendez-vous.',
    },
  ];
}
