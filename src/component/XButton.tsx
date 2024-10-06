import React from 'react';

const CloseableDiv: React.FC = () => {
  return (
    
    <a href='/page9'>
    <button style={styles.closeButton}>
    ×
    </button>
    </a>
  );
};

// Inline styles for the component
const styles = {
  closeButton: {
    position: 'fixed' as 'fixed',
    top: '3vh',
    right: '3vw',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    textAlign: 'center' as 'center',
    zIndex: 1000,
    fontSize: '1.5rem',
    padding: '0',
    width: '5vh',
    height: '5vh',
    lineHeight: '1vh',
    borderRadius: 0,
    border: "2px solid white",
    fontWeight: 20,
  },
};

export default CloseableDiv;
