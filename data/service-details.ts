import { CLIENT } from './client';
import type { InteriorService } from './services';

type Detail = { title: string; detail: string };
type Photo = { src: string; alt: string; caption: string };

export type ServiceContent = {
  heading: [string, string];
  description: string;
  photo: Photo;
  scopeIntro?: string;
  scope: Detail[];
  finishes?: {
    options: (Detail & { id: 'matte' | 'satin' | 'gloss' })[];
    techniques: string;
  };
  price?: { amount: string; unit: string; note: string; scope?: string };
  priceFactors: string;
  workStep: Detail;
  projects: Photo[];
  faq: { q: string; a: string }[];
};

const assets = '/assets/img';
const terracotta = `${assets}/realisations/renovation-master-bedroom/renovation-master-bedroom`;
const panoramic = `${assets}/realisations/papier-peint-panoramique-lit/papier-peint-panoramique-lit-1.webp`;

export const SERVICE_CONTENT: Record<InteriorService['slug'], ServiceContent> = {
  peinture: {
    heading: ['Peinture', 'intérieure.'],
    description: 'Murs, plafonds et boiseries dans le neuf comme en rénovation. De la préparation des supports à la finition, votre chantier est réalisé par Léna Renaud.',
    photo: {
      src: `${assets}/projet-renov-3.jpg`,
      alt: 'Salon aux murs bleu-gris, soubassements blancs et parquet clair',
      caption: 'Peinture d’un salon à Pontoise',
    },
    scopeIntro: 'Pour les appartements, les maisons et les locaux professionnels, dans le neuf ou en rénovation.',
    scope: [
      { title: 'Murs', detail: 'Selon leur état, les murs sont nettoyés, rebouchés, lissés et poncés avant la mise en peinture.' },
      { title: 'Plafonds', detail: 'Les plafonds sont préparés puis peints après protection des sols et du mobilier.' },
      { title: 'Boiseries', detail: 'Les plinthes, encadrements et autres boiseries intérieures sont préparés et peints avec une finition adaptée.' },
    ],
    finishes: {
      options: [
        { id: 'matte', title: 'Mate', detail: 'Peu de reflets.' },
        { id: 'satin', title: 'Satinée', detail: 'Des reflets doux.' },
        { id: 'gloss', title: 'Brillante', detail: 'Des reflets plus marqués.' },
      ],
      techniques: `Peintures professionnelles ${CLIENT.brands.join(' et ')}, acryliques, glycéro ou naturelles selon le support. Application manuelle ou au pistolet airless, selon la surface à peindre et l’état du support.`,
    },
    price: {
      amount: '25 à 45 €',
      unit: 'au m²',
      note: 'Fourchette indicative, fournitures comprises.',
      scope: 'Murs, plafonds et boiseries',
    },
    priceFactors: 'Le prix dépend de l’état des supports, du nombre de couches et de la finition choisie.',
    workStep: { title: 'Mise en peinture', detail: 'Léna applique le nombre de couches prévu au devis et la finition choisie.' },
    projects: [
      { src: `${terracotta}-5.webp`, alt: 'Chambre aux murs terracotta avec deux fenêtres et un parquet clair', caption: 'Peinture murale dans les tons terracotta' },
      { src: `${terracotta}-6.webp`, alt: 'Deux portes foncées dans un angle aux murs terracotta', caption: 'Détail de boiseries peintes' },
    ],
    faq: [
      { q: 'Comment connaître la durée de mes travaux de peinture ?', a: 'Le devis précise le délai d’exécution après la visite et la prise de mesures.' },
      { q: 'Les sols et le mobilier sont-ils protégés ?', a: 'Léna protège les sols et le mobilier avant de commencer la préparation et la peinture.' },
      { q: 'Quelles finitions puis-je choisir ?', a: 'Les finitions disponibles sont mate, satinée et brillante.' },
      { q: 'Le chantier est-il couvert par une assurance ?', a: 'Oui. Léna Rénove dispose d’une responsabilité civile professionnelle. Léna Renaud est titulaire du CAP Peintre en bâtiment.' },
    ],
  },
  enduits: {
    heading: ['Enduits', 'de ratissage.'],
    description: 'Léna Renaud prépare les murs avant la finition. La prestation peut comprendre le rebouchage, le traitement des fissures et le lissage des surfaces.',
    photo: {
      src: `${assets}/service_thumb_2.jpg`,
      alt: 'Intérieur en cours de rénovation dont le sol est protégé',
      caption: 'Photo d’illustration',
    },
    scope: [
      { title: 'Rebouchage', detail: 'Les trous et fissures sont traités selon l’état du support constaté lors de la visite.' },
      { title: 'Ratissage', detail: 'Un enduit de lissage est appliqué sur la surface pour préparer le mur à recevoir sa finition.' },
      { title: 'Bandes à joint', detail: 'La prestation peut inclure la pose de bandes à joint sur les plaques de plâtre.' },
    ],
    priceFactors: 'L’état du mur et les reprises nécessaires sont examinés avant l’établissement du devis.',
    workStep: { title: 'Application de l’enduit', detail: 'Léna réalise les reprises et le lissage prévus au devis pour préparer la finition.' },
    projects: [],
    faq: [
      { q: 'À quoi sert le ratissage d’un mur ?', a: 'Le ratissage lisse la surface du mur pour la préparer à recevoir sa finition.' },
      { q: 'Prenez-vous en charge les trous et les fissures ?', a: 'Le rebouchage et le traitement des fissures font partie des travaux que Léna peut prévoir selon l’état du mur.' },
      { q: 'Puis-je demander aussi la mise en peinture ?', a: 'Vous pouvez sélectionner les enduits et la peinture intérieure dans la même demande de devis.' },
    ],
  },
  'papier-peint': {
    heading: ['Pose de', 'papier peint.'],
    description: 'Du papier peint intissé au panoramique, Léna Renaud prépare le mur et pose le revêtement choisi.',
    photo: {
      src: `${assets}/service_thumb_3.jpg`,
      alt: 'Revêtement mural panoramique représentant une verrière',
      caption: 'Photo d’illustration',
    },
    scope: [
      { title: 'Papier peint intissé', detail: 'Préparation du support et pose du papier peint intissé.' },
      { title: 'Papier peint panoramique', detail: 'Pose du décor mural en tenant compte de la disposition du motif et des raccords.' },
      { title: 'Revêtements de rénovation', detail: 'Pose de toile de verre ou de voile de rénovation selon le projet.' },
    ],
    priceFactors: 'Le devis précise les travaux de préparation et la pose du revêtement choisi.',
    workStep: { title: 'Pose du revêtement', detail: 'Léna pose le revêtement choisi et soigne les raccords du motif.' },
    projects: [
      { src: panoramic, alt: 'Chambre mansardée avec un papier peint panoramique à motif de palmiers', caption: 'Papier peint panoramique derrière un lit' },
    ],
    faq: [
      { q: 'Posez-vous les papiers peints panoramiques ?', a: 'Oui, la prestation comprend la pose de papiers peints panoramiques et intissés.' },
      { q: 'Le mur est-il préparé avant la pose ?', a: 'Léna examine le support à la visite et prévoit sa préparation dans le devis.' },
      { q: 'Posez-vous de la toile de verre ?', a: 'Oui, la toile de verre et le voile de rénovation font aussi partie des revêtements proposés.' },
    ],
  },
  vinyle: {
    heading: ['Vinyle adhésif', 'décoratif.'],
    description: 'Léna Renaud pose un film adhésif décoratif pour relooker les cuisines, les meubles et les portes.',
    photo: {
      src: `${assets}/service_thumb_4.jpg`,
      alt: 'Cuisine aux façades claires et aux finitions effet bois',
      caption: 'Photo d’illustration',
    },
    scope: [
      { title: 'Cuisines', detail: 'Habillage des façades et des plans de travail avec un vinyle décoratif adapté au projet.' },
      { title: 'Meubles et portes', detail: 'Pose de film adhésif pour modifier l’aspect des surfaces existantes.' },
      { title: 'Effets décoratifs', detail: 'Finitions unies et effets bois, cuir ou métal selon le rendu recherché.' },
    ],
    priceFactors: 'Le devis est établi selon les surfaces à habiller et le film choisi.',
    workStep: { title: 'Pose du film', detail: 'Léna habille les surfaces définies dans le devis avec le film décoratif choisi.' },
    projects: [],
    faq: [
      { q: 'Quelles surfaces pouvez-vous habiller ?', a: 'La prestation concerne les façades de cuisine, les plans de travail, les meubles et les portes.' },
      { q: 'Quels aspects peut avoir le vinyle ?', a: 'Vous pouvez choisir un fini uni ou des effets bois, cuir et métal.' },
      { q: 'Quand choisissez-vous le film ?', a: 'La visite permet de discuter du rendu souhaité et de préciser les surfaces à habiller avant le devis.' },
    ],
  },
};
