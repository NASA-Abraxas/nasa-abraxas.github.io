// src/contexts/AudioContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

type AudioContextType = {
  play: (src: string) => void;
  stop: () => void;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

interface AudioProviderProps {
    children: React.ReactNode;
}

export const AudioProvider: React.FC<AudioProviderProps> = ({ children }) => {
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

    const play = (src: string) => {
      if (audio) {
        console.log('audio', audio);
        audio.pause();
      }
      const newAudio = new Audio(src);
      newAudio.loop = true;
      newAudio.play();
      setAudio(newAudio);
    };
  
    const stop = () => {
      if (audio) {
        audio.pause();
        setAudio(null);
      }
    };
  
  
    return (
      <AudioContext.Provider value={{ play, stop }}>
        {children}
      </AudioContext.Provider>
    );
  };

  
  export const useAudio = (): AudioContextType => {
    const context = useContext(AudioContext);
    if (!context) {
      throw new Error('useAudio must be used within an AudioProvider');
    }
    return context;
  };