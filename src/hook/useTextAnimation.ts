import { useState, useEffect, useCallback } from "react";

export const useTextAnimation = (fullText: string, intervalTime: number = 30, onFinish?: () => void) => {
  const [text, setText] = useState("");
  const [isStarted, setIsStarted] = useState(false); // Trigger state
  const [isFinished, setIsFinished] = useState(false);

  const startAnimation = useCallback(() => {
    setIsStarted(true);
  }, []);

  useEffect(() => {
    if (!isStarted) return;
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index += 1;
      if (index > fullText.length) {
        clearInterval(interval);
        setIsFinished(true);
        onFinish?.();
      }
    }, intervalTime);
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [isStarted, fullText, intervalTime]);

  useEffect(() => {
    setText("");
    setIsStarted(false);
    setIsFinished(false);
  }, [fullText]);

  return { text, isStarted, isFinished, startAnimation };
};