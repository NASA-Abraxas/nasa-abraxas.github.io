import { useContext } from 'react';
import { DifficultyContext } from '../../../context/DifficultyContext';
import { desc1, desc2, desc3 } from './Asia.json';
import styles from './index.module.css';

export const Asia = () => {
  const { difficulty } = useContext(DifficultyContext);

  return (
    <div className={styles['container']}>
      <h2>Harmful Algal Bloom (HAB) and Red/Blue Tide Detection and Modeling for Coastal and Inland Waters in Asia</h2>
      <p>{desc1[difficulty]}</p>
      <img src="ch3page2_image/Asia/green ocean.png" alt="Green Ocean" />
      <p>{desc2[difficulty]}</p>
      <img src="ch3page2_image/Asia/red ocean.png" alt="Red Ocean" />
      <p>{desc3[difficulty]}</p>
      <img src="ch3page2_image/Asia/sky ocean.png" alt="Sky Ocean" />
    </div>
  );
}