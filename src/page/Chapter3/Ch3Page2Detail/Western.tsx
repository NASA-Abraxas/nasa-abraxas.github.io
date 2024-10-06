import { useContext } from 'react';
import { DifficultyContext } from '../../../context/DifficultyContext';
import { desc1, desc2 } from './Asia.json';
import styles from './index.module.css';

export const Western = () => {
  const { difficulty } = useContext(DifficultyContext);

  return (
    <div className={styles['container']}>
      <h2>Modeling Spatial and Temporal Exposure to Air Pollution in the Western U.S.</h2>
      <img src="ch3page2_image/Western/cloud.png" alt="cloud" />
      <p>{desc1[difficulty]}</p>
      <img src="ch3page2_image/Western/sunlight.png" alt="sunlight" />
      <p>{desc2[difficulty]}</p>
    </div>
  );
}