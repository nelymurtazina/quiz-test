export interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
}

export interface QuizData {
  questions: Question[];
}

export interface QuizResults {
  totalQuestions: number;
  correctAnswers: number;
  score: number;
}