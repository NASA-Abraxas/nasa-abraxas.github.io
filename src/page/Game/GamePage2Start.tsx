// AnimatedIntro.tsx
import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import styles from './GamePage2Start.module.css';
import { useNavigateNextPage } from '../../hook/useNavigateNextPage';
import { useTextAnimation } from '../../hook/useTextAnimation';

import EarthImage from '/character_image/aquaferia.png';
import SpaceshipImage from '/character_image/spaceship.png';


const AnimatedIntro: React.FC = () => {
  const navigate = useNavigateNextPage();
  const textAnimation = useTextAnimation('Aquaferia', 30);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
      textAnimation.startAnimation();
    }, 5000);
    return () => clearTimeout(timer);
    }, []);

  useEffect(() => {
    // Total duration considering all animations (Earth fade-in + Spaceship slide + Text appearance)
    const totalDuration = 7000; // 7 seconds
    const timer = setTimeout(() => {
        navigate();
    }, totalDuration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      {/* Earth Image with Fade-In Animation using react-awesome-reveal */}
      <Fade
        triggerOnce
        duration={2000} // 2 seconds
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}
      >
        <img src={EarthImage} className={styles.earth} />
      </Fade>

      {/* Spaceship Image Sliding In using CSS Animation */}
      <img src={SpaceshipImage} alt="Spaceship" className={styles.spaceship} />

      {/* Text Appears using CSS Animation */}
      {showText && (<div className={styles.textContainer}>
        {textAnimation.text}
      </div>)}
    </div>
  );
};

export default AnimatedIntro;
