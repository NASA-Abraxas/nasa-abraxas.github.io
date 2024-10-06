import React, { useEffect } from 'react';
import BlinkingBorder from '../../component/BlinkingBorder';
import styles from './GamePage0Intro.module.css';
import { Fade } from 'react-awesome-reveal';
import { useTextAnimation } from '../../hook/useTextAnimation';
import { useNavigateNextPage } from '../../hook/useNavigateNextPage';

export const GamePage0Intro: React.FC = () => {
    const handleNextPage = useNavigateNextPage();

    const text2 = useTextAnimation("REVIEW QUIZ GAME", 30);
    const text1 = useTextAnimation("E-626's RETURN", 40,
        () => setTimeout(() => {
          text2.startAnimation();
        }, 50));
    useEffect(() => { // Start the first text animation when the component is mounted
        setTimeout(() => {
            text1.startAnimation();
        }, 1000);
    }, []);
    
    return (
        <>
            <div className={styles["start-container"]}>
                <BlinkingBorder horizontalMargin={70} verticalMargin={20} borderThickness={3} cornerSize={20}>
                    <>
                        <div className={styles['start-text']}>{text1.text}</div>
                        <div className={styles['d-text']}>{text2.text}</div>
                    </>
                </BlinkingBorder>
            </div>
            <div className={styles['start-button-container']}>
                <Fade delay={3000} duration={1000}>
                    <button className={styles['start-button']} onClick={handleNextPage}>PRESS START</button>
                </Fade>
            </div>
        </>
    );
}