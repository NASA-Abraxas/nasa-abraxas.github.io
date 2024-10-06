import React from "react";
import { OptionalRenderer } from "../../component/OptionalRenderer";
import XButton from "../../component/XButton";
import ZoomImage from "../../component/ZoomIn";
import styles from './Ocean.module.css';



const Ocean: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <XButton></XButton>
      <div className={styles["title"]}>What kind of products are gathered?</div>
      <div className={styles["text"]}>
        <OptionalRenderer difficulty="junior">
          Colors emitted from our ocean and its depths are known as water-leaving radiance. Important components of this signal are tiny plants and algae known as phytoplankton, a key indicator of our ocean's health.
        </OptionalRenderer>
        <OptionalRenderer difficulty="intermediate">
          Measurements of water-leaving radiance—the colors emitted from our ocean's surface and depths. Key components of this signal are phytoplankton, which serve as vital indicators of oceanic health and productivity.
        </OptionalRenderer>
        <OptionalRenderer difficulty="senior">
          The mission collects detailed measurements of water-leaving radiance—the spectral radiance emanating from the ocean surface. This signal encodes information about the constituents within the water column, including phytoplankton pigments, colored dissolved organic matter, and suspended particulates. These data are indispensable for quantifying primary productivity, elucidating carbon sequestration processes, and detecting phenomena such as harmful algal blooms.
        </OptionalRenderer>
      </div>
      <div className={styles["image-container"]}>
        <ZoomImage type="ocean" />
      </div>
    </div>
  )
}

export default Ocean; 