import { ReactNode, useContext } from 'react';
import { DifficultyContext, DifficultyType } from '../context/DifficultyContext';

export const OptionalRenderer = ({ difficulty, children }
  : { difficulty: DifficultyType, children: ReactNode }) => {
  const { difficulty: difficultySetting } = useContext(DifficultyContext);
  if (difficultySetting === difficulty) {
    return <>{children}</>;
  }
  return null;
}