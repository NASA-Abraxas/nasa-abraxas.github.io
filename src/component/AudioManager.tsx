// src/components/AudioManager.tsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAudio } from '../context/AudioContext';
import { audioConfig } from './audioConfig';

const AudioManager: React.FC = () => {
  const location = useLocation();
  const { play, stop } = useAudio();

  useEffect(() => {
    const currentPath = location.pathname;
    const musicSrc = audioConfig[currentPath];

    const defaultMusic = '/bgm/space.mp3';

    if (musicSrc) {
      play(musicSrc);
    } else if (defaultMusic && musicSrc !== 'none') {
      play(defaultMusic);
    } else {
      stop();
}
  }, [location]);

  return null;
};

export default AudioManager;
