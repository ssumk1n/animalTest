
export type AnimalKey = 'RAT' | 'OX' | 'TIGER' | 'RABBIT' | 'DRAGON' | 'SNAKE' | 'HORSE' | 'SHEEP' | 'MONKEY' | 'ROOSTER' | 'DOG' | 'PIG';

export interface ScoreMapping {
  [key: string]: number; // key: AnimalKey, value: points
}

export interface Choice {
  text: string;
  scores: ScoreMapping;
}

export interface Question {
  id: number;
  question: string;
  choices: Choice[];
}

export interface AnimalInfo {
  key: AnimalKey;
  name: string;
  symbol: string;
  yinYang: '음(陰)' | '양(陽)';
  element: '목(木)' | '화(火)' | '토(土)' | '금(金)' | '수(水)';
  season: '봄' | '여름' | '가을' | '겨울';
  description: string;
  traits: string[];
  worryMessage: string;
  bestMatches: string[];
  worstMatches: string[];
}
