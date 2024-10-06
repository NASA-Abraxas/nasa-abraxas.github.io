import { useContext, useEffect, useRef } from "react"
import { AudioContext } from "../context/AudioContext"

export const Audio = () => {
  const bubbleRef = useRef<HTMLAudioElement>(null);
  const spaceRef = useRef<HTMLAudioElement>(null);
  const typingRef = useRef<HTMLAudioElement>(null);
  const waveRef = useRef<HTMLAudioElement>(null);
  const windRef = useRef<HTMLAudioElement>(null);

  const { bubble, space, typing, wave, wind } = useContext(AudioContext);

  // fade in/out the audio when the context changes
  const fadeAudio = (audio: HTMLAudioElement, isPlaying: boolean) => {
    console.log(audio, isPlaying);
    if (audio === null) return;
    if (isPlaying) {
      audio.play();
      const interval = setInterval(() => {
        if (audio.volume >= 1) {
          audio.volume = 1;
          clearInterval(interval);
        }
        audio.volume = Math.min(1, audio.volume + 0.1);
      }, 20);
    } else {
      const interval = setInterval(() => {
        audio.volume = Math.max(0, audio.volume - 0.1);
        if (audio.volume <= 0) {
          audio.volume = 0;
          audio.pause();
          clearInterval(interval);
        }
      }, 20);
    }
  }

  useEffect(() => {
    fadeAudio(bubbleRef.current!, bubble);
  }, [bubble]);

  useEffect(() => {
    fadeAudio(spaceRef.current!, space);
  }, [space]);

  useEffect(() => {
    fadeAudio(typingRef.current!, typing);
  }, [typing]);

  useEffect(() => {
    fadeAudio(waveRef.current!, wave);
  }, [wave]);

  useEffect(() => {
    fadeAudio(windRef.current!, wind);
  }, [wind]);


  return (
    <div style={{ display: "none" }}>
      <audio ref={bubbleRef} src="bgm/bubble.mp3" controls loop />
      <audio ref={spaceRef} src="bgm/space.mp3" controls loop />
      <audio ref={typingRef} src="bgm/typing.mp3" controls loop />
      <audio ref={waveRef} src="bgm/wave.mp3" controls loop />
      <audio ref={windRef} src="bgm/wind.mp3" controls loop />
    </div>
  )
}