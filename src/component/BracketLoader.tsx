// src/components/BracketLoader.tsx
import React, { useState, useEffect, useRef } from "react";
import styles from "./BracketLoader.module.css";

type BracketLoaderProps = {
  children: React.ReactNode;
  duration?: number; // Duration of the bracket animation in milliseconds
  borderSize?: number; // Thickness of the bracket border
  spacing?: number; // Spacing between the child and the brackets
  verticalMargin?: number; // Vertical margin added to bracket height
  bracketWidth?: number; // Width of the brackets
  initialOffset?: number; // Initial offset from the center for the brackets
  containerOffset?: number; // Offset for the container width
};

const BracketLoader: React.FC<BracketLoaderProps> = ({
  children,
  duration = 1000,
  borderSize = 2,
  spacing = 10,
  verticalMargin = 10,
  bracketWidth = 20,
  initialOffset = 20,
  containerOffset = 0,
}) => {
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [bracketHeight, setBracketHeight] = useState(0);
  const [bracketContainerWidth, setBracketContainerWidth] = useState(0);

  useEffect(() => {
    // Measure the height of the content to dynamically set the bracket height
    if (contentRef.current) {
      setBracketHeight(contentRef.current.offsetHeight);
      setBracketContainerWidth(contentRef.current.offsetWidth);
    }
  }, [children]);
  

  useEffect(() => {
    // Set a timer to reveal content after the bracket animation finishes
    const timer = setTimeout(() => {
      setShowContent(true);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div className={styles["bracket-loader-container"]} style={{"width": bracketContainerWidth+containerOffset}}>
      {/* Left Bracket */}
      <div
        className={styles["left-bracket"]}
        style={{
          height: `${bracketHeight + verticalMargin*2}px`, // Add margin directly to bracket height
          borderWidth: `${borderSize}px`,
          width: `${bracketWidth}px`,
          animationDuration: `${duration}ms`,
          transform: `translateX(-${initialOffset}px)`, // Start with offset
        }}
      ></div>
      
      {/* Right Bracket */}
      <div
        className={styles["right-bracket"]}
        style={{
          height: `${bracketHeight + verticalMargin*2}px`, // Add margin directly to bracket height
          borderWidth: `${borderSize}px`,
          width: `${bracketWidth}px`,
          animationDuration: `${duration}ms`,
          transform: `translateX(${initialOffset}px)`, // Start with offset
        }}
      ></div>

      {/* Child component */}
      <div
        ref={contentRef}
        className={styles[`content-${showContent ? "visible" : ""}`]}
        style={{
          marginLeft: `${spacing}px`,
          marginRight: `${spacing}px`,
          marginTop: `${verticalMargin}px`, // Add margin to the top of the child
          marginBottom: `${verticalMargin}px`, // Add margin to the bottom of the child
          alignSelf: 'center', // Vertically center the child within the container
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default BracketLoader;
