import { gsap } from 'gsap';
import { useContext, useEffect, useRef, useState } from 'react';
import Globe, { GlobeMethods } from 'react-globe.gl';
import BlinkingBorder from '../../component/BlinkingBorder';
import { DifficultyContext, DifficultyType } from '../../context/DifficultyContext';
import { useNavigateNextPage } from "../../hook/useNavigateNextPage";
import { useTextAnimation } from '../../hook/useTextAnimation';
import styles from './Globe.module.css';
import MarkdownTest from './MarkdownTest';



const EarthGlobe = () => {
  const handleNext = useNavigateNextPage();

  const globeEl = useRef<GlobeMethods>();
  const [globeVisible, setGlobeVisible] = useState(false);
  const [missionTextVisible, setMissionTextVisible] = useState(true);
  const [paceTextVisible, setPaceTextVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const missionTextAnim = useTextAnimation('MISSION ASSIGNED', 50, () => {
    setPaceTextVisible(true);
    setGlobeVisible(true);
  });

  const [isTeacherInstructionVisible, setIsTeacherInstructionVisible] = useState(false);

  const [radioValue, setRadioValue] = useState<DifficultyType>('senior');
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(event.target.value as DifficultyType);
  };
  const { setDifficulty } = useContext(DifficultyContext);


  // globe settings
  useEffect(() => {
    const globe = globeEl.current;
    if (globe) {
      const controls = globe.controls();
      const camera = globe.camera();

      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.3;
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.enableRotate = false;
      controls.enabled = false;

      // Set initial camera position (zoomed out)
      camera.position.set(0, 0, 800); // Zoomed-out view
      controls.target.set(0, 0, 0); // Looking at the globe's center
    }
  }, [globeVisible, isTeacherInstructionVisible]);

  // Function to trigger the zoom-in animation
  const handleZoomIn = () => {
    setDifficulty(radioValue);

    const globe = globeEl.current;
    setMissionTextVisible(false);
    setPaceTextVisible(false);
    setButtonVisible(false);
    if (globe) {
      const controls = globe.controls();
      const camera = globe.camera();

      // Animate the camera to the zoomed-in view
      gsap.to(camera.position, {
        duration: 2,
        x: 0,
        y: -50,
        z: 120,
        ease: "power2.inOut",
        onUpdate: () => {
          camera.lookAt(controls.target);
        }
      });

      // Animate the controls target
      gsap.to(controls.target, {
        duration: 2,
        x: 0,
        y: 300,
        z: 0,
        ease: "power2.inOut",
        onUpdate: () => {
          controls.update();
        }
      });
    }

    const nextScreen = setTimeout(() => {
      handleNext();
    }, 1500);
    return () => clearTimeout(nextScreen);
  };
  // end of globe settings

  useEffect(() => {
    missionTextAnim.startAnimation();
  }, []);


  if (isTeacherInstructionVisible) {
    return (
      <div className={styles['markdown-container']}>
        <MarkdownTest />
        <button onClick={() => setIsTeacherInstructionVisible(false)}>X</button>
      </div>
    )
  }

  return (
    <>
      <div className={styles['mission-container']}>
        {missionTextVisible && (<div className={styles["mission-text"]}>{missionTextAnim.text}</div>)}
      </div>
      {paceTextVisible && (<div className={styles['pace-container']}>
        <BlinkingBorder horizontalMargin={70} verticalMargin={20} borderThickness={3} cornerSize={20}>
          <>
            <div className={styles['pace-text']}>NASA's PACE Project</div>
            <div className={styles['d-text']}>Monitoring Earth's Oceans and Atmosphere.</div>
          </>
        </BlinkingBorder>
      </div>)}
      <div className={styles['globe-container']}>
        {globeVisible && (<Globe
          ref={globeEl}
          globeImageUrl="/earth_hires.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundColor="rgba(0,0,0,0)"
        />)}
      </div>
      <div className={styles['button-container']}>
        {buttonVisible && (<>
          <fieldset className={styles['radio-container']}>
            <label>
              <input type="radio" name="difficulty" value="junior" defaultChecked={radioValue === "junior"} onChange={handleRadioChange} />
              <span>Junior</span>
            </label>
            <label>
              <input type="radio" name="difficulty" value="intermediate" defaultChecked={radioValue === "intermediate"} onChange={handleRadioChange} />
              <span>Intermediate</span>
            </label>
            <label>
              <input type="radio" name="difficulty" value="senior" defaultChecked={radioValue === "senior"} onChange={handleRadioChange} />
              <span>Senior</span>
            </label>
          </fieldset>

          <button onClick={handleZoomIn}>START JOURNEY</button>

          <div className={styles['teacher-button-container']}>
            <button onClick={() => setIsTeacherInstructionVisible(true)}>Teacher Instruction</button>
          </div>
        </>)}
      </div>
    </>
  );
};

export default EarthGlobe;