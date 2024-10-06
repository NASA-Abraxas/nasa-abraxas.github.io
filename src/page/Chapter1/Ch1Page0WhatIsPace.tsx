import { useContext } from "react";
import { DialogueBoxLeft } from "../../component/DialogueBoxLeft";
import { NextButton } from "../../component/NextButton";
import { DifficultyContext } from "../../context/DifficultyContext";
import { text1 } from './Ch1Page0WhatIsPace.json';
import styles from "./Ch1Page0WhatIsPace.module.css";

export const Ch1Page0WhatIsPace = () => {
  const { difficulty } = useContext(DifficultyContext);
  return (
    <div className={styles['container']}>
      <div className={styles['logo-container']}>
        <img src="pace-logo.png" alt="PACE" />
      </div>
      <div className={styles['article']}>
        <DialogueBoxLeft imageSrc="character_image/rodriguez.png" name="Dr. Rodriguez" text={text1[difficulty]} isAnimated />
      </div>
      <NextButton delay={text1[difficulty].length * 30 + 1500} />
    </div>
  )
}