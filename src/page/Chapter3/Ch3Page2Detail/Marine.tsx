import { useContext } from 'react';
import { DifficultyContext } from '../../../context/DifficultyContext';
import styles from './index.module.css';
import { desc1 } from './Marine.json';

export const Marine = () => {
  const { difficulty } = useContext(DifficultyContext);

  return (
    <div className={styles['container']}>
      <h2>Satellite Retrievals of Marine Aerosols and Trace Gas Emissions</h2>
      <img src="ch3page2_image/Marine/map.png" alt="Map" />
      <p>{desc1[difficulty]}</p>
    </div>
  );
}