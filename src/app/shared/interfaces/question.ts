export interface Question {
  id?: any;
  question?: Option;
  options?: Option[];
  grade: string;
  answer?: Answer;
  origin?: Origin;
}

export interface Option {
  paragraphs?: Array<string>;
  images?: Array<string>;
  equations?: Array<string>;
}

export interface Answer {
  index: string;
  verified: boolean;
}

export interface Origin {
  from: string;
  year: number;
}
