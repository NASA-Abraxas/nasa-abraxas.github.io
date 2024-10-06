import React, { useContext } from 'react';
import styles from './Ch2BottomPage.module.css'; // You will add your CSS styles in a separate file.
import GlobeWithSlider from '../../component/GlobeWithSlider';
import { Chlorophyll_A, Phytoplankton_Carbon, Apparent_Visible_Wavelength } from './filenames.json'
import { Chlorophyll_A_, Phytoplankton_Carbon_, Apparent_Visible_Wavelength_ } from './labels.json'
import { useNavigateSubPage } from '../../hook/useNavigateSubPage';
import { DifficultyContext } from '../../context/DifficultyContext';

type AtmosphereProps = {
    text: string;
    isFinished: boolean;
}

interface ImageSets {
  [key: string]: string[];
}

const Atmosphere: React.FC<AtmosphereProps> = ({text="", isFinished=false}) => {
  const { difficulty } = useContext(DifficultyContext);
  const handleNavigate1 = useNavigateSubPage("ocean");
  const handleNavigate2 = useNavigateSubPage("plank");
  
  const imageSets: ImageSets = {
    "Chlorophyll A": Chlorophyll_A,
    "Phytoplankton Carbon": Phytoplankton_Carbon,
    "Apparent Visible Wavelength": Apparent_Visible_Wavelength
  };

  const labelSets: ImageSets = {
    "Chlorophyll A": Chlorophyll_A_,
    "Phytoplankton Carbon": Phytoplankton_Carbon_,
    "Apparent Visible Wavelength": Apparent_Visible_Wavelength_
  };

  const colorBarSet = {
    "Chlorophyll A":"/pace_data/colorbar/colorbar.png",
    "Phytoplankton Carbon":"/pace_data/colorbar/colorbar.png",
    "Apparent Visible Wavelength":"/pace_data/colorbar/colorbar.png"
  };

  return (
    <div className={styles["container"]}>
      <h1>Ocean</h1>
      <div className={styles["image-container"]}>
        <GlobeWithSlider imageSets={imageSets} labelSets={labelSets}colorBarSet={colorBarSet}/>
      </div>
      <div className={styles["text-container"]}>
        <p style={{"fontSize": `${difficulty==='senior' ? "0.95rem" : ""}`}}>
          {text}
        </p>
        {isFinished && (<div className={styles["buttons"]}>
          <button onClick={handleNavigate1}>What kind of products are gathered?</button>
          <button onClick={handleNavigate2}>What is Phytoplankton?</button>
        </div>)}
      </div>
      <img src="/character_image/rodriguez.png" alt="Character Icon" className={styles["character-icon"]} />
    </div>
  );
};

export default Atmosphere;
