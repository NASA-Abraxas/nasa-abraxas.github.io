import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizContext } from './QuizContext';
import { LinearProgress } from '@mui/material';
import { Fade } from 'react-awesome-reveal';
import styles from './Quiz.module.css'; // Importing the CSS module for styles
import { useTextAnimation } from '../../hook/useTextAnimation';

interface QuizProps {
  questionNumber: number;
  characterImage: string;
  characterName: string;
  questionText: string;
  answers: string[];
  correctAnswer: number;
  onAnswerSelected: (answer: string) => void;
  answerCharacterImage: string;
}

const Quiz: React.FC<QuizProps> = ({
  questionNumber,
  characterImage,
  characterName,
  questionText,
  answers,
  correctAnswer,
  onAnswerSelected,
  answerCharacterImage
}) => {
  const [progress, setProgress] = useState(questionNumber-1);
  const { setResult } = useContext(QuizContext);
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);

  const textAnimation = useTextAnimation(questionText, 30);
  useEffect(() => {
    setTimeout(() => {
      textAnimation.startAnimation();
    }, 500);
  }, []);

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setResult(questionNumber - 1, index === correctAnswer);
    onAnswerSelected(answers[index]);
    setAnswerSubmitted(true);
    setProgress(progress + 1);
  };

  const handleNext = () => {
    navigate(`/page17/quiz${questionNumber + 1}`);
  };

  return (
    <div className={styles.quizContainer}>
      <div className={styles.questionHeader}>
        <div className={styles.questionNumber}>Question #{questionNumber}</div>
        <div className={styles.progressBarContainer}>
          <LinearProgress variant="determinate" value={(progress) * 10} color='inherit'/>
        </div>
      </div>
      <div className={styles.questionBody}>
        <img src={characterImage} alt="Character" className={styles.characterImage} />
        <div className={styles.characterDetails}>
          <div className={styles.characterName}>{characterName}</div>
          <div className={styles.questionText}>{textAnimation.text}</div>
        </div>
      </div>
      {textAnimation.isFinished && (<Fade duration={1000}><div className={styles.answersSection}>
        <div className={styles.answers}>
          {answers.map((answer, index) => (
            <button key={index}
                    onClick={() => handleAnswer(index)}
                    className={`${styles.answerButton} ${answerSubmitted && (selectedAnswer === index ? (index === correctAnswer ? styles.correctAnswer : styles.wrongAnswer) : index === correctAnswer ? styles.correctAnswer : '')}`}
                    disabled={answerSubmitted}>
              {answer}
            </button>
          ))}
        </div>
        <img src={answerCharacterImage} alt="Answer Character" className={styles.answerCharacterImage} />
      </div></Fade>)}
      {answerSubmitted && (
        <div className={styles.nextButtonContainer}>
          <button onClick={handleNext} className={styles.nextButton}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
