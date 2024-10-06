// ArrowButton.tsx
import React from 'react';
import styles from './ArrowButton.module.css';

type ArrowButtonProps = {
  text: string;
  direction: 'up' | 'down';
  onClick: () => void;
};

const ArrowButton: React.FC<ArrowButtonProps> = ({ text, direction, onClick }) => {
  return (
    <button className={styles["arrow-button"]} onClick={onClick}>
      {text}
      <span className={styles[`arrow-${direction}`]} />
    </button>
  );
};

export default ArrowButton;
