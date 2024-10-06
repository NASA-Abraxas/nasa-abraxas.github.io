import { useState, useEffect } from 'react';
import { useNavigateNextPage } from "../../hook/useNavigateNextPage";
import styles from './Log.module.css';
import { useTextAnimation } from '../../hook/useTextAnimation';

const LogComponent = () => {
  const handleNext = useNavigateNextPage();

  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);

  const titleAnim = useTextAnimation('TRAVEL LOG #151', 20, () => setTimeout(() => {
    setToggle2(true)
  }, 1000));
  const codeAnim = useTextAnimation('CODE NAME: E-626', 20, () => setToggle3(true));
  const affiliationAnim = useTextAnimation('AFFILIATION:', 20, () => setToggle4(true));
  const pTextAnim = useTextAnimation('Aquaferia Space \nOperations Command', 20, () => setToggle5(true));
  const fullText = "The situation on Aquaferia grows dire. Our oceans suffocate under layers of pollutants, and the atmosphere no longer shields us as it once did. Hope lies beyond our stars. I set course for Earth, a planet showing remarkable progress in environmental monitoring and management. May their knowledge light our path to recovery.";
  const textAnim = useTextAnimation(fullText, 20);

  useEffect(() => {
    const next = setTimeout(() => {
      setToggle1(true);
    }, 1000);
    return () => clearTimeout(next);
  }, []);

  useEffect(() => {
    if (toggle1) titleAnim.startAnimation();
  }, [toggle1]);

  useEffect(() => {
    if (toggle2) codeAnim.startAnimation();
  }, [toggle2]);

  useEffect(() => {
    if (toggle3) affiliationAnim.startAnimation();
  }, [toggle3]);

  useEffect(() => {
    if (toggle4) pTextAnim.startAnimation();
  }, [toggle4]);

  useEffect(() => {
    if (toggle5) textAnim.startAnimation();
  }, [toggle5]);

  return (
    <div className={styles['main']}>
      <div className={styles['container']}>
        <div className={styles['log-container']}>
          <div className={styles['title']}>{titleAnim.text}</div>
          <div className={styles['content']}>
            <div className={styles['sprite-container']}>
              <img src="/character_image/e626.png" />
            </div>
            <div className={styles['info']}>
              <h2>{codeAnim.text}</h2>
              <h3>{affiliationAnim.text}</h3>
              <p>{pTextAnim.text}</p>
            </div>
          </div>
          <div className={styles['text']}>{textAnim.text}</div>
        </div>
        <div className={styles['button-container']}>
          {textAnim.isFinished && (
            <button onClick={handleNext}>NEXT</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogComponent;
