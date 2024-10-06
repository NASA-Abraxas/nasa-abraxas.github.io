// src/components/BorderBlink.tsx
import React, { useState, useEffect } from "react";
import styles from "./BlinkingBorder.module.css";

type BorderBlinkProps = {
  children: React.ReactNode;
  duration?: number; // Duration of the blink animation in milliseconds
  borderThickness?: number; // Thickness of the border in pixels
  cornerSize?: number; // Size of each corner in pixels
  horizontalMargin?: number; // Horizontal space between the border and the child content in pixels
  verticalMargin?: number; // Vertical space between the border and the child content in pixels
};

const BorderBlink: React.FC<BorderBlinkProps> = ({
  children,
  duration = 1000,
  borderThickness = 2,
  cornerSize = 12,
  horizontalMargin = 10,
  verticalMargin = 10,
}) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Set a timer to reveal content after the blink animation finishes
    const timer = setTimeout(() => {
      setShowContent(true);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div
      className={styles.borderContainer}
      style={{
        animationDuration: `${duration}ms`,
        padding: `${verticalMargin}px ${horizontalMargin}px`,
        borderWidth: `${borderThickness}px`,
      }}
    >
      <div className={styles.borderCorners}>
        <div
          className={styles.corner + " " + styles.cornerTopLeft}
          style={{
            width: `${cornerSize}px`,
            height: `${cornerSize}px`,
            borderWidth: `${borderThickness}px`,
          }}
        ></div>
        <div
          className={styles.corner + " " + styles.cornerTopRight}
          style={{
            width: `${cornerSize}px`,
            height: `${cornerSize}px`,
            borderWidth: `${borderThickness}px`,
          }}
        ></div>
        <div
          className={styles.corner + " " + styles.cornerBottomLeft}
          style={{
            width: `${cornerSize}px`,
            height: `${cornerSize}px`,
            borderWidth: `${borderThickness}px`,
          }}
        ></div>
        <div
          className={styles.corner + " " + styles.cornerBottomRight}
          style={{
            width: `${cornerSize}px`,
            height: `${cornerSize}px`,
            borderWidth: `${borderThickness}px`,
          }}
        ></div>
      </div>

      {/* Child component is always rendered, but opacity is controlled */}
      <div className={showContent ? styles.contentVisible : styles.contentHidden}>
        {children}
      </div>
    </div>
  );
};

export default BorderBlink;
