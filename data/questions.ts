import { Question, NegotiatorStyle } from '@/types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    text: "Lors d'une négociation salariale, votre approche privilégiée est :",
    options: [
      {
        text: 'Présenter des données de marché et justifier ma demande avec des faits précis',
        style: NegotiatorStyle.ANALYTIQUE,
        points: 3,
      },
      {
        text: 'Exprimer clairement mes attentes tout en restant ouvert à la discussion',
        style: NegotiatorStyle.ASSERTIF,
        points: 3,
      },
      {
        text: "Chercher un accord qui valorise la relation à long terme avec l'employeur",
        style: NegotiatorStyle.COOPERATIF,
        points: 3,
      },
      {
        text: 'Viser le maximum possible en utilisant toutes mes cartes',
        style: NegotiatorStyle.COMPETITIF,
        points: 3,
      },
    ],
  },
  {
    id: 2,
    text: 'Face à un désaccord avec un collègue sur un projet, vous :',
    options: [
      {
        text: 'Analysez les arguments de chacun de manière objective',
        style: NegotiatorStyle.ANALYTIQUE,
        points: 3,
      },
      {
        text: "Exprimez votre point de vue fermement mais écoutez l'autre",
        style: NegotiatorStyle.ASSERTIF,
        points: 3,
      },
      {
        text: "Cherchez un compromis pour maintenir l'harmonie",
        style: NegotiatorStyle.ACCOMMODANT,
        points: 3,
      },
      {
        text: 'Défendez votre position avec conviction',
        style: NegotiatorStyle.COMPETITIF,
        points: 3,
      },
    ],
  },
  {
    id: 3,
    text: 'Dans une négociation commerciale, votre priorité est :',
    options: [
      {
        text: 'Obtenir le meilleur prix possible pour mon entreprise',
        style: NegotiatorStyle.COMPETITIF,
        points: 3,
      },
      {
        text: 'Établir un partenariat durable et mutuellement bénéfique',
        style: NegotiatorStyle.COOPERATIF,
        points: 3,
      },
      {
        text: 'Trouver un équilibre juste entre nos besoins respectifs',
        style: NegotiatorStyle.ASSERTIF,
        points: 3,
      },
      {
        text: "M'assurer que tous les termes sont clairement définis et mesurables",
        style: NegotiatorStyle.ANALYTIQUE,
        points: 3,
      },
    ],
  },
  {
    id: 4,
    text: 'Quand la tension monte durant une négociation, vous :',
    options: [
      {
        text: 'Proposez une pause pour analyser la situation calmement',
        style: NegotiatorStyle.ANALYTIQUE,
        points: 3,
      },
      {
        text: 'Restez calme et continuez à défendre vos positions',
        style: NegotiatorStyle.COMPETITIF,
        points: 3,
      },
      {
        text: 'Cherchez à désamorcer en faisant des concessions',
        style: NegotiatorStyle.ACCOMMODANT,
        points: 3,
      },
      {
        text: 'Adressez directement la tension pour la résoudre',
        style: NegotiatorStyle.ASSERTIF,
        points: 3,
      },
    ],
  },
  {
    id: 5,
    text: 'Votre préparation avant une négociation importante consiste à :',
    options: [
      {
        text: 'Rechercher toutes les données pertinentes et créer des scénarios détaillés',
        style: NegotiatorStyle.ANALYTIQUE,
        points: 3,
      },
      {
        text: 'Définir mes objectifs clairs et mes limites non négociables',
        style: NegotiatorStyle.ASSERTIF,
        points: 3,
      },
      {
        text: 'Identifier les intérêts communs et les opportunités de collaboration',
        style: NegotiatorStyle.COOPERATIF,
        points: 3,
      },
      {
        text: 'Élaborer une stratégie pour maximiser mes gains',
        style: NegotiatorStyle.COMPETITIF,
        points: 3,
      },
    ],
  },
  {
    id: 6,
    text: "Si l'autre partie fait une demande déraisonnable, vous :",
    options: [
      {
        text: "Présentez des contre-arguments factuels pour démontrer pourquoi c'est déraisonnable",
        style: NegotiatorStyle.ANALYTIQUE,
        points: 3,
      },
      {
        text: 'Refusez fermement mais proposez une alternative raisonnable',
        style: NegotiatorStyle.ASSERTIF,
        points: 3,
      },
      {
        text: 'Essayez de comprendre leurs motivations réelles derrière cette demande',
        style: NegotiatorStyle.COOPERATIF,
        points: 3,
      },
      {
        text: "Tenez bon et attendez qu'ils fassent des concessions",
        style: NegotiatorStyle.COMPETITIF,
        points: 3,
      },
    ],
  },
  {
    id: 7,
    text: 'Votre style de communication pendant une négociation est :',
    options: [
      {
        text: 'Factuel et structuré, basé sur des preuves',
        style: NegotiatorStyle.ANALYTIQUE,
        points: 3,
      },
      {
        text: 'Direct et transparent sur mes besoins',
        style: NegotiatorStyle.ASSERTIF,
        points: 3,
      },
      {
        text: 'Chaleureux et orienté vers la construction de relations',
        style: NegotiatorStyle.COOPERATIF,
        points: 3,
      },
      {
        text: 'Stratégique et axé sur mes objectifs',
        style: NegotiatorStyle.COMPETITIF,
        points: 3,
      },
    ],
  },
  {
    id: 8,
    text: 'Face à une impasse, votre approche est de :',
    options: [
      {
        text: 'Réexaminer les données pour trouver une solution objective',
        style: NegotiatorStyle.ANALYTIQUE,
        points: 3,
      },
      {
        text: 'Proposer une pause puis revenir avec une position claire',
        style: NegotiatorStyle.ASSERTIF,
        points: 3,
      },
      {
        text: 'Explorer des options créatives qui pourraient satisfaire les deux parties',
        style: NegotiatorStyle.COOPERATIF,
        points: 3,
      },
      {
        text: "Maintenir ma position et attendre que l'autre cède",
        style: NegotiatorStyle.COMPETITIF,
        points: 3,
      },
    ],
  },
  {
    id: 9,
    text: 'Après avoir conclu un accord, vous :',
    options: [
      {
        text: 'Documentez tous les détails et créez un plan de suivi précis',
        style: NegotiatorStyle.ANALYTIQUE,
        points: 3,
      },
      {
        text: 'Vous assurez que les termes sont clairs et équitables pour tous',
        style: NegotiatorStyle.ASSERTIF,
        points: 3,
      },
      {
        text: 'Célébrez le partenariat et planifiez les futures collaborations',
        style: NegotiatorStyle.COOPERATIF,
        points: 3,
      },
      {
        text: 'Évaluez si vous avez obtenu le maximum possible',
        style: NegotiatorStyle.COMPETITIF,
        points: 3,
      },
    ],
  },
  {
    id: 10,
    text: 'Votre principale motivation dans une négociation est :',
    options: [
      {
        text: 'Parvenir à la solution la plus logique et équitable',
        style: NegotiatorStyle.ANALYTIQUE,
        points: 3,
      },
      {
        text: "Obtenir un résultat qui respecte mes besoins et ceux de l'autre",
        style: NegotiatorStyle.ASSERTIF,
        points: 3,
      },
      {
        text: 'Construire une relation de confiance durable',
        style: NegotiatorStyle.COOPERATIF,
        points: 3,
      },
      {
        text: 'Gagner et obtenir le meilleur résultat pour moi',
        style: NegotiatorStyle.COMPETITIF,
        points: 3,
      },
    ],
  },
];
