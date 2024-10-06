import { useContext } from 'react';
import { DifficultyContext } from '../../../context/DifficultyContext';
import styles from './index.module.css';
import { desc1, desc2 } from './Oklahoma.json';

export const Oklahoma = () => {
  const { difficulty } = useContext(DifficultyContext);

  return (
    <div className={styles['container']}>
      <h2>
        Toward Understanding the Effect of Aerosols on Regional Weather
        and Human Health in the Southern Great Plains
      </h2>
      <p>{desc1[difficulty]}</p>
      <img src="ch3page2_image/Oklahoma/map.jpg" alt="map" />
      <p>{desc2[difficulty]}</p>
    </div>
  );
}