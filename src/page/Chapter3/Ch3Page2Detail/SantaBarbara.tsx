import { useContext } from 'react';
import { DifficultyContext } from '../../../context/DifficultyContext';
import styles from './index.module.css';
import { desc1 } from './SantaBarbara.json';

export const SantaBarbara = () => {
  const { difficulty } = useContext(DifficultyContext);
  return (
    <div className={styles['container']}>
      <h2>Mussel farm in Santa Barbara, California</h2>
      <img src="ch3page2_image/SantaBarbara/boat.png" alt="Boat" />
      <p>{desc1[difficulty]}</p>
      <img src="ch3page2_image/SantaBarbara/map.png" alt="Map" />
    </div>
  );
}