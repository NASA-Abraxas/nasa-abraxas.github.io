import React from "react"
import styles from './ParallaxWaves.module.css'

import wave1 from '/waves/wave1.png'
import wave2 from '/waves/wave2.png'
import wave3 from '/waves/wave3.png'
import wave4 from '/waves/wave4.png'
import wave5 from '/waves/wave5.png'
import wave6 from '/waves/wave6.png'
import wave7 from '/waves/wave7.png'

import cloud1 from '/waves/cloud1.png'
import cloud2 from '/waves/cloud2.png'
import cloud3 from '/waves/cloud3.png'
import cloud4 from '/waves/cloud4.png'

import lighthouse from '/waves/lighthouse.png'

const ParallaxWaves: React.FC = () => { 
    return (
        <div className={styles["wave-container"]}>
            <div className={styles["waves"]}>
                <div className={styles["parallax"]}>
                    <img src={wave1} alt="wave1" className={`${styles.wave} ${styles.wave1}`} />
                    <img src={wave2} alt="wave2" className={`${styles.wave} ${styles.wave2}`} />
                    <img src={wave3} alt="wave3" className={`${styles.wave} ${styles.wave3}`} />
                    <img src={wave4} alt="wave4" className={`${styles.wave} ${styles.wave4}`} />
                    <img src={wave5} alt="wave5" className={`${styles.wave} ${styles.wave5}`} />
                    <img src={wave6} alt="wave6" className={`${styles.wave} ${styles.wave6}`} /> 
                    <img src={wave7} alt="wave7" className={`${styles.wave} ${styles.wave7}`} />
                </div>
            </div>
            <div className={styles["clouds"]}>
                <div className={styles["parallax"]}>
                    <img src={cloud1} alt="cloud1" className={`${styles.cloud} ${styles.cloud1}`} />
                    <img src={cloud2} alt="cloud2" className={`${styles.cloud} ${styles.cloud2}`} />
                    <img src={cloud3} alt="cloud3" className={`${styles.cloud} ${styles.cloud3}`} />
                    <img src={cloud4} alt="cloud4" className={`${styles.cloud} ${styles.cloud4}`} />
                    {/* <img src={wave5} alt="wave5" className="wave wave5" />
                    <img src={wave6} alt="wave6" className="wave wave6" />
                    <img src={wave7} alt="wave7" className="wave wave7" /> */}
                </div>
            </div>
            <img src={lighthouse} alt="lighthouse" className={styles["lighthouse"]} />
        </div>
    )
}

export default ParallaxWaves

