import { useContext } from 'react';
import { DifficultyContext } from '../../../context/DifficultyContext';
import styles from './index.module.css';
import { desc1, desc2 } from './Oregon.json';

export const Oregon = () => {
  const { difficulty } = useContext(DifficultyContext);

  return (
    <div className={styles['container']}>
      <h2>Coastal and Offshore Oregon Marine Mammal Ecological Study</h2>
      <p>{desc1[difficulty]}</p>
      <img src="ch3page2_image/Oregon/ooi.jpg" alt="OOI" />
      <p>{desc2[difficulty]}</p>
      <img src="ch3page2_image/Oregon/map.png" alt="Map" />
    </div>
  );
}