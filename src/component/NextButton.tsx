import { useContext, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { AudioContext } from "../context/AudioContext";
import { useNavigateNextPage } from "../hook/useNavigateNextPage";
import styles from './NextButton.module.css';

export const NextButton = ({ duration = 1000, delay = 8000 }: { duration?: number; delay?: number }) => {
  const { setSpace, setTyping } = useContext(AudioContext);
  const handleNext = useNavigateNextPage();
  const [isClickable, setIsClickable] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsClickable(true);
    }, delay)
  }, [delay, duration])

  return (
    <div className={styles['button-container']}>
      <Fade duration={duration} delay={delay}>
        <button onClick={() => {
          handleNext();
          setSpace(true);
          setTyping(false);
        }} style={{ visibility: !isClickable ? 'hidden' : undefined }}>NEXT</button>
      </Fade>
    </div>
  )
}