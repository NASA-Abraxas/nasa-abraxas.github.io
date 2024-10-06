import React, { useContext, useRef } from "react";
import { DifficultyContext, DifficultyType } from "../context/DifficultyContext";
import styles from "./HorizontalSlider.module.css";

interface Slide {
  imageUrl: string;
  title: string;
  description: {
    [key in DifficultyType]: string;
  };
}

interface HorizontalSliderProps {
  slides: Slide[];
}

const HorizontalSlider: React.FC<HorizontalSliderProps> = ({ slides }) => {
  const { difficulty } = useContext(DifficultyContext);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Scroll to the next slide
  const scrollRight = () => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth; // Get the width of one slide
      sliderRef.current.scrollBy({ left: slideWidth, behavior: "smooth" });
    }
  };

  // Scroll to the previous slide
  const scrollLeft = () => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth; // Get the width of one slide
      sliderRef.current.scrollBy({ left: -slideWidth, behavior: "smooth" });
    }
  };

  return (
    <div className={styles["slider-container"]}>
      <div className={styles["arrow-left"]} onClick={scrollLeft}>
        <svg width="60px" height="80px" viewBox="0 0 50 80" xmlSpace="preserve">
          <polyline fill="none" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="
        45.63,75.8 0.375,38.087 45.63,0.375 "/>
        </svg>  
      </div>
      <div className={styles["slider-wrapper"]} ref={sliderRef}>
        {slides.map((slide, index) => (
          <div key={index} className={styles["slider-section"]}>
            <img src={slide.imageUrl} alt={slide.title} className={styles["slider-image"]} />
            <h2 className={styles["slider-title"]}>{slide.title}</h2>
            <p className={styles["slider-description"]}>{slide.description[difficulty]}</p>
          </div>
        ))}
      </div>
      <div className={styles["arrow-right"]} onClick={scrollRight}>
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="60px" height="80px" viewBox="0 0 50 80" xmlSpace="preserve">
          <polyline fill="none" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="
        0.375,0.375 45.63,38.087 0.375,75.8 "/>
        </svg>
      </div>
    </div>
  );
};

export default HorizontalSlider;
