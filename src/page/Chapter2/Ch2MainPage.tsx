import React, { useContext, useEffect, useRef, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import ArrowButton from '../../component/ArrowButton';
import { DialogueBoxRight } from "../../component/DialogueBoxRight";
import ParallaxWaves from '../../component/ParallaxWaves';
import { DifficultyContext } from '../../context/DifficultyContext';
import { useNavigateNextPage } from '../../hook/useNavigateNextPage';
import Ch2BottomPage from './Ch2BottomPage';
import styles from './Ch2MainPage.module.css';
import Ch2TopPage from './Ch2TopPage';
import { text2, text3 } from './Ch2MainPage.json'
import { useAudio } from '../../context/AudioContext';


const Ch2MainPage: React.FC = () => {
  const { play } = useAudio();
  const handleNext = useNavigateNextPage()
  const [currentSection, setCurrentSection] = useState<number>(0);

  const topSectionRef = useRef<HTMLDivElement>(null);
  const middleSectionRef = useRef<HTMLDivElement>(null);
  const bottomSectionRef = useRef<HTMLDivElement>(null);

  const sections = [topSectionRef, middleSectionRef, bottomSectionRef];

  useEffect(() => {
    setCurrentSection(1);
    middleSectionRef.current?.scrollIntoView({ behavior: 'instant' });
  }, []);

  const { difficulty } = useContext(DifficultyContext);
  const textAnimation1 = "PACE collects data of atmosphere and ocean. Let's take a look one by one!";
  const textAnimation2 = text2[difficulty];
  const textAnimation3 = text3[difficulty];
  // useEffect(() => {
  //   if (currentSection === 1) {
  //     textAnimation1.startAnimation();
  //   }
  //   else if (currentSection === 0) {
  //     textAnimation2.startAnimation();
  //   } else if (currentSection === 2) {
  //     textAnimation3.startAnimation();
  //   }
  // }, [currentSection]);

  const scrollToSection = (index: number) => {
    if (index >= 0 && index < sections.length) {
      setCurrentSection(index);
      const targetSection = sections[index].current;

      if (targetSection) {
        let targetPosition = targetSection.getBoundingClientRect().top + window.scrollY;

        // If scrolling to the bottom section, scroll to the very bottom of the page
        if (index === sections.length - 1) {
          const sectionHeight = targetSection.offsetHeight;
          targetPosition = targetSection.getBoundingClientRect().top + window.scrollY + sectionHeight - window.innerHeight;
        }

        smoothScrollTo(window.scrollY, targetPosition, 1500); // Adjust 1500ms for slower scrolling
      }
    }
  };

  const smoothScrollTo = (start: number, end: number, duration: number) => {
    const startTime = performance.now();
    const distance = end - start;

    const scroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // Progress ratio
      const easeProgress = easeInOutQuad(progress); // Apply easing function for smooth scroll
      const newScrollPosition = start + distance * easeProgress;

      window.scrollTo(0, newScrollPosition);

      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };

  // Easing function for smoother scroll effect
  const easeInOutQuad = (t: number) => {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  };


  return (
    <>
      {/* Top Section */}
      <div id={styles["top-section"]} className={styles["section"]} ref={topSectionRef}>
        <Ch2TopPage text={textAnimation2} isFinished={true} />
        <div className={styles['bottom-button-container2']}>
          <ArrowButton direction="down" onClick={() => {scrollToSection(currentSection + 1); play('/bgm/wave.mp3')}} text='Back' />
        </div>
      </div>

      {/* Middle Section */}
      <div id={styles["middle-section"]} className={styles["section"]} ref={middleSectionRef}>
        <ParallaxWaves />
        <div className={styles['top-button-container']}>
          <ArrowButton direction="up" onClick={() => {scrollToSection(currentSection - 1); play('/bgm/wind.mp3')}} text='Atmosphere' />
        </div>
        <div className={styles['next-button-container']}>
          <Fade duration={1000} delay={0}>
            <button onClick={handleNext}>NEXT</button>
          </Fade>
        </div>
        <div className={styles['dialogue-container']}>
          <DialogueBoxRight imageSrc="/character_image/rodriguez.png" name="Dr. Rodriguez" text={textAnimation1} isAnimated />
        </div>
        <div className={styles['bottom-button-container']}>
          <ArrowButton direction="down" onClick={() => {scrollToSection(currentSection + 1); play('/bgm/bubble.mp3')}} text='Ocean' />
        </div>
      </div>

      {/* Bottom Section */}
      <div id={styles["bottom-section"]} className={styles["section"]} ref={bottomSectionRef}>
        <Ch2BottomPage text={textAnimation3} isFinished={true} />
        <div className={styles['top-button-container2']}>
          <ArrowButton direction="up" onClick={() => {scrollToSection(currentSection - 1); play('/bgm/wave.mp3')}} text='Back' />
        </div>
        <img src="waves/fish.png" alt="fish" className={styles["fish"]} />
      </div>
    </>
  );
};

export default Ch2MainPage;
