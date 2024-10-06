import React from 'react';
import styles from './Spinner.module.css';

interface FancyLoaderProps {
  radius?: number; // The radius of the loader (in pixels)
  speed?: number;  // The speed of the spinning (in seconds)
  color?: string;  // The color of the lines
}

const FancyLoader: React.FC<FancyLoaderProps> = ({
  radius = 50, // Default radius is 50px
  speed = 2,   // Default speed is 2 seconds for one full rotation
  color = '#FFFFFF' // Default color is white
}) => {
  const loaderStyle = {
    width: `${radius * 2}px`,
    height: `${radius * 2}px`,
    animation: `${styles.spin} ${speed}s linear infinite`,
    borderColor: color,
  };

  const lineStyle = {
    backgroundColor: color,
  };

  return (
    <div className={styles.loader} style={loaderStyle}>
      <div className={`${styles.line} ${styles.horizontal}`} style={lineStyle}></div>
      <div className={`${styles.line} ${styles.vertical}`} style={lineStyle}></div>
    </div>
  );
};

export default FancyLoader;
