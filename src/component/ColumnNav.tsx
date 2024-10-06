import { useContext } from 'react';
import styles from './ColumnNav.module.css'
import { DifficultyContext } from '../context/DifficultyContext';
export const ColumnNav = () => {
  const { setDifficulty } = useContext(DifficultyContext);
  return (
    <nav className={styles['nav-container']}>
      <a href="/page4"><button>Chapter 1</button></a>
      <a href="/page8"><button>Chapter 2</button></a>
      <a href="/page10"><button>Chapter 3</button></a>

      <button onClick={() => setDifficulty('junior')}>Junior</button>
      <button onClick={() => setDifficulty('intermediate')}>Intermediate</button>
      <button onClick={() => setDifficulty('senior')}>Senior</button>
    </nav>
  )
}