import React from "react";
import { OptionalRenderer } from "../../component/OptionalRenderer";
import XButton from "../../component/XButton";
import ZoomImage from "../../component/ZoomIn";
import styles from './Atmo.module.css';


const Atmo: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <XButton></XButton>
      <div className={styles["title"]}>What kind of products are gathered?</div>
      <div className={styles["text"]}>
        <OptionalRenderer difficulty="junior">
          This encompasses the very top of our ocean and the sky above. It includes clouds and tiny suspended particles—such as wildfire smoke and volcanic ash—known as aerosols.
        </OptionalRenderer>
        <OptionalRenderer difficulty="intermediate">
          This encompasses observations of the upper ocean surface and the atmosphere above it, including clouds and aerosols—tiny suspended particles like wildfire smoke and volcanic ash.
        </OptionalRenderer>
        <OptionalRenderer difficulty="senior">
          PACE collects an array of atmospheric data encompassing observations of the upper ocean surface and the superjacent atmosphere. This includes detailed measurements of clouds and aerosols—minute suspended particles such as smoke from wildfires, ash from volcanic activity, and pollutants from industrial sources.
        </OptionalRenderer>
      </div>
      <div className={styles["image-container"]}>
        <ZoomImage type="atmo" />
      </div>
    </div>
  )
}

export default Atmo; 