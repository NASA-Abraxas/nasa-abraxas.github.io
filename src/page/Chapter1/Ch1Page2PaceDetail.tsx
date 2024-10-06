import { gsap } from 'gsap';
import { useContext, useEffect, useState } from "react";
import { BottomGlobe } from "../../component/BottomGlobe";
import { DialogueBoxRight } from "../../component/DialogueBoxRight";
import { NextButton } from "../../component/NextButton";
import { SatelliteContainer } from "../../component/SatelliteContainer";
import { DifficultyContext, DifficultyType } from "../../context/DifficultyContext";
import { useTextAnimation } from "../../hook/useTextAnimation";
import partsData from "./Ch1Page2PaceDetail.json";
import styles from "./Ch1Page2PaceDetail.module.css";

interface PartsData {
  [key: string]: {
    title: string;
    content: {
      [key in DifficultyType]?: string;
    };
    cameraPosition: number[];
  };
}

const equal = (a: number[], b: number[]) => {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
};

const lerp = (a: number[], b: number[]): number[] => {
  return [
    a[0] + (b[0] - a[0]) / 10,
    a[1] + (b[1] - a[1]) / 10,
    a[2] + (b[2] - a[2]) / 10,
  ];
}

const distSq = (a: number[], b: number[]) => {
  return (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2;
}

export const Ch1Page2PaceDetail = () => {
  const fullText = "Click on parts to see details.";
  const { text, startAnimation } = useTextAnimation(fullText, 50, () => {
    gsap.to(`.${styles['dialogue-container']}`, { yPercent: -200, duration: 2, delay: 3 });
  });
  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  const [cameraPosition, setCameraPosition] = useState<number[]>([10, 0, 0]);
  const [cameraPositionTarget, setCameraPositionTarget] = useState<number[]>([10, 0, 0]);

  const [selectedPart, setSelectedPart] = useState<string | null>(null);
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedPart(e.currentTarget.id);
    setCameraPositionTarget((partsData as PartsData)[e.currentTarget.id].cameraPosition);
  };

  // console.log(cameraPosition, cameraPositionTarget);

  useEffect(() => {
    if (!equal(cameraPosition, cameraPositionTarget)) {
      if (distSq(cameraPosition, cameraPositionTarget) < 0.01) {
        setCameraPosition(cameraPositionTarget);
        return;
      }
      const timer = setTimeout(() => {
        setCameraPosition(lerp(cameraPosition, cameraPositionTarget));
      }, 1000 / 60);
      return () => clearTimeout(timer);
    }
  }, [cameraPosition, cameraPositionTarget]);


  const { difficulty } = useContext(DifficultyContext);

  return (
    <div className="page-container">
      <BottomGlobe />


      <div className={styles['dialogue-container']}>
        <DialogueBoxRight imageSrc="character_image/rodriguez.png" name="Dr. Rodriguez" text={text} fullText={fullText} />
      </div>
      {selectedPart && <div className={styles['description-container']}>
        <h2>{(partsData as PartsData)[selectedPart].title}</h2>
        <p>{(partsData as PartsData)[selectedPart].content[difficulty]}</p>
        <img src={`pace_parts_image/${selectedPart.toLowerCase()}.png`} alt="part" />
      </div>}
      <SatelliteContainer cameraPosition={cameraPosition} />



      <nav className={styles['button-container']}>
        <button id="OCI" onClick={handleButtonClick}>OCI</button>
        <button id="SPEXone" onClick={handleButtonClick}>SPEXone</button>
        <button id="HARP2" onClick={handleButtonClick}>HARP2</button>
        <button id="Radiator Shield" onClick={handleButtonClick}>Radiator Shield</button>
        <button id="Bus" onClick={handleButtonClick}>Bus</button>
        <button id="Solar Array" onClick={handleButtonClick}>Solar Array</button>
      </nav>

      <NextButton delay={12_000} />
    </div>
  )

}