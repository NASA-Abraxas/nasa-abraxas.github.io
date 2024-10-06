import React, { useState, useEffect, useRef } from 'react';
import Globe, { GlobeMethods } from 'react-globe.gl';
import { Slider } from '@mui/material'; // Using Material UI for the slider
import { styled } from '@mui/material/styles';
import styles from './GlobeWithSlider.module.css';  // Import CSS file for styling
import Dropdown from './Dropdown';


const CustomSlider = styled(Slider)(({  }) => ({
  "& .MuiSlider-thumb": {
    backgroundColor: "gray",
    border: "4px solid white",
    height: "25px",
    width: "25px",
  },
  "& .MuiSlider-thumb:hover": {
    boxShadow: "none"
  },
  "& .MuiSlider-thumb:active": {
    boxShadow: "none"
  },
  "& .MuiSlider-rail": {
    color: "rgba(255, 255, 255, 1)",
    opacity: 1,
    height: "10px"
  },
  "& .MuiSlider-track": {
    color: "rgba(255, 255, 255, 1)",
    height: "10px"
  }
}));

// Define component props if needed
interface GlobeWithSliderProps {
  imageSets: { [key: string] : string[]};  // Array of image URLs
  labelSets: { [key: string] : string[]};
  colorBarSet: { [key: string] : string};
}

const GlobeWithSlider: React.FC<GlobeWithSliderProps> = ({ imageSets, labelSets, colorBarSet }) => {
  const [currentSet, SetCurrentSet] = useState<string>("");  // Get the image URLs from the props
  const [keys, SetKeys] = useState<string[]>([""]) ;
  const [currentIndex, setCurrentIndex] = useState<number>(0);  // Track the current image index
  const [globeImage, setGlobeImage] = useState<string>("");  // Initially set to the first image

  const globeEl = useRef<GlobeMethods>();
  const globeContainerRef = useRef<any>(null);

  useEffect(() => {
    const globe = globeEl.current;
    if (globe) {
      const controls = globe.controls();
      // const camera = globe.camera();

      controls.autoRotate = false;
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.enableRotate = true;
    }
    }, []);
  
  // Update the globe image whenever the index changes
  useEffect(() => {
    if (!imageSets) return;
    const keys = Object.keys(imageSets);
    SetKeys(keys);
    SetCurrentSet(keys[0]);
    setGlobeImage(imageSets[keys[0]][0]);
  }, [imageSets]);

  useEffect(() => {
    if (!imageSets) return;
    if (!imageSets[currentSet]) return;
    setGlobeImage(imageSets[currentSet][currentIndex]);
  }, [currentIndex, currentSet]);

  // Handle slider change
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setCurrentIndex(newValue as number);
    console.log(event);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      {/* Globe component */}
      <div ref={globeContainerRef} className={styles['globe-container']}>
        <Globe
            ref={globeEl}
            globeImageUrl={globeImage}  // Image URL changes as slider moves
            backgroundColor="rgb(0,0,0)"
            width={400}
            height={400}
        />
      </div>
      <img src={(colorBarSet && colorBarSet[currentSet]) ? colorBarSet[currentSet] : ""} className={styles["colorbar"]} style={{"width":"30px", "height": "400px", "position": "absolute", "right":"20px"}}/>
      
      {/* Slider component */}
      <CustomSlider
        value={currentIndex}
        onChange={handleSliderChange}
        aria-labelledby="image-slider"
        step={1}
        min={0}
        max={imageSets ? (imageSets[currentSet] ? imageSets[currentSet].length - 1 : 0) : 0}
        valueLabelDisplay="auto"
        style={{ width: '80%', marginTop: '20px' }}
        valueLabelFormat={(value:number) => `${(labelSets && labelSets[currentSet]) ? labelSets[currentSet][value] : value}`}
      />
      <div style={{"position": "absolute", "top": "470px"}}>
      <Dropdown options={keys} onSelect={(option) => {
        setCurrentIndex(0);
        setGlobeImage(imageSets[option][0]);
        SetCurrentSet(option);
      }} />
      </div>
    </div>
  );
};

export default GlobeWithSlider;