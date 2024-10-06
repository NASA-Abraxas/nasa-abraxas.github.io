import React from 'react';
import styles from './DialogueBoxIndex.module.css'
import { useTextAnimation } from '../hook/useTextAnimation';

interface DialogueBoxProps {
  imageSrc: string;
  name: string;
  isAnimated?: boolean;
  text: string;
  fullText?: string;
}

export const DialogueBoxLeft: React.FC<DialogueBoxProps> = ({ imageSrc, name, isAnimated, text, fullText }) => {
  const textAnim = useTextAnimation(text);

  return (
    <div className={styles["dialogue-box"]}>
      <img src={imageSrc} alt={name} />
      <div>
        <div className={styles["character-name"]}>{name}</div>
        <div className={styles["dialogue-text"]}>
          <span>{isAnimated ? textAnim.text : text}</span>
          <span>{fullText || text}</span>
        </div>
      </div>
    </div>
  );
};

