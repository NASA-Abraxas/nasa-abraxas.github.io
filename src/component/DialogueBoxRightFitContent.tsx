import React from 'react';
import styles from './DialogueBoxRightFitContent.module.css'

interface DialogueBoxProps {
  imageSrc: string;
  name: string;
  children: React.ReactNode;
}

export const DialogueBoxRight: React.FC<DialogueBoxProps> = ({ imageSrc, name, children }) => {
  return (
    <div className={styles["dialogue-box"]}>
      <img src={imageSrc} alt={name} className={styles["character-image"]} />
      <div className={styles["text-container"]}>{children}</div>
    </div>
  );
};

