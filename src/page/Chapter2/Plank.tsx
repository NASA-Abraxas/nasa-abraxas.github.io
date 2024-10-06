import React, { useContext } from "react";
import styles from './Plank.module.css';
import img1 from '/plankton/plank1.png'
import img2 from '/plankton/plank2.jpg'
import XButton from "../../component/XButton";
import { text1, text2, text3 } from './Plank.json'
import { DifficultyContext } from "../../context/DifficultyContext";

const Plank: React.FC = () => {
    const { difficulty } = useContext(DifficultyContext);
    return (
        <div className={styles["container"]}>
            <XButton></XButton>
            <div className={styles["title"]}>What is Aerosol?</div>
            <div className={styles["text"]}>
                {text1[difficulty]}
                <a href="https://pace.oceansciences.org/match.htm" target="_blank">quiz</a>
                {text2[difficulty]}
                <a href="https://pace.oceansciences.org/phytopia.htm" target="_blank">Phytopia</a>
                {text3[difficulty]}
            </div>
            <div className={styles["img"]}>
                <img src={img1} alt="plankton" style={{ "width": "100%" }} />
                <img src={img2} alt="plankton" style={{ "width": "100%" }} />
            </div>
        </div>
    )
}

export default Plank; 