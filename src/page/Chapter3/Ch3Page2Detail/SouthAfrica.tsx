import { useContext } from 'react';
import { DifficultyContext } from '../../../context/DifficultyContext';
import styles from './index.module.css';
import { desc1, desc2 } from './SouthAfrica.json';

export const SouthAfrica = () => {
  const { difficulty } = useContext(DifficultyContext);

  return (
    <div className={styles['container']}>
      <h2>Hyperspectral Satellite Radiometry for HAB and Phytoplankton Functional Type Identification in Support of South African Marine Industries</h2>
      <p>{desc1[difficulty]}</p>
      <img src="ch3page2_image/SouthAfrica/ocims.png" alt="OCIMS" />
      <p>{desc2[difficulty]}</p>
      <img src="ch3page2_image/SouthAfrica/map.png" alt="map" />
    </div>
  );
}