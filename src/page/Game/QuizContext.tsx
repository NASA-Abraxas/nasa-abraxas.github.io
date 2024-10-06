// src/contexts/QuizContext.tsx
import { createContext, useState, ReactNode, useEffect } from 'react';

// Define the shape of the context
interface QuizContextType {
  results: boolean[];
  setResult: (index: number, isCorrect: boolean) => void;
  resetResults: () => void;
}

// Create the context with default values
export const QuizContext = createContext<QuizContextType>({
  results: [],
  setResult: () => {},
  resetResults: () => {},
});

// Create the provider component
export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [results, setResults] = useState<boolean[]>(() => {
    // Initialize from localStorage if available
    const storedResults = localStorage.getItem('quizResults');
    return storedResults ? JSON.parse(storedResults) : [];
  });

  // Function to set the result of a specific quiz
  const setResult = (index: number, isCorrect: boolean) => {
    setResults((prev) => {
      const newResults = [...prev];
      newResults[index] = isCorrect;
      return newResults;
    });
  };

  // Function to reset all results
  const resetResults = () => {
    setResults([]);
  };

  // Persist results to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('quizResults', JSON.stringify(results));
  }, [results]);

  return (
    <QuizContext.Provider value={{ results, setResult, resetResults }}>
      {children}
    </QuizContext.Provider>
  );
};
