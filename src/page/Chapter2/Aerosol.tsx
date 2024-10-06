import React from "react";
import HorizontalSlider from "../../component/HorizontalSlider";
import { OptionalRenderer } from "../../component/OptionalRenderer";
import ScrollIndicator from "../../component/ScrollIndicator";
import XButton from "../../component/XButton";
import slides from "./Aerosol.json";
import styles from './Aerosol.module.css';
import video from "/aerosol/aerosol.mp4?url";

const Aerosol: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <XButton></XButton>
      <div className={styles["title"]}>What is Aerosol?</div>
      <div className={styles["text"]}>
        <OptionalRenderer difficulty="junior">
          Aerosols are small solid or liquid particles suspended in the atmosphere. They affect climate and air quality by influencing Earth's energy balance through the scattering or absorption of sunlight.
        </OptionalRenderer>
        <OptionalRenderer difficulty="intermediate">
          Aerosols are small solid or liquid particles suspended in the atmosphere. They affect climate and air quality by influencing Earth's energy balance through the scattering or absorption of sunlight. Different types of aerosols have varying impacts:
        </OptionalRenderer>
        <OptionalRenderer difficulty="senior">
          Aerosols are diminutive solid or liquid particles suspended within the atmosphere, with sizes ranging from nanometers to several micrometers. They are pivotal in climate dynamics and air quality regulation, affecting Earth's energy equilibrium through the scattering and absorption of sunlight and terrestrial radiation. Aerosols also play a significant role in cloud microphysics, influencing cloud droplet formation and cloud optical properties. Various aerosol types have distinct sources, compositions, and climatic impacts:
        </OptionalRenderer>
      </div>
      <video controls className={styles["video"]}>
        <source src={video} type="video/mp4" />
      </video>
      <div className={styles["slider-container"]}>
        <HorizontalSlider slides={slides} />
      </div>
      <ScrollIndicator />
    </div>
  )
}

export default Aerosol; 