import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import BracketLoader from './BracketLoader';
import styles from './ChapterChange.module.css';
import { useTextAnimation } from '../hook/useTextAnimation';

type ChapterChangeProps = {
  loadingText: string;
  chapterText: string;
  onClick: () => void;
  containerOffset?: number;
};

const ChapterChange: React.FC<ChapterChangeProps> = (
  { loadingText, chapterText, onClick, containerOffset = 0 }
) => {
  const [loading, setLoading] = useState(true);
  const [startText, setStartText] = useState(false);
  const { text, startAnimation } = useTextAnimation(chapterText);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setStartText(true);
    }, 5000);
  }, []);

  useEffect(() => {
    if (startText) {
      startAnimation();
    }
  }, [startText]);


  return (
    <div className={styles["loader-container"]}>
      {loading && (
        <>
          <div className={styles['spinner-container']}><Spinner radius={20} /></div>
          <div className={styles["loading-text"]}>{loadingText}</div>
        </>
      )}
      {!loading && (
        <>
          <div className={styles["bracket-container"]}>
            <BracketLoader
              duration={1000}
              borderSize={4}
              spacing={15}
              verticalMargin={20}
              bracketWidth={30} // Width of the brackets
              initialOffset={50} // Start the brackets further from the center
              containerOffset={containerOffset} // Add extra width to the container
            >
              <div className={styles["welcome-text"]}>
                {text}
              </div>
            </BracketLoader>
          </div>
          <div className={styles["button-container"]}>
            <button onClick={onClick}>START</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ChapterChange;
