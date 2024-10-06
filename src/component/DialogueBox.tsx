import React from 'react';
import styles from './DialogueBox.module.css';

interface DialogueBoxProps {
  imageSrc: string;
  name: string;
  text: string;
}

const DialogueBox: React.FC<DialogueBoxProps> = ({ imageSrc, name, text }) => {
  return (
    <div className={styles["dialogue-box"]}>
      <div className={styles["character-image-container"]}>
        <img src={imageSrc} alt={name} className={styles["character-image"]} />
      </div>
      <div className={styles["text-container"]}>
        <div className={styles["character-name"]}>{name}</div>
        <div className={styles["dialogue-text"]}>{text}</div>
      </div>
    </div>
  );
};

export default DialogueBox;
