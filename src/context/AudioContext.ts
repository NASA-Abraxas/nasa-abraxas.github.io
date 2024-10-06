import { createContext } from "react";

export type AudioContextType = {
  bubble: boolean;
  space: boolean;
  typing: boolean;
  wave: boolean;
  wind: boolean;
  setBubble: (bubble: boolean) => void;
  setSpace: (space: boolean) => void;
  setTyping: (typing: boolean) => void;
  setWave: (wave: boolean) => void;
  setWind: (wind: boolean) => void;
};

export const AudioContext = createContext<AudioContextType>({
  bubble: false,
  space: false,
  typing: false,
  wave: false,
  wind: false,
  setBubble: () => { },
  setSpace: () => { },
  setTyping: () => { },
  setWave: () => { },
  setWind: () => { },
});