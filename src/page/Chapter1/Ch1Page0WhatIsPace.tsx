import { NextButton } from "../../component/NextButton";
import { OptionalRenderer } from "../../component/OptionalRenderer";
import styles from "./Ch1Page0WhatIsPace.module.css";

export const Ch1Page0WhatIsPace = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['logo-container']}>
        <img src="pace-logo.png" alt="PACE" />
      </div>
      <div className={styles['article']}>
        <div className={styles['character-container']}>
          <img src="character_image/rodriguez.png" alt="Rodriguez" />
        </div>
        <p>
          <OptionalRenderer difficulty="junior">
            PACE is NASA's Plankton, Aerosol, Cloud, ocean Ecosystem mission. It's a special project that's being developed right now and is planned to launch in 2024. PACE will help us continue and improve over 20 years of NASA's satellite observations of:<br />
            Global ocean biology: Studying tiny plants and animals in the ocean.<br />
            Aerosols: Tiny particles floating in the air.<br />
            Clouds: Masses of tiny water droplets or ice crystals in the sky.<br />
          </OptionalRenderer>
          <OptionalRenderer difficulty="intermediate">
            PACE is NASA's Plankton, Aerosol, Cloud, ocean Ecosystem mission, currently in the design phase of mission development. It is scheduled to launch in 2024, extending and improving NASA's over 20-year record of satellite observations of global ocean biology, aerosols (tiny particles suspended in the atmosphere), and clouds.
          </OptionalRenderer>
          <OptionalRenderer difficulty="senior">
            PACE stands for Plankton, Aerosol, Cloud, ocean Ecosystem mission, a cutting-edge initiative by NASA currently in the design phase of mission development. Scheduled for launch in 2024, PACE aims to extend and enhance NASA's over 20-year legacy of satellite observations concerning global ocean biology, aerosols (microscopic particles suspended in the atmosphere), and cloud dynamics.
          </OptionalRenderer>
        </p>
      </div>
      <NextButton delay={4000} />
    </div>
  )
}