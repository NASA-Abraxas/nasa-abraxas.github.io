import { createContext } from "react";

export type DifficultyType = 'junior' | 'intermediate' | 'senior';
export type DifficultyContextType = {
  difficulty: DifficultyType;
  setDifficulty: (difficulty: DifficultyType) => void;
};
export const DifficultyContext = createContext<DifficultyContextType>({
  difficulty: 'junior',
  setDifficulty: () => { },
});