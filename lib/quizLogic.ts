import { Answer, NegotiatorProfile, NegotiatorStyle, QuizResult } from '@/types/quiz';

export function calculateQuizResult(answers: Answer[], profiles: NegotiatorProfile[]): QuizResult {
  const scores: Record<NegotiatorStyle, number> = {
    [NegotiatorStyle.ASSERTIF]: 0,
    [NegotiatorStyle.COOPERATIF]: 0,
    [NegotiatorStyle.ANALYTIQUE]: 0,
    [NegotiatorStyle.COMPETITIF]: 0,
    [NegotiatorStyle.ACCOMMODANT]: 0,
  };

  answers.forEach((answer) => {
    scores[answer.selectedStyle] += answer.points;
  });

  const dominantStyle = (Object.keys(scores) as NegotiatorStyle[]).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  const profile = profiles.find((p) => p.id === dominantStyle)!;

  return {
    dominantStyle,
    profile,
    scores,
  };
}
