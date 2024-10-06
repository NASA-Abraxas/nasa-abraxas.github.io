import { gsap } from 'gsap';
import { useEffect, useState } from "react";
import { BottomGlobe } from "../../component/BottomGlobe";
import { DialogueBoxRight } from "../../component/DialogueBoxRight";
import { NextButton } from "../../component/NextButton";
import { SatelliteContainer } from "../../component/SatelliteContainer";
import { useTextAnimation } from "../../hook/useTextAnimation";
import styles from "./Ch1Page1Satellite.module.css";


export const Ch1Page1Satellite = () => {
  const [isInteractVisible, setIsInteractVisible] = useState(false);
  useEffect(() => {
    if (isInteractVisible) {
      gsap.to(`.${styles['embed-interact']}>img`, { xPercent: -10, duration: 1 });
      setTimeout(() => {
        gsap.to(`.${styles['embed-interact']}>img`, { xPercent: 10, duration: 1 });
      }, 1500);
      setTimeout(() => {
        setIsInteractVisible(false);
      }, 3000);
    }
  }, [isInteractVisible]);

  // when mouse down, hide the interact message immediately
  useEffect(() => {
    const handleMouseDown = () => {
      setIsInteractVisible(false);
    };
    window.addEventListener('mousedown', handleMouseDown);
    return () => window.removeEventListener('mousedown', handleMouseDown);
  }, []);

  // text animation settings
  const fullText1 = "Let's find out more about PACE satellite!";
  const textAnimation1 = useTextAnimation(fullText1, 50,
    () => setTimeout(() => {
      textAnimation2.startAnimation();
      setIsInteractVisible(true);
    }, 2000));
  const fullText2 = "Rotate, zoom in to get a closer look.";
  const textAnimation2 = useTextAnimation(fullText2);
  useEffect(() => { // Start the first text animation when the component is mounted
    textAnimation1.startAnimation();
  }, []);
  // end text animation settings

  return (
    <div className="page-container">
      <BottomGlobe />
      <div className={styles['dialogue-container']}>
        <DialogueBoxRight imageSrc="character_image/rodriguez.png" name="Dr. Rodriguez" text={textAnimation2.isStarted ? textAnimation2.text : textAnimation1.text} fullText={textAnimation2.isStarted ? fullText2 : fullText1} />
      </div>
      <SatelliteContainer />
      {isInteractVisible && <div className={styles['embed-interact']} >
        <img src="embed_interact.svg" alt="interact" />
        <div>click & drag</div>
        <div>to rotate</div>
      </div>}
      <NextButton delay={10_000} />
    </div>
  )
}