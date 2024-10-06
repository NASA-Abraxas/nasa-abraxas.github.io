import { gsap } from 'gsap';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import Globe from 'react-globe.gl';
import { Object3D, Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { DialogueBoxRight } from '../../component/DialogueBoxRight';
import { NextButton } from '../../component/NextButton';
import { DifficultyContext } from '../../context/DifficultyContext';
import { useTextAnimation } from '../../hook/useTextAnimation';
import { Asia } from './Ch3Page2Detail/Asia';
import { Marine } from './Ch3Page2Detail/Marine';
import { Oklahoma } from './Ch3Page2Detail/Oklahoma';
import { Oregon } from './Ch3Page2Detail/Oregon';
import { SantaBarbara } from './Ch3Page2Detail/SantaBarbara';
import { SouthAfrica } from './Ch3Page2Detail/SouthAfrica';
import { Western } from './Ch3Page2Detail/Western';
import { Wetland } from './Ch3Page2Detail/Wetland';
import pinPositions from './Ch3Page2GlobePin.json';
import styles from './Ch3Page2GlobePin.module.css';

// Define the type for each pin's data
interface PinData {
  lat: number;
  lng: number;
  altitude: number;
  object3D: Object3D;
  id: string;
}

export const Ch3Page2GlobePin: React.FC = () => {
  const [isTextEnded, setIsTextEnded] = useState(false);
  const [isNextButtonVisible, setIsNextButtonVisible] = useState(false);
  const { difficulty } = useContext(DifficultyContext);
  const fullText = difficulty === "junior"
    ? "PACE data can influence many parts of our society. Turn around the Earth and click on the points."
    : difficulty === "intermediate"
      ? "PACE data can influence many aspects of our society. Rotate the Earth and click on the points to learn more."
      : "PACE data influence a multitude of societal sectors. Rotate the globe and select various points of interest to learn more.";
  const { text, startAnimation } = useTextAnimation(fullText, 50, () => {
    gsap.to(`.${styles['dialogue-container']}>div`, { yPercent: -200, duration: 2, delay: 3 });
    setTimeout(() => {
      setIsTextEnded(true);
    }, 4000);
  });
  useEffect(() => {
    startAnimation();
  }, []);

  const [selected, setSelected] = useState("");

  // globe settings
  const globeEl = useRef<any>(null);
  const [pinsData, setPinsData] = useState<PinData[]>([]);
  const loader = new GLTFLoader();

  // Load the GLB model (push pin) and map the pin data
  useEffect(() => {
    // Load the GLB model (pin)
    loader.load(
      '3d model/map_pin.glb', // Update this to the correct path
      (gltf) => {
        // Once loaded, map the pin data
        const pinObjects = pinPositions.map((pinPos) => {
          const pinModel = gltf.scene.clone();
          // Scale down the pin model
          pinModel.scale.set(30, 30, 30);
          // Ensure pin is facing outward (towards space)
          pinModel.lookAt(new Vector3(0, 0, 0));
          // rotate object to right orientation
          pinModel.rotateX(Math.PI / 2);
          // Return the pin model with its lat/lng
          return {
            lat: pinPos.lat,
            lng: pinPos.lng,
            altitude: 0.02, // Set altitude slightly above the globe surface
            object3D: pinModel,
            id: pinPos.id
          };
        });

        // Update state with the loaded pin models
        setPinsData(pinObjects);
      },
      undefined,
      (error) => {
        console.error('Error loading the GLB file:', error);
      }
    );
  }, []);


  const globeContainerRef = useRef<any>(null);
  const [globeWidth, setGlobeWidth] = useState(0);
  const [globeHeight, setGlobeHeight] = useState(0);
  useEffect(() => {
    if (!globeContainerRef.current) return;
    const { clientWidth, clientHeight } = globeContainerRef.current;
    setGlobeWidth(clientWidth);
    setGlobeHeight(clientHeight);
  }, [globeContainerRef.current]);

  useEffect(() => {
    globeEl.current.pointOfView({ altitude: 3 }, 0);
  }, []);
  useEffect(() => {
    if (isTextEnded)
      globeEl.current.pointOfView({ altitude: 2.5 }, 1000);
  }, [isTextEnded]);


  // Function to rotate the globe to the clicked pin's lat/lng
  const handleObjectClick = (obj: any) => {
    const { lat, lng, id } = obj;
    if (globeEl.current) {
      // convert the center of the globe to globe surface coordinates
      const currentPos = globeEl.current.toGlobeCoords(
        globeContainerRef.current.clientWidth / 2,
        globeContainerRef.current.clientHeight / 2
      );
      const distance = 1.75; // Set a distance from the earth's surface
      if (selected) {
        // calculate the midpoint between the current position and the new position
        // considering that lng -180 and 180 are the same point
        const stopPos = {
          lat: (currentPos.lat + lat) / 2,
          lng: (currentPos.lng + lng) / 2,
          altitude: 2.5
        };
        // lng adjustment
        if (Math.abs(currentPos.lng - lng) > 180) {
          stopPos.lng = (currentPos.lng + lng + 360) / 2;
        }
        globeEl.current.pointOfView(stopPos, 500);
        setTimeout(() => {
          globeEl.current.pointOfView({ lat, lng, altitude: distance }, 500);
        }, 500);
      }
      else {
        globeEl.current.pointOfView({ lat, lng, altitude: distance }, 1000); // Smooth transition over 1 second
      }
      setSelected(id);
    }
  };
  // end globe settings



  return (
    <div className='page-container' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <div className={`${styles['globe-container']} ${selected && styles['globe-container-small']}`} ref={globeContainerRef}>
        <Globe
          ref={globeEl}
          width={globeWidth}
          height={globeHeight}
          globeImageUrl="Land_ocean_ice_cloud_hires.jpg"
          backgroundColor="#000000"
          objectsData={pinsData}  // Pass the pinsData to the Globe
          objectLat={(d: any) => d.lat}  // Access the lat of the pin
          objectLng={(d: any) => d.lng}  // Access the lng of the pin
          objectAltitude={(d: any) => d.altitude}  // Altitude slightly above the globe
          objectThreeObject={(d: any) => d.object3D}  // The actual 3D object (pin)
          onObjectClick={handleObjectClick}  // Handle pin click events
        />
      </div>

      {selected && <div className={styles['description-container']}>
        {selected === "SantaBarbara" && <SantaBarbara />}
        {selected === "Oregon" && <Oregon />}
        {selected === "Asia" && <Asia />}
        {selected === "Marine" && <Marine />}
        {selected === "SouthAfrica" && <SouthAfrica />}
        {selected === "Oklahoma" && <Oklahoma />}
        {selected === "Western" && <Western />}
        {selected === "Wetland" && <Wetland />}
      </div>}

      {!isTextEnded && <div className={styles['dialogue-container']}>
        <DialogueBoxRight imageSrc="character_image/rodriguez.png" name="Dr. Rodriguez" text={text} fullText={fullText} />
      </div>}

      {isNextButtonVisible && !selected && <NextButton delay={1000} />}
      {selected && <div className={styles['button-container']}>
        <Fade duration={1000} delay={1000}>
          <button onClick={() => {
            setSelected("");
            setIsNextButtonVisible(true);
            globeEl.current.pointOfView({ altitude: 2.5 }, 1000);
          }}>BACK</button>
        </Fade>
      </div>}
    </div>
  );
};
