import { useState, useEffect, useRef } from "react";
import styles from './Loading.module.css'
import { useNavigateNextPage } from "../../hook/useNavigateNextPage";
import { useTextAnimation } from "../../hook/useTextAnimation";
import { Fade } from "react-awesome-reveal";

const LoadingComponent = () => {
  const handleNext = useNavigateNextPage();

  const loadingTextAnim = useTextAnimation('TRAVEL LOG UPLOADING...');
  const [fullLoadingBarLength, setFullLoadingBarLength] = useState(1);
  const loadingBarChar = '▮';
  const loadingBarAnim = useTextAnimation(loadingBarChar.repeat(fullLoadingBarLength), 110);
  const [finished, setFinished] = useState(false);

  const loadingBarRef = useRef<any>(null);
  useEffect(() => {
    if (!loadingBarRef.current) return;
    const width = loadingBarRef.current?.clientWidth;
    const charWidth = 20;
    if (width) {
      setFullLoadingBarLength(Math.floor(width / charWidth) - 1);
    }
  }, [loadingBarRef]);


  useEffect(() => {
    setTimeout(loadingTextAnim.startAnimation, 1000);
  }, []);

  useEffect(() => {
    if (loadingTextAnim.isFinished)
      loadingBarAnim.startAnimation();
  }, [fullLoadingBarLength, loadingTextAnim.isFinished]);

  useEffect(() => {
    if (loadingBarAnim.isFinished) {
      setTimeout(() => {
        setFinished(true);
      }, 900);
    }
  }, [loadingBarAnim.isFinished]);

  return (
    <>
      <div className={styles["loading-container"]}>
        <div className={styles["loading-text"]}>{loadingTextAnim.text}</div>
        <div className={styles["loading-bar"]} ref={loadingBarRef} >
          {Array.from({ length: fullLoadingBarLength }, (_, i) => (
            <span key={i} style={{ color: i < loadingBarAnim.text.length ? 'white' : 'transparent' }}>{loadingBarChar}</span>
          ))}
        </div>
        {finished && (<div className={styles["complete-text"]}>COMPLETED.</div>)}
      </div>
      {finished && (<Fade duration={600} delay={700}><div className={styles["button-container"]}>
        <button onClick={handleNext}>NEXT</button>
      </div></Fade>)}
    </>
  );
}

export default LoadingComponent;