import { useState, useEffect } from 'react';
import { useNavigateNextPage } from "../../hook/useNavigateNextPage";
import styles from './Log.module.css';

const LogComponent = () => {
  const handleNext = useNavigateNextPage();

  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);

  const [title, setTitle] = useState('');
  const fullTitle = 'TRAVEL LOG #151';
  const [code, setCode] = useState('');
  const fullCode = 'CODE NAME: E-626';
  const [affiliation, setAffiliation] = useState('');
  const fullAffiliation = 'AFFILIATION:';
  const [pText, setPText] = useState('');
  const fullPText = 'Aquaferia Space \nOperations Command';
  const [text, setText] = useState('');
  const fullText = "The situation on Aquaferia grows dire. Our oceans suffocate under layers of pollutants, and the atmosphere no longer shields us as it once did. Hope lies beyond our stars. I set course for Earth, a planet showing remarkable progress in environmental monitoring and management. May their knowledge light our path to recovery.";

  useEffect(() => {
    const next = setTimeout(() => {
        setToggle(true);
      }, 1000);
      return () => clearTimeout(next);
    }, []);

  useEffect(() => {
    if (toggle) {
        let index = 0;

        const interval = setInterval(() => {
            setTitle(fullTitle.slice(0, index));
            index += 1;
            if (index > fullTitle.length) {
                clearInterval(interval);
                setToggle1(true);
            }
        }, 20);
    }
  }, [toggle]);

  useEffect(() => {
    if (toggle1) {
        const next = setTimeout(() => {
            setToggle2(true);
          }, 1000);
          return () => clearTimeout(next);
    }
  }, [toggle1]);

  useEffect(() => {
    if (toggle2) {
        let index = 0;

        const interval = setInterval(() => {
            setCode(fullCode.slice(0, index));
            index += 1;
            if (index > fullCode.length) {
                clearInterval(interval);
                setToggle3(true);
            }
        }, 20);
    }
  }, [toggle2]);

  useEffect(() => {
    if (toggle3) {
        let index = 0;

        const interval = setInterval(() => {
            setAffiliation(fullAffiliation.slice(0, index));
            index += 1;
            if (index > fullAffiliation.length) {
                clearInterval(interval);
                setToggle4(true);
            }
        }, 20);
    }
  }, [toggle3]);

  useEffect(() => {
    if (toggle4) {
        let index = 0;

        const interval = setInterval(() => {
            setPText(fullPText.slice(0, index));
            index += 1;
            if (index > fullPText.length) {
                clearInterval(interval);
                setToggle5(true);
            }
        }, 20);
    }
  }, [toggle4]);

  useEffect(() => {
    if (toggle5) {
        let index = 0;

        const interval = setInterval(() => {
            setText(fullText.slice(0, index));
            index += 1;
            if (index > fullText.length) {
                clearInterval(interval);
                setToggle5(true);
            }
        }, 20);
    }
  }, [toggle5]);

  return (
    <div className={styles['main']}>
        <div className={styles['container']}>
            <div className={styles['log-container']}>
                <div className={styles['title']}>{title}</div>
                <div className={styles['content']}>
                    <div className={styles['sprite-container']}>
                        <img src="/character_image/e626.png"  />
                    </div>
                    <div className={styles['info']}>
                        <h2>{code}</h2>
                        <h3>{affiliation}</h3>
                        <p>{pText}</p>
                    </div>
                </div>
                <div className={styles['text']}>{text}</div>
            </div>
            <div className={styles['button-container']}>
                {text.length === fullText.length && (
                    <button onClick={handleNext}>NEXT</button>
                )}
            </div>
        </div>
    </div>
  );
};

export default LogComponent;
