import React, { useContext } from 'react';
import styles from './Ch2TopPage.module.css'; 
import { useNavigateSubPage } from '../../hook/useNavigateSubPage';
import GlobeWithSlider from '../../component/GlobeWithSlider';

import { Aerosol_Optical_Thickness, Cloud_Optical_Thickness_ICE, Cloud_Optical_Thickness_WATER, Cloud_Particle_Effective_Radius_ICE, Cloud_Particle_Effective_Radius_WATER  } from './filenames.json';
import { Aerosol_Optical_Thickness_, Cloud_Optical_Thickness_ICE_, Cloud_Optical_Thickness_WATER_, Cloud_Particle_Effective_Radius_ICE_, Cloud_Particle_Effective_Radius_WATER_  } from './labels.json';
import { DifficultyContext } from '../../context/DifficultyContext';


type AtmosphereProps = {
    text: string;
    isFinished: boolean;
}

interface ImageSets {
  [key: string]: string[];
}

interface LabelSets {
  [key: string]: string[];
}

const Atmosphere: React.FC<AtmosphereProps> = ({text="", isFinished=false}) => {
  const handleNavigate1 = useNavigateSubPage("atmo");
  const handleNavigate2 = useNavigateSubPage("aerosol");
  const { difficulty } = useContext(DifficultyContext);

  const imageSets: ImageSets = {
    "Aerosol Optical Thickness": Aerosol_Optical_Thickness,
    "Cloud Optical Thickness, ICE": Cloud_Optical_Thickness_ICE,
    "Cloud Optical Thickness, WATER": Cloud_Optical_Thickness_WATER,
    "Cloud Particle Effective Radius, ICE": Cloud_Particle_Effective_Radius_ICE,
    "Cloud Particle Effective Radius, WATER": Cloud_Particle_Effective_Radius_WATER,
  }

  const labelSets: LabelSets = {
    "Aerosol Optical Thickness": Aerosol_Optical_Thickness_,
    "Cloud Optical Thickness, ICE": Cloud_Optical_Thickness_ICE_,
    "Cloud Optical Thickness, WATER": Cloud_Optical_Thickness_WATER_,
    "Cloud Particle Effective Radius, ICE": Cloud_Particle_Effective_Radius_ICE_,
    "Cloud Particle Effective Radius, WATER": Cloud_Particle_Effective_Radius_WATER_,
  }

  const colorBarSet = {
    "Aerosol Optical Thickness":"/pace_data/colorbar/colorbar.png",
    "Cloud Optical Thickness, ICE":"/pace_data/colorbar/colorbar.png",
    "Cloud Optical Thickness, WATER":"/pace_data/colorbar/colorbar.png",
    "Cloud Particle Effective Radius, ICE":"/pace_data/colorbar/colorbar.png",
    "Cloud Particle Effective Radius, WATER":"/pace_data/colorbar/colorbar.png",
  }

  return (
    <div className={styles["container"]}>
      <h1>Atmosphere</h1>
      <div className={styles["image-container"]}>
        <GlobeWithSlider imageSets={imageSets} labelSets={labelSets} colorBarSet={colorBarSet}/>
      </div>
      <div className={styles["text-container"]}>
        <p style={{"fontSize": `${difficulty==='senior' ? "0.95rem" : ""}`, "lineHeight": `${difficulty==='senior' ? "1.5rem" : ""}`}}>
          {text}
        </p>
        {isFinished && (<div className={styles["buttons"]}>
          <button onClick={handleNavigate1}>What kind of products are gathered?</button>
          <button onClick={handleNavigate2}>What is Aerosol?</button>
        </div>)}
      </div>
      <img src="/character_image/rodriguez.png" alt="Character Icon" className={styles["character-icon"]} />
    </div>
  );
};

export default Atmosphere;
