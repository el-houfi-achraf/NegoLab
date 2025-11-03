import { NegotiatorProfile, NegotiatorStyle } from '@/types/quiz';

export const profiles: NegotiatorProfile[] = [
  {
    id: NegotiatorStyle.ASSERTIF,
    name: 'Négociateur Assertif',
    description:
      'Vous êtes direct et confiant, cherchant des solutions équitables tout en défendant vos intérêts avec fermeté.',
    strengths: [
      'Communication claire et directe',
      'Confiance en soi élevée',
      'Capacité à fixer des limites',
      "Recherche d'équilibre gagnant-gagnant",
    ],
    weaknesses: [
      'Peut être perçu comme trop insistant',
      'Difficulté à céder sur certains points',
      'Tendance à sur-négocier les détails',
    ],
    color: 'from-blue-500 to-cyan-500',
    textColor: 'text-slate-900',
  },
  {
    id: NegotiatorStyle.COOPERATIF,
    name: 'Négociateur Coopératif',
    description:
      'Vous privilégiez la collaboration et les relations à long terme, cherchant des solutions créatives qui satisfont toutes les parties.',
    strengths: [
      'Excellentes compétences relationnelles',
      'Créativité dans la recherche de solutions',
      'Construction de confiance',
      'Vision à long terme',
    ],
    weaknesses: [
      'Peut négliger ses propres intérêts',
      'Processus parfois trop long',
      'Vulnérable aux tactiques agressives',
    ],
    color: 'from-green-500 to-emerald-500',
    textColor: 'text-slate-900',
  },
  {
    id: NegotiatorStyle.ANALYTIQUE,
    name: 'Négociateur Analytique',
    description:
      'Vous vous appuyez sur les données, la logique et une préparation minutieuse pour prendre des décisions éclairées.',
    strengths: [
      'Préparation approfondie',
      'Pensée logique et structurée',
      'Attention aux détails',
      'Décisions basées sur les faits',
    ],
    weaknesses: [
      'Peut être trop rigide',
      'Lenteur dans la prise de décision',
      "Difficulté avec l'aspect émotionnel",
    ],
    color: 'from-purple-500 to-violet-500',
    textColor: 'text-slate-900',
  },
  {
    id: NegotiatorStyle.COMPETITIF,
    name: 'Négociateur Compétitif',
    description:
      'Vous êtes orienté résultats, cherchant à maximiser vos gains avec détermination et stratégie.',
    strengths: [
      'Grande détermination',
      'Pensée stratégique développée',
      'Capacité à saisir les opportunités',
      'Résistance à la pression',
    ],
    weaknesses: [
      'Risque de détériorer les relations',
      'Peut créer des situations gagnant-perdant',
      'Manque de flexibilité',
    ],
    color: 'from-red-500 to-orange-500',
    textColor: 'text-slate-900',
  },
  {
    id: NegotiatorStyle.ACCOMMODANT,
    name: 'Négociateur Accommodant',
    description:
      "Vous privilégiez l'harmonie et la préservation des relations, prêt à faire des compromis pour éviter les conflits.",
    strengths: [
      'Excellente gestion des conflits',
      'Empathie naturelle',
      "Création d'atmosphère positive",
      'Flexibilité et adaptabilité',
    ],
    weaknesses: [
      'Difficulté à défendre ses intérêts',
      "Risque d'être exploité",
      'Peut accumuler de la frustration',
    ],
    color: 'from-yellow-400 to-amber-400',
    textColor: 'text-slate-900',
  },
];
