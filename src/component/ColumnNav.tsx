import styles from './ColumnNav.module.css'
import { AudioContext } from "../context/AudioContext";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const ColumnNav = () => {
  const { setSpace, setTyping } = useContext(AudioContext);
  const navigate = useNavigate();
  return (
    <nav className={styles['nav-container']}>
      <a onClick={() => {navigate('/page2'); setSpace(true); setTyping(false);}}><button>Title</button></a>
      <a onClick={() => {navigate('/page4'); setSpace(true);  setTyping(false);}}><button>Chapter 1</button></a>
      <a onClick={() => {navigate('/page8'); setSpace(true);  setTyping(false);}}><button>Chapter 2</button></a>
      <a onClick={() => {navigate('/page10'); setSpace(true);  setTyping(false);}}><button>Chapter 3</button></a>
      <a onClick={() => {navigate('/page14'); setSpace(true);  setTyping(false);}}><button>Quiz</button></a>
    </nav>
  )
}