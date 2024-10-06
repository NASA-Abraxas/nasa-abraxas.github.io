import React, { useEffect } from 'react';
import styles from './DialogueBoxIndex.module.css'
import { useTextAnimation } from '../hook/useTextAnimation';

interface DialogueBoxProps {
  imageSrc: string;
  name: string;
  isAnimated?: boolean;
  text: string;
  fullText?: string;
}

export const DialogueBoxRight: React.FC<DialogueBoxProps> = ({ imageSrc, name, isAnimated, text, fullText }) => {
  const textAnim = useTextAnimation(text);
  if (isAnimated) {
    useEffect(() => {
      textAnim.startAnimation();
    }, []);
  }

  return (
    <div className={styles["dialogue-box"]}>
      <div >
        <div className={styles["character-name"]} style={{ alignSelf: "end" }}>{name}</div>
        <div className={styles["dialogue-text"]}>
          <span>{isAnimated ? textAnim.text : text}</span>
          <span>{fullText || text}</span>
        </div>
      </div>
      <img src={imageSrc} alt={name} />
    </div>
  );
};

