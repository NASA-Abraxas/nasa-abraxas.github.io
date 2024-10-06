import React, { useState } from "react";
import "./ZoomIn.css"; // Import styles
import CircleHover from "./CircleHover";
import arrowImage1 from "/atmo/arrow1.png";
import arrowHoverImage1 from "/atmo/arrow1_hover.png";
import arrowImage2 from "/atmo/arrow2.png";
import arrowHoverImage2 from "/atmo/arrow2_hover.png";

interface ZoomImageProps {
  type: string;// Define props here
}

const items_atmo = [
    { id: 1, x: 180, y: 180, width: 55, height: 55, text: "Aerosol Absorption\nAerosol Size Distributions\nConcentration of Brown/Black Carbon\n\n\n\n", type: "circle" },
    { id: 2, x: 250, y: 370, width: 55, height: 55, text: "Ocean Reflectance\nWhitecap Fraction\nAngular Light Distributions\n\n\n\n", type: "circle" },
    { id: 3, x: 520, y: 370, width: 55, height: 55, text: "Oil Slick Detection\n\n\n\n", type: "circle" },
    { id: 4, x: 600, y: 170, width: 55, height: 55, text: "Cloud Phase (liquid/ice)\nDroplet Size Distributions\nIce Crystal Shpaes\n\n\n\n", type: "circle" },
    { id: 5, x: 280, y: 70, width: 20, height: 150, text: "Cloud Optical Depth\nCloud Height\nCloud Thickness\n\n\n\n", type: "arrow", imageUrl: arrowImage1, hoverImageUrl: arrowHoverImage1 },
    { id: 6, x: 250, y: 150, width: 10, height: 100, text: "Aerosol Depth\nAerosol Heights and Layers\n\n\n\n", type: "arrow", imageUrl: arrowImage1, hoverImageUrl: arrowHoverImage1 },
];

const items_ocean = [
  { id: 1, x: 250, y: 70, width: 55, height: 55, text: "Land Albedo (Proportion of Refected Light)\nVegetation Indices\nBest Efforts for Additional Land Products\n\n\n\n\n\n", type: "circle" },
  { id: 2, x: 300, y: 250, width: 55, height: 55, text: "Photosynthetic Pigments\nPhytoplankton Communities\nFluorescence from Phytoplankton\n\n\n\n", type: "circle" },
  { id: 3, x: 350, y: 200, width: 55, height: 55, text: "Particulate Carbon\nSuspended Matter\n\n\n\n", type: "circle" },
  { id: 4, x: 600, y: 350, width: 55, height: 55, text: "Bathymetry Classifications\n\n\n\n", type: "circle" },
  { id: 5, x: 500, y: 140, width: 20, height: 300, text: "Radiation Available for Photosynthesis\nLight Transmission\nAbsorption Properties\nScattering Properties\n\n\n\n", type: "arrow", imageUrl: arrowImage1, hoverImageUrl: arrowHoverImage1 },
  { id: 6, x: 550, y: 150, width: 140, height: 10, text: "Light Penetration\nAngular Light Distributions\nIndex of Refraction\n\n\n\n", type: "arrow", imageUrl: arrowImage2, hoverImageUrl: arrowHoverImage2 },

]


const ZoomImage: React.FC<ZoomImageProps> = ({ type }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
    setIsClicked(true);
  };
  if (type === "atmo") {
    return (
      <div className="full-container">
          {!isClicked && <img src="/click_here.png" className="click-image" onClick={handleImageClick}></img>}
          <div className={`image-container ${isZoomed ? "zoomed" : "unzoomed"}`}>
              <img className="image1-top" src="/atmo/atmo_blank.png" onClick={handleImageClick}></img>
              {isZoomed ? <img className="image2-top" src="/atmo/atmo_rain.png" style={{"opacity":1}} onClick={handleImageClick}></img> : <img className="image2-top" src="/atmo/atmo_rain.png" onClick={handleImageClick}></img>}
          </div>
          {isZoomed && (<div className="circle-hover-container"><CircleHover items={items_atmo} /></div>)}
      </div>
    );
  } else {
    return (
      <div className="full-container">
        {!isClicked && <img src="/click_here.png" className="click-image" onClick={handleImageClick}></img>}
          <div className={`image-container ${isZoomed ? "zoomed" : "unzoomed"}`}>
              <img className="image1" src="/atmo/atmo_blank.png" onClick={handleImageClick}></img>
              {isZoomed ? <img className="image2" src="/atmo/atmo_rainbow.png" style={{"opacity":1}} onClick={handleImageClick}></img> : <img className="image2" src="/atmo/atmo_rainbow.png" onClick={handleImageClick}></img>}
          </div>
          {isZoomed && (<div className="circle-hover-container"><CircleHover items={items_ocean} /></div>)}
      </div>
    )
  }
};

export default ZoomImage;
