import { useContext } from 'react';
import { DifficultyContext } from '../../../context/DifficultyContext';
import styles from './index.module.css';
import { desc1 } from './Wetland.json';

export const Wetland = () => {
  const { difficulty } = useContext(DifficultyContext);

  return (
    <div className={styles['container']}>
      <h2>Mapping Wetland Vegetation Parameters with PACE's Ocean Color Instrument</h2>
      <img src="ch3page2_image/Wetland/forest.jpg" alt="forest" />
      <p>{desc1[difficulty]}</p>
    </div>
  );
}