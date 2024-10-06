import React, { useEffect } from 'react';
import { useTextAnimation } from '../../hook/useTextAnimation';
import styles from './CheckAnswers.module.css';
import { Fade } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';

const CheckAnswers: React.FC = () => {
    const navigate = useNavigate();
    const textAnimation1 = useTextAnimation("Discover the fate of Aquaferia based on your score!", 30);
    useEffect(() => {
        setTimeout(() => {
            textAnimation1.startAnimation();
        }
        , 1000);
    }, []);
    return (
        <div className={styles['container']}>
            <div className={styles['textBox']}>
                {textAnimation1.text}
            </div>
            <div className={styles['button-container']}>
                <Fade delay={3000} duration={500}>
                    <button className={styles['button']} onClick={() => {navigate('/page17/results')}}>NEXT</button>
                </Fade>
            </div>
        </div>
    )
}

export default CheckAnswers;