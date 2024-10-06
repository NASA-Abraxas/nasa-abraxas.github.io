import { useCallback, useEffect, useState } from "react";
import { useTextAnimation } from "./useTextAnimation";

export const useDialogue = (
  textsFirst: string[],
  textsSecond: string[],
  intervalTime: number,
  onDialogueEnded?: () => void
) => {
  const [textIndex, setTextIndex] = useState(-1);
  const [isDialogueStarted, setIsDialogueStarted] = useState(false);
  const [isDialogueEnded, setIsDialogueEnded] = useState(false);

  const handleTextEnd = useCallback(() => {
    if (textIndex >= textsFirst.length + textsSecond.length - 1) {
      setIsDialogueEnded(true);
      onDialogueEnded?.();
    }
  }, [textIndex, textsFirst, textsSecond, onDialogueEnded]);
  const textAnim1 = useTextAnimation(textsFirst[Math.max(Math.floor(textIndex / 2), 0)], intervalTime, handleTextEnd);
  const textAnim2 = useTextAnimation(textsSecond[Math.max(Math.floor((textIndex - 1) / 2), 0)], intervalTime, handleTextEnd);

  useEffect(() => {
    if (textIndex < 0) return;
    if (textIndex === 0) {
      setIsDialogueStarted(true);
    }
    if (textIndex % 2 === 0) {
      textAnim1.startAnimation();
    } else {
      textAnim2.startAnimation();
    }
  }, [textIndex]);


  return {
    textIndex,
    text1: textAnim1.text,
    text2: textAnim2.text,
    isText1Animating: textAnim1.isStarted && !textAnim1.isFinished,
    isText2Animating: textAnim2.isStarted && !textAnim2.isFinished,
    isAnimating: (textAnim1.isStarted && !textAnim1.isFinished) || (textAnim2.isStarted && !textAnim2.isFinished),
    isDialogueStarted,
    isDialogueEnded,
    startNextText: () => { setTextIndex(textIndex + 1); }
  }
};