export enum NegotiatorStyle {
  ASSERTIF = 'ASSERTIF',
  COOPERATIF = 'COOPERATIF',
  ANALYTIQUE = 'ANALYTIQUE',
  COMPETITIF = 'COMPETITIF',
  ACCOMMODANT = 'ACCOMMODANT',
}

export interface NegotiatorProfile {
  id: NegotiatorStyle;
  name: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  color: string;
  textColor: string;
}

export interface Option {
  text: string;
  style: NegotiatorStyle;
  points: number;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface Answer {
  questionId: number;
  selectedStyle: NegotiatorStyle;
  points: number;
}

export interface QuizResult {
  dominantStyle: NegotiatorStyle;
  profile: NegotiatorProfile;
  scores: Record<NegotiatorStyle, number>;
}
