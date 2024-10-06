// src/components/BackgroundImage.tsx

import React, { useEffect, useState } from 'react';
import './BackgroundImage.css'; // External CSS for styles

interface BackgroundImageProps {
  image1: string;  // First background image URL
  image2: string;  // Second background image URL
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ image1, image2 }) => {
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll effect within the container
  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = event.currentTarget.scrollTop;
    setScrollY(scrollTop);
  };

  useEffect(() => {
    // Initially set the scroll position to 0
    setScrollY(0);
  }, []);

  // Calculate opacity based on scroll position
  const calculateOpacity = () => {
    const maxScroll = 300; // Adjust this value to control the scroll range
    const opacity = Math.min(1, scrollY / maxScroll);
    return opacity;
  };

  return (
    <div className="background-container" onScroll={handleScroll}>
      {/* First Image */}
      <div
        className="background-image image1"
        style={{ opacity: 1 - calculateOpacity(), backgroundImage: `url(${image1})` }}
      />
      {/* Second Image */}
      <div
        className="background-image image2"
        style={{ opacity: calculateOpacity(), backgroundImage: `url(${image2})` }}
      />
    </div>
  );
};

export default BackgroundImage;
