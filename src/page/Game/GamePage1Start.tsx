// src/components/SpaceshipAnimation.tsx
import React, { useState, useEffect } from 'react';
import styles from './GamePage1Start.module.css';
import spaceshipImage from '/character_image/spaceship.png';
import { useNavigateNextPage } from '../../hook/useNavigateNextPage';
import { useTextAnimation } from '../../hook/useTextAnimation';
import { Fade } from 'react-awesome-reveal';

const GamePage1Start: React.FC = () => {
  const handleNextPage = useNavigateNextPage();
  const [isCentered, setIsCentered] = useState(false);
  const [showTextBox, setShowTextBox] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [showButton1, setShowButton1] = useState(false);
  const [showButton2, setShowButton2] = useState(false);
  const [showButton3, setShowButton3] = useState(false);
  const [case1, setCase1] = useState(true);
  const [case2, setCase2] = useState(false);
  const [case3, setCase3] = useState(false);

  const textAnimation1 = useTextAnimation("After his journey to Earth, E-626 returns to his home planet, Aquaferia, armed with knowledge about NASA's PACE mission.", 30, () => {
    setShowButton1(true);
  });
  const textAnimation2 = useTextAnimation("Aquaferia is facing severe environmental challenges, and E-626 needs your help to share the right information.", 30, () => {
    setShowButton2(true);
  });
  const textAnimation3 = useTextAnimation("Answer the following questions to assist E-626 in making decisions that will determine the fate of Aquaferia!", 30, () => {
    setShowButton3(true);
  });

  useEffect(() => {
    // Move spaceship to center on load
    const timer1 = setTimeout(() => {
      setIsCentered(true);
    }, 100); // Slight delay to trigger CSS transition

    // Show text box after spaceship is centered
    const timer2 = setTimeout(() => {
      setShowTextBox(true);
    }, 2000); // Adjust duration as per animation

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleButtonClick = () => {
    setShowTextBox(false);
    setIsExiting(true);

    // Wait for exit animation to finish before calling nextPage
    setTimeout(() => {
        handleNextPage();
    }, 1500); // Adjust to match exit animation duration
  };

  const handleButton1Click = () => {
    setShowButton1(false);
    textAnimation2.startAnimation();
    setCase1(false);
    setCase2(true);
  }

    const handleButton2Click = () => {
        setShowButton2(false);
        textAnimation3.startAnimation();
        setCase2(false);
        setCase3(true);
    }

    const handleButton3Click = () => {
        setShowButton3(false);
        handleButtonClick();
    }

  useEffect(() => {
    if (showTextBox) {
        setTimeout(() => {
            textAnimation1.startAnimation();
        }, 1000);
    }
    }, [showTextBox]);
          

  return (
    <div className={styles.container}>
      <div className={`${styles.spaceshipContainer} ${isCentered ? styles.centered : ''} ${isExiting ? styles.exiting : ''}`}>
        <div className={styles.glow}></div>
        <img
          src={spaceshipImage}
          alt="Spaceship"
          className={styles.spaceship}
        />
      </div>
        {showTextBox && (
            <div className={styles['textBox']}>
                {case1 && textAnimation1.text}
                {case2 && textAnimation2.text}
                {case3 && textAnimation3.text}
            </div>
        )}
      {showButton1 && (
        <div className={styles['button-container']}>
            <Fade delay={0} duration={500}>
                <button className={styles['button']} onClick={handleButton1Click}>NEXT</button>
            </Fade>
        </div>
      )}
      {showButton2 && (
        <div className={styles['button-container']}>
            <Fade delay={0} duration={500}>
                <button className={styles['button']} onClick={handleButton2Click}>NEXT</button>
            </Fade>
        </div>
      )}
      {showButton3 && (
        <div className={styles['button-container']}>
            <Fade delay={0} duration={500}>
                <button className={styles['button']} onClick={handleButton3Click}>NEXT</button>
            </Fade>
        </div>
      )}
    </div>
  );
};

export default GamePage1Start;
